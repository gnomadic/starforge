// // SPDX-License-Identifier: MIT
// pragma solidity 0.8.24;

// // import {IHeroStats} from '../../lib/playtavern/chain/src/heroes/systems/interfaces/IHeroStats.sol';

// import '../Color.sol';
// import '../interfaces/IRenderer.sol';
// import '../interfaces/IStepRenderer.sol';

// contract EquipmentRenderer is IRenderer {
//   IStepRenderer[] public stepRenderers;

//   function generateSVG(uint256 tokenId) public view returns (string memory) {
//     Color.HSL memory primary = Color.HSL(dna.primaryHue, 86, 50);
//     Color.HSL memory secondary = Color.HSL(dna.secondaryHue, 50, 33);
//     // console.log("Colors are %s and %s ", primary.H, secondary.H);

//     string
//       memory svg = '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><clipPath id="box"><path d="M0 0h512v512H0z"/></clipPath><defs>';
//     for (uint256 i = 0; i < stepRenderers.length; i++) {
//       svg = string.concat(
//         svg,
//         stepRenderers[i].generateDefs(tokenId, primary, secondary)
//       );
//     }
//     svg = string.concat(
//       svg,
//       '</defs><svg viewBox="0 0 512 512" clip-path="url(#box)">'
//     );

//     for (uint256 i = 0; i < stepRenderers.length; i++) {
//       svg = string.concat(
//         svg,
//         stepRenderers[i].generateImages(tokenId, primary, secondary)
//       );
//     }

//     svg = string.concat(svg, '</svg></svg>');

//     // string memory svg = string.concat(
//     //   '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><clipPath id="box"><path d="M0 0h512v512H0z"/></clipPath><defs>',
//     //   getGradients(tokenId, primary, secondary, 1),
//     //   getFilters(tokenId),
//     //   '</defs><svg viewBox="0 0 512 512" clip-path="url(#box)">',
//     //   getBackgrounds(),
//     //   getShapes(tokenId, primary, secondary),
//     //   // '<path d="M 0, 340 h 512" stroke="white" opacity="0.4"/>',
//     //   // '<path d="M 0, 170 h 512" stroke="white" opacity="0.4"/>',
//     //   // '<path d="M 170, 0 v 512" stroke="white" opacity="0.4"/>',
//     //   // '<path d="M 340, 0 v 512" stroke="white" opacity="0.4"/>',
//     //   // '<path d="M250 80 h 180 v 180 h -180 v-180" stroke="white" fill="none"/>',

//     //   '</svg>',
//     //   '</svg>'
//     // );
//     return svg;
//   }

//   function addStepRenderer(IStepRenderer stepRenderer) public {
//     stepRenderers.push(stepRenderer);
//   }

//   // function getGradients(
//   //   uint256 seed,
//   //   Color.HSL memory primary,
//   //   Color.HSL memory secondary,
//   //   uint16 cloudDays
//   // ) public pure returns (string memory) {
//   //   string memory rotation = Color.toString(
//   //     (uint16)((Color.psuedorandom(seed, 123) % 20) + 50)
//   //   );
//   //   string memory sky = string.concat(
//   //     '<linearGradient id="skyGradient" gradientTransform="rotate(',
//   //     rotation,
//   //     ')">'
//   //   );

//   //   sky = string.concat(
//   //     sky,
//   //     '<stop offset="0%"',
//   //     ' stop-color="',
//   //     Color.HSLtoString(primary),
//   //     '"/>'
//   //   );

//   //   sky = string.concat(
//   //     sky,
//   //     '<stop offset="100%"',
//   //     ' stop-color="',
//   //     Color.HSLtoString(secondary),
//   //     '"/></linearGradient>'
//   //   );

//   //   Color.HSL memory bright = Color.rotateColor(primary, 240);
//   //   bright.L = 90;
//   //   sky = string.concat(
//   //     sky,
//   //     '<linearGradient id="dayGradient" gradientTransform="rotate(13)">',
//   //     '<stop offset="0%" stop-color="',
//   //     Color.HSLtoString(Color.rotateColor(primary, 180)),
//   //     '"/>',
//   //     '<stop offset="100%" stop-color="',
//   //     Color.HSLtoString(Color.rotateColor(secondary, 180)),
//   //     '"/>',
//   //     '</linearGradient>'
//   //   );

//   //   sky = string.concat(
//   //     sky,
//   //     '<linearGradient id="galaxyGradientOne" gradientTransform="rotate(90)">',
//   //     '<stop offset="0%" stop-opacity="0.1"/>',
//   //     '<stop offset="50%" stop-opacity="0.7"/>',
//   //     '<stop offset="100%" stop-opacity="0.1"/></linearGradient>'
//   //   );

