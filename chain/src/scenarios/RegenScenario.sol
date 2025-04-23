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
            "Bioflux_one",
            "Biohacking",
            "Study cosmic life forms to increase life production.",
            "Bioflux",
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

    function loadStats(
        Scenario scenario,
        SystemController controller
    ) internal {
        PlanetStatsEntity planetStatsEntity = PlanetStatsEntity(
            scenario.getEntity(address(controller.getSystem("STAT")))
        );

        uint8[] memory gatchaPoints = new uint8[](5);
        gatchaPoints[0] = 80;
        gatchaPoints[1] = 78;
        gatchaPoints[2] = 76;
        gatchaPoints[3] = 74;
        gatchaPoints[4] = 72;

        uint8[] memory rarityOdds = new uint8[](5);
        rarityOdds[0] = 1;
        rarityOdds[1] = 5;
        rarityOdds[2] = 13;
        rarityOdds[3] = 25;
        rarityOdds[4] = 75;

        uint16[] memory startingValue = new uint16[](6);
        startingValue[0] = 65535;
        startingValue[1] = 65535;
        startingValue[2] = 65535;
        startingValue[3] = 65535;
        startingValue[4] = 65535;
        startingValue[5] = 65535;

        uint16[] memory maxValues = new uint16[](6);
        maxValues[0] = 20;
        maxValues[1] = 20;
        maxValues[2] = 20;
        maxValues[3] = 20;
        maxValues[4] = 20;
        maxValues[5] = 20;

        string[] memory statSetNames = new string[](6);
        statSetNames[0] = "Temperature";
        statSetNames[1] = "Water";
        statSetNames[2] = "Biomass";
        statSetNames[3] = "Atmosphere";
        statSetNames[4] = "Density";
        statSetNames[5] = "Anomaly";

        
        // console.log("setting rarity");
        planetStatsEntity.setStatSetRarityOdds(rarityOdds);
        // console.log("creating gatcha stats");
        planetStatsEntity.createGatchaStatSet(
            "Core Stats",
            startingValue,
            gatchaPoints,
            maxValues,
            statSetNames
        );

             uint16[] memory jobSkillValues = new uint16[](4);
        jobSkillValues[0] = 0;
        jobSkillValues[1] = 0;
        jobSkillValues[2] = 0;
        jobSkillValues[3] = 0;

                     uint16[] memory maxJobSkillValues = new uint16[](4);
        maxJobSkillValues[0] = 99;
        maxJobSkillValues[1] = 99;
        maxJobSkillValues[2] = 99;
        maxJobSkillValues[3] = 99;



        string[] memory jobSkillNames = new string[](4);
        jobSkillNames[0] = "Bioflux";
        jobSkillNames[1] = "ENERGY";
        jobSkillNames[2] = "MATTER";
        jobSkillNames[3] = "TECHNOLOGY";

        planetStatsEntity.createStatSet(
            "Job Skills",
            jobSkillValues,
            maxJobSkillValues,
            jobSkillNames
        );
        



        // planetStatsEntity.setNumberOfStats(6);
        // planetStatsEntity.setStartingStats([80, 78, 76, 74, 72]);
    }

    function loadSupply(
        Scenario scenario,
        SystemController controller
    ) internal {
        SupplySystem supplySystem = SupplySystem(
            address(controller.getSystem("SUPPLY"))
        );

        // console.log("supplySystem: %s", address(supplySystem));
        address life = supplySystem.deployToken(scenario, "Bioflux", "SF-BIO");
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
