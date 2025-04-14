// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Context} from "@openzeppelin/contracts/utils/Context.sol";
import {ISystem, ISystemController} from "./systems/interfaces/ISystem.sol";

import {IScenario, Scenario} from "./Scenario.sol";

contract ScenarioFactory is Context {
    // so a given user address can acquire multiple scenarios
    // and then they can activate them.
    struct PlayerScenario {
        IScenario scenario;
        bool active;
    }

    ISystemController public systemController;

    constructor(ISystemController sysController) {
        systemController = sysController;
    }

    mapping(address => PlayerScenario[]) public players;

    // mapping(address => Scenario[]) public userScenarios;

    Scenario[] public scenarios;

    function createScenario(
        string memory metadataURI
    ) external returns (address) {
        Scenario newScenario = new Scenario();

        scenarios.push(newScenario);

        address[] memory entities = systemController.activateEntities(
            newScenario
        );
        ISystem[] memory systems = systemController.getSystems();

        newScenario.initialize(_msgSender(), metadataURI, systems, entities);

        emit ScenarioDeployed(msg.sender, address(newScenario));

        return address(newScenario);
    }

    event ScenarioDeployed(address indexed creator, address scenarioAddress);

    function getActivePlayerScenarios(
        address player
    ) external view returns (IScenario[] memory) {
        PlayerScenario[] memory playerScenarios = players[player];
        uint256 activeCount = 1;

        for (uint256 i = 0; i < playerScenarios.length; i++) {
            if (playerScenarios[i].active) {
                activeCount++;
            }
        }

        IScenario[] memory activeScenarios = new IScenario[](activeCount);
        activeScenarios[0] = scenarios[0]; //Every player always has the first scenario
        uint256 index = 1;

        for (uint256 i = 0; i < playerScenarios.length; i++) {
            if (playerScenarios[i].active) {
                activeScenarios[index] = playerScenarios[i].scenario;
                index++;
            }
        }
        return activeScenarios;
    }
}
