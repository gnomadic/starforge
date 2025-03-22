"use client"


import React from 'react';
import { useGameStore } from '@/lib/gameState';
import Header from '@/components/play/Header';
import ResourcePanel from '@/components/play/ResourcePanel';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import CouncilProjectCard from '@/components/play/CouncilProjectCard';
import { Building2, GraduationCap, Users } from 'lucide-react';

const Council = () => {
  const councilProjects = useGameStore(state => state.councilProjects);
  const activeProjects = councilProjects.filter(p => !p.completed);
  const completedProjects = councilProjects.filter(p => p.completed);

  return (
    <div className="cosmic-page">
      {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
        <div className="md:col-span-9"> */}
          <div className="cosmic-panel p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="h-7 w-7 text-purple-500" />
              <h1 className="text-2xl font-bold">Cosmic Council</h1>
            </div>

            <p className="text-muted-foreground mb-6">
              The Council of Cosmic Advancement works to improve life across the galaxy.
              Contribute resources to their initiatives to unlock new technologies and upgrades.
            </p>

            <Tabs defaultValue="active">
              <TabsList className="mb-4">
                <TabsTrigger value="active" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Active Initiatives</span>
                  {activeProjects.length > 0 && (
                    <span className="ml-1 bg-primary/20 text-primary rounded-full px-2 py-0.5 text-xs">
                      {activeProjects.length}
                    </span>
                  )}
                </TabsTrigger>
                <TabsTrigger value="completed" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Completed Projects</span>
                  {completedProjects.length > 0 && (
                    <span className="ml-1 bg-green-500/20 text-green-500 rounded-full px-2 py-0.5 text-xs">
                      {completedProjects.length}
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active">
                {activeProjects.length > 0 ? (
                  <div className="space-y-4">
                    {activeProjects.map(project => (
                      <CouncilProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <GraduationCap className="h-12 w-12 mx-auto mb-3 opacity-30" />
                    <p>All current council initiatives have been completed!</p>
                    <p className="text-sm">The council is currently planning new projects.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="completed">
                {completedProjects.length > 0 ? (
                  <div className="space-y-4">
                    {completedProjects.map(project => (
                      <CouncilProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Users className="h-12 w-12 mx-auto mb-3 opacity-30" />
                    <p>No projects have been completed yet.</p>
                    <p className="text-sm">Contribute to active initiatives to see results here.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        {/* </div>
      </div> */}
    </div>
  );
};

export default Council;
