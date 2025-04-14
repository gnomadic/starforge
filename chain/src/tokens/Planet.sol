// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "../../lib/ERC721A/contracts/extensions/ERC721AQueryable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import {Renderable721} from "./interfaces/Renderable721.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {ISystemController} from "../systems/interfaces/ISystem.sol";

contract Planet is ERC721AQueryable, Renderable721, Ownable {
    using Strings for uint256;

    uint256 public nextTokenId;

    uint256 public mintCost = 0;
    uint256 public customizeCost = 0; // 5 * 10 ** 15;

    // address[] public systems;
    ISystemController public systemController;

    constructor(
        address renderer,
        address systems
    )
        Renderable721(renderer)
        ERC721A("ENTROPICAL | PLANET", "Planet")
        Ownable(_msgSender())
    {
        systemController = ISystemController(systems);
    }

    function mint(address to) external payable {
        if (msg.value < mintCost) revert("Not enough ETH sent");
        _mint(to);
    }

    function _mint(address to) internal {
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _safeMint(to, 1);

        systemController.initAll(tokenId);
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
            '"name": "ENTROPICAL | PLANET #',
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
            '"name": "ENTROPICAL | PLANETS",',
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

    function getMintPrice() external view returns (uint256) {
        return mintCost;
    }

    function setMintPrice(uint256 newPrice) external onlyOwner {
        mintCost = newPrice;
    }

    error NotMinted();
}
