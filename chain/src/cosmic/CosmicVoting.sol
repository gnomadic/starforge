
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title CosmicVoting
 * @dev Contract for community voting on game features
 */
contract CosmicVoting {
    // Vote option category
    enum VoteCategory { QUEST, ARTIFACT, ENEMY }
    
    // Vote option structure
    struct VoteOption {
        uint256 id;
        string title;
        string description;
        uint256 voteCount;
        VoteCategory category;
    }
    
    // Vote campaign structure
    struct VoteCampaign {
        uint256 id;
        string title;
        string description;
        uint256[] optionIds;
        uint256 startTime;
        uint256 endTime;
        bool finalized;
        uint256 winningOptionId;
    }
    
    // State variables
    mapping(uint256 => VoteOption) public voteOptions;
    mapping(uint256 => VoteCampaign) public voteCampaigns;
    mapping(address => mapping(uint256 => bool)) public hasVoted;
    mapping(address => mapping(uint256 => uint256)) public playerVotes;
    
    uint256 public nextOptionId;
    uint256 public nextCampaignId;
    
    // Events
    event VoteOptionCreated(uint256 indexed optionId, string title, VoteCategory category);
    event VoteCampaignCreated(uint256 indexed campaignId, string title, uint256 startTime, uint256 endTime);
    event VoteCasted(address indexed voter, uint256 indexed campaignId, uint256 optionId);
    event VoteCampaignFinalized(uint256 indexed campaignId, uint256 winningOptionId);
    
    constructor() {
        // Initialize contract
    }
    
    /**
     * @dev Create a new vote option (admin only)
     * @param title Title of the option
     * @param description Description of the option
     * @param category Category enum
     */
    function createVoteOption(
        string memory title,
        string memory description,
        VoteCategory category
    ) external returns (uint256) {
        // In a real implementation, this would have access controls
        // require(isAdmin(msg.sender), "Only admin can create vote options");
        
        uint256 optionId = nextOptionId++;
        VoteOption storage newOption = voteOptions[optionId];
        
        newOption.id = optionId;
        newOption.title = title;
        newOption.description = description;
        newOption.voteCount = 0;
        newOption.category = category;
        
        emit VoteOptionCreated(optionId, title, category);
        
        return optionId;
    }
    
    /**
     * @dev Create a new vote campaign (admin only)
     * @param title Title of the campaign
     * @param description Description of the campaign
     * @param optionIds Array of option IDs to include in the campaign
     * @param duration Duration of the campaign in seconds
     */
    function createVoteCampaign(
        string memory title,
        string memory description,
        uint256[] memory optionIds,
        uint256 duration
    ) external {
        // In a real implementation, this would have access controls
        // require(isAdmin(msg.sender), "Only admin can create vote campaigns");
        
        require(optionIds.length >= 2, "Need at least two options");
        
        // Verify all options exist
        VoteCategory firstCategory = voteOptions[optionIds[0]].category;
        for (uint i = 0; i < optionIds.length; i++) {
            require(voteOptions[optionIds[i]].id == optionIds[i], "Option does not exist");
            
            // All options must be of the same category
            require(voteOptions[optionIds[i]].category == firstCategory, "All options must be same category");
        }
        
        uint256 campaignId = nextCampaignId++;
        VoteCampaign storage newCampaign = voteCampaigns[campaignId];
        
        newCampaign.id = campaignId;
        newCampaign.title = title;
        newCampaign.description = description;
        newCampaign.optionIds = optionIds;
        newCampaign.startTime = block.timestamp;
        newCampaign.endTime = block.timestamp + duration;
        newCampaign.finalized = false;
        
        emit VoteCampaignCreated(campaignId, title, newCampaign.startTime, newCampaign.endTime);
    }
    
    /**
     * @dev Cast a vote in a campaign
     * @param campaignId ID of the vote campaign
     * @param optionId ID of the vote option
     */
    function castVote(uint256 campaignId, uint256 optionId) external {
        VoteCampaign storage campaign = voteCampaigns[campaignId];
        require(campaign.id == campaignId, "Campaign does not exist");
        require(!campaign.finalized, "Campaign is finalized");
        require(block.timestamp >= campaign.startTime, "Campaign has not started");
        require(block.timestamp < campaign.endTime, "Campaign has ended");
        
        // Check if option is part of this campaign
        bool isValidOption = false;
        for (uint i = 0; i < campaign.optionIds.length; i++) {
            if (campaign.optionIds[i] == optionId) {
                isValidOption = true;
                break;
            }
        }
        require(isValidOption, "Invalid option for this campaign");
        
        // If user has already voted, remove their previous vote
        if (hasVoted[msg.sender][campaignId]) {
            uint256 previousVote = playerVotes[msg.sender][campaignId];
            voteOptions[previousVote].voteCount--;
        }
        
        // Record vote
        voteOptions[optionId].voteCount++;
        hasVoted[msg.sender][campaignId] = true;
        playerVotes[msg.sender][campaignId] = optionId;
        
        emit VoteCasted(msg.sender, campaignId, optionId);
    }
    
    /**
     * @dev Finalize a vote campaign (admin or automatic)
     * @param campaignId ID of the vote campaign
     */
    function finalizeCampaign(uint256 campaignId) external {
        VoteCampaign storage campaign = voteCampaigns[campaignId];
        require(campaign.id == campaignId, "Campaign does not exist");
        require(!campaign.finalized, "Campaign already finalized");
        require(block.timestamp >= campaign.endTime, "Campaign has not ended");
        
        // Find winning option (highest vote count)
        uint256 highestVotes = 0;
        uint256 winningOptionId = campaign.optionIds[0]; // Default to first option
        
        for (uint i = 0; i < campaign.optionIds.length; i++) {
            uint256 optionId = campaign.optionIds[i];
            if (voteOptions[optionId].voteCount > highestVotes) {
                highestVotes = voteOptions[optionId].voteCount;
                winningOptionId = optionId;
            }
        }
        
        campaign.finalized = true;
        campaign.winningOptionId = winningOptionId;
        
        emit VoteCampaignFinalized(campaignId, winningOptionId);
    }
    
    /**
     * @dev Get vote campaign details
     * @param campaignId ID of the vote campaign
     * @return title Campaign title
     * @return description Campaign description
     * @return optionIds Array of option IDs
     * @return startTime Campaign start time
     * @return endTime Campaign end time
     * @return finalized Whether campaign is finalized
     * @return winningOptionId Winning option ID (0 if not finalized)
     */
    function getCampaignDetails(uint256 campaignId) external view returns (
        string memory title,
        string memory description,
        uint256[] memory optionIds,
        uint256 startTime,
        uint256 endTime,
        bool finalized,
        uint256 winningOptionId
    ) {
        VoteCampaign storage campaign = voteCampaigns[campaignId];
        require(campaign.id == campaignId, "Campaign does not exist");
        
        return (
            campaign.title,
            campaign.description,
            campaign.optionIds,
            campaign.startTime,
            campaign.endTime,
            campaign.finalized,
            campaign.winningOptionId
        );
    }
    
    /**
     * @dev Get vote option details
     * @param optionId ID of the vote option
     * @return title Option title
     * @return description Option description
     * @return voteCount Number of votes
     * @return category Option category
     */
    function getOptionDetails(uint256 optionId) external view returns (
        string memory title,
        string memory description,
        uint256 voteCount,
        VoteCategory category
    ) {
        VoteOption storage option = voteOptions[optionId];
        require(option.id == optionId, "Option does not exist");
        
        return (option.title, option.description, option.voteCount, option.category);
    }
    
    /**
     * @dev Get user vote for a campaign
     * @param user Address of the user
     * @param campaignId ID of the campaign
     * @return voted Whether user has voted
     * @return optionId ID of the option voted for (0 if not voted)
     */
    function getUserVote(address user, uint256 campaignId) external view returns (bool voted, uint256 optionId) {
        return (hasVoted[user][campaignId], playerVotes[user][campaignId]);
    }
}
