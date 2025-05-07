// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../src/systems/JobSystem.sol";
import {StarForgeTest} from "./StarForgeTest.sol";

contract TestJobSystem is StarForgeTest {
    address owner = address(this);
    string constant jobId = "JOB_ID";

    function setUp() public {
        deployment(address(this));
    }

    function testActivateJob() public {
        jobSystem.activateJob(regenScenario, jobId, testTokenId);
        (string memory activeJobId, ) = jobEntity.getActiveJob(testTokenId);
        assertEq(activeJobId, jobId);
    }

    function testNoActiveJobFinishJob() public {
        vm.expectRevert(JobSystem.NoTimePassed.selector);
        jobSystem.finishJob(regenScenario, testTokenId);
    }

    function testFinishJob() public {
        jobSystem.activateJob(regenScenario, "Bioflux_one", testTokenId);

        (string memory activeJobId, uint256 startedAt) = jobEntity.getActiveJob(
            testTokenId
        );

        require(bytes(activeJobId).length > 0, "No active job found");

        vm.warp(startedAt + 3601);
        jobSystem.finishJob(regenScenario, testTokenId);
        (activeJobId, ) = jobEntity.getActiveJob(testTokenId);
        assertEq(bytes(activeJobId).length, 0);
    }
}
