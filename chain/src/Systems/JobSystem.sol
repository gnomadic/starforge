// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController, TokenRate} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {JobEntity, Job} from "../entities/JobEntity.sol";
import {SupplySystem} from "./SupplySystem.sol";

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

    function activateJob(IScenario scenario, string memory jobId) public {
        JobEntity entity = JobEntity(scenario.getEntity(address(this)));
        (string memory activeJobId, uint256 startedAt) = entity.getActiveJob(
            msg.sender
        );

        if (bytes(activeJobId).length > 0) {
            finishJob(scenario);
        }

        entity.activateJob(jobId, msg.sender);
    }

    // if the player has an already active job, end it and mint rewards
    // then activate new job
    // }

    function finishJob(IScenario scenario) public {
        // if the player has an already active job, end it and mint rewards

        JobEntity entity = JobEntity(scenario.getEntity(address(this)));
        (string memory activeJobId, uint256 startedAt) = entity.getActiveJob(
            msg.sender
        );
        Job memory job = entity.getJob(activeJobId);

        SupplySystem supply = SupplySystem(
            address(_systemController.getSystem("SUPPLY"))
        );

        uint256 secondsLive = block.timestamp - startedAt;
        uint256 hoursLive = secondsLive / 3600;
        if (hoursLive == 0) {
            revert NoTimePassed();
        }
        // TODO make this 12 hour job limit in the entity.
        if (hoursLive > 12) {
            hoursLive = 12;
        }

        uint256 amount = hoursLive * job.amountPerHour;

        supply.mint(scenario, msg.sender, job.tokenName, amount);
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
