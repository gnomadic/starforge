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
    ) external view returns (string memory) {
        uint256 seed = uint256(
            keccak256(abi.encodePacked(tokenId, "SpaceOrbStepRenderer"))
        );
        uint256 hue = seed % 360;
        return
            string.concat(

    '<radialGradient id="dope">'
    '<stop stop-color="hsl(347, 0%, 0%)" offset="00%" />'
    '<stop stop-color="hsl(347, 56%, 41%)" offset="70%" />'
    '<stop stop-color="hsl(347, 56%, 53%)" offset="90%" />'
    '<stop stop-color="hsl(347, 56%, 63%)" offset="95%" />'
    '<stop stop-color="hsl(347, 56%, 83%)" offset="100%" />'
    '</radialGradient>'
    '<filter id="light" primitiveUnits="objectBoundingBox">'
    '<feTurbulence type="fractalNoise" baseFrequency="0.015" >'
    '<animate attributeName="baseFrequency" values="0.01;0.015;0.01" dur="10s" repeatCount="indefinite"  />'
    '</feTurbulence>'
    '<feSpecularLighting specularConstant="50" specularExponent="100" surfaceScale="1" lighting-color="hsl(0deg 00% 60%)">'
    '<fePointLight x=".5" y=".5" z=".33" />'
    '</feSpecularLighting>'
    '<feBlend in2="SourceGraphic" />'
    '</filter>'
    '<radialGradient id="portalStars">',
    '<stop stop-opacity="1" offset="0%" stop-color="white" />',
    '<stop stop-opacity="0" offset="100%" stop-color="white" />',
    '</radialGradient>',
    '<mask id="portalView">',
    '<circle cx="700" cy="350" r="220" fill="url(#portalStars)" />',
    '</mask>',
    '<radialGradient id="galaxy">',
    '<stop offset="0.4" stop-color="black" />',
    '<stop offset=".5" stop-color="#7cc" />',
    '<stop offset=".6" stop-color="#c51" stop-opacity=".5" />',
    '<stop offset=".8" stop-opacity=".01" />',
    '<stop offset="1" stop-opacity="0" />',
    '</radialGradient>',
    '<filter id="galaxyfilter">',
    '<feTurbulence type="fractalNoise" baseFrequency=".01" seed="10" numOctaves="10">',
    '<animate attributeName="baseFrequency" values=".01;.02;.01" dur="30s" repeatCount="indefinite"  />',
    '</feTurbulence>',
    '<feDisplacementMap in="SourceGraphic" scale="100" />',
    '</filter>'


                // '<linearGradient id="cloudGradient" gradientTransform="rotate(20)">',
                // '<stop stop-opacity=".1" offset="67%" />',
                // '<stop stop-opacity=".3" offset="75%" />',
                // '<stop stop-opacity=".1" offset="85%" />',
                // "</linearGradient>",
                // '<filter id="clouds" x="-50%" y="-50%" height="200%" width="200%">',
                // '<feGaussianBlur in="sky" stdDeviation="20" result="skyblur" />',
                // '<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="5" result="skynoise" seed="',
                // LibString.toString(seed),
                // '" />',
                // '<feColorMatrix values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 3 -1 -1 0 0" />',
                // '<feComposite operator="in" in2="SourceGraphic" />',
                // "</filter>",
                // '<radialGradient id="dope">',
                // '<stop stop-color="hsl(',
                // LibString.toString(hue),
                // ', 0%, 0%)" offset="00%" />',
                // '<stop stop-color="hsl(',
                // LibString.toString(hue),
                // ', 56%, 41%)" offset="70%" />',
                // '<stop stop-color="hsl(',
                // LibString.toString(hue),
                // ', 56%, 53%)" offset="90%" />',
                // '<stop stop-color="hsl(',
                // LibString.toString(hue),
                // ', 56%, 63%)" offset="95%" />',
                // '<stop stop-color="hsl(',
                // LibString.toString(hue),
                // ', 56%, 83%)" offset="100%" />',
                // "</radialGradient>",
                // '<filter id="stars">',
                // '<feTurbulence baseFrequency=".2" seed="',
                // LibString.toString(seed),
                // '" />',
                // '<feColorMatrix values="0 0 0 9 -4 0 0 0 9 -4 0 0 0 9 -4 0 0 0 0 1" />',
                // "</filter>",
                // '<filter id="light" primitiveUnits="objectBoundingBox">',
                // '<feTurbulence type="fractalNoise" baseFrequency="0.015" />',
                // '<feSpecularLighting specularConstant="50" specularExponent="100" surfaceScale="1" lighting-color="hsl(0deg 00% 60%)">',
                // '<fePointLight x=".5" y=".5" z=".33" />',
                // "</feSpecularLighting>",
                // '<feBlend in2="SourceGraphic" />',
                // "</filter>"
            );
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {
 
        return
            string.concat(

    '<circle cx="700" cy="350" r="46%" fill="url(#galaxy)" filter="url(#galaxyfilter)" />',
    '<!-- <path d="M10 10 h500 v 500 h -500 z" fill="url(#galaxy)" filter="url(#galaxyfilter)"  />  -->',
    '<circle cx="700" cy="350" r="150" filter="url(#stars)" opacity="1" mask="url(#portalView)" />',
    '<circle cx="700" cy="350" r="230" fill="none" filter="url(#light)" />',
    '<circle cx="700" cy="350" r="75" fill="url(#dope)" />'


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
