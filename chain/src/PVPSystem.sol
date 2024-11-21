// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./NetworkController.sol";
import "./ResourceSystem.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PVPSystem is Ownable {
    NetworkController public networkController;
    ResourceSystem public resourceSystem;

    struct AttackPath {
        uint256[] nodeIds; // The ordered path through the defender's network
    }

    struct Battle {
        uint256 attackerId;
        uint256 defenderId;
        AttackPath path;
        uint256 startTime;
        bool completed;
    }

    mapping(uint256 => Battle) public activeBattles; // battleId => Battle details
    uint256 public nextBattleId;

    constructor(address _networkController, address _resourceSystem) Ownable(_msgSender()) {
        networkController = NetworkController(_networkController);
        resourceSystem = ResourceSystem(_resourceSystem);
    }

    modifier onlyFarmOwner(uint256 farmId) {
        require(networkController.farmContract().ownerOf(farmId) == msg.sender, "Not the owner of this farm");
        _;
    }

    // Start a battle between two farms, specifying an attack path
    function initiateBattle(uint256 attackerId, uint256 defenderId, uint256[] calldata pathNodeIds) external onlyFarmOwner(attackerId) {
        require(networkController.farmContract().ownerOf(defenderId) != address(0), "Defender does not exist");
        require(pathNodeIds.length > 0, "Path must contain nodes");

        // Verify that the path starts at the gateway node of the defender
        uint256 defenderGateway = networkController.getGatewayNode(defenderId);
        require(pathNodeIds[0] == defenderGateway, "Path must start at the gateway node");

        // Create a new battle
        Battle storage battle = activeBattles[nextBattleId];
        battle.attackerId = attackerId;
        battle.defenderId = defenderId;
        battle.path = AttackPath({ nodeIds: pathNodeIds });
        battle.startTime = block.timestamp;
        battle.completed = false;

        nextBattleId++;
    }

    // Resolve a battle by processing the attack along the selected path
    function resolveBattle(uint256 battleId) external {
        Battle storage battle = activeBattles[battleId];
        require(!battle.completed, "Battle already completed");

        // Fetch nodes for both networks
        uint256 attackerStrength = networkController.getNetworkStrength(battle.attackerId, "offense");
        uint256 defenderId = battle.defenderId;
        
        for (uint256 i = 0; i < battle.path.nodeIds.length; i++) {
            uint256 nodeId = battle.path.nodeIds[i];
            NetworkController.Node memory defenderNode = networkController.getNode(defenderId, nodeId);
            
            // Check if attacker strength can surpass defender node defense
            if (attackerStrength > defenderNode.defense) {
                // Node is breached; attacker moves to next node
                resourceSystem.rewardAttacker(battle.attackerId, nodeId); // Reward attacker for breached node
                attackerStrength -= defenderNode.defense; // Reduce attacker strength
            } else {
                // Attack fails; battle ends here
                resourceSystem.penalizeDefender(battle.defenderId, nodeId); // Apply minor penalty or cooldown
                break;
            }
        }
        
        battle.completed = true;
    }
}