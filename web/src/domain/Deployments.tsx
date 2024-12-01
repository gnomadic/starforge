import { Address, http } from 'viem';

import { baseSepolia, localhost, sepolia } from 'viem/chains';
import { Deployment } from './types';



// export const RPS_GAME_ADDRESS: Address  = '0xa36F4B4C02D5f583C2747B468730B54D27F7a469';
// export const RPS_GAME_ADDRESS: Address = '0xc19Bc969cfc40DfF49605AedefC69a74c5Aef69E'

export const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';



export const Deployments: { [key: string]: Deployment } = {


  basesep: {
    lab: '0x0',
    craftSystem: '0x0',
    displayName: 'Adventure Alchemist',
    currency: 'base sep eth',
    chain: 'base sepolia',
    chainId: "84532",
    scan: "https://sepolia.basescan.org/address/",
    viemChain: baseSepolia,
    viemTransport: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
  },

  localhost: {
    lab: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    craftSystem: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    displayName: 'Adventure Alchemist',
    currency: 'eth',
    chain: 'localhost',
    chainId: "1337",
    scan: "",
    viemChain: localhost,
    viemTransport: http()

  },
  default: {
    lab: '0x0',
    craftSystem: '0x0',
    displayName: 'Adventure Alchemist',
    currency: 'eth',
    chain: 'unknown',
    chainId: "0",
    scan: "",
    viemChain: baseSepolia,
    viemTransport: http()
  },
};



