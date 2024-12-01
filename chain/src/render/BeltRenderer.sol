// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "../ColorUtils.sol";
import "../interfaces/IStepRenderer.sol";

import "hardhat/console.sol";

contract BeltRenderer is IStepRenderer {
    

    constructor() {
    
    }

    function generateDefs(
        uint256 tokenId
    ) external view returns (string memory) {
        return string.concat("", "");
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {
        string memory bg = "";
        bg = string.concat(
            bg,
            '<path stroke-width="40" d="M 80 50 v 400 h 400 v -300 h -325 v 225 h 250 v -150 h -175 v 75" fill="none" ',
            'stroke-linecap="round" stroke="#565656" />'
        );
        return bg;
    }

    function earlyImage(uint256 tokenId) external view returns (string memory) {
        string memory bg = '';
        return bg;
    }
}
