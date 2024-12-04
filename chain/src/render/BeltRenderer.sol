// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "../ColorUtils.sol";
import "../interfaces/IStepRenderer.sol";

import "hardhat/console.sol";

contract BeltRenderer is IStepRenderer {
    constructor() {}

    function generateDefs(
        uint256 tokenId
    ) external view returns (string memory) {
        return string.concat("", "");
    }

    function generateImages(
        uint256 tokenId
    ) external view returns (string memory) {
        return
            string.concat(
                '<g id="edges" stroke="hsl(126, 100%, 50%)">',
                '<path d="m88 180 38-50m-38 50 38 50m62-100 38-50m-38 50 38 50m-38-50 38 150m-38-50 38-150m-38 150 38-50m-38 50 38 50m62-200 38 50m-38-50 38 150m-38-50 38-50m-38 50 38 50m-38 50 38-150m-38 150 38-50m62-100 38 50m-38 50 38-50" stroke-width="5" fill="none" stroke-linecap="round" />',
                "</g>"
                '<g id="stations" stroke="hsl(126, 100%, 50%)" stroke-dasharray="0 5 0" >',
                '<path d="M32 156h48v48H32zm100-50h48v48h-48zm0 100h48v48h-48zM232 56h48v48h-48zm0 100h48v48h-48zm0 100h48v48h-48zm100-150h48v48h-48zm0 100h48v48h-48zm100-50h48v48h-48z" />',
                '</g>'

                // '<path stroke-width="40" d="M 80 50 v 400 h 400 v -300 h -325 v 225 h 250 v -150 h -175 v 75" fill="none" ',
                // 'stroke-linecap="round" stroke="#565656" />'
            );
    }

    function earlyImage(uint256 tokenId) external view returns (string memory) {
        string memory bg = "";
        return bg;
    }
}
