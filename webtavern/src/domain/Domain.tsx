import { Address, Chain, Transport } from "viem";

export type Deployment = {
  gameFactory: Address;
  d7: Address;
  componentRegistry: Address;
  displayName: string;
  currency: string;
  chain: string;
  chainId: string;
  scan: string;
  rpsGame: Address;
  rpsComponent: Address;
  queueComponent: Address;
  resultComponent: Address;
  viemChain: Chain;
  viemTransport: Transport;
}

export type GameSummary = {
  game: `0x${string}`;
  gm: `0x${string}`;
  metadata: string;
  components: readonly `0x${string}`[];
  componentSummaries: readonly {
      component: `0x${string}`;
      metadata: string;
  }[];
  availableData: readonly {
      name: string;
      value: `0x${string}`;
  }[];
  flows: readonly {
      name: string;
      values: readonly {
          name: string;
          value: `0x${string}`;
      }[];
  
  }[];
}

export type AddressKey = {
  name: string;
  value: Address;
}

export type UintKey = {
  name: string;
  value: bigint;
}

export type StringKey = {
  name: string;
  value: string;
}

export type Position = {
  x: number;
  player: Address;

}
export type ComponentSummary = {
  component: Address;
  functions: readonly string[];
  required: readonly string[];
  displayName: string;
}


// frames
export const QUERY_ACTION = "action";
export const QUERY_GAME = "game";
export const ACTION_HELLO = "hello"


export type FrameGameData = {
  summary: GameSummary;

}

export type GameFuncParams = {
  addresses: readonly AddressKey[];
  uints: readonly UintKey[];
  strings: readonly StringKey[];
}

export type BatchComponentMetadata = {
  addresses: Address;
  components: ComponentMetadata[];

}


export type ComponentMetadata = {
  name: string;
  description: Address;
  gameFunctions: ComponentMetadataFunction[];
  configFunctions: ComponentMetadataFunction[];
  readFunctions: ComponentMetadataFunction[];
}

export type ComponentMetadataFunction = {
  name: string;
  description: string;
  abi: string;
  requires: string[];
  creates: string[];
  emits: string[];
}

export type GameMetadata = {
  name: string;
  description: Address;
  gameUrl: string;
}

export type RPSGameResult = {
  
    opponent: `0x${string}`;
    winner: `0x${string}`;
    myAction: bigint;
    opponentAction: bigint;

}