// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";
import {console} from "hardhat/console.sol";


    struct Job {
        string id;
        string title;
        string description;
        address token;
        string tokenName;
        uint256 amountPerHour;        
    }

    
contract JobEntity {


    struct LiveJob {
        string id;
        uint256 startedAt;
    }

    Job[] public availableJobs;
    mapping(string => Job) public jobById;

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
    ) external view returns (string memory, uint256) {
        return (activeJobs[player].id, activeJobs[player].startedAt);
    }

    function activateJob(
        string memory jobId,
        address player
    ) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }
        if (bytes(activeJobs[player].id).length != 0) {
            revert AlreadyActiveJob();
        }

        activeJobs[player] = LiveJob(jobId, block.timestamp);
       
        revert NoActiveJob();
    }

    function getJob(
        string memory jobId
    ) external view returns (Job memory) {
        return jobById[jobId];
    }

    function endJob(address player) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }
        LiveJob memory job = activeJobs[player];
        if (bytes(job.id).length == 0) {
            revert NoActiveJob();
        }
        // if (block.timestamp < job.startedAt + availableJobs[0].duration) {
        //     revert AlreadyActiveJob();
        // }

        delete activeJobs[player];
    }

    function addJob(
        string memory id,
        string memory title,
        string memory description,
        string memory tokenName,
        address token,
        uint256 amountPerHour
    ) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }
        Job memory newJob = Job(
            id,
            title,
            description,
            token,
            tokenName,
            amountPerHour
        );
        availableJobs.push(newJob);
    }

    error NotScenarioAdmin();
    error NoActiveJob();
    error AlreadyActiveJob();
}
