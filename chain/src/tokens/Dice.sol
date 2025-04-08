// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../../lib/ERC721A/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {Renderable721} from "./interfaces/Renderable721.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {ISystemController} from "../systems/interfaces/ISystem.sol";

contract Dice is ERC721A, Renderable721, Ownable {
    using Strings for uint256;

    uint256 public nextTokenId;

    uint256 public mintCost = 0;

    uint256 rollsLeft = 6;
    
    constructor(
        address renderer,
        address systems
    )
        Renderable721(renderer)
        ERC721A("STARFORGE | DICE", "D6")
        Ownable(_msgSender())
    {
        
    }

    function mint(address to) external payable {
        _mint(to);
    }

    function _mint(address to) internal {
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _safeMint(to, 1);
    }

    function ownerOf(
        uint256 tokenId
    ) public view override(ERC721A, Renderable721) returns (address) {
        return ERC721A.ownerOf(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override(ERC721A) returns (string memory) {
        if (!_exists(tokenId)) revert NotMinted();

        bytes memory dataURI = abi.encodePacked(
            "{",
            '"name": "STARFORGE | DICE #',
            tokenId.toString(),
            '",',
            '"description": "Forge the future",',
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
            '"name": "STARFORGE | DICE",',
            '"description": "play ENTROPICAL.  Forge your planet in this incremental onchain game.",',
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

}

