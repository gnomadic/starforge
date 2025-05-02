// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";
// import {console} from "hardhat/console.sol";

struct Job {
    string id;
    string title;
    string description;
    string tokenName;
    uint256 amountPerHour;
    uint256 timeLimit;
    string skillSetName;
    uint8 skillSetIndex;
    uint16 skillSetRequirement;
    uint16 skillSetBoost;
}

contract JobEntity {
    struct LiveJob {
        string id;
        uint256 startedAt;
    }

    Job[] public availableJobs;
    mapping(string => uint256) public jobById;

    mapping(uint256 => LiveJob) public activeJobs;

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
        uint256 tokenId
    ) external view returns (string memory, uint256) {
        return (activeJobs[tokenId].id, activeJobs[tokenId].startedAt);
    }

    function activateJob(string memory jobId, uint256 tokenId) external {
        // console.log("activating job from entity");
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            // console.log("Not scenario admin");
            revert NotScenarioAdmin();
        }
        if (bytes(activeJobs[tokenId].id).length != 0) {
            // console.log("Already active job");
            revert AlreadyActiveJob();
        }

        activeJobs[tokenId] = LiveJob(jobId, block.timestamp);
        // console.log("done activating job from entity");
    }

    function getJob(string memory jobId) external view returns (Job memory) {
        return availableJobs[jobById[jobId]];
    }

    function endJob(uint256 tokenId) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }
        LiveJob memory job = activeJobs[tokenId];
        if (bytes(job.id).length == 0) {
            revert NoActiveJob();
        }

        delete activeJobs[tokenId];
    }

    function addJob(
        string memory id,
        string memory title,
        string memory description,
        string memory tokenName,
        uint256 amountPerHour,
        uint256 timeLimit,
        string memory skillSetName,
        uint8 skillSetIndex,
        uint16 skillSetRequirement,
        uint16 skillSetBoost
    ) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }
        // console.log("Adding job %s", id);
        Job memory newJob = Job(
            id,
            title,
            description,
            tokenName,
            amountPerHour,
            timeLimit,
            skillSetName,
            skillSetIndex,
            skillSetRequirement,
            skillSetBoost
        );
        availableJobs.push(newJob);
        jobById[id] = availableJobs.length - 1;
    }

    error NotScenarioAdmin();
    error NoActiveJob();
    error AlreadyActiveJob();
}
