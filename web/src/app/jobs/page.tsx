import React, { useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSupplies } from '@/components/SupplyContext';

interface Job {
  id: string;
  title: string;
  description: string;
  resourceType: 'life' | 'matter' | 'energy' | 'technology';
  baseEmissionBoost: number;
  icon: React.ReactNode;
  color: string;
}

const AVAILABLE_JOBS: Job[] = [
  {
    id: 'life-researcher',
    title: 'Life Researcher',
    description: 'Study cosmic life forms to increase life production.',
    resourceType: 'life',
    baseEmissionBoost: 0.2,
    icon: <Briefcase className="h-5 w-5 text-red-400" />,
    color: 'bg-red-950/60 hover:bg-red-900/60'
  },
  {
    id: 'matter-collector',
    title: 'Matter Collector',
    description: 'Collect interstellar particles to increase matter production.',
    resourceType: 'matter',
    baseEmissionBoost: 0.3,
    icon: <Briefcase className="h-5 w-5 text-blue-400" />,
    color: 'bg-blue-950/60 hover:bg-blue-900/60'
  },
  {
    id: 'energy-harvester',
    title: 'Energy Harvester',
    description: 'Capture cosmic radiation to boost energy production.',
    resourceType: 'energy',
    baseEmissionBoost: 0.25,
    icon: <Briefcase className="h-5 w-5 text-yellow-400" />,
    color: 'bg-yellow-950/60 hover:bg-yellow-900/60'
  },
  {
    id: 'tech-engineer',
    title: 'Tech Engineer',
    description: 'Research advanced technologies to increase tech production.',
    resourceType: 'technology',
    baseEmissionBoost: 0.15,
    icon: <Briefcase className="h-5 w-5 text-emerald-400" />,
    color: 'bg-emerald-950/60 hover:bg-emerald-900/60'
  }
];

const Jobs: React.FC = () => {
//   const { resources, activeJob, setActiveJob } = useSupplies();

//   const handleJobSelection = (job: Job) => {
//     if (activeJob && activeJob.id === job.id) {
//       setActiveJob(null);
//       toast({
//         title: "Job Deactivated",
//         description: `You are no longer working as a ${job.title}.`,
//       });
//     } else {
//       setActiveJob({
//         id: job.id,
//         resourceType: job.resourceType,
//         baseEmissionBoost: job.baseEmissionBoost
//       });
//       toast({
//         title: "Job Activated",
//         description: `You are now working as a ${job.title}. +${job.baseEmissionBoost}/s to ${job.resourceType}.`,
//       });
//     }
//   };

  return (
    <div className="container mx-auto py-20 pt-32">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Cosmic Jobs</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose a job to automatically generate resources. You can only have one active job at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AVAILABLE_JOBS.map((job) => {
            const isActive = false;//activeJob?.id === job.id;
            
            return (
              <Card 
                key={job.id} 
                className={`border transition-all ${isActive ? 'border-primary ring-2 ring-primary/20' : 'border-border/40'}`}
              >
                <CardHeader className={`${job.color} rounded-t-lg`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-lg font-semibold text-white">{job.title}</CardTitle>
                      <CardDescription className="text-white/80">{job.resourceType}</CardDescription>
                    </div>
                    <div className="p-2 rounded-full bg-black/20">
                      {job.icon}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                  
                  <div className="flex justify-between items-center border-t border-border/40 pt-4">
                    <div className="text-sm">
                      <div className="text-muted-foreground">Boost</div>
                      <div className="font-semibold">+{job.baseEmissionBoost}/s</div>
                    </div>
                    <Button
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                    //   onClick={() => handleJobSelection(job)}
                    >
                      {isActive ? "Deactivate" : "Activate"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Jobs;