/** @type import('hardhat/config').HardhatUserConfig */
import 'dotenv/config'

import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
import "hardhat-deploy";
import "hardhat-gas-reporter";
// import "./scripts/updateDeploy";


module.exports = {
  solidity: "0.8.24",

  networks: {

    sepolia: {
      url:  "https://eth-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
      accounts: [`${process.env.MAINNET_PRIVATE_KEY}`],
    },
    local:{
      url: "http://127.0.0.1:8545",
      accounts: [`${process.env.LOCAL_PRIVATE_KEY}`],
    },
    basesep: {
      url:  "https://base-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
      accounts: [`${process.env.MAINNET_PRIVATE_KEY}`],
    },
    base:{
      url:  "https://base-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
      accounts: [`${process.env.MAINNET_PRIVATE_KEY}`],
    },
    monadtestnet: {
      url:"https://monad-testnet.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
      accounts: [`${process.env.MAINNET_PRIVATE_KEY}`],
    }

  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey:{
      sepolia: process.env.MAIN_ETHERSCAN_API_KEY || "",
      base: process.env.BASESCAN_API_KEY || "",
      baseSepolia: process.env.BASESCAN_API_KEY || "",
    } 
    
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
