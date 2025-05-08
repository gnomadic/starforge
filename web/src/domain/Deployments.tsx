import { Deployment } from '@/domain/types';


export const IPFS_GATEWAY = 'https://ipfs.io/ipfs/';



export const Deployments: { [key: string]: Deployment } = {


  basesep: {
    Planet: "0x0",
    SystemController: "0x0",
    ScenarioFactory: "0x0",
    PlanetStats: "0x0",
    SupplySystem: "0x0",
    JobSystem: "0x0",

    currency: 'base sep eth',
    chain: 'base sepolia',
    chainId: "84532",
    scan: "https://sepolia.basescan.org/address/",
    // viemChain: baseSepolia,
    // viemTransport: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
  },

  sepolia: {
    Planet: "0x944078938b8Eb8Da09Ce02D8317d7BC0cC9DdcBC",
    SystemController: "0x1F8e15DfDf09f51B49432EDEc0d4dAd5BF7b7b08",
    ScenarioFactory: "0x49E9c56e2ED38Bab254cb86E6b156625fB3fBdDA",
    PlanetStats: "0x0249888684F7B03D564D96673711FD1133015CCb",
    SupplySystem: "0xB4db03b0Cd95D0fCE5A2Fb3f4C7ccF41A6f36FAB",
    JobSystem: "0x6EAbAdD2e0f8212DdB46f59A3eB993F5513482F3",
    

    currency: 'sep eth',
    chain: 'sepolia',
    chainId: "84532",
    scan: "https://sepolia.basescan.org/address/",
    // viemChain: baseSepolia,
    // viemTransport: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
  },


  monadtestnet: {
    Planet: "0x8c8864443eACc2059C80B9B82Ffb63E8689Dd5a9",
    SystemController: "0xBF481723A0f54e87B7c544439661ee5DaD98C3AB",
    ScenarioFactory: "0x73988B412E83467450Ceafda54F41d99d10c0869",
    PlanetStats: "0x5b41ee1065894b4B74eFacf71aa89B5E22087cFD",
    SupplySystem: "0xFE013E6184872Cf96D3356E351aaFEd58217a737",
    JobSystem: "0x193019873d03B80E75f79d0798f82ad4a7D95897",

    currency: 'monad test eth',
    chain: 'Monad Testnet',
    chainId: "10143",
    scan: "",
    // viemChain: localhost,
    // viemTransport: http()

  },

  localhost: {
    Planet: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
    SystemController: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    ScenarioFactory: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    PlanetStats: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
    SupplySystem: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
    JobSystem: "0x9A676e781A523b5d0C0e43731313A708CB607508",

    currency: 'eth',
    chain: 'localhost',
    chainId: "1337",
    scan: "",
    // viemChain: localhost,
    // viemTransport: http()

  },
  default: {
    Planet: "0x0",
    SystemController: "0x0",
    ScenarioFactory: "0x0",
    PlanetStats: "0x0",
    SupplySystem: "0x0",
    JobSystem: "0x0",

    currency: 'eth',
    chain: 'unknown',
    chainId: "0",
    scan: "",
    // viemChain: baseSepolia,
    // viemTransport: http()
  },
};



