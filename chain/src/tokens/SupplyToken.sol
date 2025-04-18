// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "solady/tokens/ERC20.sol";
import {ISystem, ISystemController} from "../systems/interfaces/ISystem.sol";

contract SupplyToken is ERC20 {
    string private _name;
    string private _symbol;
    ISystemController private _systems;

    constructor() {
    }

    bool private initialized = false;

    function initialize(
        string memory newName,
        string memory newSymbol,
        address controller
    ) external {
        require(!initialized, "Already initialized");
        initialized = true;
        _name = newName;
        _symbol = newSymbol;
        _systems = ISystemController(controller);
    }

    function name() public view override returns (string memory) {
        return _name;
    }

    function symbol() public view override returns (string memory) {
        return _symbol;
    }

    function mint(address to, uint256 amount) public onlySystem {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlySystem {
        _burn(from, amount);
    }

    modifier onlySystem() {
        if (_systems.isSystem(msg.sender) == false) {
            revert NotSystem();
        }
        _;
    }

    error NotSystem();
}
