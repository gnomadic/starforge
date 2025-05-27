"use client";

import React from 'react';
// import { useResources } from '@/contexts/ResourceContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Briefcase, CheckCircle } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';


interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_JOBS = [
  {
    id: 'life-researcher',
    title: 'Life Researcher',
    description: 'Study cosmic life forms',
    resourceType: 'life' as const,
    baseEmissionBoost: 0.2,
    color: 'bg-red-500',
  },
  {
    id: 'matter-collector',
    title: 'Matter Collector', 
    description: 'Collect interstellar particles',
    resourceType: 'matter' as const,
    baseEmissionBoost: 0.3,
    color: 'bg-blue-500',
  },
  {
    id: 'energy-harvester',
    title: 'Energy Harvester',
    description: 'Capture cosmic radiation',
    resourceType: 'energy' as const,
    baseEmissionBoost: 0.25,
    color: 'bg-yellow-500',
  },
  {
    id: 'tech-engineer',
    title: 'Tech Engineer',
    description: 'Research advanced technologies',
    resourceType: 'technology' as const,
    baseEmissionBoost: 0.15,
    color: 'bg-emerald-500',
  },
];

const JobModal: React.FC<JobModalProps> = ({ isOpen, onClose }) => {
//   const { activeJob, setActiveJob } = useResources();
//   const { toast } = useToast();
// 
  const handleJobSelection = (job: typeof AVAILABLE_JOBS[0]) => {
    // if (activeJob && activeJob.id === job.id) {
    //   setActiveJob(null);
    //   toast({
    //     title: "Job Deactivated",
    //     description: `You are no longer working as a ${job.title}.`,
    //   });
    // } else {
    //   setActiveJob({
    //     id: job.id,
    //     resourceType: job.resourceType,
    //     baseEmissionBoost: job.baseEmissionBoost
    //   });
    //   toast({
    //     title: "Job Activated",
    //     description: `You are now working as a ${job.title}.`,
    //   });
    // }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <Briefcase className="h-5 w-5" />
            Cosmic Jobs
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-3 mt-4">
          {AVAILABLE_JOBS.map((job) => {
            const isActive = false;// activeJob?.id === job.id;
            
            return (
              <div
                key={job.id}
                className={`p-4 rounded-lg border transition-all ${
                  isActive 
                    ? 'border-primary bg-primary/10' 
                    : 'border-gray-600 bg-gray-800/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${job.color}`}></div>
                    <h3 className="font-semibold text-white">{job.title}</h3>
                    {isActive && <CheckCircle className="h-4 w-4 text-primary" />}
                  </div>
                </div>
                
                <p className="text-sm text-gray-300 mb-3">{job.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-400">Boost: </span>
                    <span className="text-white font-medium">+{job.baseEmissionBoost}/s</span>
                  </div>
                  
                  <Button
                    size="sm"
                    variant={isActive ? "default" : "outline"}
                    onClick={() => handleJobSelection(job)}
                  >
                    {isActive ? "Deactivate" : "Activate"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobModal;