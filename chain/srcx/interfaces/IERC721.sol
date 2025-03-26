pragma solidity ^0.8.24;

interface IERC721 {
    function ownerOf(uint256 tokenId) external view returns (address);
}
