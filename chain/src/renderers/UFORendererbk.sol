// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import '../Color.sol';
import '../ColorUtils.sol';
import '../interfaces/IStepRenderer.sol';

import 'hardhat/console.sol';

contract UFORendererbk is IStepRenderer {
  Color.HSL[] public metals; // = new Color.HSL[](13);
  ColorUtils public colors;

  constructor(address colorUtils) {
    // metals.push(Color.HSL(240, 3, 94));
    // metals.push(Color.HSL(0, 0, 93));
    metals.push(Color.HSL(211, 12, 48));
    metals.push(Color.HSL(132, 6, 83));
    metals.push(Color.HSL(204, 8, 76));
    // metals.push(Color.HSL(0, 0, 91));
    // metals.push(Color.HSL(192, 15, 94));
    // metals.push(Color.HSL(213, 24, 93));
    metals.push(Color.HSL(184, 9, 62));
    // metals.push(Color.HSL(197, 10, 87));
    metals.push(Color.HSL(180, 8, 69));
    metals.push(Color.HSL(0, 0, 75));
    // metals.push(Color.HSL(207, 20, 91));

    colors = ColorUtils(colorUtils);
  }

  function generateDefs(uint256 tokenId) external pure returns (string memory) {
    return
      string.concat(
        '<filter id="ship">',
        '<feDropShadow dx="-12" dy="12" stdDeviation="10" flood-opacity=".6"/>',
        '<feGaussianBlur in="sky" stdDeviation="0" result="" />',
        '</filter>',
        // '<linearGradient id="shadows" gradientTransform="skewX(13)">',
        // '<stop offset="0%" stop-opacity="0.5" />',
        // '<stop offset="23%" stop-opacity="0.5" />',
        // '<stop offset="24%" stop-opacity="0.3" />',
        // '<stop offset="56%" stop-opacity="0.3" />',
        // '<stop offset="57%" stop-opacity="0" />',
        // '<stop offset="100%" stop-opacity="0" />  ',
        // '</linearGradient>'
        '<linearGradient id="shadows">',
        '<stop offset="0%" stop-opacity="0" />',
        '<stop offset="50%" stop-opacity="0" />',
        '<stop offset="51%" stop-opacity="0.3" />',
        '<stop offset="100%" stop-opacity="0.3" />  ',
        '</linearGradient>'
      );
  }

  function earlyImage(uint256 tokenId) external view returns (string memory) {}

  function generateImages(
    uint256 tokenId
  ) external view returns (string memory) {
    // (
    //   Color.HSL memory primary,
    //   Color.HSL memory secondary,
    //   Color.HSL memory tertiary
    // ) = Color.getColors(tokenId);

    IColor.HSL memory primary = colors.getColor(tokenId, 0);
    IColor.HSL memory secondary = colors.getMetal(tokenId, 1);
    IColor.HSL memory tertiary = colors.getMetal(tokenId, 3);

    return
      string.concat(
        // '<g mask="url(#card)" filter="url(#ship)">',
        // '<g transform="rotate(20) translate(50 -180)" stroke="black" stroke-width=".6">',
        // getAgile(tokenId, primary, secondary),

        getShipBase(tokenId, tertiary),
        getShipBody(tokenId, secondary),
        getShipTopper(tokenId, primary)
        // '<!-- <rect  width="100%" height="100%" fill="red"/> -->',
        // '<ellipse cx="256" cy="256" rx="160" ry="70" fill="hsl(0,0%,75%)" />',
        // '<ellipse cx="256" cy="251" rx="147" ry="65" fill="hsl(211,12%,48%)" />',
        // '<ellipse cx="256" cy="246" rx="144" ry="60" fill="hsl(184,9%,62%)" />',
        // '<ellipse cx="256" cy="236" rx="108" ry="50" fill="hsl(0,0%,75%)" />',
        // '<ellipse cx="256" cy="226" rx="82" ry="40" fill="hsl(0,0%,75%)" />',
        // '</g>',
        // '</g>'
      );
  }

  function getShipTopper(
    uint256 tokenId,
    IColor.HSL memory color
  ) public view returns (string memory) {
    string memory topperPath;

    uint256 xAt = 206;

    uint8 whichShip = uint8(Color.psuedorandom(tokenId, 123) % 3);

    if (whichShip == 0) {
      topperPath = string(
        abi.encodePacked(
          topperPath,
          "<path d='m",
          uint2str(xAt),
          " 150c0-75 100-75 100 0z'",
          " fill='",
          colors.HSLtoString(color),
          "'/>",
          "<path d='m",
          uint2str(xAt),
          " 150c0-75 100-75 100 0z'",
          " fill='url(#shadows)'/>"
        )
      );
    } else if (whichShip == 1) {
      topperPath = string(
        abi.encodePacked(
          topperPath,
          "<path d='m",
          uint2str(xAt),
          " 150l50-50 50 50z'",
          " fill='",
          colors.HSLtoString(color),
          "'/>",
          "<path d='m",
          uint2str(xAt),
          " 150l50-50 50 50z'",
          " fill='url(#shadows)'/>"
        )
      );
    } else {
      topperPath = string(
        abi.encodePacked(
          topperPath,
          "<path d='m",
          uint2str(xAt),
          " 150q15-45 50-55 35 10 50 55z'",
          " fill='",
          colors.HSLtoString(color),
          "'/>",
          "<path d='m",
          uint2str(xAt),
          " 150q15-45 50-55 35 10 50 55z'",
          " fill='url(#shadows)'/>"
        )
      );
    }
    //
    return topperPath;
  }

  function getShipBody(
    uint256 tokenId,
    IColor.HSL memory color
  ) public view returns (string memory) {
    string memory topperPath;
    uint256 xAt = 165;

    uint8 whichShip = 0;// uint8(Color.psuedorandom(tokenId, 123) % 3);

if (whichShip == 0){
    topperPath = string(
      abi.encodePacked(
        topperPath,
        "<path d='m",
        uint2str(xAt),
        " 170c37.5 18.75 142.5 18.75 180 0-37.5 37.5-142.5 37.5-180 0m-3.75-7.5c-1.5 1.5-1.5 3 0 4.5q93.75 27 187.5 0c1.5-1.5 1.5-3 0-4.5q-90-37.5-187.5 0'",
        " fill='",
        colors.HSLtoString(color),
        "'/>",
        "<circle cx='206' cy='161' r='4' fill='#ebebeb' />",
        "<circle cx='256' cy='167' r='4' fill='#ebebeb' />",
        "<circle cx='306' cy='161' r='4' fill='#ebebeb' />",
        "<path d='m",
        uint2str(xAt),
        " 170c37.5 18.75 142.5 18.75 180 0-37.5 37.5-142.5 37.5-180 0m-3.75-7.5c-1.5 1.5-1.5 3 0 4.5q93.75 27 187.5 0c1.5-1.5 1.5-3 0-4.5q-90-37.5-187.5 0'",
        " fill='url(#shadows)'/>"
      )
    );
   } else if (whichShip == 1){
    xAt = 205;
      topperPath = string(
        abi.encodePacked(
          topperPath,
          "<path d='m",
          uint2str(xAt),
          " 150q50-20 100 0 20 50 0 100-50 20-100 0-17-50 1-100'",
          " fill='",
          colors.HSLtoString(color),
          "'/>",
          "<path d='m",
          uint2str(xAt),
          " 150q50-20 100 0 20 50 0 100-50 20-100 0-17-50 1-100'",
          " fill='url(#shadows)'/>"
        )
      );
    } else {
      topperPath = string(
        abi.encodePacked(
          topperPath,
          "<path d='m",
          uint2str(xAt),
          " 180c50 25 190 25 240 0-50 50-190 50-240 0m-5-10c-2 2-2 4 0 6q125 36 250 0c2-2 2-4 0-6q-120-50-250 0'",
          " fill='",
          colors.HSLtoString(color),
          "'/>",
          "<path d='m",
          uint2str(xAt),
          " 180c50 25 190 25 240 0-50 50-190 50-240 0m-5-10c-2 2-2 4 0 6q125 36 250 0c2-2 2-4 0-6q-120-50-250 0'",
          " fill='url(#shadows)'/>"
        )
      );
    }

    return topperPath;
  }

  function getShipBase(
    uint256 tokenId,
    IColor.HSL memory color
  ) public view returns (string memory) {
    string memory topperPath;
    // m100 100c0-100 200-100 200 0z
    uint256 xAt = 227;
    uint256 colorz = Color.psuedorandom(tokenId, 123);

    topperPath = string(
      abi.encodePacked(
        topperPath,
        "<path d='m",
        uint2str(xAt),
        " 200h56.25l11.25 18.75h-78.75z'",
        " fill='",
        colors.HSLtoString(color),
        // Color.HSLtoString(metals[(colorz + 1) % metals.length]),
        "'/>",
        "<path d='m",
        uint2str(xAt),
        " 200h56.25l11.25 18.75h-78.75z' fill='url(#shadows)'/>"
      )
    );
    return topperPath;
  }

  struct Delta {
    uint16 first;
    uint16 second;
    uint16 third;
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
