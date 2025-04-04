pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import {ISystem, ISystemController, TokenRate} from "./interfaces/ISystem.sol";
import {IVotable} from "../interfaces/IVotable.sol";

contract UpgradesSystem is Ownable, ISystem, IVotable {
    struct Upgrade {
        string name;
        string description;
        TokenRate cost;
        TokenRate benefit;
    }

    // Store proposals as raw payloads
    struct ProposedUpgrade {
        string payload;
        bool executed;
    }

    ProposedUpgrade[] public proposals;
    Upgrade[] public upgrades;

    mapping(uint256 => uint256[]) public planetUpgrades;

    constructor() Ownable(_msgSender()) {}

    // IVotable interface
    function propose(
        string calldata payload
    ) external override returns (uint256 proposalId) {
        proposals.push(ProposedUpgrade({payload: payload, executed: false}));
        return proposals.length - 1;
    }

    function finalizeProposal(uint256 proposalId) external override {
        ProposedUpgrade storage prop = proposals[proposalId];
        require(!prop.executed, "Already executed");
        prop.executed = true;

        // Decode the payload and execute the proposal
        (
            string memory _name,
            string memory _description,
            TokenRate memory _cost,
            TokenRate memory _benefit
        ) = abi.decode(
                bytes(prop.payload),
                (string, string, TokenRate, TokenRate)
            );

        upgrades.push(Upgrade(_name, _description, _cost, _benefit));
    }

    // Existing methods
    function addUpgrade(
        string memory _name,
        string memory _description,
        TokenRate memory _cost,
        TokenRate memory _benefit
    ) public onlyOwner {
        upgrades.push(Upgrade(_name, _description, _cost, _benefit));
    }

    function purchaseUpgrade(
        ISystemController /*controller*/,
        uint256 tokenId,
        uint256 upgradeId
    ) external {
        planetUpgrades[tokenId].push(upgradeId);
    }

    function init(
        ISystemController /*controller*/,
        uint256 /*tokenId*/
    ) external override {}

    function sync(uint256 /*tokenId*/) external override {}

    function getAppliedUpgrades(
        uint256 tokenId
    ) external view returns (uint256[] memory) {
        return planetUpgrades[tokenId];
    }
}
