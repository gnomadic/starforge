// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import {ISystem, ISystemController} from "./interfaces/ISystem.sol";
import {ScenarioFactory} from "../ScenarioFactory.sol";
import {IScenario} from "../Scenario.sol";
import {console} from "hardhat/console.sol";

contract SystemController is Ownable, ISystemController {
    ISystem[] public systems;
    mapping(string => ISystem) public systemMap;
    // mapping(uint8 => address) public systemEntities;

    address public tokenAddress;
    ScenarioFactory public scenarioFactory;

    constructor() Ownable(_msgSender()) {
        // scenarioFactory = scenarios;
    }

    function setScenarioFactory(ScenarioFactory scenarios) external onlyOwner {
        scenarioFactory = scenarios;
    }

    function registerSystem(ISystem system) external onlyOwner {
        systems.push(system);
        systemMap[system.getId()] = system;
        system.registerSystem(address(this));
        // systemEntities[id] = system.getEntity();
    }

    function initAll(uint256 tokenId) external onlyToken {
        //get active scenarios for the current user from the ScenarioFactory
        console.log("system controller: init all");

        IScenario[] memory activeScenarios = scenarioFactory
            .getActivePlayerScenarios(_msgSender());
        console.log("there are %s active scenarios", activeScenarios.length);
        for (uint256 i = 0; i < activeScenarios.length; i++) {
            IScenario scenario = activeScenarios[i];
            for (uint256 j = 0; i < systems.length; i++) {
                systems[j].init(this, scenario, tokenId);
            }
        }
    }

    function syncAll(uint256 tokenId) external onlyToken {
        for (uint256 i = 0; i < systems.length; i++) {
            systems[i].sync(tokenId);
        }
    }

    function getSystem(string memory id) external view returns (ISystem) {
        return systemMap[id];
    }

    function getSystems() external view returns (ISystem[] memory) {
        return systems;
    }

    function isSystem(address systemAddress) external view returns (bool) {
        for (uint256 i = 0; i < systems.length; i++) {
            if (address(systems[i]) == systemAddress) {
                return true;
            }
        }
        return false;
    }

    function activateEntities(
        IScenario scenario
    ) external returns (address[] memory) {
        address[] memory systemEntities = new address[](systems.length);
        console.log(
            "system controller: activate entities systemlength %s",
            systems.length
        );
        for (uint256 i = 0; i < systems.length; i++) {
            systemEntities[i] = systems[i].activateEntity(scenario);
        }
        return systemEntities;
    }

    // TODO will have to refactor to this to support multiple tokens
    modifier onlyToken() {
        require(
            msg.sender == address(tokenAddress),
            "Only token can call this function"
        );
        _;
    }

    function setTokenAddress(address _tokenAddress) external onlyOwner {
        tokenAddress = _tokenAddress;
    }
}
