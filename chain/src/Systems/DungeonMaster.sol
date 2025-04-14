// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IVotable.sol";

contract DungeonMaster is Ownable {
    struct Proposal {
        address target;         // Any contract that implements IVotable
        string data;            // now a string
        uint256 yesVotes;
        uint256 noVotes;
        uint256 startTime;
        bool executed;
    }

    Proposal[] private proposals;
    mapping(uint256 => mapping(address => bool)) private hasVoted;
    uint256 public constant VOTING_DURATION = 7 days;

    constructor() Ownable(_msgSender()) {}

    // Submit any "votable" proposal.
    function submitProposal(address _target, string calldata _data) external {
        Proposal storage newProposal = proposals.push();
        newProposal.target = _target;
        newProposal.data = _data; // store string
        newProposal.startTime = block.timestamp;
    }

    function voteOnProposal(uint256 proposalId, bool support) external {
        require(proposalId < proposals.length, "Invalid proposal");
        Proposal storage proposal = proposals[proposalId];
        require(
            block.timestamp < proposal.startTime + VOTING_DURATION,
            "Voting ended"
        );
        require(!hasVoted[proposalId][msg.sender], "Already voted");

        hasVoted[proposalId][msg.sender] = true;
        if (support) {
            proposal.yesVotes++;
        } else {
            proposal.noVotes++;
        }
    }

    function finalizeProposal(uint256 proposalId) external {
        require(proposalId < proposals.length, "Invalid proposal");
        Proposal storage proposal = proposals[proposalId];
        require(
            block.timestamp >= proposal.startTime + VOTING_DURATION,
            "Voting still active"
        );
        require(!proposal.executed, "Already executed");
        proposal.executed = true;

        // If yesVotes > noVotes, propose & finalize on the target
        if (proposal.yesVotes > proposal.noVotes) {
            // 1) call propose(...) on the target
            // uint256 targetProposalId = IVotable(proposal.target).propose(proposal.data);

            // 2) finalize it
            IVotable(proposal.target).finalizeProposal(proposal.data);
        }
    }

    /// @notice Returns the total number of proposals
    function getProposalsCount() external view returns (uint256) {
        return proposals.length;
    }

    function getProposals() external view returns (Proposal[] memory) {
        return proposals;
    }
    function getProposal(uint256 proposalId) external view returns (Proposal memory) {
        require(proposalId < proposals.length, "Invalid proposal");
        return proposals[proposalId];
    }
}