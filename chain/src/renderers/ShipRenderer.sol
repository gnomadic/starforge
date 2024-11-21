// // SPDX-License-Identifier: MIT
// pragma solidity 0.8.24;

// import '../Color.sol';
// import '../interfaces/IStepRenderer.sol';

// contract ShipRenderer is IStepRenderer {
//   // Color.HSL[] public metals = [
//   //     Color.HSL(240, 3, 94),
//   //     Color.HSL(0, 0, 93),
//   //     Color.HSL(211, 12, 48),
//   //     Color.HSL(132, 6, 83),
//   //     Color.HSL(204, 8, 76),
//   //     Color.HSL(192, 15, 94),
//   //     Color.HSL(184, 9, 62),
//   //     Color.HSL(197, 10, 87),
//   //     Color.HSL(180, 8, 69),
//   //     Color.HSL(0, 0, 75),
//   //     Color.HSL(207, 20, 91),
//   //     Color.HSL(213, 24, 93),
//   //     Color.HSL(0, 0, 91)
//   //   ];

//   Color.HSL[] public metals;// = new Color.HSL[](13);


//   constructor(){
//       // metals.push(Color.HSL(240, 3, 94));
//       // metals.push(Color.HSL(0, 0, 93));
//       metals.push(Color.HSL(211, 12, 48));
//       metals.push(Color.HSL(132, 6, 83));
//       metals.push(Color.HSL(204, 8, 76));
//       // metals.push(Color.HSL(0, 0, 91));
//       // metals.push(Color.HSL(192, 15, 94));
//       // metals.push(Color.HSL(213, 24, 93));
//       metals.push(Color.HSL(184, 9, 62));
//       // metals.push(Color.HSL(197, 10, 87));
//       metals.push(Color.HSL(180, 8, 69));
//       metals.push(Color.HSL(0, 0, 75));
//       // metals.push(Color.HSL(207, 20, 91));
      
      
//   }

//   function generateDefs(
//     uint256 tokenId,
//     Color.HSL memory primary,
//     Color.HSL memory secondary
//   ) external view returns (string memory) {

//     return string.concat(


//         '<filter id="ship">',
//         '<feDropShadow dx="-12" dy="12" stdDeviation="10" flood-opacity=".6"/>',
//         '<feGaussianBlur in="sky" stdDeviation="0" result="" />',
//         '</filter>'
//     );


//   }

//   function generateImages(
//     uint256 tokenId,
//     Color.HSL memory primary,
//     Color.HSL memory secondary
//   ) external view returns (string memory) {
//     return
//       string.concat(
//         '<g mask="url(#card)" filter="url(#ship)">',
//         '<g transform="rotate(20) translate(50 -180)" stroke="black" stroke-width=".6">',
//         getAgile(tokenId, primary, secondary),
//         // '<!-- <rect  width="100%" height="100%" fill="red"/> -->',
//         // '<ellipse cx="256" cy="256" rx="160" ry="70" fill="hsl(0,0%,75%)" />',
//         // '<ellipse cx="256" cy="251" rx="147" ry="65" fill="hsl(211,12%,48%)" />',
//         // '<ellipse cx="256" cy="246" rx="144" ry="60" fill="hsl(184,9%,62%)" />',
//         // '<ellipse cx="256" cy="236" rx="108" ry="50" fill="hsl(0,0%,75%)" />',
//         // '<ellipse cx="256" cy="226" rx="82" ry="40" fill="hsl(0,0%,75%)" />',
//         '</g>',
//         '</g>'
//       );
//   }

//   struct Delta {
//     uint16 first;
//     uint16 second;
//     uint16 third;
//   }

//   function getAgileRules(
//     uint256 seed,
//     Color.HSL memory primary
//   ) public view returns (Delta[] memory) {
//     Color.HSL memory base = primary;
//     base.S = 30;
//     base = Color.rotateColor(base, 190);


//     Delta[] memory deltas = new Delta[](2);
//     deltas[0] = Delta(10, 16, 10);
//     deltas[1] = Delta(5, 13, 5);

//     return (deltas);
//   }

//   function getAgile(
//     uint256 seed,
//     Color.HSL memory primary,
//     Color.HSL memory secondary
//   ) public view returns (string memory) {
//     (Delta[] memory deltas) = getAgileRules(
//       seed,
//       primary
//     );

//     uint256 colorIndex = Color.psuedorandom(seed, 123) % metals.length;

//     uint256 rings = (Color.psuedorandom(seed, 123) % 3) + 4;
//     string memory agile = string.concat(
//       '<ellipse cx="256" cy="276" rx="160" ry="60" fill="',
//       Color.HSLtoString(metals[colorIndex]),
//       '"/>'
//     );
    
//     uint256 deltaIndex;
//     Delta memory current = Delta(276, 160, 60);
//     // uint16 curPos = 256; uint16 curX = 150; uint16 curY = 60;

    

//     for (uint256 i = 0; i < rings; i++) {
//       // colorIndex = Color.psuedorandom(seed, 123) % colors.length;
//       colorIndex++;
//       if (colorIndex >= metals.length) {
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
//         // 'white"',
//         Color.HSLtoString(metals[colorIndex]),
//         '"/>'
//       );
      
//     }
//     return agile;
//   }
// }
