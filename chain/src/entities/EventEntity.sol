// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";
import {console} from "hardhat/console.sol";

interface IEventEntity {
    function initialize(IScenario scenario, address _system) external;

    function addEvent(
        bytes32 name,
        bytes32 description,
        uint8[4] memory tags,
        bool positive,
        uint8 result
    ) external;

    function activateEvent(uint256 planetId, uint256 eventId) external;

    function deactivateEvent(uint256 planetId, uint256 eventId) external;

    function getAllEvents() external view returns (Event[] memory);

    function getActiveEvents(
        uint256 planetId
    ) external view returns (Event[] memory);

    function clearEvents(uint256 planetId) external;

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

    mapping(uint256 => uint256[]) public planetActiveEvents; // planetId => [eventIds]
    mapping(uint256 => Event) public events; // eventId => Event
    uint32 public eventCount;

    function initialize(IScenario scenario, address _system) external {
        require(!initialized, "Already initialized");
        initialized = true;
        _scenario = scenario;
        system = _system;
    }

    function addEvent(
        bytes32 name,
        bytes32 description,
        uint8[4] memory tags,
        bool positive,
        uint8 result
    ) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }
        uint32 eventId = eventCount++;
        events[eventId] = IEventEntity.Event(
            eventId,
            name,
            description,
            tags,
            positive,
            result
        );
    }

    function activateEvent(uint256 planetId, uint256 eventId) external {
        if (msg.sender != system) {
            revert NotScenarioAdmin();
        }
        require(eventId < eventCount, "Invalid event ID");
        planetActiveEvents[planetId].push(eventId);
    }

    function deactivateEvent(uint256 planetId, uint256 eventId) external {
        if (msg.sender != system) {
            revert NotScenarioAdmin();
        }
        uint256[] storage active = planetActiveEvents[planetId];
        for (uint256 i = 0; i < active.length; i++) {
            if (active[i] == eventId) {
                active[i] = active[active.length - 1];
                active.pop();
                break;
            }
        }
    }

    function getAllEvents() external view returns (Event[] memory) {
        Event[] memory allEvents = new Event[](eventCount);
        for (uint256 i = 0; i < eventCount; i++) {
            allEvents[i] = events[i];
        }
        return allEvents;
    }

    function getActiveEvents(
        uint256 planetId
    ) external view returns (Event[] memory) {
        uint256[] storage activeIds = planetActiveEvents[planetId];
        uint256 count = activeIds.length;
        Event[] memory activeEvents = new Event[](count);
        for (uint256 i = 0; i < count; i++) {
            activeEvents[i] = events[activeIds[i]];
        }
        return activeEvents;
    }

    function clearEvents(uint256 planetId) external {
        if (msg.sender != system) {
            revert NotScenarioAdmin();
        }
        delete planetActiveEvents[planetId];
    }

    error NotScenarioAdmin();
}
