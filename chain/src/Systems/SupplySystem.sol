// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController, TokenRate} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {SupplyEntity, IERC20} from "../entities/SupplyEntity.sol";
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
        console.log(
            "SupplySystem: registerSystem: systemController: %s",
            _systemController
        );
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

    function mint(
        IScenario scenario,
        address player,
        string memory tokenName,
        uint256 amount
    ) external {
        SupplyEntity entity = SupplyEntity(scenario.getEntity(address(this)));

        console.log("SupplySystem: mint: entityAddress: %s", address(entity));

        address token = entity.getTokenAddress(tokenName);
        console.log("minting %s", tokenName);
        IERC20(token).mint(player, amount);
    }

    function burn(
        IScenario scenario,
        address player,
        string memory tokenName,
        uint256 amount
    ) external {
        SupplyEntity entity = SupplyEntity(scenario.getEntity(address(this)));

        console.log("SupplySystem: burn: entityAddress: %s", address(entity));

        address token = entity.getTokenAddress(tokenName);
        console.log("burning %s", tokenName);
        IERC20(token).burn(player, amount);
    }

    function deployToken(
        IScenario scenario,
        string memory tokenName,
        string memory tokenSymbol
    ) external returns (address) {
        if (scenario.getAdmin() != msg.sender) {
            revert NotAdmin();
        }

        SupplyEntity entity = SupplyEntity(scenario.getEntity(address(this)));

        console.log(
            "SupplySystem: deployToken: entityAddress: %s",
            address(entity)
        );

        address newToken = _supplyTokenFactory.createSupplyToken(
            _systemController,
            address(scenario),
            tokenName,
            tokenSymbol
        );

        console.log("adding token %s", tokenName);
        entity.addToken(tokenName, newToken);
        return newToken;
    }

    function getId() external view returns (string memory) {
        return "SUPPLY";
    }

    error NotAdmin();
}
