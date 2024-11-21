// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import '../Color.sol';
import '../interfaces/IStepRenderer.sol';
import '../ColorUtils.sol';

import 'hardhat/console.sol';

contract CloudRenderer is IStepRenderer {
  ColorUtils public colors;

  // string[] public cloudColors;
  IColor.HSL[] public cloudColor;

  constructor(address colorUtils) {
    colors = ColorUtils(colorUtils);
    //nice white 127deg 5% 63%

    cloudColor.push(IColor.HSL(148, 60, 84));
    cloudColor.push(IColor.HSL(100, 65, 65));
    cloudColor.push(IColor.HSL(101, 70, 40));
    cloudColor.push(IColor.HSL(109, 80, 30));
    cloudColor.push(IColor.HSL(109, 80, 20));
  }

  function generateDefs(uint256 tokenId) external view returns (string memory) {
    return
      string.concat(
        '<linearGradient id="clouds" gradientTransform="rotate(90)">',
        '<stop offset="0%" stop-opacity=".3"/>    ',
        '<stop offset="50%" stop-opacity="1"/>',


        // '<stop offset="0%" stop-opacity=".3" stop-color="#bbbbbb" />    ',
        // '<stop offset="100%" stop-opacity="1" stop-color="#131313" />',

        '</linearGradient>'
        // '<defs>',
        // getFilters(tokenId),
        // getGradients(tokenId, primary, secondary, 0)
        // '</defs>'
      );
  }

  function earlyImage(uint256 tokenId) external view returns (string memory) {
    // IColor.HSL memory primary = colors.getColor(tokenId, 0);
        IColor.HSL memory primary = colors.getPrimary(tokenId);


    return string(abi.encodePacked(generateCloud(tokenId, 0, primary)));
  }

  function generateImages(
    uint256 tokenId
  ) external view returns (string memory) {
    string memory bg;

    bg = string.concat(
      '<g>',
      // '<path fill="#15293D" d="M0 0h512v512H0z"/>',
      generateCloudLayer(tokenId),
      '</g>'
    );

    return bg;

    // #15293D
  }

  function generateCloudLayer(
    uint256 tokenId
  ) public view returns (string memory) {
    uint256 layers = 4 + (Color.psuedorandom(tokenId, 123) % 2); // 3-5 layers
    string memory svg;

    // IColor.HSL memory primary = colors.getColor(tokenId, 0);
        IColor.HSL memory primary = colors.getPrimary(tokenId);


    for (uint256 i = 1; i < layers; i++) {
      svg = string(abi.encodePacked(svg, generateCloud(tokenId, i, primary)));
      // svg = string(abi.encodePacked(svg, generateCloud(tokenId, i, 1)));
    }

    return svg;
  }

  // m132 95a1 1 0 0115-2 1 1 0 0110 3 1 1 0 0124 12 1 1 0 0113 2 1 1 0 0118-7 1 1 0 0117-13 1 1 0 0126-12v56h-122z
  //15 -2
  //10 3
  //24 12

  function generateCloud(
    uint256 tokenId,
    uint256 layer,
    IColor.HSL memory primary
  ) internal view returns (string memory) {
    // uint256 rand = Color.psuedorandom(tokenId, layer) % 40;
    uint256 xAt = 0;
    IColor.HSL memory color = cloudColor[layer % cloudColor.length];
    color.H = primary.H;
    // uint256 yAt = ((layer) * 60) + 290; //375; ///384;
    string memory yAt = '';
    string memory cloudPath = string(
      abi.encodePacked('<path d="M0 ', uint2str(((layer) * 50) + 320), 'a')
    );

    string memory curPath = "";

    cloudPath = string(
      abi.encodePacked(
        cloudPath,
        ' 1 1 0 0 1 -',
        uint2str((Color.psuedorandom(tokenId, layer) % 40) + 20),
        ' ',
        uint2str(0) // TODO can remove this instead of yAt

        // colors.getCircle(xAt, yAt, radius, color)
      )
    );

    // "<path d=M0 yAt"
    // '<path fill="#15293D" d="M0 0h512v512H0z"/>',

    while (xAt < 650) {
      // rand = Color.psuedorandom(tokenId, xAt * (layer + 1));
      uint256 radius = (Color.psuedorandom(tokenId, xAt * (layer + 1)) % 60) +
        32; // Circle size variation

      uint256 xOffset = radius + (radius / 4); //(rand + i * 100) % 200;
      xAt += xOffset;
      uint256 yOffset = (Color.psuedorandom(tokenId, xOffset) % 5) + 30; //(rand / 100 + i * 5) % 100;

      if (xAt > 325) {
        // console.log('yAt', yAt, 'yOffset', yOffset);
        yAt = '-';
      }

      if (xAt != 0) {
        cloudPath = string(
          abi.encodePacked(
            cloudPath,
            ' 1 1 0 0 1 ',
            uint2str(xOffset),
            ' ',
            yAt,
            uint2str(yOffset)

            // colors.getCircle(xAt, yAt, radius, color)
          )
        );
      }

      // uint256 xOffset = radius + (radius / 4); //(rand + i * 100) % 200;
      // xAt += xOffset;
      // uint256 yOffset = (Color.psuedorandom(tokenId, xOffset) % 25) + 30; //(rand / 100 + i * 5) % 100;

      // i++;
    }

    curPath = string(
      abi.encodePacked(
        cloudPath,
        ' v500 h -750 z" fill="',
        colors.HSLtoString(color),
        '"/>'
      )
    );

      curPath = string(
      abi.encodePacked(
        curPath,
        cloudPath,
        ' v500 h -750 z" fill="url(#clouds)"/>'
      )
    );       
    // cloudPath = string(
    //   abi.encodePacked(
    //     cloudPath,
    //     ' v500 h -750 z" fill="',
    //     colors.HSLtoString(color),
    //     '"/>'
    //   )
    // );

    return curPath;
  }

  function generateCloudbk(
    uint256 tokenId,
    uint256 layer,
    IColor.HSL memory primary
  ) internal view returns (string memory) {
    uint256 rand;
    string memory cloudPath;
    uint256 xAt = 0;
    IColor.HSL memory color = cloudColor[layer % cloudColor.length];
    color.H = primary.H;
    uint256 yAt = ((layer) * 40) + 375; ///384;
    while (xAt < 550) {
      rand = Color.psuedorandom(tokenId, xAt * (layer + 1));
      uint256 radius = 32 + (rand % 48); // Circle size variation

      cloudPath = string(
        abi.encodePacked(cloudPath, colors.getCircle(xAt, yAt, radius, color))
      );

      uint256 xOffset = radius + (radius / 4); //(rand + i * 100) % 200;
      xAt += xOffset;
      uint256 yOffset = (Color.psuedorandom(tokenId, xOffset) % 15) + 25; //(rand / 100 + i * 5) % 100;
      if (xAt > 260) {
        // console.log('yAt', yAt, 'yOffset', yOffset);
        yAt -= yOffset;
      } else {
        yAt += yOffset;
      }
      // i++;
    }

    return cloudPath;
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
