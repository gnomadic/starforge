// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import {ICraftSystem} from "./interfaces/ICraftSystem.sol";


contract CraftSystemLoader is Ownable  {

    constructor() Ownable(_msgSender()) {}  

    function load(address craftsystem) public onlyOwner() {
        ICraftSystem craft = ICraftSystem(craftsystem);

        craft.addItem(0, 100);
        craft.addItem(1, 200);
        

        craft.addStation(0, 50);
        craft.addStation(1, 50);


    }

}

