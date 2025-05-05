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
      id: "stats",
      name: "Stats System",
      description: "Define character attributes like Strength, Intelligence, and Dexterity to determine character capabilities.",
      icon: "📊",
      color: "#9b87f5",
      functions: [
        {
          name: "setNumberOfStats",
          description: "Define how many stats your game will use.",
          parameters: ["count: number"]
        },
        {
          name: "defineStatRange",
          description: "Set the minimum and maximum values for stats.",
          parameters: ["min: number", "max: number"]
        },
        {
          name: "createCustomStat",
          description: "Create a custom stat with a name and description.",
          parameters: ["name: string", "description: string", "defaultValue: number"]
        }
      ]
    },
    {
      id: "combat",
      name: "Combat System",
      description: "Create turn-based or real-time combat with customizable actions, abilities, and effects.",
      icon: "⚔️",
      color: "#f97316",
      functions: [
        {
          name: "setCombatType",
          description: "Choose between turn-based or real-time combat.",
          parameters: ["type: 'turn-based' | 'real-time'"]
        },
        {
          name: "addCombatAction",
          description: "Create a new action that can be performed in combat.",
          parameters: ["name: string", "effect: Function", "cost: number"]
        },
        {
          name: "defineDamageCalculation",
          description: "Set how damage is calculated in your game.",
          parameters: ["formula: string"]
        }
      ]
    },
    {
      id: "inventory",
      name: "Inventory System",
      description: "Manage items, equipment, and resources with categories, weight limits, and rarity levels.",
      icon: "🎒",
      color: "#0ea5e9",
      functions: [
        {
          name: "setInventorySize",
          description: "Define how many items a character can carry.",
          parameters: ["size: number"]
        },
        {
          name: "createItemCategory",
          description: "Create a category for grouping similar items.",
          parameters: ["name: string", "description: string"]
        },
        {
          name: "defineEquipmentSlots",
          description: "Set what equipment slots are available for characters.",
          parameters: ["slots: string[]"]
        }
      ]
    },
    {
      id: "quest",
      name: "Quest System",
      description: "Design branching quests with objectives, rewards, and narrative choices.",
      icon: "📜",
      color: "#d946ef",
      functions: [
        {
          name: "createQuest",
          description: "Define a new quest with objectives and rewards.",
          parameters: ["title: string", "description: string", "objectives: Object[]", "rewards: Object[]"]
        },
        {
          name: "addQuestBranch",
          description: "Create a branching path in a quest based on player choices.",
          parameters: ["questId: string", "condition: Function", "branch: Object"]
        },
        {
          name: "setQuestTracker",
          description: "Configure how quests are displayed to the player.",
          parameters: ["options: Object"]
        }
      ]
    },
    {
      id: "dialog",
      name: "Dialog System",
      description: "Create interactive conversations with NPCs, including dialogue trees and condition-based responses.",
      icon: "💬",
      color: "#8b5cf6",
      functions: [
        {
          name: "createConversation",
          description: "Start a new conversation with an NPC.",
          parameters: ["characterId: string", "initialDialog: string"]
        },
        {
          name: "addDialogueOption",
          description: "Add a player response option to a conversation.",
          parameters: ["conversationId: string", "text: string", "nextDialogId: string"]
        },
        {
          name: "setConditionalResponse",
          description: "Make dialogue change based on game state or player choices.",
          parameters: ["dialogId: string", "condition: Function", "response: string"]
        }
      ]
    }
  ];
  
  export default systems;
  