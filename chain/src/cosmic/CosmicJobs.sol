
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./CosmicResources.sol";

/**
 * @title CosmicJobs
 * @dev Contract for managing jobs that boost resource production
 */
contract CosmicJobs {
    // Reference to the resources contract
    CosmicResources public resourcesContract;
    
    // Job structure
    struct Job {
        string id;
        string title;
        string description;
        CosmicResources.ResourceType resourceType;
        uint256 baseEmissionBoost; // Scaled by 1e18
    }
    
    // Available jobs
    Job[] public availableJobs;
    
    // Mapping of player address to their current active job
    mapping(address => string) public activeJobs;
    
    // Events
    event JobActivated(address indexed player, string jobId);
    event JobDeactivated(address indexed player, string jobId);
    
    constructor(address _resourcesContract) {
        resourcesContract = CosmicResources(_resourcesContract);
        
        // Initialize available jobs
        availableJobs.push(Job(
            "life-researcher",
            "Life Researcher",
            "Study cosmic life forms to increase life production.",
            CosmicResources.ResourceType.LIFE,
            2e17 // 0.2 per second
        ));
        
        availableJobs.push(Job(
            "matter-collector",
            "Matter Collector",
            "Collect interstellar particles to increase matter production.",
            CosmicResources.ResourceType.MATTER,
            3e17 // 0.3 per second
        ));
        
        availableJobs.push(Job(
            "energy-harvester",
            "Energy Harvester",
            "Capture cosmic radiation to boost energy production.",
            CosmicResources.ResourceType.ENERGY,
            25e16 // 0.25 per second
        ));
        
        availableJobs.push(Job(
            "tech-engineer",
            "Tech Engineer",
            "Research advanced technologies to increase tech production.",
            CosmicResources.ResourceType.TECHNOLOGY,
            15e16 // 0.15 per second
        ));
    }
    
    /**
     * @dev Activate a job for a player
     * @param jobId The ID of the job to activate
     */
    function activateJob(string memory jobId) external {
        // Deactivate current job if one exists
        if (bytes(activeJobs[msg.sender]).length > 0) {
            deactivateJob();
        }
        
        // Find the job with the given ID
        Job memory selectedJob;
        bool found = false;
        
        for (uint i = 0; i < availableJobs.length; i++) {
            if (keccak256(bytes(availableJobs[i].id)) == keccak256(bytes(jobId))) {
                selectedJob = availableJobs[i];
                found = true;
                break;
            }
        }
        
        require(found, "Job not found");
        
        // Get current emission rate
        (, uint256 currentEmissionRate, ) = resourcesContract.playerResources(
            msg.sender, 
            selectedJob.resourceType
        );
        
        // Update emission rate in the resources contract
        resourcesContract.setEmissionRate(
            msg.sender,
            selectedJob.resourceType,
            currentEmissionRate + selectedJob.baseEmissionBoost
        );
        
        // Set active job
        activeJobs[msg.sender] = jobId;
        
        emit JobActivated(msg.sender, jobId);
    }
    
    /**
     * @dev Deactivate the current job
     */
    function deactivateJob() public {
        string memory currentJobId = activeJobs[msg.sender];
        require(bytes(currentJobId).length > 0, "No active job");
        
        // Find the job with the given ID
        Job memory activeJob;
        bool found = false;
        
        for (uint i = 0; i < availableJobs.length; i++) {
            if (keccak256(bytes(availableJobs[i].id)) == keccak256(bytes(currentJobId))) {
                activeJob = availableJobs[i];
                found = true;
                break;
            }
        }
        
        require(found, "Active job not found in available jobs");
        
        // Get current emission rate
        (, uint256 currentEmissionRate, ) = resourcesContract.playerResources(
            msg.sender, 
            activeJob.resourceType
        );
        
        // Revert the emission rate boost
        resourcesContract.setEmissionRate(
            msg.sender,
            activeJob.resourceType,
            currentEmissionRate - activeJob.baseEmissionBoost
        );
        
        // Clear active job
        delete activeJobs[msg.sender];
        
        emit JobDeactivated(msg.sender, currentJobId);
    }
    
    /**
     * @dev Get the number of available jobs
     */
    function getAvailableJobsCount() external view returns (uint256) {
        return availableJobs.length;
    }
    
    /**
     * @dev Get the active job details
     * @return jobId The ID of the active job, or empty string if none
     * @return resourceType The resource type affected by the job
     * @return emissionBoost The emission boost amount
     */
    function getActiveJob() external view returns (
        string memory jobId,
        CosmicResources.ResourceType resourceType,
        uint256 emissionBoost
    ) {
        string memory currentJobId = activeJobs[msg.sender];
        
        if (bytes(currentJobId).length == 0) {
            return ("", CosmicResources.ResourceType.LIFE, 0);
        }
        
        for (uint i = 0; i < availableJobs.length; i++) {
            if (keccak256(bytes(availableJobs[i].id)) == keccak256(bytes(currentJobId))) {
                return (
                    currentJobId,
                    availableJobs[i].resourceType,
                    availableJobs[i].baseEmissionBoost
                );
            }
        }
        
        // Should never reach here if data is consistent
        return ("", CosmicResources.ResourceType.LIFE, 0);
    }
}