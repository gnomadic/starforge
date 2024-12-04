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
        return "";
        // return
        //     string.concat(
        //         '<pattern id="floorplank" x="0" y="0" width=".098" height=".078" fill="hsl(171, 32%, 32%)" stroke="black">',
        //         '<rect x="0" y="0" width="50" height="20" />',
        //         '<rect x="-25" y="20" width="50" height="20" />',
        //         '<rect x="25" y="20" width="50" height="20" />',
        //         "</pattern>"
        //     );
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {}

    function earlyImage(uint256 tokenId) external view returns (string memory) {
        string memory bg = '<path fill="black" d="M0 0h512v512H0z"/>';
        bg = string.concat(
            bg,
            "<g>",
            '<path fill="#2f2f2f" d="M0 0h512v512H0z"/>',
            '<path fill="#b9b8b8" d="M12 12q-24 160 0 374 232 24 488 0 24-160 0-374-232-24-488 0"/>',
            '<path fill="#575757" d="M24 24Q0 184 24 374q232 24 464 0 24-160 0-350Q256 0 24 24m0 396h469l41 130H-26z"/>',
            // '<path fill="url(#floorplank)" d="M0 0h512v512H0z"/>'
            "</g>"
        );

        return bg;
    }
}
