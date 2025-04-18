// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/Clones.sol";

import { console } from "hardhat/console.sol";

interface ISupplyToken {
    function initialize(string memory name, string memory symbol, address systemController, address scenario) external;
}

contract SupplyTokenFactory {
    using Clones for address;

    address public immutable implementation;

    event SupplyTokenCreated(address indexed proxy, address indexed owner, string name, string symbol);

    constructor(address _implementation) {
        require(_implementation != address(0), "Implementation address cannot be zero");
        implementation = _implementation;
    }

    function createSupplyToken(
        address systemController,
        address scenario,
        string memory name,
        string memory symbol
    ) external returns (address) {
   
        console.log("supplyTokenFactory: creating token %s", name);

        address proxy = implementation.clone();
                console.log("ok cloned at %s", proxy);

        ISupplyToken(proxy).initialize(name, symbol, systemController, scenario );
                console.log("intialized token %s", name);

        emit SupplyTokenCreated(proxy, msg.sender, name, symbol);
                console.log('done');

        return proxy;
    }
}