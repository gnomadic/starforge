// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import "../ColorUtils.sol";
import "./interfaces/IStepRenderer.sol";
import {LibString} from "../../lib/solady/src/utils/LibString.sol";

import "hardhat/console.sol";

contract FunkRenderer is IStepRenderer {
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
                
''


            );
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {
 
        return
            string.concat(
    '<line x1="0" x2="1024" y1="200" y2="200" stroke="white" stroke-width="5" />',
    '<line x1="0" x2="1024" y1="300" y2="300" stroke="white" stroke-width="5" />',
    '<line x1="0" x2="1024" y1="400" y2="400" stroke="white" stroke-width="5" />',
    '<line x1="0" x2="1024" y1="500" y2="500" stroke="white" stroke-width="5" />'

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
