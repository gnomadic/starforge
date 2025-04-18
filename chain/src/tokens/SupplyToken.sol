// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "solady/tokens/ERC20.sol";
import {ISystem, ISystemController} from "../systems/interfaces/ISystem.sol";
import {IScenario} from "../Scenario.sol";
import {console} from "hardhat/console.sol";

contract SupplyToken is ERC20 {
    string private _name;
    string private _symbol;
    ISystemController private _systems;
    IScenario private _scenario;

    constructor() {}

    bool private initialized = false;

    function initialize(
        string memory newName,
        string memory newSymbol,
        address controller,
        address scenario
    ) external {
        require(!initialized, "Already initialized");
        initialized = true;
        _name = newName;
        _symbol = newSymbol;
        _systems = ISystemController(controller);
        _scenario = IScenario(scenario);
    }

    function name() public view override returns (string memory) {
        return _name;
    }

    function symbol() public view override returns (string memory) {
        return _symbol;
    }

    function mint(address to, uint256 amount) public onlySystemAndAdmin {
        // console.log("system: %s", address(_systems));

        // bool isSystem = _systems.isSystem(msg.sender);
        // bool isAdmin = msg.sender == _scenario.getAdmin();
        // console.log("isSystem: %s", isSystem);
        // console.log("isAdmin: %s", isAdmin);
        // if (
        //     _systems.isSystem(msg.sender) == false &&
        //     msg.sender != _scenario.getAdmin()
        // ) {
        //     console.log("NOPE");
        // }
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlySystemAndAdmin {
        _burn(from, amount);
    }

    modifier onlySystemAndAdmin() {
        if (
            _systems.isSystem(msg.sender) == false &&
            msg.sender != _scenario.getAdmin()
        ) {
            revert NotSystem();
        }
        _;
    }

    error NotSystem();
}
