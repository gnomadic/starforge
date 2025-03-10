
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/ISystem.sol";


contract SystemController is Ownable, ISystemController {
    ISystem[] public systems;
    mapping (uint8 => ISystem) public systemMap;

    address public tokenAddress;

    constructor() Ownable(_msgSender()) {}

    function registerSystem(uint8 id, ISystem system) external onlyOwner {
        systems.push(system);
        systemMap[id] = system;
    }

    function initAll(uint256 tokenId) external onlyToken {
        for (uint256 i = 0; i < systems.length; i++) {
            systems[i].init(this, tokenId);
        }
    }

    function syncAll(uint256 tokenId) external onlyToken {
        for (uint256 i = 0; i < systems.length; i++) {
            systems[i].sync(tokenId);
        }
    }

    function getSystem(uint8 id) external view returns (ISystem) {
        return systemMap[id];
    }

    modifier onlyToken() {
        require(msg.sender == address(tokenAddress), "Only token can call this function");
        _;
    }

    function setTokenAddress(address _tokenAddress) external onlyOwner {
        tokenAddress = _tokenAddress;
    }
}