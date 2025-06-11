// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {IEventEntity} from "../entities/EventEntity.sol";

// import {console} from "forge-std/console.sol";
import {console} from "hardhat/console.sol";

interface IEventSystem {}

contract EventSystem is ISystem, IEventSystem {
    constructor(address _entity) ISystem(_entity) {
        entityAddress = _entity;
    }

    function init(
        ISystemController controller,
        IScenario scenario,
        uint256 tokenId
    ) external override {
        // TODO add permissiong here
        // console.log("EventSystem: init");
    }

    function sync(uint256 tokenId) external override {}

    function initEntity(IScenario scenario, address clone) internal override {
        IEventEntity(clone).initialize(scenario, address(this));
    }

    function getId() external pure override returns (string memory) {
        return "EVENT";
    }

    // --- EventEntity wrappers ---

    function addEvent(
        IScenario scenario,
        bytes32 name,
        bytes32 description,
        uint8[4] memory tags,
        bool positive,
        uint8 result
    ) public {
        IEventEntity entity = IEventEntity(scenario.getEntity(address(this)));
        entity.addEvent(name, description, tags, positive, result);
    }

    function activateEvent(
        IScenario scenario,
        uint256 planetId,
        uint256 eventId
    ) public {
        IEventEntity entity = IEventEntity(scenario.getEntity(address(this)));
        entity.activateEvent(planetId, eventId);
    }

    function deactivateEvent(
        IScenario scenario,
        uint256 planetId,
        uint256 eventId
    ) public {
        IEventEntity entity = IEventEntity(scenario.getEntity(address(this)));
        entity.deactivateEvent(planetId, eventId);
    }

    function getAllEvents(
        IScenario scenario
    ) public view returns (IEventEntity.Event[] memory) {
        IEventEntity entity = IEventEntity(scenario.getEntity(address(this)));
        return entity.getAllEvents();
    }

    function getActiveEvents(
        IScenario scenario,
        uint256 planetId
    ) public view returns (IEventEntity.Event[] memory) {
        IEventEntity entity = IEventEntity(scenario.getEntity(address(this)));
        return entity.getActiveEvents(planetId);
    }

    function clearEvents(IScenario scenario, uint256 planetId) public {
        IEventEntity entity = IEventEntity(scenario.getEntity(address(this)));
        entity.clearEvents(planetId);
    }
}
