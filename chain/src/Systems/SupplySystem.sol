// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem, ISystemController} from "./interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {ISupplyEntity, IERC20} from "../entities/SupplyEntity.sol";
import {SupplyTokenFactory} from "../tokens/SupplyTokenFactory.sol";

import {console} from "hardhat/console.sol";

interface ISupplySystem {
    function mint(
        IScenario scenario,
        address player,
        bytes32 tokenName,
        uint256 amount
    ) external;

    function deployToken(
        IScenario scenario,
        bytes32 tokenName,
        string memory tokenSymbol
    ) external returns (address);
}

contract SupplySystem is ISystem, ISupplySystem {
    struct Resource {
        address tokenAddress;
        string tokenName;
    }

    SupplyTokenFactory private _supplyTokenFactory;

    constructor(address supplyTokenFactory, address _entity) ISystem(_entity) {
        entityAddress = _entity;
        _supplyTokenFactory = SupplyTokenFactory(supplyTokenFactory);
    }

    function init(
        ISystemController /*controller*/,
        IScenario /*scenario*/,
        uint256 /*tokenId*/
    ) external override {}

    function sync(uint256 /*tokenId*/) external override {}

    function initEntity(IScenario scenario, address clone) internal override {
        ISupplyEntity(clone).initialize(scenario, address(this));
    }

    function mint(
        IScenario scenario,
        address player,
        bytes32 tokenName,
        uint256 amount
    ) external {
        console.log("minting");
        ISupplyEntity entity = ISupplyEntity(scenario.getEntity(address(this)));

        // console.log("SupplySystem: mint: entityAddress: %s", address(entity));

        address token = entity.getTokenAddress(tokenName);
        // console.log("minting %s", tokenName);
        IERC20(token).mint(player, amount);
        console.log("done minting");
    }

    function burn(
        IScenario scenario,
        address player,
        bytes32 tokenName,
        uint256 amount
    ) external {
        ISupplyEntity entity = ISupplyEntity(scenario.getEntity(address(this)));

        // console.log("SupplySystem: burn: entityAddress: %s", address(entity));

        address token = entity.getTokenAddress(tokenName);
        // console.log("burning %s", tokenName);
        IERC20(token).burn(player, amount);
    }

    function deployToken(
        IScenario scenario,
        bytes32 tokenName,
        string memory tokenSymbol
    ) external returns (address) {
        if (scenario.getAdmin() != msg.sender) {
            revert NotAdmin();
        }

        ISupplyEntity entity = ISupplyEntity(scenario.getEntity(address(this)));

        // console.log(
        //     "SupplySystem: deployToken: tokenName: %s and entityAddress: %s",
        //     tokenName,
        //     address(entity)
        // );

        address newToken = _supplyTokenFactory.createSupplyToken(
            _systemController,
            address(scenario),
            // (tokenName),
            bytes32ToString(tokenName),
            tokenSymbol
        );

        // console.log("adding token %s", tokenName);
        entity.addToken(tokenName, newToken);
        return newToken;
    }

    function getId() external pure override returns (string memory) {
        return "SUPPLY";
    }

    function bytes32ToString(
        bytes32 _bytes32
    ) internal pure returns (string memory) {
        uint8 i = 0;
        while (i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (uint8 j = 0; j < i; j++) {
            bytesArray[j] = _bytes32[j];
        }
        return string(bytesArray);
    }

    error NotAdmin();
}
