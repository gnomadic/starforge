
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart, Circle, Zap, Cpu } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useSupplies } from './SupplyContext';
// import { useIsMobile } from '@/hooks/use-mobile';

export interface Supply {
  type: 'life' | 'matter' | 'energy' | 'technology';
  amount: number;
  icon: React.ReactNode;
  color: string;
}

interface SupplyBarProps {
  className?: string;
}

const SupplyBar: React.FC<SupplyBarProps> = ({  className }) => {
//   const isMobile = useIsMobile();
const resourcesContext = useSupplies();
if (!resourcesContext) {
    throw new Error('useResources must be used within a ResourcesProvider');
}
const { supplies } = resourcesContext;

  return (
    <div className={cn('flex items-center gap-3 p-2', false ? 'flex-col' : '', className)}>
      {supplies.map((resource) => (
        <TooltipProvider key={resource.type}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1.5">
                <div className={cn('p-1.5 rounded-full', resource.color)}>
                  {resource.icon}
                </div>
                <span className="font-mono text-xs font-medium text-white/90">{resource.amount}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">
                {resource.type}: {resource.amount}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default SupplyBar;
