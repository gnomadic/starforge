// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IPlanetStatsSystem} from "./interfaces/IPlanetStatsSystem.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// import "@openzeppelin/contracts/access/AccessControl.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

import {ISystem, ISystemController} from "./interfaces/ISystem.sol";

contract PlanetStatsSystem is IPlanetStatsSystem, Ownable, ISystem {
    uint256 private _nonce;

    struct Stats {
        // uint8 temperature;
        // uint8 water;
        // uint8 biomass;
        // uint8 atmosphere;
        // uint8 density;
        // uint8 weird;
        uint8 entropy;
        uint8 rarity;
        uint8[6] stats;
    }

    mapping(uint256 => Stats) private _stats;

    address planetAddress;

    //authority;
    //sustainability;
    //resiliency;
    //literacy;
    //creativity;
    //culture;

    // bytes32 public constant CASTLE_ROLE = keccak256("CASTLE_ROLE");
    // bytes32 public constant BUILDER_ROLE = keccak256("BUILDER_ROLE");
    // bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");

    mapping(uint256 => uint8[6]) private _statsArray;
    mapping(uint256 => uint8) private _rarity;

    //s-tier, legendary, epic, rare, uncommon, common
    //500 s-tier, 2000 legendary, 3000 epic, 5000 rare, 15000 uncommon, endless common
    // uint16[] private _genPopulation = [500, 2000, 5000, 10000, 25000];
    //0 s-tier, 1 legendary, 4 epic, 8 rare, 12 uncommon, 75 common
    uint8[6] private _rarityOdds = [0, 1, 5, 13, 25, 75];
    uint8[6] private _startingStats = [82, 80, 78, 76, 74, 72];
    // uint256[6] private _mintPrices = [150 * 10**18, 100 * 10**18, 80 * 10**18, 60 * 10**18, 40 * 10**18, 20 * 10**18];
    // uint256[6] private _mintPrices = [
    //     50 * 10 ** 18,
    //     40 * 10 ** 18,
    //     30 * 10 ** 18,
    //     20 * 10 ** 18,
    //     15 * 10 ** 18,
    //     10 * 10 ** 18
    // ];

    uint256 private _mintPrice = 10 * 10**18;
    // uint8 private _currentGen = 0;

    constructor(address _planetAddress)  Ownable(_msgSender()) {
        // _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
        // _grantRole(CASTLE_ROLE, skyCastleAddress);
        // _grantRole(BUILDER_ROLE, _msgSender());
        // _grantRole(UPGRADER_ROLE, _msgSender());

        // _skyCastle = ISkyCastle(skyCastleAddress);

        planetAddress = _planetAddress;
    }

    function calculateStatsForMint(
        uint256 tokenId
    ) internal {
 
        uint8 randomNumber = getRandom(100, tokenId);
        uint8 rarity = 5;
        uint8 rateCount = 0;

        for (uint8 index = 0; index < _rarityOdds.length; index++) {
            if (randomNumber <= rateCount + (_rarityOdds[index])) {
                rarity = index;
                break;
            } else {
                rateCount = rateCount + _rarityOdds[index];
            }
        }
        _rarity[tokenId] = rarity;
        _statsArray[tokenId] = getStartingStats(tokenId, rarity);
        _stats[tokenId].stats = getStartingStats(tokenId, rarity);
        _stats[tokenId].rarity = rarity;
        _stats[tokenId].entropy = 0;
    }

    function getStartingStats(
        uint256 tokenId,
        uint8 gen
    ) internal returns (uint8[6] memory) {
        uint8 randomNumber;
        uint8 points = _startingStats[gen];
        uint8[6] memory stats;

        while (points > 0) {
            randomNumber = getRandom(6, points);
            // if (_statsArray[tokenId][randomNumber] < 20) {
            if (stats[randomNumber] < 20) {
                stats[randomNumber] = stats[randomNumber] + 1;
                points = points - 1;
            }
        }
        return stats;
    }

    function updateMintRules(
        uint256 newPrice,
        uint8[6] memory rollOdds
    ) external onlyOwner {
        _mintPrice = newPrice;
        _rarityOdds = rollOdds;
    }

    // function getCurrentBaseRarity() public view returns (uint8) {
    //     return _currentGen;
    // }

    function getRarityOdds() public view returns (uint8[6] memory) {
        return _rarityOdds;
    }

    function getMintPrice() public view override returns (uint256) {
        return _mintPrice;
    }



    function getStats(uint256 tokenId) public view returns (Stats memory) {
        // return _statsArray[tokenId];
        return _stats[tokenId];
    }


    function getRandom(
        uint8 outOf,
        uint256 first
    ) internal virtual returns (uint8) {
        return
            uint8(
                uint256(
                    keccak256(
                        abi.encodePacked(getNonce(), first, block.timestamp)
                    )
                ) % outOf
            );
    }

    function getNonce() internal returns (uint256) {
        uint256 nonce = _nonce;
        _nonce = _nonce + 1;
        return nonce;
    }

    function init(ISystemController controller, uint256 tokenId) external override {
        calculateStatsForMint(tokenId);
    }

    function sync(uint256 tokenId) external override {}


}
