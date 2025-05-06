// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import "../ColorUtils.sol";
import "./interfaces/IStepRenderer.sol";
import {LibString} from "../../lib/solady/src/utils/LibString.sol";

// import "hardhat/console.sol";

contract FunkRenderer is IStepRenderer {
    constructor() {}

    function generateDefs(
        uint256 tokenId
    ) external view override returns (string memory) {
        uint256 funk = pseudorandom(tokenId, 1) % 4;
        uint256 chaos = pseudorandom(tokenId, 2) % 20;
        uint256 depth = pseudorandom(tokenId, 3) % 60;
        uint256 shape = pseudorandom(tokenId, 4) % 2;

        if (funk == 0) {
            //25% chance of straight lines
            chaos = 0;
        }

        // if (funk == 0)
        return
            string.concat(
                // '<pattern id="lines" width="1" height="',
                // uintToString(30 + depth),
                // '" patternUnits="userSpaceOnUse">',
                getShapePattern(shape),
                // '<path d="m0 14h1v2H0" fill="#fff" />',
                // "</pattern>",
                '<filter id="wiggle">',
                '<feTurbulence type="fractalNoise" baseFrequency="0.0',
                uintToString(chaos),
                '" numOctaves="5" seed="',
                uintToString(tokenId),
                '"/>',
                '<feDisplacementMap in="SourceGraphic" scale="50" />',
                "</filter>"
            );
    }

    function getShapePattern(
        uint256 tokenId
    ) internal view returns (string memory) {
        // uint256 shape = pseudorandom(tokenId, 4) % 2;

        // if (shape == 0) {
        //     return
        //         string.concat(
        //             '<radialGradient id="rings" spreadMethod="repeat" r="17" cx="256" cy="256" gradientUnits="userSpaceOnUse">',
        //             '<stop offset="0" stop-color="white"/>',
        //             '<stop offset=".1" stop-color="#ffffff00"/>',
        //             "</radialGradient>"
        //         );
        // } else {
        uint256 depth = pseudorandom(tokenId, 3) % 60;

        return
            string.concat(
                '<pattern id="lines" width="1" height="',
                uintToString(30 + depth),
                '" patternUnits="userSpaceOnUse">',
                '<path d="m0 14h1v2H0" fill="#fff" />',
                "</pattern>"
            );

        //  '<path d="m0 14h1v2H0" fill="#fff" />';
        // }
    }

    function getShapeImage(
        uint256 shape
    ) internal pure returns (string memory) {
        // if (shape == 0) {
        //     return
        //         '<circle cx="256" cy="256" r="300"  fill="url(#rings)" filter="url(#wiggle)" />';
        // } else {
        return
            '<rect x="0" y="20%" width="100%" height="33%" fill="url(#lines)" filter="url(#wiggle)" />';
        // }
    }

    function generateImages(
        uint256 tokenId
    ) external view override returns (string memory) {
        // uint256 funk = pseudorandom(tokenId, 1) % 2;
        // if (funk == 0)
        uint256 shape = pseudorandom(tokenId, 4) % 2;

        return
            string.concat(
                getShapeImage(shape)
                // '<rect x="0" y="20%" width="100%" height="33%" fill="url(#lines)" filter="url(#wiggle)" />'
            );
        // else {
        //     return
        //         string.concat(
        //             '<line x1="0" x2="1024" y1="200" y2="200" stroke="white" stroke-width="5" />',
        //             '<line x1="0" x2="1024" y1="300" y2="300" stroke="white" stroke-width="5" />',
        //             '<line x1="0" x2="1024" y1="400" y2="400" stroke="white" stroke-width="5" />',
        //             '<line x1="0" x2="1024" y1="500" y2="500" stroke="white" stroke-width="5" />'
        //         );
        // }

        // <rect x="" y="33%" width="100%" height="33%" fill="url(#pattern)" filter="url(#filter)" />
    }
}
