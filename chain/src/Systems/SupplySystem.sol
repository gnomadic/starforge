// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController, TokenRate} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {SupplyEntity} from "../entities/SupplyEntity.sol";

contract SupplySystem is ISystem {
    struct Resource {
        address tokenAddress;
        string tokenName;
    }

    // function finalizeProposal(string calldata payload) external override {}

    function init(
        ISystemController /*controller*/,
        IScenario /*scenario*/,
        uint256 /*tokenId*/
    ) external override {}

    function sync(uint256 /*tokenId*/) external override {}

    function activateEntity(IScenario scenario) external override returns (address) {
        // TODO replace this with proxy clone.
        SupplyEntity supplyAddress = new SupplyEntity();

        supplyAddress.initialize(scenario, address(this));

        return address(supplyAddress);
    }
}
