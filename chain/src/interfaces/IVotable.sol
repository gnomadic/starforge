pragma solidity ^0.8.24;

interface IVotable {
    function propose(string calldata payload) external returns (uint256 proposalId);
    function finalizeProposal(uint256 proposalId) external;
}