// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ScenarioFactory } from "../ScenarioFactory.sol";
import { console } from "hardhat/console.sol";

contract RegenScenario {

    ScenarioFactory factory;
    string metadataURI;

    // Constructor
    constructor(ScenarioFactory _factory, string memory _metadataURI) {
        factory = _factory;
        metadataURI = _metadataURI;

        createScenario(_metadataURI);
       
    }

    function createScenario(string memory _metadataURI) internal {
        console.log("regen: creating scenario %s", _metadataURI);
        address regen = factory.createScenario(_metadataURI);

        

        // ok cool can build it here.


        
    }


}