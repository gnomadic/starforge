import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GlobalProgress
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const globalProgressAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [{ name: '_event', internalType: 'string', type: 'string' }],
    name: 'countEvent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'controller',
        internalType: 'contract ISystemController',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// InvestmentSystem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const investmentSystemAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_planet', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'NotEnoughTimePassed' },
  { type: 'error', inputs: [], name: 'NotTheOwner' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'addInvestment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'controller',
    outputs: [
      { name: '', internalType: 'contract ISystemController', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getInvestments',
    outputs: [
      {
        name: '',
        internalType: 'struct InvestmentSystem.Investment[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'enabled', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_controller',
        internalType: 'contract ISystemController',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'investment', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'investments',
    outputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'enabled', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'planet',
    outputs: [{ name: '', internalType: 'contract IERC721', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'stats',
    outputs: [
      { name: 'lastGaze', internalType: 'uint256', type: 'uint256' },
      { name: 'gazes', internalType: 'uint16', type: 'uint16' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Planet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const planetAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'renderer', internalType: 'address', type: 'address' },
      { name: 'systems', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'ApprovalCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'ApprovalQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'BalanceQueryForZeroAddress' },
  { type: 'error', inputs: [], name: 'InvalidQueryRange' },
  { type: 'error', inputs: [], name: 'MintERC2309QuantityExceedsLimit' },
  { type: 'error', inputs: [], name: 'MintToZeroAddress' },
  { type: 'error', inputs: [], name: 'MintZeroQuantity' },
  { type: 'error', inputs: [], name: 'NotCompatibleWithSpotMints' },
  { type: 'error', inputs: [], name: 'NotMinted' },
  { type: 'error', inputs: [], name: 'NotTheOwner' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'OwnerQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'OwnershipNotInitializedForExtraData' },
  { type: 'error', inputs: [], name: 'RendererDoesNotExist' },
  { type: 'error', inputs: [], name: 'SequentialMintExceedsLimit' },
  { type: 'error', inputs: [], name: 'SequentialUpToTooSmall' },
  { type: 'error', inputs: [], name: 'SpotMintTokenIdTooSmall' },
  { type: 'error', inputs: [], name: 'TokenAlreadyExists' },
  { type: 'error', inputs: [], name: 'TransferCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'TransferFromIncorrectOwner' },
  { type: 'error', inputs: [], name: 'TransferToNonERC721ReceiverImplementer' },
  { type: 'error', inputs: [], name: 'TransferToZeroAddress' },
  { type: 'error', inputs: [], name: 'URIQueryForNonexistentToken' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'ConsecutiveTransfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [{ name: 'renderer', internalType: 'address', type: 'address' }],
    name: 'addRenderer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'customizeCost',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'explicitOwnershipOf',
    outputs: [
      {
        name: 'ownership',
        internalType: 'struct IERC721A.TokenOwnership',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint64', type: 'uint64' },
          { name: 'burned', internalType: 'bool', type: 'bool' },
          { name: 'extraData', internalType: 'uint24', type: 'uint24' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'explicitOwnershipsOf',
    outputs: [
      {
        name: '',
        internalType: 'struct IERC721A.TokenOwnership[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'startTimestamp', internalType: 'uint64', type: 'uint64' },
          { name: 'burned', internalType: 'bool', type: 'bool' },
          { name: 'extraData', internalType: 'uint24', type: 'uint24' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'generateCharacter',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'generateSVG',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mintCost',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextTokenId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'renderers',
    outputs: [
      { name: '', internalType: 'contract IRenderer', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'selectedIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selectRenderer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'systemController',
    outputs: [
      { name: '', internalType: 'contract ISystemController', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokensOfOwner',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'stop', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokensOfOwnerIn',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SystemController
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const systemControllerAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint8', type: 'uint8' }],
    name: 'getSystem',
    outputs: [{ name: '', internalType: 'contract ISystem', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_planet', internalType: 'uint256', type: 'uint256' }],
    name: 'initAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint8', type: 'uint8' },
      { name: 'system', internalType: 'contract ISystem', type: 'address' },
    ],
    name: 'registerSystem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setTokenAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    name: 'systemMap',
    outputs: [{ name: '', internalType: 'contract ISystem', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'systems',
    outputs: [{ name: '', internalType: 'contract ISystem', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalProgressAbi}__
 */
export const useReadGlobalProgress = /*#__PURE__*/ createUseReadContract({
  abi: globalProgressAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"owner"`
 */
export const useReadGlobalProgressOwner = /*#__PURE__*/ createUseReadContract({
  abi: globalProgressAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalProgressAbi}__
 */
export const useWriteGlobalProgress = /*#__PURE__*/ createUseWriteContract({
  abi: globalProgressAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"countEvent"`
 */
export const useWriteGlobalProgressCountEvent =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalProgressAbi,
    functionName: 'countEvent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"init"`
 */
export const useWriteGlobalProgressInit = /*#__PURE__*/ createUseWriteContract({
  abi: globalProgressAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteGlobalProgressRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalProgressAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteGlobalProgressTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalProgressAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalProgressAbi}__
 */
export const useSimulateGlobalProgress =
  /*#__PURE__*/ createUseSimulateContract({ abi: globalProgressAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"countEvent"`
 */
export const useSimulateGlobalProgressCountEvent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalProgressAbi,
    functionName: 'countEvent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateGlobalProgressInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalProgressAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateGlobalProgressRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalProgressAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateGlobalProgressTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalProgressAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalProgressAbi}__
 */
export const useWatchGlobalProgressEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: globalProgressAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalProgressAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchGlobalProgressOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalProgressAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link investmentSystemAbi}__
 */
export const useReadInvestmentSystem = /*#__PURE__*/ createUseReadContract({
  abi: investmentSystemAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"controller"`
 */
export const useReadInvestmentSystemController =
  /*#__PURE__*/ createUseReadContract({
    abi: investmentSystemAbi,
    functionName: 'controller',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"getInvestments"`
 */
export const useReadInvestmentSystemGetInvestments =
  /*#__PURE__*/ createUseReadContract({
    abi: investmentSystemAbi,
    functionName: 'getInvestments',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"investments"`
 */
export const useReadInvestmentSystemInvestments =
  /*#__PURE__*/ createUseReadContract({
    abi: investmentSystemAbi,
    functionName: 'investments',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"owner"`
 */
export const useReadInvestmentSystemOwner = /*#__PURE__*/ createUseReadContract(
  { abi: investmentSystemAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"planet"`
 */
export const useReadInvestmentSystemPlanet =
  /*#__PURE__*/ createUseReadContract({
    abi: investmentSystemAbi,
    functionName: 'planet',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"stats"`
 */
export const useReadInvestmentSystemStats = /*#__PURE__*/ createUseReadContract(
  { abi: investmentSystemAbi, functionName: 'stats' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link investmentSystemAbi}__
 */
export const useWriteInvestmentSystem = /*#__PURE__*/ createUseWriteContract({
  abi: investmentSystemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"addInvestment"`
 */
export const useWriteInvestmentSystemAddInvestment =
  /*#__PURE__*/ createUseWriteContract({
    abi: investmentSystemAbi,
    functionName: 'addInvestment',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"init"`
 */
export const useWriteInvestmentSystemInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: investmentSystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"invest"`
 */
export const useWriteInvestmentSystemInvest =
  /*#__PURE__*/ createUseWriteContract({
    abi: investmentSystemAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteInvestmentSystemRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: investmentSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteInvestmentSystemTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: investmentSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link investmentSystemAbi}__
 */
export const useSimulateInvestmentSystem =
  /*#__PURE__*/ createUseSimulateContract({ abi: investmentSystemAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"addInvestment"`
 */
export const useSimulateInvestmentSystemAddInvestment =
  /*#__PURE__*/ createUseSimulateContract({
    abi: investmentSystemAbi,
    functionName: 'addInvestment',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateInvestmentSystemInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: investmentSystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"invest"`
 */
export const useSimulateInvestmentSystemInvest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: investmentSystemAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateInvestmentSystemRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: investmentSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateInvestmentSystemTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: investmentSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link investmentSystemAbi}__
 */
export const useWatchInvestmentSystemEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: investmentSystemAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link investmentSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchInvestmentSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: investmentSystemAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__
 */
export const useReadPlanet = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadPlanetBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"contractURI"`
 */
export const useReadPlanetContractUri = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"customizeCost"`
 */
export const useReadPlanetCustomizeCost = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'customizeCost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"explicitOwnershipOf"`
 */
export const useReadPlanetExplicitOwnershipOf =
  /*#__PURE__*/ createUseReadContract({
    abi: planetAbi,
    functionName: 'explicitOwnershipOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"explicitOwnershipsOf"`
 */
export const useReadPlanetExplicitOwnershipsOf =
  /*#__PURE__*/ createUseReadContract({
    abi: planetAbi,
    functionName: 'explicitOwnershipsOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"generateCharacter"`
 */
export const useReadPlanetGenerateCharacter =
  /*#__PURE__*/ createUseReadContract({
    abi: planetAbi,
    functionName: 'generateCharacter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"generateSVG"`
 */
export const useReadPlanetGenerateSvg = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'generateSVG',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadPlanetGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadPlanetIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: planetAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"mintCost"`
 */
export const useReadPlanetMintCost = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'mintCost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"name"`
 */
export const useReadPlanetName = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"nextTokenId"`
 */
export const useReadPlanetNextTokenId = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'nextTokenId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"owner"`
 */
export const useReadPlanetOwner = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadPlanetOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"renderers"`
 */
export const useReadPlanetRenderers = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'renderers',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadPlanetSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: planetAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadPlanetSymbol = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"systemController"`
 */
export const useReadPlanetSystemController =
  /*#__PURE__*/ createUseReadContract({
    abi: planetAbi,
    functionName: 'systemController',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadPlanetTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"tokensOfOwner"`
 */
export const useReadPlanetTokensOfOwner = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'tokensOfOwner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"tokensOfOwnerIn"`
 */
export const useReadPlanetTokensOfOwnerIn = /*#__PURE__*/ createUseReadContract(
  { abi: planetAbi, functionName: 'tokensOfOwnerIn' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadPlanetTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__
 */
export const useWritePlanet = /*#__PURE__*/ createUseWriteContract({
  abi: planetAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"addRenderer"`
 */
export const useWritePlanetAddRenderer = /*#__PURE__*/ createUseWriteContract({
  abi: planetAbi,
  functionName: 'addRenderer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"approve"`
 */
export const useWritePlanetApprove = /*#__PURE__*/ createUseWriteContract({
  abi: planetAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"mint"`
 */
export const useWritePlanetMint = /*#__PURE__*/ createUseWriteContract({
  abi: planetAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWritePlanetRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWritePlanetSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const useWritePlanetSelectRenderer =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetAbi,
    functionName: 'selectRenderer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWritePlanetSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePlanetTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: planetAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWritePlanetTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__
 */
export const useSimulatePlanet = /*#__PURE__*/ createUseSimulateContract({
  abi: planetAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"addRenderer"`
 */
export const useSimulatePlanetAddRenderer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetAbi,
    functionName: 'addRenderer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePlanetApprove = /*#__PURE__*/ createUseSimulateContract(
  { abi: planetAbi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulatePlanetMint = /*#__PURE__*/ createUseSimulateContract({
  abi: planetAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulatePlanetRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulatePlanetSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const useSimulatePlanetSelectRenderer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetAbi,
    functionName: 'selectRenderer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulatePlanetSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePlanetTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulatePlanetTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetAbi}__
 */
export const useWatchPlanetEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: planetAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPlanetApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchPlanetApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetAbi}__ and `eventName` set to `"ConsecutiveTransfer"`
 */
export const useWatchPlanetConsecutiveTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetAbi,
    eventName: 'ConsecutiveTransfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchPlanetOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchPlanetTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link systemControllerAbi}__
 */
export const useReadSystemController = /*#__PURE__*/ createUseReadContract({
  abi: systemControllerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"getSystem"`
 */
export const useReadSystemControllerGetSystem =
  /*#__PURE__*/ createUseReadContract({
    abi: systemControllerAbi,
    functionName: 'getSystem',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"owner"`
 */
export const useReadSystemControllerOwner = /*#__PURE__*/ createUseReadContract(
  { abi: systemControllerAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"systemMap"`
 */
export const useReadSystemControllerSystemMap =
  /*#__PURE__*/ createUseReadContract({
    abi: systemControllerAbi,
    functionName: 'systemMap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"systems"`
 */
export const useReadSystemControllerSystems =
  /*#__PURE__*/ createUseReadContract({
    abi: systemControllerAbi,
    functionName: 'systems',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"tokenAddress"`
 */
export const useReadSystemControllerTokenAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: systemControllerAbi,
    functionName: 'tokenAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemControllerAbi}__
 */
export const useWriteSystemController = /*#__PURE__*/ createUseWriteContract({
  abi: systemControllerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"initAll"`
 */
export const useWriteSystemControllerInitAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: systemControllerAbi,
    functionName: 'initAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useWriteSystemControllerRegisterSystem =
  /*#__PURE__*/ createUseWriteContract({
    abi: systemControllerAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteSystemControllerRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: systemControllerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"setTokenAddress"`
 */
export const useWriteSystemControllerSetTokenAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: systemControllerAbi,
    functionName: 'setTokenAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteSystemControllerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: systemControllerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemControllerAbi}__
 */
export const useSimulateSystemController =
  /*#__PURE__*/ createUseSimulateContract({ abi: systemControllerAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"initAll"`
 */
export const useSimulateSystemControllerInitAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: systemControllerAbi,
    functionName: 'initAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useSimulateSystemControllerRegisterSystem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: systemControllerAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateSystemControllerRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: systemControllerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"setTokenAddress"`
 */
export const useSimulateSystemControllerSetTokenAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: systemControllerAbi,
    functionName: 'setTokenAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateSystemControllerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: systemControllerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link systemControllerAbi}__
 */
export const useWatchSystemControllerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: systemControllerAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link systemControllerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchSystemControllerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: systemControllerAbi,
    eventName: 'OwnershipTransferred',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalProgressAbi}__
 */
export const readGlobalProgress = /*#__PURE__*/ createReadContract({
  abi: globalProgressAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"owner"`
 */
export const readGlobalProgressOwner = /*#__PURE__*/ createReadContract({
  abi: globalProgressAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalProgressAbi}__
 */
export const writeGlobalProgress = /*#__PURE__*/ createWriteContract({
  abi: globalProgressAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"countEvent"`
 */
export const writeGlobalProgressCountEvent = /*#__PURE__*/ createWriteContract({
  abi: globalProgressAbi,
  functionName: 'countEvent',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"init"`
 */
export const writeGlobalProgressInit = /*#__PURE__*/ createWriteContract({
  abi: globalProgressAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeGlobalProgressRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: globalProgressAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeGlobalProgressTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: globalProgressAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalProgressAbi}__
 */
export const simulateGlobalProgress = /*#__PURE__*/ createSimulateContract({
  abi: globalProgressAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"countEvent"`
 */
export const simulateGlobalProgressCountEvent =
  /*#__PURE__*/ createSimulateContract({
    abi: globalProgressAbi,
    functionName: 'countEvent',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"init"`
 */
export const simulateGlobalProgressInit = /*#__PURE__*/ createSimulateContract({
  abi: globalProgressAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateGlobalProgressRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: globalProgressAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalProgressAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateGlobalProgressTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: globalProgressAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalProgressAbi}__
 */
export const watchGlobalProgressEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: globalProgressAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalProgressAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchGlobalProgressOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalProgressAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link investmentSystemAbi}__
 */
export const readInvestmentSystem = /*#__PURE__*/ createReadContract({
  abi: investmentSystemAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"controller"`
 */
export const readInvestmentSystemController = /*#__PURE__*/ createReadContract({
  abi: investmentSystemAbi,
  functionName: 'controller',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"getInvestments"`
 */
export const readInvestmentSystemGetInvestments =
  /*#__PURE__*/ createReadContract({
    abi: investmentSystemAbi,
    functionName: 'getInvestments',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"investments"`
 */
export const readInvestmentSystemInvestments = /*#__PURE__*/ createReadContract(
  { abi: investmentSystemAbi, functionName: 'investments' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"owner"`
 */
export const readInvestmentSystemOwner = /*#__PURE__*/ createReadContract({
  abi: investmentSystemAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"planet"`
 */
export const readInvestmentSystemPlanet = /*#__PURE__*/ createReadContract({
  abi: investmentSystemAbi,
  functionName: 'planet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"stats"`
 */
export const readInvestmentSystemStats = /*#__PURE__*/ createReadContract({
  abi: investmentSystemAbi,
  functionName: 'stats',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link investmentSystemAbi}__
 */
export const writeInvestmentSystem = /*#__PURE__*/ createWriteContract({
  abi: investmentSystemAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"addInvestment"`
 */
export const writeInvestmentSystemAddInvestment =
  /*#__PURE__*/ createWriteContract({
    abi: investmentSystemAbi,
    functionName: 'addInvestment',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"init"`
 */
export const writeInvestmentSystemInit = /*#__PURE__*/ createWriteContract({
  abi: investmentSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"invest"`
 */
export const writeInvestmentSystemInvest = /*#__PURE__*/ createWriteContract({
  abi: investmentSystemAbi,
  functionName: 'invest',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeInvestmentSystemRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: investmentSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeInvestmentSystemTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: investmentSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link investmentSystemAbi}__
 */
export const simulateInvestmentSystem = /*#__PURE__*/ createSimulateContract({
  abi: investmentSystemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"addInvestment"`
 */
export const simulateInvestmentSystemAddInvestment =
  /*#__PURE__*/ createSimulateContract({
    abi: investmentSystemAbi,
    functionName: 'addInvestment',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"init"`
 */
export const simulateInvestmentSystemInit =
  /*#__PURE__*/ createSimulateContract({
    abi: investmentSystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"invest"`
 */
export const simulateInvestmentSystemInvest =
  /*#__PURE__*/ createSimulateContract({
    abi: investmentSystemAbi,
    functionName: 'invest',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateInvestmentSystemRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: investmentSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link investmentSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateInvestmentSystemTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: investmentSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link investmentSystemAbi}__
 */
export const watchInvestmentSystemEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: investmentSystemAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link investmentSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchInvestmentSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: investmentSystemAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__
 */
export const readPlanet = /*#__PURE__*/ createReadContract({ abi: planetAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readPlanetBalanceOf = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"contractURI"`
 */
export const readPlanetContractUri = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"customizeCost"`
 */
export const readPlanetCustomizeCost = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'customizeCost',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"explicitOwnershipOf"`
 */
export const readPlanetExplicitOwnershipOf = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'explicitOwnershipOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"explicitOwnershipsOf"`
 */
export const readPlanetExplicitOwnershipsOf = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'explicitOwnershipsOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"generateCharacter"`
 */
export const readPlanetGenerateCharacter = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'generateCharacter',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"generateSVG"`
 */
export const readPlanetGenerateSvg = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'generateSVG',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"getApproved"`
 */
export const readPlanetGetApproved = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readPlanetIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"mintCost"`
 */
export const readPlanetMintCost = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'mintCost',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"name"`
 */
export const readPlanetName = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"nextTokenId"`
 */
export const readPlanetNextTokenId = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'nextTokenId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"owner"`
 */
export const readPlanetOwner = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readPlanetOwnerOf = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"renderers"`
 */
export const readPlanetRenderers = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'renderers',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readPlanetSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"symbol"`
 */
export const readPlanetSymbol = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"systemController"`
 */
export const readPlanetSystemController = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'systemController',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readPlanetTokenUri = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"tokensOfOwner"`
 */
export const readPlanetTokensOfOwner = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'tokensOfOwner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"tokensOfOwnerIn"`
 */
export const readPlanetTokensOfOwnerIn = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'tokensOfOwnerIn',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readPlanetTotalSupply = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__
 */
export const writePlanet = /*#__PURE__*/ createWriteContract({ abi: planetAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"addRenderer"`
 */
export const writePlanetAddRenderer = /*#__PURE__*/ createWriteContract({
  abi: planetAbi,
  functionName: 'addRenderer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"approve"`
 */
export const writePlanetApprove = /*#__PURE__*/ createWriteContract({
  abi: planetAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"mint"`
 */
export const writePlanetMint = /*#__PURE__*/ createWriteContract({
  abi: planetAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writePlanetRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: planetAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writePlanetSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: planetAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const writePlanetSelectRenderer = /*#__PURE__*/ createWriteContract({
  abi: planetAbi,
  functionName: 'selectRenderer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writePlanetSetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: planetAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writePlanetTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: planetAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writePlanetTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: planetAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__
 */
export const simulatePlanet = /*#__PURE__*/ createSimulateContract({
  abi: planetAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"addRenderer"`
 */
export const simulatePlanetAddRenderer = /*#__PURE__*/ createSimulateContract({
  abi: planetAbi,
  functionName: 'addRenderer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"approve"`
 */
export const simulatePlanetApprove = /*#__PURE__*/ createSimulateContract({
  abi: planetAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"mint"`
 */
export const simulatePlanetMint = /*#__PURE__*/ createSimulateContract({
  abi: planetAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulatePlanetRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: planetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulatePlanetSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: planetAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const simulatePlanetSelectRenderer =
  /*#__PURE__*/ createSimulateContract({
    abi: planetAbi,
    functionName: 'selectRenderer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulatePlanetSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: planetAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulatePlanetTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: planetAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulatePlanetTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: planetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetAbi}__
 */
export const watchPlanetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: planetAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetAbi}__ and `eventName` set to `"Approval"`
 */
export const watchPlanetApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: planetAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchPlanetApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: planetAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetAbi}__ and `eventName` set to `"ConsecutiveTransfer"`
 */
export const watchPlanetConsecutiveTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: planetAbi,
    eventName: 'ConsecutiveTransfer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchPlanetOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: planetAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchPlanetTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: planetAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link systemControllerAbi}__
 */
export const readSystemController = /*#__PURE__*/ createReadContract({
  abi: systemControllerAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"getSystem"`
 */
export const readSystemControllerGetSystem = /*#__PURE__*/ createReadContract({
  abi: systemControllerAbi,
  functionName: 'getSystem',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"owner"`
 */
export const readSystemControllerOwner = /*#__PURE__*/ createReadContract({
  abi: systemControllerAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"systemMap"`
 */
export const readSystemControllerSystemMap = /*#__PURE__*/ createReadContract({
  abi: systemControllerAbi,
  functionName: 'systemMap',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"systems"`
 */
export const readSystemControllerSystems = /*#__PURE__*/ createReadContract({
  abi: systemControllerAbi,
  functionName: 'systems',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"tokenAddress"`
 */
export const readSystemControllerTokenAddress =
  /*#__PURE__*/ createReadContract({
    abi: systemControllerAbi,
    functionName: 'tokenAddress',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemControllerAbi}__
 */
export const writeSystemController = /*#__PURE__*/ createWriteContract({
  abi: systemControllerAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"initAll"`
 */
export const writeSystemControllerInitAll = /*#__PURE__*/ createWriteContract({
  abi: systemControllerAbi,
  functionName: 'initAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"registerSystem"`
 */
export const writeSystemControllerRegisterSystem =
  /*#__PURE__*/ createWriteContract({
    abi: systemControllerAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeSystemControllerRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: systemControllerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"setTokenAddress"`
 */
export const writeSystemControllerSetTokenAddress =
  /*#__PURE__*/ createWriteContract({
    abi: systemControllerAbi,
    functionName: 'setTokenAddress',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeSystemControllerTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: systemControllerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemControllerAbi}__
 */
export const simulateSystemController = /*#__PURE__*/ createSimulateContract({
  abi: systemControllerAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"initAll"`
 */
export const simulateSystemControllerInitAll =
  /*#__PURE__*/ createSimulateContract({
    abi: systemControllerAbi,
    functionName: 'initAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"registerSystem"`
 */
export const simulateSystemControllerRegisterSystem =
  /*#__PURE__*/ createSimulateContract({
    abi: systemControllerAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateSystemControllerRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: systemControllerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"setTokenAddress"`
 */
export const simulateSystemControllerSetTokenAddress =
  /*#__PURE__*/ createSimulateContract({
    abi: systemControllerAbi,
    functionName: 'setTokenAddress',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateSystemControllerTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: systemControllerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link systemControllerAbi}__
 */
export const watchSystemControllerEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: systemControllerAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link systemControllerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchSystemControllerOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: systemControllerAbi,
    eventName: 'OwnershipTransferred',
  })
