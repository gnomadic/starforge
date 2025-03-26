// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import '../ColorUtils.sol';

interface IRenderer {
    function generateSVG(
        uint256 tokenId
    ) external view returns (string memory);
}
