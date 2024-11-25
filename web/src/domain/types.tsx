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
  id: string;
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
  id: string;
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