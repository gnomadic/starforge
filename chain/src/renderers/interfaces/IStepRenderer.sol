// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

// import '../ColorUtils.sol';

interface IStepRenderer {
  function generateDefs(
    uint256 tokenId
  ) external view returns (string memory);


  function earlyImage(
    uint256 tokeId
  ) external view returns (string memory);


  function generateImages(
    uint256 tokeId
  ) external view returns (string memory);

  
}
