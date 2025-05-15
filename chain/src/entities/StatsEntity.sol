// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";

// import {console} from "hardhat/console.sol";
// import {console} from "forge-std/console.sol";

struct StatSet {
    // uint16[10] stats;
    uint16[10] startingPoints;
    uint8[10] pointsAvailable;
    bytes32[10] statNames;
    uint16[10] maxValues;
}

interface IStatsEntity {
    function getStatSet(
        uint256 tokenId,
        bytes32 statSetName
    ) external view returns (uint16[] memory);

    function setStatSet(
        uint256 tokenId,
        bytes32 statSetName,
        uint16[10] calldata newStats
    ) external;

    function getStatSetNames() external view returns (bytes32[] memory);

    function getStatSetRarityOdds() external view returns (uint8[10] memory);

    function getStartingPoints(
        bytes32 statSetName
    ) external view returns (uint16[10] memory);

    function getAvailablePoints(
        bytes32 statSetName
    ) external view returns (uint8[10] memory);

    function initialize(IScenario scenario, address system) external;

    function checkSkill(
        uint256 tokenId,
        bytes32 skillSetName,
        uint8 skillSetIndex,
        uint16 skillSetRequirement
    ) external view returns (bool);

    function boostSkill(
        uint256 tokenId,
        bytes32 skillSetName,
        uint8 skillSetIndex,
        uint16 amount
    ) external;
}

contract StatsEntity is IStatsEntity {
    //let's sketch it out
    // so we map a token id to a stat set, which is a string -> array of numbers.
    // when it's time to initialize that stat set, we check the startingStatSetValues array
    // if it's numbers we use that as the value - but some number indicates it's gatcha
    // and if it's gatcha, for the stat set, we grab the rarity odds and roll a rarity
    // and then based on that rarity, for that stat set, we get the number of points to distribute randomly
    // and then we distribute them

    mapping(uint256 => mapping(bytes32 => uint16[])) private _statSets; // tokenId => statSetName => stat array

    mapping(bytes32 => StatSet) private _statSetsData; // statSetName => StatSet

    // mapping(bytes32 => uint16[]) private _startingStatSetValues; // statSetName => starting points, if it's 65535 it's gatcha
    // mapping(bytes32 => uint8[]) private _statSetPointsAvailable; // statSetName => number of points to distribute based on rarity
    // mapping(bytes32 => string[]) private _statSetPointNames; // statSetName => stat names
    // mapping(bytes32 => uint16[]) private _statSetMaxValues; // statSetName => max values for each stat
    uint8[10] private _statSetRarityOdds;

    bytes32[] private _statSetNames;

    IScenario private _scenario;
    address private system;

    bool initialized;

    function initialize(IScenario scenario, address _system) external {
        require(!initialized, "Already initialized");
        initialized = true;
        _scenario = scenario;
        system = _system;
    }

    function setStatSetRarityOdds(uint8[10] calldata rarityOdds) external {
        if (msg.sender != _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        _statSetRarityOdds = rarityOdds;
    }

    function createGatchaStatSet(
        bytes32 statSetName,
        uint16[10] calldata startingPoints,
        uint8[10] calldata points,
        uint16[10] calldata maxValues,
        bytes32[10] memory pointNames
    ) external {
        if (msg.sender != _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        if (points.length != _statSetRarityOdds.length) {
            revert InvalidStatSet();
        }
        _statSetsData[statSetName].startingPoints = startingPoints;
        _statSetsData[statSetName].pointsAvailable = points;
        _statSetsData[statSetName].maxValues = maxValues;
        _statSetsData[statSetName].statNames = pointNames;
        // _startingStatSetValues[statSetName] = startingPoints;
        // _statSetPointsAvailable[statSetName] = points;
        // _statSetPointNames[statSetName] = pointNames;
        // _statSetMaxValues[statSetName] = maxValues;

        _statSetNames.push(statSetName);
    }

    function createStatSet(
        bytes32 statSetName,
        uint16[10] calldata startingPoints,
        uint16[10] calldata maxValues,
        bytes32[10] memory pointNames
    ) external {
        if (msg.sender != _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        _statSetsData[statSetName].startingPoints = startingPoints;
        _statSetsData[statSetName].maxValues = maxValues;
        _statSetsData[statSetName].statNames = pointNames;

        // _startingStatSetValues[statSetName] = startingPoints;
        // _statSetPointNames[statSetName] = pointNames;
        // _statSetMaxValues[statSetName] = maxValues;

        _statSetNames.push(statSetName);
    }

    function getStatSetNames() external view returns (bytes32[] memory) {
        return _statSetNames;
    }

    function getAvailablePoints(
        bytes32 statSetName
    ) external view returns (uint8[10] memory) {
        // return _statSetPointsAvailable[statSetName];
        return _statSetsData[statSetName].pointsAvailable;
    }

    function getStartingPoints(
        bytes32 statSetName
    ) external view returns (uint16[10] memory) {
        // return _startingStatSetValues[statSetName];
        return _statSetsData[statSetName].startingPoints;
    }

    function getStatSetPointNames(
        bytes32 statSetName
    ) external view returns (bytes32[10] memory) {
        // return _statSetPointNames[statSetName];
        return _statSetsData[statSetName].statNames;
    }

    function getStatSetMaxValues(
        bytes32 statSetName
    ) external view returns (uint16[10] memory) {
        // return _statSetMaxValues[statSetName];
        return _statSetsData[statSetName].maxValues;
    }

    function setStatSet(
        uint256 tokenId,
        bytes32 statSetName,
        uint16[10] calldata newStats
    ) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }
        _statSets[tokenId][statSetName] = newStats;
    }

    function getStatSetRarityOdds() external view returns (uint8[10] memory) {
        return _statSetRarityOdds;
    }

    function getStatSet(
        uint256 tokenId,
        bytes32 statSetName
    ) external view returns (uint16[] memory) {
        return _statSets[tokenId][statSetName];
    }

    function checkSkill(
        uint256 tokenId,
        bytes32 skillSetName,
        uint8 skillSetIndex,
        uint16 skillSetRequirement
    ) external view returns (bool) {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }

        uint16[] memory stats = _statSets[tokenId][skillSetName];
        // console.log("comparing: %s %s %s", skillSetName, stats[skillSetIndex], skillSetRequirement);
        return stats[skillSetIndex] >= skillSetRequirement;
    }

    function boostSkill(
        uint256 tokenId,
        bytes32 skillSetName,
        uint8 skillSetIndex,
        uint16 amount
    ) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            // console.log("Not scenario admin");
            revert NotScenarioAdmin();
        }
        // console.log(
        //     "PlanetStatsEntity: boostSkill:  skillSetName: %s, skillSetIndex: %s, amount: %s",
        //     skillSetName,
        //     skillSetIndex,
        //     amount
        // );

        _statSets[tokenId][skillSetName][skillSetIndex] += amount;
    }

    error NotScenarioAdmin();
    error InvalidStatSet();
}
