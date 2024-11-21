// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import '../Color.sol';
import '../interfaces/IStepRenderer.sol';
import '../ColorUtils.sol';

contract BeamRenderer is IStepRenderer {
  ColorUtils public colors;

  constructor(address colorUtils) {
    colors = ColorUtils(colorUtils);
  }

  function generateDefs(uint256 tokenId) external view returns (string memory) {
    // IColor.HSL memory primary = colors.getTertiary(tokenId);
    IColor.HSL memory tertiary = colors.getTertiary(tokenId);
    // IColor.HSL memory primary = colors.getColor(tokenId, 1);
    // IColor.HSL memory secondary = colors.getColor(tokenId, 2);

    // <linearGradient id="beam" gradientTransform="rotate(90)">
    //     <stop offset="0" stop-opacity="1" stop-color="hsl(58,45%,50%)" />
    //     <stop offset=".1999" stop-opacity="1" stop-color="hsl(58,45%,50%)" />

    //     <stop offset=".2" stop-opacity="1" stop-color="hsl(63,40%,40%)" />
    //     <stop offset=".3999" stop-opacity="1" stop-color="hsl(63,40%,40%)" />

    //     <stop offset=".4" stop-opacity="1" stop-color="hsl(68,35%,30%)" />
    //     <stop offset="1" stop-opacity="1" stop-color="hsl(68,35%,30%)" />
    // </linearGradient>
    // <linearGradient id="sidebeam" gradientTransform="rotate(90)">
    //     <stop offset="0" stop-opacity="1" stop-color="hsl(58,45%,50%)" />
    //     <stop offset=".2599" stop-opacity="1" stop-color="hsl(58,45%,50%)" />

    //     <stop offset=".26" stop-opacity="1" stop-color="hsl(63,40%,40%)" />
    //     <stop offset=".4599" stop-opacity="1" stop-color="hsl(63,40%,40%)" />

    //     <stop offset=".46" stop-opacity="1" stop-color="hsl(68,35%,30%)" />
    //     <stop offset="1" stop-opacity="1" stop-color="hsl(68,35%,30%)" />
    // </linearGradient>

    return
      string.concat(
        // '<linearGradient id="beam" x2="0%" y2="100%">',
        // '<stop offset="0" stop-opacity="1" stop-color="',
        //         colors.HSLtoString(tertiary),

        // '" />',
        // '<stop offset=".3" stop-opacity="1" stop-color="',
        //         colors.HSLtoString(tertiary),
        // '" />',
        // '</linearGradient>',

        '<linearGradient id="beam" gradientTransform="rotate(90)">',
        '<stop offset="0" stop-color="',
        colors.stepToString(tertiary, 0 , 0, 0),
        '" />',
        '<stop offset=".1499" stop-color="',
        colors.stepToString(tertiary, 0 , 0, 0),
        '" />',
        '<stop offset=".15" stop-color="',
        colors.downStepToString(tertiary, 5 , 5, 10),
        '" />',
        '<stop offset=".3499" stop-color="',
        colors.downStepToString(tertiary, 5 , 5, 10),
        '" />  ',
        '<stop offset=".35" stop-color="',
        colors.downStepToString(tertiary, 5 , 10, 20),
        '" />',
        '<stop offset="1" stop-color="',
        colors.downStepToString(tertiary, 5 , 10, 20),
        '" />',
        '</linearGradient>',

        '<linearGradient id="sidebeam" gradientTransform="rotate(90)">',
        '<stop offset="0" stop-color="',
        colors.stepToString(tertiary, 0 , 0, 0),
        '" />',
        '<stop offset=".1999" stop-color="',
        colors.stepToString(tertiary, 0 , 0, 0),
        '" />',
        '<stop offset=".20" stop-color="',
        colors.downStepToString(tertiary, 5 , 5, 10),
        '" />',
        '<stop offset=".3999" stop-color="',
        colors.downStepToString(tertiary, 5 , 5, 10),
        '" />  ',
        '<stop offset=".40" stop-color="',
        colors.downStepToString(tertiary, 5 , 10, 20),
        '" />',
        '<stop offset="1" stop-color="',
        colors.downStepToString(tertiary, 5 , 10, 20),
        '" />',
        '</linearGradient>'
      );
  }

  function earlyImage(uint256 tokenId) external view returns (string memory) {}

  function generateImages(
    uint256 tokenId
  ) external view returns (string memory) {
    string memory bg = '';

    uint256 xDelta = (Color.psuedorandom(tokenId, 123) % 80) + 40;

    bg = string.concat(
      // '<path fill="#15293D" d="M0 0h512v512H0z"/>',
      // getStars(tokenId)
      getSideBeams(tokenId, xDelta),
      getBeam(tokenId, xDelta)
    );

    return bg;

    // #15293D
  }

  function getBeam(
    uint256 tokenId,
    uint256 xDelta
  ) public view returns (string memory) {
    string memory beam;

    beam = string.concat(
      beam,
      '<path fill="url(#beam)" d="M 246 210h20l',
      uint2str(xDelta),
      ' 512',
      // y1,
      ' h-',
      uint2str(xDelta * 2),
      'z"/>'
    );

    return beam;
  }

  function getSideBeams(
    uint256 tokenId,
    uint256 xDelta
  ) public view returns (string memory) {
    string memory beam = '';

    beam = string.concat(
      beam,
      '<path fill="url(#sidebeam)" d="M 226 210h60l',
      uint2str(xDelta + 20),
      ' 512',
      // y1,
      ' h-',
      uint2str(((xDelta + 20) * 2) + 30),
      'z"/>'
    );

    return beam;
  }

  function uint2str(uint256 _i) internal pure returns (string memory) {
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
