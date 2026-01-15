// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {IJobEntity, Job} from "../entities/JobEntity.sol";
import {ISupplySystem} from "./SupplySystem.sol";
import {IStatsSystem} from "./StatsSystem.sol";

import {console} from "hardhat/console.sol";

// import {console} from "forge-std/console.sol";

contract JobSystem is ISystem {
    constructor(address _entity) ISystem(_entity) {
        entityAddress = _entity;
    }

    function init(
        ISystemController /*controller*/,
        IScenario /*scenario*/,
        uint256 /*tokenId*/
    ) external override {}

    function sync(uint256 /*tokenId*/) external override {}

    function activateJob(
        IScenario scenario,
        uint16 jobId,
        uint256 tokenId
    ) public {
        console.log("activating job");
        console.logBytes(abi.encodePacked(jobId));
        IJobEntity entity = IJobEntity(scenario.getEntity(address(this)));
        console.log("entity");
        console.log(address(entity));

        (uint16 activeJobId, uint256 startedAt) = entity.getActiveJob(tokenId);
        console.log("active job");
        console.logBytes(abi.encodePacked(activeJobId));

        if (activeJobId != 0) {
            console.log("well finishing job?");
            finishJob(scenario, tokenId);
        }
        console.log("activating job");

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
        ISystemController controller = ISystemController(_systemController);
        return
            IStatsSystem(address(controller.getSystem("STAT"))).checkSkill(
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
        (uint16 activeJobId, uint256 startedAt) = entity.getActiveJob(tokenId);

        if (activeJobId == 0) {
            console.log("no active job!");

            revert NoActiveJob();
        }

        Job memory job = entity.getJob(activeJobId);

        uint256 secondsLive = block.timestamp - startedAt;

        // uint256 hoursLive = secondsLive / 3600;

        if (secondsLive > job.timeLimit) {
            secondsLive = job.timeLimit;
        }

        uint16 cyclesCompleted = uint16(secondsLive / job.cycleDuration);

        uint256 amount = cyclesCompleted * job.amountPerCycle;
        ISystemController controller = ISystemController(_systemController);

        console.log("step one");
        IStatsSystem(address(controller.getSystem("STAT"))).boostSkill(
            scenario,
            tokenId,
            job.skillSetName,
            job.skillSetIndex,
            job.skillSetBoost
        );
        console.log("step two");
        ISupplySystem(address(controller.getSystem("SUPPLY"))).mint(
            scenario,
            msg.sender,
            job.tokenName,
            amount
        );
        console.log("step three");
        entity.endJob(tokenId);
        console.log("step four");
    }

    function initEntity(IScenario scenario, address clone) internal override {
        IJobEntity(clone).initialize(scenario, address(this));
    }

    function getId() external pure override returns (string memory) {
        return "JOB";
    }

    error NoTimePassed();
    error NoActiveJob();
}
