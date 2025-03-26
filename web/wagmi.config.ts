import { defineConfig } from '@wagmi/cli';
import { foundry } from '@wagmi/cli/plugins'
import { hardhat } from '@wagmi/cli/plugins'
import { react } from '@wagmi/cli/plugins'
import { actions } from '@wagmi/cli/plugins'
/** @type {import('@wagmi/cli').Config} */


export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    hardhat({
      project: '../chain',
      include: [
        'Planet.sol/**',
        'SystemController.sol/**',
        'PlanetStatsSystem.sol/**',
      ],
    }),
    react(),
    actions()
  ],
});
