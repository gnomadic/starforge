pragma solidity ^0.8.0;

contract SupplyEmissionsSystem {
    mapping(address => uint256) public emissionRate;
    mapping(uint256 => uint256) public lastSync;

    function configureToken(address token, uint256 rate) external {
        emissionRate[token] = rate;
    }

    function sync(uint256 tokenId) external {
        uint256 timeDifference = block.timestamp - lastSync[tokenId];
        uint256 mintAmount = timeDifference * emissionRate[msg.sender];
        // Mint tokens for NFT holder
        // Update lastSync[tokenId]
        lastSync[tokenId] = block.timestamp;
    }
}