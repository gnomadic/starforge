// Define types
export interface Station {
  id: string;
  x: number;
  y: number;
  modifier: string;
  processingTime: number;
}

export interface Belt {
  id: string;
  stations: Station[];
  segments: number[];
}

export interface Item {
  id: string;
  type: string;
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
  time: number;
}