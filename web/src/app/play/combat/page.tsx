"use client";

import React from 'react';
// import { Header, ResourcePanel, ProbeCustomizer, CurrentEnemy, CombatLogs } from '@/components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGameStore } from '@/lib/gameState';
import { useTitle } from '@/hooks/use-title';
import ResourcePanel from '@/components/play/ResourcePanel';
import CurrentEnemy from '@/components/play/CurrentEnemy';
import CombatLogs from '@/components/play/CombatLogs';
import ProbeCustomizer from '@/components/play/ProbeCustomizer';

const Combat = () => {
  const { probe, combatLogs } = useGameStore();
  useTitle('Combat - Cosmic Collector');

  // Create a simple ProbeStatistics component inline
  const ProbeStatistics = () => (
    <Card>
      <CardHeader>
        <CardTitle>Probe Statistics</CardTitle>
        <CardDescription>Current probe capabilities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Health:</span>
            <span>{probe.health}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Attack:</span>
            <span>{probe.attack}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Defense:</span>
            <span>{probe.defense}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Weight:</span>
            <span>{probe.currentWeight} / {probe.weightCapacity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Cooldown:</span>
            <span>{probe.cooldown} seconds</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* <Header /> */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Combat System</h1>
        <div className="mb-6">
          {/* <ResourcePanel /> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Tabs defaultValue="enemy">
              <TabsList className="w-full">
                <TabsTrigger value="enemy" className="flex-1">Current Enemy</TabsTrigger>
                <TabsTrigger value="logs" className="flex-1">Combat Logs</TabsTrigger>
              </TabsList>
              <TabsContent value="enemy">
                <CurrentEnemy />
              </TabsContent>
              <TabsContent value="logs">
                <CombatLogs logs={combatLogs} />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <ProbeStatistics />
            <ProbeCustomizer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combat;
