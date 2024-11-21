// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./NetworkController.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ResourceSystem is Ownable {
    NetworkController public networkController;

    // Store each player's resources, e.g., data and quantum data
    mapping(uint256 => uint256) public dataResources; // farmId => data amount
    mapping(uint256 => uint256) public quantumDataResources; // farmId => quantum data amount

    // Define resource generation rates based on node type
    mapping(string => uint256) public resourceRates;

    constructor(address _networkController) Ownable(_msgSender()) {
        networkController = NetworkController(_networkController);

        // Set up initial resource rates
        resourceRates["dataNode"] = 1; // e.g., generates 1 Data per time unit
        resourceRates["quantumNode"] = 5; // e.g., generates 5 Quantum Data per time unit
    }

    // Function to set generation rate for a node type
    function setResourceRate(string memory nodeType, uint256 rate) external onlyOwner {
        resourceRates[nodeType] = rate;
    }

    // Function to calculate and collect resources
    function collectResources(uint256 farmId) external {
        require(msg.sender == networkController.farmContract().ownerOf(farmId), "Not the owner of this farm");

        // Fetch nodes from NetworkController
        NetworkController.Node[] memory nodes = networkController.getNodes(farmId);

        uint256 dataGenerated = 0;
        uint256 quantumDataGenerated = 0;

        for (uint256 i = 0; i < nodes.length; i++) {
            string memory nodeType = nodes[i].nodeType;
            uint256 rate = resourceRates[nodeType];

            if (keccak256(abi.encodePacked(nodeType)) == keccak256(abi.encodePacked("dataNode"))) {
                dataGenerated += rate;
            } else if (keccak256(abi.encodePacked(nodeType)) == keccak256(abi.encodePacked("quantumNode"))) {
                quantumDataGenerated += rate;
            }
            // Add additional node types and resource calculations as needed
        }

        // Add generated resources to the player's total
        dataResources[farmId] += dataGenerated;
        quantumDataResources[farmId] += quantumDataGenerated;
    }

    // View functions to check current resources for a farm
    function getDataResources(uint256 farmId) external view returns (uint256) {
        return dataResources[farmId];
    }

    function getQuantumDataResources(uint256 farmId) external view returns (uint256) {
        return quantumDataResources[farmId];
    }

    function rewardAttacker(uint256 farmId, uint256 dataReward, uint256 quantumDataReward) external {
        require(msg.sender == networkController.farmContract().ownerOf(farmId), "Not the owner of this farm");

        dataResources[farmId] += dataReward;
        quantumDataResources[farmId] += quantumDataReward;
    }
}