// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {IRenderer} from "../../renderers/interfaces/IRenderer.sol";

abstract contract Renderable721 {
    mapping(uint256 => uint256) selectedRenderer;
    uint256 rendererIndex = 0;
    IRenderer[] public renderers;

    constructor(address renderer) {
        renderers.push(IRenderer(renderer));
    }

    function generateCharacter(
        uint256 tokenId
    ) public view returns (string memory) {
        bytes memory svg = abi.encodePacked(generateSVG(tokenId));

        return
            string(
                abi.encodePacked(
                    "data:image/svg+xml;base64,",
                    Base64.encode(svg)
                )
            );
    }

    function generateSVG(uint256 _tokenId) public view returns (string memory) {
        return renderers[selectedRenderer[_tokenId]].generateSVG(_tokenId);
    }

    function addRenderer(address renderer) public {
        renderers.push(IRenderer(renderer));
        rendererIndex++;
    }

    function selectRenderer(uint256 tokenId, uint256 selectedIndex) public {
        if (msg.sender != ownerOf(tokenId)) revert NotTheOwner();
        if (selectedIndex > rendererIndex) revert RendererDoesNotExist();
        selectedRenderer[tokenId] = selectedIndex;
    }

    function ownerOf(uint256 tokenId) public view virtual returns (address);

    error NotTheOwner();
    error RendererDoesNotExist();
}
