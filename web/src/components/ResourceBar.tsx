
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart, Circle, Zap, Cpu } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useResources } from './ResourceContext';
// import { useIsMobile } from '@/hooks/use-mobile';

export interface Resource {
  type: 'life' | 'matter' | 'energy' | 'technology';
  amount: number;
  icon: React.ReactNode;
  color: string;
}

interface ResourceBarProps {
  className?: string;
}

const ResourceBar: React.FC<ResourceBarProps> = ({  className }) => {
//   const isMobile = useIsMobile();
const resourcesContext = useResources();
if (!resourcesContext) {
    throw new Error('useResources must be used within a ResourcesProvider');
}
const { resources } = resourcesContext;

  return (
    <div className={cn('flex items-center gap-3 p-2', false ? 'flex-col' : '', className)}>
      {resources.map((resource) => (
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

export default ResourceBar;
