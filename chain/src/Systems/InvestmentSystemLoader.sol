// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import {IInvestmentSystem} from "../interfaces/IInvestmentSystem.sol";


contract InvestmentSystemLoader is Ownable  {

    constructor() Ownable(_msgSender()) {}  

    function load(address investmentSystem) public onlyOwner() {
        // IInvestmentSystem craft = IInvestmentSystem(investmentSystem);

        // craft.addItem(0, 100);
        // craft.addItem(1, 200);
        

        // craft.addStation(0, 50);
        // craft.addStation(1, 50);


    }

}

