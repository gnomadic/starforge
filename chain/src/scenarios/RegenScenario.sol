// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ScenarioFactory } from "../ScenarioFactory.sol";
import { Scenario } from "../Scenario.sol";
import { console } from "hardhat/console.sol";
import { PlanetStatsEntity } from "../entities/PlanetStatsEntity.sol";
import { SupplyEntity } from "../entities/SupplyEntity.sol";
import {SystemController} from "../systems/SystemController.sol";

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

        Scenario scenario = Scenario(regen);
        SystemController controller = SystemController(scenario.systemController());

        PlanetStatsEntity planetStatsEntity = PlanetStatsEntity(scenario.getEntity(address(controller.getSystem(1))));
        planetStatsEntity.setNumberOfStats(6);
        planetStatsEntity.setStartingStats([80, 78, 76, 74, 72]);

        SupplyEntity supplyEntity = SupplyEntity(scenario.getEntity(address(controller.getSystem(0))));

        


        

        // ok cool can build it here.


        
    }


}