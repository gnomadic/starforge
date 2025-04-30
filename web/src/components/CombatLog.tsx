"use client"


import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CombatLogData } from '@/domain/types';


interface CombatLogProps {
  logs: CombatLogData[];
}

const CombatLogComponent: React.FC<CombatLogProps> = ({ logs }) => {
  const getLogColor = (type: string) => {
    switch (type) {
      case 'player': return 'text-blue-400';
      case 'enemy': return 'text-red-400';
      case 'reward': return 'text-yellow-400';
      case 'system':
      default: return 'text-white/80';
    }
  };

  // Scroll to the bottom of the log whenever logs change
  React.useEffect(() => {
    const scrollArea = document.getElementById('combat-log-content');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [logs]);

  return (
    <Card className="bg-black/30 border-white/10">
      <CardHeader>
        <CardTitle className="text-lg">Combat Log</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 w-full pr-4" id="combat-log-content">
          <div className="space-y-2">
            {logs.length === 0 ? (
              <p className="text-white/50 text-center py-4">No combat activity yet</p>
            ) : (
              logs.map((log) => (
                <div key={log.id} className="flex items-start gap-2">
                  <span className="text-xs text-white/50">
                    {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                  </span>
                  <p className={`${getLogColor(log.type)}`}>
                    {log.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default CombatLogComponent;