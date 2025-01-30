// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "solady/tokens/ERC20.sol";

contract PopulationToken is ERC20 {
    // constructor() ERC20("PopulationToken", "POP", 18) {

    //     _mint(msg.sender, 1000000 * 10 ** 18); // Mint 1,000,000 tokens to the deployer
    // }

    function name() public pure override returns (string memory) {
        return "PopulationToken";
    }

    /// @dev Returns the symbol of the token.
    function symbol() public pure override returns (string memory) {
        return "POP";
    }
}
