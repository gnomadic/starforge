
import React from 'react';
import { cn } from '@/lib/utils';
import { RefreshCw } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useSupplies } from './SupplyContext';
import { Button } from '@/components/ui/button';
import { str } from '@/lib/utils/utils';

interface SupplyBarProps {
  className?: string;
}

const SupplyBar: React.FC<SupplyBarProps> = ({  className }) => {
  const isMobile = false;
const resourcesContext = useSupplies();
if (!resourcesContext) {
    throw new Error('useResources must be used within a ResourcesProvider');
}
const { supplies, updateSupply, sync, syncReady  } = resourcesContext;

  return (
    <div className={cn(
      'flex gap-3 p-2 items-center', 
      isMobile ? 'flex-col' : '',
      className
    )}>
      {supplies.map((resource) => (
        <TooltipProvider key={resource.type}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1.5">
                <div className={cn('p-1.5 rounded-full', resource.color)}>
                  {resource.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-medium text-white/90">
                    {resource.amount.toFixed(2)}
                  </span>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">
                {str(resource.type)}: {resource.amount.toFixed(5)}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
      
      {/* <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={sync}
              className={cn(
                'ml-2 p-1.5 rounded-full',
                syncReady ? 'bg-emerald-950/60 hover:bg-emerald-900/70' : 'bg-slate-800/60 hover:bg-slate-700/70',
                'transition-colors duration-300'
              )}
              disabled={!syncReady}
            >
              <RefreshCw 
                className={cn(
                  'h-4 w-4',
                  syncReady ? 'text-emerald-400' : 'text-slate-400',
                  syncReady && 'animate-pulse'
                )} 
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{syncReady ? 'Sync Available!' : 'Sync Unavailable'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> */}
    </div>
  );
};

export default SupplyBar;
