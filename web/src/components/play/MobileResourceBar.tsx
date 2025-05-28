"use client";

import { Supply } from '@/domain/types';
import React from 'react';
import { useSupplies } from '../supplies/SupplyContext';
// import { Resource } from '@/components/ResourceBar';
// import { useResources } from '@/contexts/ResourceContext';

interface MobileResourceBarProps {
  // resources: Supply[];
}

const MobileResourceBar: React.FC<MobileResourceBarProps> = ({ }) => {
  //   const { activeJob } = useResources();
  const { supplies } = useSupplies();


  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="flex justify-between items-center px-4 py-2">
        {supplies.map((resource) => {
          return (
            <div key={resource.type} className="flex items-center gap-1">
              <div className={`p-1 rounded-full ${resource.color}`}>
                {resource.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-medium text-white">
                  {resource.amount.toFixed(5)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileResourceBar;