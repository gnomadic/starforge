// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {IJobEntity, Job} from "../entities/JobEntity.sol";
import {ISupplySystem} from "./SupplySystem.sol";
import {IStatsSystem} from "./StatsSystem.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {LibClone} from "solady/utils/LibClone.sol";

import {console} from "hardhat/console.sol";

// import {console} from "forge-std/console.sol";

contract JobSystem is ISystem, Ownable {
    using LibClone for address;

    bool registered = false;
    ISystemController private _systemController;
    address public entityAddress;

    constructor(address _entity) Ownable(msg.sender) {
        entityAddress = _entity;
    }

    function registerSystem(address systemController) external {
        if (registered) {
            revert AlreadyRegistered();
        }
        registered = true;
        _systemController = ISystemController(systemController);
    }

    error AlreadyRegistered();

    function init(
        ISystemController /*controller*/,
        IScenario /*scenario*/,
        uint256 /*tokenId*/
    ) external override {}

    function sync(uint256 /*tokenId*/) external override {}

    function activateJob(
        IScenario scenario,
        bytes32 jobId,
        uint256 tokenId
    ) public {
        console.log("activating job");
        console.logBytes(abi.encodePacked(jobId));
        IJobEntity entity = IJobEntity(scenario.getEntity(address(this)));
        console.log("entity");
        console.log(address(entity));

        (bytes32 activeJobId, uint256 startedAt) = entity.getActiveJob(tokenId);
        console.log("active job");
        console.logBytes(abi.encodePacked(activeJobId));

        if (activeJobId != bytes32(0)) {
            console.log("well finishing job?");
            finishJob(scenario, tokenId);
        }
        console.log("activing job");

        entity.activateJob(jobId, tokenId);
    }

    function getAvailableJobs(
        IScenario scenario,
        uint256 tokenId
    ) external view returns (Job[] memory) {
        IJobEntity entity = IJobEntity(scenario.getEntity(address(this)));
        Job[] memory allJobs = entity.getAvailableJobs();
        uint256 count = 0;

        for (uint256 i = 0; i < allJobs.length; i++) {
            if (canPlayerPerformJob(scenario, tokenId, allJobs[i])) {
                count++;
            }
        }

        Job[] memory availableJobs = new Job[](count);
        uint256 index = 0;

        for (uint256 i = 0; i < allJobs.length; i++) {
            if (canPlayerPerformJob(scenario, tokenId, allJobs[i])) {
                availableJobs[index] = allJobs[i];
                index++;
            }
        }

        return availableJobs;
    }

    function canPlayerPerformJob(
        IScenario scenario,
        uint256 tokenId,
        Job memory job
    ) internal view returns (bool) {
        return
            IStatsSystem(address(_systemController.getSystem("STAT")))
                .checkSkill(
                    scenario,
                    tokenId,
                    job.skillSetName,
                    job.skillSetIndex,
                    job.skillSetRequirement
                );
    }

    function finishJob(IScenario scenario, uint256 tokenId) public {
        // if the player has an already active job, end it and mint rewards

        IJobEntity entity = IJobEntity(scenario.getEntity(address(this)));
        (bytes32 activeJobId, uint256 startedAt) = entity.getActiveJob(tokenId);

        if (activeJobId == bytes32(0)) {
            console.log("no active job!");

            revert NoActiveJob();
        }

        Job memory job = entity.getJob(activeJobId);

        uint256 secondsLive = block.timestamp - startedAt;

        // uint256 hoursLive = secondsLive / 3600;

        if (secondsLive > job.timeLimit) {
            secondsLive = job.timeLimit;
        }

        uint256 amount = secondsLive * (job.amountPerHour / 3600);

        console.log("step one");
        IStatsSystem(address(_systemController.getSystem("STAT"))).boostSkill(
            scenario,
            tokenId,
            job.skillSetName,
            job.skillSetIndex,
            job.skillSetBoost
        );
        console.log("step two");
        ISupplySystem(address(_systemController.getSystem("SUPPLY"))).mint(
            scenario,
            msg.sender,
            job.tokenName,
            amount
        );
        console.log("step three");
        entity.endJob(tokenId);
        console.log("step four");
    }

    function activateEntity(
        IScenario scenario
    ) external override returns (address) {
        address current = scenario.getEntity(address(this));
        if (current != address(0)) {
            return current;
        }

        address clone = entityAddress.clone();

        IJobEntity(clone).initialize(scenario, address(this));

        return clone;
    }

    function getId() external pure returns (string memory) {
        return "JOB";
    }

    function updateEntityAddress(address newEntityAddress) external onlyOwner {
        entityAddress = newEntityAddress;
    }

    error NoTimePassed();
    error NoActiveJob();
}
