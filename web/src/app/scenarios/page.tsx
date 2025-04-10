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

// Mock data for scenarios
const mockScenarios: Scenario[] = [
  {
    id: '1',
    title: 'Dark Matter Crisis',
    description: 'A mysterious surge in dark matter is threatening the stability of several star systems. Players must investigate the source and contain the phenomenon before it causes catastrophic damage.',
    author: 'CosmicExplorer',
    createdAt: new Date(2023, 3, 15),
    updatedAt: new Date(2023, 3, 15),
    activations: 287,
    quests: [],
    enemies: [],
  },
  {
    id: '2',
    title: 'Techno-Organic Uprising',
    description: 'A new form of hybrid techno-organic life has emerged and is spreading rapidly through abandoned space stations. Study this phenomenon and decide whether to contain it or help it evolve.',
    author: 'QuantumDesigner',
    createdAt: new Date(2023, 5, 22),
    updatedAt: new Date(2023, 5, 25),
    activations: 198,
    artifacts: [],
    jobs: [],
  },
  {
    id: '3',
    title: 'Stellar Archeology',
    description: 'Ancient ruins discovered on an asteroid field reveal a long-lost civilization with advanced technology. Explore the ruins, decipher their language, and unlock their secrets before rival factions can weaponize the findings.',
    author: 'StarHistorian',
    createdAt: new Date(2023, 6, 7),
    updatedAt: new Date(2023, 6, 10),
    activations: 345,
    quests: [],
    artifacts: [],
    resources: [],
  },
  {
    id: '4',
    title: 'Void Market Expansion',
    description: 'Help establish a new trading hub in a previously unexplored region of space. Deal with local factions, establish supply lines, and defend against opportunistic pirates.',
    author: 'GalacticTrader',
    createdAt: new Date(2023, 7, 3),
    updatedAt: new Date(2023, 7, 5),
    activations: 156,
    jobs: [],
    resources: [],
  },
  {
    id: '5',
    title: 'Quantum Flux Zone',
    description: 'A region of space has become unstable due to quantum fluctuations, creating unpredictable effects on technology and living organisms. Investigate the phenomenon and find a way to stabilize the area.',
    author: 'WaveFunctionCollapse',
    createdAt: new Date(2023, 8, 19),
    updatedAt: new Date(2023, 8, 19),
    activations: 267,
    enemies: [],
    artifacts: [],
  },
  {
    id: '6',
    title: 'Celestial Choir',
    description: 'Strange harmonious signals have been detected coming from a distant nebula. As you investigate, you discover a collective consciousness that communicates through mathematical patterns translated as music.',
    author: 'HarmonicExplorer',
    createdAt: new Date(2023, 9, 12),
    updatedAt: new Date(2023, 9, 14),
    activations: 211,
    quests: [],
    artifacts: [],
  }
];

const Scenarios = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>('1');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<string[]>([]);
  
  // Handle scenario activation
  const handleActivateScenario = (scenarioId: string) => {
    setActiveScenarioId(scenarioId);
    toast.success("Scenario activated successfully!");
  };
  
  // Handle scenario creation (mock implementation)
  const handleSaveScenario = (data: ScenarioForm) => {
    console.log("Creating new scenario with data:", data);
    // In a real implementation, we would send this to a backend
    setIsCreating(false);
    toast.success("New scenario created!");
  };
  
  // Filter scenarios based on search term and filters
  const filteredScenarios = mockScenarios.filter(scenario => {
    // Search term filter
    const matchesSearch = searchTerm === '' || 
      scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Content type filters
    if (filters.length === 0) return matchesSearch;
    
    const hasQuests = filters.includes('quests') && scenario.quests !== undefined;
    const hasArtifacts = filters.includes('artifacts') && scenario.artifacts !== undefined;
    const hasEnemies = filters.includes('enemies') && scenario.enemies !== undefined;
    const hasResources = filters.includes('resources') && scenario.resources !== undefined;
    const hasJobs = filters.includes('jobs') && scenario.jobs !== undefined;
    
    return matchesSearch && (hasQuests || hasArtifacts || hasEnemies || hasResources || hasJobs);
  });
  
  // Toggle a filter
  const toggleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter(f => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Cosmic Scenarios</h1>
          <p className="text-white/70">
            Discover player-created cosmic scenarios or create your own. Each scenario contains unique quests, 
            artifacts, enemies, and more that you can activate and experience.
          </p>
        </div>
        
        {isCreating ? (
          <ScenarioEditor 
            onSave={handleSaveScenario} 
            onCancel={() => setIsCreating(false)} 
          />
        ) : (
          <>
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <Input 
                  placeholder="Search scenarios..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <Button
                  variant="outline"
                  size="sm"
                  className={`flex items-center gap-1 ${filters.includes('quests') ? 'bg-blue-900/30' : ''}`}
                  onClick={() => toggleFilter('quests')}
                >
                  <Sparkles className="h-4 w-4" />
                  Quests
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className={`flex items-center gap-1 ${filters.includes('artifacts') ? 'bg-purple-900/30' : ''}`}
                  onClick={() => toggleFilter('artifacts')}
                >
                  Artifacts
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className={`flex items-center gap-1 ${filters.includes('enemies') ? 'bg-red-900/30' : ''}`}
                  onClick={() => toggleFilter('enemies')}
                >
                  Enemies
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className={`flex items-center gap-1 ${filters.includes('resources') ? 'bg-emerald-900/30' : ''}`}
                  onClick={() => toggleFilter('resources')}
                >
                  Resources
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className={`flex items-center gap-1 ${filters.includes('jobs') ? 'bg-yellow-900/30' : ''}`}
                  onClick={() => toggleFilter('jobs')}
                >
                  Jobs
                </Button>
                
                {filters.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => setFilters([])}
                  >
                    <X className="h-4 w-4" />
                    Clear
                  </Button>
                )}
              </div>
              
              <Button onClick={() => setIsCreating(true)}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create New
              </Button>
            </div>
            
            {/* Active Scenario */}
            {activeScenarioId && (
              <div className="mb-8 bg-black/30 border border-primary/20 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold flex items-center">
                      <Badge variant="default" className="mr-2">Active</Badge>
                      {mockScenarios.find(s => s.id === activeScenarioId)?.title || "Selected Scenario"}
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
            )}
            
            {/* Results count */}
            <div className="mb-4">
              <p className="text-sm text-white/50">
                Showing {filteredScenarios.length} scenarios
              </p>
            </div>
            
            {/* Scenarios Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScenarios.map(scenario => (
                <ScenarioCard
                  key={scenario.id}
                  scenario={scenario}
                  onActivate={handleActivateScenario}
                  isActive={scenario.id === activeScenarioId}
                />
              ))}
            </div>
            
            {filteredScenarios.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-white/50">
                <div className="text-7xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No scenarios found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Scenarios;