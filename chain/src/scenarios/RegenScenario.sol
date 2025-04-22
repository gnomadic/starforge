// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ScenarioFactory} from "../ScenarioFactory.sol";
import {Scenario} from "../Scenario.sol";
import {console} from "hardhat/console.sol";
import {PlanetStatsEntity} from "../entities/PlanetStatsEntity.sol";
import {SupplyEntity} from "../entities/SupplyEntity.sol";
import {SystemController} from "../systems/SystemController.sol";
import {SupplySystem} from "../systems/SupplySystem.sol";
import {JobEntity} from "../entities/JobEntity.sol";

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
        SystemController controller = SystemController(
            scenario.systemController()
        );

        loadStats(scenario, controller);
        loadSupply(scenario, controller);
        loadJobs(scenario, controller);


    
    }

    function loadJobs(Scenario scenario, SystemController controller) internal {
        JobEntity jobsEntity = JobEntity(
            scenario.getEntity(address(controller.getSystem("JOB")))
        );

        jobsEntity.addJob(
            "life",
            "Biohacking",
            "Study cosmic life forms to increase life production.",
            "LIFE",
            1000000000000000000
        );

                jobsEntity.addJob(
            "matter",
            "Matter Collector",
            "Collect interstellar particles to increase matter production.",
            "MATTER",
            1000000000000000000
        );

                jobsEntity.addJob(
            "energy",
            "Energy Harvester",
            "Capture cosmic radiation to boost energy production.",
            "ENERGY",
            1000000000000000000
        );

                jobsEntity.addJob(
            "technology",
            "Tech Engineer",
            "Research advanced technologies to increase tech production.",
            "TECHNOLOGY",
            1000000000000000000
        );

    }

    function loadStats(Scenario scenario, SystemController controller) internal {

        PlanetStatsEntity planetStatsEntity = PlanetStatsEntity(
            scenario.getEntity(address(controller.getSystem("STAT")))
        );
        planetStatsEntity.setNumberOfStats(6);
        planetStatsEntity.setStartingStats([80, 78, 76, 74, 72]);
    }

    function loadSupply(Scenario scenario, SystemController controller) internal {
       SupplySystem supplySystem = SupplySystem(
            address(controller.getSystem("SUPPLY"))
        );

        // console.log("supplySystem: %s", address(supplySystem));
        address life = supplySystem.deployToken(scenario, "LIFE", "LIFE");
        address energy = supplySystem.deployToken(scenario, "ENERGY", "ENERGY");
        address matter = supplySystem.deployToken(scenario, "MATTER", "MATTER");
        address tech = supplySystem.deployToken(
            scenario,
            "TECHNOLOGY",
            "TECHNOLOGY"
        );

        // console.log("life is at: %s", life);
        Mintable(life).mint(
            0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
            10000000000000000000
        );
        Mintable(energy).mint(
            0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
            20000000000000000000
        );
        Mintable(matter).mint(
            0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
            30000000000000000000
        );
        Mintable(tech).mint(
            0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
            40000000000000000000
        );
    }
}

interface Mintable {
    function mint(address to, uint256 amount) external;
}
