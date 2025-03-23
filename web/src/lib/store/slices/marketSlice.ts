
import { MarketListing, MarketStatistics } from '../../types/marketTypes';
import { initialMarketListings, initialMarketStats } from '../../data/marketplace';
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

interface NewListing {
  type: 'resource' | 'artifact';
  itemId: string;
  price: {
    resourceId: string;
    amount: number;
  };
  quantity: number;
}

export interface MarketState {
  marketListings: MarketListing[];
  marketStats: MarketStatistics;
  buyFromMarket: (listingId: string) => void;
  sellToMarket: (listingId: string) => void;
  createListing: (listing: NewListing) => void;
  refreshMarket: () => void;
}

export const createMarketSlice = (set: any, get: any): MarketState => ({
  marketListings: [...initialMarketListings],
  marketStats: {...initialMarketStats},
  
  buyFromMarket: (listingId) => {
    const listings = [...get().marketListings];
    const resources = [...get().resources];
    const artifacts = [...get().artifacts];
    
    const listingIndex = listings.findIndex(l => l.id === listingId);
    if (listingIndex === -1) return;
    
    const listing = listings[listingIndex];
    
    // Check if we can afford it
    const priceResourceIndex = resources.findIndex(r => r.id === listing.price.resourceId);
    if (priceResourceIndex === -1 || resources[priceResourceIndex].amount < listing.price.amount) {
      toast.warning(JSON.stringify({
        title: "Cannot afford",
        description: "You don't have enough resources to buy this item.",
        variant: "destructive"
      }));
      return;
    }
    
    // Deduct the price from resources
    resources[priceResourceIndex].amount -= listing.price.amount;
    
    // Add the purchased item to the player's inventory
    if (listing.type === 'resource') {
      const resourceIndex = resources.findIndex(r => r.id === listing.itemId);
      if (resourceIndex !== -1) {
        resources[resourceIndex].amount += listing.quantity;
      }
    } else if (listing.type === 'artifact') {
      const artifactIndex = artifacts.findIndex(a => a.id === listing.itemId);
      if (artifactIndex !== -1) {
        artifacts[artifactIndex].discovered = true;
      }
    }
    
    // Remove the listing from the marketplace
    listings.splice(listingIndex, 1);
    
    set({ 
      marketListings: listings,
      resources,
      artifacts
    });
    
    toast.warning(JSON.stringify({
      title: "Purchase successful",
      description: "You have successfully purchased the item from the marketplace.",
    }));
  },
  
  sellToMarket: (listingId) => {
    const listings = [...get().marketListings];
    const resources = [...get().resources];
    
    const listingIndex = listings.findIndex(l => l.id === listingId);
    if (listingIndex === -1) return;
    
    const listing = listings[listingIndex];
    
    // Check if it's a resource (can't sell artifacts you don't have)
    if (listing.type === 'resource') {
      // Add the price to resources
      const priceResourceIndex = resources.findIndex(r => r.id === listing.price.resourceId);
      if (priceResourceIndex !== -1) {
        resources[priceResourceIndex].amount += listing.price.amount;
      }
      
      // Remove the listing from the marketplace
      listings.splice(listingIndex, 1);
      
      set({ 
        marketListings: listings,
        resources
      });
      
      toast.warning(JSON.stringify({
        title: "Sale successful",
        description: "You have successfully sold the item to the marketplace.",
      }));
    }
  },
  
  createListing: (listing) => {
    const resources = [...get().resources];
    const artifacts = [...get().artifacts];
    const listings = [...get().marketListings];
    
    // Check if the player has the item to list
    if (listing.type === 'resource') {
      const resourceIndex = resources.findIndex(r => r.id === listing.itemId);
      if (resourceIndex === -1 || resources[resourceIndex].amount < listing.quantity) {
        toast.warning(JSON.stringify({
          title: "Insufficient resources",
          description: "You don't have enough of this resource to create a listing.",
          variant: "destructive"
        }));
        return;
      }
      
      // Deduct the resources
      resources[resourceIndex].amount -= listing.quantity;
    } else if (listing.type === 'artifact') {
      const artifactIndex = artifacts.findIndex(a => a.id === listing.itemId);
      if (artifactIndex === -1 || !artifacts[artifactIndex].discovered) {
        toast.warning(JSON.stringify({
          title: "Artifact not found",
          description: "You don't have this artifact to sell.",
          variant: "destructive"
        }));
        return;
      }
      
      // Mark the artifact as not discovered
      artifacts[artifactIndex].discovered = false;
    }
    
    // Create the new listing
    const newListing: MarketListing = {
      id: uuidv4(),
      type: listing.type,
      itemId: listing.itemId,
      sellerId: 'player', // In the future, this could be a multiplayer game
      price: {
        resourceId: listing.price.resourceId,
        amount: listing.price.amount
      },
      quantity: listing.quantity,
      createdAt: Date.now()
    };
    
    listings.push(newListing);
    
    set({ 
      marketListings: listings,
      resources,
      artifacts
    });
    
    toast.warning(JSON.stringify({
      title: "Listing created",
      description: "Your item has been listed on the marketplace.",
    }));
  },
  
  refreshMarket: () => {
    // In a future update, this could populate with procedurally generated listings
    // For now, just refresh with the initial listings
    set({ marketListings: [...initialMarketListings] });
    
    toast.warning(JSON.stringify({
      title: "Market refreshed",
      description: "The marketplace has been refreshed with new listings.",
    }));
  }
});
