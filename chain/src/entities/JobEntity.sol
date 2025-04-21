// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";
import {console} from "hardhat/console.sol";

contract JobEntity {
    struct Job {
        string id;
        string title;
        string description;
        address token;
        uint256 amount;
        uint256 duration;
    }

    struct LiveJob {
        string id;
        uint256 startedAt;
    }

    Job[] public availableJobs;

    mapping(address => LiveJob) public activeJobs;

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

    function getAvailableJobs() external view returns (Job[] memory) {
        return availableJobs;
    }

    function getActiveJob(
        address player
    ) external view returns (string memory) {
        return activeJobs[player].id;
    }

    function addJob(
        string memory id,
        string memory title,
        string memory description,
        address token,
        uint256 amount,
        uint256 duration
    ) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }
        Job memory newJob = Job(
            id,
            title,
            description,
            token,
            amount,
            duration
        );
        availableJobs.push(newJob);
    }

    error NotScenarioAdmin();
    error NoActiveJob();
    error AlreadyActiveJob();
}
