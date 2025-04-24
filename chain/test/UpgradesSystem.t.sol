pragma solidity ^0.8.24;

import {Test, console} from 'forge-std/Test.sol';
import "../src/systems/UpgradesSystem.sol";
import "../src/systems/interfaces/ISystem.sol";
import "../src/Scenario.sol";

// Minimal mock for IScenario.
contract MockScenario2 is IScenario {
    address public admin;
    constructor(address _admin) {
        admin = _admin;
    }
    function getEntity(address) external pure override returns (address) {
        return address(0);
    }
    function getAdmin() external view override returns (address) {
        return admin;
    }
}

contract TestUpgradesSystem is Test {
    UpgradesSystem system;
    MockScenario2 scenario;
    address owner = address(this);
    uint256 testTokenId = 42;

    function setUp() public {
        scenario = new MockScenario2(owner);
        system = new UpgradesSystem();
        system.registerSystem(owner);
    }

    // addUpgrade: Positive test.
    function test_addUpgrade_Positive() public {
        uint256[] memory costRate = new uint256[](1);
        costRate[0] = 100;
        address[] memory costToken = new address[](1);
        costToken[0] = address(0);
        uint256[] memory benefitRate = new uint256[](1);
        benefitRate[0] = 200;
        address[] memory benefitToken = new address[](1);
        benefitToken[0] = address(1);
        system.addUpgrade("Job1", "Test job", costRate, costToken, benefitRate, benefitToken);
        UpgradesSystem.Upgrade[] memory ups = system.getAllUpgrades();
        assertEq(ups.length, 1);
    }

    // addUpgrade: Negative test (non-owner).
    function test_addUpgrade_Negative() public {
        // Use vm.prank to simulate non-owner call.
        uint256[] memory costRate = new uint256[](1);
        costRate[0] = 100;
        address[] memory costToken = new address[](1);
        costToken[0] = address(0);
        uint256[] memory benefitRate = new uint256[](1);
        benefitRate[0] = 200;
        address[] memory benefitToken = new address[](1);
        benefitToken[0] = address(1);
        vm.prank(address(0xBEEF));
        vm.expectRevert();
        system.addUpgrade("Job1", "Test job", costRate, costToken, benefitRate, benefitToken);
    }

    // purchaseUpgrade: Positive test.
    function test_purchaseUpgrade_Positive() public {
        // First add an upgrade.
        uint256[] memory costRate = new uint256[](1);
        costRate[0] = 100;
        address[] memory costToken = new address[](1);
        costToken[0] = address(0);
        uint256[] memory benefitRate = new uint256[](1);
        benefitRate[0] = 200;
        address[] memory benefitToken = new address[](1);
        benefitToken[0] = address(1);
        system.addUpgrade("Job1", "Test job", costRate, costToken, benefitRate, benefitToken);
        // Purchase upgrade for testTokenId.
        system.purchaseUpgrade(ISystemController(address(0)), testTokenId, 0);
        uint256[] memory applied = system.getAppliedUpgrades(testTokenId);
        assertEq(applied.length, 1);
    }

    // registerSystem: Positive and Negative tests.
    function test_registerSystem_Positive() public {
        // Already registered in setUp.
        // Trying to register again should revert.
        vm.expectRevert(abi.encodeWithSignature("AlreadyRegistered()"));
        system.registerSystem(owner);
    }

    // activateEntity: Positive test.
    function test_activateEntity_Positive() public {
        address ent = system.activateEntity(IScenario(address(scenario)));
        assertTrue(ent != address(0));
    }

    // sync and init: trivial positive tests.
    function test_sync_Positive() public {
        system.sync(testTokenId);
        // No revert means success.
    }

    function test_init_Positive() public {
        system.init(ISystemController(address(0)), IScenario(address(scenario)), testTokenId);
        // No revert means success.
    }

    // getId: Positive test.
    function test_getId_Positive() public view {
        string memory id = system.getId();
        assertEq(id, "UPGRADE");
    }
}