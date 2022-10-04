/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { MeanFinanceHub, MeanFinanceHubInterface } from '../MeanFinanceHub';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_immediateGovernor',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_timeLockedGovernor',
        type: 'address',
      },
      {
        internalType: 'contract ITokenPriceOracle',
        name: '_oracle',
        type: 'address',
      },
      {
        internalType: 'contract IDCAPermissionManager',
        name: '_permissionManager',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AmountTooBig',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HighFee',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HighPlatformFeeRatio',
    type: 'error',
  },
  {
    inputs: [],
    name: 'IntervalNotAllowed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidAllowedTokensInput',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidFee',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidInterval',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidMask',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPairs',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPosition',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTokens',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LiquidityNotReturned',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoSwapsToExecute',
    type: 'error',
  },
  {
    inputs: [],
    name: 'PositionDoesNotMatchToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UnallowedToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UnauthorizedCaller',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroSwaps',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'depositor',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'fromToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'toToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'swapInterval',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint120',
        name: 'rate',
        type: 'uint120',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'startingSwap',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'lastSwap',
        type: 'uint32',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'enum IDCAPermissionManager.Permission[]',
            name: 'permissions',
            type: 'uint8[]',
          },
        ],
        indexed: false,
        internalType: 'struct IDCAPermissionManager.PermissionSet[]',
        name: 'permissions',
        type: 'tuple[]',
      },
    ],
    name: 'Deposited',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Miscellaneous',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint120',
        name: 'rate',
        type: 'uint120',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'startingSwap',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'lastSwap',
        type: 'uint32',
      },
    ],
    name: 'Modified',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract ITokenPriceOracle',
        name: 'oracle',
        type: 'address',
      },
    ],
    name: 'OracleSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint16',
        name: 'platformFeeRatio',
        type: 'uint16',
      },
    ],
    name: 'PlatformFeeRatioSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32',
        name: 'feeSet',
        type: 'uint32',
      },
    ],
    name: 'SwapFeeSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32[]',
        name: 'swapIntervals',
        type: 'uint32[]',
      },
    ],
    name: 'SwapIntervalsAllowed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint32[]',
        name: 'swapIntervals',
        type: 'uint32[]',
      },
    ],
    name: 'SwapIntervalsForbidden',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'rewardRecipient',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'callbackHandler',
        type: 'address',
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'reward',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'toProvide',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'platformFee',
                type: 'uint256',
              },
            ],
            internalType: 'struct IDCAHubSwapHandler.TokenInSwap[]',
            name: 'tokens',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'tokenA',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'tokenB',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'totalAmountToSwapTokenA',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'totalAmountToSwapTokenB',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'ratioAToB',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'ratioBToA',
                type: 'uint256',
              },
              {
                internalType: 'bytes1',
                name: 'intervalsInSwap',
                type: 'bytes1',
              },
            ],
            internalType: 'struct IDCAHubSwapHandler.PairInSwap[]',
            name: 'pairs',
            type: 'tuple[]',
          },
        ],
        indexed: false,
        internalType: 'struct IDCAHubSwapHandler.SwapInfo',
        name: 'swapInformation',
        type: 'tuple',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'borrowed',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'fee',
        type: 'uint32',
      },
    ],
    name: 'Swapped',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipientUnswapped',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipientSwapped',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'returnedUnswapped',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'returnedSwapped',
        type: 'uint256',
      },
    ],
    name: 'Terminated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'tokens',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'bool[]',
        name: 'allowed',
        type: 'bool[]',
      },
    ],
    name: 'TokensAllowedUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'withdrawer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'positionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Withdrew',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct IDCAHub.AmountOfToken[]',
        name: 'amounts',
        type: 'tuple[]',
      },
    ],
    name: 'WithdrewFromPlatform',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'withdrawer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'positionIds',
            type: 'uint256[]',
          },
        ],
        indexed: false,
        internalType: 'struct IDCAHubPositionHandler.PositionSet[]',
        name: 'positions',
        type: 'tuple[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'withdrew',
        type: 'uint256[]',
      },
    ],
    name: 'WithdrewMany',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'IMMEDIATE_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_FEE',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_PLATFORM_FEE_RATIO',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PLATFORM_WITHDRAW_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PRIVILEGED_SWAPPER_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'TIME_LOCKED_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes1',
        name: '',
        type: 'bytes1',
      },
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    name: 'accumRatio',
    outputs: [
      {
        internalType: 'uint256',
        name: 'accumRatioAToB',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'accumRatioBToA',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'activeSwapIntervals',
    outputs: [
      {
        internalType: 'bytes1',
        name: '',
        type: 'bytes1',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32[]',
        name: '_swapIntervals',
        type: 'uint32[]',
      },
    ],
    name: 'addSwapIntervalsToAllowedList',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allowedSwapIntervals',
    outputs: [
      {
        internalType: 'bytes1',
        name: '',
        type: 'bytes1',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'allowedTokens',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_amountOfSwaps',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '_swapInterval',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'enum IDCAPermissionManager.Permission[]',
            name: 'permissions',
            type: 'uint8[]',
          },
        ],
        internalType: 'struct IDCAPermissionManager.PermissionSet[]',
        name: '_permissions',
        type: 'tuple[]',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_amountOfSwaps',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '_swapInterval',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'enum IDCAPermissionManager.Permission[]',
            name: 'permissions',
            type: 'uint8[]',
          },
        ],
        internalType: 'struct IDCAPermissionManager.PermissionSet[]',
        name: '_permissions',
        type: 'tuple[]',
      },
      {
        internalType: 'bytes',
        name: '_miscellaneous',
        type: 'bytes',
      },
    ],
    name: 'deposit',
    outputs: [
      {
        internalType: 'uint256',
        name: '_positionId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
      {
        components: [
          {
            internalType: 'uint8',
            name: 'indexTokenA',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'indexTokenB',
            type: 'uint8',
          },
        ],
        internalType: 'struct IDCAHubSwapHandler.PairIndexes[]',
        name: '_pairs',
        type: 'tuple[]',
      },
      {
        internalType: 'bool',
        name: '_calculatePrivilegedAvailability',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: '_oracleData',
        type: 'bytes',
      },
    ],
    name: 'getNextSwapInfo',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'reward',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'toProvide',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'platformFee',
                type: 'uint256',
              },
            ],
            internalType: 'struct IDCAHubSwapHandler.TokenInSwap[]',
            name: 'tokens',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'tokenA',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'tokenB',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'totalAmountToSwapTokenA',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'totalAmountToSwapTokenB',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'ratioAToB',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'ratioBToA',
                type: 'uint256',
              },
              {
                internalType: 'bytes1',
                name: 'intervalsInSwap',
                type: 'bytes1',
              },
            ],
            internalType: 'struct IDCAHubSwapHandler.PairInSwap[]',
            name: 'pairs',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IDCAHubSwapHandler.SwapInfo',
        name: '_swapInformation',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_positionId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_newAmountOfSwaps',
        type: 'uint32',
      },
    ],
    name: 'increasePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oracle',
    outputs: [
      {
        internalType: 'contract ITokenPriceOracle',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'permissionManager',
    outputs: [
      {
        internalType: 'contract IDCAPermissionManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'platformBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'platformFeeRatio',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_positionId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_newAmountOfSwaps',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
    ],
    name: 'reducePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32[]',
        name: '_swapIntervals',
        type: 'uint32[]',
      },
    ],
    name: 'removeSwapIntervalsFromAllowedList',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
      {
        internalType: 'bool[]',
        name: '_allowed',
        type: 'bool[]',
      },
    ],
    name: 'setAllowedTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract ITokenPriceOracle',
        name: '_oracle',
        type: 'address',
      },
    ],
    name: 'setOracle',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: '_platformFeeRatio',
        type: 'uint16',
      },
    ],
    name: 'setPlatformFeeRatio',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_swapFee',
        type: 'uint32',
      },
    ],
    name: 'setSwapFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_tokens',
        type: 'address[]',
      },
      {
        components: [
          {
            internalType: 'uint8',
            name: 'indexTokenA',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'indexTokenB',
            type: 'uint8',
          },
        ],
        internalType: 'struct IDCAHubSwapHandler.PairIndexes[]',
        name: '_pairsToSwap',
        type: 'tuple[]',
      },
      {
        internalType: 'address',
        name: '_rewardRecipient',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_callbackHandler',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '_borrow',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: '_callbackData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_oracleData',
        type: 'bytes',
      },
    ],
    name: 'swap',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'reward',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'toProvide',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'platformFee',
                type: 'uint256',
              },
            ],
            internalType: 'struct IDCAHubSwapHandler.TokenInSwap[]',
            name: 'tokens',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'tokenA',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'tokenB',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'totalAmountToSwapTokenA',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'totalAmountToSwapTokenB',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'ratioAToB',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'ratioBToA',
                type: 'uint256',
              },
              {
                internalType: 'bytes1',
                name: 'intervalsInSwap',
                type: 'bytes1',
              },
            ],
            internalType: 'struct IDCAHubSwapHandler.PairInSwap[]',
            name: 'pairs',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct IDCAHubSwapHandler.SwapInfo',
        name: '_swapInformation',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes1',
        name: '',
        type: 'bytes1',
      },
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    name: 'swapAmountDelta',
    outputs: [
      {
        internalType: 'uint128',
        name: 'swapDeltaAToB',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'swapDeltaBToA',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes1',
        name: '',
        type: 'bytes1',
      },
    ],
    name: 'swapData',
    outputs: [
      {
        internalType: 'uint32',
        name: 'performedSwaps',
        type: 'uint32',
      },
      {
        internalType: 'uint224',
        name: 'nextAmountToSwapAToB',
        type: 'uint224',
      },
      {
        internalType: 'uint32',
        name: 'lastSwappedAt',
        type: 'uint32',
      },
      {
        internalType: 'uint224',
        name: 'nextAmountToSwapBToA',
        type: 'uint224',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'swapFee',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_positionId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_recipientUnswapped',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_recipientSwapped',
        type: 'address',
      },
    ],
    name: 'terminate',
    outputs: [
      {
        internalType: 'uint256',
        name: '_unswapped',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_swapped',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'tokenMagnitude',
    outputs: [
      {
        internalType: 'uint120',
        name: '',
        type: 'uint120',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalCreatedPositions',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_positionId',
        type: 'uint256',
      },
    ],
    name: 'userPosition',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IERC20Metadata',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'contract IERC20Metadata',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint32',
            name: 'swapInterval',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'swapsExecuted',
            type: 'uint32',
          },
          {
            internalType: 'uint256',
            name: 'swapped',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'swapsLeft',
            type: 'uint32',
          },
          {
            internalType: 'uint256',
            name: 'remaining',
            type: 'uint256',
          },
          {
            internalType: 'uint120',
            name: 'rate',
            type: 'uint120',
          },
        ],
        internalType: 'struct IDCAHubPositionHandler.UserPosition',
        name: '_userPosition',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct IDCAHub.AmountOfToken[]',
        name: '_amounts',
        type: 'tuple[]',
      },
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
    ],
    name: 'withdrawFromPlatformBalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_positionId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
    ],
    name: 'withdrawSwapped',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256[]',
            name: 'positionIds',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct IDCAHubPositionHandler.PositionSet[]',
        name: '_positions',
        type: 'tuple[]',
      },
      {
        internalType: 'address',
        name: '_recipient',
        type: 'address',
      },
    ],
    name: 'withdrawSwappedMany',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '_swapped',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class MeanFinanceHub__factory {
  static readonly abi = _abi;
  static createInterface(): MeanFinanceHubInterface {
    return new utils.Interface(_abi) as MeanFinanceHubInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MeanFinanceHub {
    return new Contract(address, _abi, signerOrProvider) as MeanFinanceHub;
  }
}
