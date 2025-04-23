// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";
import {console} from "hardhat/console.sol";

// interface IPlanetStatsEntity {

//     // function getMintPrice() external view returns (uint256);
//     // function setMintPrice(uint256 newPrice) external;

//     function getRarityOdds() external view returns (uint8[5] memory);
//     function setRarityOdds(uint8[5] memory newOdds) external;

//     function getStats(uint256 tokenId) external view returns (uint16[10] memory);
//     function setStats(uint256 tokenId, uint16[10] calldata newStats) external;

//     function getStartingStats(uint8 gen) external returns (uint8);
// }

contract PlanetStatsEntity {
    //let's sketch it out
    // so we map a token id to a stat set, which is a string -> array of numbers.
    // when it's time to initialize that stat set, we check the startingStatSetValues array
    // if it's numbers we use that as the value - but some number indicates it's gatcha
    // and if it's gatcha, for the stat set, we grab the rarity odds and roll a rarity
    // and then based on that rarity, for that stat set, we get the number of points to distribute randomly
    // and then we distribute them

    mapping(uint256 => mapping(string => uint16[])) private _statSets; // tokenId => statSetName => stat array
    mapping(string => uint16[]) private _startingStatSetValues; // statSetName => starting points, if it's 65535 it's gatcha
    mapping(string => uint8[]) private _statSetPointsAvailable; // statSetName => number of points to distribute based on rarity
    mapping(string => string[]) private _statSetPointNames; // statSetName => stat names
    uint8[] private _statSetRarityOdds;

    string[] private _statSetNames;


    IScenario private _scenario;
    address private system;

    constructor() {}

    bool initialized = false;

    function initialize(IScenario scenario, address _system) external {
        require(!initialized, "Already initialized");
        initialized = true;
        _scenario = scenario;
        system = _system;
    }

    function setStatSetRarityOdds(
        uint8[] calldata rarityOdds
    ) external {
        if (msg.sender != _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        _statSetRarityOdds = rarityOdds;
    }

    function createGatchaStatSet(
        string memory statSetName,
        uint16[] calldata startingPoints,
        uint8[] calldata points,
        string[] memory pointNames
    ) external {
        if (msg.sender != _scenario.getAdmin()) {
            console.log("Not scenario admin");
            revert NotScenarioAdmin();
        }
        if (points.length != _statSetRarityOdds.length) {
            // TODO maybe a more specific error
            console.log("Starting points length does not match rarity odds length");
            revert NotScenarioAdmin();
        }
        _startingStatSetValues[statSetName] = startingPoints;
        _statSetPointsAvailable[statSetName] = points;
        _statSetPointNames[statSetName] = pointNames;

        _statSetNames.push(statSetName);
    }

    function createStatSet(
        string memory statSetName,
        uint16[] calldata startingPoints,
                string[] memory pointNames


    ) external {
        if (msg.sender != _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        _startingStatSetValues[statSetName] = startingPoints;
        _statSetPointNames[statSetName] = pointNames;

        _statSetNames.push(statSetName);
    }




    function getStatSetNames() external view returns (string[] memory) {
        return _statSetNames;
    }

    function getAvailablePoints(string memory statSetName) external view returns (uint8[] memory) {
        return _statSetPointsAvailable[statSetName];
    }

    function getStartingPoints(string memory statSetName) external view returns (uint16[] memory) {
        return _startingStatSetValues[statSetName];
    }

    function getStatSetPointNames(
        string memory statSetName
    ) external view returns (string[] memory) {
        return _statSetPointNames[statSetName];
    }

    function setStatSet(
        uint256 tokenId,
        string memory statSetName,
        uint16[] calldata newStats
    ) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }
        _statSets[tokenId][statSetName] = newStats;
    }

    function getStatSetRarityOdds() external view returns (uint8[] memory) {
        return _statSetRarityOdds;
    }

    function getStatSet(
        uint256 tokenId,
        string memory statSetName
    ) external view returns (uint16[] memory) {
        return _statSets[tokenId][statSetName];
    }







    error NotScenarioAdmin();
}
