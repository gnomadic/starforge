// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController, TokenRate} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {JobEntity, Job} from "../entities/JobEntity.sol";
import {SupplySystem} from "./SupplySystem.sol";
import {PlanetStatsSystem} from "./PlanetStatsSystem.sol";

// import {console} from "hardhat/console.sol";

contract JobSystem is ISystem {
    bool registered = false;
    ISystemController private _systemController;

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
        string memory jobId,
        uint256 tokenId
    ) public {
        JobEntity entity = JobEntity(scenario.getEntity(address(this)));
        (string memory activeJobId, uint256 startedAt) = entity.getActiveJob(
            tokenId
        );
        // console.log("activeJobId: ", activeJobId);

        if (bytes(activeJobId).length > 0) {
            // console.log("well finishing job?");
            finishJob(scenario, tokenId);
        }
        // console.log("activiting job on entity: ", address(entity));
        entity.activateJob(jobId, tokenId);
        // console.log("done activating job from system");
    }

    function getAvailableJobs(
        IScenario scenario,
        uint256 tokenId
    ) external view returns (Job[] memory) {
        JobEntity entity = JobEntity(scenario.getEntity(address(this)));
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
            PlanetStatsSystem(address(_systemController.getSystem("STAT")))
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

        JobEntity entity = JobEntity(scenario.getEntity(address(this)));
        (string memory activeJobId, uint256 startedAt) = entity.getActiveJob(
            tokenId
        );

    // console.log("Finishing job %s", activeJobId);
        if (bytes(activeJobId).length == 0) {
            // console.log("no active job");
            // TODO better error message
            revert NoTimePassed();
        }

        Job memory job = entity.getJob(activeJobId);

            // console.log("loaded full job %s", job.id);


        SupplySystem supply = SupplySystem(
            address(_systemController.getSystem("SUPPLY"))
        );

        uint256 secondsLive = block.timestamp - startedAt;
        uint256 hoursLive = secondsLive / 3600;
        if (hoursLive == 0) {
                    // console.log("no time passed");
                    // TODO actually fail here lol
            // revert NoTimePassed();
            hoursLive = 2 hours;
        }
        if (hoursLive > job.timeLimit) {
            hoursLive = job.timeLimit;
        }
        // console.log("boosting skill: %s", job.skillSetName);

        PlanetStatsSystem(address(_systemController.getSystem("STAT")))
            .boostSkill(
                scenario,
                tokenId,
                job.skillSetName,
                job.skillSetIndex,
                job.skillSetBoost
            );

        uint256 amount = hoursLive * job.amountPerHour;
        // console.log("minting");

        supply.mint(scenario, msg.sender, job.tokenName, amount);
        entity.endJob(tokenId);
        // console.log("Finished job");
    }

    function activateEntity(
        IScenario scenario
    ) external override returns (address) {
        address current = scenario.getEntity(address(this));
        if (current != address(0)) {
            return current;
        }

        // TODO replace this with proxy clone.
        JobEntity entity = new JobEntity();

        entity.initialize(scenario, address(this));

        return address(entity);
    }

    function getId() external view returns (string memory) {
        return "JOB";
    }

    error NoTimePassed();
}
