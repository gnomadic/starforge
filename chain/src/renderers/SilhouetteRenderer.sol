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
    ) external view override returns (string memory) {
        uint256 seed = uint256(
            keccak256(abi.encodePacked(tokenId, "FunkRenderer"))
        );
        uint256 hue = seed % 360;
        return
            string.concat(
                '<filter id="groundfilter" y="-.2">',
                '<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="5" />',
                '<feDisplacementMap in="SourceAlpha" scale="99" />',
                "</filter>"
            );
    }

    function generateImages(
        uint256 tokenId
    ) external view override returns (string memory) {
        return
            string.concat(
                '<rect x="-10%" y="75%" width="120%" height="90%" filter="url(#groundfilter)" />'
            );
    }

    function earlyImage(
        uint256 tokenId
    ) external view override returns (string memory) {
        string memory bg = "";
        return bg;
    }
}
