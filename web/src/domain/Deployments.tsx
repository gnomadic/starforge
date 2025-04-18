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
    UpgradesSystem: "0x0",
    DungeonMaster: "0x0",
    ScenarioFactory: "0x0",
      EnergyToken: "0x0",
      LifeToken: "0x0",
      MatterToken: "0x0",
      TechToken: "0x0",
      SupplySystem: "0x0",
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
    Planet: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    SystemController: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    PlanetStatsSystem: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    UpgradesSystem: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
    DungeonMaster: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
    SupplySystem: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
    ScenarioFactory: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    EnergyToken: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
    LifeToken: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
    MatterToken: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
    TechToken: "0x9A676e781A523b5d0C0e43731313A708CB607508",
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
    UpgradesSystem: "0x0",
    DungeonMaster: "0x0",
    SupplySystem: "0x0",
    ScenarioFactory: "0x0",
    EnergyToken: "0x0",
    LifeToken: "0x0",
    MatterToken: "0x0",
    TechToken: "0x0",
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



