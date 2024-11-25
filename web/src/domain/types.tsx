export enum ItemType {
  Potion = "potion",
  Scroll = "scroll",
  Gem = "gem",
}

export enum StationModifier {
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
  station: Station | undefined;
}

export interface Belt {
  id: string;
  // stations: Station[];
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
}

export interface GameState {
  gold: number;
  pendingGold: number;
  items: Item[];
  stations: Station[];
  time: number;
}