// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "solady/tokens/ERC20.sol";

contract LifeToken is ERC20 {
    address public controller;

    constructor() {
        controller = msg.sender;
    }

    function name() public pure override returns (string memory) {
        return "LifeToken";
    }

    function symbol() public pure override returns (string memory) {
        return "LIFE";
    }

    function mint(address to, uint256 amount) public onlyController {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyController {
        _burn(from, amount);
    }

    function revokeAndSetController(address _controller) public onlyController {
        controller = _controller;
    }

    modifier onlyController() {
        require(
            msg.sender == controller,
            "Only the Controller can call this function"
        );
        _;
    }
}
