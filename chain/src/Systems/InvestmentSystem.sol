// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import {IInvestmentSystem} from "../interfaces/IInvestmentSystem.sol";
import {ISystem, ISystemController} from "../interfaces/ISystem.sol";
import {IERC721} from "../interfaces/IERC721.sol";
import {IGlobalProgress} from "../interfaces/IGlobalProgress.sol";

contract InvestmentSystem is Ownable, IInvestmentSystem, ISystem{
    IERC721 public planet;

    mapping(uint256 => Stats) public stats;

    ISystemController public controller;

    
    uint256 investmentCount;
    mapping(uint256 => Investment) public investments;

    struct Stats {
        uint256 lastGaze;
        uint16 gazes;
        mapping(uint256 => uint256) investments;
    }

    struct Investment {
        uint256 id;
        string name;
        bool enabled;
    }

    constructor(address _planet) Ownable(_msgSender()) {
        planet = IERC721(_planet);
    }

    function init(ISystemController _controller, uint256 tokenId) external override {
        controller = _controller;
        stats[tokenId].lastGaze = block.timestamp;
        stats[tokenId].gazes = 0;
    }

    function invest(uint256 tokenId, uint256 investment) public {
        if (planet.ownerOf(tokenId) != msg.sender) revert NotTheOwner();
        if (block.timestamp - stats[tokenId].lastGaze < 14 hours) revert NotEnoughTimePassed();
        stats[tokenId].gazes = stats[tokenId].gazes + 1;
        stats[tokenId].lastGaze = block.timestamp;

        stats[tokenId].investments[investment] = stats[tokenId].investments[investment] + 1;

        ISystem global = controller.getSystem(0);
        if (address(global) != address(0)) {
            IGlobalProgress(address(global)).countEvent("investment");
        }
    }

    function addInvestment(string memory name) public onlyOwner {
        investments[investmentCount] = Investment(investmentCount, name, true);
        investmentCount = investmentCount + 1;
    }

    function getInvestments() public view returns (Investment[] memory) {
        Investment[] memory result = new Investment[](investmentCount);
        for (uint256 i = 0; i < investmentCount; i++) {
            result[i] = investments[i];
        }
        return result;
    }

    error NotTheOwner();
    error NotEnoughTimePassed();
}
