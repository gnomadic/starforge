// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { ScenarioFactory } from "../ScenarioFactory.sol";
import { Scenario } from "../Scenario.sol";
import { console } from "hardhat/console.sol";
import { PlanetStatsEntity } from "../entities/PlanetStatsEntity.sol";
import { SupplyEntity } from "../entities/SupplyEntity.sol";
import { SystemController } from "../systems/SystemController.sol";
import { SupplySystem } from "../systems/SupplySystem.sol";

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

        SupplySystem supplySystem = SupplySystem(address(controller.getSystem(2)));

        console.log("supplySystem: %s", address(supplySystem));
        address life = supplySystem.deployToken(scenario, "LIFE", "LIFE");
        address energy = supplySystem.deployToken(scenario, "ENERGY", "ENERGY");
        address matter = supplySystem.deployToken(scenario, "MATTER", "MATTER");
        address tech = supplySystem.deployToken(scenario, "TECHNOLOGY", "TECHNOLOGY");

console.log("life is at: %s", life);
        Mintable(life).mint(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 10000000000000000000);
        Mintable(energy).mint(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 20000000000000000000);
        Mintable(matter).mint(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 30000000000000000000);    
        Mintable(tech).mint(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 40000000000000000000);



        // SupplyEntity supplyEntity = SupplyEntity(scenario.getEntity(address(controller.getSystem(2))));

        


        

        // ok cool can build it here.


        
    }




}

interface Mintable {
    function mint(address to, uint256 amount) external;
}