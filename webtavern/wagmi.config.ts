import { defineConfig } from '@wagmi/cli';
import { foundry } from '@wagmi/cli/plugins'
import { hardhat } from '@wagmi/cli/plugins'
import { react } from '@wagmi/cli/plugins'
import { actions } from '@wagmi/cli/plugins'

let heroes = [
  'CombatActions.sol/**',
  'CombatPVE.sol/**',
  'HeroStatResolver.sol/**',
  'HeroStats.sol/**',
  'HeroStatsGatcha.sol/**',
  'LootTables.sol/**',
  'MatchMaking.sol/**',
  'Minting.sol/**',
  'MonsterStats.sol/**',
  'SimpleCombatResolver.sol/**',
]

let tavern = [
  'ComponentRegistry.sol/**',
  'D7.sol/**',
  'Game.sol/**',
  'GameFactory.sol/**',
  'IGame.sol/**',
  'IComponent.sol/**',
  'QueueSession.sol/**',
  'RockPaperScissors.sol/**',
  'RewardERC20.sol/**',
  'PVPResult.sol/**',  
]

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [],
  plugins: [
    hardhat({
      project: '../chain',
      include: tavern
    }),
    react(),
    actions()
  ],
});
