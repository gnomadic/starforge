"use client";

import React, { useState } from 'react';
import Navbar from '@/components/global/Navbar';
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
import { bigIntReplacer } from '@/domain/utils';
import ScenarioSearchBar from '@/components/scenarios/ScenarioSearchBar';

// Mock data for scenarios

const Scenarios = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [activeScenarioId, setActiveScenarioId] = useState<string | null>('1');


    const { deploy } = useDeployment();

    const { address } = useAccount();

    const { data: scenarios, error, isLoading } = useReadScenarioFactoryGetAllScenarioData({
        args: [address ? address : '0x0'],
        address: deploy.ScenarioFactory
    })

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
    // const filteredScenarios = mockScenarios.filter(scenario => {
    //   // Search term filter
    //   const matchesSearch = searchTerm === '' || 
    //     scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //     scenario.description.toLowerCase().includes(searchTerm.toLowerCase());

    //   // Content type filters
    //   if (filters.length === 0) return matchesSearch;

    //   const hasQuests = filters.includes('quests') && scenario.quests !== undefined;
    //   const hasArtifacts = filters.includes('artifacts') && scenario.artifacts !== undefined;
    //   const hasEnemies = filters.includes('enemies') && scenario.enemies !== undefined;
    //   const hasResources = filters.includes('resources') && scenario.resources !== undefined;
    //   const hasJobs = filters.includes('jobs') && scenario.jobs !== undefined;

    //   return matchesSearch && (hasQuests || hasArtifacts || hasEnemies || hasResources || hasJobs);
    // });



    return (
        <div className="min-h-screen bg-background text-foreground">
            <main>
                <ScenarioEditor
                    onSave={handleSaveScenario}
                    onCancel={() => setIsCreating(false)}
                />
            </main>
        </div>
    );
};

export default Scenarios;