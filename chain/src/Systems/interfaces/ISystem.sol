// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../../Scenario.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract ISystem is Ownable {
    function registerSystem(address systemController) external view virtual;

    function init(
        ISystemController controller,
        IScenario scenario,
        uint256 tokenId
    ) external view virtual;

    function sync(uint256 tokenId) external view virtual;

    function activateEntity(
        IScenario scenario
    ) external view virtual 
    returns (address);

    function getId() external view virtual returns (string memory);
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
