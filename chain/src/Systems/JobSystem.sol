// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController, TokenRate} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";

contract JobSystem is ISystem {
    struct Resource {
        address tokenAddress;
        string tokenName;
    }

    struct Job {
        string id;
        string title;
        string description;
        Resource tokenData;
        uint256 baseEmissionBoost;
    }

    Job[] public availableJobs;
    mapping(address => string) public activeJobs;

    event JobActivated(address indexed player, string jobId);
    event JobDeactivated(address indexed player, string jobId);

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

    function activateJob(string memory jobId) external {
        // Locate job from availableJobs
        // Adjust emission rates or token rates as needed
        // Record active job
        activeJobs[msg.sender] = jobId;
        emit JobActivated(msg.sender, jobId);
    }

    function deactivateJob() external {
        // Locate the player's active job
        // Revert any boosts applied
        delete activeJobs[msg.sender];
        emit JobDeactivated(msg.sender, /* previously active jobId */ "");
    }

    function activateEntity(
        IScenario scenario
    ) external override returns (address) {
        return address(this);
    }
}
