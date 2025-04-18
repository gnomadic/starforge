// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import "../ColorUtils.sol";
import "./interfaces/IStepRenderer.sol";
import {LibString} from "../../lib/solady/src/utils/LibString.sol";

import "hardhat/console.sol";

contract SpaceOrbStepRenderer is IStepRenderer {
    constructor() {}

    function generateDefs(
        uint256 tokenId
    ) external view returns (string memory) {
        uint256 seed = uint256(
            keccak256(abi.encodePacked(tokenId, "SpaceOrbStepRenderer"))
        );
        uint256 hue = seed % 360;
        return
            string.concat(
                '<linearGradient id="cloudGradient" gradientTransform="rotate(20)">',
                '<stop stop-opacity=".1" offset="67%" />',
                '<stop stop-opacity=".3" offset="75%" />',
                '<stop stop-opacity=".1" offset="85%" />',
                "</linearGradient>",
                '<filter id="clouds" x="-50%" y="-50%" height="200%" width="200%">',
                '<feGaussianBlur in="sky" stdDeviation="20" result="skyblur" />',
                '<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="5" result="skynoise" seed="',
                LibString.toString(seed),
                '" />',
                '<feColorMatrix values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 3 -1 -1 0 0" />',
                '<feComposite operator="in" in2="SourceGraphic" />',
                "</filter>",
                '<radialGradient id="dope">',
                '<stop stop-color="hsl(',
                LibString.toString(hue),
                ', 0%, 0%)" offset="00%" />',
                '<stop stop-color="hsl(',
                LibString.toString(hue),
                ', 56%, 41%)" offset="70%" />',
                '<stop stop-color="hsl(',
                LibString.toString(hue),
                ', 56%, 53%)" offset="90%" />',
                '<stop stop-color="hsl(',
                LibString.toString(hue),
                ', 56%, 63%)" offset="95%" />',
                '<stop stop-color="hsl(',
                LibString.toString(hue),
                ', 56%, 83%)" offset="100%" />',
                "</radialGradient>",
                '<filter id="stars">',
                '<feTurbulence baseFrequency=".2" seed="',
                LibString.toString(seed),
                '" />',
                '<feColorMatrix values="0 0 0 9 -4 0 0 0 9 -4 0 0 0 9 -4 0 0 0 0 1" />',
                "</filter>",
                '<filter id="light" primitiveUnits="objectBoundingBox">',
                '<feTurbulence type="fractalNoise" baseFrequency="0.015" />',
                '<feSpecularLighting specularConstant="50" specularExponent="100" surfaceScale="1" lighting-color="hsl(0deg 00% 60%)">',
                '<fePointLight x=".5" y=".5" z=".33" />',
                "</feSpecularLighting>",
                '<feBlend in2="SourceGraphic" />',
                "</filter>"
            );
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {
 
        return
            string.concat(
                '<rect width="100%" height="100%" fill="black" />',
                '<rect width="100%" height="100%" filter="url(#stars)" opacity="0.3" />',
                '<rect width="100%" height="100%" filter="url(#clouds)" fill="url(#cloudGradient)" opacity="1" />',
                '<circle cx="512" cy="512" r="300" fill="none" filter="url(#light)" />',
                '<circle cx="512" cy="512" r="100" fill="url(#dope)" />',
                generateRings(tokenId)
                // '<ellipse cx="512" cy="512" rx="400" ry="250" fill="none" stroke="white" stroke-width="2" transform="rotate(40, 512, 512)" />',
                // '<ellipse cx="512" cy="512" rx="425" ry="275" fill="none" stroke="white" stroke-width="1" transform="rotate(20, 512, 512)" />',
                // '<ellipse cx="512" cy="512" rx="750" ry="300" fill="none" stroke="white" stroke-width="2" transform="rotate(120, 512, 512)" />',
                // '<ellipse cx="512" cy="512" rx="750" ry="300" fill="none" stroke="white" stroke-width="2" transform="rotate(120, 512, 512)" />',
                // '<ellipse cx="512" cy="512" rx="750" ry="300" fill="none" stroke="white" stroke-width="2" transform="rotate(120, 512, 512)" />',
                // '<ellipse cx="512" cy="512" rx="750" ry="300" fill="none" stroke="white" stroke-width="2" transform="rotate(120, 512, 512)" />',
                // '<ellipse cx="512" cy="512" rx="750" ry="300" fill="none" stroke="white" stroke-width="2" transform="rotate(120, 512, 512)" />'
            );
    }

    function earlyImage(uint256 tokenId) external view returns (string memory) {
        string memory bg = "";
        return bg;
    }

    function generateRings(uint256 tokenId) internal view returns (string memory) {
        string memory rings = "";
        uint256 ringCount = 5;
        for (uint256 i = 0; i < ringCount; i++) {
            rings = string.concat(rings, generateRing(tokenId, i));
        }
        return rings;
    }

    function generateRing(uint256 tokenId, uint256 index) internal view returns (string memory) {
        uint256 rx = (psuedorandom(tokenId, index) % 500) + 250;//400;
        uint256 ry = (psuedorandom(tokenId, index) % 250) + 50;//250;
        uint256 stroke = psuedorandom(tokenId, index) % 3;//2;
        uint256 rotation = psuedorandom(tokenId, index) % 360;//20;

        return
            string.concat(
                '<ellipse cx="512" cy="512" rx="',
                LibString.toString(rx),
                '" ry="',
                LibString.toString(ry),
                '" fill="none" stroke="white" stroke-width="',
                LibString.toString(stroke),
                '" transform="rotate(',
                LibString.toString(rotation),
                ', 512, 512)" />'
            );
    }

    function psuedorandom(
        uint256 tokenId,
        uint256 nonce
    ) public pure returns (uint256) {
        return uint(keccak256(abi.encodePacked(tokenId, nonce)));
    }
}
