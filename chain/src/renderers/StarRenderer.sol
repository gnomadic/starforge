// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import '../Color.sol';
import '../interfaces/IStepRenderer.sol';

import 'hardhat/console.sol';

contract StarRenderer is IStepRenderer {
  string[] public starColors;

  constructor() {
    starColors.push('#EDE8E1');
    starColors.push('#E9B27C');
    starColors.push('#E9D3B9');
  }

  function generateDefs(uint256 tokenId) external view returns (string memory) {
    return
      string.concat(
        '',
        ''

            
            // '<filter id="stars"><feTurbulence baseFrequency=".35" seed="',
            // Color.toString((uint16)(Color.psuedorandom(tokenId, 123) % 10000)),
            // '"/>',
            // '<feColorMatrix values="0 0 0 9 -4 0 0 0 9 -4 0 0 0 9 -4 0 0 0 0 1"/></filter>'
        

        // '<defs>',
        // getFilters(tokenId),
        // getGradients(tokenId, primary, secondary, 0)
        // '</defs>'
      );
  }



    function generateImages(
    uint256 tokenId
  ) external view returns (string memory) {
  }

  function earlyImage(uint256 tokenId) external view returns (string memory) {
    // return '<path fill="#15293D" d="M0 0h512v512H0z"/>';
  


    string memory bg = '<path fill="#15293D" d="M0 0h512v512H0z"/>';

      //  string memory bg = '<rect width="100%" height="100%" filter="url(#stars)" opacity="1"/>';

    bg = string.concat(bg, '<g>', getStars(tokenId), '</g>');

    return bg;
  }

  function getStars(uint256 tokenId) public view returns (string memory) {
    string memory stars = '';

    // uint8 whichStar = 0;
    uint16 zone = 0;

    uint16[] memory placed = new uint16[](20);
    placed[0] = 8;
    placed[1] = 9;
    placed[2] = 14;
    placed[3] = 15;
    placed[4] = 20;
    placed[5] = 21;
    uint8 index = 6;
    uint8 attempt = 0;

    // for (uint16 i = 0; i < 6; i++) {
    //   // uint16 wat = 512;// * (i);
    //   stars = string.concat(
    //     stars,
    //     '<path d="M ',
    //     Color.toString(85 * (i + 1)),
    //     ' 0 v 512" stroke="red"/>'
    //   );
    // }

    // for (uint16 i = 0; i < 6; i++) {
    //   stars = string.concat(
    //     stars,
    //     '<path d="M 0 ',
    //     Color.toString(85 * (i + 1)),
    //     ' h 512" stroke="red"/>'
    //   );
    // }

    while (index < 20) {
      // }

      // for (uint256 i = 0; i < 8; i++) {
      zone = (uint8)(Color.psuedorandom(tokenId, index + attempt) % 24);

      if (!checkZone(zone, placed)) {
        attempt++;
        continue;
      }

      // console.log("zone: ", zone);

      stars = string.concat(stars, drawStar(tokenId, index, zone));

      // whichStar = uint8(Color.psuedorandom(tokenId, index) % 5);

      //uint16 xAt = (uint16)((Color.psuedorandom(tokenId, index + 123) % 300) + 12);
      // uint16 xAt = (uint16)(Color.psuedorandom(tokenId, index + 123) % 85);
      // console.log("x starting at : " , xAt);
      // xAt = xAt + ((zone % 6) * 85);
      // console.log("math: ",  ((zone % 8) * 64));
      // console.log("x ending at : " , xAt);
      // if (xAt > 150) {
      //   xAt = xAt + 150;
      // }
      // string memory x = Color.toString(
      //   (uint16)(Color.psuedorandom(tokenId, index + 123) % 65) + ((zone % 6) * 85) + 10);

      // string memory y = Color.toString(
      //   // (uint16)((Color.psuedorandom(tokenId, index + 456) % 300) + 12)
      //   (uint16)((Color.psuedorandom(tokenId, index + 456) % 65) + ((zone / 6) * 85) + 10)
      // );

      // uint256 colorIndex = Color.psuedorandom(tokenId + index, 123) %
      //   starColors.length;

      // if (whichStar == 0) {
      //   stars = string.concat(
      //     stars,
      //     starStar(tokenId, index, colorIndex, x, y)
      //   );
      // } else {
      //   stars = string.concat(
      //     stars,
      //     roundStar(tokenId, index, colorIndex, x, y)
      //   );
      // }

      placed[index] = (zone);
      index++;
    }
    return stars;
  }

  function drawStar(
    uint256 tokenId,
    uint16 index,
    uint16 zone
  ) public view returns (string memory) {
    uint8 whichStar = uint8(Color.psuedorandom(tokenId, index) % 5);

    //uint16 xAt = (uint16)((Color.psuedorandom(tokenId, index + 123) % 300) + 12);
    // uint16 xAt = (uint16)(Color.psuedorandom(tokenId, index + 123) % 85);
    // console.log("x starting at : " , xAt);
    // xAt = xAt + ((zone % 6) * 85);
    // console.log("math: ",  ((zone % 8) * 64));
    // console.log("x ending at : " , xAt);
    // if (xAt > 150) {
    //   xAt = xAt + 150;
    // }
    string memory x = Color.toString(
      (uint16)(Color.psuedorandom(tokenId, index + 123) % 65) +
        ((zone % 6) * 85) +
        10
    );

    string memory y = Color.toString(
      // (uint16)((Color.psuedorandom(tokenId, index + 456) % 300) + 12)
      (uint16)(
        (Color.psuedorandom(tokenId, index + 456) % 65) + ((zone / 6) * 85) + 10
      )
    );

    uint256 colorIndex = Color.psuedorandom(tokenId + index, 123) %
      starColors.length;

    if (whichStar == 0) {
      return starStar(tokenId, index, colorIndex, x, y);
    } else {
      return roundStar(tokenId, index, colorIndex, x, y);
    }
  }

  function roundStar(
    uint256 tokenId,
    uint256 starIndex,
    uint256 colorIndex,
    string memory x,
    string memory y
  ) public view returns (string memory) {
    string memory star = '';

    string memory r = Color.toString(
      (uint16)((Color.psuedorandom(tokenId, starIndex) % 5) + 1)
    );

    star = string.concat(
      star,
      '<circle cx="',
      x,
      '" cy="',
      y,
      '" r="',
      r,
      '" fill="',
      starColors[colorIndex],
      '"/>'
    );
    return star;
  }

  function starStar(
    uint256 tokenId,
    uint256 starIndex,
    uint256 colorIndex,
    string memory x,
    string memory y
  ) public view returns (string memory) {
    string memory star = '';

    star = string.concat(
      star,
      '<path fill="',
      starColors[colorIndex],
      '" d="m',
      x,
      ' ',
      y,
      ',q10-2.5 12.5-12.5 2.5 10 12.5 12.5-10 2.5-12.5 12.5-2.5-10-12.5-12.5"/>',
      ''
    );
    // m5 5q10-2.5 12.5-12.5 2.5 10 12.5 12.5-10 2.5-12.5 12.5-2.5-10-12.5-12.5
    return star;
  }

  function checkZone(
    uint16 zone,
    uint16[] memory placed
  ) public pure returns (bool) {
    for (uint256 i = 0; i < placed.length; i++) {
      if (placed[i] == zone) {
        return false;
      }
    }
    return true;
  }
}
