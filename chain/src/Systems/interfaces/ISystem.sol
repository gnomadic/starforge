// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

interface ISystem {
    function init(ISystemController controller, uint256 tokenId) external;
    function sync(uint256 tokenId) external;
}

interface ISystemController {
    function initAll(uint256 tokenId) external;
    function getSystem(uint8 id) external view returns (ISystem);
    
}

struct TokenRate {
    uint256 rate;
    address token;
}