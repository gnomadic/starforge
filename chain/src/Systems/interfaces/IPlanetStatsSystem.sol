// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IPlanetStatsSystem {
    // function calculateStatsForMint(uint256 tokenId) external;

    function getMintPrice() external view returns (uint256);
}
