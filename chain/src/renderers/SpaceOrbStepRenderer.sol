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
    '<radialGradient id="dope">',
    '<stop stop-color="hsl(347, 0%, 0%)" offset="00%" />',
    '<stop stop-color="hsl(347, 56%, 41%)" offset="70%" />',
    '<stop stop-color="hsl(347, 56%, 53%)" offset="90%" />',
    '<stop stop-color="hsl(347, 56%, 63%)" offset="95%" />',
    '<stop stop-color="hsl(347, 56%, 83%)" offset="100%" />',
    '</radialGradient>',
    '<filter id="stars">',
    '<feTurbulence baseFrequency=".2" seed="4426" />',
    '<feColorMatrix values="0 0 0 9 -4 0 0 0 9 -4 0 0 0 9 -4 0 0 0 0 1" />',
    '</filter>',
    '<filter id="light" primitiveUnits="objectBoundingBox">',
    '<feTurbulence type="fractalNoise" baseFrequency="0.015" />',
    '<feSpecularLighting specularConstant="50" specularExponent="100" surfaceScale="1" lighting-color="hsl(0deg 00% 60%)">',
    '<fePointLight x=".5" y=".5" z=".33" />',
    '</feSpecularLighting>',
    '<feBlend in2="SourceGraphic" />',
    '</filter>'


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
    '<ellipse cx="512" cy="512" rx="400" ry="250" fill="none" stroke="white" stroke-width="2" transform="rotate(40, 512, 512)" />',
    '<ellipse cx="512" cy="512" rx="425" ry="275" fill="none" stroke="white" stroke-width="1" transform="rotate(20, 512, 512)" />',
    '<ellipse cx="512" cy="512" rx="750" ry="300" fill="none" stroke="white" stroke-width="2" transform="rotate(120, 500, 500)" />',
    '<ellipse cx="512" cy="512" rx="750" ry="300" fill="none" stroke="white" stroke-width="2" transform="rotate(120, 500, 500)" />',
    '<ellipse cx="512" cy="512" rx="750" ry="300" fill="none" stroke="white" stroke-width="2" transform="rotate(120, 500, 500)" />',
    '<ellipse cx="512" cy="512" rx="750" ry="300" fill="none" stroke="white" stroke-width="2" transform="rotate(120, 500, 500)" />',
    '<ellipse cx="512" cy="512" rx="750" ry="300" fill="none" stroke="white" stroke-width="2" transform="rotate(120, 500, 500)" />'

            );
    }

    function earlyImage(uint256 tokenId) external view returns (string memory) {
        string memory bg = "";
        return bg;
    }
}
