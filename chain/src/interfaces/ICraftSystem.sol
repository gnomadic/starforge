// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface ICraftSystem {
    function init(uint256 tokenId) external;

    function addItem(uint256 index, uint256 baseValue) external;

    function addStation(uint256 index, uint256 valueAdd) external;
}
