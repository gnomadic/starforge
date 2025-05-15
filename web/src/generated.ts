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
// IJobEntity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iJobEntityAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'jobId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'activateJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'title', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
      { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'skillSetRequirement', internalType: 'uint16', type: 'uint16' },
      { name: 'skillSetBoost', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'addJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'endJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getActiveJob',
    outputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32' },
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
          { name: 'id', internalType: 'bytes32', type: 'bytes32' },
          { name: 'title', internalType: 'bytes32', type: 'bytes32' },
          { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
          { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
          { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
          { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
          {
            name: 'skillSetRequirement',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'skillSetBoost', internalType: 'uint16', type: 'uint16' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'jobId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getJob',
    outputs: [
      {
        name: '',
        internalType: 'struct Job',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'bytes32', type: 'bytes32' },
          { name: 'title', internalType: 'bytes32', type: 'bytes32' },
          { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
          { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
          { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
          { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
          {
            name: 'skillSetRequirement',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'skillSetBoost', internalType: 'uint16', type: 'uint16' },
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
// IStatsEntity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iStatsEntityAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'amount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'boostSkill',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
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
      { name: 'statSetName', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'startingPoints',
        internalType: 'uint16[10]',
        type: 'uint16[10]',
      },
      { name: 'points', internalType: 'uint8[10]', type: 'uint8[10]' },
      { name: 'maxValues', internalType: 'uint16[10]', type: 'uint16[10]' },
      { name: 'pointNames', internalType: 'bytes32[10]', type: 'bytes32[10]' },
    ],
    name: 'createGatchaStatSet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'statSetName', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'startingPoints',
        internalType: 'uint16[10]',
        type: 'uint16[10]',
      },
      { name: 'maxValues', internalType: 'uint16[10]', type: 'uint16[10]' },
      { name: 'pointNames', internalType: 'bytes32[10]', type: 'bytes32[10]' },
    ],
    name: 'createStatSet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'statSetName', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getAvailablePoints',
    outputs: [{ name: '', internalType: 'uint8[10]', type: 'uint8[10]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'statSetName', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getStartingPoints',
    outputs: [{ name: '', internalType: 'uint16[10]', type: 'uint16[10]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'statSetName', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getStatSet',
    outputs: [{ name: '', internalType: 'uint16[]', type: 'uint16[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStatSetNames',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStatSetRarityOdds',
    outputs: [{ name: '', internalType: 'uint8[10]', type: 'uint8[10]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'system', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'statSetName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'newStats', internalType: 'uint16[10]', type: 'uint16[10]' },
    ],
    name: 'setStatSet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'odds', internalType: 'uint8[10]', type: 'uint8[10]' }],
    name: 'setStatSetRarityOdds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IStatsSystem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iStatsSystemAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'amount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'boostSkill',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'skillSetRequirement', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'checkSkill',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISupplyEntity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSupplyEntityAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
    ],
    name: 'addToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'bytes32', type: 'bytes32' }],
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
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'system', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISupplySystem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSupplySystemAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokenSymbol', internalType: 'string', type: 'string' },
    ],
    name: 'deployToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'player', internalType: 'address', type: 'address' },
      { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JobEntity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const jobEntityAbi = [
  { type: 'error', inputs: [], name: 'AlreadyActiveJob' },
  { type: 'error', inputs: [], name: 'NoActiveJob' },
  { type: 'error', inputs: [], name: 'NotScenarioAdmin' },
  {
    type: 'function',
    inputs: [
      { name: 'jobId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'activateJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'activeJobs',
    outputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'startedAt', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'title', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
      { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'skillSetRequirement', internalType: 'uint16', type: 'uint16' },
      { name: 'skillSetBoost', internalType: 'uint16', type: 'uint16' },
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
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'title', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
      { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'skillSetRequirement', internalType: 'uint16', type: 'uint16' },
      { name: 'skillSetBoost', internalType: 'uint16', type: 'uint16' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'endJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getActiveJob',
    outputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32' },
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
          { name: 'id', internalType: 'bytes32', type: 'bytes32' },
          { name: 'title', internalType: 'bytes32', type: 'bytes32' },
          { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
          { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
          { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
          { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
          {
            name: 'skillSetRequirement',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'skillSetBoost', internalType: 'uint16', type: 'uint16' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'jobId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getJob',
    outputs: [
      {
        name: '',
        internalType: 'struct Job',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'bytes32', type: 'bytes32' },
          { name: 'title', internalType: 'bytes32', type: 'bytes32' },
          { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
          { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
          { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
          { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
          {
            name: 'skillSetRequirement',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'skillSetBoost', internalType: 'uint16', type: 'uint16' },
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
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'jobById',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JobSystem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const jobSystemAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_entity', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AlreadyRegistered' },
  { type: 'error', inputs: [], name: 'NoActiveJob' },
  { type: 'error', inputs: [], name: 'NoTimePassed' },
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
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'jobId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'activateJob',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'entityAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
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
          { name: 'id', internalType: 'bytes32', type: 'bytes32' },
          { name: 'title', internalType: 'bytes32', type: 'bytes32' },
          { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountPerHour', internalType: 'uint256', type: 'uint256' },
          { name: 'timeLimit', internalType: 'uint256', type: 'uint256' },
          { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
          { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
          {
            name: 'skillSetRequirement',
            internalType: 'uint16',
            type: 'uint16',
          },
          { name: 'skillSetBoost', internalType: 'uint16', type: 'uint16' },
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
    stateMutability: 'pure',
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
  {
    type: 'function',
    inputs: [
      { name: 'newEntityAddress', internalType: 'address', type: 'address' },
    ],
    name: 'updateEntityAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PlanetVAlpha
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const planetVAlphaAbi = [
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
  { type: 'error', inputs: [], name: 'MintFee' },
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
  { type: 'error', inputs: [], name: 'TooMany' },
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
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'ownerMint',
    outputs: [],
    stateMutability: 'nonpayable',
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
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawToken',
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
// StatsEntity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const statsEntityAbi = [
  { type: 'error', inputs: [], name: 'InvalidStatSet' },
  { type: 'error', inputs: [], name: 'NotScenarioAdmin' },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'amount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'boostSkill',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
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
      { name: 'statSetName', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'startingPoints',
        internalType: 'uint16[10]',
        type: 'uint16[10]',
      },
      { name: 'points', internalType: 'uint8[10]', type: 'uint8[10]' },
      { name: 'maxValues', internalType: 'uint16[10]', type: 'uint16[10]' },
      { name: 'pointNames', internalType: 'bytes32[10]', type: 'bytes32[10]' },
    ],
    name: 'createGatchaStatSet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'statSetName', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'startingPoints',
        internalType: 'uint16[10]',
        type: 'uint16[10]',
      },
      { name: 'maxValues', internalType: 'uint16[10]', type: 'uint16[10]' },
      { name: 'pointNames', internalType: 'bytes32[10]', type: 'bytes32[10]' },
    ],
    name: 'createStatSet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'statSetName', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getAvailablePoints',
    outputs: [{ name: '', internalType: 'uint8[10]', type: 'uint8[10]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'statSetName', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getStartingPoints',
    outputs: [{ name: '', internalType: 'uint16[10]', type: 'uint16[10]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'statSetName', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getStatSet',
    outputs: [{ name: '', internalType: 'uint16[]', type: 'uint16[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'statSetName', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getStatSetMaxValues',
    outputs: [{ name: '', internalType: 'uint16[10]', type: 'uint16[10]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStatSetNames',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'statSetName', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getStatSetPointNames',
    outputs: [{ name: '', internalType: 'bytes32[10]', type: 'bytes32[10]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStatSetRarityOdds',
    outputs: [{ name: '', internalType: 'uint8[10]', type: 'uint8[10]' }],
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
      { name: 'statSetName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'newStats', internalType: 'uint16[10]', type: 'uint16[10]' },
    ],
    name: 'setStatSet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'rarityOdds', internalType: 'uint8[10]', type: 'uint8[10]' },
    ],
    name: 'setStatSetRarityOdds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StatsSystem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const statsSystemAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_entity', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AlreadyRegistered' },
  { type: 'error', inputs: [], name: 'NotScenario' },
  { type: 'error', inputs: [], name: 'NotSystem' },
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
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'skillSetIndex', internalType: 'uint8', type: 'uint8' },
      { name: 'amount', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'boostSkill',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'skillSetName', internalType: 'bytes32', type: 'bytes32' },
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
    name: 'entityAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
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
      { name: 'newEntityAddress', internalType: 'address', type: 'address' },
    ],
    name: 'updateEntityAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SupplyEntity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const supplyEntityAbi = [
  { type: 'error', inputs: [], name: 'NotScenarioAdmin' },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
    ],
    name: 'addToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'bytes32', type: 'bytes32' }],
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
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
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
      { name: '_entity', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'AlreadyRegistered' },
  { type: 'error', inputs: [], name: 'NotAdmin' },
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
      { name: 'scenario', internalType: 'contract IScenario', type: 'address' },
      { name: 'player', internalType: 'address', type: 'address' },
      { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
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
      { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'tokenSymbol', internalType: 'string', type: 'string' },
    ],
    name: 'deployToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'entityAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
      { name: 'tokenName', internalType: 'bytes32', type: 'bytes32' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
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
  {
    type: 'function',
    inputs: [
      { name: 'newEntityAddress', internalType: 'address', type: 'address' },
    ],
    name: 'updateEntityAddress',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iJobEntityAbi}__
 */
export const useReadIJobEntity = /*#__PURE__*/ createUseReadContract({
  abi: iJobEntityAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"getActiveJob"`
 */
export const useReadIJobEntityGetActiveJob =
  /*#__PURE__*/ createUseReadContract({
    abi: iJobEntityAbi,
    functionName: 'getActiveJob',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"getAvailableJobs"`
 */
export const useReadIJobEntityGetAvailableJobs =
  /*#__PURE__*/ createUseReadContract({
    abi: iJobEntityAbi,
    functionName: 'getAvailableJobs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"getJob"`
 */
export const useReadIJobEntityGetJob = /*#__PURE__*/ createUseReadContract({
  abi: iJobEntityAbi,
  functionName: 'getJob',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iJobEntityAbi}__
 */
export const useWriteIJobEntity = /*#__PURE__*/ createUseWriteContract({
  abi: iJobEntityAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"activateJob"`
 */
export const useWriteIJobEntityActivateJob =
  /*#__PURE__*/ createUseWriteContract({
    abi: iJobEntityAbi,
    functionName: 'activateJob',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"addJob"`
 */
export const useWriteIJobEntityAddJob = /*#__PURE__*/ createUseWriteContract({
  abi: iJobEntityAbi,
  functionName: 'addJob',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"endJob"`
 */
export const useWriteIJobEntityEndJob = /*#__PURE__*/ createUseWriteContract({
  abi: iJobEntityAbi,
  functionName: 'endJob',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteIJobEntityInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: iJobEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iJobEntityAbi}__
 */
export const useSimulateIJobEntity = /*#__PURE__*/ createUseSimulateContract({
  abi: iJobEntityAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"activateJob"`
 */
export const useSimulateIJobEntityActivateJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iJobEntityAbi,
    functionName: 'activateJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"addJob"`
 */
export const useSimulateIJobEntityAddJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iJobEntityAbi,
    functionName: 'addJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"endJob"`
 */
export const useSimulateIJobEntityEndJob =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iJobEntityAbi,
    functionName: 'endJob',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateIJobEntityInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iJobEntityAbi,
    functionName: 'initialize',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStatsEntityAbi}__
 */
export const useReadIStatsEntity = /*#__PURE__*/ createUseReadContract({
  abi: iStatsEntityAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"checkSkill"`
 */
export const useReadIStatsEntityCheckSkill =
  /*#__PURE__*/ createUseReadContract({
    abi: iStatsEntityAbi,
    functionName: 'checkSkill',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"getAvailablePoints"`
 */
export const useReadIStatsEntityGetAvailablePoints =
  /*#__PURE__*/ createUseReadContract({
    abi: iStatsEntityAbi,
    functionName: 'getAvailablePoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"getStartingPoints"`
 */
export const useReadIStatsEntityGetStartingPoints =
  /*#__PURE__*/ createUseReadContract({
    abi: iStatsEntityAbi,
    functionName: 'getStartingPoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"getStatSet"`
 */
export const useReadIStatsEntityGetStatSet =
  /*#__PURE__*/ createUseReadContract({
    abi: iStatsEntityAbi,
    functionName: 'getStatSet',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"getStatSetNames"`
 */
export const useReadIStatsEntityGetStatSetNames =
  /*#__PURE__*/ createUseReadContract({
    abi: iStatsEntityAbi,
    functionName: 'getStatSetNames',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"getStatSetRarityOdds"`
 */
export const useReadIStatsEntityGetStatSetRarityOdds =
  /*#__PURE__*/ createUseReadContract({
    abi: iStatsEntityAbi,
    functionName: 'getStatSetRarityOdds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStatsEntityAbi}__
 */
export const useWriteIStatsEntity = /*#__PURE__*/ createUseWriteContract({
  abi: iStatsEntityAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"boostSkill"`
 */
export const useWriteIStatsEntityBoostSkill =
  /*#__PURE__*/ createUseWriteContract({
    abi: iStatsEntityAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const useWriteIStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createUseWriteContract({
    abi: iStatsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const useWriteIStatsEntityCreateStatSet =
  /*#__PURE__*/ createUseWriteContract({
    abi: iStatsEntityAbi,
    functionName: 'createStatSet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteIStatsEntityInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: iStatsEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const useWriteIStatsEntitySetStatSet =
  /*#__PURE__*/ createUseWriteContract({
    abi: iStatsEntityAbi,
    functionName: 'setStatSet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const useWriteIStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createUseWriteContract({
    abi: iStatsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__
 */
export const useSimulateIStatsEntity = /*#__PURE__*/ createUseSimulateContract({
  abi: iStatsEntityAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"boostSkill"`
 */
export const useSimulateIStatsEntityBoostSkill =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const useSimulateIStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const useSimulateIStatsEntityCreateStatSet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'createStatSet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateIStatsEntityInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const useSimulateIStatsEntitySetStatSet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'setStatSet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const useSimulateIStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStatsSystemAbi}__
 */
export const useReadIStatsSystem = /*#__PURE__*/ createUseReadContract({
  abi: iStatsSystemAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iStatsSystemAbi}__ and `functionName` set to `"checkSkill"`
 */
export const useReadIStatsSystemCheckSkill =
  /*#__PURE__*/ createUseReadContract({
    abi: iStatsSystemAbi,
    functionName: 'checkSkill',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStatsSystemAbi}__
 */
export const useWriteIStatsSystem = /*#__PURE__*/ createUseWriteContract({
  abi: iStatsSystemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iStatsSystemAbi}__ and `functionName` set to `"boostSkill"`
 */
export const useWriteIStatsSystemBoostSkill =
  /*#__PURE__*/ createUseWriteContract({
    abi: iStatsSystemAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStatsSystemAbi}__
 */
export const useSimulateIStatsSystem = /*#__PURE__*/ createUseSimulateContract({
  abi: iStatsSystemAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iStatsSystemAbi}__ and `functionName` set to `"boostSkill"`
 */
export const useSimulateIStatsSystemBoostSkill =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iStatsSystemAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSupplyEntityAbi}__
 */
export const useReadISupplyEntity = /*#__PURE__*/ createUseReadContract({
  abi: iSupplyEntityAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"getTokenAddress"`
 */
export const useReadISupplyEntityGetTokenAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: iSupplyEntityAbi,
    functionName: 'getTokenAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"getTokenAddresses"`
 */
export const useReadISupplyEntityGetTokenAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: iSupplyEntityAbi,
    functionName: 'getTokenAddresses',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSupplyEntityAbi}__
 */
export const useWriteISupplyEntity = /*#__PURE__*/ createUseWriteContract({
  abi: iSupplyEntityAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"addToken"`
 */
export const useWriteISupplyEntityAddToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSupplyEntityAbi,
    functionName: 'addToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteISupplyEntityInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSupplyEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSupplyEntityAbi}__
 */
export const useSimulateISupplyEntity = /*#__PURE__*/ createUseSimulateContract(
  { abi: iSupplyEntityAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"addToken"`
 */
export const useSimulateISupplyEntityAddToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSupplyEntityAbi,
    functionName: 'addToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateISupplyEntityInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSupplyEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSupplySystemAbi}__
 */
export const useWriteISupplySystem = /*#__PURE__*/ createUseWriteContract({
  abi: iSupplySystemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSupplySystemAbi}__ and `functionName` set to `"deployToken"`
 */
export const useWriteISupplySystemDeployToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: iSupplySystemAbi,
    functionName: 'deployToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iSupplySystemAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteISupplySystemMint = /*#__PURE__*/ createUseWriteContract({
  abi: iSupplySystemAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSupplySystemAbi}__
 */
export const useSimulateISupplySystem = /*#__PURE__*/ createUseSimulateContract(
  { abi: iSupplySystemAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSupplySystemAbi}__ and `functionName` set to `"deployToken"`
 */
export const useSimulateISupplySystemDeployToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSupplySystemAbi,
    functionName: 'deployToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iSupplySystemAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateISupplySystemMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iSupplySystemAbi,
    functionName: 'mint',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"entityAddress"`
 */
export const useReadJobSystemEntityAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: jobSystemAbi,
    functionName: 'entityAddress',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"owner"`
 */
export const useReadJobSystemOwner = /*#__PURE__*/ createUseReadContract({
  abi: jobSystemAbi,
  functionName: 'owner',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteJobSystemRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"sync"`
 */
export const useWriteJobSystemSync = /*#__PURE__*/ createUseWriteContract({
  abi: jobSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteJobSystemTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const useWriteJobSystemUpdateEntityAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: jobSystemAbi,
    functionName: 'updateEntityAddress',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateJobSystemRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"sync"`
 */
export const useSimulateJobSystemSync = /*#__PURE__*/ createUseSimulateContract(
  { abi: jobSystemAbi, functionName: 'sync' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateJobSystemTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const useSimulateJobSystemUpdateEntityAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: jobSystemAbi,
    functionName: 'updateEntityAddress',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobSystemAbi}__
 */
export const useWatchJobSystemEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: jobSystemAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link jobSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchJobSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: jobSystemAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__
 */
export const useReadPlanetVAlpha = /*#__PURE__*/ createUseReadContract({
  abi: planetVAlphaAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadPlanetVAlphaBalanceOf = /*#__PURE__*/ createUseReadContract(
  { abi: planetVAlphaAbi, functionName: 'balanceOf' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"contractURI"`
 */
export const useReadPlanetVAlphaContractUri =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'contractURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"explicitOwnershipOf"`
 */
export const useReadPlanetVAlphaExplicitOwnershipOf =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'explicitOwnershipOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"explicitOwnershipsOf"`
 */
export const useReadPlanetVAlphaExplicitOwnershipsOf =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'explicitOwnershipsOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"generateCharacter"`
 */
export const useReadPlanetVAlphaGenerateCharacter =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'generateCharacter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"generateSVG"`
 */
export const useReadPlanetVAlphaGenerateSvg =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'generateSVG',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadPlanetVAlphaGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"getMintPrice"`
 */
export const useReadPlanetVAlphaGetMintPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'getMintPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadPlanetVAlphaIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"mintCost"`
 */
export const useReadPlanetVAlphaMintCost = /*#__PURE__*/ createUseReadContract({
  abi: planetVAlphaAbi,
  functionName: 'mintCost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"name"`
 */
export const useReadPlanetVAlphaName = /*#__PURE__*/ createUseReadContract({
  abi: planetVAlphaAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"nextTokenId"`
 */
export const useReadPlanetVAlphaNextTokenId =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'nextTokenId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"owner"`
 */
export const useReadPlanetVAlphaOwner = /*#__PURE__*/ createUseReadContract({
  abi: planetVAlphaAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadPlanetVAlphaOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: planetVAlphaAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"renderers"`
 */
export const useReadPlanetVAlphaRenderers = /*#__PURE__*/ createUseReadContract(
  { abi: planetVAlphaAbi, functionName: 'renderers' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadPlanetVAlphaSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadPlanetVAlphaSymbol = /*#__PURE__*/ createUseReadContract({
  abi: planetVAlphaAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"systemController"`
 */
export const useReadPlanetVAlphaSystemController =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'systemController',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadPlanetVAlphaTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: planetVAlphaAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"tokensOfOwner"`
 */
export const useReadPlanetVAlphaTokensOfOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'tokensOfOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"tokensOfOwnerIn"`
 */
export const useReadPlanetVAlphaTokensOfOwnerIn =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'tokensOfOwnerIn',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadPlanetVAlphaTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: planetVAlphaAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__
 */
export const useWritePlanetVAlpha = /*#__PURE__*/ createUseWriteContract({
  abi: planetVAlphaAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"addRenderer"`
 */
export const useWritePlanetVAlphaAddRenderer =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'addRenderer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"approve"`
 */
export const useWritePlanetVAlphaApprove = /*#__PURE__*/ createUseWriteContract(
  { abi: planetVAlphaAbi, functionName: 'approve' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"mint"`
 */
export const useWritePlanetVAlphaMint = /*#__PURE__*/ createUseWriteContract({
  abi: planetVAlphaAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"ownerMint"`
 */
export const useWritePlanetVAlphaOwnerMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'ownerMint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWritePlanetVAlphaRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWritePlanetVAlphaSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const useWritePlanetVAlphaSelectRenderer =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'selectRenderer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWritePlanetVAlphaSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const useWritePlanetVAlphaSetMintPrice =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'setMintPrice',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWritePlanetVAlphaTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWritePlanetVAlphaTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWritePlanetVAlphaWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"withdrawToken"`
 */
export const useWritePlanetVAlphaWithdrawToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'withdrawToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__
 */
export const useSimulatePlanetVAlpha = /*#__PURE__*/ createUseSimulateContract({
  abi: planetVAlphaAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"addRenderer"`
 */
export const useSimulatePlanetVAlphaAddRenderer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'addRenderer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulatePlanetVAlphaApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulatePlanetVAlphaMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"ownerMint"`
 */
export const useSimulatePlanetVAlphaOwnerMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'ownerMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulatePlanetVAlphaRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulatePlanetVAlphaSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const useSimulatePlanetVAlphaSelectRenderer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'selectRenderer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulatePlanetVAlphaSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const useSimulatePlanetVAlphaSetMintPrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'setMintPrice',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulatePlanetVAlphaTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulatePlanetVAlphaTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulatePlanetVAlphaWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"withdrawToken"`
 */
export const useSimulatePlanetVAlphaWithdrawToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'withdrawToken',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__
 */
export const useWatchPlanetVAlphaEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: planetVAlphaAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchPlanetVAlphaApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetVAlphaAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchPlanetVAlphaApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetVAlphaAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__ and `eventName` set to `"ConsecutiveTransfer"`
 */
export const useWatchPlanetVAlphaConsecutiveTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetVAlphaAbi,
    eventName: 'ConsecutiveTransfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchPlanetVAlphaOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetVAlphaAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchPlanetVAlphaTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: planetVAlphaAbi,
    eventName: 'Transfer',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsEntityAbi}__
 */
export const useReadStatsEntity = /*#__PURE__*/ createUseReadContract({
  abi: statsEntityAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"checkSkill"`
 */
export const useReadStatsEntityCheckSkill = /*#__PURE__*/ createUseReadContract(
  { abi: statsEntityAbi, functionName: 'checkSkill' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getAvailablePoints"`
 */
export const useReadStatsEntityGetAvailablePoints =
  /*#__PURE__*/ createUseReadContract({
    abi: statsEntityAbi,
    functionName: 'getAvailablePoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStartingPoints"`
 */
export const useReadStatsEntityGetStartingPoints =
  /*#__PURE__*/ createUseReadContract({
    abi: statsEntityAbi,
    functionName: 'getStartingPoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStatSet"`
 */
export const useReadStatsEntityGetStatSet = /*#__PURE__*/ createUseReadContract(
  { abi: statsEntityAbi, functionName: 'getStatSet' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStatSetMaxValues"`
 */
export const useReadStatsEntityGetStatSetMaxValues =
  /*#__PURE__*/ createUseReadContract({
    abi: statsEntityAbi,
    functionName: 'getStatSetMaxValues',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStatSetNames"`
 */
export const useReadStatsEntityGetStatSetNames =
  /*#__PURE__*/ createUseReadContract({
    abi: statsEntityAbi,
    functionName: 'getStatSetNames',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStatSetPointNames"`
 */
export const useReadStatsEntityGetStatSetPointNames =
  /*#__PURE__*/ createUseReadContract({
    abi: statsEntityAbi,
    functionName: 'getStatSetPointNames',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStatSetRarityOdds"`
 */
export const useReadStatsEntityGetStatSetRarityOdds =
  /*#__PURE__*/ createUseReadContract({
    abi: statsEntityAbi,
    functionName: 'getStatSetRarityOdds',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsEntityAbi}__
 */
export const useWriteStatsEntity = /*#__PURE__*/ createUseWriteContract({
  abi: statsEntityAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"boostSkill"`
 */
export const useWriteStatsEntityBoostSkill =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsEntityAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const useWriteStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const useWriteStatsEntityCreateStatSet =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsEntityAbi,
    functionName: 'createStatSet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteStatsEntityInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const useWriteStatsEntitySetStatSet =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsEntityAbi,
    functionName: 'setStatSet',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const useWriteStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsEntityAbi}__
 */
export const useSimulateStatsEntity = /*#__PURE__*/ createUseSimulateContract({
  abi: statsEntityAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"boostSkill"`
 */
export const useSimulateStatsEntityBoostSkill =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsEntityAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const useSimulateStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const useSimulateStatsEntityCreateStatSet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsEntityAbi,
    functionName: 'createStatSet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateStatsEntityInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const useSimulateStatsEntitySetStatSet =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsEntityAbi,
    functionName: 'setStatSet',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const useSimulateStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsSystemAbi}__
 */
export const useReadStatsSystem = /*#__PURE__*/ createUseReadContract({
  abi: statsSystemAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"checkSkill"`
 */
export const useReadStatsSystemCheckSkill = /*#__PURE__*/ createUseReadContract(
  { abi: statsSystemAbi, functionName: 'checkSkill' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"entityAddress"`
 */
export const useReadStatsSystemEntityAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: statsSystemAbi,
    functionName: 'entityAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"getId"`
 */
export const useReadStatsSystemGetId = /*#__PURE__*/ createUseReadContract({
  abi: statsSystemAbi,
  functionName: 'getId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"owner"`
 */
export const useReadStatsSystemOwner = /*#__PURE__*/ createUseReadContract({
  abi: statsSystemAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsSystemAbi}__
 */
export const useWriteStatsSystem = /*#__PURE__*/ createUseWriteContract({
  abi: statsSystemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const useWriteStatsSystemActivateEntity =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsSystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"boostSkill"`
 */
export const useWriteStatsSystemBoostSkill =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsSystemAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"init"`
 */
export const useWriteStatsSystemInit = /*#__PURE__*/ createUseWriteContract({
  abi: statsSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useWriteStatsSystemRegisterSystem =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsSystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteStatsSystemRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"sync"`
 */
export const useWriteStatsSystemSync = /*#__PURE__*/ createUseWriteContract({
  abi: statsSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteStatsSystemTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const useWriteStatsSystemUpdateEntityAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: statsSystemAbi,
    functionName: 'updateEntityAddress',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsSystemAbi}__
 */
export const useSimulateStatsSystem = /*#__PURE__*/ createUseSimulateContract({
  abi: statsSystemAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const useSimulateStatsSystemActivateEntity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsSystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"boostSkill"`
 */
export const useSimulateStatsSystemBoostSkill =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsSystemAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateStatsSystemInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsSystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const useSimulateStatsSystemRegisterSystem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsSystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateStatsSystemRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"sync"`
 */
export const useSimulateStatsSystemSync =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsSystemAbi,
    functionName: 'sync',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateStatsSystemTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const useSimulateStatsSystemUpdateEntityAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: statsSystemAbi,
    functionName: 'updateEntityAddress',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link statsSystemAbi}__
 */
export const useWatchStatsSystemEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: statsSystemAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link statsSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchStatsSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: statsSystemAbi,
    eventName: 'OwnershipTransferred',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"entityAddress"`
 */
export const useReadSupplySystemEntityAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: supplySystemAbi,
    functionName: 'entityAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"getId"`
 */
export const useReadSupplySystemGetId = /*#__PURE__*/ createUseReadContract({
  abi: supplySystemAbi,
  functionName: 'getId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"owner"`
 */
export const useReadSupplySystemOwner = /*#__PURE__*/ createUseReadContract({
  abi: supplySystemAbi,
  functionName: 'owner',
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
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteSupplySystemRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: supplySystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"sync"`
 */
export const useWriteSupplySystemSync = /*#__PURE__*/ createUseWriteContract({
  abi: supplySystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteSupplySystemTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: supplySystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const useWriteSupplySystemUpdateEntityAddress =
  /*#__PURE__*/ createUseWriteContract({
    abi: supplySystemAbi,
    functionName: 'updateEntityAddress',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateSupplySystemRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplySystemAbi,
    functionName: 'renounceOwnership',
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
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateSupplySystemTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplySystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const useSimulateSupplySystemUpdateEntityAddress =
  /*#__PURE__*/ createUseSimulateContract({
    abi: supplySystemAbi,
    functionName: 'updateEntityAddress',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supplySystemAbi}__
 */
export const useWatchSupplySystemEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: supplySystemAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link supplySystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchSupplySystemOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: supplySystemAbi,
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link iJobEntityAbi}__
 */
export const readIJobEntity = /*#__PURE__*/ createReadContract({
  abi: iJobEntityAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"getActiveJob"`
 */
export const readIJobEntityGetActiveJob = /*#__PURE__*/ createReadContract({
  abi: iJobEntityAbi,
  functionName: 'getActiveJob',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"getAvailableJobs"`
 */
export const readIJobEntityGetAvailableJobs = /*#__PURE__*/ createReadContract({
  abi: iJobEntityAbi,
  functionName: 'getAvailableJobs',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"getJob"`
 */
export const readIJobEntityGetJob = /*#__PURE__*/ createReadContract({
  abi: iJobEntityAbi,
  functionName: 'getJob',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iJobEntityAbi}__
 */
export const writeIJobEntity = /*#__PURE__*/ createWriteContract({
  abi: iJobEntityAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"activateJob"`
 */
export const writeIJobEntityActivateJob = /*#__PURE__*/ createWriteContract({
  abi: iJobEntityAbi,
  functionName: 'activateJob',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"addJob"`
 */
export const writeIJobEntityAddJob = /*#__PURE__*/ createWriteContract({
  abi: iJobEntityAbi,
  functionName: 'addJob',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"endJob"`
 */
export const writeIJobEntityEndJob = /*#__PURE__*/ createWriteContract({
  abi: iJobEntityAbi,
  functionName: 'endJob',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const writeIJobEntityInitialize = /*#__PURE__*/ createWriteContract({
  abi: iJobEntityAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iJobEntityAbi}__
 */
export const simulateIJobEntity = /*#__PURE__*/ createSimulateContract({
  abi: iJobEntityAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"activateJob"`
 */
export const simulateIJobEntityActivateJob =
  /*#__PURE__*/ createSimulateContract({
    abi: iJobEntityAbi,
    functionName: 'activateJob',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"addJob"`
 */
export const simulateIJobEntityAddJob = /*#__PURE__*/ createSimulateContract({
  abi: iJobEntityAbi,
  functionName: 'addJob',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"endJob"`
 */
export const simulateIJobEntityEndJob = /*#__PURE__*/ createSimulateContract({
  abi: iJobEntityAbi,
  functionName: 'endJob',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iJobEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateIJobEntityInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: iJobEntityAbi,
    functionName: 'initialize',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link iStatsEntityAbi}__
 */
export const readIStatsEntity = /*#__PURE__*/ createReadContract({
  abi: iStatsEntityAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"checkSkill"`
 */
export const readIStatsEntityCheckSkill = /*#__PURE__*/ createReadContract({
  abi: iStatsEntityAbi,
  functionName: 'checkSkill',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"getAvailablePoints"`
 */
export const readIStatsEntityGetAvailablePoints =
  /*#__PURE__*/ createReadContract({
    abi: iStatsEntityAbi,
    functionName: 'getAvailablePoints',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"getStartingPoints"`
 */
export const readIStatsEntityGetStartingPoints =
  /*#__PURE__*/ createReadContract({
    abi: iStatsEntityAbi,
    functionName: 'getStartingPoints',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"getStatSet"`
 */
export const readIStatsEntityGetStatSet = /*#__PURE__*/ createReadContract({
  abi: iStatsEntityAbi,
  functionName: 'getStatSet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"getStatSetNames"`
 */
export const readIStatsEntityGetStatSetNames = /*#__PURE__*/ createReadContract(
  { abi: iStatsEntityAbi, functionName: 'getStatSetNames' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"getStatSetRarityOdds"`
 */
export const readIStatsEntityGetStatSetRarityOdds =
  /*#__PURE__*/ createReadContract({
    abi: iStatsEntityAbi,
    functionName: 'getStatSetRarityOdds',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iStatsEntityAbi}__
 */
export const writeIStatsEntity = /*#__PURE__*/ createWriteContract({
  abi: iStatsEntityAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"boostSkill"`
 */
export const writeIStatsEntityBoostSkill = /*#__PURE__*/ createWriteContract({
  abi: iStatsEntityAbi,
  functionName: 'boostSkill',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const writeIStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createWriteContract({
    abi: iStatsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const writeIStatsEntityCreateStatSet = /*#__PURE__*/ createWriteContract(
  { abi: iStatsEntityAbi, functionName: 'createStatSet' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const writeIStatsEntityInitialize = /*#__PURE__*/ createWriteContract({
  abi: iStatsEntityAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const writeIStatsEntitySetStatSet = /*#__PURE__*/ createWriteContract({
  abi: iStatsEntityAbi,
  functionName: 'setStatSet',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const writeIStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createWriteContract({
    abi: iStatsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__
 */
export const simulateIStatsEntity = /*#__PURE__*/ createSimulateContract({
  abi: iStatsEntityAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"boostSkill"`
 */
export const simulateIStatsEntityBoostSkill =
  /*#__PURE__*/ createSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const simulateIStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const simulateIStatsEntityCreateStatSet =
  /*#__PURE__*/ createSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'createStatSet',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateIStatsEntityInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const simulateIStatsEntitySetStatSet =
  /*#__PURE__*/ createSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'setStatSet',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iStatsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const simulateIStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createSimulateContract({
    abi: iStatsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iStatsSystemAbi}__
 */
export const readIStatsSystem = /*#__PURE__*/ createReadContract({
  abi: iStatsSystemAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iStatsSystemAbi}__ and `functionName` set to `"checkSkill"`
 */
export const readIStatsSystemCheckSkill = /*#__PURE__*/ createReadContract({
  abi: iStatsSystemAbi,
  functionName: 'checkSkill',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iStatsSystemAbi}__
 */
export const writeIStatsSystem = /*#__PURE__*/ createWriteContract({
  abi: iStatsSystemAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iStatsSystemAbi}__ and `functionName` set to `"boostSkill"`
 */
export const writeIStatsSystemBoostSkill = /*#__PURE__*/ createWriteContract({
  abi: iStatsSystemAbi,
  functionName: 'boostSkill',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iStatsSystemAbi}__
 */
export const simulateIStatsSystem = /*#__PURE__*/ createSimulateContract({
  abi: iStatsSystemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iStatsSystemAbi}__ and `functionName` set to `"boostSkill"`
 */
export const simulateIStatsSystemBoostSkill =
  /*#__PURE__*/ createSimulateContract({
    abi: iStatsSystemAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSupplyEntityAbi}__
 */
export const readISupplyEntity = /*#__PURE__*/ createReadContract({
  abi: iSupplyEntityAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"getTokenAddress"`
 */
export const readISupplyEntityGetTokenAddress =
  /*#__PURE__*/ createReadContract({
    abi: iSupplyEntityAbi,
    functionName: 'getTokenAddress',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"getTokenAddresses"`
 */
export const readISupplyEntityGetTokenAddresses =
  /*#__PURE__*/ createReadContract({
    abi: iSupplyEntityAbi,
    functionName: 'getTokenAddresses',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSupplyEntityAbi}__
 */
export const writeISupplyEntity = /*#__PURE__*/ createWriteContract({
  abi: iSupplyEntityAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"addToken"`
 */
export const writeISupplyEntityAddToken = /*#__PURE__*/ createWriteContract({
  abi: iSupplyEntityAbi,
  functionName: 'addToken',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const writeISupplyEntityInitialize = /*#__PURE__*/ createWriteContract({
  abi: iSupplyEntityAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSupplyEntityAbi}__
 */
export const simulateISupplyEntity = /*#__PURE__*/ createSimulateContract({
  abi: iSupplyEntityAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"addToken"`
 */
export const simulateISupplyEntityAddToken =
  /*#__PURE__*/ createSimulateContract({
    abi: iSupplyEntityAbi,
    functionName: 'addToken',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSupplyEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateISupplyEntityInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: iSupplyEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSupplySystemAbi}__
 */
export const writeISupplySystem = /*#__PURE__*/ createWriteContract({
  abi: iSupplySystemAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSupplySystemAbi}__ and `functionName` set to `"deployToken"`
 */
export const writeISupplySystemDeployToken = /*#__PURE__*/ createWriteContract({
  abi: iSupplySystemAbi,
  functionName: 'deployToken',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSupplySystemAbi}__ and `functionName` set to `"mint"`
 */
export const writeISupplySystemMint = /*#__PURE__*/ createWriteContract({
  abi: iSupplySystemAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSupplySystemAbi}__
 */
export const simulateISupplySystem = /*#__PURE__*/ createSimulateContract({
  abi: iSupplySystemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSupplySystemAbi}__ and `functionName` set to `"deployToken"`
 */
export const simulateISupplySystemDeployToken =
  /*#__PURE__*/ createSimulateContract({
    abi: iSupplySystemAbi,
    functionName: 'deployToken',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSupplySystemAbi}__ and `functionName` set to `"mint"`
 */
export const simulateISupplySystemMint = /*#__PURE__*/ createSimulateContract({
  abi: iSupplySystemAbi,
  functionName: 'mint',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"entityAddress"`
 */
export const readJobSystemEntityAddress = /*#__PURE__*/ createReadContract({
  abi: jobSystemAbi,
  functionName: 'entityAddress',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"owner"`
 */
export const readJobSystemOwner = /*#__PURE__*/ createReadContract({
  abi: jobSystemAbi,
  functionName: 'owner',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeJobSystemRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: jobSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"sync"`
 */
export const writeJobSystemSync = /*#__PURE__*/ createWriteContract({
  abi: jobSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeJobSystemTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: jobSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const writeJobSystemUpdateEntityAddress =
  /*#__PURE__*/ createWriteContract({
    abi: jobSystemAbi,
    functionName: 'updateEntityAddress',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateJobSystemRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: jobSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"sync"`
 */
export const simulateJobSystemSync = /*#__PURE__*/ createSimulateContract({
  abi: jobSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateJobSystemTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: jobSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link jobSystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const simulateJobSystemUpdateEntityAddress =
  /*#__PURE__*/ createSimulateContract({
    abi: jobSystemAbi,
    functionName: 'updateEntityAddress',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link jobSystemAbi}__
 */
export const watchJobSystemEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: jobSystemAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link jobSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchJobSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: jobSystemAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__
 */
export const readPlanetVAlpha = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readPlanetVAlphaBalanceOf = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"contractURI"`
 */
export const readPlanetVAlphaContractUri = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"explicitOwnershipOf"`
 */
export const readPlanetVAlphaExplicitOwnershipOf =
  /*#__PURE__*/ createReadContract({
    abi: planetVAlphaAbi,
    functionName: 'explicitOwnershipOf',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"explicitOwnershipsOf"`
 */
export const readPlanetVAlphaExplicitOwnershipsOf =
  /*#__PURE__*/ createReadContract({
    abi: planetVAlphaAbi,
    functionName: 'explicitOwnershipsOf',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"generateCharacter"`
 */
export const readPlanetVAlphaGenerateCharacter =
  /*#__PURE__*/ createReadContract({
    abi: planetVAlphaAbi,
    functionName: 'generateCharacter',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"generateSVG"`
 */
export const readPlanetVAlphaGenerateSvg = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'generateSVG',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"getApproved"`
 */
export const readPlanetVAlphaGetApproved = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"getMintPrice"`
 */
export const readPlanetVAlphaGetMintPrice = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'getMintPrice',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readPlanetVAlphaIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: planetVAlphaAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"mintCost"`
 */
export const readPlanetVAlphaMintCost = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'mintCost',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"name"`
 */
export const readPlanetVAlphaName = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"nextTokenId"`
 */
export const readPlanetVAlphaNextTokenId = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'nextTokenId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"owner"`
 */
export const readPlanetVAlphaOwner = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readPlanetVAlphaOwnerOf = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"renderers"`
 */
export const readPlanetVAlphaRenderers = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'renderers',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readPlanetVAlphaSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: planetVAlphaAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"symbol"`
 */
export const readPlanetVAlphaSymbol = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"systemController"`
 */
export const readPlanetVAlphaSystemController =
  /*#__PURE__*/ createReadContract({
    abi: planetVAlphaAbi,
    functionName: 'systemController',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readPlanetVAlphaTokenUri = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"tokensOfOwner"`
 */
export const readPlanetVAlphaTokensOfOwner = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'tokensOfOwner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"tokensOfOwnerIn"`
 */
export const readPlanetVAlphaTokensOfOwnerIn = /*#__PURE__*/ createReadContract(
  { abi: planetVAlphaAbi, functionName: 'tokensOfOwnerIn' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readPlanetVAlphaTotalSupply = /*#__PURE__*/ createReadContract({
  abi: planetVAlphaAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__
 */
export const writePlanetVAlpha = /*#__PURE__*/ createWriteContract({
  abi: planetVAlphaAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"addRenderer"`
 */
export const writePlanetVAlphaAddRenderer = /*#__PURE__*/ createWriteContract({
  abi: planetVAlphaAbi,
  functionName: 'addRenderer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"approve"`
 */
export const writePlanetVAlphaApprove = /*#__PURE__*/ createWriteContract({
  abi: planetVAlphaAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"mint"`
 */
export const writePlanetVAlphaMint = /*#__PURE__*/ createWriteContract({
  abi: planetVAlphaAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"ownerMint"`
 */
export const writePlanetVAlphaOwnerMint = /*#__PURE__*/ createWriteContract({
  abi: planetVAlphaAbi,
  functionName: 'ownerMint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writePlanetVAlphaRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writePlanetVAlphaSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const writePlanetVAlphaSelectRenderer =
  /*#__PURE__*/ createWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'selectRenderer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writePlanetVAlphaSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const writePlanetVAlphaSetMintPrice = /*#__PURE__*/ createWriteContract({
  abi: planetVAlphaAbi,
  functionName: 'setMintPrice',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writePlanetVAlphaTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: planetVAlphaAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writePlanetVAlphaTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: planetVAlphaAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"withdraw"`
 */
export const writePlanetVAlphaWithdraw = /*#__PURE__*/ createWriteContract({
  abi: planetVAlphaAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"withdrawToken"`
 */
export const writePlanetVAlphaWithdrawToken = /*#__PURE__*/ createWriteContract(
  { abi: planetVAlphaAbi, functionName: 'withdrawToken' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__
 */
export const simulatePlanetVAlpha = /*#__PURE__*/ createSimulateContract({
  abi: planetVAlphaAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"addRenderer"`
 */
export const simulatePlanetVAlphaAddRenderer =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'addRenderer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"approve"`
 */
export const simulatePlanetVAlphaApprove = /*#__PURE__*/ createSimulateContract(
  { abi: planetVAlphaAbi, functionName: 'approve' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"mint"`
 */
export const simulatePlanetVAlphaMint = /*#__PURE__*/ createSimulateContract({
  abi: planetVAlphaAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"ownerMint"`
 */
export const simulatePlanetVAlphaOwnerMint =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'ownerMint',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulatePlanetVAlphaRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulatePlanetVAlphaSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const simulatePlanetVAlphaSelectRenderer =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'selectRenderer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulatePlanetVAlphaSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const simulatePlanetVAlphaSetMintPrice =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'setMintPrice',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulatePlanetVAlphaTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulatePlanetVAlphaTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulatePlanetVAlphaWithdraw =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link planetVAlphaAbi}__ and `functionName` set to `"withdrawToken"`
 */
export const simulatePlanetVAlphaWithdrawToken =
  /*#__PURE__*/ createSimulateContract({
    abi: planetVAlphaAbi,
    functionName: 'withdrawToken',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__
 */
export const watchPlanetVAlphaEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: planetVAlphaAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__ and `eventName` set to `"Approval"`
 */
export const watchPlanetVAlphaApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: planetVAlphaAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchPlanetVAlphaApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: planetVAlphaAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__ and `eventName` set to `"ConsecutiveTransfer"`
 */
export const watchPlanetVAlphaConsecutiveTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: planetVAlphaAbi,
    eventName: 'ConsecutiveTransfer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchPlanetVAlphaOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: planetVAlphaAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link planetVAlphaAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchPlanetVAlphaTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: planetVAlphaAbi,
    eventName: 'Transfer',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsEntityAbi}__
 */
export const readStatsEntity = /*#__PURE__*/ createReadContract({
  abi: statsEntityAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"checkSkill"`
 */
export const readStatsEntityCheckSkill = /*#__PURE__*/ createReadContract({
  abi: statsEntityAbi,
  functionName: 'checkSkill',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getAvailablePoints"`
 */
export const readStatsEntityGetAvailablePoints =
  /*#__PURE__*/ createReadContract({
    abi: statsEntityAbi,
    functionName: 'getAvailablePoints',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStartingPoints"`
 */
export const readStatsEntityGetStartingPoints =
  /*#__PURE__*/ createReadContract({
    abi: statsEntityAbi,
    functionName: 'getStartingPoints',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStatSet"`
 */
export const readStatsEntityGetStatSet = /*#__PURE__*/ createReadContract({
  abi: statsEntityAbi,
  functionName: 'getStatSet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStatSetMaxValues"`
 */
export const readStatsEntityGetStatSetMaxValues =
  /*#__PURE__*/ createReadContract({
    abi: statsEntityAbi,
    functionName: 'getStatSetMaxValues',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStatSetNames"`
 */
export const readStatsEntityGetStatSetNames = /*#__PURE__*/ createReadContract({
  abi: statsEntityAbi,
  functionName: 'getStatSetNames',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStatSetPointNames"`
 */
export const readStatsEntityGetStatSetPointNames =
  /*#__PURE__*/ createReadContract({
    abi: statsEntityAbi,
    functionName: 'getStatSetPointNames',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"getStatSetRarityOdds"`
 */
export const readStatsEntityGetStatSetRarityOdds =
  /*#__PURE__*/ createReadContract({
    abi: statsEntityAbi,
    functionName: 'getStatSetRarityOdds',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsEntityAbi}__
 */
export const writeStatsEntity = /*#__PURE__*/ createWriteContract({
  abi: statsEntityAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"boostSkill"`
 */
export const writeStatsEntityBoostSkill = /*#__PURE__*/ createWriteContract({
  abi: statsEntityAbi,
  functionName: 'boostSkill',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const writeStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createWriteContract({
    abi: statsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const writeStatsEntityCreateStatSet = /*#__PURE__*/ createWriteContract({
  abi: statsEntityAbi,
  functionName: 'createStatSet',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const writeStatsEntityInitialize = /*#__PURE__*/ createWriteContract({
  abi: statsEntityAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const writeStatsEntitySetStatSet = /*#__PURE__*/ createWriteContract({
  abi: statsEntityAbi,
  functionName: 'setStatSet',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const writeStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createWriteContract({
    abi: statsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsEntityAbi}__
 */
export const simulateStatsEntity = /*#__PURE__*/ createSimulateContract({
  abi: statsEntityAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"boostSkill"`
 */
export const simulateStatsEntityBoostSkill =
  /*#__PURE__*/ createSimulateContract({
    abi: statsEntityAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"createGatchaStatSet"`
 */
export const simulateStatsEntityCreateGatchaStatSet =
  /*#__PURE__*/ createSimulateContract({
    abi: statsEntityAbi,
    functionName: 'createGatchaStatSet',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"createStatSet"`
 */
export const simulateStatsEntityCreateStatSet =
  /*#__PURE__*/ createSimulateContract({
    abi: statsEntityAbi,
    functionName: 'createStatSet',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateStatsEntityInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: statsEntityAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"setStatSet"`
 */
export const simulateStatsEntitySetStatSet =
  /*#__PURE__*/ createSimulateContract({
    abi: statsEntityAbi,
    functionName: 'setStatSet',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsEntityAbi}__ and `functionName` set to `"setStatSetRarityOdds"`
 */
export const simulateStatsEntitySetStatSetRarityOdds =
  /*#__PURE__*/ createSimulateContract({
    abi: statsEntityAbi,
    functionName: 'setStatSetRarityOdds',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsSystemAbi}__
 */
export const readStatsSystem = /*#__PURE__*/ createReadContract({
  abi: statsSystemAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"checkSkill"`
 */
export const readStatsSystemCheckSkill = /*#__PURE__*/ createReadContract({
  abi: statsSystemAbi,
  functionName: 'checkSkill',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"entityAddress"`
 */
export const readStatsSystemEntityAddress = /*#__PURE__*/ createReadContract({
  abi: statsSystemAbi,
  functionName: 'entityAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"getId"`
 */
export const readStatsSystemGetId = /*#__PURE__*/ createReadContract({
  abi: statsSystemAbi,
  functionName: 'getId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"owner"`
 */
export const readStatsSystemOwner = /*#__PURE__*/ createReadContract({
  abi: statsSystemAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsSystemAbi}__
 */
export const writeStatsSystem = /*#__PURE__*/ createWriteContract({
  abi: statsSystemAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const writeStatsSystemActivateEntity = /*#__PURE__*/ createWriteContract(
  { abi: statsSystemAbi, functionName: 'activateEntity' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"boostSkill"`
 */
export const writeStatsSystemBoostSkill = /*#__PURE__*/ createWriteContract({
  abi: statsSystemAbi,
  functionName: 'boostSkill',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"init"`
 */
export const writeStatsSystemInit = /*#__PURE__*/ createWriteContract({
  abi: statsSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const writeStatsSystemRegisterSystem = /*#__PURE__*/ createWriteContract(
  { abi: statsSystemAbi, functionName: 'registerSystem' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeStatsSystemRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: statsSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"sync"`
 */
export const writeStatsSystemSync = /*#__PURE__*/ createWriteContract({
  abi: statsSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeStatsSystemTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: statsSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const writeStatsSystemUpdateEntityAddress =
  /*#__PURE__*/ createWriteContract({
    abi: statsSystemAbi,
    functionName: 'updateEntityAddress',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsSystemAbi}__
 */
export const simulateStatsSystem = /*#__PURE__*/ createSimulateContract({
  abi: statsSystemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"activateEntity"`
 */
export const simulateStatsSystemActivateEntity =
  /*#__PURE__*/ createSimulateContract({
    abi: statsSystemAbi,
    functionName: 'activateEntity',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"boostSkill"`
 */
export const simulateStatsSystemBoostSkill =
  /*#__PURE__*/ createSimulateContract({
    abi: statsSystemAbi,
    functionName: 'boostSkill',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"init"`
 */
export const simulateStatsSystemInit = /*#__PURE__*/ createSimulateContract({
  abi: statsSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"registerSystem"`
 */
export const simulateStatsSystemRegisterSystem =
  /*#__PURE__*/ createSimulateContract({
    abi: statsSystemAbi,
    functionName: 'registerSystem',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateStatsSystemRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: statsSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"sync"`
 */
export const simulateStatsSystemSync = /*#__PURE__*/ createSimulateContract({
  abi: statsSystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateStatsSystemTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: statsSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link statsSystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const simulateStatsSystemUpdateEntityAddress =
  /*#__PURE__*/ createSimulateContract({
    abi: statsSystemAbi,
    functionName: 'updateEntityAddress',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link statsSystemAbi}__
 */
export const watchStatsSystemEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: statsSystemAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link statsSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchStatsSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: statsSystemAbi,
    eventName: 'OwnershipTransferred',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"entityAddress"`
 */
export const readSupplySystemEntityAddress = /*#__PURE__*/ createReadContract({
  abi: supplySystemAbi,
  functionName: 'entityAddress',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"getId"`
 */
export const readSupplySystemGetId = /*#__PURE__*/ createReadContract({
  abi: supplySystemAbi,
  functionName: 'getId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"owner"`
 */
export const readSupplySystemOwner = /*#__PURE__*/ createReadContract({
  abi: supplySystemAbi,
  functionName: 'owner',
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
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeSupplySystemRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: supplySystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"sync"`
 */
export const writeSupplySystemSync = /*#__PURE__*/ createWriteContract({
  abi: supplySystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeSupplySystemTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: supplySystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const writeSupplySystemUpdateEntityAddress =
  /*#__PURE__*/ createWriteContract({
    abi: supplySystemAbi,
    functionName: 'updateEntityAddress',
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
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateSupplySystemRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: supplySystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"sync"`
 */
export const simulateSupplySystemSync = /*#__PURE__*/ createSimulateContract({
  abi: supplySystemAbi,
  functionName: 'sync',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateSupplySystemTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: supplySystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link supplySystemAbi}__ and `functionName` set to `"updateEntityAddress"`
 */
export const simulateSupplySystemUpdateEntityAddress =
  /*#__PURE__*/ createSimulateContract({
    abi: supplySystemAbi,
    functionName: 'updateEntityAddress',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supplySystemAbi}__
 */
export const watchSupplySystemEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: supplySystemAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link supplySystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchSupplySystemOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: supplySystemAbi,
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
