// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "../ColorUtils.sol";
import "../interfaces/IStepRenderer.sol";

import "hardhat/console.sol";

contract BeltRenderer is IStepRenderer {
    constructor() {}

    function generateDefs(
        uint256 tokenId
    ) external view returns (string memory) {
        return
            string.concat(
                '<filter id="planet">',
                '<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" seed="102" />',
                '<feDisplacementMap in="SourceGraphic" scale="500" />',
                '<feGaussianBlur stdDeviation="0" />',
                "</filter>",
                '<mask id="planetmask">',
                '<circle cx="256" cy="256" r="100" fill="white" />',
                "</mask>"
            );
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {
        return
            string.concat(
                '<circle cx="256" cy="256" r="103" fill="black" stroke-width="5" />',
                '<circle id="water" cx="256" cy="256" r="100" fill="hsl(120, 25%, 80%)" opacity="1" />',
                '<circle id="ground" cx="256" cy="256" r="100" stroke="black" fill="hsl(180, 25%, 80%)" stroke-width="12" filter="url(#planet)" mask="url(#planetmask)" />',
                '<path d="m325 40c-47 11-95 12-142 0v30c47 12 94 12 142-1v-29m-1-3c-12 3-24 6-35 6v-11l35 5m3 17 34 2-12-12 12-14-72-1 38 7v19m-142-17c10 2 21 4 31 6v-14l-31 8m-3 18-30 1 13-15-15-14 67-1-35 9v20" stroke="black" stroke-width="1" fill="#d5d0ba" />',
                '<text x="212" y="68" class="title">KEZ-1280</text>'
            );
    }

    function earlyImage(uint256 tokenId) external view returns (string memory) {
        string memory bg = "";
        return bg;
    }
}
