// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController, TokenRate} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {JobEntity} from "../entities/JobEntity.sol";

contract JobSystem is ISystem {
    bool registered = false;
    address private _systemController;

    function registerSystem(address systemController) external {
        if (registered) {
            revert AlreadyRegistered();
        }
        registered = true;
        _systemController = systemController;
    }

    error AlreadyRegistered();

    function init(
        ISystemController /*controller*/,
        IScenario /*scenario*/,
        uint256 /*tokenId*/
    ) external override {}

    function sync(uint256 /*tokenId*/) external override {}

    function activateJob(string memory jobId) public {
        // if (bytes(activeJobs[msg.sender].id).length != 0) {
            // finishJob();
        // }
        // activeJobs[msg.sender] = LiveJob(jobId, block.timestamp);
    }

    function finishJob() public {
        // LiveJob memory job = activeJobs[msg.sender];
        // if (bytes(job.id).length == 0) {
        //     revert NoActiveJob();
        // }
        // if (block.timestamp < job.startedAt + availableJobs[0].duration) {
        //     revert AlreadyActiveJob();
        // }

        // delete activeJobs[msg.sender];
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
}
