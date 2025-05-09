// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {PlanetStatsEntity} from "../entities/PlanetStatsEntity.sol";

// import {console} from "forge-std/console.sol";

// import {console} from "hardhat/console.sol";

contract PlanetStatsSystem is ISystem {
    uint256 _nonce;

    bool registered = false;
    address private _systemController;

    function registerSystem(address systemController) external {
        if (registered) {
            revert AlreadyRegistered();
        }
        registered = true;
        _systemController = systemController;
    }

    error AlreadyRegistered();

    function calculateStatsForMint(
        IScenario scenario,
        uint256 tokenId
    ) internal {
        uint8 randomNumber = getRandom(100, tokenId);

        address entityAddress = scenario.getEntity(address(this));
        PlanetStatsEntity entity = PlanetStatsEntity(entityAddress);
        // console.log(
        //     "PlanetStatsSystem: calculateStatsForMint: entityAddress: %s and tokenId: %s",
        //     entityAddress,
        //     tokenId
        // );

        string[] memory statSetNames = entity.getStatSetNames();

        // uint8 randomNumber;
        uint8[] memory odds = entity.getStatSetRarityOdds();
        uint8 rarity = uint8(odds.length);
        uint8 rateCount = 0;

        for (uint8 index = 0; index < odds.length; index++) {
            if (randomNumber <= rateCount + (odds[index])) {
                rarity = index;
                break;
            } else {
                rateCount = rateCount + odds[index];
            }
        }

        uint16[] memory raritySet = new uint16[](1);
        raritySet[0] = uint16(rarity);

        // console.log("setting rarity %s", rarity);
        entity.setStatSet(tokenId, "RARITY", raritySet);

        for (uint256 i = 0; i < statSetNames.length; i++) {
            string memory statSetName = statSetNames[i];
            uint16 firstTest = entity.getStartingPoints(statSetName)[0];
            uint16[] memory stats;

            if (firstTest == 65535) {
                // gatcha set

                stats = getStartingStatsForGatchaSet(
                    entity,
                    tokenId,
                    statSetName,
                    rarity
                );
            } else {
                // default set
                stats = getStartingStatsForDefaultSet(entity, statSetName);
            }

            // console.log("setting stats %s", statSetName);
            entity.setStatSet(tokenId, statSetName, stats);
        }
    }

    function getStartingStatsForGatchaSet(
        PlanetStatsEntity entity,
        uint256 tokenId,
        string memory statSetName,
        uint8 rarity
    ) internal returns (uint16[] memory) {
        uint8 randomNumber;

        uint8 points = entity.getAvailablePoints(statSetName)[rarity - 1];
        uint16[] memory stats = entity.getStartingPoints(statSetName);
        for (uint256 i = 0; i < stats.length; i++) {
            stats[i] = 0;
        }

        while (points > 0) {
            randomNumber = getRandom(uint8(stats.length), tokenId + points);
            if (stats[randomNumber] < 20) {
                stats[randomNumber] = stats[randomNumber] + 1;
                points = points - 1;
            }
        }
        return stats;
    }

    function getStartingStatsForDefaultSet(
        PlanetStatsEntity entity,
        string memory statSetName
    ) internal view returns (uint16[] memory) {
        return entity.getStartingPoints(statSetName);
    }

    function getRandom(
        uint8 outOf,
        uint256 first
    ) internal virtual returns (uint8) {
        uint256 nonce = getNonce();
        return
            uint8(
                uint256(
                    keccak256(abi.encodePacked(nonce, first, block.timestamp))
                ) % outOf
            );
    }

    function init(
        ISystemController controller,
        IScenario scenario,
        uint256 tokenId
    ) external override {
        // TODO add permissiong here
        // console.log("PlanetStatsSystem: init");

        calculateStatsForMint(scenario, tokenId);
    }

    function sync(uint256 tokenId) external override {}

    function getNonce() internal returns (uint256) {
        uint256 current = _nonce;
        _nonce++;
        return current;
    }

    function activateEntity(
        IScenario scenario
    ) external override returns (address) {
        address current = scenario.getEntity(address(this));
        if (current != address(0)) {
            return current;
        }

        // TODO replace this with proxy clone.
        PlanetStatsEntity entityAddress = new PlanetStatsEntity();

        entityAddress.initialize(scenario, address(this));
        // console.log(
        //     "PlanetStatsSystem: activateEntity: entityAddress: %s",
        //     address(entityAddress)
        // );
        return address(entityAddress);
    }

    function getId() external pure returns (string memory) {
        return "STAT";
    }

    function checkSkill(
        IScenario scenario,
        uint256 tokenId,
        string memory skillSetName,
        uint8 skillSetIndex,
        uint16 skillSetRequirement
    ) external view returns (bool) {
        PlanetStatsEntity entity = PlanetStatsEntity(
            scenario.getEntity(address(this))
        );
        if (bytes(skillSetName).length == 0) {
            return true;
        }

        // console.log("skill check %s", entity.checkSkill(tokenId, skillSetName, skillSetIndex, skillSetRequirement));
        return
            entity.checkSkill(
                tokenId,
                skillSetName,
                skillSetIndex,
                skillSetRequirement
            );
    }

    function boostSkill(
        IScenario scenario,
        uint256 tokenId,
        string memory skillSetName,
        uint8 skillSetIndex,
        uint16 amount
    ) external onlySystemAndAdmin(scenario) {
        PlanetStatsEntity entity = PlanetStatsEntity(
            scenario.getEntity(address(this))
        );

        entity.boostSkill(tokenId, skillSetName, skillSetIndex, amount);
    }

    error NotScenario();

    modifier onlySystemAndAdmin(IScenario _scenario) {
        if (
            ISystemController(_systemController).isSystem(msg.sender) ==
            false &&
            msg.sender != _scenario.getAdmin()
        ) {
            revert NotSystem();
        }
        _;
    }

    error NotSystem();
}
