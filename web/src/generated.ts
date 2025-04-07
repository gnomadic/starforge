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
// DungeonMaster
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dungeonMasterAbi = [
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
    inputs: [],
    name: 'VOTING_DURATION',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'finalizeProposal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getProposalsCount',
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
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'proposals',
    outputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'string', type: 'string' },
      { name: 'yesVotes', internalType: 'uint256', type: 'uint256' },
      { name: 'noVotes', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'executed', internalType: 'bool', type: 'bool' },
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
      { name: '_target', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'string', type: 'string' },
    ],
    name: 'submitProposal',
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
  {
    type: 'function',
    inputs: [
      { name: 'proposalId', internalType: 'uint256', type: 'uint256' },
      { name: 'support', internalType: 'bool', type: 'bool' },
    ],
    name: 'voteOnProposal',
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
// PlanetStatsSystem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const planetStatsSystemAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_planetAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
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
    inputs: [],
    name: 'getMintPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRarityOdds',
    outputs: [{ name: '', internalType: 'uint8[6]', type: 'uint8[6]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getStats',
    outputs: [
      {
        name: '',
        internalType: 'struct PlanetStatsSystem.Stats',
        type: 'tuple',
        components: [
          { name: 'entropy', internalType: 'uint8', type: 'uint8' },
          { name: 'rarity', internalType: 'uint8', type: 'uint8' },
          { name: 'stats', internalType: 'uint8[6]', type: 'uint8[6]' },
        ],
      },
    ],
    stateMutability: 'view',
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'sync',
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
  {
    type: 'function',
    inputs: [
      { name: 'newPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'rollOdds', internalType: 'uint8[6]', type: 'uint8[6]' },
    ],
    name: 'updateMintRules',
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'syncAll',
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
// UpgradesSystem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const upgradesSystemAbi = [
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
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_description', internalType: 'string', type: 'string' },
      { name: '_costRate', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_costToken', internalType: 'address[]', type: 'address[]' },
      { name: '_benefitRate', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_benefitToken', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'addUpgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'finalizeProposal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllUpgrades',
    outputs: [
      {
        name: '',
        internalType: 'struct UpgradesSystem.Upgrade[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'costRate', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'costToken', internalType: 'address[]', type: 'address[]' },
          { name: 'benefitRate', internalType: 'uint256[]', type: 'uint256[]' },
          {
            name: 'benefitToken',
            internalType: 'address[]',
            type: 'address[]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getAppliedUpgrades',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISystemController', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
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
    inputs: [{ name: 'payload', internalType: 'string', type: 'string' }],
    name: 'propose',
    outputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISystemController', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'upgradeId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'purchaseUpgrade',
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
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'sync',
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
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dungeonMasterAbi}__
 */
export const useReadDungeonMaster = /*#__PURE__*/ createUseReadContract({
  abi: dungeonMasterAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"VOTING_DURATION"`
 */
export const useReadDungeonMasterVotingDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: dungeonMasterAbi,
    functionName: 'VOTING_DURATION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"getProposalsCount"`
 */
export const useReadDungeonMasterGetProposalsCount =
  /*#__PURE__*/ createUseReadContract({
    abi: dungeonMasterAbi,
    functionName: 'getProposalsCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"owner"`
 */
export const useReadDungeonMasterOwner = /*#__PURE__*/ createUseReadContract({
  abi: dungeonMasterAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"proposals"`
 */
export const useReadDungeonMasterProposals =
  /*#__PURE__*/ createUseReadContract({
    abi: dungeonMasterAbi,
    functionName: 'proposals',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dungeonMasterAbi}__
 */
export const useWriteDungeonMaster = /*#__PURE__*/ createUseWriteContract({
  abi: dungeonMasterAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"finalizeProposal"`
 */
export const useWriteDungeonMasterFinalizeProposal =
  /*#__PURE__*/ createUseWriteContract({
    abi: dungeonMasterAbi,
    functionName: 'finalizeProposal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteDungeonMasterRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: dungeonMasterAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"submitProposal"`
 */
export const useWriteDungeonMasterSubmitProposal =
  /*#__PURE__*/ createUseWriteContract({
    abi: dungeonMasterAbi,
    functionName: 'submitProposal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteDungeonMasterTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: dungeonMasterAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"voteOnProposal"`
 */
export const useWriteDungeonMasterVoteOnProposal =
  /*#__PURE__*/ createUseWriteContract({
    abi: dungeonMasterAbi,
    functionName: 'voteOnProposal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__
 */
export const useSimulateDungeonMaster = /*#__PURE__*/ createUseSimulateContract(
  { abi: dungeonMasterAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"finalizeProposal"`
 */
export const useSimulateDungeonMasterFinalizeProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dungeonMasterAbi,
    functionName: 'finalizeProposal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateDungeonMasterRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dungeonMasterAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"submitProposal"`
 */
export const useSimulateDungeonMasterSubmitProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dungeonMasterAbi,
    functionName: 'submitProposal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateDungeonMasterTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dungeonMasterAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"voteOnProposal"`
 */
export const useSimulateDungeonMasterVoteOnProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: dungeonMasterAbi,
    functionName: 'voteOnProposal',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dungeonMasterAbi}__
 */
export const useWatchDungeonMasterEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: dungeonMasterAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link dungeonMasterAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchDungeonMasterOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: dungeonMasterAbi,
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const useReadPlanetStatsSystem = /*#__PURE__*/ createUseReadContract({
  abi: planetStatsSystemAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"getMintPrice"`
 */
export const useReadPlanetStatsSystemGetMintPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsSystemAbi,
    functionName: 'getMintPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"getRarityOdds"`
 */
export const useReadPlanetStatsSystemGetRarityOdds =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsSystemAbi,
    functionName: 'getRarityOdds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"getStats"`
 */
export const useReadPlanetStatsSystemGetStats =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsSystemAbi,
    functionName: 'getStats',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"owner"`
 */
export const useReadPlanetStatsSystemOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsSystemAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const useWritePlanetStatsSystem = /*#__PURE__*/ createUseWriteContract({
  abi: planetStatsSystemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"init"`
 */
export const useWritePlanetStatsSystemInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWritePlanetStatsSystemRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"sync"`
 */
export const useWritePlanetStatsSystemSync =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'sync',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWritePlanetStatsSystemTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"updateMintRules"`
 */
export const useWritePlanetStatsSystemUpdateMintRules =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'updateMintRules',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const useSimulatePlanetStatsSystem =
  /*#__PURE__*/ createUseSimulateContract({ abi: planetStatsSystemAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"init"`
 */
export const useSimulatePlanetStatsSystemInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulatePlanetStatsSystemRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"sync"`
 */
export const useSimulatePlanetStatsSystemSync =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'sync',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulatePlanetStatsSystemTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"updateMintRules"`
 */
export const useSimulatePlanetStatsSystemUpdateMintRules =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'updateMintRules',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const useWatchPlanetStatsSystemEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: planetStatsSystemAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchPlanetStatsSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetStatsSystemAbi,
    eventName: 'OwnershipTransferred',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"syncAll"`
 */
export const useWriteSystemControllerSyncAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: systemControllerAbi,
    functionName: 'syncAll',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"syncAll"`
 */
export const useSimulateSystemControllerSyncAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: systemControllerAbi,
    functionName: 'syncAll',
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

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradesSystemAbi}__
 */
export const useReadUpgradesSystem = /*#__PURE__*/ createUseReadContract({
  abi: upgradesSystemAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"getAllUpgrades"`
 */
export const useReadUpgradesSystemGetAllUpgrades =
  /*#__PURE__*/ createUseReadContract({
    abi: upgradesSystemAbi,
    functionName: 'getAllUpgrades',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"getAppliedUpgrades"`
 */
export const useReadUpgradesSystemGetAppliedUpgrades =
  /*#__PURE__*/ createUseReadContract({
    abi: upgradesSystemAbi,
    functionName: 'getAppliedUpgrades',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"owner"`
 */
export const useReadUpgradesSystemOwner = /*#__PURE__*/ createUseReadContract({
  abi: upgradesSystemAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__
 */
export const useWriteUpgradesSystem = /*#__PURE__*/ createUseWriteContract({
  abi: upgradesSystemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"addUpgrade"`
 */
export const useWriteUpgradesSystemAddUpgrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'addUpgrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"finalizeProposal"`
 */
export const useWriteUpgradesSystemFinalizeProposal =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'finalizeProposal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"init"`
 */
export const useWriteUpgradesSystemInit = /*#__PURE__*/ createUseWriteContract({
  abi: upgradesSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"propose"`
 */
export const useWriteUpgradesSystemPropose =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"purchaseUpgrade"`
 */
export const useWriteUpgradesSystemPurchaseUpgrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'purchaseUpgrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteUpgradesSystemRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"sync"`
 */
export const useWriteUpgradesSystemSync = /*#__PURE__*/ createUseWriteContract({
  abi: upgradesSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteUpgradesSystemTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__
 */
export const useSimulateUpgradesSystem =
  /*#__PURE__*/ createUseSimulateContract({ abi: upgradesSystemAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"addUpgrade"`
 */
export const useSimulateUpgradesSystemAddUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'addUpgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"finalizeProposal"`
 */
export const useSimulateUpgradesSystemFinalizeProposal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'finalizeProposal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateUpgradesSystemInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"propose"`
 */
export const useSimulateUpgradesSystemPropose =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"purchaseUpgrade"`
 */
export const useSimulateUpgradesSystemPurchaseUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'purchaseUpgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateUpgradesSystemRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"sync"`
 */
export const useSimulateUpgradesSystemSync =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'sync',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateUpgradesSystemTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link upgradesSystemAbi}__
 */
export const useWatchUpgradesSystemEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: upgradesSystemAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link upgradesSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchUpgradesSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: upgradesSystemAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dungeonMasterAbi}__
 */
export const readDungeonMaster = /*#__PURE__*/ createReadContract({
  abi: dungeonMasterAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"VOTING_DURATION"`
 */
export const readDungeonMasterVotingDuration = /*#__PURE__*/ createReadContract(
  { abi: dungeonMasterAbi, functionName: 'VOTING_DURATION' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"getProposalsCount"`
 */
export const readDungeonMasterGetProposalsCount =
  /*#__PURE__*/ createReadContract({
    abi: dungeonMasterAbi,
    functionName: 'getProposalsCount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"owner"`
 */
export const readDungeonMasterOwner = /*#__PURE__*/ createReadContract({
  abi: dungeonMasterAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"proposals"`
 */
export const readDungeonMasterProposals = /*#__PURE__*/ createReadContract({
  abi: dungeonMasterAbi,
  functionName: 'proposals',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dungeonMasterAbi}__
 */
export const writeDungeonMaster = /*#__PURE__*/ createWriteContract({
  abi: dungeonMasterAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"finalizeProposal"`
 */
export const writeDungeonMasterFinalizeProposal =
  /*#__PURE__*/ createWriteContract({
    abi: dungeonMasterAbi,
    functionName: 'finalizeProposal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeDungeonMasterRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: dungeonMasterAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"submitProposal"`
 */
export const writeDungeonMasterSubmitProposal =
  /*#__PURE__*/ createWriteContract({
    abi: dungeonMasterAbi,
    functionName: 'submitProposal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeDungeonMasterTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: dungeonMasterAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"voteOnProposal"`
 */
export const writeDungeonMasterVoteOnProposal =
  /*#__PURE__*/ createWriteContract({
    abi: dungeonMasterAbi,
    functionName: 'voteOnProposal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__
 */
export const simulateDungeonMaster = /*#__PURE__*/ createSimulateContract({
  abi: dungeonMasterAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"finalizeProposal"`
 */
export const simulateDungeonMasterFinalizeProposal =
  /*#__PURE__*/ createSimulateContract({
    abi: dungeonMasterAbi,
    functionName: 'finalizeProposal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateDungeonMasterRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: dungeonMasterAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"submitProposal"`
 */
export const simulateDungeonMasterSubmitProposal =
  /*#__PURE__*/ createSimulateContract({
    abi: dungeonMasterAbi,
    functionName: 'submitProposal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateDungeonMasterTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: dungeonMasterAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"voteOnProposal"`
 */
export const simulateDungeonMasterVoteOnProposal =
  /*#__PURE__*/ createSimulateContract({
    abi: dungeonMasterAbi,
    functionName: 'voteOnProposal',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dungeonMasterAbi}__
 */
export const watchDungeonMasterEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dungeonMasterAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dungeonMasterAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchDungeonMasterOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: dungeonMasterAbi,
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const readPlanetStatsSystem = /*#__PURE__*/ createReadContract({
  abi: planetStatsSystemAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"getMintPrice"`
 */
export const readPlanetStatsSystemGetMintPrice =
  /*#__PURE__*/ createReadContract({
    abi: planetStatsSystemAbi,
    functionName: 'getMintPrice',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"getRarityOdds"`
 */
export const readPlanetStatsSystemGetRarityOdds =
  /*#__PURE__*/ createReadContract({
    abi: planetStatsSystemAbi,
    functionName: 'getRarityOdds',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"getStats"`
 */
export const readPlanetStatsSystemGetStats = /*#__PURE__*/ createReadContract({
  abi: planetStatsSystemAbi,
  functionName: 'getStats',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"owner"`
 */
export const readPlanetStatsSystemOwner = /*#__PURE__*/ createReadContract({
  abi: planetStatsSystemAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const writePlanetStatsSystem = /*#__PURE__*/ createWriteContract({
  abi: planetStatsSystemAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"init"`
 */
export const writePlanetStatsSystemInit = /*#__PURE__*/ createWriteContract({
  abi: planetStatsSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writePlanetStatsSystemRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"sync"`
 */
export const writePlanetStatsSystemSync = /*#__PURE__*/ createWriteContract({
  abi: planetStatsSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writePlanetStatsSystemTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"updateMintRules"`
 */
export const writePlanetStatsSystemUpdateMintRules =
  /*#__PURE__*/ createWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'updateMintRules',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const simulatePlanetStatsSystem = /*#__PURE__*/ createSimulateContract({
  abi: planetStatsSystemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"init"`
 */
export const simulatePlanetStatsSystemInit =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulatePlanetStatsSystemRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"sync"`
 */
export const simulatePlanetStatsSystemSync =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'sync',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulatePlanetStatsSystemTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"updateMintRules"`
 */
export const simulatePlanetStatsSystemUpdateMintRules =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'updateMintRules',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const watchPlanetStatsSystemEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: planetStatsSystemAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchPlanetStatsSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: planetStatsSystemAbi,
    eventName: 'OwnershipTransferred',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"syncAll"`
 */
export const writeSystemControllerSyncAll = /*#__PURE__*/ createWriteContract({
  abi: systemControllerAbi,
  functionName: 'syncAll',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"syncAll"`
 */
export const simulateSystemControllerSyncAll =
  /*#__PURE__*/ createSimulateContract({
    abi: systemControllerAbi,
    functionName: 'syncAll',
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

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link upgradesSystemAbi}__
 */
export const readUpgradesSystem = /*#__PURE__*/ createReadContract({
  abi: upgradesSystemAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"getAllUpgrades"`
 */
export const readUpgradesSystemGetAllUpgrades =
  /*#__PURE__*/ createReadContract({
    abi: upgradesSystemAbi,
    functionName: 'getAllUpgrades',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"getAppliedUpgrades"`
 */
export const readUpgradesSystemGetAppliedUpgrades =
  /*#__PURE__*/ createReadContract({
    abi: upgradesSystemAbi,
    functionName: 'getAppliedUpgrades',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"owner"`
 */
export const readUpgradesSystemOwner = /*#__PURE__*/ createReadContract({
  abi: upgradesSystemAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__
 */
export const writeUpgradesSystem = /*#__PURE__*/ createWriteContract({
  abi: upgradesSystemAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"addUpgrade"`
 */
export const writeUpgradesSystemAddUpgrade = /*#__PURE__*/ createWriteContract({
  abi: upgradesSystemAbi,
  functionName: 'addUpgrade',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"finalizeProposal"`
 */
export const writeUpgradesSystemFinalizeProposal =
  /*#__PURE__*/ createWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'finalizeProposal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"init"`
 */
export const writeUpgradesSystemInit = /*#__PURE__*/ createWriteContract({
  abi: upgradesSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"propose"`
 */
export const writeUpgradesSystemPropose = /*#__PURE__*/ createWriteContract({
  abi: upgradesSystemAbi,
  functionName: 'propose',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"purchaseUpgrade"`
 */
export const writeUpgradesSystemPurchaseUpgrade =
  /*#__PURE__*/ createWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'purchaseUpgrade',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeUpgradesSystemRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"sync"`
 */
export const writeUpgradesSystemSync = /*#__PURE__*/ createWriteContract({
  abi: upgradesSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeUpgradesSystemTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__
 */
export const simulateUpgradesSystem = /*#__PURE__*/ createSimulateContract({
  abi: upgradesSystemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"addUpgrade"`
 */
export const simulateUpgradesSystemAddUpgrade =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'addUpgrade',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"finalizeProposal"`
 */
export const simulateUpgradesSystemFinalizeProposal =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'finalizeProposal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"init"`
 */
export const simulateUpgradesSystemInit = /*#__PURE__*/ createSimulateContract({
  abi: upgradesSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"propose"`
 */
export const simulateUpgradesSystemPropose =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'propose',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"purchaseUpgrade"`
 */
export const simulateUpgradesSystemPurchaseUpgrade =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'purchaseUpgrade',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateUpgradesSystemRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"sync"`
 */
export const simulateUpgradesSystemSync = /*#__PURE__*/ createSimulateContract({
  abi: upgradesSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateUpgradesSystemTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link upgradesSystemAbi}__
 */
export const watchUpgradesSystemEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: upgradesSystemAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link upgradesSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchUpgradesSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: upgradesSystemAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const readErc20 = /*#__PURE__*/ createReadContract({ abi: erc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const readErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const readErc20Name = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const writeErc20 = /*#__PURE__*/ createWriteContract({ abi: erc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const simulateErc20 = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const watchErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc20Abi,
  eventName: 'Transfer',
})
