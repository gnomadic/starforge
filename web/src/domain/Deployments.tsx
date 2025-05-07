import { http } from 'viem';

import { baseSepolia, localhost } from 'viem/chains';
import { Deployment } from '@/domain/types';



// export const RPS_GAME_ADDRESS: Address  = '0xa36F4B4C02D5f583C2747B468730B54D27F7a469';
// export const RPS_GAME_ADDRESS: Address = '0xc19Bc969cfc40DfF49605AedefC69a74c5Aef69E'

export const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';



export const Deployments: { [key: string]: Deployment } = {


  basesep: {
    Planet: "0x0",
    SystemController: "0x0",
    ScenarioFactory: "0x0",
    PlanetStats: "0x0",
    SupplySystem: "0x0",
    JobSystem: "0x0",
    UpgradesSystem: "0x0",

    displayName: 'Adventure Alchemist',
    currency: 'base sep eth',
    chain: 'base sepolia',
    chainId: "84532",
    scan: "https://sepolia.basescan.org/address/",
    viemChain: baseSepolia,
    viemTransport: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
  },

  sepolia: {
    Planet: "0x5b86FB4D69e54A9dA602cECC4Cb6748E022f2768",
    SystemController: "0x749F0dB61d26F454539b8a94566e0d52B5044007",
    ScenarioFactory: "0xcEEB99fe389d282aF29202cA9fA1c4e7Fa2099FD",
    PlanetStats: "0x9510D9D1D5a7aef034D897507e792Bf0B09B0B6b",
    SupplySystem: "0x51AA49eb61EdB5c2B037D417452152d0175B00F9",
    JobSystem: "0x24f6FD5B0B679c959e8F624767d56B1b7947C104",
    UpgradesSystem: "0xAd8b2Ec70175c84b4C6C519304487E7b7225bC1b",

    displayName: 'Adventure Alchemist',
    currency: 'sep eth',
    chain: 'sepolia',
    chainId: "84532",
    scan: "https://sepolia.basescan.org/address/",
    viemChain: baseSepolia,
    viemTransport: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
  },

  localhost: {
    Planet: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
    SystemController: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    ScenarioFactory: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    PlanetStats: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
    SupplySystem: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
    JobSystem: "0x9A676e781A523b5d0C0e43731313A708CB607508",
    UpgradesSystem: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",

    displayName: 'Adventure Alchemist',
    currency: 'eth',
    chain: 'localhost',
    chainId: "1337",
    scan: "",
    viemChain: localhost,
    viemTransport: http()

  },
  default: {
    Planet: "0x0",
    SystemController: "0x0",
    ScenarioFactory: "0x0",
    PlanetStats: "0x0",
    SupplySystem: "0x0",
    JobSystem: "0x0",
    UpgradesSystem: "0x0",

    displayName: 'Adventure Alchemist',
    currency: 'eth',
    chain: 'unknown',
    chainId: "0",
    scan: "",
    viemChain: baseSepolia,
    viemTransport: http()
  },
};



