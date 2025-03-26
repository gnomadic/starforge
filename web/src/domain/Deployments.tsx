import { http } from 'viem';

import { baseSepolia, localhost } from 'viem/chains';
import { Deployment } from '@/domain/types';



// export const RPS_GAME_ADDRESS: Address  = '0xa36F4B4C02D5f583C2747B468730B54D27F7a469';
// export const RPS_GAME_ADDRESS: Address = '0xc19Bc969cfc40DfF49605AedefC69a74c5Aef69E'

export const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';



export const Deployments: { [key: string]: Deployment } = {


  basesep: {
    Planet: '0x0',
    SystemController: '0x0',
    PlanetStatsSystem: '0x0',
    // InvestmentSystem: '0x0',
    // GlobalProgress: '0x0',
    displayName: 'Adventure Alchemist',
    currency: 'base sep eth',
    chain: 'base sepolia',
    chainId: "84532",
    scan: "https://sepolia.basescan.org/address/",
    viemChain: baseSepolia,
    viemTransport: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
  },

  localhost: {
    Planet: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    SystemController: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    PlanetStatsSystem: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    // InvestmentSystem: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    // GlobalProgress: '0x0165878A594ca255338adfa4d48449f69242Eb8',
    displayName: 'Adventure Alchemist',
    currency: 'eth',
    chain: 'localhost',
    chainId: "1337",
    scan: "",
    viemChain: localhost,
    viemTransport: http()

  },
  default: {
    Planet: '0x0',
    SystemController: '0x0',
    PlanetStatsSystem: '0x0',    
    // InvestmentSystem: '0x0',
    // GlobalProgress: '0x0',
    displayName: 'Adventure Alchemist',
    currency: 'eth',
    chain: 'unknown',
    chainId: "0",
    scan: "",
    viemChain: baseSepolia,
    viemTransport: http()
  },
};



