// // SPDX-License-Identifier: MIT
// pragma solidity 0.8.24;

// import '../Color.sol';
// import '../interfaces/IStepRenderer.sol';

// contract CardRenderer is IStepRenderer {
//   function generateDefs(
//     uint256 tokenId,
//     Color.HSL memory primary,
//     Color.HSL memory secondary
//   ) external view returns (string memory) {
//     return
//       string.concat(
//         '<pattern id="hex" width=".056" height=".095">',
//         '<path d="m0 14 12-7V-3m4 0V7l12 7m0 20.5-12 7V49m-4 0v-7.5l-12-7m2-17 12-7 12 7V31l-12 7-12-7z" fill="none" stroke-opacity=".2" stroke="#d4d4d4"/>',
//         '</pattern>',
//         '<pattern id="stat" width=".2" height="1">',
//         '<rect x="1" y="1" width="25" height="10" rx="4" fill="#fff" opacity=".4" stroke="#fff" stroke-width="2"/>',
//         '</pattern>',
//         '<pattern id="statblock" width=".15" height=".125">',
//         '<rect x="1" y="6" width="25" height="10" rx="4" fill="#fff"/>',
//         '</pattern>',
//         '<mask id="card">',
//         '<rect width="100%" height="100%" fill="black" />',
//         '<rect x="114" y="48" width="284" height="392" rx="4" fill="white" />',
//         '</mask>',
//         '<mask id="cardbg">',
//         '<rect width="100%" height="100%" fill="black" />',
//         '<rect x="116" y="50" width="280" height="392" rx="4" fill="white" />',
//         '<path d="m 130 280 q 0 -187.2 126 -187.2 q 126 0 126 187.2 q -18 23.4 -126 23.4 q -108 0 -126 -23.4" fill="black"/>',
//         '<path d="m 146 425 q -10 -46 -1 -100 q 108 -18 225 0 q 9 45 0 100 q -117 3 -224 0" fill="black" />',
//         '</mask>',
//         '<mask id="bg">',
//         '<rect width="100%" height="100%" fill="white" />',
//         '<rect x="116" y="50" width="280" height="392" rx="4" fill="black" />',
//         '</mask>',
//         '<mask id="stats">',
//         '<path fill="url(#statblock)" d="M200 325h200v200H200z"/>',
//         '</mask>',
//         '<style>.stat {font: 14px sans-serif;font-weight: bold;}</style>'
//       );
//   }

//   function generateImages(
//     uint256 tokenId,
//     Color.HSL memory primary,
//     Color.HSL memory secondary
//   ) external view returns (string memory) {
//     return
//       string.concat(
//         '<path fill="#535353" d="M0 0h512v512H0z" mask="url(#cardbg)"/>',
//         '<path fill="url(#hex)" d="M0 0h512v512H0z" mask="url(#cardbg)"/>',
//         '<rect x="119" y="53" width="274" height="386" rx="4" fill="none" stroke="#000" stroke-width="10"/>',
//         '<g stroke="#fff" fill="none"/>',
//         '<path d="M161 335v2h16l-2 6 4-4 4 4-2-6 6-2h-6l2-6-4 4-4-4 2 6zm4 31q6-5 0-10l2-2q6 7 0 14zm6-6h12v2h-12zm3 24 8-2v8l-8-2zm-1 0v4l-3 4 1-5-4 4 2-4-4 3 3-3-5-1 5-1-3-3 4 3-2-4 4 4-1-5zm-11 25a1 1 0 006 0 1 1 0 00-6 0m8 3a1 1 0 007 0 1 1 0 00-7 0m9-3a1 1 0 006 0 1 1 0 00-6 0"/>',
//         // '<path d="M161 335v2h16l-2 6 4-4 4 4-2-6 6-2h-6l2-6-4 4-4-4 2 6zm4 31q6-5 0-10l2-2q6 7 0 14zm6-6h12v2h-12zm3 24 8-2v8l-8-2zm-1 0v4l-3 4 1-5-4 4 2-4-4 3 3-3-5-1 5-1-3-3 4 3-2-4 4 4-1-5zm-11 25a1 1 0 0 0 6 0 1 1 0 0 0-6 0m8 3a1 1 0 0 0 7 0 1 1 0 0 0-7 0m9-3a1 1 0 0 0 6 0 1 1 0 0 0-6 0"/>',
//         '<path fill="url(#stat)" d="M200 330h150v12H200z"/>',
//         '<path mask="url(#stats)" d="M200 330h60v12h-60z"/>',
//         '<path fill="url(#stat)" d="M200 355h150v12H200z"/>',
//         '<path mask="url(#stats)" d="M200 355h90v12h-90z"/>',
//         '<path fill="url(#stat)" d="M200 380h150v12H200z"/>',
//         '<path mask="url(#stats)" d="M200 380h150v12H200z"/>',
//         '<path fill="url(#stat)" d="M200 405h150v12H200z"/>',
//         '<path mask="url(#stats)" d="M200 405h120v12H200z"/>',
//         '<path d="m130 280q0-187.2 126-187.2 126 0 126 187.2-18 23.4-126 23.4-108 0-126-23.4M146 425q-10-46-1-100 108-18 225 0 9 45 0 100-117 3-224 0" stroke="#000" fill="transparent"/>',
//         // '<path d="M130 280q0-187.2 126-187.2t126 187.2q-18 23.4-126 23.4t-126-23.4M146 415q-10-60-1-114 108-18 225 0 9 45 0 114-117 3-224 0" stroke="#000" fill="transparent"/>'
//         getTitle(),
//         getIcon()
//       );
//   }

//   function getTitle() private pure returns (string memory) {
//     return
//       string.concat(
//         '<rect x="120" y="54" width="160" height="30" rx="4" />',
//         '<text x="130" y="74" fill="#c3c1c1" class="stat">',
//         'starship #546',
//         '</text>'
//       );
//   }

//   function getIcon() private pure returns (string memory) {
//     return
//       string.concat(
//         '<rect x="350" y="55" width="40" height="30" rx="4" fill="black" />',
//         '<ellipse rx="12" ry="7" cx="370" cy="69" fill="#c3c1c1" />'
//       );
//   }
// }
