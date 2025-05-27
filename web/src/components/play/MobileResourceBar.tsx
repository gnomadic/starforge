"use client";

import { Supply } from '@/domain/types';
import React from 'react';
// import { Resource } from '@/components/ResourceBar';
// import { useResources } from '@/contexts/ResourceContext';

interface MobileResourceBarProps {
  resources: Supply[];
}

const MobileResourceBar: React.FC<MobileResourceBarProps> = ({ resources }) => {
//   const { activeJob } = useResources();
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="flex justify-between items-center px-4 py-2">
        {resources.map((resource) => {
          let displayRate = resource.emissionRate;
        //   if (activeJob && activeJob.resourceType === resource.type) {
        //     displayRate += activeJob.baseEmissionBoost;
        //   }
          
          return (
            <div key={resource.type} className="flex items-center gap-1">
              <div className={`p-1 rounded-full ${resource.color}`}>
                {resource.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-medium text-white">
                  {resource.amount.toFixed(0)}
                </span>
                <span className="font-mono text-xs text-white/70">
                  +{displayRate.toFixed(1)}/s
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