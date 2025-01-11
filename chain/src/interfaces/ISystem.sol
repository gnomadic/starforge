

pragma solidity ^0.8.24;

interface ISystem {
    function init(uint256 tokenId) external;
}

interface ISystemController {
    function initAll(uint256 tokenId) external;
}