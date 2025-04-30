// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../../Scenario.sol";

interface ISystem {

    function registerSystem(address systemController) external;

    function init(
        ISystemController controller,
        IScenario scenario,
        uint256 tokenId
    ) external;

    function sync(uint256 tokenId) external;

    function activateEntity(IScenario scenario) external returns (address);

    function getId() external view returns (string memory);
}

interface ISystemController {
    function initAll(uint256 tokenId) external;

    function getSystem(string memory id) external view returns (ISystem);

    function getSystems() external view returns (ISystem[] memory);

    function activateEntities(
        IScenario scenario
    ) external returns (address[] memory);

    function isSystem(address systemAddress) external view returns (bool);
}

struct TokenRate {
    uint256 rate;
    address token;
}
