
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title CosmicCombat
 * @dev Contract for combat encounters in the game
 */
contract CosmicCombat {
    struct CombatStats {
        uint256 health;
        uint256 maxHealth;
        uint256 attack;
        uint256 defense;
    }
    
    struct Enemy {
        uint256 id;
        string name;
        CombatStats stats;
        string description;
        Reward[] rewards;
    }
    
    struct Reward {
        string rewardType; // xp, gold, artifact, cosmic-dust
        uint256 amount;
        string artifactId; // Only used if reward type is artifact
    }
    
    struct CombatLog {
        uint256 id;
        string message;
        string logType; // player, enemy, system, reward
        uint256 timestamp;
    }
    
    struct Combat {
        uint256 id;
        address player;
        uint256 enemyId;
        CombatStats playerStats;
        CombatStats enemyStats;
        CombatLog[] logs;
        bool completed;
        bool playerWon;
        uint256 startTime;
    }
    
    // State variables
    mapping(uint256 => Enemy) public enemies;
    mapping(uint256 => Combat) public combats;
    mapping(address => uint256[]) public playerCombatHistory;
    
    uint256 public nextEnemyId;
    uint256 public nextCombatId;
    uint256 public nextLogId;
    
    // Events
    event EnemyCreated(uint256 indexed enemyId, string name);
    event CombatStarted(uint256 indexed combatId, address indexed player, uint256 enemyId);
    event CombatAction(uint256 indexed combatId, string actionType, uint256 damage);
    event CombatCompleted(uint256 indexed combatId, bool playerWon);
    event RewardGranted(address indexed player, string rewardType, uint256 amount);
    
    constructor() {
        // Initialize with some default enemies
        createEnemy(
            "Void Crawler",
            100,
            15,
            10,
            "A shadowy creature that lurks in the darkness between stars."
        );
        
        createEnemy(
            "Plasma Sentinel",
            150,
            20,
            15,
            "An ancient guardian composed of pure plasma energy."
        );
        
        createEnemy(
            "Cosmic Devourer",
            250,
            30,
            20,
            "A massive entity that feeds on stellar matter and cosmic energy."
        );
    }
    
    /**
     * @dev Create a new enemy (admin only)
     * @param name Enemy name
     * @param health Enemy health
     * @param attack Enemy attack
     * @param defense Enemy defense
     * @param description Enemy description
     */
    function createEnemy(
        string memory name,
        uint256 health,
        uint256 attack,
        uint256 defense,
        string memory description
    ) public {
        // In a real implementation, this would have access controls
        // require(isAdmin(msg.sender), "Only admin can create enemies");
        
        uint256 enemyId = nextEnemyId++;
        Enemy storage newEnemy = enemies[enemyId];
        
        newEnemy.id = enemyId;
        newEnemy.name = name;
        newEnemy.stats = CombatStats(health, health, attack, defense);
        newEnemy.description = description;
        
        emit EnemyCreated(enemyId, name);
    }
    
    /**
     * @dev Add a reward to an enemy
     * @param enemyId Enemy ID
     * @param rewardType Reward type (xp, gold, etc.)
     * @param amount Reward amount
     * @param artifactId Artifact ID (if applicable)
     */
    function addEnemyReward(
        uint256 enemyId,
        string memory rewardType,
        uint256 amount,
        string memory artifactId
    ) external {
        // In a real implementation, this would have access controls
        // require(isAdmin(msg.sender), "Only admin can modify enemies");
        
        Enemy storage enemy = enemies[enemyId];
        require(enemy.id == enemyId, "Enemy does not exist");
        
        enemy.rewards.push(Reward(rewardType, amount, artifactId));
    }
    
    /**
     * @dev Start combat with an enemy
     * @param enemyId Enemy ID
     * @param health Player health
     * @param attack Player attack
     * @param defense Player defense
     */
    function startCombat(
        uint256 enemyId,
        uint256 health,
        uint256 attack,
        uint256 defense
    ) external {
        Enemy storage enemy = enemies[enemyId];
        require(enemy.id == enemyId, "Enemy does not exist");
        
        uint256 combatId = nextCombatId++;
        Combat storage newCombat = combats[combatId];
        
        newCombat.id = combatId;
        newCombat.player = msg.sender;
        newCombat.enemyId = enemyId;
        newCombat.playerStats = CombatStats(health, health, attack, defense);
        newCombat.enemyStats = CombatStats(
            enemy.stats.health,
            enemy.stats.maxHealth,
            enemy.stats.attack,
            enemy.stats.defense
        );
        newCombat.completed = false;
        newCombat.playerWon = false;
        newCombat.startTime = block.timestamp;
        
        playerCombatHistory[msg.sender].push(combatId);
        
        // Add initial log
        addCombatLog(
            combatId,
            string(abi.encodePacked("Combat started with ", enemy.name)),
            "system"
        );
        
        emit CombatStarted(combatId, msg.sender, enemyId);
    }
    
    /**
     * @dev Player attacks enemy
     * @param combatId Combat ID
     */
    function playerAttack(uint256 combatId) external {
        Combat storage combat = combats[combatId];
        require(combat.id == combatId, "Combat does not exist");
        require(combat.player == msg.sender, "Not your combat");
        require(!combat.completed, "Combat already completed");
        
        // Calculate damage (attacking power - defense, minimum 1)
        uint256 damage = combat.playerStats.attack > combat.enemyStats.defense ?
            combat.playerStats.attack - combat.enemyStats.defense : 1;
            
        // Apply damage to enemy
        if (damage >= combat.enemyStats.health) {
            combat.enemyStats.health = 0;
        } else {
            combat.enemyStats.health -= damage;
        }
        
        // Add combat log
        addCombatLog(
            combatId,
            string(abi.encodePacked("Player attacks for ", uint2str(damage), " damage")),
            "player"
        );
        
        emit CombatAction(combatId, "player_attack", damage);
        
        // Check if enemy is defeated
        if (combat.enemyStats.health == 0) {
            combat.completed = true;
            combat.playerWon = true;
            
            addCombatLog(combatId, "You defeated the enemy!", "system");
            grantRewards(combatId);
            
            emit CombatCompleted(combatId, true);
            return;
        }
        
        // Enemy's turn
        enemyAttack(combatId);
    }
    
    /**
     * @dev Enemy attacks player (internal function)
     * @param combatId Combat ID
     */
    function enemyAttack(uint256 combatId) internal {
        Combat storage combat = combats[combatId];
        
        // Calculate damage (attacking power - defense, minimum 1)
        uint256 damage = combat.enemyStats.attack > combat.playerStats.defense ?
            combat.enemyStats.attack - combat.playerStats.defense : 1;
            
        // Apply damage to player
        if (damage >= combat.playerStats.health) {
            combat.playerStats.health = 0;
        } else {
            combat.playerStats.health -= damage;
        }
        
        // Add combat log
        Enemy storage enemy = enemies[combat.enemyId];
        addCombatLog(
            combatId,
            string(abi.encodePacked(enemy.name, " attacks for ", uint2str(damage), " damage")),
            "enemy"
        );
        
        emit CombatAction(combatId, "enemy_attack", damage);
        
        // Check if player is defeated
        if (combat.playerStats.health == 0) {
            combat.completed = true;
            combat.playerWon = false;
            
            addCombatLog(combatId, "You were defeated!", "system");
            emit CombatCompleted(combatId, false);
        }
    }
    
    /**
     * @dev Add a log entry to a combat
     * @param combatId Combat ID
     * @param message Log message
     * @param logType Log type
     */
    function addCombatLog(
        uint256 combatId,
        string memory message,
        string memory logType
    ) internal {
        Combat storage combat = combats[combatId];
        
        uint256 logId = nextLogId++;
        combat.logs.push(CombatLog(logId, message, logType, block.timestamp));
    }
    
    /**
     * @dev Grant rewards to player for winning combat
     * @param combatId Combat ID
     */
    function grantRewards(uint256 combatId) internal {
        Combat storage combat = combats[combatId];
        Enemy storage enemy = enemies[combat.enemyId];
        
        for (uint i = 0; i < enemy.rewards.length; i++) {
            Reward memory reward = enemy.rewards[i];
            
            // In a real implementation, rewards would be sent to the player
            // via calls to other contracts
            
            addCombatLog(
                combatId,
                string(abi.encodePacked(
                    "Received ", uint2str(reward.amount), " ", reward.rewardType
                )),
                "reward"
            );
            
            emit RewardGranted(combat.player, reward.rewardType, reward.amount);
        }
    }
    
    /**
     * @dev Get combat details
     * @param combatId Combat ID
     * @return enemyName Enemy name
     * @return playerHealth Player current health
     * @return enemyHealth Enemy current health
     * @return completed Whether combat is completed
     * @return playerWon Whether player won
     */
    function getCombatDetails(uint256 combatId) external view returns (
        string memory enemyName,
        uint256 playerHealth,
        uint256 enemyHealth,
        bool completed,
        bool playerWon
    ) {
        Combat storage combat = combats[combatId];
        require(combat.id == combatId, "Combat does not exist");
        
        Enemy storage enemy = enemies[combat.enemyId];
        
        return (
            enemy.name,
            combat.playerStats.health,
            combat.enemyStats.health,
            combat.completed,
            combat.playerWon
        );
    }
    
    /**
     * @dev Get combat logs
     * @param combatId Combat ID
     * @param startIndex Start index for logs (for pagination)
     * @param count Number of logs to retrieve
     * @return messages Array of log messages
     * @return types Array of log types
     * @return timestamps Array of log timestamps
     */
    function getCombatLogs(
        uint256 combatId,
        uint256 startIndex,
        uint256 count
    ) external view returns (
        string[] memory messages,
        string[] memory types,
        uint256[] memory timestamps
    ) {
        Combat storage combat = combats[combatId];
        require(combat.id == combatId, "Combat does not exist");
        
        uint256 endIndex = startIndex + count;
        if (endIndex > combat.logs.length) {
            endIndex = combat.logs.length;
        }
        
        uint256 resultCount = endIndex - startIndex;
        
        string[] memory resultMessages = new string[](resultCount);
        string[] memory resultTypes = new string[](resultCount);
        uint256[] memory resultTimestamps = new uint256[](resultCount);
        
        for (uint256 i = 0; i < resultCount; i++) {
            uint256 logIndex = startIndex + i;
            CombatLog storage log = combat.logs[logIndex];
            
            resultMessages[i] = log.message;
            resultTypes[i] = log.logType;
            resultTimestamps[i] = log.timestamp;
        }
        
        return (resultMessages, resultTypes, resultTimestamps);
    }
    
    /**
     * @dev Get player combat history
     * @param player Player address
     * @return combatIds Array of combat IDs
     */
    function getPlayerCombatHistory(address player) external view returns (uint256[] memory) {
        return playerCombatHistory[player];
    }
    
    /**
     * @dev Convert uint to string
     * @param v Unsigned integer to convert
     * @return str String representation
     */
    function uint2str(uint256 v) internal pure returns (string memory str) {
        if (v == 0) {
            return "0";
        }
        
        uint256 j = v;
        uint256 length;
        
        while (j != 0) {
            length++;
            j /= 10;
        }
        
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        
        while (v != 0) {
            k = k - 1;
            bstr[k] = bytes1(uint8(48 + v % 10));
            v /= 10;
        }
        
        return string(bstr);
    }
}