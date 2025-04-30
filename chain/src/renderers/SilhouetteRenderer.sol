// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import "../ColorUtils.sol";
import "./interfaces/IStepRenderer.sol";
import {LibString} from "../../lib/solady/src/utils/LibString.sol";

// import "hardhat/console.sol";

contract SilhouetteRenderer is IStepRenderer {
    constructor() {}

    function generateDefs(
        uint256 tokenId
    ) external view returns (string memory) {
        uint256 seed = uint256(
            keccak256(abi.encodePacked(tokenId, "FunkRenderer"))
        );
        uint256 hue = seed % 360;
        return
            string.concat(
                
    '<filter id="groundfilter" y="-.2">',
    '<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="5" />',
    '<feDisplacementMap in="SourceAlpha" scale="99" />',
    '</filter>'



            );
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {
 
        return
            string.concat(
                '<rect x="-10%" y="75%" width="120%" height="90%" filter="url(#groundfilter)" />'

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
