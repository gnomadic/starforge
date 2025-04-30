"use client";

import React, { useState } from 'react';
import { PlusCircle, Search, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Address } from 'viem';
import Link from 'next/link';

interface ScenarioSearchBarProps {
    isActive?: boolean;
    ipfs?: string | undefined;
    admin?: Address;
    active?: boolean;
}


const ScenarioSearchBar: React.FC<ScenarioSearchBarProps> = ({
    ipfs,
    isActive = false
}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState<string[]>([]);

    // Toggle a filter
    const toggleFilter = (filter: string) => {
        if (filters.includes(filter)) {
            setFilters(filters.filter(f => f !== filter));
        } else {
            setFilters([...filters, filter]);
        }
    };

    // Calculate which content types are included
    // const contentTypes = ['Stats', 'Quests', 'Artifacts', 'Enemies', 'Resources', 'Jobs']

    return (
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

            {/* <Button onClick={() => setIsCreating(true)}> */}
            <Link href="/scenarios/create">
                <Button onClick={() => { }}>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Create New
                </Button>
            </Link>
        </div>
    );
};

export default ScenarioSearchBar;