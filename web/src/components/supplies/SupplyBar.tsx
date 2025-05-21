'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useSupplies } from './SupplyContext';
import { Button } from '@/components/ui/button';
import { str } from '@/lib/utils/utils';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface SupplyBarProps {
  className?: string;
}

const SupplyBar: React.FC<SupplyBarProps> = ({ className }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [collapsed, setCollapsed] = useState(!isMobile ? false : true);

  const resourcesContext = useSupplies();
  if (!resourcesContext) throw new Error('useSupplies must be used within a ResourcesProvider');
  const { supplies, sync, syncReady } = resourcesContext;

  return (
    <motion.div
      layout
      transition={{ duration: 0.3 }}
      className={cn(
        'flex items-center bg-black/70 backdrop-blur-md border border-white/10 rounded-lg shadow-md overflow-hidden',
        className
      )}
    >
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setCollapsed(!collapsed)}
        className=""
      >
        {collapsed ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </Button>

      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            key="supply-content"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="flex items-center gap-3 px-3"
          >
            {supplies.map((resource) => (
              <TooltipProvider key={resource.type}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1.5">
                      <div className={cn('p-1.5 rounded-full', resource.color)}>
                        {resource.icon}
                      </div>
                      <span className="font-mono text-xs text-white/90">
                        {resource.amount.toFixed(isMobile ? 1 : 2)}
                      </span>
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

            <Button
              variant="ghost"
              size="icon"
              onClick={sync}
              disabled={!syncReady}
              className="text-white/70 hover:text-white"
            >
              <RefreshCw
                // className={cn('h-4 w-4', !syncReady && 'animate-spin opacity-30')}
                className={cn('h-4 w-4', 
                  !syncReady && 'opacity-30')}
              />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SupplyBar;
