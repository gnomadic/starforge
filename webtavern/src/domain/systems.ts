export interface SystemFunction {
  name: string;
  description: string;
  parameters?: string[];
}

export interface GameSystem {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  functions: SystemFunction[];
}

const systems: GameSystem[] = [
  {
    "id": "stats",
    "name": "Stats System",
    "description": "Define character attributes like Strength, Intelligence, and Dexterity to determine character capabilities. Supports multiple named stat sets (e.g. stats, skills).",
    "icon": "📊",
    "color": "#9b87f5",
    "functions": [
      {
        "name": "createStatSet",
        "description": "Create a new stat set with a unique name and hardcoded starting values.",
        // "parameters": ["statSet: string", "count: number"]
      },
      {
        "name": "createGatchaStatSet",
        "description": "Create a new stat set with a unique name and randomized starting values.",
        // "parameters": ["statSet: string", "min: number", "max: number"]
      },
      {
        "name": "setStatSetRarityOdds",
        "description": "Set the odds of how many stat points a statSet will have when using the gatcha system.",
        // "parameters": ["statSet: string", "name: string", "description: string", "defaultValue: number"]
      },
      {
        "name": "checkSkill",
        "description": "Perform a Skill Check for the player on a Stat within a StatSet.",
        // "parameters": ["statSet: string", "tokenId: number", "allocations: number[]"]
      },
      {
        "name": "boostSkill",
        "description": "Increase a player's skill in a stat set. This is a permanent change.",
        // "parameters": ["statSet: string", "tokenId: number", "allocations: number[]"]
      }
    ]
  },
  {
    "id": "jobs",
    "name": "Job System",
    "description": "Allows characters to perform time-based jobs to yield resources. Jobs scale with skill levels and provide passive progression.",
    "icon": "⏳",
    "color": "#f5a623",
    "functions": [
      {
        "name": "addJob",
        "description": "Add a new job to the scenario. Jobs can be performed by players to earn resources.",
        // "parameters": ["tokenId: number", "jobId: string"]
      },
      {
        "name": "activateJob",
        "description": "Activate a job for a player. This is the first step in the job process.",
        // "parameters": ["tokenId: number"]
      },
      {
        "name": "getAvailableJobs",
        "description": "List all available jobs for a player.",
        // "parameters": ["id: string", "name: string", "description: string", "resource: string", "skill: string", "ratePerHour: number"]
      },
      {
        "name": "canPlayerPerformJob",
        "description": "Perform a Skill Check for the player to see if they can perform a job.",
        // "parameters": ["id: string", "name: string", "description: string", "resource: string", "skill: string", "ratePerHour: number"]
      },
      {
        "name": "finishJob",
        "description": "Finish a job and collect the resources.",
        // "parameters": ["id: string", "name: string", "description: string", "resource: string", "skill: string", "ratePerHour: number"]
      }
    ]
  },
  {
    "id": "resources",
    "name": "Resource System",
    "description": "Manages in-game resources like Biomass, Plasma, and Crystals. Leverages ERC20 tokens, and supports deploying new tokens, minting, burning, and balance checks.",
    "icon": "🪙",
    "color": "#27ae60",
    "functions": [
      {
        "name": "deployToken",
        "description": "Launch a new ERC20 token for a resource. This is a one-time action.",
        // "parameters": ["resource: string", "to: address", "amount: number"]
      },
      {
        "name": "mint",
        "description": "Mint a new resource token for a player.",
        // "parameters": ["resource: string", "from: address", "amount: number"]
      },
      {
        "name": "burn",
        "description": "Burn a resource token from a player.",
        // "parameters": ["resource: string", "owner: address"]
      }
    ]
  },
  {
    "id": "quests",
    "name": "Quest System",
    "description": "Tracks player progression through narrative or procedural quests. Rewards can include resources, stat boosts, or items.",
    "icon": "📜",
    "color": "#e67e22",
    "functions": [
      {
        "name": "Coming Soon",
        "description": "This System is coming soon. Stay tuned for updates!",
        // "parameters": []
      },
    ]
  },
  {
    "id": "combat",
    "name": "Combat System",
    "description": "Handles PvE and PvP combat between planets. Outcomes depend on stats, equipment, and randomness. Combat may yield loot and experience.",
    "icon": "⚔️",
    "color": "#c0392b",
    "functions": [
      {
        "name": "Coming Soon",
        "description": "This System is coming soon. Stay tuned for updates!",
        // "parameters": []
      },
    ]
  },
  {
    "id": "artifact",
    "name": "Artifact System",
    "description": "Handles the creation and management of artifacts. Artifacts can be used to enhance gameplay, provide buffs, or serve as collectibles.",
    "icon": "🗿",
    "color": "#8e44ad",
    "functions": [
      {
        "name": "Coming Soon",
        "description": "This System is coming soon. Stay tuned for updates!",
        // "parameters": []
      },
    ]
  }

];

export default systems;
