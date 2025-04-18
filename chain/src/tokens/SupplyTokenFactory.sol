// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/Clones.sol";

interface ISupplyToken {
    function initialize(string memory name, string memory symbol, address systemController) external;
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
        string memory name,
        string memory symbol
    ) external returns (address) {
        address proxy = implementation.clone();
        ISupplyToken(proxy).initialize(name, symbol, systemController);
        emit SupplyTokenCreated(proxy, msg.sender, name, symbol);
        return proxy;
    }
}