import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
} from 'wagmi/codegen';

import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
} from 'wagmi/codegen';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BalanceChecker
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const balanceCheckerAbi = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CombatActions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const combatActionsAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'reg', internalType: 'address', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'InvalidPrefab' },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'actionId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addCombatAction',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'prefabId', internalType: 'uint256', type: 'uint256' },
      { name: 'actionIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'addCombatPrefab',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
    ],
    name: 'getCombatActionNumStat',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getCombatActions',
    outputs: [
      {
        name: '',
        internalType: 'struct Action[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'func', internalType: 'string', type: 'string' },
          { name: 'numStatNames', internalType: 'string[]', type: 'string[]' },
          {
            name: 'numStatValues',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'prefabId', internalType: 'uint256', type: 'uint256' }],
    name: 'getCombatPrefab',
    outputs: [
      {
        name: '',
        internalType: 'struct CombatPrefab',
        type: 'tuple',
        components: [
          {
            name: 'combatActions',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'actionId', internalType: 'uint256', type: 'uint256' }],
    name: 'getFromRepo',
    outputs: [
      {
        name: '',
        internalType: 'struct Action',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'func', internalType: 'string', type: 'string' },
          { name: 'numStatNames', internalType: 'string[]', type: 'string[]' },
          {
            name: 'numStatValues',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'prefabId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'loadFromPrefab',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      {
        name: 'action',
        internalType: 'struct Action',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'func', internalType: 'string', type: 'string' },
          { name: 'numStatNames', internalType: 'string[]', type: 'string[]' },
          {
            name: 'numStatValues',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
        ],
      },
    ],
    name: 'registerCombatAction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IComponentRegistry',
        type: 'address',
      },
    ],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CombatPVE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const combatPveAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'reg', internalType: 'address', type: 'address' },
      { name: '_monster', internalType: 'address', type: 'address' },
      { name: '_stats', internalType: 'address', type: 'address' },
      { name: '_combatActions', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'ActionFailed' },
  { type: 'error', inputs: [], name: 'AlreadyInMatch' },
  { type: 'error', inputs: [], name: 'InvalidAction' },
  { type: 'error', inputs: [], name: 'MustFindMatch' },
  { type: 'error', inputs: [], name: 'MustHold' },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'fightMonster',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getMatch',
    outputs: [
      {
        name: '',
        internalType: 'struct Match',
        type: 'tuple',
        components: [
          { name: 'player', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'monsterId', internalType: 'uint256', type: 'uint256' },
          { name: 'active', internalType: 'bool', type: 'bool' },
          { name: 'winner', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'actionIndex', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'performAction',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IComponentRegistry',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_hero', internalType: 'address', type: 'address' }],
    name: 'setHero',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HeroStatResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const heroStatResolverAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'reg', internalType: 'address', type: 'address' },
      { name: '_heroStats', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'baseStat', internalType: 'string', type: 'string' },
      { name: 'newStat', internalType: 'string', type: 'string' },
      { name: 'addition', internalType: 'uint256', type: 'uint256' },
      { name: 'multiplier', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addResolver',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getResolvers',
    outputs: [
      {
        name: '',
        internalType: 'struct Resolver[]',
        type: 'tuple[]',
        components: [
          { name: 'baseStat', internalType: 'string', type: 'string' },
          { name: 'newStat', internalType: 'string', type: 'string' },
          { name: 'addition', internalType: 'uint256', type: 'uint256' },
          { name: 'multiplier', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'heroStats',
    outputs: [
      { name: '', internalType: 'contract IHeroStats', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'prefabId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'loadFromPrefab',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IComponentRegistry',
        type: 'address',
      },
    ],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HeroStats
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const heroStatsAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'reg', internalType: 'address', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'InvalidPrefab' },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addNumStat',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: '_numStatNames', internalType: 'string[]', type: 'string[]' },
      { name: '_numStatValues', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_stringStatNames', internalType: 'string[]', type: 'string[]' },
      { name: '_stringStatValues', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'addPrefab',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getAllNumStats',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getAllStringStats',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
    ],
    name: 'getNumStat',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getNumStatNames',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'prefabId', internalType: 'uint256', type: 'uint256' }],
    name: 'getPrefab',
    outputs: [
      {
        name: '',
        internalType: 'struct HeroPrefab',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'numStatNames', internalType: 'string[]', type: 'string[]' },
          {
            name: 'numStatValues',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          {
            name: 'stringStatNames',
            internalType: 'string[]',
            type: 'string[]',
          },
          {
            name: 'stringStatValues',
            internalType: 'string[]',
            type: 'string[]',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
    ],
    name: 'getStringStat',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getStringStatNames',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'prefabId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'loadFromPrefab',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IComponentRegistry',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setNumStat',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setStringStat',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HeroStatsGatcha
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const heroStatsGatchaAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'reg', internalType: 'address', type: 'address' },
      { name: '_heroStats', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getBaseStats',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getRarityOdds',
    outputs: [{ name: '', internalType: 'uint8[]', type: 'uint8[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getStartingStats',
    outputs: [{ name: '', internalType: 'uint8[]', type: 'uint8[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'heroStats',
    outputs: [
      { name: '', internalType: 'contract IHeroStats', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'prefabId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'loadFromPrefab',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IComponentRegistry',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_baseStats', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'setBaseStats',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_rarityOdds', internalType: 'uint8[]', type: 'uint8[]' }],
    name: 'setRarityOdds',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_startingStats', internalType: 'uint8[]', type: 'uint8[]' },
    ],
    name: 'setStartingStats',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LootTables
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lootTablesAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'reg', internalType: 'address', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IComponentRegistry',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'shares',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MatchMaking
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const matchMakingAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'reg', internalType: 'address', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IComponentRegistry',
        type: 'address',
      },
    ],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MintableHero
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mintableHeroAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Minting
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mintingAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'reg', internalType: 'address', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'CheckMintPrice' },
  { type: 'error', inputs: [], name: 'InvalidHero' },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'loaders', internalType: 'address[]', type: 'address[]' }],
    name: 'addPrefabLoader',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'prefabId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'loadHero',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'prefabId', internalType: 'uint256', type: 'uint256' }],
    name: 'mintHero',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IComponentRegistry',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_hero', internalType: 'address', type: 'address' }],
    name: 'setHero',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_price', internalType: 'uint256', type: 'uint256' }],
    name: 'setMintPrice',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MonsterStats
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const monsterStatsAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'reg', internalType: 'address', type: 'address' },
      { name: '_combatActions', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: '_numStatNames', internalType: 'string[]', type: 'string[]' },
      { name: '_numStatValues', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_stringStatNames', internalType: 'string[]', type: 'string[]' },
      { name: '_stringStatValues', internalType: 'string[]', type: 'string[]' },
      { name: '_combatActions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'addMonster',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addNumStat',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getAllNumStats',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getAllStringStats',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
    ],
    name: 'getCombatActionNumStat',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getCombatActions',
    outputs: [
      {
        name: '',
        internalType: 'struct Action[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'func', internalType: 'string', type: 'string' },
          { name: 'numStatNames', internalType: 'string[]', type: 'string[]' },
          {
            name: 'numStatValues',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'actionId', internalType: 'uint256', type: 'uint256' }],
    name: 'getFromRepo',
    outputs: [
      {
        name: '',
        internalType: 'struct Action',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint256', type: 'uint256' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'to', internalType: 'address', type: 'address' },
          { name: 'func', internalType: 'string', type: 'string' },
          { name: 'numStatNames', internalType: 'string[]', type: 'string[]' },
          {
            name: 'numStatValues',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
    ],
    name: 'getNumStat',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getNumStatNames',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getPrefab',
    outputs: [
      {
        name: '',
        internalType: 'struct MonsterPrefab',
        type: 'tuple',
        components: [
          { name: 'numStatNames', internalType: 'string[]', type: 'string[]' },
          {
            name: 'numStatValues',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          {
            name: 'stringStatNames',
            internalType: 'string[]',
            type: 'string[]',
          },
          {
            name: 'stringStatValues',
            internalType: 'string[]',
            type: 'string[]',
          },
          {
            name: 'combatActions',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
    ],
    name: 'getStringStat',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getStringStatNames',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'monsterId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'loadFromPrefab',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IComponentRegistry',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setNumStat',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'stat', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setStringStat',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SimpleCombatResolver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const simpleCombatResolverAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'reg', internalType: 'address', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'attacker', internalType: 'uint256', type: 'uint256' },
      { name: 'attackStats', internalType: 'address', type: 'address' },
      { name: 'defender', internalType: 'uint256', type: 'uint256' },
      { name: 'defenseStats', internalType: 'address', type: 'address' },
    ],
    name: 'heal',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'attacker', internalType: 'uint256', type: 'uint256' },
      { name: 'attackStats', internalType: 'address', type: 'address' },
      { name: 'defender', internalType: 'uint256', type: 'uint256' },
      { name: 'defenseStats', internalType: 'address', type: 'address' },
    ],
    name: 'hit',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'registry',
    outputs: [
      {
        name: '',
        internalType: 'contract IComponentRegistry',
        type: 'address',
      },
    ],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link balanceCheckerAbi}__
 */
export const useReadBalanceChecker = /*#__PURE__*/ createUseReadContract({
  abi: balanceCheckerAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link balanceCheckerAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadBalanceCheckerOwnerOf = /*#__PURE__*/ createUseReadContract(
  { abi: balanceCheckerAbi, functionName: 'ownerOf' }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatActionsAbi}__
 */
export const useReadCombatActions = /*#__PURE__*/ createUseReadContract({
  abi: combatActionsAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"admin"`
 */
export const useReadCombatActionsAdmin = /*#__PURE__*/ createUseReadContract({
  abi: combatActionsAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"getCombatActionNumStat"`
 */
export const useReadCombatActionsGetCombatActionNumStat =
  /*#__PURE__*/ createUseReadContract({
    abi: combatActionsAbi,
    functionName: 'getCombatActionNumStat',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"getCombatActions"`
 */
export const useReadCombatActionsGetCombatActions =
  /*#__PURE__*/ createUseReadContract({
    abi: combatActionsAbi,
    functionName: 'getCombatActions',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"getCombatPrefab"`
 */
export const useReadCombatActionsGetCombatPrefab =
  /*#__PURE__*/ createUseReadContract({
    abi: combatActionsAbi,
    functionName: 'getCombatPrefab',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"getFromRepo"`
 */
export const useReadCombatActionsGetFromRepo =
  /*#__PURE__*/ createUseReadContract({
    abi: combatActionsAbi,
    functionName: 'getFromRepo',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"registry"`
 */
export const useReadCombatActionsRegistry = /*#__PURE__*/ createUseReadContract(
  { abi: combatActionsAbi, functionName: 'registry' }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link combatActionsAbi}__
 */
export const useWriteCombatActions = /*#__PURE__*/ createUseWriteContract({
  abi: combatActionsAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"addCombatAction"`
 */
export const useWriteCombatActionsAddCombatAction =
  /*#__PURE__*/ createUseWriteContract({
    abi: combatActionsAbi,
    functionName: 'addCombatAction',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"addCombatPrefab"`
 */
export const useWriteCombatActionsAddCombatPrefab =
  /*#__PURE__*/ createUseWriteContract({
    abi: combatActionsAbi,
    functionName: 'addCombatPrefab',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const useWriteCombatActionsLoadFromPrefab =
  /*#__PURE__*/ createUseWriteContract({
    abi: combatActionsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"registerCombatAction"`
 */
export const useWriteCombatActionsRegisterCombatAction =
  /*#__PURE__*/ createUseWriteContract({
    abi: combatActionsAbi,
    functionName: 'registerCombatAction',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link combatActionsAbi}__
 */
export const useSimulateCombatActions = /*#__PURE__*/ createUseSimulateContract(
  { abi: combatActionsAbi }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"addCombatAction"`
 */
export const useSimulateCombatActionsAddCombatAction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: combatActionsAbi,
    functionName: 'addCombatAction',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"addCombatPrefab"`
 */
export const useSimulateCombatActionsAddCombatPrefab =
  /*#__PURE__*/ createUseSimulateContract({
    abi: combatActionsAbi,
    functionName: 'addCombatPrefab',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const useSimulateCombatActionsLoadFromPrefab =
  /*#__PURE__*/ createUseSimulateContract({
    abi: combatActionsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"registerCombatAction"`
 */
export const useSimulateCombatActionsRegisterCombatAction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: combatActionsAbi,
    functionName: 'registerCombatAction',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatPveAbi}__
 */
export const useReadCombatPve = /*#__PURE__*/ createUseReadContract({
  abi: combatPveAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"admin"`
 */
export const useReadCombatPveAdmin = /*#__PURE__*/ createUseReadContract({
  abi: combatPveAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"getMatch"`
 */
export const useReadCombatPveGetMatch = /*#__PURE__*/ createUseReadContract({
  abi: combatPveAbi,
  functionName: 'getMatch',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"registry"`
 */
export const useReadCombatPveRegistry = /*#__PURE__*/ createUseReadContract({
  abi: combatPveAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link combatPveAbi}__
 */
export const useWriteCombatPve = /*#__PURE__*/ createUseWriteContract({
  abi: combatPveAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"fightMonster"`
 */
export const useWriteCombatPveFightMonster =
  /*#__PURE__*/ createUseWriteContract({
    abi: combatPveAbi,
    functionName: 'fightMonster',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"performAction"`
 */
export const useWriteCombatPvePerformAction =
  /*#__PURE__*/ createUseWriteContract({
    abi: combatPveAbi,
    functionName: 'performAction',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"setHero"`
 */
export const useWriteCombatPveSetHero = /*#__PURE__*/ createUseWriteContract({
  abi: combatPveAbi,
  functionName: 'setHero',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link combatPveAbi}__
 */
export const useSimulateCombatPve = /*#__PURE__*/ createUseSimulateContract({
  abi: combatPveAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"fightMonster"`
 */
export const useSimulateCombatPveFightMonster =
  /*#__PURE__*/ createUseSimulateContract({
    abi: combatPveAbi,
    functionName: 'fightMonster',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"performAction"`
 */
export const useSimulateCombatPvePerformAction =
  /*#__PURE__*/ createUseSimulateContract({
    abi: combatPveAbi,
    functionName: 'performAction',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"setHero"`
 */
export const useSimulateCombatPveSetHero =
  /*#__PURE__*/ createUseSimulateContract({
    abi: combatPveAbi,
    functionName: 'setHero',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatResolverAbi}__
 */
export const useReadHeroStatResolver = /*#__PURE__*/ createUseReadContract({
  abi: heroStatResolverAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"admin"`
 */
export const useReadHeroStatResolverAdmin = /*#__PURE__*/ createUseReadContract(
  { abi: heroStatResolverAbi, functionName: 'admin' }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"getResolvers"`
 */
export const useReadHeroStatResolverGetResolvers =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatResolverAbi,
    functionName: 'getResolvers',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"heroStats"`
 */
export const useReadHeroStatResolverHeroStats =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatResolverAbi,
    functionName: 'heroStats',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"registry"`
 */
export const useReadHeroStatResolverRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatResolverAbi,
    functionName: 'registry',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatResolverAbi}__
 */
export const useWriteHeroStatResolver = /*#__PURE__*/ createUseWriteContract({
  abi: heroStatResolverAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"addResolver"`
 */
export const useWriteHeroStatResolverAddResolver =
  /*#__PURE__*/ createUseWriteContract({
    abi: heroStatResolverAbi,
    functionName: 'addResolver',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const useWriteHeroStatResolverLoadFromPrefab =
  /*#__PURE__*/ createUseWriteContract({
    abi: heroStatResolverAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatResolverAbi}__
 */
export const useSimulateHeroStatResolver =
  /*#__PURE__*/ createUseSimulateContract({ abi: heroStatResolverAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"addResolver"`
 */
export const useSimulateHeroStatResolverAddResolver =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatResolverAbi,
    functionName: 'addResolver',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const useSimulateHeroStatResolverLoadFromPrefab =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatResolverAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsAbi}__
 */
export const useReadHeroStats = /*#__PURE__*/ createUseReadContract({
  abi: heroStatsAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"admin"`
 */
export const useReadHeroStatsAdmin = /*#__PURE__*/ createUseReadContract({
  abi: heroStatsAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getAllNumStats"`
 */
export const useReadHeroStatsGetAllNumStats =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatsAbi,
    functionName: 'getAllNumStats',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getAllStringStats"`
 */
export const useReadHeroStatsGetAllStringStats =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatsAbi,
    functionName: 'getAllStringStats',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getNumStat"`
 */
export const useReadHeroStatsGetNumStat = /*#__PURE__*/ createUseReadContract({
  abi: heroStatsAbi,
  functionName: 'getNumStat',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getNumStatNames"`
 */
export const useReadHeroStatsGetNumStatNames =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatsAbi,
    functionName: 'getNumStatNames',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getPrefab"`
 */
export const useReadHeroStatsGetPrefab = /*#__PURE__*/ createUseReadContract({
  abi: heroStatsAbi,
  functionName: 'getPrefab',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getStringStat"`
 */
export const useReadHeroStatsGetStringStat =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatsAbi,
    functionName: 'getStringStat',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getStringStatNames"`
 */
export const useReadHeroStatsGetStringStatNames =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatsAbi,
    functionName: 'getStringStatNames',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"registry"`
 */
export const useReadHeroStatsRegistry = /*#__PURE__*/ createUseReadContract({
  abi: heroStatsAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsAbi}__
 */
export const useWriteHeroStats = /*#__PURE__*/ createUseWriteContract({
  abi: heroStatsAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"addNumStat"`
 */
export const useWriteHeroStatsAddNumStat = /*#__PURE__*/ createUseWriteContract(
  { abi: heroStatsAbi, functionName: 'addNumStat' }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"addPrefab"`
 */
export const useWriteHeroStatsAddPrefab = /*#__PURE__*/ createUseWriteContract({
  abi: heroStatsAbi,
  functionName: 'addPrefab',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const useWriteHeroStatsLoadFromPrefab =
  /*#__PURE__*/ createUseWriteContract({
    abi: heroStatsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"setNumStat"`
 */
export const useWriteHeroStatsSetNumStat = /*#__PURE__*/ createUseWriteContract(
  { abi: heroStatsAbi, functionName: 'setNumStat' }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"setStringStat"`
 */
export const useWriteHeroStatsSetStringStat =
  /*#__PURE__*/ createUseWriteContract({
    abi: heroStatsAbi,
    functionName: 'setStringStat',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsAbi}__
 */
export const useSimulateHeroStats = /*#__PURE__*/ createUseSimulateContract({
  abi: heroStatsAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"addNumStat"`
 */
export const useSimulateHeroStatsAddNumStat =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatsAbi,
    functionName: 'addNumStat',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"addPrefab"`
 */
export const useSimulateHeroStatsAddPrefab =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatsAbi,
    functionName: 'addPrefab',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const useSimulateHeroStatsLoadFromPrefab =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"setNumStat"`
 */
export const useSimulateHeroStatsSetNumStat =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatsAbi,
    functionName: 'setNumStat',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"setStringStat"`
 */
export const useSimulateHeroStatsSetStringStat =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatsAbi,
    functionName: 'setStringStat',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__
 */
export const useReadHeroStatsGatcha = /*#__PURE__*/ createUseReadContract({
  abi: heroStatsGatchaAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"admin"`
 */
export const useReadHeroStatsGatchaAdmin = /*#__PURE__*/ createUseReadContract({
  abi: heroStatsGatchaAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"getBaseStats"`
 */
export const useReadHeroStatsGatchaGetBaseStats =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatsGatchaAbi,
    functionName: 'getBaseStats',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"getRarityOdds"`
 */
export const useReadHeroStatsGatchaGetRarityOdds =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatsGatchaAbi,
    functionName: 'getRarityOdds',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"getStartingStats"`
 */
export const useReadHeroStatsGatchaGetStartingStats =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatsGatchaAbi,
    functionName: 'getStartingStats',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"heroStats"`
 */
export const useReadHeroStatsGatchaHeroStats =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatsGatchaAbi,
    functionName: 'heroStats',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"registry"`
 */
export const useReadHeroStatsGatchaRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: heroStatsGatchaAbi,
    functionName: 'registry',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__
 */
export const useWriteHeroStatsGatcha = /*#__PURE__*/ createUseWriteContract({
  abi: heroStatsGatchaAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const useWriteHeroStatsGatchaLoadFromPrefab =
  /*#__PURE__*/ createUseWriteContract({
    abi: heroStatsGatchaAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setBaseStats"`
 */
export const useWriteHeroStatsGatchaSetBaseStats =
  /*#__PURE__*/ createUseWriteContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setBaseStats',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setRarityOdds"`
 */
export const useWriteHeroStatsGatchaSetRarityOdds =
  /*#__PURE__*/ createUseWriteContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setRarityOdds',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setStartingStats"`
 */
export const useWriteHeroStatsGatchaSetStartingStats =
  /*#__PURE__*/ createUseWriteContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setStartingStats',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__
 */
export const useSimulateHeroStatsGatcha =
  /*#__PURE__*/ createUseSimulateContract({ abi: heroStatsGatchaAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const useSimulateHeroStatsGatchaLoadFromPrefab =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatsGatchaAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setBaseStats"`
 */
export const useSimulateHeroStatsGatchaSetBaseStats =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setBaseStats',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setRarityOdds"`
 */
export const useSimulateHeroStatsGatchaSetRarityOdds =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setRarityOdds',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setStartingStats"`
 */
export const useSimulateHeroStatsGatchaSetStartingStats =
  /*#__PURE__*/ createUseSimulateContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setStartingStats',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lootTablesAbi}__
 */
export const useReadLootTables = /*#__PURE__*/ createUseReadContract({
  abi: lootTablesAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lootTablesAbi}__ and `functionName` set to `"admin"`
 */
export const useReadLootTablesAdmin = /*#__PURE__*/ createUseReadContract({
  abi: lootTablesAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lootTablesAbi}__ and `functionName` set to `"registry"`
 */
export const useReadLootTablesRegistry = /*#__PURE__*/ createUseReadContract({
  abi: lootTablesAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lootTablesAbi}__ and `functionName` set to `"shares"`
 */
export const useReadLootTablesShares = /*#__PURE__*/ createUseReadContract({
  abi: lootTablesAbi,
  functionName: 'shares',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchMakingAbi}__
 */
export const useReadMatchMaking = /*#__PURE__*/ createUseReadContract({
  abi: matchMakingAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchMakingAbi}__ and `functionName` set to `"admin"`
 */
export const useReadMatchMakingAdmin = /*#__PURE__*/ createUseReadContract({
  abi: matchMakingAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link matchMakingAbi}__ and `functionName` set to `"registry"`
 */
export const useReadMatchMakingRegistry = /*#__PURE__*/ createUseReadContract({
  abi: matchMakingAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mintableHeroAbi}__
 */
export const useReadMintableHero = /*#__PURE__*/ createUseReadContract({
  abi: mintableHeroAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mintableHeroAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadMintableHeroOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: mintableHeroAbi,
  functionName: 'ownerOf',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mintableHeroAbi}__
 */
export const useWriteMintableHero = /*#__PURE__*/ createUseWriteContract({
  abi: mintableHeroAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mintableHeroAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteMintableHeroMint = /*#__PURE__*/ createUseWriteContract({
  abi: mintableHeroAbi,
  functionName: 'mint',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mintableHeroAbi}__
 */
export const useSimulateMintableHero = /*#__PURE__*/ createUseSimulateContract({
  abi: mintableHeroAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mintableHeroAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateMintableHeroMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mintableHeroAbi,
    functionName: 'mint',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mintingAbi}__
 */
export const useReadMinting = /*#__PURE__*/ createUseReadContract({
  abi: mintingAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"admin"`
 */
export const useReadMintingAdmin = /*#__PURE__*/ createUseReadContract({
  abi: mintingAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"registry"`
 */
export const useReadMintingRegistry = /*#__PURE__*/ createUseReadContract({
  abi: mintingAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mintingAbi}__
 */
export const useWriteMinting = /*#__PURE__*/ createUseWriteContract({
  abi: mintingAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"addPrefabLoader"`
 */
export const useWriteMintingAddPrefabLoader =
  /*#__PURE__*/ createUseWriteContract({
    abi: mintingAbi,
    functionName: 'addPrefabLoader',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"loadHero"`
 */
export const useWriteMintingLoadHero = /*#__PURE__*/ createUseWriteContract({
  abi: mintingAbi,
  functionName: 'loadHero',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"mintHero"`
 */
export const useWriteMintingMintHero = /*#__PURE__*/ createUseWriteContract({
  abi: mintingAbi,
  functionName: 'mintHero',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"setHero"`
 */
export const useWriteMintingSetHero = /*#__PURE__*/ createUseWriteContract({
  abi: mintingAbi,
  functionName: 'setHero',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const useWriteMintingSetMintPrice = /*#__PURE__*/ createUseWriteContract(
  { abi: mintingAbi, functionName: 'setMintPrice' }
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mintingAbi}__
 */
export const useSimulateMinting = /*#__PURE__*/ createUseSimulateContract({
  abi: mintingAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"addPrefabLoader"`
 */
export const useSimulateMintingAddPrefabLoader =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mintingAbi,
    functionName: 'addPrefabLoader',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"loadHero"`
 */
export const useSimulateMintingLoadHero =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mintingAbi,
    functionName: 'loadHero',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"mintHero"`
 */
export const useSimulateMintingMintHero =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mintingAbi,
    functionName: 'mintHero',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"setHero"`
 */
export const useSimulateMintingSetHero =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mintingAbi,
    functionName: 'setHero',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const useSimulateMintingSetMintPrice =
  /*#__PURE__*/ createUseSimulateContract({
    abi: mintingAbi,
    functionName: 'setMintPrice',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__
 */
export const useReadMonsterStats = /*#__PURE__*/ createUseReadContract({
  abi: monsterStatsAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"admin"`
 */
export const useReadMonsterStatsAdmin = /*#__PURE__*/ createUseReadContract({
  abi: monsterStatsAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getAllNumStats"`
 */
export const useReadMonsterStatsGetAllNumStats =
  /*#__PURE__*/ createUseReadContract({
    abi: monsterStatsAbi,
    functionName: 'getAllNumStats',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getAllStringStats"`
 */
export const useReadMonsterStatsGetAllStringStats =
  /*#__PURE__*/ createUseReadContract({
    abi: monsterStatsAbi,
    functionName: 'getAllStringStats',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getCombatActionNumStat"`
 */
export const useReadMonsterStatsGetCombatActionNumStat =
  /*#__PURE__*/ createUseReadContract({
    abi: monsterStatsAbi,
    functionName: 'getCombatActionNumStat',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getCombatActions"`
 */
export const useReadMonsterStatsGetCombatActions =
  /*#__PURE__*/ createUseReadContract({
    abi: monsterStatsAbi,
    functionName: 'getCombatActions',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getFromRepo"`
 */
export const useReadMonsterStatsGetFromRepo =
  /*#__PURE__*/ createUseReadContract({
    abi: monsterStatsAbi,
    functionName: 'getFromRepo',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getNumStat"`
 */
export const useReadMonsterStatsGetNumStat =
  /*#__PURE__*/ createUseReadContract({
    abi: monsterStatsAbi,
    functionName: 'getNumStat',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getNumStatNames"`
 */
export const useReadMonsterStatsGetNumStatNames =
  /*#__PURE__*/ createUseReadContract({
    abi: monsterStatsAbi,
    functionName: 'getNumStatNames',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getPrefab"`
 */
export const useReadMonsterStatsGetPrefab = /*#__PURE__*/ createUseReadContract(
  { abi: monsterStatsAbi, functionName: 'getPrefab' }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getStringStat"`
 */
export const useReadMonsterStatsGetStringStat =
  /*#__PURE__*/ createUseReadContract({
    abi: monsterStatsAbi,
    functionName: 'getStringStat',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getStringStatNames"`
 */
export const useReadMonsterStatsGetStringStatNames =
  /*#__PURE__*/ createUseReadContract({
    abi: monsterStatsAbi,
    functionName: 'getStringStatNames',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"registry"`
 */
export const useReadMonsterStatsRegistry = /*#__PURE__*/ createUseReadContract({
  abi: monsterStatsAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link monsterStatsAbi}__
 */
export const useWriteMonsterStats = /*#__PURE__*/ createUseWriteContract({
  abi: monsterStatsAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"addMonster"`
 */
export const useWriteMonsterStatsAddMonster =
  /*#__PURE__*/ createUseWriteContract({
    abi: monsterStatsAbi,
    functionName: 'addMonster',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"addNumStat"`
 */
export const useWriteMonsterStatsAddNumStat =
  /*#__PURE__*/ createUseWriteContract({
    abi: monsterStatsAbi,
    functionName: 'addNumStat',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const useWriteMonsterStatsLoadFromPrefab =
  /*#__PURE__*/ createUseWriteContract({
    abi: monsterStatsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"setNumStat"`
 */
export const useWriteMonsterStatsSetNumStat =
  /*#__PURE__*/ createUseWriteContract({
    abi: monsterStatsAbi,
    functionName: 'setNumStat',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"setStringStat"`
 */
export const useWriteMonsterStatsSetStringStat =
  /*#__PURE__*/ createUseWriteContract({
    abi: monsterStatsAbi,
    functionName: 'setStringStat',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link monsterStatsAbi}__
 */
export const useSimulateMonsterStats = /*#__PURE__*/ createUseSimulateContract({
  abi: monsterStatsAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"addMonster"`
 */
export const useSimulateMonsterStatsAddMonster =
  /*#__PURE__*/ createUseSimulateContract({
    abi: monsterStatsAbi,
    functionName: 'addMonster',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"addNumStat"`
 */
export const useSimulateMonsterStatsAddNumStat =
  /*#__PURE__*/ createUseSimulateContract({
    abi: monsterStatsAbi,
    functionName: 'addNumStat',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const useSimulateMonsterStatsLoadFromPrefab =
  /*#__PURE__*/ createUseSimulateContract({
    abi: monsterStatsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"setNumStat"`
 */
export const useSimulateMonsterStatsSetNumStat =
  /*#__PURE__*/ createUseSimulateContract({
    abi: monsterStatsAbi,
    functionName: 'setNumStat',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"setStringStat"`
 */
export const useSimulateMonsterStatsSetStringStat =
  /*#__PURE__*/ createUseSimulateContract({
    abi: monsterStatsAbi,
    functionName: 'setStringStat',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__
 */
export const useReadSimpleCombatResolver = /*#__PURE__*/ createUseReadContract({
  abi: simpleCombatResolverAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"admin"`
 */
export const useReadSimpleCombatResolverAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: simpleCombatResolverAbi,
    functionName: 'admin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"registry"`
 */
export const useReadSimpleCombatResolverRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: simpleCombatResolverAbi,
    functionName: 'registry',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__
 */
export const useWriteSimpleCombatResolver =
  /*#__PURE__*/ createUseWriteContract({ abi: simpleCombatResolverAbi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"heal"`
 */
export const useWriteSimpleCombatResolverHeal =
  /*#__PURE__*/ createUseWriteContract({
    abi: simpleCombatResolverAbi,
    functionName: 'heal',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"hit"`
 */
export const useWriteSimpleCombatResolverHit =
  /*#__PURE__*/ createUseWriteContract({
    abi: simpleCombatResolverAbi,
    functionName: 'hit',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__
 */
export const useSimulateSimpleCombatResolver =
  /*#__PURE__*/ createUseSimulateContract({ abi: simpleCombatResolverAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"heal"`
 */
export const useSimulateSimpleCombatResolverHeal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: simpleCombatResolverAbi,
    functionName: 'heal',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"hit"`
 */
export const useSimulateSimpleCombatResolverHit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: simpleCombatResolverAbi,
    functionName: 'hit',
  });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link balanceCheckerAbi}__
 */
export const readBalanceChecker = /*#__PURE__*/ createReadContract({
  abi: balanceCheckerAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link balanceCheckerAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readBalanceCheckerOwnerOf = /*#__PURE__*/ createReadContract({
  abi: balanceCheckerAbi,
  functionName: 'ownerOf',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatActionsAbi}__
 */
export const readCombatActions = /*#__PURE__*/ createReadContract({
  abi: combatActionsAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"admin"`
 */
export const readCombatActionsAdmin = /*#__PURE__*/ createReadContract({
  abi: combatActionsAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"getCombatActionNumStat"`
 */
export const readCombatActionsGetCombatActionNumStat =
  /*#__PURE__*/ createReadContract({
    abi: combatActionsAbi,
    functionName: 'getCombatActionNumStat',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"getCombatActions"`
 */
export const readCombatActionsGetCombatActions =
  /*#__PURE__*/ createReadContract({
    abi: combatActionsAbi,
    functionName: 'getCombatActions',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"getCombatPrefab"`
 */
export const readCombatActionsGetCombatPrefab =
  /*#__PURE__*/ createReadContract({
    abi: combatActionsAbi,
    functionName: 'getCombatPrefab',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"getFromRepo"`
 */
export const readCombatActionsGetFromRepo = /*#__PURE__*/ createReadContract({
  abi: combatActionsAbi,
  functionName: 'getFromRepo',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"registry"`
 */
export const readCombatActionsRegistry = /*#__PURE__*/ createReadContract({
  abi: combatActionsAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link combatActionsAbi}__
 */
export const writeCombatActions = /*#__PURE__*/ createWriteContract({
  abi: combatActionsAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"addCombatAction"`
 */
export const writeCombatActionsAddCombatAction =
  /*#__PURE__*/ createWriteContract({
    abi: combatActionsAbi,
    functionName: 'addCombatAction',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"addCombatPrefab"`
 */
export const writeCombatActionsAddCombatPrefab =
  /*#__PURE__*/ createWriteContract({
    abi: combatActionsAbi,
    functionName: 'addCombatPrefab',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const writeCombatActionsLoadFromPrefab =
  /*#__PURE__*/ createWriteContract({
    abi: combatActionsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"registerCombatAction"`
 */
export const writeCombatActionsRegisterCombatAction =
  /*#__PURE__*/ createWriteContract({
    abi: combatActionsAbi,
    functionName: 'registerCombatAction',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link combatActionsAbi}__
 */
export const simulateCombatActions = /*#__PURE__*/ createSimulateContract({
  abi: combatActionsAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"addCombatAction"`
 */
export const simulateCombatActionsAddCombatAction =
  /*#__PURE__*/ createSimulateContract({
    abi: combatActionsAbi,
    functionName: 'addCombatAction',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"addCombatPrefab"`
 */
export const simulateCombatActionsAddCombatPrefab =
  /*#__PURE__*/ createSimulateContract({
    abi: combatActionsAbi,
    functionName: 'addCombatPrefab',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const simulateCombatActionsLoadFromPrefab =
  /*#__PURE__*/ createSimulateContract({
    abi: combatActionsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link combatActionsAbi}__ and `functionName` set to `"registerCombatAction"`
 */
export const simulateCombatActionsRegisterCombatAction =
  /*#__PURE__*/ createSimulateContract({
    abi: combatActionsAbi,
    functionName: 'registerCombatAction',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatPveAbi}__
 */
export const readCombatPve = /*#__PURE__*/ createReadContract({
  abi: combatPveAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"admin"`
 */
export const readCombatPveAdmin = /*#__PURE__*/ createReadContract({
  abi: combatPveAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"getMatch"`
 */
export const readCombatPveGetMatch = /*#__PURE__*/ createReadContract({
  abi: combatPveAbi,
  functionName: 'getMatch',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"registry"`
 */
export const readCombatPveRegistry = /*#__PURE__*/ createReadContract({
  abi: combatPveAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link combatPveAbi}__
 */
export const writeCombatPve = /*#__PURE__*/ createWriteContract({
  abi: combatPveAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"fightMonster"`
 */
export const writeCombatPveFightMonster = /*#__PURE__*/ createWriteContract({
  abi: combatPveAbi,
  functionName: 'fightMonster',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"performAction"`
 */
export const writeCombatPvePerformAction = /*#__PURE__*/ createWriteContract({
  abi: combatPveAbi,
  functionName: 'performAction',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"setHero"`
 */
export const writeCombatPveSetHero = /*#__PURE__*/ createWriteContract({
  abi: combatPveAbi,
  functionName: 'setHero',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link combatPveAbi}__
 */
export const simulateCombatPve = /*#__PURE__*/ createSimulateContract({
  abi: combatPveAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"fightMonster"`
 */
export const simulateCombatPveFightMonster =
  /*#__PURE__*/ createSimulateContract({
    abi: combatPveAbi,
    functionName: 'fightMonster',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"performAction"`
 */
export const simulateCombatPvePerformAction =
  /*#__PURE__*/ createSimulateContract({
    abi: combatPveAbi,
    functionName: 'performAction',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link combatPveAbi}__ and `functionName` set to `"setHero"`
 */
export const simulateCombatPveSetHero = /*#__PURE__*/ createSimulateContract({
  abi: combatPveAbi,
  functionName: 'setHero',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatResolverAbi}__
 */
export const readHeroStatResolver = /*#__PURE__*/ createReadContract({
  abi: heroStatResolverAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"admin"`
 */
export const readHeroStatResolverAdmin = /*#__PURE__*/ createReadContract({
  abi: heroStatResolverAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"getResolvers"`
 */
export const readHeroStatResolverGetResolvers =
  /*#__PURE__*/ createReadContract({
    abi: heroStatResolverAbi,
    functionName: 'getResolvers',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"heroStats"`
 */
export const readHeroStatResolverHeroStats = /*#__PURE__*/ createReadContract({
  abi: heroStatResolverAbi,
  functionName: 'heroStats',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"registry"`
 */
export const readHeroStatResolverRegistry = /*#__PURE__*/ createReadContract({
  abi: heroStatResolverAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatResolverAbi}__
 */
export const writeHeroStatResolver = /*#__PURE__*/ createWriteContract({
  abi: heroStatResolverAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"addResolver"`
 */
export const writeHeroStatResolverAddResolver =
  /*#__PURE__*/ createWriteContract({
    abi: heroStatResolverAbi,
    functionName: 'addResolver',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const writeHeroStatResolverLoadFromPrefab =
  /*#__PURE__*/ createWriteContract({
    abi: heroStatResolverAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatResolverAbi}__
 */
export const simulateHeroStatResolver = /*#__PURE__*/ createSimulateContract({
  abi: heroStatResolverAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"addResolver"`
 */
export const simulateHeroStatResolverAddResolver =
  /*#__PURE__*/ createSimulateContract({
    abi: heroStatResolverAbi,
    functionName: 'addResolver',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatResolverAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const simulateHeroStatResolverLoadFromPrefab =
  /*#__PURE__*/ createSimulateContract({
    abi: heroStatResolverAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsAbi}__
 */
export const readHeroStats = /*#__PURE__*/ createReadContract({
  abi: heroStatsAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"admin"`
 */
export const readHeroStatsAdmin = /*#__PURE__*/ createReadContract({
  abi: heroStatsAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getAllNumStats"`
 */
export const readHeroStatsGetAllNumStats = /*#__PURE__*/ createReadContract({
  abi: heroStatsAbi,
  functionName: 'getAllNumStats',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getAllStringStats"`
 */
export const readHeroStatsGetAllStringStats = /*#__PURE__*/ createReadContract({
  abi: heroStatsAbi,
  functionName: 'getAllStringStats',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getNumStat"`
 */
export const readHeroStatsGetNumStat = /*#__PURE__*/ createReadContract({
  abi: heroStatsAbi,
  functionName: 'getNumStat',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getNumStatNames"`
 */
export const readHeroStatsGetNumStatNames = /*#__PURE__*/ createReadContract({
  abi: heroStatsAbi,
  functionName: 'getNumStatNames',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getPrefab"`
 */
export const readHeroStatsGetPrefab = /*#__PURE__*/ createReadContract({
  abi: heroStatsAbi,
  functionName: 'getPrefab',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getStringStat"`
 */
export const readHeroStatsGetStringStat = /*#__PURE__*/ createReadContract({
  abi: heroStatsAbi,
  functionName: 'getStringStat',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"getStringStatNames"`
 */
export const readHeroStatsGetStringStatNames = /*#__PURE__*/ createReadContract(
  { abi: heroStatsAbi, functionName: 'getStringStatNames' }
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"registry"`
 */
export const readHeroStatsRegistry = /*#__PURE__*/ createReadContract({
  abi: heroStatsAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsAbi}__
 */
export const writeHeroStats = /*#__PURE__*/ createWriteContract({
  abi: heroStatsAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"addNumStat"`
 */
export const writeHeroStatsAddNumStat = /*#__PURE__*/ createWriteContract({
  abi: heroStatsAbi,
  functionName: 'addNumStat',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"addPrefab"`
 */
export const writeHeroStatsAddPrefab = /*#__PURE__*/ createWriteContract({
  abi: heroStatsAbi,
  functionName: 'addPrefab',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const writeHeroStatsLoadFromPrefab = /*#__PURE__*/ createWriteContract({
  abi: heroStatsAbi,
  functionName: 'loadFromPrefab',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"setNumStat"`
 */
export const writeHeroStatsSetNumStat = /*#__PURE__*/ createWriteContract({
  abi: heroStatsAbi,
  functionName: 'setNumStat',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"setStringStat"`
 */
export const writeHeroStatsSetStringStat = /*#__PURE__*/ createWriteContract({
  abi: heroStatsAbi,
  functionName: 'setStringStat',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsAbi}__
 */
export const simulateHeroStats = /*#__PURE__*/ createSimulateContract({
  abi: heroStatsAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"addNumStat"`
 */
export const simulateHeroStatsAddNumStat = /*#__PURE__*/ createSimulateContract(
  { abi: heroStatsAbi, functionName: 'addNumStat' }
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"addPrefab"`
 */
export const simulateHeroStatsAddPrefab = /*#__PURE__*/ createSimulateContract({
  abi: heroStatsAbi,
  functionName: 'addPrefab',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const simulateHeroStatsLoadFromPrefab =
  /*#__PURE__*/ createSimulateContract({
    abi: heroStatsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"setNumStat"`
 */
export const simulateHeroStatsSetNumStat = /*#__PURE__*/ createSimulateContract(
  { abi: heroStatsAbi, functionName: 'setNumStat' }
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsAbi}__ and `functionName` set to `"setStringStat"`
 */
export const simulateHeroStatsSetStringStat =
  /*#__PURE__*/ createSimulateContract({
    abi: heroStatsAbi,
    functionName: 'setStringStat',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__
 */
export const readHeroStatsGatcha = /*#__PURE__*/ createReadContract({
  abi: heroStatsGatchaAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"admin"`
 */
export const readHeroStatsGatchaAdmin = /*#__PURE__*/ createReadContract({
  abi: heroStatsGatchaAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"getBaseStats"`
 */
export const readHeroStatsGatchaGetBaseStats = /*#__PURE__*/ createReadContract(
  { abi: heroStatsGatchaAbi, functionName: 'getBaseStats' }
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"getRarityOdds"`
 */
export const readHeroStatsGatchaGetRarityOdds =
  /*#__PURE__*/ createReadContract({
    abi: heroStatsGatchaAbi,
    functionName: 'getRarityOdds',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"getStartingStats"`
 */
export const readHeroStatsGatchaGetStartingStats =
  /*#__PURE__*/ createReadContract({
    abi: heroStatsGatchaAbi,
    functionName: 'getStartingStats',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"heroStats"`
 */
export const readHeroStatsGatchaHeroStats = /*#__PURE__*/ createReadContract({
  abi: heroStatsGatchaAbi,
  functionName: 'heroStats',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"registry"`
 */
export const readHeroStatsGatchaRegistry = /*#__PURE__*/ createReadContract({
  abi: heroStatsGatchaAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__
 */
export const writeHeroStatsGatcha = /*#__PURE__*/ createWriteContract({
  abi: heroStatsGatchaAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const writeHeroStatsGatchaLoadFromPrefab =
  /*#__PURE__*/ createWriteContract({
    abi: heroStatsGatchaAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setBaseStats"`
 */
export const writeHeroStatsGatchaSetBaseStats =
  /*#__PURE__*/ createWriteContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setBaseStats',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setRarityOdds"`
 */
export const writeHeroStatsGatchaSetRarityOdds =
  /*#__PURE__*/ createWriteContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setRarityOdds',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setStartingStats"`
 */
export const writeHeroStatsGatchaSetStartingStats =
  /*#__PURE__*/ createWriteContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setStartingStats',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__
 */
export const simulateHeroStatsGatcha = /*#__PURE__*/ createSimulateContract({
  abi: heroStatsGatchaAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const simulateHeroStatsGatchaLoadFromPrefab =
  /*#__PURE__*/ createSimulateContract({
    abi: heroStatsGatchaAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setBaseStats"`
 */
export const simulateHeroStatsGatchaSetBaseStats =
  /*#__PURE__*/ createSimulateContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setBaseStats',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setRarityOdds"`
 */
export const simulateHeroStatsGatchaSetRarityOdds =
  /*#__PURE__*/ createSimulateContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setRarityOdds',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link heroStatsGatchaAbi}__ and `functionName` set to `"setStartingStats"`
 */
export const simulateHeroStatsGatchaSetStartingStats =
  /*#__PURE__*/ createSimulateContract({
    abi: heroStatsGatchaAbi,
    functionName: 'setStartingStats',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lootTablesAbi}__
 */
export const readLootTables = /*#__PURE__*/ createReadContract({
  abi: lootTablesAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lootTablesAbi}__ and `functionName` set to `"admin"`
 */
export const readLootTablesAdmin = /*#__PURE__*/ createReadContract({
  abi: lootTablesAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lootTablesAbi}__ and `functionName` set to `"registry"`
 */
export const readLootTablesRegistry = /*#__PURE__*/ createReadContract({
  abi: lootTablesAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lootTablesAbi}__ and `functionName` set to `"shares"`
 */
export const readLootTablesShares = /*#__PURE__*/ createReadContract({
  abi: lootTablesAbi,
  functionName: 'shares',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link matchMakingAbi}__
 */
export const readMatchMaking = /*#__PURE__*/ createReadContract({
  abi: matchMakingAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link matchMakingAbi}__ and `functionName` set to `"admin"`
 */
export const readMatchMakingAdmin = /*#__PURE__*/ createReadContract({
  abi: matchMakingAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link matchMakingAbi}__ and `functionName` set to `"registry"`
 */
export const readMatchMakingRegistry = /*#__PURE__*/ createReadContract({
  abi: matchMakingAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mintableHeroAbi}__
 */
export const readMintableHero = /*#__PURE__*/ createReadContract({
  abi: mintableHeroAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mintableHeroAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readMintableHeroOwnerOf = /*#__PURE__*/ createReadContract({
  abi: mintableHeroAbi,
  functionName: 'ownerOf',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mintableHeroAbi}__
 */
export const writeMintableHero = /*#__PURE__*/ createWriteContract({
  abi: mintableHeroAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mintableHeroAbi}__ and `functionName` set to `"mint"`
 */
export const writeMintableHeroMint = /*#__PURE__*/ createWriteContract({
  abi: mintableHeroAbi,
  functionName: 'mint',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mintableHeroAbi}__
 */
export const simulateMintableHero = /*#__PURE__*/ createSimulateContract({
  abi: mintableHeroAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mintableHeroAbi}__ and `functionName` set to `"mint"`
 */
export const simulateMintableHeroMint = /*#__PURE__*/ createSimulateContract({
  abi: mintableHeroAbi,
  functionName: 'mint',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mintingAbi}__
 */
export const readMinting = /*#__PURE__*/ createReadContract({
  abi: mintingAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"admin"`
 */
export const readMintingAdmin = /*#__PURE__*/ createReadContract({
  abi: mintingAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"registry"`
 */
export const readMintingRegistry = /*#__PURE__*/ createReadContract({
  abi: mintingAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mintingAbi}__
 */
export const writeMinting = /*#__PURE__*/ createWriteContract({
  abi: mintingAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"addPrefabLoader"`
 */
export const writeMintingAddPrefabLoader = /*#__PURE__*/ createWriteContract({
  abi: mintingAbi,
  functionName: 'addPrefabLoader',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"loadHero"`
 */
export const writeMintingLoadHero = /*#__PURE__*/ createWriteContract({
  abi: mintingAbi,
  functionName: 'loadHero',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"mintHero"`
 */
export const writeMintingMintHero = /*#__PURE__*/ createWriteContract({
  abi: mintingAbi,
  functionName: 'mintHero',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"setHero"`
 */
export const writeMintingSetHero = /*#__PURE__*/ createWriteContract({
  abi: mintingAbi,
  functionName: 'setHero',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const writeMintingSetMintPrice = /*#__PURE__*/ createWriteContract({
  abi: mintingAbi,
  functionName: 'setMintPrice',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mintingAbi}__
 */
export const simulateMinting = /*#__PURE__*/ createSimulateContract({
  abi: mintingAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"addPrefabLoader"`
 */
export const simulateMintingAddPrefabLoader =
  /*#__PURE__*/ createSimulateContract({
    abi: mintingAbi,
    functionName: 'addPrefabLoader',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"loadHero"`
 */
export const simulateMintingLoadHero = /*#__PURE__*/ createSimulateContract({
  abi: mintingAbi,
  functionName: 'loadHero',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"mintHero"`
 */
export const simulateMintingMintHero = /*#__PURE__*/ createSimulateContract({
  abi: mintingAbi,
  functionName: 'mintHero',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"setHero"`
 */
export const simulateMintingSetHero = /*#__PURE__*/ createSimulateContract({
  abi: mintingAbi,
  functionName: 'setHero',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link mintingAbi}__ and `functionName` set to `"setMintPrice"`
 */
export const simulateMintingSetMintPrice = /*#__PURE__*/ createSimulateContract(
  { abi: mintingAbi, functionName: 'setMintPrice' }
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__
 */
export const readMonsterStats = /*#__PURE__*/ createReadContract({
  abi: monsterStatsAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"admin"`
 */
export const readMonsterStatsAdmin = /*#__PURE__*/ createReadContract({
  abi: monsterStatsAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getAllNumStats"`
 */
export const readMonsterStatsGetAllNumStats = /*#__PURE__*/ createReadContract({
  abi: monsterStatsAbi,
  functionName: 'getAllNumStats',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getAllStringStats"`
 */
export const readMonsterStatsGetAllStringStats =
  /*#__PURE__*/ createReadContract({
    abi: monsterStatsAbi,
    functionName: 'getAllStringStats',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getCombatActionNumStat"`
 */
export const readMonsterStatsGetCombatActionNumStat =
  /*#__PURE__*/ createReadContract({
    abi: monsterStatsAbi,
    functionName: 'getCombatActionNumStat',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getCombatActions"`
 */
export const readMonsterStatsGetCombatActions =
  /*#__PURE__*/ createReadContract({
    abi: monsterStatsAbi,
    functionName: 'getCombatActions',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getFromRepo"`
 */
export const readMonsterStatsGetFromRepo = /*#__PURE__*/ createReadContract({
  abi: monsterStatsAbi,
  functionName: 'getFromRepo',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getNumStat"`
 */
export const readMonsterStatsGetNumStat = /*#__PURE__*/ createReadContract({
  abi: monsterStatsAbi,
  functionName: 'getNumStat',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getNumStatNames"`
 */
export const readMonsterStatsGetNumStatNames = /*#__PURE__*/ createReadContract(
  { abi: monsterStatsAbi, functionName: 'getNumStatNames' }
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getPrefab"`
 */
export const readMonsterStatsGetPrefab = /*#__PURE__*/ createReadContract({
  abi: monsterStatsAbi,
  functionName: 'getPrefab',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getStringStat"`
 */
export const readMonsterStatsGetStringStat = /*#__PURE__*/ createReadContract({
  abi: monsterStatsAbi,
  functionName: 'getStringStat',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"getStringStatNames"`
 */
export const readMonsterStatsGetStringStatNames =
  /*#__PURE__*/ createReadContract({
    abi: monsterStatsAbi,
    functionName: 'getStringStatNames',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"registry"`
 */
export const readMonsterStatsRegistry = /*#__PURE__*/ createReadContract({
  abi: monsterStatsAbi,
  functionName: 'registry',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link monsterStatsAbi}__
 */
export const writeMonsterStats = /*#__PURE__*/ createWriteContract({
  abi: monsterStatsAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"addMonster"`
 */
export const writeMonsterStatsAddMonster = /*#__PURE__*/ createWriteContract({
  abi: monsterStatsAbi,
  functionName: 'addMonster',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"addNumStat"`
 */
export const writeMonsterStatsAddNumStat = /*#__PURE__*/ createWriteContract({
  abi: monsterStatsAbi,
  functionName: 'addNumStat',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const writeMonsterStatsLoadFromPrefab =
  /*#__PURE__*/ createWriteContract({
    abi: monsterStatsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"setNumStat"`
 */
export const writeMonsterStatsSetNumStat = /*#__PURE__*/ createWriteContract({
  abi: monsterStatsAbi,
  functionName: 'setNumStat',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"setStringStat"`
 */
export const writeMonsterStatsSetStringStat = /*#__PURE__*/ createWriteContract(
  { abi: monsterStatsAbi, functionName: 'setStringStat' }
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link monsterStatsAbi}__
 */
export const simulateMonsterStats = /*#__PURE__*/ createSimulateContract({
  abi: monsterStatsAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"addMonster"`
 */
export const simulateMonsterStatsAddMonster =
  /*#__PURE__*/ createSimulateContract({
    abi: monsterStatsAbi,
    functionName: 'addMonster',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"addNumStat"`
 */
export const simulateMonsterStatsAddNumStat =
  /*#__PURE__*/ createSimulateContract({
    abi: monsterStatsAbi,
    functionName: 'addNumStat',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"loadFromPrefab"`
 */
export const simulateMonsterStatsLoadFromPrefab =
  /*#__PURE__*/ createSimulateContract({
    abi: monsterStatsAbi,
    functionName: 'loadFromPrefab',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"setNumStat"`
 */
export const simulateMonsterStatsSetNumStat =
  /*#__PURE__*/ createSimulateContract({
    abi: monsterStatsAbi,
    functionName: 'setNumStat',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link monsterStatsAbi}__ and `functionName` set to `"setStringStat"`
 */
export const simulateMonsterStatsSetStringStat =
  /*#__PURE__*/ createSimulateContract({
    abi: monsterStatsAbi,
    functionName: 'setStringStat',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__
 */
export const readSimpleCombatResolver = /*#__PURE__*/ createReadContract({
  abi: simpleCombatResolverAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"admin"`
 */
export const readSimpleCombatResolverAdmin = /*#__PURE__*/ createReadContract({
  abi: simpleCombatResolverAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"registry"`
 */
export const readSimpleCombatResolverRegistry =
  /*#__PURE__*/ createReadContract({
    abi: simpleCombatResolverAbi,
    functionName: 'registry',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__
 */
export const writeSimpleCombatResolver = /*#__PURE__*/ createWriteContract({
  abi: simpleCombatResolverAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"heal"`
 */
export const writeSimpleCombatResolverHeal = /*#__PURE__*/ createWriteContract({
  abi: simpleCombatResolverAbi,
  functionName: 'heal',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"hit"`
 */
export const writeSimpleCombatResolverHit = /*#__PURE__*/ createWriteContract({
  abi: simpleCombatResolverAbi,
  functionName: 'hit',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__
 */
export const simulateSimpleCombatResolver =
  /*#__PURE__*/ createSimulateContract({ abi: simpleCombatResolverAbi });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"heal"`
 */
export const simulateSimpleCombatResolverHeal =
  /*#__PURE__*/ createSimulateContract({
    abi: simpleCombatResolverAbi,
    functionName: 'heal',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link simpleCombatResolverAbi}__ and `functionName` set to `"hit"`
 */
export const simulateSimpleCombatResolverHit =
  /*#__PURE__*/ createSimulateContract({
    abi: simpleCombatResolverAbi,
    functionName: 'hit',
  });
