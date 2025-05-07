// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Context} from "@openzeppelin/contracts/utils/Context.sol";
import {ISystem, ISystemController} from "./systems/interfaces/ISystem.sol";
// import {console} from "hardhat/console.sol";

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
        //TODO replace with proxy cloneable
        Scenario newScenario = new Scenario();

        scenarios.push(newScenario);

        // console.log("creating scenario %s", address(newScenario));
        address[] memory entities = systemController.activateEntities(
            newScenario
        );
        // console.log("entities %s", entities[0]);
        ISystem[] memory systems = systemController.getSystems();
        // console.log("systems legnth %s", systems.length);

        newScenario.initialize(
            _msgSender(),
            address(systemController),
            metadataURI,
            systems,
            entities
        );

        emit ScenarioDeployed(msg.sender, address(newScenario));

        return address(newScenario);
    }

    event ScenarioDeployed(address indexed creator, address scenarioAddress);

    function getActivePlayerScenarios(
        address player
    ) external view returns (IScenario[] memory) {
        // console.log("getting active scenarios?");

        PlayerScenario[] memory playerScenarios = players[player];
        uint256 activeCount = 1;
        // console.log("there are %s active scenarios", activeCount);

        for (uint256 i = 0; i < playerScenarios.length; i++) {
            if (playerScenarios[i].active) {
                activeCount++;
            }
        }

        // console.log("there are %s active scenarios", activeCount);

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

    struct ScenarioData {
        string metadataURI;
        address admin;
        address scenarioAddress;
        bool active;
    }

    function getAllScenarioData(
        address player
    ) external view returns (ScenarioData[] memory) {
        ScenarioData[] memory scenarioDataArray = new ScenarioData[](
            scenarios.length
        );

        for (uint256 i = 0; i < scenarios.length; i++) {
            bool activated = (i == 0) || players[player][i].active;

            scenarioDataArray[i] = ScenarioData({
                metadataURI: scenarios[i].metadataURI(),
                admin: scenarios[i].getAdmin(),
                scenarioAddress: address(scenarios[i]),
                active: activated
            });
        }
        return scenarioDataArray;
    }
}
