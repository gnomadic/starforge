// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";

import {console} from "hardhat/console.sol";

interface IEquipmentEntity {
    function initialize(IScenario scenario, address _system) external;
}

contract EquipmentEntity is IEquipmentEntity {
    IScenario private _scenario;
    address private system;

    bool initialized;

    function initialize(IScenario scenario, address _system) external {
        require(!initialized, "Already initialized");
        initialized = true;
        _scenario = scenario;
        system = _system;
    }
}
