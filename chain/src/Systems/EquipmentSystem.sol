// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {IEquipmentEntity} from "../entities/EquipmentEntity.sol";

// import {console} from "forge-std/console.sol";
import {console} from "hardhat/console.sol";

interface IEquipmentSystem {}

contract EquipmentSystem is ISystem, IEquipmentSystem {
    uint256 _nonce;

    constructor(address _entity) ISystem(_entity) {
        entityAddress = _entity;
    }

    function init(
        ISystemController controller,
        IScenario scenario,
        uint256 tokenId
    ) external override {
        // TODO add permissiong here
        // console.log("AnomolySystem: init");
    }

    function sync(uint256 tokenId) external override {}

    function initEntity(IScenario scenario, address clone) internal override {
        IEquipmentEntity(clone).initialize(scenario, address(this));
    }

    function getId() external pure override returns (string memory) {
        return "EQUIPMENT";
    }
}
