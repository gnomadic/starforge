// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../lib/ERC721A/contracts/extensions/ERC721AQueryable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {IRenderer} from "./interfaces/IRenderer.sol";

contract Lab is ERC721AQueryable, Ownable {
    struct GameState {
        uint32 colors;
    }

    uint256 public nextTokenId;

    uint256 public mintCost = 0;
    uint256 public customizeCost = 0; // 5 * 10 ** 15;

    mapping(uint256 => GameState) public state;

    uint256 selectedRenderer;
    IRenderer[] public renderers;

    constructor() ERC721A("Adventure Alchemist", "AA") Ownable(_msgSender()) {}

    function mint(address to) external payable {
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _safeMint(to, tokenId);

    }
}
