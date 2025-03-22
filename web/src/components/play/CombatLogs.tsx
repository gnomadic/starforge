
import React from 'react';
import { CombatLog } from '@/lib/types/combatTypes';
import { Swords, Shield, CheckCircle, AlertCircle, Rocket } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface CombatLogsProps {
  logs: CombatLog[];
}

const CombatLogs: React.FC<CombatLogsProps> = ({ logs }) => {
  // Helper to format timestamp
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  };

  // Get log icon based on type
  const getLogIcon = (logType: CombatLog['type']) => {
    switch (logType) {
      case 'attack':
        return <Swords className="h-4 w-4 text-orange-500" />;
      case 'defense':
        return <Shield className="h-4 w-4 text-blue-500" />;
      case 'defeat':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'launch':
        return <Rocket className="h-4 w-4 text-primary" />;
      case 'system':
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="cosmic-panel p-4">
      <h2 className="text-lg font-semibold mb-3">Combat Logs</h2>
      
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-2">
          {logs.length > 0 ? (
            logs.slice().reverse().map((log) => (
              <div 
                key={log.id}
                className={cn(
                  "p-2 rounded-lg border text-sm",
                  log.type === 'attack' && "border-orange-500/30 bg-orange-500/10",
                  log.type === 'defense' && "border-blue-500/30 bg-blue-500/10",
                  log.type === 'defeat' && "border-green-500/30 bg-green-500/10",
                  log.type === 'launch' && "border-primary/30 bg-primary/10",
                  log.type === 'system' && "border-gray-500/30 bg-gray-500/10"
                )}
              >
                <div className="flex items-start">
                  <div className="mr-2 mt-0.5">
                    {getLogIcon(log.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{formatTime(log.timestamp)}</span>
                    </div>
                    <p>{log.message}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              No combat activity recorded yet
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CombatLogs;
