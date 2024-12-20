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
            '<linearGradient id="skyGradient" gradientTransform="rotate(31)">',
            '<stop offset="0%" stop-color="hsl(10,100%,30%)" />',
            '<stop offset="100%" stop-color="hsl(70,100%,30%)" />',
            '</linearGradient>',
            '<linearGradient id="cloudGradient" gradientTransform="rotate(20)">',
            '<stop stop-opacity="0" offset="65%" />',
            '<stop stop-opacity="1" offset="75%" />',
            '<stop stop-opacity="0" offset="86%" />',
            '</linearGradient>',
            '<filter id="stars">',
            '<feTurbulence baseFrequency=".35" seed="4426" />',
            '<feColorMatrix values="0 0 0 9 -4 0 0 0 9 -4 0 0 0 9 -4 0 0 0 0 1" />',
            '</filter>',
            '<filter id="clouds" x="-50%" y="-50%" height="200%" width="200%">',
            '<feGaussianBlur in="sky" stdDeviation="20" result="skyblur" />',
            '<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="5" result="skynoise" seed="4426" />',
            '<feColorMatrix values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 3 -1 -1 0 0" />',
            '<feComposite operator="in" in2="SourceGraphic" />',
            '</filter>'

            );
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {}

    function earlyImage(uint256 tokenId) external view returns (string memory) {
        string memory bg = '<path fill="black" d="M0 0h512v512H0z"/>';
        bg = string.concat(
            bg,


        '<rect width="100%" height="100%" filter="url(#stars)" opacity="1" />',
        '<path fill="url(#skyGradient)" d="M0 0h512v512H0z" opacity=".7" />',
        '<path fill="url(#cloudGradient)" filter="url(#clouds)" d="M-512-512h1536v1536h-2048z">',
        '</path>',
        '<g fill="#fff">',
        '<circle r="3" cx="90" cy="404" opacity="0.3">',
        '<animate attributeName="r" values="0;5;3" dur="1s" />',
        '</circle>',
        '<circle r="1" cx="90" cy="404">',
        '<animate attributeName="r" values="1;0;2;1;1;1;1;1;1;1" dur="2s" start="2s" repeatCount="indefinite" />',
        '</circle>',
        '<circle r="1" cx="400" cy="400" fill="#fff" opacity="1">',
        '<animate attributeName="r" values="1;0;2;1;1;1;1;1;1;1" dur="4s" start="4s" repeatCount="indefinite" />',
        '</circle>',
        '<path d="M 185,351c 7,0 7,0 7,-7 c 0,7 0,7 7,7 c -7,0 -7,0 -7,7 c 0,-7 0,-7 -7,-7">',
        '<animate attributeName="r" values="1;0;1;1;1;1;1;1;1" dur="1s" start="1s" repeatCount="indefinite" />',
        '</path>',
        '<path d="M 155,46c 7,0 7,0 7,-7 c 0,7 0,7 7,7 c -7,0 -7,0 -7,7 c 0,-7 0,-7 -7,-7">',
        '<animate attributeName="r" values="1;0;1;1;1;1;1;1;1" dur="1s" start="1s" repeatCount="indefinite" />',
        '</path>',
        '<circle r="1" cx="190" cy="190" fill="#fff" opacity="1">',
        '<animate attributeName="r" values="1;0;2;1;1;1;1;1;1;1" dur="2s" start="2s" repeatCount="indefinite" />',
        '</circle>',
        '<path d="M 236,449c 7,0 7,0 7,-7 c 0,7 0,7 7,7 c -7,0 -7,0 -7,7 c 0,-7 0,-7 -7,-7">',
        '<animate attributeName="r" values="1;0;1;1;1;1;1;1;1" dur="4s" start="4s" repeatCount="indefinite" />',
        '</path>',
        '<circle r="1" cx="112" cy="112" fill="#fff" opacity="1">',
        '<animate attributeName="r" values="1;0;2;1;1;1;1;1;1;1" dur="2s" start="2s" repeatCount="indefinite" />',
        '</circle>',
        '</g>'


            // "<g>",
            // '<path fill="#2f2f2f" d="M0 0h512v512H0z"/>',
            // '<path fill="#b9b8b8" d="M12 12q-24 160 0 374 232 24 488 0 24-160 0-374-232-24-488 0"/>',
            // '<path fill="#575757" d="M24 24Q0 184 24 374q232 24 464 0 24-160 0-350Q256 0 24 24m0 396h469l41 130H-26z"/>',
            // // '<path fill="url(#floorplank)" d="M0 0h512v512H0z"/>'
            // "</g>"
        );

        return bg;
    }
}
