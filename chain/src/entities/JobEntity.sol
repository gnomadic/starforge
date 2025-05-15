// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";
// import {console} from "hardhat/console.sol";

struct Job {
    bytes32 id;
    bytes32 title;
    bytes32 tokenName;
    uint256 amountPerHour;
    uint256 timeLimit;
    bytes32 skillSetName;
    uint8 skillSetIndex;
    uint16 skillSetRequirement;
    uint16 skillSetBoost;
}

struct LiveJob {
    bytes32 id;
    uint256 startedAt;
}

interface IJobEntity {
    function getAvailableJobs() external view returns (Job[] memory);

    function getActiveJob(
        uint256 tokenId
    ) external view returns (bytes32, uint256);

    function activateJob(bytes32 jobId, uint256 tokenId) external;

    function endJob(uint256 tokenId) external;

    function addJob(
        bytes32 id,
        bytes32 title,
        // bytes32 description,
        bytes32 tokenName,
        uint256 amountPerHour,
        uint256 timeLimit,
        bytes32 skillSetName,
        uint8 skillSetIndex,
        uint16 skillSetRequirement,
        uint16 skillSetBoost
    ) external;

    function getJob(bytes32 jobId) external view returns (Job memory);

    function initialize(IScenario scenario, address _system) external;
}

contract JobEntity is IJobEntity {
    Job[] public availableJobs;
    mapping(bytes32 => uint256) public jobById;

    mapping(uint256 => LiveJob) public activeJobs;

    IScenario private _scenario;
    address private system;

    bool initialized;

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
    ) external view returns (bytes32, uint256) {
        return (activeJobs[tokenId].id, activeJobs[tokenId].startedAt);
    }

    function activateJob(bytes32 jobId, uint256 tokenId) external {
        // console.log("activating job from entity");
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            // console.log("Not scenario admin");
            revert NotScenarioAdmin();
        }
        if (activeJobs[tokenId].id.length != 0) {
            // console.log("Already active job");
            revert AlreadyActiveJob();
        }

        activeJobs[tokenId] = LiveJob(jobId, block.timestamp);
        // console.log("done activating job from entity");
    }

    function getJob(bytes32 jobId) external view returns (Job memory) {
        return availableJobs[jobById[jobId]];
    }

    function endJob(uint256 tokenId) external {
        if (msg.sender != _scenario.getAdmin() && msg.sender != system) {
            revert NotScenarioAdmin();
        }
        LiveJob memory job = activeJobs[tokenId];
        if (job.id.length == 0) {
            revert NoActiveJob();
        }

        delete activeJobs[tokenId];
    }

    function addJob(
        bytes32 id,
        bytes32 title,
        // bytes32 description,
        bytes32 tokenName,
        uint256 amountPerHour,
        uint256 timeLimit,
        bytes32 skillSetName,
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
            // description,
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
