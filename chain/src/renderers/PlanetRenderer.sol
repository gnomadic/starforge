// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import "../ColorUtils.sol";
import { IRenderer } from "./interfaces/IRenderer.sol";
import { IStepRenderer } from "./interfaces/IStepRenderer.sol";

contract PlanetRenderer is IRenderer {
    IStepRenderer[] public stepRenderers;

    function generateSVG(uint256 tokenId) public view returns (string memory) {
        string
            memory svg = '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><clipPath id="box"><path d="M0 0h1024v1024H0z"/></clipPath><defs>';
        for (uint256 i = 0; i < stepRenderers.length; i++) {
            svg = string.concat(svg, stepRenderers[i].generateDefs(tokenId));
        }
        svg = string.concat(
            svg,
            '</defs><svg viewBox="0 0 1024 1024" clip-path="url(#box)">'
        );

        for (uint256 i = 0; i < stepRenderers.length; i++) {
            svg = string.concat(svg, stepRenderers[i].earlyImage(tokenId));
        }

        for (uint256 i = 0; i < stepRenderers.length; i++) {
            svg = string.concat(svg, stepRenderers[i].generateImages(tokenId));
        }

        svg = string.concat(svg, "</svg></svg>");

        return svg;
    }

    function addStepRenderer(IStepRenderer stepRenderer) public {
        stepRenderers.push(stepRenderer);
    }
}
