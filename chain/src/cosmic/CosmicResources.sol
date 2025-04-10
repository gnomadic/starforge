// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title CosmicResources
 * @dev Contract for managing cosmic resources in the game
 */
contract CosmicResources {
    // Resource types
    enum ResourceType { LIFE, MATTER, ENERGY, TECHNOLOGY }
    
    // Resource structure
    struct Resource {
        uint256 amount;
        uint256 emissionRate;
        uint256 lastUpdateTime;
    }
    
    // Mapping from player address to their resources
    mapping(address => mapping(ResourceType => Resource)) public playerResources;
    
    // Events
    event ResourceUpdated(address indexed player, uint8 resourceType, uint256 amount, uint256 emissionRate);
    event ResourcesEmitted(address indexed player, uint8 resourceType, uint256 amount);
    
    constructor() {
        // Initialize with default values
    }
    
    /**
     * @dev Initialize a new player with starting resources
     */
    function initializePlayer() external {
        require(
            playerResources[msg.sender][ResourceType.LIFE].emissionRate == 0,
            "Player already initialized"
        );
        
        // Set initial values for each resource
        playerResources[msg.sender][ResourceType.LIFE] = Resource(100, 1e17, block.timestamp); // 0.1 per second (scaled by 1e18)
        playerResources[msg.sender][ResourceType.MATTER] = Resource(250, 2e17, block.timestamp); // 0.2 per second
        playerResources[msg.sender][ResourceType.ENERGY] = Resource(75, 15e16, block.timestamp); // 0.15 per second
        playerResources[msg.sender][ResourceType.TECHNOLOGY] = Resource(50, 5e16, block.timestamp); // 0.05 per second
        
        // Emit events for each resource initialization
        for (uint8 i = 0; i <= uint8(ResourceType.TECHNOLOGY); i++) {
            ResourceType resourceType = ResourceType(i);
            Resource memory resource = playerResources[msg.sender][resourceType];
            emit ResourceUpdated(msg.sender, i, resource.amount, resource.emissionRate);
        }
    }
    
    /**
     * @dev Update resource amounts based on emission rates
     * @param resourceType The type of resource to update
     */
    function updateResource(ResourceType resourceType) public {
        Resource storage resource = playerResources[msg.sender][resourceType];
        
        // Calculate elapsed time since last update
        uint256 elapsedTime = block.timestamp - resource.lastUpdateTime;
        
        // Calculate emitted resources (scaled by 1e18)
        uint256 emitted = (resource.emissionRate * elapsedTime) / 1e18;
        
        // Update resource amount and timestamp
        resource.amount += emitted;
        resource.lastUpdateTime = block.timestamp;
        
        emit ResourcesEmitted(msg.sender, uint8(resourceType), emitted);
        emit ResourceUpdated(msg.sender, uint8(resourceType), resource.amount, resource.emissionRate);
    }
    
    /**
     * @dev Update all resources at once
     */
    function updateAllResources() external {
        for (uint8 i = 0; i <= uint8(ResourceType.TECHNOLOGY); i++) {
            updateResource(ResourceType(i));
        }
    }
    
    /**
     * @dev Get the current amount of a specific resource
     * @param player Address of the player
     * @param resourceType Type of resource
     * @return amount Current amount of the resource
     */
    function getResourceAmount(address player, ResourceType resourceType) external view returns (uint256 amount) {
        Resource memory resource = playerResources[player][resourceType];
        
        // Calculate real-time amount including emissions since last update
        uint256 elapsedTime = block.timestamp - resource.lastUpdateTime;
        uint256 emitted = (resource.emissionRate * elapsedTime) / 1e18;
        
        return resource.amount + emitted;
    }
    
    /**
     * @dev Modify resource emission rate (only admin would be able to call this)
     * @param player Address of the player
     * @param resourceType Type of resource
     * @param newEmissionRate New emission rate
     */
    function setEmissionRate(address player, ResourceType resourceType, uint256 newEmissionRate) external {
        // In a real implementation, this would have access controls
        // require(isAdmin(msg.sender), "Only admin can modify emission rates");
        
        updateResource(resourceType); // Update the resource first
        playerResources[player][resourceType].emissionRate = newEmissionRate;
        
        emit ResourceUpdated(
            player, 
            uint8(resourceType), 
            playerResources[player][resourceType].amount, 
            newEmissionRate
        );
    }
    
    /**
     * @dev Add or subtract resources from a player
     * @param player Address of the player
     * @param resourceType Type of resource
     * @param amount Amount to add (positive) or subtract (negative)
     */
    function modifyResourceAmount(address player, ResourceType resourceType, int256 amount) external {
        // In a real implementation, this would have access controls
        // require(isAdmin(msg.sender) || isGameContract(msg.sender), "Unauthorized");
        
        updateResource(resourceType); // Update the resource first
        Resource storage resource = playerResources[player][resourceType];
        
        if (amount >= 0) {
            resource.amount += uint256(amount);
        } else {
            require(resource.amount >= uint256(-amount), "Insufficient resources");
            resource.amount -= uint256(-amount);
        }
        
        emit ResourceUpdated(player, uint8(resourceType), resource.amount, resource.emissionRate);
    }
}