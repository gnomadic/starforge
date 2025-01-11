
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/ISystem.sol";


contract SystemController is Ownable {
    ISystem[] public systems;

    constructor() Ownable(_msgSender()) {}

    function registerSystem(ISystem system) external onlyOwner {
        systems.push(system);
    }

    function initAll(uint256 _planet) external onlyToken {
        for (uint256 i = 0; i < systems.length; i++) {
            systems[i].init(_planet);
        }
    }

    address public tokenAddress;

    modifier onlyToken() {
        require(msg.sender == address(tokenAddress), "Only token can call this function");
        _;
    }

    function setTokenAddress(address _tokenAddress) external onlyOwner {
        tokenAddress = _tokenAddress;
    }
}