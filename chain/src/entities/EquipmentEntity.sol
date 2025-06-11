// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";

import {console} from "hardhat/console.sol";

interface IEquipmentEntity {
    function initialize(IScenario scenario, address _system) external;

    function addModule(
        bytes32 name,
        bytes32 description,
        uint8[4] memory tags
    ) external;

    function setModule(uint256 planetId, uint256 moduleId) external;

    function getAllModules() external view returns (Module[] memory);

    function getPlayerModules(
        uint256 planetId
    ) external view returns (Module[] memory);

    function clearModules(uint256 planetId) external;

    struct Module {
        uint32 id;
        bytes32 name;
        bytes32 description;
        uint8[4] tags;
        // uint8[4] requirements;
    }
}

contract EquipmentEntity is IEquipmentEntity {
    IScenario private _scenario;
    address private system;
    bool initialized;

    mapping(uint256 => uint256[]) public planetSlots; // planetId => [moduleIds]
    mapping(uint256 => Module) public modules; // moduleId => Module
    uint32 moduleCount;

    function initialize(IScenario scenario, address _system) external {
        require(!initialized, "Already initialized");
        initialized = true;
        _scenario = scenario;
        system = _system;
    }

    function addModule(
        bytes32 name,
        bytes32 description,
        uint8[4] memory tags
    ) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }

        uint32 moduleId = moduleCount++;

        modules[moduleId] = IEquipmentEntity.Module(
            moduleId,
            name,
            description,
            tags
        );
    }

    function getPlayerModules(
        uint256 planetId
    ) public view returns (Module[] memory) {
        uint256[] storage slotIds = planetSlots[planetId];
        uint256 count = slotIds.length;

        Module[] memory playerModules = new Module[](count);
        for (uint256 i = 0; i < count; i++) {
            playerModules[i] = modules[slotIds[i]];
        }
        return playerModules;
    }

    function getAllModules() external view returns (Module[] memory) {
        Module[] memory allModules = new Module[](moduleCount);
        for (uint256 i = 0; i < moduleCount; i++) {
            allModules[i] = modules[i];
        }
        return allModules;
    }

    function setModule(uint256 planetId, uint256 moduleId) external {
        if (msg.sender != system) {
            revert NotScenarioAdmin();
        }
        require(moduleId < moduleCount, "Invalid module ID");
        planetSlots[planetId].push(moduleId);
    }

    function clearModules(uint256 planetId) external {
        if (msg.sender != system) {
            revert NotScenarioAdmin();
        }
        delete planetSlots[planetId];
    }

    error NotScenarioAdmin();
}
