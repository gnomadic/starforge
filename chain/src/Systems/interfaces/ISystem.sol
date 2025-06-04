// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IScenario} from "../../Scenario.sol";
import {LibClone} from "solady/utils/LibClone.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

abstract contract ISystem is Ownable {
    using LibClone for address;

    bool internal registered = false;
    address internal _systemController;
    address public entityAddress;

    constructor(address _entity) Ownable(msg.sender) {
        entityAddress = _entity;
    }

    function registerSystem(address systemController) external {
        if (registered) {
            revert AlreadyRegistered();
        }
        registered = true;
        _systemController = systemController;
    }

    function init(
        ISystemController controller,
        IScenario scenario,
        uint256 tokenId
    ) external virtual;

    function sync(uint256 tokenId) external virtual;

    function activateEntity(IScenario scenario) external returns (address) {
        address current = scenario.getEntity(address(this));
        if (current != address(0)) {
            return current;
        }

        address clone = entityAddress.clone();

        initEntity(scenario, clone);
        return clone;
    }

    function updateEntityAddress(address newEntityAddress) external onlyOwner {
        entityAddress = newEntityAddress;
    }

    function initEntity(IScenario scenario, address clone) internal virtual;

    function getId() external pure virtual returns (string memory);

    modifier onlySystemAndAdmin(IScenario _scenario) {
        if (
            ISystemController(_systemController).isSystem(msg.sender) ==
            false &&
            msg.sender != _scenario.getAdmin()
        ) {
            revert NotSystem();
        }
        _;
    }
    error NotSystem();

    error AlreadyRegistered();
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