//   //   return sky;
//   // }

//   // function getBackgrounds() public pure returns (string memory) {
//   //   string memory bg = '';

//   //   bg = string.concat(
//   //     '<rect width="100%" height="100%" filter="url(#stars)" opacity="1"/>',
//   //     '<path fill="url(#skyGradient)"  d="M0 0h512v512H0z" opacity=".7"/>',
//   //     '<path fill="url(#galaxyGradientOne)" filter="url(#galaxyOne)" d="M0 0h512v512H0z"/>'
//   //   );

//   //   return bg;
//   // }

//   // function getFilters(uint256 _seed) public pure returns (string memory) {
//   //   string memory filters = '';
//   //   string memory seed = Color.toString(
//   //     (uint16)(Color.psuedorandom(_seed, 123) % 10000)
//   //   );
//   //   filters = string.concat(
//   //     filters,
//   //     '<filter id="stars"><feTurbulence baseFrequency=".35" seed="',
//   //     seed,
//   //     '"/>',
//   //     '<feColorMatrix values="0 0 0 9 -4 0 0 0 9 -4 0 0 0 9 -4 0 0 0 0 1"/></filter>'
//   //   );

//   //   filters = string.concat(
//   //     filters,
//   //     '<filter id="light"><feSpecularLighting result="specOut" specularExponent="100" lighting-color="white">',
//   //     '<fePointLight x="10" y="70" z="300"/></feSpecularLighting>',
//   //     '<feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/></filter>'
//   //   );

//   //   filters = string.concat(
//   //     filters,
//   //     '<filter id="galaxyOne" x="-50%" y="-50%" height="200%" width="200%">',
//   //     '<feGaussianBlur in="sky" stdDeviation="20" result="galaxyblur"/>',
//   //     '<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="5" result="galaxynoise" seed="4476"/>',
//   //     '<feColorMatrix values="1 0 0 0 1 0 1 0 0 1 0 0 1 0 1 0 0 0 1 0"/>',
//   //     '<feComposite operator="in" in2="SourceGraphic"/></filter>'
//   //   );
//   //   filters = string.concat(
//   //     filters,
//   //     '<filter id="sun"><feTurbulence baseFrequency=".1" numOctaves="12" seed="',
//   //     seed,
//   //     '" />',
//   //     '<feDisplacementMap in="SourceGraphic" scale="15" /></filter>'
//   //   );

//   //   return filters;
//   // }

//   function getShapes(
//     uint256 seed,
//     Color.HSL memory primary,
//     Color.HSL memory secondary
//   ) public view returns (string memory) {
//     string memory shapes = '';

//     shapes = string.concat(
//       //   '<g id="skymath" opacity="1" fill="none" stroke="white" stroke-width="1">',
//       //               '<path d="M250 0 v 512"/>',

//       //   '<circle r="60" cx="256" cy="170"  opacity="1" fill="black" />',
//       //   '<circle r="80" cx="256" cy="170"  opacity="1" />',
//       //   //   '<circle r="80" cx="340" cy="170" stroke-dasharray="0 1 0" opacity="0.8" />',
//       //   //   '<circle r="85" cx="340" cy="170" stroke-dasharray="1 0 1" opacity="0.8" />',
//       //   //   '<circle r="90" cx="340" cy="170" stroke-dasharray="0 1 0" opacity="0.8" />',
//       //   '</g>'

//       '<g fill="none" stroke="white" stroke-width="1">',
//       '<path d="M261 0 v 512 " />',
//       '<path d="M256 0 v 512 "  stroke-dasharray="1 0 1"/>',
//       '<path d="M251 0 v 512 " />',
//       '<path d="M200 0 v 512 " /><path d="M312 0 v 512 " /></g>',
//       getShip(seed, 3, primary, secondary)

//       // '<g id="skymath" opacity="1" fill="none" stroke="white" stroke-width="1">',
//       // '<ellipse cx="0" cy="256" rx="150" ry="100" stroke-dasharray="1 0 1"/>',
//       // '<ellipse cx="0" cy="256" rx="250" ry="200" stroke-dasharray="1 0 1"/>',
//       // '<ellipse cx="0" cy="256" rx="350" ry="300" stroke-dasharray="1 0 1"/>',
//       // '<ellipse cx="0" cy="256" rx="450" ry="400" stroke-dasharray="1 0 1"/>',
//       // '<circle r="60" cx="0" cy="256" opacity="1" fill="#fcdc4d" filter="url(#sun)"/>',
//       // '<g stroke="black" >',
//       // '<circle r="10" cx="150" cy="256" opacity="1" fill="#ff4365" />',
//       // '<circle r="15" cx="250" cy="256" opacity="1" fill="#81a4cd"/>',
//       // '<circle r="12" cx="350" cy="256" opacity="1" fill="#ff4365" />',
//       // '<circle r="20" cx="450" cy="256" opacity="1" fill="#ff4365" />',
//       // '</g></g>'

