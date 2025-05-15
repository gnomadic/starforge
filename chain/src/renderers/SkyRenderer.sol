// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import "../ColorUtils.sol";
import "./interfaces/IStepRenderer.sol";
import {LibString} from "../../lib/solady/src/utils/LibString.sol";

contract SkyRenderer is IStepRenderer {
    function generateDefs(
        uint256 tokenId
    ) external pure override returns (string memory) {
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
                uintToString(tokenId),
                '" />',
                '<feColorMatrix values="1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 3 -1 -1 0 0" />',
                '<feComposite operator="in" in2="SourceGraphic" />',
                "</filter>",
                '<filter id="stars">',
                '<feTurbulence baseFrequency=".2" seed="',
                uintToString(tokenId),
                '" />',
                '<feColorMatrix values="0 0 0 9 -4 0 0 0 9 -4 0 0 0 9 -4 0 0 0 0 1" />',
                "</filter>"
            );
    }

    function generateImages(
        uint256 tokenId
    ) external view override returns (string memory) {
        uint16 hue = (uint16)(pseudorandom(tokenId, 0) % 360);
        HSL memory color = HSL(hue, 34, 39);
        return
            string.concat(
                '<rect x="0" y="0" stroke="black" fill="',
                HSLtoString(color),
                '" stroke-width="2" width="1024" height="1024" />',
                '<rect width="100%" height="100%" filter="url(#stars)" opacity="0.5" />',
                '<rect width="100%" height="100%" filter="url(#clouds)" fill="url(#cloudGradient)" opacity="1" />'
            );
    }
}
