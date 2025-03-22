"use client"



import React from 'react';

import { useTitle } from '@/hooks/use-title';
import ResourcePanel from '@/components/play/ResourcePanel';
import MarketList from '@/components/play/MarketList';

const Marketplace = () => {
  useTitle('Marketplace - Cosmic Collector');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Header /> */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Marketplace</h1>
        <div className="mb-6">
          {/* <ResourcePanel /> */}
        </div>
        <MarketList />
      </div>
    </div>
  );
};

export default Marketplace;
