pragma solidity ^0.8.0;

import {ISystem, ISystemController, TokenRate} from "./interfaces/ISystem.sol";
import {IVotable} from "../interfaces/IVotable.sol";

contract SupplySystem is ISystem, IVotable {
    struct Resource {
        address tokenAddress;
        string tokenName;
    }

    function finalizeProposal(string calldata payload) external override {}

    function init(
        ISystemController /*controller*/,
        uint256 /*tokenId*/
    ) external override {


    }

    function sync(uint256 /*tokenId*/) external override {}
}
