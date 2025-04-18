// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";

contract SupplyEntity {
    string[] private tokenNames;
    address[] private tokenAddresses;

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

    function getTokenNames() external view returns (string[] memory) {
        return tokenNames;
    }

    function getTokenAddresses() external view returns (address[] memory) {
        return tokenAddresses;
    }

    function setTokens(
        string[] memory name,
        address[] memory addresses
    ) external {
        if (msg.sender != _scenario.getAdmin()) {
            revert NotScenarioAdmin();
        }
        require(
            name.length == addresses.length,
            "Name and address arrays must be the same length"
        );
        for (uint256 i = 0; i < name.length; i++) {
            tokenNames.push(name[i]);
            tokenAddresses.push(addresses[i]);
        }
    }

    error NotScenarioAdmin();
}
