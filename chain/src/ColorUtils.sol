// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {LibString} from '../lib/solady/src/utils/LibString.sol';
import {IColor} from './interfaces/IColor.sol';

contract ColorUtils is IColor {
  mapping(uint256 => IColor.HSL) public metals;
  mapping(uint256 => IColor.HSL) public colors;
  uint256 public constant colorCount = 37;
  uint256 public constant metalCount = 6;

  // IColor.HSL public source = IColor.HSL(1, 65, 50);

  function getPrimary(uint256 tokenID) public pure returns (IColor.HSL memory) {
    uint16 hue = (uint16)(psuedorandom(tokenID, 1) % 360);
    return IColor.HSL(hue, 45, 50);
  }

  function getSecondary(
    uint256 tokenID
  ) public pure returns (IColor.HSL memory) {
    uint16 hue = (uint16)(psuedorandom(tokenID, 1) % 360);
    hue = (hue + 120) % 360;
    return IColor.HSL(hue, 45, 50);
  }

  function getTertiary(
    uint256 tokenID
  ) public pure returns (IColor.HSL memory) {
    uint16 hue = (uint16)(psuedorandom(tokenID, 1) % 360);
    hue = (hue + 240) % 360;
    return IColor.HSL(hue, 45, 50);
  }

  function stepColor(
    IColor.HSL memory base,
    uint16 hueStep,
    uint16 satStep,
    uint16 lightStep
  ) public pure returns (IColor.HSL memory) {
    return
      IColor.HSL(
        (base.H + hueStep) % 360,
        (base.S + satStep) % 100,
        (base.L + lightStep) % 100
      );
  }

  function stepToString(
    IColor.HSL memory base,
    uint16 hueStep,
    uint16 satStep,
    uint16 lightStep
  ) public pure returns (string memory) {
    return HSLtoString(stepColor(base, hueStep, satStep, lightStep));
  }

  function downStep(
    IColor.HSL memory base,
    uint16 hueStep,
    uint16 satStep,
    uint16 lightStep
  ) public pure returns (IColor.HSL memory) {
    return
      IColor.HSL(
        safeSub(base.H, hueStep, 360),
        safeSub(base.S, satStep, 100),
        safeSub(base.L, lightStep, 100)
      );
  }

  function downStepToString(
    IColor.HSL memory base,
    uint16 hueStep,
    uint16 satStep,
    uint16 lightStep
  ) public pure returns (string memory) {
    return HSLtoString(downStep(base, hueStep, satStep, lightStep));
  }

  function safeSub(
    uint16 base,
    uint16 sub,
    uint16 mod
  ) public pure returns (uint16) {
    if (sub < base) {
      return base - sub;
    }
    return mod - sub;
  }

  mapping(uint256 => string[]) public palettes;

  constructor() {
    palettes[1] = ['#f8f8f8', '#f0f0f0'];

    metals[0] = IColor.HSL(211, 12, 48);
    metals[1] = IColor.HSL(132, 6, 83);
    metals[2] = IColor.HSL(204, 8, 76);
    metals[3] = IColor.HSL(184, 9, 62);
    metals[4] = IColor.HSL(180, 8, 69);
    metals[5] = IColor.HSL(0, 0, 75);

    colors[0] = IColor.HSL(148, 0, 92);
    colors[1] = IColor.HSL(7, 100, 29);
    colors[2] = IColor.HSL(33, 100, 29);
    colors[3] = IColor.HSL(59, 100, 29);
    colors[4] = IColor.HSL(87, 100, 28);
    colors[5] = IColor.HSL(120, 100, 28);
    colors[6] = IColor.HSL(154, 100, 28);
    colors[7] = IColor.HSL(181, 100, 29);
    colors[8] = IColor.HSL(206, 100, 29);
    colors[9] = IColor.HSL(230, 98, 29);
    colors[10] = IColor.HSL(268, 69, 34);
    colors[11] = IColor.HSL(301, 64, 35);
    colors[12] = IColor.HSL(332, 74, 33);
    colors[13] = IColor.HSL(9, 100, 50);
    colors[14] = IColor.HSL(35, 100, 50);
    colors[15] = IColor.HSL(59, 100, 50);
    colors[16] = IColor.HSL(86, 100, 49);
    colors[17] = IColor.HSL(120, 100, 49);
    colors[18] = IColor.HSL(155, 100, 49);
    colors[19] = IColor.HSL(181, 100, 50);
    colors[20] = IColor.HSL(205, 100, 50);
    colors[21] = IColor.HSL(229, 100, 51);
    colors[22] = IColor.HSL(268, 100, 61);
    colors[23] = IColor.HSL(300, 100, 63);
    colors[24] = IColor.HSL(331, 100, 59);
    colors[25] = IColor.HSL(2, 100, 74);
    colors[26] = IColor.HSL(41, 100, 74);
    colors[27] = IColor.HSL(59, 100, 74);
    colors[28] = IColor.HSL(78, 95, 73);
    colors[29] = IColor.HSL(123, 93, 72);
    colors[30] = IColor.HSL(163, 96, 72);
    colors[31] = IColor.HSL(181, 100, 73);
    colors[32] = IColor.HSL(198, 100, 73);
    colors[33] = IColor.HSL(237, 100, 74);
    colors[34] = IColor.HSL(281, 100, 76);
    colors[35] = IColor.HSL(300, 100, 76);
    colors[36] = IColor.HSL(320, 100, 77);

    /*
    
// hsl(148deg 0% 13%)
hsl(147deg 0% 26%)
hsl(148deg 0% 37%)
hsl(148deg 0% 48%)
hsl(148deg 0% 57%)
hsl(148deg 0% 57%)
hsl(148deg 0% 66%)
hsl(148deg 0% 75%)
hsl(148deg 0% 84%)
hsl(148deg 0% 92%)

    */

    // triads[0] = Triad(HSL(211, 12, 48), HSL(132, 6, 83), HSL(204, 8, 76));
    // triads[1] = Triad(HSL(184, 9, 62), HSL(180, 8, 69), HSL(0, 0, 75));

    /*
    snow hsl(148 0 92%)
cayenne red hsl(7, 100, 29)
mocha red orange hsl(33, 100, 29)
asparagus green yellow hsl(59, 100, 29)
fern hsl(87, 100, 28)
clover hsl(120, 100, 28)
moss hsl(154, 100, 28)
teal hsl(181, 100, 29)
ocean hsl(206, 100, 29)
midngith hsl(230, 98, 29)
eggplant hsl(268, 69, 34)
plum hsl(301, 64, 35)

maroon hsl(332, 74, 33)
maraschino hsl(9, 100, 50)
tangerine hsl(35, 100, 50)

lemon hsl(59, 100, 50)
lime hsl(86, 100, 49)
spring hsl(120, 100, 49)
seafoam hsl(155, 100, 49)

turquoise hsl(181, 100, 50)
aqua hsl(205, 100, 50)
blueberry hsl(229, 100, 51)
grap hsl(268, 100, 61)
magenta hsl(300, 100, 63)
strawberry  hsl(331, 100, 59)
salmon hsl(2, 100, 74)
cantalope hsl(41, 100, 74)
banana hsl(59, 100, 74)
honeydew hsl(78, 95, 73)
flora hsl(123, 93, 72)
spindrift hsl(163, 96, 72)
ice hsl(181, 100, 73)
 sky hsl(198, 100, 73)
orchid hsl(237, 100, 74)
lavender hsl(281, 100, 76)
bulbblegum hsl(300, 100, 76)
carnation hsl(320, 100, 77)




    */
  }

  function getColor(
    uint256 tokenId,
    uint256 nonce,
    uint16 sat,
    uint16 lightness
  ) public view returns (IColor.HSL memory) {
    return
      IColor.HSL((uint16)(psuedorandom(tokenId, nonce) % 360), sat, lightness);
  }

  function getColor(
    uint256 tokenId,
    uint256 nonce
  ) public view returns (IColor.HSL memory) {
    // return colors[psuedorandom(tokenId, nonce) % colorCount];

    return IColor.HSL((uint16)(psuedorandom(tokenId, nonce) % 360), 62, 52);
  }

  function getColorString(
    uint256 tokenId,
    uint256 nonce
  ) public view returns (string memory) {
    return HSLtoString(getColor(tokenId, nonce));
  }

  function getColorString(
    uint256 tokenId,
    uint256 nonce,
    uint16 sat,
    uint16 lightness
  ) public view returns (string memory) {
    return HSLtoString(getColor(tokenId, nonce, sat, lightness));
  }

  function getMetal(
    uint256 tokenId,
    uint256 nonce
  ) public view returns (IColor.HSL memory) {
    return metals[psuedorandom(tokenId, nonce) % metalCount];
  }

  function getCircle(
    uint256 xAt,
    uint256 yAt,
    uint256 radius,
    HSL memory color
  ) public pure returns (string memory) {
    return
      string(
        abi.encodePacked(
          "<circle cx='",
          uint2str(xAt),
          "' cy='",
          uint2str(yAt),
          "' r='",
          uint2str(radius),
          "' fill='",
          HSLtoString(color),
          "'/>"
        )
      );
  }

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

  function psuedorandom(
    uint256 tokenId,
    uint256 nonce
  ) public pure returns (uint256) {
    return uint(keccak256(abi.encodePacked(tokenId, nonce)));
  }

  function uint2str(uint256 _i) public pure returns (string memory) {
    if (_i == 0) {
      return '0';
    }
    uint256 j = _i;
    uint256 len;
    while (j != 0) {
      len++;
      j /= 10;
    }
    bytes memory bstr = new bytes(len);
    uint256 k = len;
    while (_i != 0) {
      k = k - 1;
      uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
      bytes1 b1 = bytes1(temp);
      bstr[k] = b1;
      _i /= 10;
    }
    return string(bstr);
  }
}
