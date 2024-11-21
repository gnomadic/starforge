// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {LibString} from '../lib/solady/src/utils/LibString.sol';

library Color {
  struct DNA {
    uint16 primaryHue;
    uint16 secondaryHue;
  }

  struct HSL {
    uint16 H;
    uint16 S;
    uint16 L;
  }

  //   HSL[] public constant metals; // = new Color.HSL[](13);

  // constructor() {
  //   // metals.push(Color.HSL(240, 3, 94));
  //   // metals.push(Color.HSL(0, 0, 93));
  //   metals.push(Color.HSL(211, 12, 48));
  //   metals.push(Color.HSL(132, 6, 83));
  //   metals.push(Color.HSL(204, 8, 76));
  //   // metals.push(Color.HSL(0, 0, 91));
  //   // metals.push(Color.HSL(192, 15, 94));
  //   // metals.push(Color.HSL(213, 24, 93));
  //   metals.push(Color.HSL(184, 9, 62));
  //   // metals.push(Color.HSL(197, 10, 87));
  //   metals.push(Color.HSL(180, 8, 69));
  //   metals.push(Color.HSL(0, 0, 75));
  //   // metals.push(Color.HSL(207, 20, 91));
  // }

  function HSLtoString(HSL memory color) public pure returns (string memory) {
    return
      string(
        abi.encodePacked(
          'hsl(',
          LibString.toString(color.H),
          ',',
          LibString.toString(color.S),
          '%,',
          LibString.toString(color.L),
          '%)'
        )
      );
  }

  function getColors(
    uint256 tokenId
  )
    public
    pure
    returns (
      Color.HSL memory primary,
      Color.HSL memory secondary,
      Color.HSL memory tertiary
    )
  {
    uint16 hue = (uint16)(psuedorandom(tokenId, 0) % 360);
    uint16 secondHue = ((hue / 2) + hue) % 360;
    uint16 thirdHue = ((secondHue / 2) + secondHue) % 360;

    primary = Color.HSL(hue, 86, 50);
    secondary = Color.HSL(secondHue, 50, 33);
    tertiary = Color.HSL(thirdHue, 50, 33);
  }

  function toString(uint16 num) public pure returns (string memory) {
    return LibString.toString(num);
  }

  function psuedorandom(
    uint256 tokenId,
    uint256 nonce
  ) public pure returns (uint256) {
    return uint(keccak256(abi.encodePacked(tokenId, nonce)));
  }

  function rotateColor(
    Color.HSL memory color,
    uint16 amount
  ) public pure returns (Color.HSL memory) {
    uint16 hue = (color.H + amount) % 360;
    return Color.HSL(hue, color.S, color.L);
  }

  function genDNA(
    uint256 tokenId,
    uint32 colors
  ) public pure returns (DNA memory) {
    DNA memory dna;

    dna.primaryHue = uint16(colors >> 16);
    dna.secondaryHue = uint16(colors);
    return dna;
  }

  function defaultColors(uint256 tokenId) public pure returns (uint32) {
    uint16 primary = uint16((tokenId % 32) * 5);
    uint16 secondary = rotateColor(HSL(primary, 0, 0), 60).H;
    return (uint32(primary) << 16) | uint32(secondary);
  }
}
