// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import {IInvestmentSystem} from "../interfaces/IInvestmentSystem.sol";

contract InvestmentSystem is Ownable, IInvestmentSystem {
    struct GameState {
        uint256 lastTick;
        uint256 newItemRate;
        uint256 beltDuration;
        uint256 activeItem;
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
        gameStates[tokenId].activeItem = 0;
    }

    function tick(uint256 tokenId) public {
        // run simulate tick, update pending gold and update timestamps
    }

    function simulateTick(uint256 tokenId) public view returns (uint256) {
        // see how long it's been since the last real tick
        uint256 elapsed = (block.timestamp - gameStates[tokenId].lastTick) /
            1000;

        //figure out how many items finished

        uint256 itemsFinished = (elapsed - gameStates[tokenId].beltDuration) /
            gameStates[tokenId].newItemRate;

        uint256 pendingGold = itemsFinished * items[gameStates[tokenId].activeItem].baseValue;

        return pendingGold;

        // apply stations to finished items

        // update inventory
    }

    function getGameState(uint256 tokenId)
        external
        view
        returns (GameState memory)
    {
        return gameStates[tokenId];
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
