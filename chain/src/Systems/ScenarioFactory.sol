pragma solidity ^0.8.24;

import { Scenario }from  "./Scenario.sol";

contract ScenarioFactory {
      Scenario[] public scenarios;

    function createScenario() external {
        Scenario newScenario = new Scenario(msg.sender);
        scenarios.push(newScenario);

        emit ScenarioDeployed(msg.sender, address(newScenario));
    }

    event ScenarioDeployed(address indexed creator, address scenarioAddress);
}