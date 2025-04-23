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
    inputs: [{ name: 'proposalId', internalType: 'uint256', type: 'uint256' }],
    name: 'getProposal',
    outputs: [
      {
        name: '',
        internalType: 'struct DungeonMaster.Proposal',
        type: 'tuple',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'data', internalType: 'string', type: 'string' },
          { name: 'yesVotes', internalType: 'uint256', type: 'uint256' },
          { name: 'noVotes', internalType: 'uint256', type: 'uint256' },
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'executed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getProposals',
    outputs: [
      {
        name: '',
        internalType: 'struct DungeonMaster.Proposal[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'data', internalType: 'string', type: 'string' },
          { name: 'yesVotes', internalType: 'uint256', type: 'uint256' },
          { name: 'noVotes', internalType: 'uint256', type: 'uint256' },
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'executed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
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
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IScenario
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iScenarioAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'getAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_system', internalType: 'address', type: 'address' }],
    name: 'getEntity',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JobEntity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const jobEntityAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'AlreadyActiveJob' },
  { type: 'error', inputs: [], name: 'NoActiveJob' },
  { type: 'error', inputs: [], name: 'NotScenarioAdmin' },
  {
    type: 'function',
    inputs: [
      { name: 'jobId', internalType: 'string', type: 'string' },
      { name: 'player', internalType: 'address', type: 'address' },
    ],
    name: 'activateJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'activeJobs',
    outputs: [
      { name: 'id', internalType: 'string', type: 'string' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'string', type: 'string' },
      { name: 'title', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'tokenName', internalType: 'string', type: 'string' },
      { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
      { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'string', type: 'string' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'skillSetRequirement', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'availableJobs',
    outputs: [
      { name: 'id', internalType: 'string', type: 'string' },
      { name: 'title', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'tokenName', internalType: 'string', type: 'string' },
      { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
      { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'string', type: 'string' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'skillSetRequirement', internalType: 'uint16', type: 'uint16' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'player', internalType: 'address', type: 'address' }],
    name: 'endJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'player', internalType: 'address', type: 'address' }],
    name: 'getActiveJob',
    outputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAvailableJobs',
    outputs: [
      {
        name: '',
        internalType: 'struct Job[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'string', type: 'string' },
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'tokenName', internalType: 'string', type: 'string' },
          { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
          { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
          { name: 'skillSetName', internalType: 'string', type: 'string' },
          { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
          {
            name: 'skillSetRequirement',
            internalType: 'uint16',
            type: 'uint16',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'jobId', internalType: 'string', type: 'string' }],
    name: 'getJob',
    outputs: [
      {
        name: '',
        internalType: 'struct Job',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'string', type: 'string' },
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'tokenName', internalType: 'string', type: 'string' },
          { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
          { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
          { name: 'skillSetName', internalType: 'string', type: 'string' },
          { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
          {
            name: 'skillSetRequirement',
            internalType: 'uint16',
            type: 'uint16',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: '_system', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
    name: 'jobById',
    outputs: [
      { name: 'id', internalType: 'string', type: 'string' },
      { name: 'title', internalType: 'string', type: 'string' },
      { name: 'description', internalType: 'string', type: 'string' },
      { name: 'tokenName', internalType: 'string', type: 'string' },
      { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
      { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'string', type: 'string' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'skillSetRequirement', internalType: 'uint16', type: 'uint16' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JobSystem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const jobSystemAbi = [
  { type: 'error', inputs: [], name: 'AlreadyRegistered' },
  { type: 'error', inputs: [], name: 'NoTimePassed' },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
    ],
    name: 'activateEntity',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'jobId', internalType: 'string', type: 'string' },
    ],
    name: 'activateJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
    ],
    name: 'finishJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAvailableJobs',
    outputs: [
      {
        name: '',
        internalType: 'struct Job[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'string', type: 'string' },
          { name: 'title', internalType: 'string', type: 'string' },
          { name: 'description', internalType: 'string', type: 'string' },
          { name: 'tokenName', internalType: 'string', type: 'string' },
          { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
          { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
          { name: 'skillSetName', internalType: 'string', type: 'string' },
          { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
          {
            name: 'skillSetRequirement',
            internalType: 'uint16',
            type: 'uint16',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getId',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISystemController', type: 'address' },
      { name: '', internalType: 'contract IScenario', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'systemController', internalType: 'address', type: 'address' },
    ],
    name: 'registerSystem',
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
    inputs: [],
    name: 'getMintPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [{ name: 'newPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'setMintPrice',
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
// PlanetStatsEntity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const planetStatsEntityAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'NotScenarioAdmin' },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'string', type: 'string' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'skillSetRequirement', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'checkSkill',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'statSetName', internalType: 'string', type: 'string' },
      { name: 'startingPoints', internalType: 'uint16[]', type: 'uint16[]' },
      { name: 'points', internalType: 'uint8[]', type: 'uint8[]' },
      { name: 'maxValues', internalType: 'uint16[]', type: 'uint16[]' },
      { name: 'pointNames', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'createGatchaStatSet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'statSetName', internalType: 'string', type: 'string' },
      { name: 'startingPoints', internalType: 'uint16[]', type: 'uint16[]' },
      { name: 'maxValues', internalType: 'uint16[]', type: 'uint16[]' },
      { name: 'pointNames', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'createStatSet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'statSetName', internalType: 'string', type: 'string' }],
    name: 'getAvailablePoints',
    outputs: [{ name: '', internalType: 'uint8[]', type: 'uint8[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'statSetName', internalType: 'string', type: 'string' }],
    name: 'getStartingPoints',
    outputs: [{ name: '', internalType: 'uint16[]', type: 'uint16[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'statSetName', internalType: 'string', type: 'string' },
    ],
    name: 'getStatSet',
    outputs: [{ name: '', internalType: 'uint16[]', type: 'uint16[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'statSetName', internalType: 'string', type: 'string' }],
    name: 'getStatSetMaxValues',
    outputs: [{ name: '', internalType: 'uint16[]', type: 'uint16[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStatSetNames',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'statSetName', internalType: 'string', type: 'string' }],
    name: 'getStatSetPointNames',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStatSetRarityOdds',
    outputs: [{ name: '', internalType: 'uint8[]', type: 'uint8[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: '_system', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'statSetName', internalType: 'string', type: 'string' },
      { name: 'newStats', internalType: 'uint16[]', type: 'uint16[]' },
    ],
    name: 'setStatSet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'rarityOdds', internalType: 'uint8[]', type: 'uint8[]' }],
    name: 'setStatSetRarityOdds',
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
  { type: 'error', inputs: [], name: 'AlreadyRegistered' },
  { type: 'error', inputs: [], name: 'NotScenario' },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
    ],
    name: 'activateEntity',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'string', type: 'string' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'skillSetRequirement', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'checkSkill',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getId',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'controller',
        internalType: 'contract ISystemController',
        type: 'address',
      },
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'systemController', internalType: 'address', type: 'address' },
    ],
    name: 'registerSystem',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Scenario
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const scenarioAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_system', internalType: 'address', type: 'address' }],
    name: 'getEntity',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_admin', internalType: 'address', type: 'address' },
      { name: '_systemController', internalType: 'address', type: 'address' },
      { name: '_metadataURI', internalType: 'string', type: 'string' },
      {
        name: 'systems',
        internalType: 'contract ISystem[]',
        type: 'address[]',
      },
      { name: 'entities', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'metadataURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_admin', internalType: 'address', type: 'address' }],
    name: 'setAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_metadataURI', internalType: 'string', type: 'string' }],
    name: 'setMetadataURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'systemController',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ScenarioFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const scenarioFactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'sysController',
        internalType: 'contract ISystemController',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'scenarioAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ScenarioDeployed',
  },
  {
    type: 'function',
    inputs: [{ name: 'metadataURI', internalType: 'string', type: 'string' }],
    name: 'createScenario',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'player', internalType: 'address', type: 'address' }],
    name: 'getActivePlayerScenarios',
    outputs: [
      { name: '', internalType: 'contract IScenario[]', type: 'address[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'player', internalType: 'address', type: 'address' }],
    name: 'getAllScenarioData',
    outputs: [
      {
        name: '',
        internalType: 'struct ScenarioFactory.ScenarioData[]',
        type: 'tuple[]',
        components: [
          { name: 'metadataURI', internalType: 'string', type: 'string' },
          { name: 'admin', internalType: 'address', type: 'address' },
          { name: 'scenarioAddress', internalType: 'address', type: 'address' },
          { name: 'active', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'players',
    outputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'active', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'scenarios',
    outputs: [{ name: '', internalType: 'contract Scenario', type: 'address' }],
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SupplyEntity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const supplyEntityAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'NotScenarioAdmin' },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
    ],
    name: 'addToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'getTokenAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokenAddresses',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getTokenBalances',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokenNames',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: '_system', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SupplySystem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const supplySystemAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'supplyTokenFactory', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AlreadyRegistered' },
  { type: 'error', inputs: [], name: 'NotAdmin' },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
    ],
    name: 'activateEntity',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'player', internalType: 'address', type: 'address' },
      { name: 'tokenName', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'tokenName', internalType: 'string', type: 'string' },
      { name: 'tokenSymbol', internalType: 'string', type: 'string' },
    ],
    name: 'deployToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getId',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISystemController', type: 'address' },
      { name: '', internalType: 'contract IScenario', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'player', internalType: 'address', type: 'address' },
      { name: 'tokenName', internalType: 'string', type: 'string' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'systemController', internalType: 'address', type: 'address' },
    ],
    name: 'registerSystem',
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
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
    ],
    name: 'activateEntities',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'string', type: 'string' }],
    name: 'getSystem',
    outputs: [{ name: '', internalType: 'contract ISystem', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSystems',
    outputs: [
      { name: '', internalType: 'contract ISystem[]', type: 'address[]' },
    ],
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
    inputs: [
      { name: 'systemAddress', internalType: 'address', type: 'address' },
    ],
    name: 'isSystem',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
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
    inputs: [
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
    inputs: [],
    name: 'scenarioFactory',
    outputs: [
      { name: '', internalType: 'contract ScenarioFactory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'scenarios',
        internalType: 'contract ScenarioFactory',
        type: 'address',
      },
    ],
    name: 'setScenarioFactory',
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
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
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
  { type: 'error', inputs: [], name: 'AlreadyRegistered' },
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
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
    ],
    name: 'activateEntity',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
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
    inputs: [],
    name: 'getId',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract ISystemController', type: 'address' },
      { name: '', internalType: 'contract IScenario', type: 'address' },
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
    inputs: [
      { name: 'systemController', internalType: 'address', type: 'address' },
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"getProposal"`
 */
export const useReadDungeonMasterGetProposal =
  /*#__PURE__*/ createUseReadContract({
    abi: dungeonMasterAbi,
    functionName: 'getProposal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"getProposals"`
 */
export const useReadDungeonMasterGetProposals =
  /*#__PURE__*/ createUseReadContract({
    abi: dungeonMasterAbi,
    functionName: 'getProposals',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useReadIerc20 = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useWriteIerc20 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"burn"`
 */
export const useWriteIerc20Burn = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"mint"`
 */
export const useWriteIerc20Mint = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20Abi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const useSimulateIerc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"burn"`
 */
export const useSimulateIerc20Burn = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"mint"`
 */
export const useSimulateIerc20Mint = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20Abi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iScenarioAbi}__
 */
export const useReadIScenario = /*#__PURE__*/ createUseReadContract({
  abi: iScenarioAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iScenarioAbi}__ and `functionName` set to `"getAdmin"`
 */
export const useReadIScenarioGetAdmin = /*#__PURE__*/ createUseReadContract({
  abi: iScenarioAbi,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iScenarioAbi}__ and `functionName` set to `"getEntity"`
 */
export const useReadIScenarioGetEntity = /*#__PURE__*/ createUseReadContract({
  abi: iScenarioAbi,
  functionName: 'getEntity',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobEntityAbi}__
 */
export const useReadJobEntity = /*#__PURE__*/ createUseReadContract({
  abi: jobEntityAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"activeJobs"`
 */
export const useReadJobEntityActiveJobs = /*#__PURE__*/ createUseReadContract({
  abi: jobEntityAbi,
  functionName: 'activeJobs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"availableJobs"`
 */
export const useReadJobEntityAvailableJobs =
  /*#__PURE__*/ createUseReadContract({
    abi: jobEntityAbi,
    functionName: 'availableJobs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"getActiveJob"`
 */
export const useReadJobEntityGetActiveJob = /*#__PURE__*/ createUseReadContract(
  { abi: jobEntityAbi, functionName: 'getActiveJob' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"getAvailableJobs"`
 */
export const useReadJobEntityGetAvailableJobs =
  /*#__PURE__*/ createUseReadContract({
    abi: jobEntityAbi,
    functionName: 'getAvailableJobs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"getJob"`
 */
export const useReadJobEntityGetJob = /*#__PURE__*/ createUseReadContract({
  abi: jobEntityAbi,
  functionName: 'getJob',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"jobById"`
 */
export const useReadJobEntityJobById = /*#__PURE__*/ createUseReadContract({
  abi: jobEntityAbi,
  functionName: 'jobById',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobEntityAbi}__
 */
export const useWriteJobEntity = /*#__PURE__*/ createUseWriteContract({
  abi: jobEntityAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"activateJob"`
 */
export const useWriteJobEntityActivateJob =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobEntityAbi,
    functionName: 'activateJob',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"addJob"`
 */
export const useWriteJobEntityAddJob = /*#__PURE__*/ createUseWriteContract({
  abi: jobEntityAbi,
  functionName: 'addJob',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"endJob"`
 */
export const useWriteJobEntityEndJob = /*#__PURE__*/ createUseWriteContract({
  abi: jobEntityAbi,
  functionName: 'endJob',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteJobEntityInitialize = /*#__PURE__*/ createUseWriteContract(
  { abi: jobEntityAbi, functionName: 'initialize' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobEntityAbi}__
 */
export const useSimulateJobEntity = /*#__PURE__*/ createUseSimulateContract({
  abi: jobEntityAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"activateJob"`
 */
export const useSimulateJobEntityActivateJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobEntityAbi,
    functionName: 'activateJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"addJob"`
 */
export const useSimulateJobEntityAddJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobEntityAbi,
    functionName: 'addJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"endJob"`
 */
export const useSimulateJobEntityEndJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobEntityAbi,
    functionName: 'endJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateJobEntityInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobSystemAbi}__
 */
export const useReadJobSystem = /*#__PURE__*/ createUseReadContract({
  abi: jobSystemAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"getAvailableJobs"`
 */
export const useReadJobSystemGetAvailableJobs =
  /*#__PURE__*/ createUseReadContract({
    abi: jobSystemAbi,
    functionName: 'getAvailableJobs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"getId"`
 */
export const useReadJobSystemGetId = /*#__PURE__*/ createUseReadContract({
  abi: jobSystemAbi,
  functionName: 'getId',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__
 */
export const useWriteJobSystem = /*#__PURE__*/ createUseWriteContract({
  abi: jobSystemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const useWriteJobSystemActivateEntity =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobSystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"activateJob"`
 */
export const useWriteJobSystemActivateJob =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobSystemAbi,
    functionName: 'activateJob',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"finishJob"`
 */
export const useWriteJobSystemFinishJob = /*#__PURE__*/ createUseWriteContract({
  abi: jobSystemAbi,
  functionName: 'finishJob',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"init"`
 */
export const useWriteJobSystemInit = /*#__PURE__*/ createUseWriteContract({
  abi: jobSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useWriteJobSystemRegisterSystem =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobSystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"sync"`
 */
export const useWriteJobSystemSync = /*#__PURE__*/ createUseWriteContract({
  abi: jobSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__
 */
export const useSimulateJobSystem = /*#__PURE__*/ createUseSimulateContract({
  abi: jobSystemAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const useSimulateJobSystemActivateEntity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobSystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"activateJob"`
 */
export const useSimulateJobSystemActivateJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobSystemAbi,
    functionName: 'activateJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"finishJob"`
 */
export const useSimulateJobSystemFinishJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobSystemAbi,
    functionName: 'finishJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateJobSystemInit = /*#__PURE__*/ createUseSimulateContract(
  { abi: jobSystemAbi, functionName: 'init' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useSimulateJobSystemRegisterSystem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobSystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"sync"`
 */
export const useSimulateJobSystemSync = /*#__PURE__*/ createUseSimulateContract(
  { abi: jobSystemAbi, functionName: 'sync' },
)

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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"getMintPrice"`
 */
export const useReadPlanetGetMintPrice = /*#__PURE__*/ createUseReadContract({
  abi: planetAbi,
  functionName: 'getMintPrice',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const useWritePlanetSetMintPrice = /*#__PURE__*/ createUseWriteContract({
  abi: planetAbi,
  functionName: 'setMintPrice',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const useSimulatePlanetSetMintPrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetAbi,
    functionName: 'setMintPrice',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsEntityAbi}__
 */
export const useReadPlanetStatsEntity = /*#__PURE__*/ createUseReadContract({
  abi: planetStatsEntityAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"checkSkill"`
 */
export const useReadPlanetStatsEntityCheckSkill =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'checkSkill',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getAvailablePoints"`
 */
export const useReadPlanetStatsEntityGetAvailablePoints =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getAvailablePoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStartingPoints"`
 */
export const useReadPlanetStatsEntityGetStartingPoints =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStartingPoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStatSet"`
 */
export const useReadPlanetStatsEntityGetStatSet =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStatSet',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStatSetMaxValues"`
 */
export const useReadPlanetStatsEntityGetStatSetMaxValues =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStatSetMaxValues',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStatSetNames"`
 */
export const useReadPlanetStatsEntityGetStatSetNames =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStatSetNames',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStatSetPointNames"`
 */
export const useReadPlanetStatsEntityGetStatSetPointNames =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStatSetPointNames',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStatSetRarityOdds"`
 */
export const useReadPlanetStatsEntityGetStatSetRarityOdds =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStatSetRarityOdds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsEntityAbi}__
 */
export const useWritePlanetStatsEntity = /*#__PURE__*/ createUseWriteContract({
  abi: planetStatsEntityAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const useWritePlanetStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const useWritePlanetStatsEntityCreateStatSet =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsEntityAbi,
    functionName: 'createStatSet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useWritePlanetStatsEntityInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const useWritePlanetStatsEntitySetStatSet =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsEntityAbi,
    functionName: 'setStatSet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const useWritePlanetStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__
 */
export const useSimulatePlanetStatsEntity =
  /*#__PURE__*/ createUseSimulateContract({ abi: planetStatsEntityAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const useSimulatePlanetStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const useSimulatePlanetStatsEntityCreateStatSet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsEntityAbi,
    functionName: 'createStatSet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulatePlanetStatsEntityInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const useSimulatePlanetStatsEntitySetStatSet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsEntityAbi,
    functionName: 'setStatSet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const useSimulatePlanetStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const useReadPlanetStatsSystem = /*#__PURE__*/ createUseReadContract({
  abi: planetStatsSystemAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"checkSkill"`
 */
export const useReadPlanetStatsSystemCheckSkill =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsSystemAbi,
    functionName: 'checkSkill',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"getId"`
 */
export const useReadPlanetStatsSystemGetId =
  /*#__PURE__*/ createUseReadContract({
    abi: planetStatsSystemAbi,
    functionName: 'getId',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const useWritePlanetStatsSystem = /*#__PURE__*/ createUseWriteContract({
  abi: planetStatsSystemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const useWritePlanetStatsSystemActivateEntity =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'activateEntity',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useWritePlanetStatsSystemRegisterSystem =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'registerSystem',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const useSimulatePlanetStatsSystem =
  /*#__PURE__*/ createUseSimulateContract({ abi: planetStatsSystemAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const useSimulatePlanetStatsSystemActivateEntity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"init"`
 */
export const useSimulatePlanetStatsSystemInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useSimulatePlanetStatsSystemRegisterSystem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'registerSystem',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioAbi}__
 */
export const useReadScenario = /*#__PURE__*/ createUseReadContract({
  abi: scenarioAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"admin"`
 */
export const useReadScenarioAdmin = /*#__PURE__*/ createUseReadContract({
  abi: scenarioAbi,
  functionName: 'admin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"getAdmin"`
 */
export const useReadScenarioGetAdmin = /*#__PURE__*/ createUseReadContract({
  abi: scenarioAbi,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"getEntity"`
 */
export const useReadScenarioGetEntity = /*#__PURE__*/ createUseReadContract({
  abi: scenarioAbi,
  functionName: 'getEntity',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"metadataURI"`
 */
export const useReadScenarioMetadataUri = /*#__PURE__*/ createUseReadContract({
  abi: scenarioAbi,
  functionName: 'metadataURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"systemController"`
 */
export const useReadScenarioSystemController =
  /*#__PURE__*/ createUseReadContract({
    abi: scenarioAbi,
    functionName: 'systemController',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link scenarioAbi}__
 */
export const useWriteScenario = /*#__PURE__*/ createUseWriteContract({
  abi: scenarioAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteScenarioInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: scenarioAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"setAdmin"`
 */
export const useWriteScenarioSetAdmin = /*#__PURE__*/ createUseWriteContract({
  abi: scenarioAbi,
  functionName: 'setAdmin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"setMetadataURI"`
 */
export const useWriteScenarioSetMetadataUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: scenarioAbi,
    functionName: 'setMetadataURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link scenarioAbi}__
 */
export const useSimulateScenario = /*#__PURE__*/ createUseSimulateContract({
  abi: scenarioAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateScenarioInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: scenarioAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"setAdmin"`
 */
export const useSimulateScenarioSetAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: scenarioAbi,
    functionName: 'setAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"setMetadataURI"`
 */
export const useSimulateScenarioSetMetadataUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: scenarioAbi,
    functionName: 'setMetadataURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioFactoryAbi}__
 */
export const useReadScenarioFactory = /*#__PURE__*/ createUseReadContract({
  abi: scenarioFactoryAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"getActivePlayerScenarios"`
 */
export const useReadScenarioFactoryGetActivePlayerScenarios =
  /*#__PURE__*/ createUseReadContract({
    abi: scenarioFactoryAbi,
    functionName: 'getActivePlayerScenarios',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"getAllScenarioData"`
 */
export const useReadScenarioFactoryGetAllScenarioData =
  /*#__PURE__*/ createUseReadContract({
    abi: scenarioFactoryAbi,
    functionName: 'getAllScenarioData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"players"`
 */
export const useReadScenarioFactoryPlayers =
  /*#__PURE__*/ createUseReadContract({
    abi: scenarioFactoryAbi,
    functionName: 'players',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"scenarios"`
 */
export const useReadScenarioFactoryScenarios =
  /*#__PURE__*/ createUseReadContract({
    abi: scenarioFactoryAbi,
    functionName: 'scenarios',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"systemController"`
 */
export const useReadScenarioFactorySystemController =
  /*#__PURE__*/ createUseReadContract({
    abi: scenarioFactoryAbi,
    functionName: 'systemController',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link scenarioFactoryAbi}__
 */
export const useWriteScenarioFactory = /*#__PURE__*/ createUseWriteContract({
  abi: scenarioFactoryAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"createScenario"`
 */
export const useWriteScenarioFactoryCreateScenario =
  /*#__PURE__*/ createUseWriteContract({
    abi: scenarioFactoryAbi,
    functionName: 'createScenario',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link scenarioFactoryAbi}__
 */
export const useSimulateScenarioFactory =
  /*#__PURE__*/ createUseSimulateContract({ abi: scenarioFactoryAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"createScenario"`
 */
export const useSimulateScenarioFactoryCreateScenario =
  /*#__PURE__*/ createUseSimulateContract({
    abi: scenarioFactoryAbi,
    functionName: 'createScenario',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link scenarioFactoryAbi}__
 */
export const useWatchScenarioFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: scenarioFactoryAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `eventName` set to `"ScenarioDeployed"`
 */
export const useWatchScenarioFactoryScenarioDeployedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: scenarioFactoryAbi,
    eventName: 'ScenarioDeployed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supplyEntityAbi}__
 */
export const useReadSupplyEntity = /*#__PURE__*/ createUseReadContract({
  abi: supplyEntityAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"getTokenAddress"`
 */
export const useReadSupplyEntityGetTokenAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: supplyEntityAbi,
    functionName: 'getTokenAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"getTokenAddresses"`
 */
export const useReadSupplyEntityGetTokenAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: supplyEntityAbi,
    functionName: 'getTokenAddresses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"getTokenBalances"`
 */
export const useReadSupplyEntityGetTokenBalances =
  /*#__PURE__*/ createUseReadContract({
    abi: supplyEntityAbi,
    functionName: 'getTokenBalances',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"getTokenNames"`
 */
export const useReadSupplyEntityGetTokenNames =
  /*#__PURE__*/ createUseReadContract({
    abi: supplyEntityAbi,
    functionName: 'getTokenNames',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplyEntityAbi}__
 */
export const useWriteSupplyEntity = /*#__PURE__*/ createUseWriteContract({
  abi: supplyEntityAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"addToken"`
 */
export const useWriteSupplyEntityAddToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: supplyEntityAbi,
    functionName: 'addToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteSupplyEntityInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: supplyEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplyEntityAbi}__
 */
export const useSimulateSupplyEntity = /*#__PURE__*/ createUseSimulateContract({
  abi: supplyEntityAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"addToken"`
 */
export const useSimulateSupplyEntityAddToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplyEntityAbi,
    functionName: 'addToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateSupplyEntityInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplyEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supplySystemAbi}__
 */
export const useReadSupplySystem = /*#__PURE__*/ createUseReadContract({
  abi: supplySystemAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"getId"`
 */
export const useReadSupplySystemGetId = /*#__PURE__*/ createUseReadContract({
  abi: supplySystemAbi,
  functionName: 'getId',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__
 */
export const useWriteSupplySystem = /*#__PURE__*/ createUseWriteContract({
  abi: supplySystemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const useWriteSupplySystemActivateEntity =
  /*#__PURE__*/ createUseWriteContract({
    abi: supplySystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteSupplySystemBurn = /*#__PURE__*/ createUseWriteContract({
  abi: supplySystemAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"deployToken"`
 */
export const useWriteSupplySystemDeployToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: supplySystemAbi,
    functionName: 'deployToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"init"`
 */
export const useWriteSupplySystemInit = /*#__PURE__*/ createUseWriteContract({
  abi: supplySystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteSupplySystemMint = /*#__PURE__*/ createUseWriteContract({
  abi: supplySystemAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useWriteSupplySystemRegisterSystem =
  /*#__PURE__*/ createUseWriteContract({
    abi: supplySystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"sync"`
 */
export const useWriteSupplySystemSync = /*#__PURE__*/ createUseWriteContract({
  abi: supplySystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__
 */
export const useSimulateSupplySystem = /*#__PURE__*/ createUseSimulateContract({
  abi: supplySystemAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const useSimulateSupplySystemActivateEntity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplySystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateSupplySystemBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplySystemAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"deployToken"`
 */
export const useSimulateSupplySystemDeployToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplySystemAbi,
    functionName: 'deployToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateSupplySystemInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplySystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateSupplySystemMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplySystemAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useSimulateSupplySystemRegisterSystem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplySystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"sync"`
 */
export const useSimulateSupplySystemSync =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplySystemAbi,
    functionName: 'sync',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"getSystems"`
 */
export const useReadSystemControllerGetSystems =
  /*#__PURE__*/ createUseReadContract({
    abi: systemControllerAbi,
    functionName: 'getSystems',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"isSystem"`
 */
export const useReadSystemControllerIsSystem =
  /*#__PURE__*/ createUseReadContract({
    abi: systemControllerAbi,
    functionName: 'isSystem',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"owner"`
 */
export const useReadSystemControllerOwner = /*#__PURE__*/ createUseReadContract(
  { abi: systemControllerAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"scenarioFactory"`
 */
export const useReadSystemControllerScenarioFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: systemControllerAbi,
    functionName: 'scenarioFactory',
  })

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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"activateEntities"`
 */
export const useWriteSystemControllerActivateEntities =
  /*#__PURE__*/ createUseWriteContract({
    abi: systemControllerAbi,
    functionName: 'activateEntities',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"setScenarioFactory"`
 */
export const useWriteSystemControllerSetScenarioFactory =
  /*#__PURE__*/ createUseWriteContract({
    abi: systemControllerAbi,
    functionName: 'setScenarioFactory',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"activateEntities"`
 */
export const useSimulateSystemControllerActivateEntities =
  /*#__PURE__*/ createUseSimulateContract({
    abi: systemControllerAbi,
    functionName: 'activateEntities',
  })

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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"setScenarioFactory"`
 */
export const useSimulateSystemControllerSetScenarioFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: systemControllerAbi,
    functionName: 'setScenarioFactory',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"getId"`
 */
export const useReadUpgradesSystemGetId = /*#__PURE__*/ createUseReadContract({
  abi: upgradesSystemAbi,
  functionName: 'getId',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const useWriteUpgradesSystemActivateEntity =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'activateEntity',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"init"`
 */
export const useWriteUpgradesSystemInit = /*#__PURE__*/ createUseWriteContract({
  abi: upgradesSystemAbi,
  functionName: 'init',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useWriteUpgradesSystemRegisterSystem =
  /*#__PURE__*/ createUseWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'registerSystem',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const useSimulateUpgradesSystemActivateEntity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"addUpgrade"`
 */
export const useSimulateUpgradesSystemAddUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'addUpgrade',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"purchaseUpgrade"`
 */
export const useSimulateUpgradesSystemPurchaseUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'purchaseUpgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useSimulateUpgradesSystemRegisterSystem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'registerSystem',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"getProposal"`
 */
export const readDungeonMasterGetProposal = /*#__PURE__*/ createReadContract({
  abi: dungeonMasterAbi,
  functionName: 'getProposal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dungeonMasterAbi}__ and `functionName` set to `"getProposals"`
 */
export const readDungeonMasterGetProposals = /*#__PURE__*/ createReadContract({
  abi: dungeonMasterAbi,
  functionName: 'getProposals',
})

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
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const readIerc20 = /*#__PURE__*/ createReadContract({ abi: ierc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const writeIerc20 = /*#__PURE__*/ createWriteContract({ abi: ierc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"burn"`
 */
export const writeIerc20Burn = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"mint"`
 */
export const writeIerc20Mint = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const simulateIerc20 = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"burn"`
 */
export const simulateIerc20Burn = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"mint"`
 */
export const simulateIerc20Mint = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'mint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iScenarioAbi}__
 */
export const readIScenario = /*#__PURE__*/ createReadContract({
  abi: iScenarioAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iScenarioAbi}__ and `functionName` set to `"getAdmin"`
 */
export const readIScenarioGetAdmin = /*#__PURE__*/ createReadContract({
  abi: iScenarioAbi,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iScenarioAbi}__ and `functionName` set to `"getEntity"`
 */
export const readIScenarioGetEntity = /*#__PURE__*/ createReadContract({
  abi: iScenarioAbi,
  functionName: 'getEntity',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobEntityAbi}__
 */
export const readJobEntity = /*#__PURE__*/ createReadContract({
  abi: jobEntityAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"activeJobs"`
 */
export const readJobEntityActiveJobs = /*#__PURE__*/ createReadContract({
  abi: jobEntityAbi,
  functionName: 'activeJobs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"availableJobs"`
 */
export const readJobEntityAvailableJobs = /*#__PURE__*/ createReadContract({
  abi: jobEntityAbi,
  functionName: 'availableJobs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"getActiveJob"`
 */
export const readJobEntityGetActiveJob = /*#__PURE__*/ createReadContract({
  abi: jobEntityAbi,
  functionName: 'getActiveJob',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"getAvailableJobs"`
 */
export const readJobEntityGetAvailableJobs = /*#__PURE__*/ createReadContract({
  abi: jobEntityAbi,
  functionName: 'getAvailableJobs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"getJob"`
 */
export const readJobEntityGetJob = /*#__PURE__*/ createReadContract({
  abi: jobEntityAbi,
  functionName: 'getJob',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"jobById"`
 */
export const readJobEntityJobById = /*#__PURE__*/ createReadContract({
  abi: jobEntityAbi,
  functionName: 'jobById',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobEntityAbi}__
 */
export const writeJobEntity = /*#__PURE__*/ createWriteContract({
  abi: jobEntityAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"activateJob"`
 */
export const writeJobEntityActivateJob = /*#__PURE__*/ createWriteContract({
  abi: jobEntityAbi,
  functionName: 'activateJob',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"addJob"`
 */
export const writeJobEntityAddJob = /*#__PURE__*/ createWriteContract({
  abi: jobEntityAbi,
  functionName: 'addJob',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"endJob"`
 */
export const writeJobEntityEndJob = /*#__PURE__*/ createWriteContract({
  abi: jobEntityAbi,
  functionName: 'endJob',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const writeJobEntityInitialize = /*#__PURE__*/ createWriteContract({
  abi: jobEntityAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobEntityAbi}__
 */
export const simulateJobEntity = /*#__PURE__*/ createSimulateContract({
  abi: jobEntityAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"activateJob"`
 */
export const simulateJobEntityActivateJob =
  /*#__PURE__*/ createSimulateContract({
    abi: jobEntityAbi,
    functionName: 'activateJob',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"addJob"`
 */
export const simulateJobEntityAddJob = /*#__PURE__*/ createSimulateContract({
  abi: jobEntityAbi,
  functionName: 'addJob',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"endJob"`
 */
export const simulateJobEntityEndJob = /*#__PURE__*/ createSimulateContract({
  abi: jobEntityAbi,
  functionName: 'endJob',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateJobEntityInitialize = /*#__PURE__*/ createSimulateContract(
  { abi: jobEntityAbi, functionName: 'initialize' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobSystemAbi}__
 */
export const readJobSystem = /*#__PURE__*/ createReadContract({
  abi: jobSystemAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"getAvailableJobs"`
 */
export const readJobSystemGetAvailableJobs = /*#__PURE__*/ createReadContract({
  abi: jobSystemAbi,
  functionName: 'getAvailableJobs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"getId"`
 */
export const readJobSystemGetId = /*#__PURE__*/ createReadContract({
  abi: jobSystemAbi,
  functionName: 'getId',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__
 */
export const writeJobSystem = /*#__PURE__*/ createWriteContract({
  abi: jobSystemAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const writeJobSystemActivateEntity = /*#__PURE__*/ createWriteContract({
  abi: jobSystemAbi,
  functionName: 'activateEntity',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"activateJob"`
 */
export const writeJobSystemActivateJob = /*#__PURE__*/ createWriteContract({
  abi: jobSystemAbi,
  functionName: 'activateJob',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"finishJob"`
 */
export const writeJobSystemFinishJob = /*#__PURE__*/ createWriteContract({
  abi: jobSystemAbi,
  functionName: 'finishJob',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"init"`
 */
export const writeJobSystemInit = /*#__PURE__*/ createWriteContract({
  abi: jobSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const writeJobSystemRegisterSystem = /*#__PURE__*/ createWriteContract({
  abi: jobSystemAbi,
  functionName: 'registerSystem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"sync"`
 */
export const writeJobSystemSync = /*#__PURE__*/ createWriteContract({
  abi: jobSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__
 */
export const simulateJobSystem = /*#__PURE__*/ createSimulateContract({
  abi: jobSystemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const simulateJobSystemActivateEntity =
  /*#__PURE__*/ createSimulateContract({
    abi: jobSystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"activateJob"`
 */
export const simulateJobSystemActivateJob =
  /*#__PURE__*/ createSimulateContract({
    abi: jobSystemAbi,
    functionName: 'activateJob',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"finishJob"`
 */
export const simulateJobSystemFinishJob = /*#__PURE__*/ createSimulateContract({
  abi: jobSystemAbi,
  functionName: 'finishJob',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"init"`
 */
export const simulateJobSystemInit = /*#__PURE__*/ createSimulateContract({
  abi: jobSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const simulateJobSystemRegisterSystem =
  /*#__PURE__*/ createSimulateContract({
    abi: jobSystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"sync"`
 */
export const simulateJobSystemSync = /*#__PURE__*/ createSimulateContract({
  abi: jobSystemAbi,
  functionName: 'sync',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"getMintPrice"`
 */
export const readPlanetGetMintPrice = /*#__PURE__*/ createReadContract({
  abi: planetAbi,
  functionName: 'getMintPrice',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const writePlanetSetMintPrice = /*#__PURE__*/ createWriteContract({
  abi: planetAbi,
  functionName: 'setMintPrice',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const simulatePlanetSetMintPrice = /*#__PURE__*/ createSimulateContract({
  abi: planetAbi,
  functionName: 'setMintPrice',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsEntityAbi}__
 */
export const readPlanetStatsEntity = /*#__PURE__*/ createReadContract({
  abi: planetStatsEntityAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"checkSkill"`
 */
export const readPlanetStatsEntityCheckSkill = /*#__PURE__*/ createReadContract(
  { abi: planetStatsEntityAbi, functionName: 'checkSkill' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getAvailablePoints"`
 */
export const readPlanetStatsEntityGetAvailablePoints =
  /*#__PURE__*/ createReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getAvailablePoints',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStartingPoints"`
 */
export const readPlanetStatsEntityGetStartingPoints =
  /*#__PURE__*/ createReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStartingPoints',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStatSet"`
 */
export const readPlanetStatsEntityGetStatSet = /*#__PURE__*/ createReadContract(
  { abi: planetStatsEntityAbi, functionName: 'getStatSet' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStatSetMaxValues"`
 */
export const readPlanetStatsEntityGetStatSetMaxValues =
  /*#__PURE__*/ createReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStatSetMaxValues',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStatSetNames"`
 */
export const readPlanetStatsEntityGetStatSetNames =
  /*#__PURE__*/ createReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStatSetNames',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStatSetPointNames"`
 */
export const readPlanetStatsEntityGetStatSetPointNames =
  /*#__PURE__*/ createReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStatSetPointNames',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"getStatSetRarityOdds"`
 */
export const readPlanetStatsEntityGetStatSetRarityOdds =
  /*#__PURE__*/ createReadContract({
    abi: planetStatsEntityAbi,
    functionName: 'getStatSetRarityOdds',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsEntityAbi}__
 */
export const writePlanetStatsEntity = /*#__PURE__*/ createWriteContract({
  abi: planetStatsEntityAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const writePlanetStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createWriteContract({
    abi: planetStatsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const writePlanetStatsEntityCreateStatSet =
  /*#__PURE__*/ createWriteContract({
    abi: planetStatsEntityAbi,
    functionName: 'createStatSet',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const writePlanetStatsEntityInitialize =
  /*#__PURE__*/ createWriteContract({
    abi: planetStatsEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const writePlanetStatsEntitySetStatSet =
  /*#__PURE__*/ createWriteContract({
    abi: planetStatsEntityAbi,
    functionName: 'setStatSet',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const writePlanetStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createWriteContract({
    abi: planetStatsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__
 */
export const simulatePlanetStatsEntity = /*#__PURE__*/ createSimulateContract({
  abi: planetStatsEntityAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const simulatePlanetStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const simulatePlanetStatsEntityCreateStatSet =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsEntityAbi,
    functionName: 'createStatSet',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const simulatePlanetStatsEntityInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const simulatePlanetStatsEntitySetStatSet =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsEntityAbi,
    functionName: 'setStatSet',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const simulatePlanetStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const readPlanetStatsSystem = /*#__PURE__*/ createReadContract({
  abi: planetStatsSystemAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"checkSkill"`
 */
export const readPlanetStatsSystemCheckSkill = /*#__PURE__*/ createReadContract(
  { abi: planetStatsSystemAbi, functionName: 'checkSkill' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"getId"`
 */
export const readPlanetStatsSystemGetId = /*#__PURE__*/ createReadContract({
  abi: planetStatsSystemAbi,
  functionName: 'getId',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const writePlanetStatsSystem = /*#__PURE__*/ createWriteContract({
  abi: planetStatsSystemAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const writePlanetStatsSystemActivateEntity =
  /*#__PURE__*/ createWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"init"`
 */
export const writePlanetStatsSystemInit = /*#__PURE__*/ createWriteContract({
  abi: planetStatsSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const writePlanetStatsSystemRegisterSystem =
  /*#__PURE__*/ createWriteContract({
    abi: planetStatsSystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"sync"`
 */
export const writePlanetStatsSystemSync = /*#__PURE__*/ createWriteContract({
  abi: planetStatsSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__
 */
export const simulatePlanetStatsSystem = /*#__PURE__*/ createSimulateContract({
  abi: planetStatsSystemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const simulatePlanetStatsSystemActivateEntity =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'activateEntity',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetStatsSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const simulatePlanetStatsSystemRegisterSystem =
  /*#__PURE__*/ createSimulateContract({
    abi: planetStatsSystemAbi,
    functionName: 'registerSystem',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioAbi}__
 */
export const readScenario = /*#__PURE__*/ createReadContract({
  abi: scenarioAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"admin"`
 */
export const readScenarioAdmin = /*#__PURE__*/ createReadContract({
  abi: scenarioAbi,
  functionName: 'admin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"getAdmin"`
 */
export const readScenarioGetAdmin = /*#__PURE__*/ createReadContract({
  abi: scenarioAbi,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"getEntity"`
 */
export const readScenarioGetEntity = /*#__PURE__*/ createReadContract({
  abi: scenarioAbi,
  functionName: 'getEntity',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"metadataURI"`
 */
export const readScenarioMetadataUri = /*#__PURE__*/ createReadContract({
  abi: scenarioAbi,
  functionName: 'metadataURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"systemController"`
 */
export const readScenarioSystemController = /*#__PURE__*/ createReadContract({
  abi: scenarioAbi,
  functionName: 'systemController',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link scenarioAbi}__
 */
export const writeScenario = /*#__PURE__*/ createWriteContract({
  abi: scenarioAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"initialize"`
 */
export const writeScenarioInitialize = /*#__PURE__*/ createWriteContract({
  abi: scenarioAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"setAdmin"`
 */
export const writeScenarioSetAdmin = /*#__PURE__*/ createWriteContract({
  abi: scenarioAbi,
  functionName: 'setAdmin',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"setMetadataURI"`
 */
export const writeScenarioSetMetadataUri = /*#__PURE__*/ createWriteContract({
  abi: scenarioAbi,
  functionName: 'setMetadataURI',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link scenarioAbi}__
 */
export const simulateScenario = /*#__PURE__*/ createSimulateContract({
  abi: scenarioAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateScenarioInitialize = /*#__PURE__*/ createSimulateContract({
  abi: scenarioAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"setAdmin"`
 */
export const simulateScenarioSetAdmin = /*#__PURE__*/ createSimulateContract({
  abi: scenarioAbi,
  functionName: 'setAdmin',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link scenarioAbi}__ and `functionName` set to `"setMetadataURI"`
 */
export const simulateScenarioSetMetadataUri =
  /*#__PURE__*/ createSimulateContract({
    abi: scenarioAbi,
    functionName: 'setMetadataURI',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioFactoryAbi}__
 */
export const readScenarioFactory = /*#__PURE__*/ createReadContract({
  abi: scenarioFactoryAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"getActivePlayerScenarios"`
 */
export const readScenarioFactoryGetActivePlayerScenarios =
  /*#__PURE__*/ createReadContract({
    abi: scenarioFactoryAbi,
    functionName: 'getActivePlayerScenarios',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"getAllScenarioData"`
 */
export const readScenarioFactoryGetAllScenarioData =
  /*#__PURE__*/ createReadContract({
    abi: scenarioFactoryAbi,
    functionName: 'getAllScenarioData',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"players"`
 */
export const readScenarioFactoryPlayers = /*#__PURE__*/ createReadContract({
  abi: scenarioFactoryAbi,
  functionName: 'players',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"scenarios"`
 */
export const readScenarioFactoryScenarios = /*#__PURE__*/ createReadContract({
  abi: scenarioFactoryAbi,
  functionName: 'scenarios',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"systemController"`
 */
export const readScenarioFactorySystemController =
  /*#__PURE__*/ createReadContract({
    abi: scenarioFactoryAbi,
    functionName: 'systemController',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link scenarioFactoryAbi}__
 */
export const writeScenarioFactory = /*#__PURE__*/ createWriteContract({
  abi: scenarioFactoryAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"createScenario"`
 */
export const writeScenarioFactoryCreateScenario =
  /*#__PURE__*/ createWriteContract({
    abi: scenarioFactoryAbi,
    functionName: 'createScenario',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link scenarioFactoryAbi}__
 */
export const simulateScenarioFactory = /*#__PURE__*/ createSimulateContract({
  abi: scenarioFactoryAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `functionName` set to `"createScenario"`
 */
export const simulateScenarioFactoryCreateScenario =
  /*#__PURE__*/ createSimulateContract({
    abi: scenarioFactoryAbi,
    functionName: 'createScenario',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link scenarioFactoryAbi}__
 */
export const watchScenarioFactoryEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: scenarioFactoryAbi },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link scenarioFactoryAbi}__ and `eventName` set to `"ScenarioDeployed"`
 */
export const watchScenarioFactoryScenarioDeployedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: scenarioFactoryAbi,
    eventName: 'ScenarioDeployed',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supplyEntityAbi}__
 */
export const readSupplyEntity = /*#__PURE__*/ createReadContract({
  abi: supplyEntityAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"getTokenAddress"`
 */
export const readSupplyEntityGetTokenAddress = /*#__PURE__*/ createReadContract(
  { abi: supplyEntityAbi, functionName: 'getTokenAddress' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"getTokenAddresses"`
 */
export const readSupplyEntityGetTokenAddresses =
  /*#__PURE__*/ createReadContract({
    abi: supplyEntityAbi,
    functionName: 'getTokenAddresses',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"getTokenBalances"`
 */
export const readSupplyEntityGetTokenBalances =
  /*#__PURE__*/ createReadContract({
    abi: supplyEntityAbi,
    functionName: 'getTokenBalances',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"getTokenNames"`
 */
export const readSupplyEntityGetTokenNames = /*#__PURE__*/ createReadContract({
  abi: supplyEntityAbi,
  functionName: 'getTokenNames',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplyEntityAbi}__
 */
export const writeSupplyEntity = /*#__PURE__*/ createWriteContract({
  abi: supplyEntityAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"addToken"`
 */
export const writeSupplyEntityAddToken = /*#__PURE__*/ createWriteContract({
  abi: supplyEntityAbi,
  functionName: 'addToken',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const writeSupplyEntityInitialize = /*#__PURE__*/ createWriteContract({
  abi: supplyEntityAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplyEntityAbi}__
 */
export const simulateSupplyEntity = /*#__PURE__*/ createSimulateContract({
  abi: supplyEntityAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"addToken"`
 */
export const simulateSupplyEntityAddToken =
  /*#__PURE__*/ createSimulateContract({
    abi: supplyEntityAbi,
    functionName: 'addToken',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplyEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateSupplyEntityInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: supplyEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supplySystemAbi}__
 */
export const readSupplySystem = /*#__PURE__*/ createReadContract({
  abi: supplySystemAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"getId"`
 */
export const readSupplySystemGetId = /*#__PURE__*/ createReadContract({
  abi: supplySystemAbi,
  functionName: 'getId',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__
 */
export const writeSupplySystem = /*#__PURE__*/ createWriteContract({
  abi: supplySystemAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const writeSupplySystemActivateEntity =
  /*#__PURE__*/ createWriteContract({
    abi: supplySystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"burn"`
 */
export const writeSupplySystemBurn = /*#__PURE__*/ createWriteContract({
  abi: supplySystemAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"deployToken"`
 */
export const writeSupplySystemDeployToken = /*#__PURE__*/ createWriteContract({
  abi: supplySystemAbi,
  functionName: 'deployToken',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"init"`
 */
export const writeSupplySystemInit = /*#__PURE__*/ createWriteContract({
  abi: supplySystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"mint"`
 */
export const writeSupplySystemMint = /*#__PURE__*/ createWriteContract({
  abi: supplySystemAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const writeSupplySystemRegisterSystem =
  /*#__PURE__*/ createWriteContract({
    abi: supplySystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"sync"`
 */
export const writeSupplySystemSync = /*#__PURE__*/ createWriteContract({
  abi: supplySystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__
 */
export const simulateSupplySystem = /*#__PURE__*/ createSimulateContract({
  abi: supplySystemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const simulateSupplySystemActivateEntity =
  /*#__PURE__*/ createSimulateContract({
    abi: supplySystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"burn"`
 */
export const simulateSupplySystemBurn = /*#__PURE__*/ createSimulateContract({
  abi: supplySystemAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"deployToken"`
 */
export const simulateSupplySystemDeployToken =
  /*#__PURE__*/ createSimulateContract({
    abi: supplySystemAbi,
    functionName: 'deployToken',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"init"`
 */
export const simulateSupplySystemInit = /*#__PURE__*/ createSimulateContract({
  abi: supplySystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"mint"`
 */
export const simulateSupplySystemMint = /*#__PURE__*/ createSimulateContract({
  abi: supplySystemAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const simulateSupplySystemRegisterSystem =
  /*#__PURE__*/ createSimulateContract({
    abi: supplySystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"sync"`
 */
export const simulateSupplySystemSync = /*#__PURE__*/ createSimulateContract({
  abi: supplySystemAbi,
  functionName: 'sync',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"getSystems"`
 */
export const readSystemControllerGetSystems = /*#__PURE__*/ createReadContract({
  abi: systemControllerAbi,
  functionName: 'getSystems',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"isSystem"`
 */
export const readSystemControllerIsSystem = /*#__PURE__*/ createReadContract({
  abi: systemControllerAbi,
  functionName: 'isSystem',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"owner"`
 */
export const readSystemControllerOwner = /*#__PURE__*/ createReadContract({
  abi: systemControllerAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"scenarioFactory"`
 */
export const readSystemControllerScenarioFactory =
  /*#__PURE__*/ createReadContract({
    abi: systemControllerAbi,
    functionName: 'scenarioFactory',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"activateEntities"`
 */
export const writeSystemControllerActivateEntities =
  /*#__PURE__*/ createWriteContract({
    abi: systemControllerAbi,
    functionName: 'activateEntities',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"setScenarioFactory"`
 */
export const writeSystemControllerSetScenarioFactory =
  /*#__PURE__*/ createWriteContract({
    abi: systemControllerAbi,
    functionName: 'setScenarioFactory',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"activateEntities"`
 */
export const simulateSystemControllerActivateEntities =
  /*#__PURE__*/ createSimulateContract({
    abi: systemControllerAbi,
    functionName: 'activateEntities',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemControllerAbi}__ and `functionName` set to `"setScenarioFactory"`
 */
export const simulateSystemControllerSetScenarioFactory =
  /*#__PURE__*/ createSimulateContract({
    abi: systemControllerAbi,
    functionName: 'setScenarioFactory',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"getId"`
 */
export const readUpgradesSystemGetId = /*#__PURE__*/ createReadContract({
  abi: upgradesSystemAbi,
  functionName: 'getId',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const writeUpgradesSystemActivateEntity =
  /*#__PURE__*/ createWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"addUpgrade"`
 */
export const writeUpgradesSystemAddUpgrade = /*#__PURE__*/ createWriteContract({
  abi: upgradesSystemAbi,
  functionName: 'addUpgrade',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"init"`
 */
export const writeUpgradesSystemInit = /*#__PURE__*/ createWriteContract({
  abi: upgradesSystemAbi,
  functionName: 'init',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const writeUpgradesSystemRegisterSystem =
  /*#__PURE__*/ createWriteContract({
    abi: upgradesSystemAbi,
    functionName: 'registerSystem',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const simulateUpgradesSystemActivateEntity =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'activateEntity',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"init"`
 */
export const simulateUpgradesSystemInit = /*#__PURE__*/ createSimulateContract({
  abi: upgradesSystemAbi,
  functionName: 'init',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link upgradesSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const simulateUpgradesSystemRegisterSystem =
  /*#__PURE__*/ createSimulateContract({
    abi: upgradesSystemAbi,
    functionName: 'registerSystem',
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
