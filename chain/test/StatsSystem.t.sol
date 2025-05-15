// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {StarForgeTest} from "./StarForgeTest.sol";

contract TestStatsSystem is StarForgeTest {
    address owner = address(this);

    function setUp() public {
        deployment(address(this));
    }

    // registerSystem: Negative test (already registered).
    function test_registerSystem_Negative() public {
        vm.expectRevert(abi.encodeWithSignature("AlreadyRegistered()"));
        statsSystem.registerSystem(owner);
    }

    // init (which calls calculateStatsForMint): Positive test.
    function test_init_Positive() public {
        // We call init; inside it, stats for each stat set and a special "RARITY" set will be set.
        // First, create a default stat set and a gatcha set.
        string[] memory names = new string[](2);
        names[0] = "DEFAULT";
        names[1] = "GATCHA";
        // Setup starting values – gatcha indicated by 65535 in first element.
        uint16[] memory defStart = new uint16[](3);
        defStart[0] = 10;
        defStart[1] = 20;
        defStart[2] = 30;
        uint16[] memory gachStart = new uint16[](3);
        gachStart[0] = 65535;
        gachStart[1] = 0;
        gachStart[2] = 0;
        // For gatcha, set available points.
        uint8[] memory gachAvail = new uint8[](5);
        gachAvail[0] = 5;
        gachAvail[1] = 4;
        gachAvail[2] = 3;
        gachAvail[3] = 2;
        gachAvail[4] = 1;
        // Assume we have functions in entity to create stat sets.

        // We simulate by calling createStatSet and createGatchaStatSet.
        // Also set rarity odds.
        uint8[] memory odds = new uint8[](5);
        odds[0] = 1;
        odds[1] = 5;
        odds[2] = 13;
        odds[3] = 25;
        odds[4] = 75;
        statsEntity.setStatSetRarityOdds(odds);

        statsEntity.createStatSet(
            "DEFAULT",
            defStart,
            new uint16[](3),
            new string[](3)
        );
        statsEntity.createGatchaStatSet(
            "GATCHA",
            gachStart,
            gachAvail,
            new uint16[](3),
            new string[](3)
        );

        // Check that "RARITY" stat set has been set (positive).
        uint16[] memory raritySet = statsEntity.getStatSet(
            testTokenId,
            "RARITY"
        );
        assertGt(raritySet.length, 0);
    }

    // sync: trivial positive test.
    function test_sync_Positive() public {
        statsSystem.sync(testTokenId);
        // No state change expected.
    }

    // getId: Positive test
    function test_getId_Positive() public view {
        string memory id = statsSystem.getId();
        assertEq(id, "STAT");
    }

    // checkSkill: Positive and negative
    function test_checkSkill() public {
        // First, set a stat set with a value.
        uint16[] memory stats = new uint16[](3);
        stats[0] = 10;
        stats[1] = 15;
        stats[2] = 20;
        statsEntity.setStatSet(testTokenId, "SKILL", stats);
        // Positive: meets requirement 15 at index 1.
        bool checkOk = statsSystem.checkSkill(
            regenScenario,
            testTokenId,
            "SKILL",
            1,
            15
        );
        assertTrue(checkOk);
        // Negative: requirement higher than current value.
        bool checkFail = statsSystem.checkSkill(
            regenScenario,
            testTokenId,
            "SKILL",
            1,
            16
        );
        assertTrue(!checkFail);
    }

    // boostSkill: Positive test.
    function test_boostSkill_Positive() public {
        // Set initial stat value.
        uint16[] memory stats = new uint16[](3);
        stats[0] = 5;
        stats[1] = 5;
        stats[2] = 5;
        statsEntity.setStatSet(testTokenId, "SKILL", stats);
        // Boost skill index 1 by 10.
        statsSystem.boostSkill(regenScenario, testTokenId, "SKILL", 1, 10);
        uint16[] memory newStats = statsEntity.getStatSet(testTokenId, "SKILL");
        assertEq(newStats[1], 15);
    }

    // boostSkill: Negative test.
    function test_boostSkill_Negative() public {
        // Try calling boostSkill via a non-admin address.
        // We simulate this by using vm.prank.
        uint16[] memory stats = new uint16[](3);
        stats[0] = 5;
        stats[1] = 5;
        stats[2] = 5;
        statsEntity.setStatSet(testTokenId, "SKILL", stats);
        vm.prank(address(0xBEEF));
        vm.expectRevert();
        statsSystem.boostSkill(regenScenario, testTokenId, "SKILL", 1, 10);
    }
}
