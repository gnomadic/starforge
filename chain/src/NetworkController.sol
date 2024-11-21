// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Farm.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NetworkController is Ownable {
    
    Farm public farmContract;

    struct Node {
        string nodeType; // Type of node (e.g., resource, defense, utility)
        uint256 offense;
        uint256 defense;
    }

    struct Edge {
        uint256 node1;
        uint256 node2;
        uint256 strength;
        
    }

    mapping(uint256 => Node[]) private networkNodes; // farmId => list of nodes
    mapping(uint256 => Edge[]) private networkEdges; // farmId => list of edges
    mapping (uint256 => uint256) private gatewayNodes; // farmId => gateway node index


    constructor (address _farmAddress) Ownable(_msgSender()) {
        farmContract = Farm(_farmAddress);
    }

    modifier onlyFarmOwner(uint256 farmId) {
        require(farmContract.ownerOf(farmId) == msg.sender, "Not the owner of this farm");
        _;
    }

    // Function to add a new node to a player's network
    function addNode(uint256 farmId, string memory nodeType) external onlyFarmOwner(farmId) {
        networkNodes[farmId].push(Node(nodeType));
    }

    // Function to add an edge between two nodes
    function addEdge(uint256 farmId, uint256 node1, uint256 node2, uint256 strength) external onlyFarmOwner(farmId) {
        require(node1 < networkNodes[farmId].length && node2 < networkNodes[farmId].length, "Invalid node indices");
        networkEdges[farmId].push(Edge(node1, node2, strength));
    }

    function getNodes(uint256 farmId) external view returns (Node[] memory) {
        return networkNodes[farmId];
    }

    function getEdges(uint256 farmId) external view returns (Edge[] memory) {
        return networkEdges[farmId];
    }

    function getNode(uint256 farmId, uint256 nodeIndex) external view returns (Node memory) {
        require(nodeIndex < networkNodes[farmId].length, "Invalid node index");
        return networkNodes[farmId][nodeIndex];
    }

    function setGatewayNode(uint256 farmId, uint256 gatewayNodeIndex) external onlyFarmOwner(farmId) {
        require(gatewayNodeIndex < networkNodes[farmId].length, "Invalid gateway node index");
        gatewayNodes[farmId] = gatewayNodeIndex;
    }

    function getGatewayNode(uint256 farmId) external view returns (uint256) {
        return gatewayNodes[farmId];
    }

        // Calculates the total strength of a network based on a given stat type (offense or defense)
    function getNetworkStrength(uint256 farmId, string memory statType) public view returns (uint256) {
        uint256 totalStrength = 0;
        Node[] memory nodes = networkNodes[farmId];

        for (uint256 i = 0; i < nodes.length; i++) {
            Node memory node = nodes[i];
            // if (node.isActive) {
                if (keccak256(abi.encodePacked(statType)) == keccak256(abi.encodePacked("offense"))) {
                    totalStrength += node.offense;
                } else if (keccak256(abi.encodePacked(statType)) == keccak256(abi.encodePacked("defense"))) {
                    totalStrength += node.defense;
                }
                // Add additional stat types as needed
            // }
        }
        
        return totalStrength;
    }


}