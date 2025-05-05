"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GameSystem } from '@/domain/systems';
import Link from 'next/link';

interface SystemCardProps {
  system: GameSystem;
  selected?: boolean;
  onToggleSelect?: () => void;
  showSelectButton?: boolean;
}

const SystemCard: React.FC<SystemCardProps> = ({ system, selected = false, onToggleSelect, showSelectButton = false }) => {
  return (
    <Card className={`system-card ${selected ? 'ring-2 ring-primary' : ''}`} style={{ borderTop: `3px solid ${system.color}` }}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">{system.icon}</span>
              {system.name}
            </CardTitle>
            <CardDescription className="mt-2">{system.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="text-sm font-medium mb-2">Core Functions:</h4>
        <ul className="space-y-1">
          {system.functions.slice(0, 2).map((func, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              • {func.name}
            </li>
          ))}
          {system.functions.length > 2 && (
            <li className="text-sm text-muted-foreground">• And {system.functions.length - 2} more...</li>
          )}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/system/${system.id}`}>
          <Button variant="outline">Learn More</Button>
        </Link>
        
        {showSelectButton && (
          <Button 
            variant={selected ? "default" : "outline"}
            onClick={onToggleSelect}
          >
            {selected ? "Selected" : "Select"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default SystemCard;