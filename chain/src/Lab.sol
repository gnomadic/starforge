// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../lib/ERC721A/contracts/extensions/ERC721AQueryable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {IRenderer} from "./interfaces/IRenderer.sol";
import {Renderable721} from "./interfaces/Renderable721.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract Lab is ERC721AQueryable, Renderable721, Ownable {
    using Strings for uint256;

    uint256 public nextTokenId;

    uint256 public mintCost = 0;
    uint256 public customizeCost = 0; // 5 * 10 ** 15;

    address[] public systems;

    constructor(
        address renderer
    )
        Renderable721(renderer)
        ERC721A("Adventure Alchemist", "AA")
        Ownable(_msgSender())
    {}

    function mint(address to) external payable {
        _mint(to);
    }

    function _mint(address to) internal {
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _safeMint(to, 1);

        for (uint i = 0; i < systems.length; i++) {
            System(systems[i]).init(tokenId);
        }
    }

    function ownerOf(
        uint256 tokenId
    ) public view override(ERC721A, IERC721A, Renderable721) returns (address) {
        return ERC721A.ownerOf(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override(ERC721A, IERC721A) returns (string memory) {
        if (!_exists(tokenId)) revert NotMinted();

        bytes memory dataURI = abi.encodePacked(
            "{",
            '"name": "Adventure Alchemist Lab #',
            tokenId.toString(),
            '",',
            '"description": "What are you creating today",',
            '"image": "',
            generateCharacter(tokenId),
            '"',
            "}"
        );
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(dataURI)
                )
            );
    }

    function contractURI() public view returns (string memory) {
        bytes memory dataURI = abi.encodePacked(
            "{",
            '"name": "Adventure Alchemist",',
            '"description": "Play Adventure Alchemist",',
            '"external_url": "nope",',
            '"image": "',
            generateCharacter(0),
            '"',
            "}"
        );
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(dataURI)
                )
            );
    }

    error NotMinted();

    function addSystem(address newSystem) public onlyOwner() {
        systems.push(newSystem);
    }

    function clearSystems() public onlyOwner() {
        delete systems;
    }
}

interface System {
    function init(uint256 tokenId) external;
}
