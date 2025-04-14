// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ISystem} from "./systems/interfaces/ISystem.sol";


interface IScenario {
    // function setMetadataURI(string memory _metadataURI) external;
    function getEntity(address _system) external view returns (address);
    function getAdmin() external view returns (address);
}


contract Scenario is IScenario {
    
    address public admin;
    string public metadataURI;

    // map system address to it's entity
    mapping(address => address) private dataEntities;

    constructor(){}

    bool initialized = false;
    
    function initialize(address _admin, string memory _metadataURI, ISystem[] memory systems, address[] memory entities) external {
        require(!initialized, "Already initialized");
        initialized = true;
        metadataURI = _metadataURI;
        admin = _admin;
        for (uint i = 0; i < systems.length; i++) {
            dataEntities[address(systems[i])] = entities[i];
        }
        

    }

    function setAdmin(address _admin) external onlyAdmin {
        admin = _admin;
    }

    function setMetadataURI(string memory _metadataURI) external onlyAdmin {
        metadataURI = _metadataURI;
    }

    // function setDataEntity(address _system, DataEntity _entity) external onlyAdmin {
    //     dataEntities[_system] = _entity;
    // }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not admin");
        _;
    }

    function getEntity(address _system) external view returns (address) {
        return dataEntities[_system];
    }

    function getAdmin() external view returns (address) {
        return admin;
    }
    


   
}

// interface DataEntity {


// }