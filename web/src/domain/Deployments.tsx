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
    "Planet": "0x9dDc2C46eE1957a90749D835409A2EC709a49668",
    "SystemController": "0x06D64DEb86ec161E617950a59b8576564E4f5Ea2",
    "ScenarioFactory": "0x6ed83B2D9A6B02D39a3A1D7798F6f4e80Eea2cD5",
    "PlanetStats": "0x5B1580124915184122e25BFfB4DCDbb5552fe3F6",
    "SupplySystem": "0xD2b8397C4897A06E668aae469249277b17466a87",
    "JobSystem": "0x19d35Ff38805669A8af512054651636cF30C5C8E",
    

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
    "Planet": "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
    "SystemController": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    "ScenarioFactory": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    "PlanetStats": "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
    "SupplySystem": "0x9A676e781A523b5d0C0e43731313A708CB607508",
    "JobSystem": "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",

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



