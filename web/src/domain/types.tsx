import { Address, Chain, Transport } from "viem";


export enum ItemType {
  Potion = "potion",
  Scroll = "scroll",
  Gem = "gem",
}

export enum StationModifier {
  None = "None",
  Fire = "Fire",
  Water = "Water",
  Earth = "Earth",
  Air = "Air",
}


export interface Station {
  id: number;
  modifier: StationModifier;
  valueMultiplier: number;
  valueAddition: number;
}

export interface StationSlot {
  x: number;
  y: number;
  distance: number;
}

export interface Belt {
  stationSlots: StationSlot[];
  segments: number[];
}

export interface Item {
  id: string;
  type: ItemType;
  enhancements: StationModifier[];
  timestamp: number; // When the item was added
  value: number;
  distanceTraveled: number;
  x: number;
  y: number;
  appliedStations: number;
}

export interface GameState {
  gold: number;
  pendingGold: number;
  selectedItem: Item;
  lastItemSpawned: number;
  items: Item[];
  stations: Station[];
  time: number;
}

export  interface CraftingSystemGameState {
  
    lastTick : bigint;
    newItemRate : bigint;
    beltDuration : bigint;
    activeItem : bigint;

}

export type Deployment = {
  Planet: Address;
  SystemController: Address;
  PlanetStatsSystem: Address;
  // InvestmentSystem: Address;
  // GlobalProgress: Address;
  displayName: string;
  currency: string;
  chain: string;
  chainId: string;
  scan: string;
  viemChain: Chain;
  viemTransport: Transport;
}

export type HSL = {
  h: number;
  s: number;
  l: number;
  a: number;
}

export interface NFT {
    id: number;
    name: string;
    image: string;
    rarity: number;
    entropy: number;
    stats: number[];
    energy: number;
    power: number;
    speed: number;
    temperature:  number;
    water : number;
    biomass : number;
    atmosphere :  number;
    density:  number;
    category: string;
    description: string;
}



export interface Resource {
  type: 'gold' | 'energy' | 'cosmic-dust' | 'stardust';
  amount: number;
  icon: string;
}

export interface Reward {
  type: 'xp' | 'gold' | 'artifact' | 'cosmic-dust';
  amount: number;
  artifactId?: string;
  name: string;
  icon: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  timeRequired: number; // in seconds
  riskLevel: 'low' | 'medium' | 'high' | 'extreme';
  resources: Resource[];
  rewards: Reward[];
  availableUntil?: Date;
  image: string;
}

export interface Artifact {
  id: string;
  name: string;
  description: string;
  rarity: number;// 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
  image: string;
  boost: {
    type: 'energy' | 'power' | 'speed' | 'health' | 'attack' | 'defense';
    amount: number;
  };
  equipped: boolean;
}

export interface Enemy {
  id: string;
  name: string;
  health: number;
  attack: number;
  defense: number;
  image: string;
  description: string;
  rewards: Reward[];
}

export interface CombatStats {
  health: number;
  maxHealth: number;
  attack: number;
  defense: number;
}

export interface CombatLogData {
  id: string;
  message: string;
  type: 'player' | 'enemy' | 'system' | 'reward';
  timestamp: number;
}

// New types for voting system
export interface VoteOption {
  id: string;
  title: string;
  description: string;
  image?: string;
  voteCount: number;
  category: 'quest' | 'artifact' | 'enemy';
}

export interface VoteCategory {
  id: string;
  title: string;
  description: string;
  options: VoteOption[];
  endsAt: Date;
}