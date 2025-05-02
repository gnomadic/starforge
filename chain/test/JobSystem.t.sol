// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console} from "forge-std/Test.sol";
import "../src/systems/JobSystem.sol";
import "../src/entities/JobEntity.sol";
import {MockScenario} from "./mocks/MockScenario.sol";

contract TestJobSystem is Test {
    JobSystem system;
    JobEntity entity;
    MockScenario scenario;

    address owner = address(this);
    uint256 testTokenId = 1;

    string constant jobId = "job1";
    string constant jobReward = "reward1";
    string constant jobSkills = "Job Skills";

    function setUp() public {
        scenario = new MockScenario(owner);
        system = new JobSystem(); // using dummy planetAddress
        // Activate entity via the system – positive path.
        address entAddr = system.activateEntity(IScenario(address(scenario)));
        require(entAddr != address(0), "Entity activation failed");
        entity = JobEntity(entAddr);
        // Set entity in scenario
        // Note: we assume scenario.getEntity(systemAddress) returns the entity
        scenario.setEntity(address(system), entAddr);

        entity.addJob(
            jobId,
            "Test Job",
            "This is a test job",
            jobReward,
            5 * 10 ** 17,
            12 hours,
            jobSkills,
            2,
            0,
            1
        );
    }

    function testActivateJob() public {
        system.activateJob(IScenario(address(scenario)), jobId, testTokenId);
        (string memory activeJobId, ) = entity.getActiveJob(testTokenId);
        assertEq(activeJobId, jobId);
    }

    function testFinishJobWithoutActiveJob() public {
        vm.expectRevert(JobSystem.NoTimePassed.selector);
        system.finishJob(IScenario(address(scenario)), testTokenId);
    }

    function testFinishJob() public {
        system.activateJob(IScenario(address(scenario)), jobId, testTokenId);

        (string memory activeJobId, uint256 startedAt) = entity.getActiveJob(
            testTokenId
        );

        require(bytes(activeJobId).length > 0, "No active job found");

        vm.warp(startedAt + 3601);
        system.finishJob(IScenario(address(scenario)), testTokenId);
        (activeJobId, ) = entity.getActiveJob(testTokenId);
        assertEq(bytes(activeJobId).length, 0);
    }
}