//       // '  <path d="M256 0 v 512"/>',

//       // '  <circle r="60" cx="256" cy="170" opacity="1" fill="black"/>',
//       // '  <circle r="40" cx="128" cy="170" opacity="1" fill="black"/>',
//       // '  <circle r="40" cx="384" cy="170" opacity="1" fill="black"/>',
//       // '  <circle r="80" cx="256" cy="170" opacity="1"/>',
//       // '</g>'
//     );
//     return shapes;
//   }

//   function getShip(
//     uint256 seed,
//     uint256 whichShip,
//     Color.HSL memory primary,
//     Color.HSL memory secondary
//   ) public view returns (string memory) {
//     string memory tank = '<circle r="90" cx="256" cy="256"  />';
//     string memory attacker = '<path d="M256 160 l 80 170 h -160 z "/>';
//     string memory agile = getAgile(seed, primary, secondary);

//     string memory ship = '<g>';
//     if (whichShip == 1) {
//       ship = string.concat(ship, tank);
//     } else if (whichShip == 2) {
//       ship = string.concat(ship, attacker);
//     } else if (whichShip == 3) {
//       ship = string.concat(ship, agile);
//     }
//     ship = string.concat(ship, '</g>');

//     return ship;
//   }

//   struct Delta {
//     uint16 first;
//     uint16 second;
//     uint16 third;
//   }

//   function getAgileRules(
//     Color.HSL memory primary
//   ) public view returns (Color.HSL[] memory, Delta[] memory) {
//     Color.HSL memory base = primary;
//     base.S = 30;
//     base = Color.rotateColor(base, 190);

//     Color.HSL[] memory colors = new Color.HSL[](4);
//     // colors[0] = base;
//     // colors[1] = Color.rotateColor(base, 20);
//     // colors[2] = Color.rotateColor(base, 40);
//     colors[0] = Color.HSL(0, 0, 75);
//     colors[1] = Color.HSL(211, 12, 48);
//     colors[2] = Color.HSL(184, 9, 62);
//     colors[3] = Color.HSL(0, 0, 75);

//     Delta[] memory deltas = new Delta[](2);
//     deltas[0] = Delta(10, 26, 10);
//     deltas[1] = Delta(5, 13, 5);

//     return (colors, deltas);
//   }

//   function getAgile(
//     uint256 seed,
//     Color.HSL memory primary,
//     Color.HSL memory secondary
//   ) public view returns (string memory) {
//     (Color.HSL[] memory colors, Delta[] memory deltas) = getAgileRules(primary);

//     uint256 rings = (Color.psuedorandom(seed, 123) % 3) + 3;
//     string memory agile = string.concat(
//       '<ellipse cx="256" cy="256" rx="150" ry="60" fill="',
//       Color.HSLtoString(colors[0]),
//       '"/>'
//     );
//     uint256 colorIndex;
//     uint256 deltaIndex;
//     Delta memory current = Delta(256, 150, 60);
//     // uint16 curPos = 256; uint16 curX = 150; uint16 curY = 60;

//     for (uint256 i = 0; i < rings; i++) {
//       // colorIndex = Color.psuedorandom(seed, 123) % colors.length;
//       colorIndex++;
//       if (colorIndex >= colors.length) {
//         colorIndex = 0;
//       }
//       deltaIndex = Color.psuedorandom(seed, i) % deltas.length;
//       current.first = current.first - deltas[deltaIndex].first;
//       current.second = current.second - deltas[deltaIndex].second;
//       current.third = current.third - deltas[deltaIndex].third;

//       agile = string.concat(
//         agile,
//         '<ellipse cx="256" cy="',
//         Color.toString(current.first),
//         '" rx="',
//         Color.toString(current.second),
//         '" ry="',
//         Color.toString(current.third),
//         '" fill="',
//         Color.HSLtoString(colors[colorIndex]),
//         '"/>'
//       );
//     }

//     return agile;
//   }

//   function psuedorandom(
//     uint256 tokenId,
//     uint256 nonce
//   ) public pure returns (uint256) {
//     return Color.psuedorandom(tokenId, nonce);
//   }
// }
