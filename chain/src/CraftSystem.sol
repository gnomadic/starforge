// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import {ICraftSystem} from "./interfaces/ICraftSystem.sol";

contract CraftSystem is Ownable, ICraftSystem {
    struct GameState {
        uint256 lastTick;
        uint256 newItemRate;
        uint256 beltDuration;
    }

    struct Item {
        uint256 baseValue;
    }

    struct Station {
        uint256 valueAdd;
    }

    mapping(uint256 => GameState) public gameStates; //maps token to game state
    mapping(uint256 => Station) public stations;
    mapping(uint256 => Item) public items;

    constructor() Ownable(_msgSender()) {}

    function init(uint256 tokenId) external override {
        gameStates[tokenId].lastTick = block.timestamp;
        gameStates[tokenId].newItemRate = 2;
        gameStates[tokenId].beltDuration = 10;
    }

    function tick(uint256 tokenId) public {
        // run simulate tick, update pending gold and update timestamps
    }

    function simulateTick(uint256 tokenId) public view {
        // see how long it's been since the last real tick
        uint256 elapsed = (block.timestamp - gameStates[tokenId].lastTick) /
            1000;

        //figure out how many items finished

        uint256 itemsFinished = (elapsed - gameStates[tokenId].beltDuration) /
            gameStates[tokenId].newItemRate;

        // apply stations to finished items

        // update inventory
    }

    function addItem(uint256 index, uint256 baseValue) public {
        if (msg.sender != loader) revert UNAUTHORIZED();

        items[index] = Item(baseValue);
    }

    function addStation(uint256 index, uint256 valueAdd) public {
        if (msg.sender != loader) revert UNAUTHORIZED();
        stations[index] = Station(valueAdd);
    }

    address loader;

    function setLoader(address _loader) public onlyOwner {
        loader = _loader;
    }

    error UNAUTHORIZED();
}
