// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/utils/Strings.sol";

abstract contract IStepRenderer {
    using Strings for uint256;

    function generateDefs(
        uint256 tokenId
    ) external view virtual returns (string memory);

    function earlyImage(
        uint256 tokeId
    ) external view virtual returns (string memory) {}

    function generateImages(
        uint256 tokeId
    ) external view virtual returns (string memory);

    struct HSL {
        uint16 H;
        uint16 S;
        uint16 L;
    }

    function uintToString(uint256 value) public pure returns (string memory) {
        return value.toString();
    }

    function HSLtoString(HSL memory color) public pure returns (string memory) {
        return
            string(
                abi.encodePacked(
                    "hsl(",
                    ((uint256)(color.H)).toString(),
                    ",",
                    ((uint256)(color.S)).toString(),
                    "%,",
                    ((uint256)(color.L)).toString(),
                    "%)"
                )
            );
    }

    function pseudorandom(
        uint256 tokenId,
        uint256 nonce
    ) public view returns (uint256) {
        return
            uint(keccak256(abi.encodePacked(tokenId, nonce, block.timestamp)));
    }
}
