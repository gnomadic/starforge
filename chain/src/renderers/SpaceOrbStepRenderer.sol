// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import "../ColorUtils.sol";
import "./interfaces/IStepRenderer.sol";
import {LibString} from "../../lib/solady/src/utils/LibString.sol";

// import "hardhat/console.sol";

contract SpaceOrbStepRenderer is IStepRenderer {
    constructor() {}

    function generateDefs(
        uint256 tokenId
    ) external view override returns (string memory) {
        uint16 hue = (uint16)(pseudorandom(tokenId, 0) % 360);
        hue = (hue + 180) % 360;

        uint16 xPos = (uint16)(pseudorandom(tokenId, 0) % 600);

        return
            string.concat(
                '<radialGradient id="dope">'
                '<stop stop-color="hsl(',
                uintToString(hue),
                ', 0%, 0%)" offset="00%" />'
                '<stop stop-color="hsl(',
                uintToString(hue),
                ', 56%, 41%)" offset="70%" />'
                '<stop stop-color="hsl(',
                uintToString(hue),
                ', 56%, 53%)" offset="90%" />'
                '<stop stop-color="hsl(',
                uintToString(hue),
                ', 56%, 63%)" offset="95%" />'
                '<stop stop-color="hsl(',
                uintToString(hue),
                ', 56%, 83%)" offset="100%" />'
                "</radialGradient>"
                '<filter id="light" primitiveUnits="objectBoundingBox">'
                '<feTurbulence type="fractalNoise" baseFrequency="0.015" >'
                '<animate attributeName="baseFrequency" values="0.01;0.015;0.01" dur="10s" repeatCount="indefinite"  />'
                "</feTurbulence>"
                '<feSpecularLighting specularConstant="50" specularExponent="100" surfaceScale="1" lighting-color="hsl(0deg 00% 60%)">'
                '<fePointLight x=".5" y=".5" z=".33" />'
                "</feSpecularLighting>"
                '<feBlend in2="SourceGraphic" />'
                "</filter>"
                '<radialGradient id="portalStars">',
                '<stop stop-opacity="1" offset="0%" stop-color="white" />',
                '<stop stop-opacity="0" offset="100%" stop-color="white" />',
                "</radialGradient>",
                '<mask id="portalView">',
                '<circle cx="',
                uintToString(300 + xPos),
                '" cy="350" r="220" fill="url(#portalStars)" />',
                "</mask>",
                '<radialGradient id="galaxy">',
                '<stop offset="0.4" stop-color="black" />',
                '<stop offset=".5" stop-color="#7cc" />',
                '<stop offset=".6" stop-color="#c51" stop-opacity=".5" />',
                '<stop offset=".8" stop-opacity=".01" />',
                '<stop offset="1" stop-opacity="0" />',
                "</radialGradient>",
                '<filter id="galaxyfilter">',
                '<feTurbulence type="fractalNoise" baseFrequency=".01" seed="10" numOctaves="10">',
                '<animate attributeName="baseFrequency" values=".01;.02;.01" dur="30s" repeatCount="indefinite"  />',
                "</feTurbulence>",
                '<feDisplacementMap in="SourceGraphic" scale="100" />',
                "</filter>"
            );
    }

    function generateImages(
        uint256 tokenId
    ) external view override returns (string memory) {
        uint16 xPos = (uint16)(pseudorandom(tokenId, 0) % 600);

        return
            string.concat(
                '<circle cx="',
                uintToString(300 + xPos),
                '" cy="350" r="46%" fill="url(#galaxy)" filter="url(#galaxyfilter)" />',
                '<circle cx="',
                uintToString(300 + xPos),
                '" cy="350" r="150" filter="url(#stars)" opacity="1" mask="url(#portalView)" />',
                '<circle cx="',
                uintToString(300 + xPos),
                '" cy="350" r="230" fill="none" filter="url(#light)" />',
                '<circle cx="',
                uintToString(300 + xPos),
                '" cy="350" r="75" fill="url(#dope)" />'
            );
    }

    function earlyImage(
        uint256 tokenId
    ) external view override returns (string memory) {
        string memory bg = "";
        return bg;
    }
}
