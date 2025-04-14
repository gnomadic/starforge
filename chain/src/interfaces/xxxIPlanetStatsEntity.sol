// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// ...define struct that matches PlanetStatsSystem...
struct Stats {
    uint8 entropy;
    uint8 rarity;
    uint8[6] stats;
}

interface IPlanetStatsEntity {
    function getNonce() external returns (uint256);
    function setNonce(uint256 newValue) external;

    function getMintPrice() external view returns (uint256);
    function setMintPrice(uint256 newPrice) external;

    function getRarityOdds() external view returns (uint8[6] memory);
    function setRarityOdds(uint8[6] memory newOdds) external;

    function getStats(uint256 tokenId) external view returns (Stats memory);
    function setStats(uint256 tokenId, Stats calldata newStats) external;
}
