// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import {IGlobalProgress} from "../interfaces/IGlobalProgress.sol";
import {ISystem, ISystemController} from "../interfaces/ISystem.sol";
import {IERC721} from "../interfaces/IERC721.sol";

contract GlobalProgress is Ownable, IGlobalProgress, ISystem {
    constructor() Ownable(_msgSender()) {}

    function countEvent(string memory _event) external {
        //nothing yet
    }

    function init(
        ISystemController controller,
        uint256 tokenId
    ) external override {
        //nothing yet
    }

    function sync(uint256 tokenId) external override {}
}
