// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";
// import {console} from "hardhat/console.sol";
import {console} from "forge-std/console.sol";

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
    mapping(string => uint16[]) private _statSetMaxValues; // statSetName => max values for each stat
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

    function setStatSetRarityOdds(uint8[] calldata rarityOdds) external {
        if (msg.sender != _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        _statSetRarityOdds = rarityOdds;
    }

    function createGatchaStatSet(
        string memory statSetName,
        uint16[] calldata startingPoints,
        uint8[] calldata points,
        uint16[] calldata maxValues,
        string[] memory pointNames
    ) external {
        if (msg.sender != _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        if (points.length != _statSetRarityOdds.length) {
            revert InvalidStatSet();
        }
        _startingStatSetValues[statSetName] = startingPoints;
        _statSetPointsAvailable[statSetName] = points;
        _statSetPointNames[statSetName] = pointNames;
        _statSetMaxValues[statSetName] = maxValues;

        _statSetNames.push(statSetName);
    }

    function createStatSet(
        string memory statSetName,
        uint16[] calldata startingPoints,
        uint16[] calldata maxValues,
        string[] memory pointNames
    ) external {
        if (msg.sender != _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        _startingStatSetValues[statSetName] = startingPoints;
        _statSetPointNames[statSetName] = pointNames;
        _statSetMaxValues[statSetName] = maxValues;

        _statSetNames.push(statSetName);
    }

    function getStatSetNames() external view returns (string[] memory) {
        return _statSetNames;
    }

    function getAvailablePoints(
        string memory statSetName
    ) external view returns (uint8[] memory) {
        return _statSetPointsAvailable[statSetName];
    }

    function getStartingPoints(
        string memory statSetName
    ) external view returns (uint16[] memory) {
        return _startingStatSetValues[statSetName];
    }

    function getStatSetPointNames(
        string memory statSetName
    ) external view returns (string[] memory) {
        return _statSetPointNames[statSetName];
    }

    function getStatSetMaxValues(
        string memory statSetName
    ) external view returns (uint16[] memory) {
        return _statSetMaxValues[statSetName];
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

    function checkSkill(
        uint256 tokenId,
        string memory skillSetName,
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
        string memory skillSetName,
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

        console.log(
            "boosting skill -%s- %s %s",
            skillSetName,
            skillSetIndex,
            amount
        );

        console.log("current stats %s", _statSetNames.length);
        console.log("current 1 -%s-", _statSetNames[0]);
        console.log("current 2 -%s-", _statSetNames[1]);

        console.log(
            "current stat %s",
            _statSets[tokenId][_statSetNames[1]].length
        );

        _statSets[tokenId][skillSetName][skillSetIndex] += amount;
    }

    error NotScenarioAdmin();
    error InvalidStatSet();
}
