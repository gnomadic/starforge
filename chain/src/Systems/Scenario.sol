pragma solidity ^0.8.24;

import "../interfaces/IVotable.sol";

contract Scenario is IVotable {
    struct Upgrade {
        string name;
        string description;
        uint256[] costRate;
        address[] costToken;
        uint256[] benefitRate;
        address[] benefitToken;
    }

    address public owner;
    Upgrade[] private upgrades;

    constructor(address _owner) {
        owner = _owner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    function addUpgrade(string calldata _name, string calldata _description)
        external
        onlyOwner
    {
        upgrades.push(Upgrade({name: _name, description: _description, costRate: new uint256[](0), costToken: new address[](0), benefitRate: new uint256[](0), benefitToken: new address[](0)}));
    }

    function getUpgrades() external view returns (Upgrade[] memory) {
        return upgrades;
    }

    function finalizeProposal(string calldata payload) external override {
        (
            string memory _name,
            string memory _description,
            uint256[] memory _costRate,
            address[] memory _costToken,
            uint256[] memory _benefitRate,
            address[] memory _benefitToken
        ) = abi.decode(
            bytes(payload),
            (string, string, uint256[], address[], uint256[], address[])
        );
        upgrades.push(
            Upgrade({
                name: _name,
                description: _description,
                costRate: _costRate,
                costToken: _costToken,
                benefitRate: _benefitRate,
                benefitToken: _benefitToken
            })
        );
    }
}