"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { PlusCircle, Search, Filter, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ScenarioEditor from '@/components/scenarios/ScenarioEditor';
import ScenarioCard from '@/components/scenarios/ScenarioCard';
import { Badge } from '@/components/ui/badge';
import { toast } from 'react-toastify';
import { Scenario, ScenarioForm } from '@/domain/types';
import { useReadScenarioFactoryGetAllScenarioData, useReadScenarioFactoryScenarios } from '@/generated';
import { useDeployment } from '@/hooks/useDeployment';
import { useAccount } from 'wagmi';
import ScenarioSearchBar from '@/components/scenarios/ScenarioSearchBar';


const Scenarios = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>('1');
  const {deploy} = useDeployment();

  const {address} = useAccount();

  const { data: scenarios , error, isLoading} = useReadScenarioFactoryGetAllScenarioData({
    args: [address ? address : '0x0'],
    address: deploy.ScenarioFactory
  })
  




  return (
    <div className="min-h-screen  text-foreground">      
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Cosmic Scenarios</h1>
          <p className="text-white/70">
            Discover player-created cosmic scenarios or create your own. Each scenario contains unique quests, 
            artifacts, enemies, and more that you can activate and experience.
          </p>
        </div>

          <div>

            <ScenarioSearchBar />
            
            {/* Active Scenario
            {activeScenarioId && (
              <div className="mb-8 bg-black/30 border border-primary/20 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold flex items-center">
                      <Badge variant="default" className="mr-2">Active</Badge>
                      Celestial Dawn
                    </h2>
                    <p className="text-white/70">
                      This scenario is currently active. You can access its content throughout the game.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setActiveScenarioId(null)}>
                    Deactivate
                  </Button>
                </div>
              </div>
            )} */}
            
            {/* Results count */}
            <div className="mb-4">
              <p className="text-sm text-white/50">
                Showing {scenarios?.length} scenarios
              </p>
            </div>
            
            {/* Scenarios Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios?.map((scenario, index) => (
                <ScenarioCard
                  key={index}
                  ipfs={scenario.metadataURI}
                  admin={scenario.admin}
                  active={scenario.active}
                />
              ))}
              {/* {filteredScenarios.map(scenario => (
                <ScenarioCard
                  key={scenario.id}
                  scenario={scenario}
                  onActivate={handleActivateScenario}
                  isActive={scenario.id === activeScenarioId}
                />
              ))} */}
            </div>
{/*             
            {filteredScenarios.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-white/50">
                <div className="text-7xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No scenarios found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )} */}
          </div>
        
      </main>
    </div>
  );
};

export default Scenarios;