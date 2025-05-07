// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ScenarioFactory} from "../ScenarioFactory.sol";
import {Scenario} from "../Scenario.sol";
// import {console} from "hardhat/console.sol";
import {PlanetStatsEntity} from "../entities/PlanetStatsEntity.sol";
import {SupplyEntity} from "../entities/SupplyEntity.sol";
import {SystemController} from "../systems/SystemController.sol";
import {SupplySystem} from "../systems/SupplySystem.sol";
import {JobEntity} from "../entities/JobEntity.sol";

contract RegenScenario {
    ScenarioFactory factory;
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
            "Spore Harvester",
            "Collect dormant spores from decayed biomes. Risk of minor fungal infection.",
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
            "Cultivate and harvest synthetic algae blooms in controlled lakes.",
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
            "Manage a vast underground mycelial nexus. Requires drone control and biohazard gear.",
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
            "Drill into surface frost veins to extract raw water crystals.",
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
            "Harvest from captured micro-comets in low orbit. Precision required.",
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
            "Dive into unstable ancient glaciers for deep-core Hydrocite. Extremely cold.",
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
            "Clean solar panel fields coated in Solaris residue. Easy but tedious.",
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
            "Tune ancient solar arrays to beam-storm hotspots and collect Dust.",
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
            "Ride solar storms in magnetic suits to capture high-density Dust clouds. High risk, high reward.",
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

        uint16[] memory jobSkillValues = new uint16[](3);
        jobSkillValues[0] = 0;
        jobSkillValues[1] = 0;
        jobSkillValues[2] = 0;

        uint16[] memory maxJobSkillValues = new uint16[](3);
        maxJobSkillValues[0] = 99;
        maxJobSkillValues[1] = 99;
        maxJobSkillValues[2] = 99;

        string[] memory jobSkillNames = new string[](3);
        jobSkillNames[0] = "Bioflux";
        jobSkillNames[1] = "Hydrocite";
        jobSkillNames[2] = "Solaris Dust";

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
        // address tech = supplySystem.deployToken(
        //     scenario,
        //     "TECHNOLOGY",
        //     "TECHNOLOGY"
        // );

        // console.log("life is at: %s", life);
        // Mintable(bioflux).mint(
        //     0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
        //     10000000000000000000
        // );
        // Mintable(hydrocite).mint(
        //     0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
        //     20000000000000000000
        // );
        // Mintable(dust).mint(
        //     0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
        //     30000000000000000000
        // );
        // Mintable(tech).mint(
        //     0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266,
        //     40000000000000000000
        // );
    }
}

interface Mintable {
    function mint(address to, uint256 amount) external;
}
