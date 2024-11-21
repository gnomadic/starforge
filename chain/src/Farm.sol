// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import '../lib/ERC721A/contracts/extensions/ERC721AQueryable.sol';
import "@openzeppelin/contracts/access/Ownable.sol";

contract Farm is ERC721AQueryable, Ownable {
    uint256 public nextTokenId;
    address public networkController;


      constructor()
    ERC721A('synapse.garden.data.farm', 's.g.d.f')
    Ownable(_msgSender())
  {}

    modifier onlyController() {
        require(msg.sender == networkController, "Only the NetworkController can call this function");
        _;
    }

    function setNetworkController(address _networkController) external onlyOwner {
        networkController = _networkController;
    }

    function mint(address to) external onlyController returns (uint256) {
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _safeMint(to, tokenId);
        return tokenId;
    }
}
