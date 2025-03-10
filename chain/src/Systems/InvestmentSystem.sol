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


uint256 public cycleTime = 10;

    struct Stats {
        uint256 lastPurchase;
        uint16 purchaseCount;
        mapping(uint256 => uint256) investments;
        uint256 lastSyncAt;
    }

    struct Investment {
        uint256 id;
        string name;
        bool enabled;

        address[] burnAdds;
        uint256[] burnRates;
        address[] mintAdds;
        uint256[] mintRates;    
    }

    constructor(address _planet) Ownable(_msgSender()) {
        planet = IERC721(_planet);
    }

    function init(ISystemController _controller, uint256 tokenId) external override {
        controller = _controller;
        stats[tokenId].lastPurchase = block.timestamp;
        stats[tokenId].purchaseCount = 0;
    }

    function sync(uint256 tokenId) external override {

        uint256 delta = block.timestamp - stats[tokenId].lastSyncAt;
        uint256 cycles = delta / cycleTime;

        if (cycles == 0) return;





        stats[tokenId].lastSyncAt = block.timestamp;
    }

    

    function invest(uint256 tokenId, uint256 investment) public {
        if (planet.ownerOf(tokenId) != msg.sender) revert NotTheOwner();
        if (block.timestamp - stats[tokenId].lastPurchase < 14 hours) revert NotEnoughTimePassed();
        stats[tokenId].purchaseCount = stats[tokenId].purchaseCount + 1;
        stats[tokenId].lastPurchase = block.timestamp;

        stats[tokenId].investments[investment] = stats[tokenId].investments[investment] + 1;

        ISystem global = controller.getSystem(0);
        if (address(global) != address(0)) {
            IGlobalProgress(address(global)).countEvent("investment");
        }
    }

    function addInvestment(string memory name, address[] memory burnAdds, uint256[] memory burnRates, address[] memory mintAdds, uint256[] memory mintRates) public onlyOwner {

        if (burnAdds.length != burnRates.length) revert InvalidConfig();
        if (mintAdds.length != mintRates.length) revert InvalidConfig();

   
        investments[investmentCount] = Investment(investmentCount, name, true, burnAdds, burnRates, mintAdds, mintRates);
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
    error InvalidConfig();
}
