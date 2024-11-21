// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import {IHeroStats} from '../../lib/playtavern/chain/src/heroes/systems/interfaces/IHeroStats.sol';

import '../Color.sol';
import '../interfaces/IRenderer.sol';
import '../interfaces/IStepRenderer.sol';

contract StarshipRenderer is IRenderer {
  IStepRenderer[] public stepRenderers;

  function generateSVG(
    uint256 tokenId
  )
    public
    view
    returns (
      // uint256 data
      string memory
    )
  {
    // uint16 hue =  (uint16)(Color.psuedorandom(tokenId, 0) % 360);
    // uint16 secondHue = ((hue / 2) + hue) % 360;
    // uint16 thirdHue = ((secondHue / 2) + secondHue) % 360;

    // Color.HSL memory primary = Color.HSL(hue, 86, 50);
    // Color.HSL memory secondary = Color.HSL(secondHue, 50, 33);
    // Color.HSL memory tertiary = Color.HSL(thirdHue, 50, 33);

   
    // Color.HSL memory primary = Color.HSL(dna.primaryHue, 86, 50);
    // Color.HSL memory secondary = Color.HSL(dna.secondaryHue, 50, 33);
    // console.log("Colors are %s and %s ", primary.H, secondary.H);

    string
      memory svg = '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><clipPath id="box"><path d="M0 0h512v512H0z"/></clipPath><defs>';
    for (uint256 i = 0; i < stepRenderers.length; i++) {
      svg = string.concat(
        svg,
        stepRenderers[i].generateDefs(tokenId)
      );
    }
    svg = string.concat(
      svg,
      '</defs><svg viewBox="0 0 512 512" clip-path="url(#box)">'
    );

      for (uint256 i = 0; i < stepRenderers.length; i++) {
      svg = string.concat(
        svg,
        stepRenderers[i].earlyImage(tokenId)
      );
    }

    for (uint256 i = 0; i < stepRenderers.length; i++) {
      svg = string.concat(
        svg,
        stepRenderers[i].generateImages(tokenId)
      );
    }

    svg = string.concat(svg, '</svg></svg>');

    // string memory svg = string.concat(
    //   '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><clipPath id="box"><path d="M0 0h512v512H0z"/></clipPath><defs>',
    //   getGradients(tokenId, primary, secondary, 1),
    //   getFilters(tokenId),
    //   '</defs><svg viewBox="0 0 512 512" clip-path="url(#box)">',
    //   getBackgrounds(),
    //   getShapes(tokenId, primary, secondary),
    //   // '<path d="M 0, 340 h 512" stroke="white" opacity="0.4"/>',
    //   // '<path d="M 0, 170 h 512" stroke="white" opacity="0.4"/>',
    //   // '<path d="M 170, 0 v 512" stroke="white" opacity="0.4"/>',
    //   // '<path d="M 340, 0 v 512" stroke="white" opacity="0.4"/>',
    //   // '<path d="M250 80 h 180 v 180 h -180 v-180" stroke="white" fill="none"/>',

    //   '</svg>',
    //   '</svg>'
    // );
    return svg;
  }

  function addStepRenderer(IStepRenderer stepRenderer) public {
    stepRenderers.push(stepRenderer);
  }

  function psuedorandom(
    uint256 tokenId,
    uint256 nonce
  ) public pure returns (uint256) {
    return Color.psuedorandom(tokenId, nonce);
  }
}
