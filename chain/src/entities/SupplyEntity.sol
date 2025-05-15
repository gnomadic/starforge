// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../Scenario.sol";

// import {console} from "hardhat/console.sol";

interface ISupplyEntity {
    function initialize(IScenario scenario, address system) external;

    function getTokenAddresses() external view returns (address[] memory);

    function getTokenAddress(bytes32 name) external view returns (address);

    function addToken(bytes32 name, address tokenAddress) external;
}

contract SupplyEntity is ISupplyEntity {
    bytes32[] private tokenNames;
    address[] private tokenAddresses;

    IScenario private _scenario;
    address private system;

    bool initialized;

    function initialize(IScenario scenario, address _system) external {
        require(!initialized, "Already initialized");
        initialized = true;
        _scenario = scenario;
        system = _system;
    }

    function getTokenNames() external view returns (bytes32[] memory) {
        return tokenNames;
    }

    function getTokenAddresses() external view returns (address[] memory) {
        return tokenAddresses;
    }

    function getTokenAddress(bytes32 name) external view returns (address) {
        for (uint256 i = 0; i < tokenNames.length; i++) {
            if (tokenNames[i] == name) {
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

    function addToken(bytes32 name, address tokenAddress) external {
        // console.log("entity adding token %s", name);
        if (msg.sender != system) {
            revert NotScenarioAdmin();
        }

        // console.log("pushign to names");
        tokenNames.push(name);
        // console.log("pushign to addresses");
        tokenAddresses.push(tokenAddress);
    }

    error NotScenarioAdmin();
}

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function mint(address to, uint256 amount) external;

    function burn(address from, uint256 amount) external;
}
