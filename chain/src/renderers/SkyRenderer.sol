// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import "../ColorUtils.sol";
import "./interfaces/IStepRenderer.sol";
import {LibString} from "../../lib/solady/src/utils/LibString.sol";

// import "hardhat/console.sol";

contract SkyRenderer is IStepRenderer {
    constructor() {}

    function generateDefs(
        uint256 tokenId
    ) external view returns (string memory) {
        uint256 seed = uint256(
            keccak256(abi.encodePacked(tokenId, "SkyRenderer"))
        );
        uint256 hue = seed % 360;
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
    '<filter id="stars">',
    '<feTurbulence baseFrequency=".2" seed="4426" />',
    '<feColorMatrix values="0 0 0 9 -4 0 0 0 9 -4 0 0 0 9 -4 0 0 0 0 1" />',
    '</filter>'


            );
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {
 
        return
            string.concat(
    '<rect x="0" y="0" stroke="black" fill="#426786" stroke-width="2" width="1024" height="1024" />',
    '<rect width="100%" height="100%" filter="url(#stars)" opacity="0.3" />',
    '<rect width="100%" height="100%" filter="url(#stars)" opacity="0.3" />',
    '<rect width="100%" height="100%" filter="url(#clouds)" fill="url(#cloudGradient)" opacity="1" />'
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
