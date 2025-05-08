import { getDefaultConfig, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { defineChain, http } from "viem";
import { base, baseSepolia, mainnet, sepolia, monadTestnet  } from "viem/chains";
// import { defineChain } from '../../utils/chain/defineChain.js'
import { farcasterFrame as miniAppConnector } from '@farcaster/frame-wagmi-connector'
import { createConfig } from "wagmi";


export const localhost = defineChain({
  id: 31337,
  name: 'Localhost',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
  },
})

const { wallets } = getDefaultWallets();


declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}


export const config = createConfig({
    // appName: 'STAR FORGE',
    // projectId: 'YOUR_PROJECT_ID',
    // wallets: [
      // ...wallets,
      // {
      //   groupName: 'Other',
      //   wallets: [argentWallet, trustWallet, ledgerWallet],
      // },
    // ],
    chains: [
      // mainnet,
      // polygon,
      // optimism,
      // arbitrum,
      // base,
      
      // baseSepolia,
      
      sepolia,
      monadTestnet,
      
      // mainnet,
      
      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [localhost] : []),
    ],
    transports: {
      [sepolia.id]: http(),
      // [baseSepolia.id]: http(),
      // [base.id]: http(),
      // [mainnet.id]: http(),
      [monadTestnet.id]: http(),
      [localhost.id]: http(),
      
      // [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
      // [baseSepolia.id]: http(`https://base-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
      // [base.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
      // [mainnet.id]: http(`https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`),
      // [localhost.id]: http(),
    },
    connectors: [
      miniAppConnector()
    ],
    ssr: true,
  });