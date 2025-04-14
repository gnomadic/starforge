// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import {ISystem, ISystemController} from "./interfaces/ISystem.sol";
import {IPlanetStatsEntity} from "../entities/PlanetStatsEntity.sol";
import {IScenario} from "../Scenario.sol";
import {PlanetStatsEntity} from "../entities/PlanetStatsEntity.sol";

interface IPlanetStatsSystem {
    // function calculateStatsForMint(uint256 tokenId) external;
    // function getMintPrice() external view returns (uint256);
}

contract PlanetStatsSystem is IPlanetStatsSystem, Ownable, ISystem {
    address planetAddress;
    uint256 _nonce;

    constructor(address _planetAddress) Ownable(_msgSender()) {
        planetAddress = _planetAddress;
    }

    function calculateStatsForMint(
        IScenario scenario,
        uint256 tokenId
    ) internal {
        uint8 randomNumber = getRandom(100, tokenId);

        address entityAddress = scenario.getEntity(address(this));
        IPlanetStatsEntity entity = IPlanetStatsEntity(entityAddress);

        uint8[5] memory odds = entity.getRarityOdds();
        uint8 rarity = 5;
        uint8 rateCount = 0;

        for (uint8 index = 0; index < odds.length; index++) {
            if (randomNumber <= rateCount + (odds[index])) {
                rarity = index;
                break;
            } else {
                rateCount = rateCount + odds[index];
            }
        }

        uint16[10] memory stats = getStartingStats(scenario, tokenId, rarity);
        entity.setStats(tokenId, stats);
        // IPlanetStatsEntity(planetStatsEntity).setStats(tokenId, stats, rarity, 0);
    }

    function getStartingStats(
        IScenario scenario,
        uint256 tokenId,
        uint8 gen
    ) internal returns (uint16[10] memory) {
        uint8 randomNumber;

        // uint8 points = _startingStats[gen];
        address entityAddress = scenario.getEntity(address(this));
        IPlanetStatsEntity entity = IPlanetStatsEntity(entityAddress);

        uint8 points = entity.getStartingStats(gen);
        uint16[10] memory stats;

        while (points > 0) {
            randomNumber = getRandom(6, points);
            if (stats[randomNumber] < 20) {
                stats[randomNumber] = stats[randomNumber] + 1;
                points = points - 1;
            }
        }
        return stats;
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
        // controller.scenarios.

        calculateStatsForMint(scenario, tokenId);
    }

    function sync(uint256 tokenId) external override {}

    function getNonce() internal returns (uint256) {
        uint256 current = _nonce;
        _nonce++;
        return current;
    }

    function setNonce(uint256 newValue) internal {
        _nonce = newValue;
    }

    function activateEntity(IScenario scenario) external override returns (address) {
        // TODO replace this with proxy clone.
        PlanetStatsEntity entityAddress = new PlanetStatsEntity();

        entityAddress.initialize(scenario);
        return address(entityAddress);
    }
}
