// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";

import {console} from "hardhat/console.sol";

interface IEventEntity {
    function initialize(IScenario scenario, address _system) external;

    struct Event {
        uint32 id;
        bytes32 name;
        bytes32 description;
        uint8[4] tags;
        bool positive;
        uint8 result;
    }
}

contract EventEntity is IEventEntity {
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
