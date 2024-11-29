import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen';

import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ComponentRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const componentRegistryAbi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ModeleUnregistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'module',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'ModuleRegistered',
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
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'alwaysRequired',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getComponentCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'startAt', internalType: 'uint8', type: 'uint8' }],
    name: 'getComponents',
    outputs: [
      {
        name: 'result',
        internalType: 'struct ComponentSummary[10]',
        type: 'tuple[10]',
        components: [
          { name: 'component', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getRequired',
    outputs: [
      {
        name: '',
        internalType: 'struct AddressKey[]',
        type: 'tuple[]',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'address', type: 'address' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'module', internalType: 'address', type: 'address' }],
    name: 'isRegistered',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'module', internalType: 'address', type: 'address' }],
    name: 'isRequired',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'module', internalType: 'address', type: 'address' }],
    name: 'register',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'module', internalType: 'address', type: 'address' },
      { name: 'funct', internalType: 'string', type: 'string' },
    ],
    name: 'registerRequired',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'registryKeys',
    outputs: [
      { name: '', internalType: 'contract IComponent', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'module', internalType: 'address', type: 'address' }],
    name: 'unRegister',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// D7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const d7Abi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  { type: 'error', inputs: [], name: 'ApprovalCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'ApprovalQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'BalanceQueryForZeroAddress' },
  { type: 'error', inputs: [], name: 'MintERC2309QuantityExceedsLimit' },
  { type: 'error', inputs: [], name: 'MintToZeroAddress' },
  { type: 'error', inputs: [], name: 'MintZeroQuantity' },
  { type: 'error', inputs: [], name: 'NotCompatibleWithSpotMints' },
  { type: 'error', inputs: [], name: 'OwnerQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'OwnershipNotInitializedForExtraData' },
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
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const gameAbi = [
  { type: 'error', inputs: [], name: 'FlowAlreadyExists' },
  { type: 'error', inputs: [], name: 'FlowDoesNotExist' },
  {
    type: 'error',
    inputs: [
      { name: 'component', internalType: 'address', type: 'address' },
      { name: 'functionKey', internalType: 'string', type: 'string' },
    ],
    name: 'FlowExecutionError',
  },
  {
    type: 'error',
    inputs: [
      { name: 'component', internalType: 'address', type: 'address' },
      { name: 'functionkey', internalType: 'string', type: 'string' },
      { name: 'failure', internalType: 'string', type: 'string' },
    ],
    name: 'FlowFailure',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'OnlyGM' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'component', internalType: 'address', type: 'address' }],
    name: 'addComponent',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'string', type: 'string' }],
    name: 'availableEntityData',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'componentRegistry',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'components',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'entityName', internalType: 'string', type: 'string' }],
    name: 'createEntity',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      {
        name: 'funcs',
        internalType: 'struct AddressKey[]',
        type: 'tuple[]',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'createFlow',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'entities',
    outputs: [{ name: '', internalType: 'contract IEntity', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'entityFactory',
    outputs: [
      { name: '', internalType: 'contract IEntityFactory', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      {
        name: 'params',
        internalType: 'struct FlowParams',
        type: 'tuple',
        components: [
          {
            name: 'addresses',
            internalType: 'struct AddressKey[]',
            type: 'tuple[]',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'value', internalType: 'address', type: 'address' },
            ],
          },
          {
            name: 'uints',
            internalType: 'struct UintKey[]',
            type: 'tuple[]',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'strings',
            internalType: 'struct StringKey[]',
            type: 'tuple[]',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'value', internalType: 'string', type: 'string' },
            ],
          },
        ],
      },
    ],
    name: 'executeFlow',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'flowNames',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'string', type: 'string' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'flows',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'gameFactory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'key', internalType: 'string', type: 'string' }],
    name: 'getEntity',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getFlows',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSummary',
    outputs: [
      {
        name: '',
        internalType: 'struct GameSummary',
        type: 'tuple',
        components: [
          { name: 'game', internalType: 'address', type: 'address' },
          { name: 'gm', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
          { name: 'components', internalType: 'address[]', type: 'address[]' },
          {
            name: 'componentSummaries',
            internalType: 'struct ComponentSummary[]',
            type: 'tuple[]',
            components: [
              { name: 'component', internalType: 'address', type: 'address' },
              { name: 'metadata', internalType: 'string', type: 'string' },
            ],
          },
          {
            name: 'availableData',
            internalType: 'struct AddressKey[]',
            type: 'tuple[]',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'value', internalType: 'address', type: 'address' },
            ],
          },
          {
            name: 'flows',
            internalType: 'struct FlowKey[]',
            type: 'tuple[]',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              {
                name: 'values',
                internalType: 'struct AddressKey[]',
                type: 'tuple[]',
                components: [
                  { name: 'name', internalType: 'string', type: 'string' },
                  { name: 'value', internalType: 'address', type: 'address' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'gm',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_gameFactory', internalType: 'address', type: 'address' },
      { name: '_componentRegsitry', internalType: 'address', type: 'address' },
      { name: '_gm', internalType: 'address', type: 'address' },
      { name: '_metadata', internalType: 'string', type: 'string' },
      { name: '_entityFactory', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isGM',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadata',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
    name: 'updateMetadata',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'module', internalType: 'address', type: 'address' }],
    name: 'validateIsModule',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GameFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const gameFactoryAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_componentRegistry', internalType: 'address', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'OnlyAdmin' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'game',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'gm', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'metadata',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'GameCreated',
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
    name: 'componentRegistry',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_gm', internalType: 'address', type: 'address' },
      { name: 'metadata', internalType: 'string', type: 'string' },
    ],
    name: 'createGame',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_gm', internalType: 'address', type: 'address' },
      { name: 'metadata', internalType: 'string', type: 'string' },
      { name: 'components', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'createGameWithComponents',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'entityFactory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'gameContract',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'games',
    outputs: [{ name: '', internalType: 'contract Game', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getGameCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'startAt', internalType: 'uint8', type: 'uint8' }],
    name: 'getGames',
    outputs: [
      {
        name: 'result',
        internalType: 'struct GameSummary[10]',
        type: 'tuple[10]',
        components: [
          { name: 'game', internalType: 'address', type: 'address' },
          { name: 'gm', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
          { name: 'components', internalType: 'address[]', type: 'address[]' },
          {
            name: 'componentSummaries',
            internalType: 'struct ComponentSummary[]',
            type: 'tuple[]',
            components: [
              { name: 'component', internalType: 'address', type: 'address' },
              { name: 'metadata', internalType: 'string', type: 'string' },
            ],
          },
          {
            name: 'availableData',
            internalType: 'struct AddressKey[]',
            type: 'tuple[]',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              { name: 'value', internalType: 'address', type: 'address' },
            ],
          },
          {
            name: 'flows',
            internalType: 'struct FlowKey[]',
            type: 'tuple[]',
            components: [
              { name: 'name', internalType: 'string', type: 'string' },
              {
                name: 'values',
                internalType: 'struct AddressKey[]',
                type: 'tuple[]',
                components: [
                  { name: 'name', internalType: 'string', type: 'string' },
                  { name: 'value', internalType: 'address', type: 'address' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_gameContract', internalType: 'address', type: 'address' },
      { name: '_entityFactory', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_entityFactory', internalType: 'address', type: 'address' },
    ],
    name: 'setEntityFactory',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_gameContract', internalType: 'address', type: 'address' },
    ],
    name: 'setGameContract',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IComponent
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iComponentAbi = [
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSummary',
    outputs: [
      {
        name: '',
        internalType: 'struct ComponentSummary',
        type: 'tuple',
        components: [
          { name: 'component', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'game', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadata',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
    name: 'updateMetadata',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IGame
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iGameAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'component', internalType: 'address', type: 'address' }],
    name: 'addComponent',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'createEntity',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      {
        name: 'funcs',
        internalType: 'struct AddressKey[]',
        type: 'tuple[]',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'createFlow',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'key', internalType: 'string', type: 'string' }],
    name: 'getEntity',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'gameFactory', internalType: 'address', type: 'address' },
      { name: 'componentRegistry', internalType: 'address', type: 'address' },
      { name: '_gm', internalType: 'address', type: 'address' },
      { name: 'displayName', internalType: 'string', type: 'string' },
      { name: 'entityFactory', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isGM',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'module', internalType: 'address', type: 'address' }],
    name: 'validateIsModule',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PVPResult
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pvpResultAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
  },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'gameAddress', internalType: 'address', type: 'address' },
      { name: 'player', internalType: 'address', type: 'address' },
    ],
    name: 'getLastGame',
    outputs: [
      {
        name: '',
        internalType: 'struct PVPResultEntity.LastGame',
        type: 'tuple',
        components: [
          { name: 'opponent', internalType: 'address', type: 'address' },
          { name: 'winner', internalType: 'address', type: 'address' },
          { name: 'myAction', internalType: 'uint256', type: 'uint256' },
          { name: 'opponentAction', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSummary',
    outputs: [
      {
        name: '',
        internalType: 'struct ComponentSummary',
        type: 'tuple',
        components: [
          { name: 'component', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'game', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadata',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'executor', internalType: 'address', type: 'address' },
      { name: 'gameAddress', internalType: 'address', type: 'address' },
    ],
    name: 'storeResult',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
    name: 'updateMetadata',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QueueSession
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const queueSessionAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
  },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'player',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'queueSize',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'JoinedQueue',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'player1',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'player2',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'MatchMade',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'game', internalType: 'contract IGame', type: 'address' }],
    name: 'getPlayerCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSummary',
    outputs: [
      {
        name: '',
        internalType: 'struct ComponentSummary',
        type: 'tuple',
        components: [
          { name: 'component', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'game', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'game', internalType: 'contract IGame', type: 'address' },
      { name: 'player', internalType: 'address', type: 'address' },
    ],
    name: 'isPlayerInQueue',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'executor', internalType: 'address', type: 'address' },
      { name: 'gameAddress', internalType: 'address', type: 'address' },
    ],
    name: 'joinQueue',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadata',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'executor', internalType: 'address', type: 'address' },
      { name: 'gameAddress', internalType: 'address', type: 'address' },
    ],
    name: 'setMatchOrWait',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
    name: 'updateMetadata',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RewardERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rewardErc20Abi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
  },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'game', internalType: 'address', type: 'address' }],
    name: 'getRewardToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSummary',
    outputs: [
      {
        name: '',
        internalType: 'struct ComponentSummary',
        type: 'tuple',
        components: [
          { name: 'component', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'game', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadata',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'executor', internalType: 'address', type: 'address' },
      { name: 'gameAddress', internalType: 'address', type: 'address' },
    ],
    name: 'rewardTie',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'executor', internalType: 'address', type: 'address' },
      { name: 'gameAddress', internalType: 'address', type: 'address' },
    ],
    name: 'rewardWinner',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'game', internalType: 'address', type: 'address' },
      { name: '_reward', internalType: 'address', type: 'address' },
    ],
    name: 'setReward',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
    name: 'updateMetadata',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RockPaperScissors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const rockPaperScissorsAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
  },
  { type: 'error', inputs: [], name: 'NoActionYet' },
  { type: 'error', inputs: [], name: 'NotAuthorized' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'player1',
        internalType: 'struct RockPaperScissors.Hand',
        type: 'tuple',
        components: [
          { name: 'player', internalType: 'address', type: 'address' },
          { name: 'actionIndex', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
      {
        name: 'player2',
        internalType: 'struct RockPaperScissors.Hand',
        type: 'tuple',
        components: [
          { name: 'player', internalType: 'address', type: 'address' },
          { name: 'actionIndex', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
      {
        name: 'winner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'GameResult',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getSummary',
    outputs: [
      {
        name: '',
        internalType: 'struct ComponentSummary',
        type: 'tuple',
        components: [
          { name: 'component', internalType: 'address', type: 'address' },
          { name: 'metadata', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'game', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'metadata',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'executor', internalType: 'address', type: 'address' },
      { name: 'gameAddress', internalType: 'address', type: 'address' },
    ],
    name: 'oneOnOne',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'gameAddress', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setTieAmount',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'gameAddress', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setWinAmount',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_metadata', internalType: 'string', type: 'string' }],
    name: 'updateMetadata',
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link componentRegistryAbi}__
 */
export const useReadComponentRegistry = /*#__PURE__*/ createUseReadContract({
  abi: componentRegistryAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"admin"`
 */
export const useReadComponentRegistryAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: componentRegistryAbi,
    functionName: 'admin',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"alwaysRequired"`
 */
export const useReadComponentRegistryAlwaysRequired =
  /*#__PURE__*/ createUseReadContract({
    abi: componentRegistryAbi,
    functionName: 'alwaysRequired',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"getComponentCount"`
 */
export const useReadComponentRegistryGetComponentCount =
  /*#__PURE__*/ createUseReadContract({
    abi: componentRegistryAbi,
    functionName: 'getComponentCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"getComponents"`
 */
export const useReadComponentRegistryGetComponents =
  /*#__PURE__*/ createUseReadContract({
    abi: componentRegistryAbi,
    functionName: 'getComponents',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"getRequired"`
 */
export const useReadComponentRegistryGetRequired =
  /*#__PURE__*/ createUseReadContract({
    abi: componentRegistryAbi,
    functionName: 'getRequired',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"isRegistered"`
 */
export const useReadComponentRegistryIsRegistered =
  /*#__PURE__*/ createUseReadContract({
    abi: componentRegistryAbi,
    functionName: 'isRegistered',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"isRequired"`
 */
export const useReadComponentRegistryIsRequired =
  /*#__PURE__*/ createUseReadContract({
    abi: componentRegistryAbi,
    functionName: 'isRequired',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"registryKeys"`
 */
export const useReadComponentRegistryRegistryKeys =
  /*#__PURE__*/ createUseReadContract({
    abi: componentRegistryAbi,
    functionName: 'registryKeys',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link componentRegistryAbi}__
 */
export const useWriteComponentRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: componentRegistryAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"register"`
 */
export const useWriteComponentRegistryRegister =
  /*#__PURE__*/ createUseWriteContract({
    abi: componentRegistryAbi,
    functionName: 'register',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"registerRequired"`
 */
export const useWriteComponentRegistryRegisterRequired =
  /*#__PURE__*/ createUseWriteContract({
    abi: componentRegistryAbi,
    functionName: 'registerRequired',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"unRegister"`
 */
export const useWriteComponentRegistryUnRegister =
  /*#__PURE__*/ createUseWriteContract({
    abi: componentRegistryAbi,
    functionName: 'unRegister',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link componentRegistryAbi}__
 */
export const useSimulateComponentRegistry =
  /*#__PURE__*/ createUseSimulateContract({ abi: componentRegistryAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"register"`
 */
export const useSimulateComponentRegistryRegister =
  /*#__PURE__*/ createUseSimulateContract({
    abi: componentRegistryAbi,
    functionName: 'register',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"registerRequired"`
 */
export const useSimulateComponentRegistryRegisterRequired =
  /*#__PURE__*/ createUseSimulateContract({
    abi: componentRegistryAbi,
    functionName: 'registerRequired',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"unRegister"`
 */
export const useSimulateComponentRegistryUnRegister =
  /*#__PURE__*/ createUseSimulateContract({
    abi: componentRegistryAbi,
    functionName: 'unRegister',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link componentRegistryAbi}__
 */
export const useWatchComponentRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: componentRegistryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link componentRegistryAbi}__ and `eventName` set to `"ModeleUnregistered"`
 */
export const useWatchComponentRegistryModeleUnregisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: componentRegistryAbi,
    eventName: 'ModeleUnregistered',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link componentRegistryAbi}__ and `eventName` set to `"ModuleRegistered"`
 */
export const useWatchComponentRegistryModuleRegisteredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: componentRegistryAbi,
    eventName: 'ModuleRegistered',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link d7Abi}__
 */
export const useReadD7 = /*#__PURE__*/ createUseReadContract({ abi: d7Abi });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadD7BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: d7Abi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadD7GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: d7Abi,
  functionName: 'getApproved',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadD7IsApprovedForAll = /*#__PURE__*/ createUseReadContract({
  abi: d7Abi,
  functionName: 'isApprovedForAll',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"name"`
 */
export const useReadD7Name = /*#__PURE__*/ createUseReadContract({
  abi: d7Abi,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadD7OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: d7Abi,
  functionName: 'ownerOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadD7SupportsInterface = /*#__PURE__*/ createUseReadContract({
  abi: d7Abi,
  functionName: 'supportsInterface',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadD7Symbol = /*#__PURE__*/ createUseReadContract({
  abi: d7Abi,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadD7TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: d7Abi,
  functionName: 'tokenURI',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadD7TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: d7Abi,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link d7Abi}__
 */
export const useWriteD7 = /*#__PURE__*/ createUseWriteContract({ abi: d7Abi });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteD7Approve = /*#__PURE__*/ createUseWriteContract({
  abi: d7Abi,
  functionName: 'approve',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"mint"`
 */
export const useWriteD7Mint = /*#__PURE__*/ createUseWriteContract({
  abi: d7Abi,
  functionName: 'mint',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteD7SafeTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: d7Abi,
  functionName: 'safeTransferFrom',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteD7SetApprovalForAll = /*#__PURE__*/ createUseWriteContract(
  { abi: d7Abi, functionName: 'setApprovalForAll' }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteD7TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: d7Abi,
  functionName: 'transferFrom',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link d7Abi}__
 */
export const useSimulateD7 = /*#__PURE__*/ createUseSimulateContract({
  abi: d7Abi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateD7Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: d7Abi,
  functionName: 'approve',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"mint"`
 */
export const useSimulateD7Mint = /*#__PURE__*/ createUseSimulateContract({
  abi: d7Abi,
  functionName: 'mint',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateD7SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: d7Abi,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateD7SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: d7Abi,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateD7TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: d7Abi,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link d7Abi}__
 */
export const useWatchD7Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: d7Abi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link d7Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchD7ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: d7Abi,
    eventName: 'Approval',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link d7Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchD7ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: d7Abi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link d7Abi}__ and `eventName` set to `"ConsecutiveTransfer"`
 */
export const useWatchD7ConsecutiveTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: d7Abi,
    eventName: 'ConsecutiveTransfer',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link d7Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchD7TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: d7Abi,
    eventName: 'Transfer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__
 */
export const useReadGame = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"availableEntityData"`
 */
export const useReadGameAvailableEntityData =
  /*#__PURE__*/ createUseReadContract({
    abi: gameAbi,
    functionName: 'availableEntityData',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"componentRegistry"`
 */
export const useReadGameComponentRegistry = /*#__PURE__*/ createUseReadContract(
  { abi: gameAbi, functionName: 'componentRegistry' }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"components"`
 */
export const useReadGameComponents = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'components',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"entities"`
 */
export const useReadGameEntities = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'entities',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"entityFactory"`
 */
export const useReadGameEntityFactory = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'entityFactory',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"flowNames"`
 */
export const useReadGameFlowNames = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'flowNames',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"flows"`
 */
export const useReadGameFlows = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'flows',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"gameFactory"`
 */
export const useReadGameGameFactory = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'gameFactory',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"getEntity"`
 */
export const useReadGameGetEntity = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'getEntity',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"getFlows"`
 */
export const useReadGameGetFlows = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'getFlows',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"getSummary"`
 */
export const useReadGameGetSummary = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'getSummary',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"gm"`
 */
export const useReadGameGm = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'gm',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"isGM"`
 */
export const useReadGameIsGm = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'isGM',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"metadata"`
 */
export const useReadGameMetadata = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"validateIsModule"`
 */
export const useReadGameValidateIsModule = /*#__PURE__*/ createUseReadContract({
  abi: gameAbi,
  functionName: 'validateIsModule',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameAbi}__
 */
export const useWriteGame = /*#__PURE__*/ createUseWriteContract({
  abi: gameAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"addComponent"`
 */
export const useWriteGameAddComponent = /*#__PURE__*/ createUseWriteContract({
  abi: gameAbi,
  functionName: 'addComponent',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"createEntity"`
 */
export const useWriteGameCreateEntity = /*#__PURE__*/ createUseWriteContract({
  abi: gameAbi,
  functionName: 'createEntity',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"createFlow"`
 */
export const useWriteGameCreateFlow = /*#__PURE__*/ createUseWriteContract({
  abi: gameAbi,
  functionName: 'createFlow',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"executeFlow"`
 */
export const useWriteGameExecuteFlow = /*#__PURE__*/ createUseWriteContract({
  abi: gameAbi,
  functionName: 'executeFlow',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteGameInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: gameAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const useWriteGameUpdateMetadata = /*#__PURE__*/ createUseWriteContract({
  abi: gameAbi,
  functionName: 'updateMetadata',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameAbi}__
 */
export const useSimulateGame = /*#__PURE__*/ createUseSimulateContract({
  abi: gameAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"addComponent"`
 */
export const useSimulateGameAddComponent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameAbi,
    functionName: 'addComponent',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"createEntity"`
 */
export const useSimulateGameCreateEntity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameAbi,
    functionName: 'createEntity',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"createFlow"`
 */
export const useSimulateGameCreateFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameAbi,
    functionName: 'createFlow',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"executeFlow"`
 */
export const useSimulateGameExecuteFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameAbi,
    functionName: 'executeFlow',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateGameInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const useSimulateGameUpdateMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gameAbi}__
 */
export const useWatchGameEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: gameAbi,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gameAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchGameInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gameAbi,
    eventName: 'Initialized',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameFactoryAbi}__
 */
export const useReadGameFactory = /*#__PURE__*/ createUseReadContract({
  abi: gameFactoryAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"admin"`
 */
export const useReadGameFactoryAdmin = /*#__PURE__*/ createUseReadContract({
  abi: gameFactoryAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"componentRegistry"`
 */
export const useReadGameFactoryComponentRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: gameFactoryAbi,
    functionName: 'componentRegistry',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"entityFactory"`
 */
export const useReadGameFactoryEntityFactory =
  /*#__PURE__*/ createUseReadContract({
    abi: gameFactoryAbi,
    functionName: 'entityFactory',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"gameContract"`
 */
export const useReadGameFactoryGameContract =
  /*#__PURE__*/ createUseReadContract({
    abi: gameFactoryAbi,
    functionName: 'gameContract',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"games"`
 */
export const useReadGameFactoryGames = /*#__PURE__*/ createUseReadContract({
  abi: gameFactoryAbi,
  functionName: 'games',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"getGameCount"`
 */
export const useReadGameFactoryGetGameCount =
  /*#__PURE__*/ createUseReadContract({
    abi: gameFactoryAbi,
    functionName: 'getGameCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"getGames"`
 */
export const useReadGameFactoryGetGames = /*#__PURE__*/ createUseReadContract({
  abi: gameFactoryAbi,
  functionName: 'getGames',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameFactoryAbi}__
 */
export const useWriteGameFactory = /*#__PURE__*/ createUseWriteContract({
  abi: gameFactoryAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"createGame"`
 */
export const useWriteGameFactoryCreateGame =
  /*#__PURE__*/ createUseWriteContract({
    abi: gameFactoryAbi,
    functionName: 'createGame',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"createGameWithComponents"`
 */
export const useWriteGameFactoryCreateGameWithComponents =
  /*#__PURE__*/ createUseWriteContract({
    abi: gameFactoryAbi,
    functionName: 'createGameWithComponents',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteGameFactoryInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: gameFactoryAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"setEntityFactory"`
 */
export const useWriteGameFactorySetEntityFactory =
  /*#__PURE__*/ createUseWriteContract({
    abi: gameFactoryAbi,
    functionName: 'setEntityFactory',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"setGameContract"`
 */
export const useWriteGameFactorySetGameContract =
  /*#__PURE__*/ createUseWriteContract({
    abi: gameFactoryAbi,
    functionName: 'setGameContract',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameFactoryAbi}__
 */
export const useSimulateGameFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: gameFactoryAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"createGame"`
 */
export const useSimulateGameFactoryCreateGame =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameFactoryAbi,
    functionName: 'createGame',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"createGameWithComponents"`
 */
export const useSimulateGameFactoryCreateGameWithComponents =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameFactoryAbi,
    functionName: 'createGameWithComponents',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateGameFactoryInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameFactoryAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"setEntityFactory"`
 */
export const useSimulateGameFactorySetEntityFactory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameFactoryAbi,
    functionName: 'setEntityFactory',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"setGameContract"`
 */
export const useSimulateGameFactorySetGameContract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gameFactoryAbi,
    functionName: 'setGameContract',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gameFactoryAbi}__
 */
export const useWatchGameFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: gameFactoryAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link gameFactoryAbi}__ and `eventName` set to `"GameCreated"`
 */
export const useWatchGameFactoryGameCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: gameFactoryAbi,
    eventName: 'GameCreated',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iComponentAbi}__
 */
export const useReadIComponent = /*#__PURE__*/ createUseReadContract({
  abi: iComponentAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"getSummary"`
 */
export const useReadIComponentGetSummary = /*#__PURE__*/ createUseReadContract({
  abi: iComponentAbi,
  functionName: 'getSummary',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"metadata"`
 */
export const useReadIComponentMetadata = /*#__PURE__*/ createUseReadContract({
  abi: iComponentAbi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iComponentAbi}__
 */
export const useWriteIComponent = /*#__PURE__*/ createUseWriteContract({
  abi: iComponentAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteIComponentInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: iComponentAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const useWriteIComponentUpdateMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: iComponentAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iComponentAbi}__
 */
export const useSimulateIComponent = /*#__PURE__*/ createUseSimulateContract({
  abi: iComponentAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateIComponentInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iComponentAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const useSimulateIComponentUpdateMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iComponentAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGameAbi}__
 */
export const useReadIGame = /*#__PURE__*/ createUseReadContract({
  abi: iGameAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"getEntity"`
 */
export const useReadIGameGetEntity = /*#__PURE__*/ createUseReadContract({
  abi: iGameAbi,
  functionName: 'getEntity',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"isGM"`
 */
export const useReadIGameIsGm = /*#__PURE__*/ createUseReadContract({
  abi: iGameAbi,
  functionName: 'isGM',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"validateIsModule"`
 */
export const useReadIGameValidateIsModule = /*#__PURE__*/ createUseReadContract(
  { abi: iGameAbi, functionName: 'validateIsModule' }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGameAbi}__
 */
export const useWriteIGame = /*#__PURE__*/ createUseWriteContract({
  abi: iGameAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"addComponent"`
 */
export const useWriteIGameAddComponent = /*#__PURE__*/ createUseWriteContract({
  abi: iGameAbi,
  functionName: 'addComponent',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"createEntity"`
 */
export const useWriteIGameCreateEntity = /*#__PURE__*/ createUseWriteContract({
  abi: iGameAbi,
  functionName: 'createEntity',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"createFlow"`
 */
export const useWriteIGameCreateFlow = /*#__PURE__*/ createUseWriteContract({
  abi: iGameAbi,
  functionName: 'createFlow',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteIGameInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: iGameAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGameAbi}__
 */
export const useSimulateIGame = /*#__PURE__*/ createUseSimulateContract({
  abi: iGameAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"addComponent"`
 */
export const useSimulateIGameAddComponent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGameAbi,
    functionName: 'addComponent',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"createEntity"`
 */
export const useSimulateIGameCreateEntity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGameAbi,
    functionName: 'createEntity',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"createFlow"`
 */
export const useSimulateIGameCreateFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGameAbi,
    functionName: 'createFlow',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateIGameInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iGameAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pvpResultAbi}__
 */
export const useReadPvpResult = /*#__PURE__*/ createUseReadContract({
  abi: pvpResultAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"getLastGame"`
 */
export const useReadPvpResultGetLastGame = /*#__PURE__*/ createUseReadContract({
  abi: pvpResultAbi,
  functionName: 'getLastGame',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"getSummary"`
 */
export const useReadPvpResultGetSummary = /*#__PURE__*/ createUseReadContract({
  abi: pvpResultAbi,
  functionName: 'getSummary',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"metadata"`
 */
export const useReadPvpResultMetadata = /*#__PURE__*/ createUseReadContract({
  abi: pvpResultAbi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pvpResultAbi}__
 */
export const useWritePvpResult = /*#__PURE__*/ createUseWriteContract({
  abi: pvpResultAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"initialize"`
 */
export const useWritePvpResultInitialize = /*#__PURE__*/ createUseWriteContract(
  { abi: pvpResultAbi, functionName: 'initialize' }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"storeResult"`
 */
export const useWritePvpResultStoreResult =
  /*#__PURE__*/ createUseWriteContract({
    abi: pvpResultAbi,
    functionName: 'storeResult',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const useWritePvpResultUpdateMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: pvpResultAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pvpResultAbi}__
 */
export const useSimulatePvpResult = /*#__PURE__*/ createUseSimulateContract({
  abi: pvpResultAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulatePvpResultInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pvpResultAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"storeResult"`
 */
export const useSimulatePvpResultStoreResult =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pvpResultAbi,
    functionName: 'storeResult',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const useSimulatePvpResultUpdateMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: pvpResultAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link queueSessionAbi}__
 */
export const useReadQueueSession = /*#__PURE__*/ createUseReadContract({
  abi: queueSessionAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"getPlayerCount"`
 */
export const useReadQueueSessionGetPlayerCount =
  /*#__PURE__*/ createUseReadContract({
    abi: queueSessionAbi,
    functionName: 'getPlayerCount',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"getSummary"`
 */
export const useReadQueueSessionGetSummary =
  /*#__PURE__*/ createUseReadContract({
    abi: queueSessionAbi,
    functionName: 'getSummary',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"isPlayerInQueue"`
 */
export const useReadQueueSessionIsPlayerInQueue =
  /*#__PURE__*/ createUseReadContract({
    abi: queueSessionAbi,
    functionName: 'isPlayerInQueue',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"metadata"`
 */
export const useReadQueueSessionMetadata = /*#__PURE__*/ createUseReadContract({
  abi: queueSessionAbi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link queueSessionAbi}__
 */
export const useWriteQueueSession = /*#__PURE__*/ createUseWriteContract({
  abi: queueSessionAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteQueueSessionInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: queueSessionAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"joinQueue"`
 */
export const useWriteQueueSessionJoinQueue =
  /*#__PURE__*/ createUseWriteContract({
    abi: queueSessionAbi,
    functionName: 'joinQueue',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"setMatchOrWait"`
 */
export const useWriteQueueSessionSetMatchOrWait =
  /*#__PURE__*/ createUseWriteContract({
    abi: queueSessionAbi,
    functionName: 'setMatchOrWait',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const useWriteQueueSessionUpdateMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: queueSessionAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link queueSessionAbi}__
 */
export const useSimulateQueueSession = /*#__PURE__*/ createUseSimulateContract({
  abi: queueSessionAbi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateQueueSessionInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: queueSessionAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"joinQueue"`
 */
export const useSimulateQueueSessionJoinQueue =
  /*#__PURE__*/ createUseSimulateContract({
    abi: queueSessionAbi,
    functionName: 'joinQueue',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"setMatchOrWait"`
 */
export const useSimulateQueueSessionSetMatchOrWait =
  /*#__PURE__*/ createUseSimulateContract({
    abi: queueSessionAbi,
    functionName: 'setMatchOrWait',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const useSimulateQueueSessionUpdateMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: queueSessionAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link queueSessionAbi}__
 */
export const useWatchQueueSessionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: queueSessionAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link queueSessionAbi}__ and `eventName` set to `"JoinedQueue"`
 */
export const useWatchQueueSessionJoinedQueueEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: queueSessionAbi,
    eventName: 'JoinedQueue',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link queueSessionAbi}__ and `eventName` set to `"MatchMade"`
 */
export const useWatchQueueSessionMatchMadeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: queueSessionAbi,
    eventName: 'MatchMade',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardErc20Abi}__
 */
export const useReadRewardErc20 = /*#__PURE__*/ createUseReadContract({
  abi: rewardErc20Abi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"getRewardToken"`
 */
export const useReadRewardErc20GetRewardToken =
  /*#__PURE__*/ createUseReadContract({
    abi: rewardErc20Abi,
    functionName: 'getRewardToken',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"getSummary"`
 */
export const useReadRewardErc20GetSummary = /*#__PURE__*/ createUseReadContract(
  { abi: rewardErc20Abi, functionName: 'getSummary' }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"metadata"`
 */
export const useReadRewardErc20Metadata = /*#__PURE__*/ createUseReadContract({
  abi: rewardErc20Abi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardErc20Abi}__
 */
export const useWriteRewardErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: rewardErc20Abi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"initialize"`
 */
export const useWriteRewardErc20Initialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardErc20Abi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"rewardTie"`
 */
export const useWriteRewardErc20RewardTie =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardErc20Abi,
    functionName: 'rewardTie',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"rewardWinner"`
 */
export const useWriteRewardErc20RewardWinner =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardErc20Abi,
    functionName: 'rewardWinner',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"setReward"`
 */
export const useWriteRewardErc20SetReward =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardErc20Abi,
    functionName: 'setReward',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"updateMetadata"`
 */
export const useWriteRewardErc20UpdateMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: rewardErc20Abi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardErc20Abi}__
 */
export const useSimulateRewardErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: rewardErc20Abi,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateRewardErc20Initialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardErc20Abi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"rewardTie"`
 */
export const useSimulateRewardErc20RewardTie =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardErc20Abi,
    functionName: 'rewardTie',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"rewardWinner"`
 */
export const useSimulateRewardErc20RewardWinner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardErc20Abi,
    functionName: 'rewardWinner',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"setReward"`
 */
export const useSimulateRewardErc20SetReward =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardErc20Abi,
    functionName: 'setReward',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"updateMetadata"`
 */
export const useSimulateRewardErc20UpdateMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rewardErc20Abi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__
 */
export const useReadRockPaperScissors = /*#__PURE__*/ createUseReadContract({
  abi: rockPaperScissorsAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"getSummary"`
 */
export const useReadRockPaperScissorsGetSummary =
  /*#__PURE__*/ createUseReadContract({
    abi: rockPaperScissorsAbi,
    functionName: 'getSummary',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"metadata"`
 */
export const useReadRockPaperScissorsMetadata =
  /*#__PURE__*/ createUseReadContract({
    abi: rockPaperScissorsAbi,
    functionName: 'metadata',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__
 */
export const useWriteRockPaperScissors = /*#__PURE__*/ createUseWriteContract({
  abi: rockPaperScissorsAbi,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteRockPaperScissorsInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: rockPaperScissorsAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"oneOnOne"`
 */
export const useWriteRockPaperScissorsOneOnOne =
  /*#__PURE__*/ createUseWriteContract({
    abi: rockPaperScissorsAbi,
    functionName: 'oneOnOne',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"setTieAmount"`
 */
export const useWriteRockPaperScissorsSetTieAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: rockPaperScissorsAbi,
    functionName: 'setTieAmount',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"setWinAmount"`
 */
export const useWriteRockPaperScissorsSetWinAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: rockPaperScissorsAbi,
    functionName: 'setWinAmount',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const useWriteRockPaperScissorsUpdateMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: rockPaperScissorsAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__
 */
export const useSimulateRockPaperScissors =
  /*#__PURE__*/ createUseSimulateContract({ abi: rockPaperScissorsAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateRockPaperScissorsInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rockPaperScissorsAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"oneOnOne"`
 */
export const useSimulateRockPaperScissorsOneOnOne =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rockPaperScissorsAbi,
    functionName: 'oneOnOne',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"setTieAmount"`
 */
export const useSimulateRockPaperScissorsSetTieAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rockPaperScissorsAbi,
    functionName: 'setTieAmount',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"setWinAmount"`
 */
export const useSimulateRockPaperScissorsSetWinAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rockPaperScissorsAbi,
    functionName: 'setWinAmount',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const useSimulateRockPaperScissorsUpdateMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: rockPaperScissorsAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rockPaperScissorsAbi}__
 */
export const useWatchRockPaperScissorsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: rockPaperScissorsAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `eventName` set to `"GameResult"`
 */
export const useWatchRockPaperScissorsGameResultEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: rockPaperScissorsAbi,
    eventName: 'GameResult',
  });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link componentRegistryAbi}__
 */
export const readComponentRegistry = /*#__PURE__*/ createReadContract({
  abi: componentRegistryAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"admin"`
 */
export const readComponentRegistryAdmin = /*#__PURE__*/ createReadContract({
  abi: componentRegistryAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"alwaysRequired"`
 */
export const readComponentRegistryAlwaysRequired =
  /*#__PURE__*/ createReadContract({
    abi: componentRegistryAbi,
    functionName: 'alwaysRequired',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"getComponentCount"`
 */
export const readComponentRegistryGetComponentCount =
  /*#__PURE__*/ createReadContract({
    abi: componentRegistryAbi,
    functionName: 'getComponentCount',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"getComponents"`
 */
export const readComponentRegistryGetComponents =
  /*#__PURE__*/ createReadContract({
    abi: componentRegistryAbi,
    functionName: 'getComponents',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"getRequired"`
 */
export const readComponentRegistryGetRequired =
  /*#__PURE__*/ createReadContract({
    abi: componentRegistryAbi,
    functionName: 'getRequired',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"isRegistered"`
 */
export const readComponentRegistryIsRegistered =
  /*#__PURE__*/ createReadContract({
    abi: componentRegistryAbi,
    functionName: 'isRegistered',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"isRequired"`
 */
export const readComponentRegistryIsRequired = /*#__PURE__*/ createReadContract(
  { abi: componentRegistryAbi, functionName: 'isRequired' }
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"registryKeys"`
 */
export const readComponentRegistryRegistryKeys =
  /*#__PURE__*/ createReadContract({
    abi: componentRegistryAbi,
    functionName: 'registryKeys',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link componentRegistryAbi}__
 */
export const writeComponentRegistry = /*#__PURE__*/ createWriteContract({
  abi: componentRegistryAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"register"`
 */
export const writeComponentRegistryRegister = /*#__PURE__*/ createWriteContract(
  { abi: componentRegistryAbi, functionName: 'register' }
);

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"registerRequired"`
 */
export const writeComponentRegistryRegisterRequired =
  /*#__PURE__*/ createWriteContract({
    abi: componentRegistryAbi,
    functionName: 'registerRequired',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"unRegister"`
 */
export const writeComponentRegistryUnRegister =
  /*#__PURE__*/ createWriteContract({
    abi: componentRegistryAbi,
    functionName: 'unRegister',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link componentRegistryAbi}__
 */
export const simulateComponentRegistry = /*#__PURE__*/ createSimulateContract({
  abi: componentRegistryAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"register"`
 */
export const simulateComponentRegistryRegister =
  /*#__PURE__*/ createSimulateContract({
    abi: componentRegistryAbi,
    functionName: 'register',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"registerRequired"`
 */
export const simulateComponentRegistryRegisterRequired =
  /*#__PURE__*/ createSimulateContract({
    abi: componentRegistryAbi,
    functionName: 'registerRequired',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link componentRegistryAbi}__ and `functionName` set to `"unRegister"`
 */
export const simulateComponentRegistryUnRegister =
  /*#__PURE__*/ createSimulateContract({
    abi: componentRegistryAbi,
    functionName: 'unRegister',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link componentRegistryAbi}__
 */
export const watchComponentRegistryEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: componentRegistryAbi });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link componentRegistryAbi}__ and `eventName` set to `"ModeleUnregistered"`
 */
export const watchComponentRegistryModeleUnregisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: componentRegistryAbi,
    eventName: 'ModeleUnregistered',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link componentRegistryAbi}__ and `eventName` set to `"ModuleRegistered"`
 */
export const watchComponentRegistryModuleRegisteredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: componentRegistryAbi,
    eventName: 'ModuleRegistered',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link d7Abi}__
 */
export const readD7 = /*#__PURE__*/ createReadContract({ abi: d7Abi });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readD7BalanceOf = /*#__PURE__*/ createReadContract({
  abi: d7Abi,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"getApproved"`
 */
export const readD7GetApproved = /*#__PURE__*/ createReadContract({
  abi: d7Abi,
  functionName: 'getApproved',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readD7IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: d7Abi,
  functionName: 'isApprovedForAll',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"name"`
 */
export const readD7Name = /*#__PURE__*/ createReadContract({
  abi: d7Abi,
  functionName: 'name',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readD7OwnerOf = /*#__PURE__*/ createReadContract({
  abi: d7Abi,
  functionName: 'ownerOf',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readD7SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: d7Abi,
  functionName: 'supportsInterface',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"symbol"`
 */
export const readD7Symbol = /*#__PURE__*/ createReadContract({
  abi: d7Abi,
  functionName: 'symbol',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"tokenURI"`
 */
export const readD7TokenUri = /*#__PURE__*/ createReadContract({
  abi: d7Abi,
  functionName: 'tokenURI',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readD7TotalSupply = /*#__PURE__*/ createReadContract({
  abi: d7Abi,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link d7Abi}__
 */
export const writeD7 = /*#__PURE__*/ createWriteContract({ abi: d7Abi });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"approve"`
 */
export const writeD7Approve = /*#__PURE__*/ createWriteContract({
  abi: d7Abi,
  functionName: 'approve',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"mint"`
 */
export const writeD7Mint = /*#__PURE__*/ createWriteContract({
  abi: d7Abi,
  functionName: 'mint',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeD7SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: d7Abi,
  functionName: 'safeTransferFrom',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeD7SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: d7Abi,
  functionName: 'setApprovalForAll',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeD7TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: d7Abi,
  functionName: 'transferFrom',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link d7Abi}__
 */
export const simulateD7 = /*#__PURE__*/ createSimulateContract({ abi: d7Abi });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"approve"`
 */
export const simulateD7Approve = /*#__PURE__*/ createSimulateContract({
  abi: d7Abi,
  functionName: 'approve',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"mint"`
 */
export const simulateD7Mint = /*#__PURE__*/ createSimulateContract({
  abi: d7Abi,
  functionName: 'mint',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateD7SafeTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: d7Abi,
  functionName: 'safeTransferFrom',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateD7SetApprovalForAll = /*#__PURE__*/ createSimulateContract(
  { abi: d7Abi, functionName: 'setApprovalForAll' }
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link d7Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateD7TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: d7Abi,
  functionName: 'transferFrom',
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link d7Abi}__
 */
export const watchD7Event = /*#__PURE__*/ createWatchContractEvent({
  abi: d7Abi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link d7Abi}__ and `eventName` set to `"Approval"`
 */
export const watchD7ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: d7Abi,
  eventName: 'Approval',
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link d7Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchD7ApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: d7Abi,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link d7Abi}__ and `eventName` set to `"ConsecutiveTransfer"`
 */
export const watchD7ConsecutiveTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: d7Abi,
    eventName: 'ConsecutiveTransfer',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link d7Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchD7TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: d7Abi,
  eventName: 'Transfer',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__
 */
export const readGame = /*#__PURE__*/ createReadContract({ abi: gameAbi });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"availableEntityData"`
 */
export const readGameAvailableEntityData = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'availableEntityData',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"componentRegistry"`
 */
export const readGameComponentRegistry = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'componentRegistry',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"components"`
 */
export const readGameComponents = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'components',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"entities"`
 */
export const readGameEntities = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'entities',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"entityFactory"`
 */
export const readGameEntityFactory = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'entityFactory',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"flowNames"`
 */
export const readGameFlowNames = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'flowNames',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"flows"`
 */
export const readGameFlows = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'flows',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"gameFactory"`
 */
export const readGameGameFactory = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'gameFactory',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"getEntity"`
 */
export const readGameGetEntity = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'getEntity',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"getFlows"`
 */
export const readGameGetFlows = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'getFlows',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"getSummary"`
 */
export const readGameGetSummary = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'getSummary',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"gm"`
 */
export const readGameGm = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'gm',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"isGM"`
 */
export const readGameIsGm = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'isGM',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"metadata"`
 */
export const readGameMetadata = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"validateIsModule"`
 */
export const readGameValidateIsModule = /*#__PURE__*/ createReadContract({
  abi: gameAbi,
  functionName: 'validateIsModule',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameAbi}__
 */
export const writeGame = /*#__PURE__*/ createWriteContract({ abi: gameAbi });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"addComponent"`
 */
export const writeGameAddComponent = /*#__PURE__*/ createWriteContract({
  abi: gameAbi,
  functionName: 'addComponent',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"createEntity"`
 */
export const writeGameCreateEntity = /*#__PURE__*/ createWriteContract({
  abi: gameAbi,
  functionName: 'createEntity',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"createFlow"`
 */
export const writeGameCreateFlow = /*#__PURE__*/ createWriteContract({
  abi: gameAbi,
  functionName: 'createFlow',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"executeFlow"`
 */
export const writeGameExecuteFlow = /*#__PURE__*/ createWriteContract({
  abi: gameAbi,
  functionName: 'executeFlow',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"initialize"`
 */
export const writeGameInitialize = /*#__PURE__*/ createWriteContract({
  abi: gameAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const writeGameUpdateMetadata = /*#__PURE__*/ createWriteContract({
  abi: gameAbi,
  functionName: 'updateMetadata',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameAbi}__
 */
export const simulateGame = /*#__PURE__*/ createSimulateContract({
  abi: gameAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"addComponent"`
 */
export const simulateGameAddComponent = /*#__PURE__*/ createSimulateContract({
  abi: gameAbi,
  functionName: 'addComponent',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"createEntity"`
 */
export const simulateGameCreateEntity = /*#__PURE__*/ createSimulateContract({
  abi: gameAbi,
  functionName: 'createEntity',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"createFlow"`
 */
export const simulateGameCreateFlow = /*#__PURE__*/ createSimulateContract({
  abi: gameAbi,
  functionName: 'createFlow',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"executeFlow"`
 */
export const simulateGameExecuteFlow = /*#__PURE__*/ createSimulateContract({
  abi: gameAbi,
  functionName: 'executeFlow',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateGameInitialize = /*#__PURE__*/ createSimulateContract({
  abi: gameAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const simulateGameUpdateMetadata = /*#__PURE__*/ createSimulateContract({
  abi: gameAbi,
  functionName: 'updateMetadata',
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gameAbi}__
 */
export const watchGameEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: gameAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gameAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchGameInitializedEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: gameAbi, eventName: 'Initialized' }
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameFactoryAbi}__
 */
export const readGameFactory = /*#__PURE__*/ createReadContract({
  abi: gameFactoryAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"admin"`
 */
export const readGameFactoryAdmin = /*#__PURE__*/ createReadContract({
  abi: gameFactoryAbi,
  functionName: 'admin',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"componentRegistry"`
 */
export const readGameFactoryComponentRegistry =
  /*#__PURE__*/ createReadContract({
    abi: gameFactoryAbi,
    functionName: 'componentRegistry',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"entityFactory"`
 */
export const readGameFactoryEntityFactory = /*#__PURE__*/ createReadContract({
  abi: gameFactoryAbi,
  functionName: 'entityFactory',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"gameContract"`
 */
export const readGameFactoryGameContract = /*#__PURE__*/ createReadContract({
  abi: gameFactoryAbi,
  functionName: 'gameContract',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"games"`
 */
export const readGameFactoryGames = /*#__PURE__*/ createReadContract({
  abi: gameFactoryAbi,
  functionName: 'games',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"getGameCount"`
 */
export const readGameFactoryGetGameCount = /*#__PURE__*/ createReadContract({
  abi: gameFactoryAbi,
  functionName: 'getGameCount',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"getGames"`
 */
export const readGameFactoryGetGames = /*#__PURE__*/ createReadContract({
  abi: gameFactoryAbi,
  functionName: 'getGames',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameFactoryAbi}__
 */
export const writeGameFactory = /*#__PURE__*/ createWriteContract({
  abi: gameFactoryAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"createGame"`
 */
export const writeGameFactoryCreateGame = /*#__PURE__*/ createWriteContract({
  abi: gameFactoryAbi,
  functionName: 'createGame',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"createGameWithComponents"`
 */
export const writeGameFactoryCreateGameWithComponents =
  /*#__PURE__*/ createWriteContract({
    abi: gameFactoryAbi,
    functionName: 'createGameWithComponents',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"initialize"`
 */
export const writeGameFactoryInitialize = /*#__PURE__*/ createWriteContract({
  abi: gameFactoryAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"setEntityFactory"`
 */
export const writeGameFactorySetEntityFactory =
  /*#__PURE__*/ createWriteContract({
    abi: gameFactoryAbi,
    functionName: 'setEntityFactory',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"setGameContract"`
 */
export const writeGameFactorySetGameContract =
  /*#__PURE__*/ createWriteContract({
    abi: gameFactoryAbi,
    functionName: 'setGameContract',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameFactoryAbi}__
 */
export const simulateGameFactory = /*#__PURE__*/ createSimulateContract({
  abi: gameFactoryAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"createGame"`
 */
export const simulateGameFactoryCreateGame =
  /*#__PURE__*/ createSimulateContract({
    abi: gameFactoryAbi,
    functionName: 'createGame',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"createGameWithComponents"`
 */
export const simulateGameFactoryCreateGameWithComponents =
  /*#__PURE__*/ createSimulateContract({
    abi: gameFactoryAbi,
    functionName: 'createGameWithComponents',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateGameFactoryInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: gameFactoryAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"setEntityFactory"`
 */
export const simulateGameFactorySetEntityFactory =
  /*#__PURE__*/ createSimulateContract({
    abi: gameFactoryAbi,
    functionName: 'setEntityFactory',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link gameFactoryAbi}__ and `functionName` set to `"setGameContract"`
 */
export const simulateGameFactorySetGameContract =
  /*#__PURE__*/ createSimulateContract({
    abi: gameFactoryAbi,
    functionName: 'setGameContract',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gameFactoryAbi}__
 */
export const watchGameFactoryEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: gameFactoryAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link gameFactoryAbi}__ and `eventName` set to `"GameCreated"`
 */
export const watchGameFactoryGameCreatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: gameFactoryAbi,
    eventName: 'GameCreated',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iComponentAbi}__
 */
export const readIComponent = /*#__PURE__*/ createReadContract({
  abi: iComponentAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"getSummary"`
 */
export const readIComponentGetSummary = /*#__PURE__*/ createReadContract({
  abi: iComponentAbi,
  functionName: 'getSummary',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"metadata"`
 */
export const readIComponentMetadata = /*#__PURE__*/ createReadContract({
  abi: iComponentAbi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iComponentAbi}__
 */
export const writeIComponent = /*#__PURE__*/ createWriteContract({
  abi: iComponentAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"initialize"`
 */
export const writeIComponentInitialize = /*#__PURE__*/ createWriteContract({
  abi: iComponentAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const writeIComponentUpdateMetadata = /*#__PURE__*/ createWriteContract({
  abi: iComponentAbi,
  functionName: 'updateMetadata',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iComponentAbi}__
 */
export const simulateIComponent = /*#__PURE__*/ createSimulateContract({
  abi: iComponentAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateIComponentInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: iComponentAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iComponentAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const simulateIComponentUpdateMetadata =
  /*#__PURE__*/ createSimulateContract({
    abi: iComponentAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGameAbi}__
 */
export const readIGame = /*#__PURE__*/ createReadContract({ abi: iGameAbi });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"getEntity"`
 */
export const readIGameGetEntity = /*#__PURE__*/ createReadContract({
  abi: iGameAbi,
  functionName: 'getEntity',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"isGM"`
 */
export const readIGameIsGm = /*#__PURE__*/ createReadContract({
  abi: iGameAbi,
  functionName: 'isGM',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"validateIsModule"`
 */
export const readIGameValidateIsModule = /*#__PURE__*/ createReadContract({
  abi: iGameAbi,
  functionName: 'validateIsModule',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGameAbi}__
 */
export const writeIGame = /*#__PURE__*/ createWriteContract({ abi: iGameAbi });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"addComponent"`
 */
export const writeIGameAddComponent = /*#__PURE__*/ createWriteContract({
  abi: iGameAbi,
  functionName: 'addComponent',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"createEntity"`
 */
export const writeIGameCreateEntity = /*#__PURE__*/ createWriteContract({
  abi: iGameAbi,
  functionName: 'createEntity',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"createFlow"`
 */
export const writeIGameCreateFlow = /*#__PURE__*/ createWriteContract({
  abi: iGameAbi,
  functionName: 'createFlow',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"initialize"`
 */
export const writeIGameInitialize = /*#__PURE__*/ createWriteContract({
  abi: iGameAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGameAbi}__
 */
export const simulateIGame = /*#__PURE__*/ createSimulateContract({
  abi: iGameAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"addComponent"`
 */
export const simulateIGameAddComponent = /*#__PURE__*/ createSimulateContract({
  abi: iGameAbi,
  functionName: 'addComponent',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"createEntity"`
 */
export const simulateIGameCreateEntity = /*#__PURE__*/ createSimulateContract({
  abi: iGameAbi,
  functionName: 'createEntity',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"createFlow"`
 */
export const simulateIGameCreateFlow = /*#__PURE__*/ createSimulateContract({
  abi: iGameAbi,
  functionName: 'createFlow',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iGameAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateIGameInitialize = /*#__PURE__*/ createSimulateContract({
  abi: iGameAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pvpResultAbi}__
 */
export const readPvpResult = /*#__PURE__*/ createReadContract({
  abi: pvpResultAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"getLastGame"`
 */
export const readPvpResultGetLastGame = /*#__PURE__*/ createReadContract({
  abi: pvpResultAbi,
  functionName: 'getLastGame',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"getSummary"`
 */
export const readPvpResultGetSummary = /*#__PURE__*/ createReadContract({
  abi: pvpResultAbi,
  functionName: 'getSummary',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"metadata"`
 */
export const readPvpResultMetadata = /*#__PURE__*/ createReadContract({
  abi: pvpResultAbi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pvpResultAbi}__
 */
export const writePvpResult = /*#__PURE__*/ createWriteContract({
  abi: pvpResultAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"initialize"`
 */
export const writePvpResultInitialize = /*#__PURE__*/ createWriteContract({
  abi: pvpResultAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"storeResult"`
 */
export const writePvpResultStoreResult = /*#__PURE__*/ createWriteContract({
  abi: pvpResultAbi,
  functionName: 'storeResult',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const writePvpResultUpdateMetadata = /*#__PURE__*/ createWriteContract({
  abi: pvpResultAbi,
  functionName: 'updateMetadata',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pvpResultAbi}__
 */
export const simulatePvpResult = /*#__PURE__*/ createSimulateContract({
  abi: pvpResultAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"initialize"`
 */
export const simulatePvpResultInitialize = /*#__PURE__*/ createSimulateContract(
  { abi: pvpResultAbi, functionName: 'initialize' }
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"storeResult"`
 */
export const simulatePvpResultStoreResult =
  /*#__PURE__*/ createSimulateContract({
    abi: pvpResultAbi,
    functionName: 'storeResult',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link pvpResultAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const simulatePvpResultUpdateMetadata =
  /*#__PURE__*/ createSimulateContract({
    abi: pvpResultAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link queueSessionAbi}__
 */
export const readQueueSession = /*#__PURE__*/ createReadContract({
  abi: queueSessionAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"getPlayerCount"`
 */
export const readQueueSessionGetPlayerCount = /*#__PURE__*/ createReadContract({
  abi: queueSessionAbi,
  functionName: 'getPlayerCount',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"getSummary"`
 */
export const readQueueSessionGetSummary = /*#__PURE__*/ createReadContract({
  abi: queueSessionAbi,
  functionName: 'getSummary',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"isPlayerInQueue"`
 */
export const readQueueSessionIsPlayerInQueue = /*#__PURE__*/ createReadContract(
  { abi: queueSessionAbi, functionName: 'isPlayerInQueue' }
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"metadata"`
 */
export const readQueueSessionMetadata = /*#__PURE__*/ createReadContract({
  abi: queueSessionAbi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link queueSessionAbi}__
 */
export const writeQueueSession = /*#__PURE__*/ createWriteContract({
  abi: queueSessionAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"initialize"`
 */
export const writeQueueSessionInitialize = /*#__PURE__*/ createWriteContract({
  abi: queueSessionAbi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"joinQueue"`
 */
export const writeQueueSessionJoinQueue = /*#__PURE__*/ createWriteContract({
  abi: queueSessionAbi,
  functionName: 'joinQueue',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"setMatchOrWait"`
 */
export const writeQueueSessionSetMatchOrWait =
  /*#__PURE__*/ createWriteContract({
    abi: queueSessionAbi,
    functionName: 'setMatchOrWait',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const writeQueueSessionUpdateMetadata =
  /*#__PURE__*/ createWriteContract({
    abi: queueSessionAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link queueSessionAbi}__
 */
export const simulateQueueSession = /*#__PURE__*/ createSimulateContract({
  abi: queueSessionAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateQueueSessionInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: queueSessionAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"joinQueue"`
 */
export const simulateQueueSessionJoinQueue =
  /*#__PURE__*/ createSimulateContract({
    abi: queueSessionAbi,
    functionName: 'joinQueue',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"setMatchOrWait"`
 */
export const simulateQueueSessionSetMatchOrWait =
  /*#__PURE__*/ createSimulateContract({
    abi: queueSessionAbi,
    functionName: 'setMatchOrWait',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link queueSessionAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const simulateQueueSessionUpdateMetadata =
  /*#__PURE__*/ createSimulateContract({
    abi: queueSessionAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link queueSessionAbi}__
 */
export const watchQueueSessionEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: queueSessionAbi,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link queueSessionAbi}__ and `eventName` set to `"JoinedQueue"`
 */
export const watchQueueSessionJoinedQueueEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: queueSessionAbi,
    eventName: 'JoinedQueue',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link queueSessionAbi}__ and `eventName` set to `"MatchMade"`
 */
export const watchQueueSessionMatchMadeEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: queueSessionAbi,
    eventName: 'MatchMade',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rewardErc20Abi}__
 */
export const readRewardErc20 = /*#__PURE__*/ createReadContract({
  abi: rewardErc20Abi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"getRewardToken"`
 */
export const readRewardErc20GetRewardToken = /*#__PURE__*/ createReadContract({
  abi: rewardErc20Abi,
  functionName: 'getRewardToken',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"getSummary"`
 */
export const readRewardErc20GetSummary = /*#__PURE__*/ createReadContract({
  abi: rewardErc20Abi,
  functionName: 'getSummary',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"metadata"`
 */
export const readRewardErc20Metadata = /*#__PURE__*/ createReadContract({
  abi: rewardErc20Abi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rewardErc20Abi}__
 */
export const writeRewardErc20 = /*#__PURE__*/ createWriteContract({
  abi: rewardErc20Abi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"initialize"`
 */
export const writeRewardErc20Initialize = /*#__PURE__*/ createWriteContract({
  abi: rewardErc20Abi,
  functionName: 'initialize',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"rewardTie"`
 */
export const writeRewardErc20RewardTie = /*#__PURE__*/ createWriteContract({
  abi: rewardErc20Abi,
  functionName: 'rewardTie',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"rewardWinner"`
 */
export const writeRewardErc20RewardWinner = /*#__PURE__*/ createWriteContract({
  abi: rewardErc20Abi,
  functionName: 'rewardWinner',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"setReward"`
 */
export const writeRewardErc20SetReward = /*#__PURE__*/ createWriteContract({
  abi: rewardErc20Abi,
  functionName: 'setReward',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"updateMetadata"`
 */
export const writeRewardErc20UpdateMetadata = /*#__PURE__*/ createWriteContract(
  { abi: rewardErc20Abi, functionName: 'updateMetadata' }
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rewardErc20Abi}__
 */
export const simulateRewardErc20 = /*#__PURE__*/ createSimulateContract({
  abi: rewardErc20Abi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"initialize"`
 */
export const simulateRewardErc20Initialize =
  /*#__PURE__*/ createSimulateContract({
    abi: rewardErc20Abi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"rewardTie"`
 */
export const simulateRewardErc20RewardTie =
  /*#__PURE__*/ createSimulateContract({
    abi: rewardErc20Abi,
    functionName: 'rewardTie',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"rewardWinner"`
 */
export const simulateRewardErc20RewardWinner =
  /*#__PURE__*/ createSimulateContract({
    abi: rewardErc20Abi,
    functionName: 'rewardWinner',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"setReward"`
 */
export const simulateRewardErc20SetReward =
  /*#__PURE__*/ createSimulateContract({
    abi: rewardErc20Abi,
    functionName: 'setReward',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rewardErc20Abi}__ and `functionName` set to `"updateMetadata"`
 */
export const simulateRewardErc20UpdateMetadata =
  /*#__PURE__*/ createSimulateContract({
    abi: rewardErc20Abi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__
 */
export const readRockPaperScissors = /*#__PURE__*/ createReadContract({
  abi: rockPaperScissorsAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"getSummary"`
 */
export const readRockPaperScissorsGetSummary = /*#__PURE__*/ createReadContract(
  { abi: rockPaperScissorsAbi, functionName: 'getSummary' }
);

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"metadata"`
 */
export const readRockPaperScissorsMetadata = /*#__PURE__*/ createReadContract({
  abi: rockPaperScissorsAbi,
  functionName: 'metadata',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__
 */
export const writeRockPaperScissors = /*#__PURE__*/ createWriteContract({
  abi: rockPaperScissorsAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"initialize"`
 */
export const writeRockPaperScissorsInitialize =
  /*#__PURE__*/ createWriteContract({
    abi: rockPaperScissorsAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"oneOnOne"`
 */
export const writeRockPaperScissorsOneOnOne = /*#__PURE__*/ createWriteContract(
  { abi: rockPaperScissorsAbi, functionName: 'oneOnOne' }
);

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"setTieAmount"`
 */
export const writeRockPaperScissorsSetTieAmount =
  /*#__PURE__*/ createWriteContract({
    abi: rockPaperScissorsAbi,
    functionName: 'setTieAmount',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"setWinAmount"`
 */
export const writeRockPaperScissorsSetWinAmount =
  /*#__PURE__*/ createWriteContract({
    abi: rockPaperScissorsAbi,
    functionName: 'setWinAmount',
  });

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const writeRockPaperScissorsUpdateMetadata =
  /*#__PURE__*/ createWriteContract({
    abi: rockPaperScissorsAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__
 */
export const simulateRockPaperScissors = /*#__PURE__*/ createSimulateContract({
  abi: rockPaperScissorsAbi,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateRockPaperScissorsInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: rockPaperScissorsAbi,
    functionName: 'initialize',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"oneOnOne"`
 */
export const simulateRockPaperScissorsOneOnOne =
  /*#__PURE__*/ createSimulateContract({
    abi: rockPaperScissorsAbi,
    functionName: 'oneOnOne',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"setTieAmount"`
 */
export const simulateRockPaperScissorsSetTieAmount =
  /*#__PURE__*/ createSimulateContract({
    abi: rockPaperScissorsAbi,
    functionName: 'setTieAmount',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"setWinAmount"`
 */
export const simulateRockPaperScissorsSetWinAmount =
  /*#__PURE__*/ createSimulateContract({
    abi: rockPaperScissorsAbi,
    functionName: 'setWinAmount',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `functionName` set to `"updateMetadata"`
 */
export const simulateRockPaperScissorsUpdateMetadata =
  /*#__PURE__*/ createSimulateContract({
    abi: rockPaperScissorsAbi,
    functionName: 'updateMetadata',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rockPaperScissorsAbi}__
 */
export const watchRockPaperScissorsEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: rockPaperScissorsAbi });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link rockPaperScissorsAbi}__ and `eventName` set to `"GameResult"`
 */
export const watchRockPaperScissorsGameResultEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: rockPaperScissorsAbi,
    eventName: 'GameResult',
  });
