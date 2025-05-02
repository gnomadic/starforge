// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console} from "forge-std/Test.sol";
import {IScenario} from "../../src/Scenario.sol";

// A minimal mock for IScenario.
contract MockScenario is IScenario {
    address public admin;
    mapping(address => address) private entities;

    constructor(address _admin) {
        admin = _admin;
    }

    function getEntity(
        address system
    ) external view override returns (address) {
        return entities[system];
    }

    function setEntity(address system, address entity) external {
        entities[system] = entity;
    }

    function getAdmin() external view override returns (address) {
        return admin;
    }
}
