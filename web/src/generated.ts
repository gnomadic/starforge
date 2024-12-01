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
// CraftSystem
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const craftSystemAbi = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
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
  { type: 'error', inputs: [], name: 'UNAUTHORIZED' },
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
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'baseValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addItem',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'valueAdd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addStation',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'gameStates',
    outputs: [
      { name: 'lastTick', internalType: 'uint256', type: 'uint256' },
      { name: 'newItemRate', internalType: 'uint256', type: 'uint256' },
      { name: 'beltDuration', internalType: 'uint256', type: 'uint256' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'init',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'items',
    outputs: [{ name: 'baseValue', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: '_loader', internalType: 'address', type: 'address' }],
    name: 'setLoader',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'simulateTick',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'stations',
    outputs: [{ name: 'valueAdd', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tick',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lab
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const labAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'renderer', internalType: 'address', type: 'address' }],
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
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'renderer', internalType: 'address', type: 'address' }],
    name: 'addRenderer',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newSystem', internalType: 'address', type: 'address' }],
    name: 'addSystem',
    outputs: [],
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
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'clearSystems',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'customizeCost',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
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
  },
  {
    stateMutability: 'view',
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
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'generateCharacter',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'generateSVG',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
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
    stateMutability: 'payable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'mintCost',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [],
    name: 'nextTokenId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'renderers',
    outputs: [
      { name: '', internalType: 'contract IRenderer', type: 'address' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
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
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'selectedIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selectRenderer',
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
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'systems',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokensOfOwner',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'stop', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokensOfOwnerIn',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
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
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// System
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const systemAbi = [
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'init',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link craftSystemAbi}__
 */
export const useReadCraftSystem = /*#__PURE__*/ createUseReadContract({
  abi: craftSystemAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"gameStates"`
 */
export const useReadCraftSystemGameStates = /*#__PURE__*/ createUseReadContract(
  { abi: craftSystemAbi, functionName: 'gameStates' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"items"`
 */
export const useReadCraftSystemItems = /*#__PURE__*/ createUseReadContract({
  abi: craftSystemAbi,
  functionName: 'items',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"owner"`
 */
export const useReadCraftSystemOwner = /*#__PURE__*/ createUseReadContract({
  abi: craftSystemAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"simulateTick"`
 */
export const useReadCraftSystemSimulateTick =
  /*#__PURE__*/ createUseReadContract({
    abi: craftSystemAbi,
    functionName: 'simulateTick',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"stations"`
 */
export const useReadCraftSystemStations = /*#__PURE__*/ createUseReadContract({
  abi: craftSystemAbi,
  functionName: 'stations',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link craftSystemAbi}__
 */
export const useWriteCraftSystem = /*#__PURE__*/ createUseWriteContract({
  abi: craftSystemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"addItem"`
 */
export const useWriteCraftSystemAddItem = /*#__PURE__*/ createUseWriteContract({
  abi: craftSystemAbi,
  functionName: 'addItem',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"addStation"`
 */
export const useWriteCraftSystemAddStation =
  /*#__PURE__*/ createUseWriteContract({
    abi: craftSystemAbi,
    functionName: 'addStation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"init"`
 */
export const useWriteCraftSystemInit = /*#__PURE__*/ createUseWriteContract({
  abi: craftSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteCraftSystemRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: craftSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"setLoader"`
 */
export const useWriteCraftSystemSetLoader =
  /*#__PURE__*/ createUseWriteContract({
    abi: craftSystemAbi,
    functionName: 'setLoader',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"tick"`
 */
export const useWriteCraftSystemTick = /*#__PURE__*/ createUseWriteContract({
  abi: craftSystemAbi,
  functionName: 'tick',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteCraftSystemTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: craftSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link craftSystemAbi}__
 */
export const useSimulateCraftSystem = /*#__PURE__*/ createUseSimulateContract({
  abi: craftSystemAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"addItem"`
 */
export const useSimulateCraftSystemAddItem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: craftSystemAbi,
    functionName: 'addItem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"addStation"`
 */
export const useSimulateCraftSystemAddStation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: craftSystemAbi,
    functionName: 'addStation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateCraftSystemInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: craftSystemAbi,
    functionName: 'init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateCraftSystemRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: craftSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"setLoader"`
 */
export const useSimulateCraftSystemSetLoader =
  /*#__PURE__*/ createUseSimulateContract({
    abi: craftSystemAbi,
    functionName: 'setLoader',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"tick"`
 */
export const useSimulateCraftSystemTick =
  /*#__PURE__*/ createUseSimulateContract({
    abi: craftSystemAbi,
    functionName: 'tick',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateCraftSystemTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: craftSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link craftSystemAbi}__
 */
export const useWatchCraftSystemEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: craftSystemAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link craftSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchCraftSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: craftSystemAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__
 */
export const useReadLab = /*#__PURE__*/ createUseReadContract({ abi: labAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLabBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"contractURI"`
 */
export const useReadLabContractUri = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"customizeCost"`
 */
export const useReadLabCustomizeCost = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'customizeCost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"explicitOwnershipOf"`
 */
export const useReadLabExplicitOwnershipOf =
  /*#__PURE__*/ createUseReadContract({
    abi: labAbi,
    functionName: 'explicitOwnershipOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"explicitOwnershipsOf"`
 */
export const useReadLabExplicitOwnershipsOf =
  /*#__PURE__*/ createUseReadContract({
    abi: labAbi,
    functionName: 'explicitOwnershipsOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"generateCharacter"`
 */
export const useReadLabGenerateCharacter = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'generateCharacter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"generateSVG"`
 */
export const useReadLabGenerateSvg = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'generateSVG',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadLabGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadLabIsApprovedForAll = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"mintCost"`
 */
export const useReadLabMintCost = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'mintCost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"name"`
 */
export const useReadLabName = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"nextTokenId"`
 */
export const useReadLabNextTokenId = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'nextTokenId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLabOwner = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadLabOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"renderers"`
 */
export const useReadLabRenderers = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'renderers',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadLabSupportsInterface = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadLabSymbol = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"systems"`
 */
export const useReadLabSystems = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'systems',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadLabTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"tokensOfOwner"`
 */
export const useReadLabTokensOfOwner = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'tokensOfOwner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"tokensOfOwnerIn"`
 */
export const useReadLabTokensOfOwnerIn = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'tokensOfOwnerIn',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadLabTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: labAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__
 */
export const useWriteLab = /*#__PURE__*/ createUseWriteContract({ abi: labAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"addRenderer"`
 */
export const useWriteLabAddRenderer = /*#__PURE__*/ createUseWriteContract({
  abi: labAbi,
  functionName: 'addRenderer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"addSystem"`
 */
export const useWriteLabAddSystem = /*#__PURE__*/ createUseWriteContract({
  abi: labAbi,
  functionName: 'addSystem',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteLabApprove = /*#__PURE__*/ createUseWriteContract({
  abi: labAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"clearSystems"`
 */
export const useWriteLabClearSystems = /*#__PURE__*/ createUseWriteContract({
  abi: labAbi,
  functionName: 'clearSystems',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteLabMint = /*#__PURE__*/ createUseWriteContract({
  abi: labAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLabRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: labAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteLabSafeTransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: labAbi, functionName: 'safeTransferFrom' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const useWriteLabSelectRenderer = /*#__PURE__*/ createUseWriteContract({
  abi: labAbi,
  functionName: 'selectRenderer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteLabSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: labAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteLabTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: labAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLabTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: labAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__
 */
export const useSimulateLab = /*#__PURE__*/ createUseSimulateContract({
  abi: labAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"addRenderer"`
 */
export const useSimulateLabAddRenderer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: labAbi,
    functionName: 'addRenderer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"addSystem"`
 */
export const useSimulateLabAddSystem = /*#__PURE__*/ createUseSimulateContract({
  abi: labAbi,
  functionName: 'addSystem',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateLabApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: labAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"clearSystems"`
 */
export const useSimulateLabClearSystems =
  /*#__PURE__*/ createUseSimulateContract({
    abi: labAbi,
    functionName: 'clearSystems',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateLabMint = /*#__PURE__*/ createUseSimulateContract({
  abi: labAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLabRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: labAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateLabSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: labAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const useSimulateLabSelectRenderer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: labAbi,
    functionName: 'selectRenderer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateLabSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: labAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateLabTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: labAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLabTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: labAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link labAbi}__
 */
export const useWatchLabEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: labAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link labAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchLabApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: labAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link labAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchLabApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: labAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link labAbi}__ and `eventName` set to `"ConsecutiveTransfer"`
 */
export const useWatchLabConsecutiveTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: labAbi,
    eventName: 'ConsecutiveTransfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link labAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLabOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: labAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link labAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchLabTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: labAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemAbi}__
 */
export const useWriteSystem = /*#__PURE__*/ createUseWriteContract({
  abi: systemAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link systemAbi}__ and `functionName` set to `"init"`
 */
export const useWriteSystemInit = /*#__PURE__*/ createUseWriteContract({
  abi: systemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemAbi}__
 */
export const useSimulateSystem = /*#__PURE__*/ createUseSimulateContract({
  abi: systemAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link systemAbi}__ and `functionName` set to `"init"`
 */
export const useSimulateSystemInit = /*#__PURE__*/ createUseSimulateContract({
  abi: systemAbi,
  functionName: 'init',
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link craftSystemAbi}__
 */
export const readCraftSystem = /*#__PURE__*/ createReadContract({
  abi: craftSystemAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"gameStates"`
 */
export const readCraftSystemGameStates = /*#__PURE__*/ createReadContract({
  abi: craftSystemAbi,
  functionName: 'gameStates',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"items"`
 */
export const readCraftSystemItems = /*#__PURE__*/ createReadContract({
  abi: craftSystemAbi,
  functionName: 'items',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"owner"`
 */
export const readCraftSystemOwner = /*#__PURE__*/ createReadContract({
  abi: craftSystemAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"simulateTick"`
 */
export const readCraftSystemSimulateTick = /*#__PURE__*/ createReadContract({
  abi: craftSystemAbi,
  functionName: 'simulateTick',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"stations"`
 */
export const readCraftSystemStations = /*#__PURE__*/ createReadContract({
  abi: craftSystemAbi,
  functionName: 'stations',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link craftSystemAbi}__
 */
export const writeCraftSystem = /*#__PURE__*/ createWriteContract({
  abi: craftSystemAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"addItem"`
 */
export const writeCraftSystemAddItem = /*#__PURE__*/ createWriteContract({
  abi: craftSystemAbi,
  functionName: 'addItem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"addStation"`
 */
export const writeCraftSystemAddStation = /*#__PURE__*/ createWriteContract({
  abi: craftSystemAbi,
  functionName: 'addStation',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"init"`
 */
export const writeCraftSystemInit = /*#__PURE__*/ createWriteContract({
  abi: craftSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeCraftSystemRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: craftSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"setLoader"`
 */
export const writeCraftSystemSetLoader = /*#__PURE__*/ createWriteContract({
  abi: craftSystemAbi,
  functionName: 'setLoader',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"tick"`
 */
export const writeCraftSystemTick = /*#__PURE__*/ createWriteContract({
  abi: craftSystemAbi,
  functionName: 'tick',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeCraftSystemTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: craftSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link craftSystemAbi}__
 */
export const simulateCraftSystem = /*#__PURE__*/ createSimulateContract({
  abi: craftSystemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"addItem"`
 */
export const simulateCraftSystemAddItem = /*#__PURE__*/ createSimulateContract({
  abi: craftSystemAbi,
  functionName: 'addItem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"addStation"`
 */
export const simulateCraftSystemAddStation =
  /*#__PURE__*/ createSimulateContract({
    abi: craftSystemAbi,
    functionName: 'addStation',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"init"`
 */
export const simulateCraftSystemInit = /*#__PURE__*/ createSimulateContract({
  abi: craftSystemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateCraftSystemRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: craftSystemAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"setLoader"`
 */
export const simulateCraftSystemSetLoader =
  /*#__PURE__*/ createSimulateContract({
    abi: craftSystemAbi,
    functionName: 'setLoader',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"tick"`
 */
export const simulateCraftSystemTick = /*#__PURE__*/ createSimulateContract({
  abi: craftSystemAbi,
  functionName: 'tick',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link craftSystemAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateCraftSystemTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: craftSystemAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link craftSystemAbi}__
 */
export const watchCraftSystemEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: craftSystemAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link craftSystemAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchCraftSystemOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: craftSystemAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__
 */
export const readLab = /*#__PURE__*/ createReadContract({ abi: labAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readLabBalanceOf = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"contractURI"`
 */
export const readLabContractUri = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'contractURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"customizeCost"`
 */
export const readLabCustomizeCost = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'customizeCost',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"explicitOwnershipOf"`
 */
export const readLabExplicitOwnershipOf = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'explicitOwnershipOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"explicitOwnershipsOf"`
 */
export const readLabExplicitOwnershipsOf = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'explicitOwnershipsOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"generateCharacter"`
 */
export const readLabGenerateCharacter = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'generateCharacter',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"generateSVG"`
 */
export const readLabGenerateSvg = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'generateSVG',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"getApproved"`
 */
export const readLabGetApproved = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readLabIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"mintCost"`
 */
export const readLabMintCost = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'mintCost',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"name"`
 */
export const readLabName = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"nextTokenId"`
 */
export const readLabNextTokenId = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'nextTokenId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"owner"`
 */
export const readLabOwner = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readLabOwnerOf = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"renderers"`
 */
export const readLabRenderers = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'renderers',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readLabSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"symbol"`
 */
export const readLabSymbol = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"systems"`
 */
export const readLabSystems = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'systems',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readLabTokenUri = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"tokensOfOwner"`
 */
export const readLabTokensOfOwner = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'tokensOfOwner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"tokensOfOwnerIn"`
 */
export const readLabTokensOfOwnerIn = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'tokensOfOwnerIn',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readLabTotalSupply = /*#__PURE__*/ createReadContract({
  abi: labAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__
 */
export const writeLab = /*#__PURE__*/ createWriteContract({ abi: labAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"addRenderer"`
 */
export const writeLabAddRenderer = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'addRenderer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"addSystem"`
 */
export const writeLabAddSystem = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'addSystem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"approve"`
 */
export const writeLabApprove = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"clearSystems"`
 */
export const writeLabClearSystems = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'clearSystems',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"mint"`
 */
export const writeLabMint = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeLabRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeLabSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const writeLabSelectRenderer = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'selectRenderer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeLabSetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeLabTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeLabTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: labAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__
 */
export const simulateLab = /*#__PURE__*/ createSimulateContract({ abi: labAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"addRenderer"`
 */
export const simulateLabAddRenderer = /*#__PURE__*/ createSimulateContract({
  abi: labAbi,
  functionName: 'addRenderer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"addSystem"`
 */
export const simulateLabAddSystem = /*#__PURE__*/ createSimulateContract({
  abi: labAbi,
  functionName: 'addSystem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"approve"`
 */
export const simulateLabApprove = /*#__PURE__*/ createSimulateContract({
  abi: labAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"clearSystems"`
 */
export const simulateLabClearSystems = /*#__PURE__*/ createSimulateContract({
  abi: labAbi,
  functionName: 'clearSystems',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"mint"`
 */
export const simulateLabMint = /*#__PURE__*/ createSimulateContract({
  abi: labAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateLabRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: labAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateLabSafeTransferFrom = /*#__PURE__*/ createSimulateContract(
  { abi: labAbi, functionName: 'safeTransferFrom' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"selectRenderer"`
 */
export const simulateLabSelectRenderer = /*#__PURE__*/ createSimulateContract({
  abi: labAbi,
  functionName: 'selectRenderer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateLabSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: labAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateLabTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: labAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link labAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateLabTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: labAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link labAbi}__
 */
export const watchLabEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: labAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link labAbi}__ and `eventName` set to `"Approval"`
 */
export const watchLabApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: labAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link labAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchLabApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: labAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link labAbi}__ and `eventName` set to `"ConsecutiveTransfer"`
 */
export const watchLabConsecutiveTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: labAbi,
    eventName: 'ConsecutiveTransfer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link labAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchLabOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: labAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link labAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchLabTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: labAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemAbi}__
 */
export const writeSystem = /*#__PURE__*/ createWriteContract({ abi: systemAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link systemAbi}__ and `functionName` set to `"init"`
 */
export const writeSystemInit = /*#__PURE__*/ createWriteContract({
  abi: systemAbi,
  functionName: 'init',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemAbi}__
 */
export const simulateSystem = /*#__PURE__*/ createSimulateContract({
  abi: systemAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link systemAbi}__ and `functionName` set to `"init"`
 */
export const simulateSystemInit = /*#__PURE__*/ createSimulateContract({
  abi: systemAbi,
  functionName: 'init',
})
