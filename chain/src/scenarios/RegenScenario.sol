// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ScenarioFactory} from "../ScenarioFactory.sol";
import {Scenario} from "../Scenario.sol";
import {IStatsEntity} from "../entities/StatsEntity.sol";
import {ISupplyEntity} from "../entities/SupplyEntity.sol";
import {SystemController} from "../systems/SystemController.sol";
import {ISupplySystem} from "../systems/SupplySystem.sol";
import {IJobEntity} from "../entities/JobEntity.sol";

// import {console} from "hardhat/console.sol";

contract RegenScenario {
    ScenarioFactory immutable factory;
    string metadataURI;

    // Constructor
    constructor(
        ScenarioFactory _factory,
        string memory _metadataURI,
        address newAdmin
    ) {
        factory = _factory;
        metadataURI = _metadataURI;

        createScenario(_metadataURI);

        Scenario scenario = factory.scenarios(0);
        scenario.setAdmin(newAdmin);
    }

    function createScenario(string memory _metadataURI) internal {
        // console.log("regen: creating scenario %s", _metadataURI);
        address regen = factory.createScenario(_metadataURI);

        Scenario scenario = Scenario(regen);
        SystemController controller = SystemController(
            scenario.systemController()
        );

        // console.log("loading stats");
        loadStats(scenario, controller);
        // console.log("loading supply");
        loadSupply(scenario, controller);
        // console.log("loading jobs");
        loadJobs(scenario, controller);
    }

    function loadJobs(Scenario scenario, SystemController controller) internal {
        IJobEntity jobsEntity = IJobEntity(
            scenario.getEntity(address(controller.getSystem("JOB")))
        );

        jobsEntity.addJob(
            "Bioflux_one",
            "Spore Harvester",
            // "Collect dormant spores from decayed biomes. Risk of minor fungal infection.",
            "Bioflux",
            2 * 10 ** 18,
            12 hours,
            "Job Skills",
            0,
            0,
            1
        );

        jobsEntity.addJob(
            "Bioflux_two",
            "Bloom Engineer",
            // "Cultivate and harvest synthetic algae blooms in controlled lakes.",
            "Bioflux",
            5 * 10 ** 18,
            12 hours,
            "Job Skills",
            0,
            25,
            1
        );

        jobsEntity.addJob(
            "Bioflux_three",
            "Mycoformer",
            // "Manage a vast underground mycelial nexus. Requires drone control and biohazard gear.",
            "Bioflux",
            12 * 10 ** 18,
            12 hours,
            "Job Skills",
            0,
            60,
            1
        );

        jobsEntity.addJob(
            "Hydrocite_one",
            "Ice Miner",
            // "Drill into surface frost veins to extract raw water crystals.",
            "Hydrocite",
            1 * 10 ** 18,
            12 hours,
            "Job Skills",
            1,
            0,
            1
        );

        jobsEntity.addJob(
            "Hydrocite_two",
            "Comet Splitter",
            // "Harvest from captured micro-comets in low orbit. Precision required.",
            "Hydrocite",
            3 * 10 ** 18,
            12 hours,
            "Job Skills",
            1,
            33,
            1
        );

        jobsEntity.addJob(
            "Hydrocite_three",
            "Glacier Diver",
            // "Dive into unstable ancient glaciers for deep-core Hydrocite. Extremely cold.",
            "Hydrocite",
            9 * 10 ** 18,
            12 hours,
            "Job Skills",
            1,
            70,
            1
        );

        jobsEntity.addJob(
            "Solaris_one",
            "Dust Sweeper",
            // "Clean solar panel fields coated in Solaris residue. Easy but tedious.",
            "Solaris Dust",
            5 * 10 ** 17,
            12 hours,
            "Job Skills",
            2,
            0,
            1
        );

        jobsEntity.addJob(
            "Solaris_two",
            "Reflector Technician",
            // "Tune ancient solar arrays to beam-storm hotspots and collect Dust.",
            "Solaris Dust",
            2 * 10 ** 18,
            12 hours,
            "Job Skills",
            2,
            20,
            1
        );

        jobsEntity.addJob(
            "Solaris_three",
            "Flare Diver",
            // "Ride solar storms in magnetic suits to capture high-density Dust clouds. High risk, high reward.",
            "Solaris Dust",
            6 * 10 ** 18,
            12 hours,
            "Job Skills",
            2,
            70,
            1
        );
    }

    function loadStats(
        Scenario scenario,
        SystemController controller
    ) internal {
        IStatsEntity planetStatsEntity = IStatsEntity(
            scenario.getEntity(address(controller.getSystem("STAT")))
        );

        uint8[10] memory gatchaPoints;
        gatchaPoints[0] = 80;
        gatchaPoints[1] = 78;
        gatchaPoints[2] = 76;
        gatchaPoints[3] = 74;
        gatchaPoints[4] = 72;

        uint8[10] memory rarityOdds;
        rarityOdds[0] = 1;
        rarityOdds[1] = 5;
        rarityOdds[2] = 13;
        rarityOdds[3] = 25;
        rarityOdds[4] = 75;

        uint16[10] memory startingValue;
        startingValue[0] = 65535;
        startingValue[1] = 65535;
        startingValue[2] = 65535;
        startingValue[3] = 65535;
        startingValue[4] = 65535;
        startingValue[5] = 65535;

        uint16[10] memory maxValues;
        maxValues[0] = 20;
        maxValues[1] = 20;
        maxValues[2] = 20;
        maxValues[3] = 20;
        maxValues[4] = 20;
        maxValues[5] = 20;

        bytes32[10] memory statSetNames;
        statSetNames[0] = "Temperature";
        statSetNames[1] = "Water";
        statSetNames[2] = "Biomass";
        statSetNames[3] = "Atmosphere";
        statSetNames[4] = "Density";
        statSetNames[5] = "Anomaly";

        planetStatsEntity.setStatSetRarityOdds(rarityOdds);

        planetStatsEntity.createGatchaStatSet(
            "Core Stats",
            startingValue,
            gatchaPoints,
            maxValues,
            statSetNames
        );

        uint16[10] memory jobSkillValues;
        jobSkillValues[0] = 0;
        jobSkillValues[1] = 0;
        jobSkillValues[2] = 0;

        uint16[10] memory maxJobSkillValues;
        maxJobSkillValues[0] = 99;
        maxJobSkillValues[1] = 99;
        maxJobSkillValues[2] = 99;

        bytes32[10] memory jobSkillNames;
        jobSkillNames[0] = "Organic";
        jobSkillNames[1] = "Lithic";
        jobSkillNames[2] = "Solaric";

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
        ISupplySystem supplySystem = ISupplySystem(
            address(controller.getSystem("SUPPLY"))
        );

        // console.log("supplySystem: %s", address(supplySystem));
        address bioflux = supplySystem.deployToken(
            scenario,
            "Bioflux",
            "SF-BIO"
        );

        // Description: A rare organic energy harvested from microbial blooms and ancient spores awakened during terraforming.
        // Use: Required to activate greenhouses, seed terraforming zones, or evolve planetary biomes.
        // Why it’s fun: It’s living energy—players feel like they’re literally growing the planet back to life.

        address hydrocite = supplySystem.deployToken(
            scenario,
            "Hydrocite",
            "SF-HYDRO"
        );

        // Description: A crystalline form of frozen water laced with trace elements, found deep in glacial cores or comet strikes.
        // Use: Needed for irrigation, cooling systems, and biosphere stabilization.
        // Why it’s fun: Players might mine ice comets or melt old glaciers, visually tying progress to changing the planet's surface.

        address dust = supplySystem.deployToken(
            scenario,
            "Solaris Dust",
            "SF-DUST"
        );

        // Description: Hyper-reactive nanodust that absorbs and stores solar energy, originally used to power ancient tech.
        // Use: Powers terraforming engines, energizes drones, and unlocks dormant alien structures.
        // Why it’s fun: It’s glowing, dangerous, and maybe a little too smart—opens the door for Eldritch crossover.
    }
}

interface Mintable {
    function mint(address to, uint256 amount) external;
}
