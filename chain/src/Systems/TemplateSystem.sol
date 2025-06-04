// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {ITemplateEntity} from "../entities/TemplateEntity.sol";

// import {console} from "forge-std/console.sol";
import {console} from "hardhat/console.sol";

interface ITemplateSystem {}

contract TemplateSystem is ISystem, ITemplateSystem {
    constructor(address _entity) ISystem(_entity) {}

    function init(
        ISystemController controller,
        IScenario scenario,
        uint256 tokenId
    ) external override {
        // TODO add permissiong here
        // console.log("TemplateSystem: init");
    }

    function sync(uint256 tokenId) external override {}

    function initEntity(IScenario scenario, address clone) internal override {
        ITemplateEntity(clone).initialize(scenario, address(this));
    }

    function getId() external pure override returns (string memory) {
        return "TEMPLATE";
    }
}
