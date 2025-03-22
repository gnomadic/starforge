
import { MarketListing, MarketStatistics } from '../types/marketTypes';

export const initialMarketListings: MarketListing[] = [
  {
    id: 'energy-listing-1',
    type: 'resource',
    itemId: 'energy',
    sellerId: 'market',
    price: {
      resourceId: 'matter',
      amount: 10
    },
    quantity: 100,
    createdAt: Date.now()
  },
  {
    id: 'matter-listing-1',
    type: 'resource',
    itemId: 'matter',
    sellerId: 'market',
    price: {
      resourceId: 'energy',
      amount: 12
    },
    quantity: 100,
    createdAt: Date.now()
  },
  {
    id: 'life-listing-1',
    type: 'resource',
    itemId: 'life',
    sellerId: 'market',
    price: {
      resourceId: 'matter',
      amount: 20
    },
    quantity: 50,
    createdAt: Date.now()
  },
  {
    id: 'tech-listing-1',
    type: 'resource',
    itemId: 'technology',
    sellerId: 'market',
    price: {
      resourceId: 'energy',
      amount: 30
    },
    quantity: 25,
    createdAt: Date.now()
  },
  {
    id: 'artifact-listing-1',
    type: 'artifact',
    itemId: 'ancient-crystal',
    sellerId: 'market',
    price: {
      resourceId: 'technology',
      amount: 50
    },
    quantity: 1,
    createdAt: Date.now()
  }
];

export const initialMarketStats: MarketStatistics = {
  priceTrends: {
    energy: 12,
    matter: 10,
    life: 20,
    technology: 30
  },
  volumeTraded: {
    energy: 1000,
    matter: 800,
    life: 500,
    technology: 200
  }
};
