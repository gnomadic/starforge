// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";

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
    // uint256 private _mintPrice;
    // uint8[6] private _rarityOdds;
    uint8[5] private _rarityOdds    = [ 1,  5, 13, 25, 75];
    uint8[5] private _startingStats = [80, 78, 76, 74, 72];
    uint8 private numberOfStats = 6;

    mapping(uint256 => uint16[10]) private _statsMapping;

    IScenario private _scenario;
    address private system;

    constructor(){}


    bool initialized = false;

    function initialize(IScenario scenario, address _system) external {
        require(!initialized, "Already initialized");
        initialized = true;
        _scenario = scenario;
        system = _system;
    }

    function getRarityOdds() external view returns (uint8[5] memory) {
        return _rarityOdds;
    }

    function setRarityOdds(uint8[5] memory newOdds) external {
        _rarityOdds = newOdds;
    }

    function getStats(uint256 tokenId) external view returns (uint16[10] memory) {
        return _statsMapping[tokenId];
    }

    function setStats(uint256 tokenId, uint16[10] calldata newStats) external {
        if (msg.sender !=  _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }

        _statsMapping[tokenId] = newStats;
    }

    function getStartingStats(uint8 gen) external view returns (uint8) {
        return _startingStats[gen];
    }

    function setStartingStats(uint8[5] memory newStartingStats) external {
        if (msg.sender !=  _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        _startingStats = newStartingStats;
    }

    function getNumberOfStats() external view returns (uint8) {
        return numberOfStats;
    }

    function setNumberOfStats(uint8 newNumberOfStats) external {
        if (msg.sender !=  _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        numberOfStats = newNumberOfStats;
    }

    error NotScenarioAdmin();
}
