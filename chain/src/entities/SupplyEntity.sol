// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";
import {console} from "hardhat/console.sol";

contract SupplyEntity {
    string[] private tokenNames;
    address[] private tokenAddresses;

    IScenario private _scenario;
    address private system;

    constructor() {}

    bool initialized = false;

    function initialize(IScenario scenario, address _system) external {
        require(!initialized, "Already initialized");
        initialized = true;
        _scenario = scenario;
        system = _system;
    }

    function getTokenNames() external view returns (string[] memory) {
        return tokenNames;
    }

    function getTokenAddresses() external view returns (address[] memory) {
        return tokenAddresses;
    }

    function getTokenAddress(
        string memory name
    ) external view returns (address) {
        for (uint256 i = 0; i < tokenNames.length; i++) {
            if (
                keccak256(abi.encodePacked(tokenNames[i])) ==
                keccak256(abi.encodePacked(name))
            ) {
                return tokenAddresses[i];
            }
        }
        revert("Token not found");
    }

    function getTokenBalances(
        address account
    ) external view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](tokenAddresses.length);
        for (uint256 i = 0; i < tokenAddresses.length; i++) {
            balances[i] = IERC20(tokenAddresses[i]).balanceOf(account);
        }
        return balances;
    }

    // function setTokens(
    //     string[] memory name,
    //     address[] memory addresses
    // ) external {
    //     if (msg.sender != _scenario.getAdmin()) {
    //         revert NotScenarioAdmin();
    //     }
    //     require(
    //         name.length == addresses.length,
    //         "Name and address arrays must be the same length"
    //     );
    //     for (uint256 i = 0; i < name.length; i++) {
    //         tokenNames.push(name[i]);
    //         tokenAddresses.push(addresses[i]);
    //     }
    // }

    function addToken(string memory name, address tokenAddress) external {
        console.log("entity adding token %s", name);
        if (msg.sender != system) {
            revert NotScenarioAdmin();
        }

        console.log("pushign to names");
        tokenNames.push(name);
        console.log("pushign to addresses");
        tokenAddresses.push(tokenAddress);
    }

    error NotScenarioAdmin();
}

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function mint(address to, uint256 amount) external;

    function burn(address from, uint256 amount) external;
}
