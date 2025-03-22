
import React, { useState } from 'react';
import { useGameStore } from '@/lib/gameState';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, RefreshCw, Search, Plus, Minus } from 'lucide-react';
import { MarketListing } from '@/lib/types/marketTypes';
import { toast } from "@/components/ui/use-toast";

const MarketList = () => {
  const { 
    resources, 
    artifacts, 
    marketListings,
    marketStats,
    buyFromMarket,
    sellToMarket,
    createListing,
    refreshMarket
  } = useGameStore();

  const [activeTab, setActiveTab] = useState('buy');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'resource' | 'artifact'>('all');
  const [sellItemId, setSellItemId] = useState('');
  const [sellQuantity, setSellQuantity] = useState(1);
  const [sellResourceType, setSellResourceType] = useState('energy');
  const [sellPrice, setSellPrice] = useState(10);

  // Filter listings by search term and type
  const filteredListings = marketListings.filter(listing => {
    // Filter by type
    if (selectedType !== 'all' && listing.type !== selectedType) {
      return false;
    }

    // Filter by search term
    if (searchTerm) {
      const item = listing.type === 'resource' 
        ? resources.find(r => r.id === listing.itemId)
        : artifacts.find(a => a.id === listing.itemId);
      
      if (!item) return false;
      
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    
    return true;
  });

  // Get display name for an item
  const getItemName = (listing: MarketListing) => {
    if (listing.type === 'resource') {
      const resource = resources.find(r => r.id === listing.itemId);
      return resource ? resource.name : listing.itemId;
    } else {
      const artifact = artifacts.find(a => a.id === listing.itemId);
      return artifact ? artifact.name : listing.itemId;
    }
  };

  // Get color for the item
  const getItemColor = (listing: MarketListing) => {
    if (listing.type === 'resource') {
      const resource = resources.find(r => r.id === listing.itemId);
      return resource ? resource.color : 'text-gray-500';
    }
    return 'text-purple-500'; // Default color for artifacts
  };

  // Get price resource name
  const getPriceResourceName = (resourceId: string) => {
    const resource = resources.find(r => r.id === resourceId);
    return resource ? resource.name : resourceId;
  };

  const handleBuy = (listing: MarketListing) => {
    buyFromMarket(listing.id);
  };

  const handleCreateListing = () => {
    if (!sellItemId || sellQuantity <= 0 || sellPrice <= 0) {
      toast({
        title: "Invalid listing",
        description: "Please select an item, quantity, and price.",
        variant: "destructive"
      });
      return;
    }

    createListing({
      type: selectedType === 'artifact' ? 'artifact' : 'resource',
      itemId: sellItemId,
      price: {
        resourceId: sellResourceType,
        amount: sellPrice
      },
      quantity: sellQuantity
    });

    // Reset form
    setSellItemId('');
    setSellQuantity(1);
    setSellPrice(10);
  };

  const handleRefreshMarket = () => {
    refreshMarket();
    toast({
      title: "Market refreshed",
      description: "New items are available in the marketplace.",
    });
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="buy" onValueChange={value => setActiveTab(value as string)}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>
        
        <TabsContent value="buy" className="space-y-4">
          <div className="flex flex-wrap gap-2 md:items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search listings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64"
              />
            </div>
            <div className="flex space-x-2">
              <TabsList>
                <TabsTrigger 
                  value="all" 
                  onClick={() => setSelectedType('all')}
                  data-state={selectedType === 'all' ? 'active' : ''}
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="resource" 
                  onClick={() => setSelectedType('resource')}
                  data-state={selectedType === 'resource' ? 'active' : ''}
                >
                  Resources
                </TabsTrigger>
                <TabsTrigger 
                  value="artifact" 
                  onClick={() => setSelectedType('artifact')}
                  data-state={selectedType === 'artifact' ? 'active' : ''}
                >
                  Artifacts
                </TabsTrigger>
              </TabsList>
              <Button variant="outline" size="icon" onClick={handleRefreshMarket}>
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredListings.length > 0 ? (
              filteredListings.map(listing => (
                <Card key={listing.id} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className={getItemColor(listing)}>
                          {getItemName(listing)}
                        </CardTitle>
                        <CardDescription>
                          {listing.type === 'resource' ? 'Resource' : 'Artifact'}
                        </CardDescription>
                      </div>
                      <Badge variant={listing.type === 'resource' ? 'default' : 'secondary'}>
                        {listing.type === 'resource' ? 'Resource' : 'Artifact'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-semibold">
                          {listing.price.amount} {getPriceResourceName(listing.price.resourceId)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Quantity:</span>
                        <span>{listing.quantity}</span>
                      </div>
                      {marketStats.priceTrends[listing.itemId] && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg. Price:</span>
                          <span>{marketStats.priceTrends[listing.itemId]}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleBuy(listing)} className="w-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-muted-foreground">
                No listings found. Try changing the filters or refreshing the market.
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="sell" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Listing</CardTitle>
              <CardDescription>
                Sell resources or artifacts on the marketplace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Item Type</label>
                <TabsList className="w-full">
                  <TabsTrigger 
                    value="resource" 
                    className="flex-1"
                    onClick={() => setSelectedType('resource')}
                    data-state={selectedType === 'resource' ? 'active' : ''}
                  >
                    Resource
                  </TabsTrigger>
                  <TabsTrigger 
                    value="artifact" 
                    className="flex-1"
                    onClick={() => setSelectedType('artifact')}
                    data-state={selectedType === 'artifact' ? 'active' : ''}
                  >
                    Artifact
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Item</label>
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={sellItemId}
                  onChange={(e) => setSellItemId(e.target.value)}
                >
                  <option value="">Select an item</option>
                  {selectedType === 'resource' ? (
                    resources.map(resource => (
                      <option key={resource.id} value={resource.id}>
                        {resource.name} ({Math.floor(resource.amount)} available)
                      </option>
                    ))
                  ) : (
                    artifacts
                      .filter(artifact => artifact.discovered)
                      .map(artifact => (
                        <option key={artifact.id} value={artifact.id}>
                          {artifact.name}
                        </option>
                      ))
                  )}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Quantity</label>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline" 
                    size="icon"
                    onClick={() => setSellQuantity(Math.max(1, sellQuantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={sellQuantity}
                    onChange={(e) => setSellQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSellQuantity(sellQuantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Price Resource</label>
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={sellResourceType}
                  onChange={(e) => setSellResourceType(e.target.value)}
                >
                  {resources.map(resource => (
                    <option key={resource.id} value={resource.id}>
                      {resource.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Price Amount</label>
                <Input
                  type="number"
                  min="1"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleCreateListing} className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Create Listing
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Listings</CardTitle>
              <CardDescription>
                Manage your active marketplace listings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {marketListings.filter(listing => listing.sellerId === 'player').length > 0 ? (
                  marketListings
                    .filter(listing => listing.sellerId === 'player')
                    .map(listing => (
                      <div 
                        key={listing.id} 
                        className="flex justify-between items-center p-3 border rounded-md"
                      >
                        <div>
                          <div className={`font-medium ${getItemColor(listing)}`}>
                            {getItemName(listing)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {listing.quantity} × {listing.price.amount} {getPriceResourceName(listing.price.resourceId)}
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => sellToMarket(listing.id)}
                        >
                          Cancel
                        </Button>
                      </div>
                    ))
                ) : (
                  <div className="text-center py-4 text-muted-foreground">
                    You don't have any active listings
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketList;
