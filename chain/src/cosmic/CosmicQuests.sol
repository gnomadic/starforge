// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./CosmicResources.sol";

/**
 * @title CosmicQuests
 * @dev Contract for managing quests, rewards, and quest completion
 */
contract CosmicQuests {
    // Reference to the resources contract
    CosmicResources public resourcesContract;
    
    // Reward types
    enum RewardType { XP, GOLD, ARTIFACT, COSMIC_DUST }
    
    // Risk level
    enum RiskLevel { LOW, MEDIUM, HIGH, EXTREME }
    
    // Artifact structure
    struct Artifact {
        string id;
        string name;
        string description;
        string rarity; // common, uncommon, rare, epic, legendary
        string image;
        uint256 boostAmount;
        string boostType; // energy, power, speed, health, defense, attack
        bool equipped;
    }
    
    // Resource requirement structure
    struct ResourceRequirement {
        CosmicResources.ResourceType resourceType;
        uint256 amount;
    }
    
    // Reward structure
    struct Reward {
        RewardType rewardType;
        uint256 amount;
        string artifactId; // Only used if reward type is ARTIFACT
    }
    
    // Quest structure
    struct Quest {
        uint256 id;
        string title;
        string description;
        uint256 timeRequired; // in seconds
        RiskLevel riskLevel;
        ResourceRequirement[] resourceRequirements;
        Reward[] rewards;
        uint256 availableUntil; // timestamp
    }
    
    // Quest in progress structure
    struct QuestInProgress {
        uint256 questId;
        uint256 startTime;
        uint256 endTime;
        bool completed;
        bool successful;
    }
    
    // State variables
    mapping(uint256 => Quest) public quests;
    uint256 public nextQuestId;
    
    // Player inventories
    mapping(address => mapping(string => Artifact)) public playerArtifacts;
    mapping(address => string[]) public playerArtifactIds;
    mapping(address => uint256) public playerXP;
    
    // Quests in progress
    mapping(address => mapping(uint256 => QuestInProgress)) public questsInProgress;
    mapping(address => uint256[]) public activeQuestsForPlayer;
    
    // Events
    event QuestCreated(uint256 indexed questId, string title, uint256 timeRequired);
    event QuestStarted(address indexed player, uint256 indexed questId, uint256 startTime, uint256 endTime);
    event QuestCompleted(address indexed player, uint256 indexed questId, bool successful);
    event RewardClaimed(address indexed player, uint256 indexed questId, RewardType rewardType, uint256 amount);
    event ArtifactReceived(address indexed player, string artifactId, string name);
    
    constructor(address _resourcesContract) {
        resourcesContract = CosmicResources(_resourcesContract);
    }
    
    /**
     * @dev Create a new quest (admin only)
     * @param title Quest title
     * @param description Quest description
     * @param timeRequired Time required in seconds
     * @param riskLevel Risk level enum
     * @param resourceTypes Array of resource types required
     * @param resourceAmounts Array of resource amounts required
     * @param rewardTypes Array of reward types
     * @param rewardAmounts Array of reward amounts
     * @param artifactIds Array of artifact IDs (empty string for non-artifact rewards)
     * @param availableUntil Timestamp until quest is available (0 for unlimited)
     */
    function createQuest(
        string memory title,
        string memory description,
        uint256 timeRequired,
        RiskLevel riskLevel,
        CosmicResources.ResourceType[] memory resourceTypes,
        uint256[] memory resourceAmounts,
        RewardType[] memory rewardTypes,
        uint256[] memory rewardAmounts,
        string[] memory artifactIds,
        uint256 availableUntil
    ) external {
        // In a real implementation, this would have access controls
        // require(isAdmin(msg.sender), "Only admin can create quests");
        
        require(resourceTypes.length == resourceAmounts.length, "Resource arrays must match");
        require(rewardTypes.length == rewardAmounts.length, "Reward arrays must match");
        require(rewardTypes.length == artifactIds.length, "Reward and artifact arrays must match");
        
        uint256 questId = nextQuestId++;
        Quest storage newQuest = quests[questId];
        
        newQuest.id = questId;
        newQuest.title = title;
        newQuest.description = description;
        newQuest.timeRequired = timeRequired;
        newQuest.riskLevel = riskLevel;
        newQuest.availableUntil = availableUntil;
        
        // Add resource requirements
        for (uint i = 0; i < resourceTypes.length; i++) {
            newQuest.resourceRequirements.push(
                ResourceRequirement(resourceTypes[i], resourceAmounts[i])
            );
        }
        
        // Add rewards
        for (uint i = 0; i < rewardTypes.length; i++) {
            newQuest.rewards.push(
                Reward(rewardTypes[i], rewardAmounts[i], artifactIds[i])
            );
        }
        
        emit QuestCreated(questId, title, timeRequired);
    }
    
    /**
     * @dev Start a quest
     * @param questId ID of the quest
     */
    function startQuest(uint256 questId) external {
        Quest storage quest = quests[questId];
        require(quest.id == questId, "Quest does not exist");
        
        // Verify quest is available
        if (quest.availableUntil > 0) {
            require(block.timestamp < quest.availableUntil, "Quest is no longer available");
        }
        
        // Check if player has enough resources
        for (uint i = 0; i < quest.resourceRequirements.length; i++) {
            ResourceRequirement memory req = quest.resourceRequirements[i];
            
            uint256 playerResource = resourcesContract.getResourceAmount(
                msg.sender, 
                req.resourceType
            );
            
            require(playerResource >= req.amount, "Insufficient resources");
            
            // Subtract resources
            resourcesContract.modifyResourceAmount(
                msg.sender,
                req.resourceType,
                -int256(req.amount)
            );
        }
        
        // Calculate start and end time
        uint256 startTime = block.timestamp;
        uint256 endTime = startTime + quest.timeRequired;
        
        // Create quest in progress
        QuestInProgress storage questProgress = questsInProgress[msg.sender][questId];
        questProgress.questId = questId;
        questProgress.startTime = startTime;
        questProgress.endTime = endTime;
        questProgress.completed = false;
        questProgress.successful = false;
        
        // Add to active quests
        activeQuestsForPlayer[msg.sender].push(questId);
        
        emit QuestStarted(msg.sender, questId, startTime, endTime);
    }
    
    /**
     * @dev Complete a quest and claim rewards
     * @param questId ID of the quest
     */
    function completeQuest(uint256 questId) external {
        QuestInProgress storage questProgress = questsInProgress[msg.sender][questId];
        require(questProgress.questId == questId, "Quest not started");
        require(!questProgress.completed, "Quest already completed");
        require(block.timestamp >= questProgress.endTime, "Quest not finished yet");
        
        Quest storage quest = quests[questId];
        
        // Determine if quest is successful based on risk level
        uint256 successRoll = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, questId))) % 100;
        bool isSuccessful;
        
        if (quest.riskLevel == RiskLevel.LOW) {
            isSuccessful = successRoll < 90; // 90% success rate
        } else if (quest.riskLevel == RiskLevel.MEDIUM) {
            isSuccessful = successRoll < 70; // 70% success rate
        } else if (quest.riskLevel == RiskLevel.HIGH) {
            isSuccessful = successRoll < 50; // 50% success rate
        } else { // EXTREME
            isSuccessful = successRoll < 30; // 30% success rate
        }
        
        questProgress.completed = true;
        questProgress.successful = isSuccessful;
        
        // Always grant XP regardless of success
        uint256 baseXP = 50;
        uint256 xpMultiplier;
        
        if (quest.riskLevel == RiskLevel.LOW) {
            xpMultiplier = 1;
        } else if (quest.riskLevel == RiskLevel.MEDIUM) {
            xpMultiplier = 2;
        } else if (quest.riskLevel == RiskLevel.HIGH) {
            xpMultiplier = 3;
        } else { // EXTREME
            xpMultiplier = 5;
        }
        
        uint256 earnedXP = baseXP * xpMultiplier;
        playerXP[msg.sender] += earnedXP;
        
        emit RewardClaimed(msg.sender, questId, RewardType.XP, earnedXP);
        
        // If successful, grant all rewards
        if (isSuccessful) {
            for (uint i = 0; i < quest.rewards.length; i++) {
                Reward memory reward = quest.rewards[i];
                
                if (reward.rewardType == RewardType.XP) {
                    playerXP[msg.sender] += reward.amount;
                }
                else if (reward.rewardType == RewardType.GOLD) {
                    resourcesContract.modifyResourceAmount(
                        msg.sender,
                        CosmicResources.ResourceType.MATTER, // Using MATTER as gold equivalent
                        int256(reward.amount)
                    );
                }
                else if (reward.rewardType == RewardType.COSMIC_DUST) {
                    // Would need to add cosmic dust as a resource type in real implementation
                }
                else if (reward.rewardType == RewardType.ARTIFACT) {
                    // Grant artifact - in a real implementation, this would reference a separate contract
                    // That manages artifact metadata and abilities
                    if (bytes(reward.artifactId).length > 0) {
                        playerArtifactIds[msg.sender].push(reward.artifactId);
                        emit ArtifactReceived(msg.sender, reward.artifactId, "Unknown Artifact");
                    }
                }
                
                emit RewardClaimed(msg.sender, questId, reward.rewardType, reward.amount);
            }
        }
        
        // Clean up active quests array
        uint256[] storage activeQuests = activeQuestsForPlayer[msg.sender];
        for (uint i = 0; i < activeQuests.length; i++) {
            if (activeQuests[i] == questId) {
                // Remove by swapping with the last element and then popping
                if (i < activeQuests.length - 1) {
                    activeQuests[i] = activeQuests[activeQuests.length - 1];
                }
                activeQuests.pop();
                break;
            }
        }
        
        emit QuestCompleted(msg.sender, questId, isSuccessful);
    }
    
    /**
     * @dev Get active quests for a player
     * @param player Address of the player
     * @return questIds Array of quest IDs
     */
    function getActiveQuestsForPlayer(address player) external view returns (uint256[] memory) {
        return activeQuestsForPlayer[player];
    }
    
    /**
     * @dev Get quest details
     * @param questId ID of the quest
     * @return title Quest title
     * @return description Quest description
     * @return timeRequired Time required in seconds
     * @return riskLevel Risk level
     */
    function getQuestDetails(uint256 questId) external view returns (
        string memory title,
        string memory description,
        uint256 timeRequired,
        RiskLevel riskLevel
    ) {
        Quest storage quest = quests[questId];
        require(quest.id == questId, "Quest does not exist");
        
        return (quest.title, quest.description, quest.timeRequired, quest.riskLevel);
    }
    
    /**
     * @dev Get player artifacts
     * @param player Address of the player
     * @return artifactIds Array of artifact IDs
     */
    function getPlayerArtifacts(address player) external view returns (string[] memory) {
        return playerArtifactIds[player];
    }
}
