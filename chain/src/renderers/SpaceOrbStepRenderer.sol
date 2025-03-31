// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import "../ColorUtils.sol";
import "./interfaces/IStepRenderer.sol";

import "hardhat/console.sol";

contract SpaceOrbStepRenderer is IStepRenderer {
    constructor() {}

    function generateDefs(
        uint256 tokenId
    ) external view returns (string memory) {
        return
            string.concat(
  
    '<filter id="chaotic">',
    '<feTurbulence type="fractalNoise" baseFrequency=".009 .009" numOctaves="12" />',
    '<feDisplacementMap in="SourceGraphic" scale="50" result="disp" />',
    '</filter>',
    '<radialGradient id="rings" spreadMethod="repeat" r="17" gradientUnits="userSpaceOnUse">',
    '<stop offset="0" stop-color="white" />',
    '<stop offset=".1" stop-color="#ffffff00" />',
    '</radialGradient>',
    '<linearGradient id="cloudGradient" gradientTransform="rotate(20)">',
    '<stop stop-opacity=".1" offset="67%" />',
    '<stop stop-opacity=".3" offset="75%" />',
    '<stop stop-opacity=".1" offset="85%" />',
    '</linearGradient>',
    '<filter id="clouds" x="-50%" y="-50%" height="200%" width="200%">',
    '<feGaussianBlur in="sky" stdDeviation="20" result="skyblur" />',
    '<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="5" result="skynoise" seed="4426" />',
    '<feColorMatrix values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 3 -1 -1 0 0" />',
    '<feComposite operator="in" in2="SourceGraphic" />',
    '</filter>',
    '<radialGradient id="dope" fy="0.5" fx="0.5">',
    '<stop stop-color="hsl(347deg, 0%, 0%)" offset="00%" />',
    '<stop stop-color="hsl(347deg, 56%, 41%)" offset="70%" />',
    '<stop stop-color="hsl(347deg, 56%, 53%)" offset="90%" />',
    '<stop stop-color="hsl(347deg, 56%, 63%)" offset="95%" />',
    '<stop stop-color="hsl(347deg, 56%, 83%)" offset="100%" />',
    '</radialGradient>',
    '<filter id="stars">',
    '<feTurbulence baseFrequency=".35" seed="4426" />',
    '<feColorMatrix values="0 0 0 9 -4 0 0 0 9 -4 0 0 0 9 -4 0 0 0 0 1" />',
    '</filter>'


            );
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {
        return
            string.concat(
    '<rect width="100%" height="100%" filter="url(#stars)" opacity="0.7" />',
    '<rect width="100%" height="100%" filter="url(#clouds)" fill="url(#cloudGradient)" opacity="1" />',
    '<circle cx="512" cy="512" r="420" fill="url(#rings)" filter="url(#chaotic)" />',
    '<circle cx="512" cy="512" r="190" fill="url(#dope)" />'
            );
    }

    function earlyImage(uint256 tokenId) external view returns (string memory) {
        string memory bg = "";
        return bg;
    }
}
