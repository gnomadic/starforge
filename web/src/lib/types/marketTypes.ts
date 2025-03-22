
export type ListingType = 'resource' | 'artifact';

export interface MarketListing {
  id: string;
  type: ListingType;
  itemId: string;
  sellerId: string; // In the future this could represent different players
  price: {
    resourceId: string;
    amount: number;
  };
  quantity: number;
  createdAt: number;
}

export interface MarketStatistics {
  // Price trends (average price of last 5 trades)
  priceTrends: {
    [itemId: string]: number;
  };
  // Total volume traded
  volumeTraded: {
    [itemId: string]: number;
  };
}
