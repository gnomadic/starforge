// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test, console} from "forge-std/Test.sol";
import "../src/systems/JobSystem.sol";
import "../src/entities/JobEntity.sol";
import {MockScenario} from "./mocks/MockScenario.sol";
import {SystemController} from "../src/systems/SystemController.sol";
import {SupplySystem} from "../src/systems/SupplySystem.sol";
import {SupplyTokenFactory} from "../src/tokens/SupplyTokenFactory.sol";
import {SupplyToken} from "../src/tokens/SupplyToken.sol";
import {StatsSystem} from "../src/systems/StatsSystem.sol";
import {StatsEntity} from "../src/entities/StatsEntity.sol";
import {SupplyEntity} from "../src/entities/SupplyEntity.sol";
import {ScenarioFactory} from "../src/ScenarioFactory.sol";
import {IScenario, Scenario} from "../src/Scenario.sol";
import {RegenScenario} from "../src/scenarios/RegenScenario.sol";

contract StarForgeTest is Test {
    IScenario regenScenario;

    SupplySystem supplySystem;
    StatsSystem statsSystem;
    JobSystem jobSystem;

    SupplyEntity supplyEntity;
    StatsEntity statsEntity;
    JobEntity jobEntity;

    // address owner = address(this);
    uint256 testTokenId = 1;

    function deployment(address newOwner) public {
        SystemController systemController = new SystemController();

        ScenarioFactory factory = new ScenarioFactory(
            SystemController(address(systemController))
        );

        SupplyToken token = new SupplyToken();

        SupplyTokenFactory tokenFactory = new SupplyTokenFactory(
            address(token)
        );

        supplySystem = new SupplySystem(address(tokenFactory));
        statsSystem = new StatsSystem();
        jobSystem = new JobSystem();

        systemController.registerSystem(ISystem(supplySystem));
        systemController.registerSystem(ISystem(statsSystem));
        systemController.registerSystem(ISystem(jobSystem));

        new RegenScenario(
            ScenarioFactory(address(factory)),
            "Test Scenario",
            address(this)
        );

        regenScenario = factory.scenarios(0);

        supplySystem.init(
            systemController,
            IScenario(regenScenario),
            testTokenId
        );
        statsSystem.init(
            systemController,
            IScenario(regenScenario),
            testTokenId
        );
        jobSystem.init(systemController, IScenario(regenScenario), testTokenId);

        supplyEntity = SupplyEntity(
            IScenario(regenScenario).getEntity(address(supplySystem))
        );
        statsEntity = StatsEntity(
            IScenario(regenScenario).getEntity(address(statsSystem))
        );
        jobEntity = JobEntity(
            IScenario(regenScenario).getEntity(address(jobSystem))
        );

        Scenario(address(regenScenario)).setAdmin(newOwner);
    }
}
