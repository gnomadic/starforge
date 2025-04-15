import { defineConfig } from '@wagmi/cli';
import { foundry } from '@wagmi/cli/plugins'
import { hardhat } from '@wagmi/cli/plugins'
import { react } from '@wagmi/cli/plugins'
import { actions } from '@wagmi/cli/plugins'
import { erc20Abi } from 'viem'

/** @type {import('@wagmi/cli').Config} */


export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20Abi,
    },
  ],
  plugins: [
    hardhat({
      project: '../chain',
      include: [
        'Planet.sol/**',
        'SystemController.sol/**',
        'PlanetStatsSystem.sol/**',
        'PlanetStatsEntity.sol/**',
        'UpgradesSystem.sol/**',
        'DungeonMaster.sol/**',
        'ScenarioFactory.sol/**',
        'Scenario.sol/**',
      ],
    }),
    react(),
    actions()
  ],
});
