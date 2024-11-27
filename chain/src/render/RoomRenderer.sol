// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "../ColorUtils.sol";
import "../interfaces/IStepRenderer.sol";

import "hardhat/console.sol";

contract RoomRenderer is IStepRenderer {
    constructor() {}

    function generateDefs(
        uint256 tokenId
    ) external view returns (string memory) {
        return
            string.concat(
                '<pattern id="floorplank" x="0" y="0" width=".098" height=".078">',
                '<rect x="0" y="0" width="50" height="20" fill="#b37a01" stroke="black" />',
                '<rect x="-25" y="20" width="50" height="20" fill="#b37a01" stroke="black" />',
                '<rect x="25" y="20" width="50" height="20" fill="#b37a01" stroke="black" />',
                "</pattern>"
            );
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {}

    function earlyImage(uint256 tokenId) external view returns (string memory) {
        string memory bg = '<path fill="black" d="M0 0h512v512H0z"/>';
        bg = string.concat(
            bg,
            "<g>",
            '<rect fill="url(#floorplank)" width="512" height="512" />',
            "</g>"
        );

        return bg;
    }
}
