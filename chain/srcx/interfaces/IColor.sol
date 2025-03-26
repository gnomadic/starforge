// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

interface IColor {
    struct HSL {
    uint16 H;
    uint16 S;
    uint16 L;
  }

  struct Palette{
    string[] colors;
  }
}
