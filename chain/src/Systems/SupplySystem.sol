// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController, TokenRate} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {SupplyEntity} from "../entities/SupplyEntity.sol";
import {SupplyTokenFactory} from "../tokens/SupplyTokenFactory.sol";

import {console} from "hardhat/console.sol";

contract SupplySystem is ISystem {
    struct Resource {
        address tokenAddress;
        string tokenName;
    }

    SupplyTokenFactory private _supplyTokenFactory;

    constructor(address supplyTokenFactory) {
        _supplyTokenFactory = SupplyTokenFactory(supplyTokenFactory);
    }

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

    function activateEntity(
        IScenario scenario
    ) external override returns (address) {
        address current = scenario.getEntity(address(this));
        if (current != address(0)) {
            return current;
        }

        // TODO replace this with proxy clone.
        SupplyEntity supplyAddress = new SupplyEntity();

        supplyAddress.initialize(scenario, address(this));

        return address(supplyAddress);
    }

    function deployToken(
        IScenario scenario,
        string memory tokenName,
        string memory tokenSymbol
    ) external returns (address) {
        if (scenario.getAdmin() != msg.sender) {
            revert NotAdmin();
        }

        SupplyEntity entity = SupplyEntity(
            scenario.getEntity(address(this))
        );

        console.log(
            "SupplySystem: deployToken: entityAddress: %s",
            address(entity)
        );

        address newToken = 
            _supplyTokenFactory.createSupplyToken(
                _systemController,
                tokenName,
                tokenSymbol
            );

        console.log("adding token %s", tokenName);
        entity.addToken(tokenName, newToken);
        return newToken;
    }

    error NotAdmin();
}
