"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Briefcase, CheckCircle, Clock } from 'lucide-react';


interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface JobModalData {
  id: string;
  title: string;
  description: string;
  resourceType: 'life' | 'matter' | 'energy' | 'technology';
  baseEmissionBoost: number;
  color: string; // Tailwind CSS class for background color
}

const AVAILABLE_JOBS : JobModalData[] = [
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
  const [ activeJob, setActiveJob ] = useState<JobModalData | null>();
  const [progress, setProgress] = useState(0);

  // Progress bar animation - fills every 10 seconds
  useEffect(() => {
    if (!activeJob) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0; // Reset to 0 when complete
        }
        return prev + 1; // Increment by 1% every 100ms (10 seconds total)
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeJob]);

  // Reset progress when job changes
  useEffect(() => {
    setProgress(0);
  }, [activeJob?.id]);

  const handleJobSelection = (job: typeof AVAILABLE_JOBS[0]) => {
    if (activeJob && activeJob.id === job.id) {
      setActiveJob(null);
      setProgress(0);
      // toast({
      //   title: "Job Deactivated",
      //   description: `You are no longer working as a ${job.title}.`,
      // });
    } else {
      setActiveJob(AVAILABLE_JOBS.find(j => j.id === job.id) || null);
      setProgress(0);
      // toast({
      //   title: "Job Activated",
      //   description: `You are now working as a ${job.title}.`,
      // });
    }
  };

  const activeJobData = AVAILABLE_JOBS.find(job => job.id === activeJob?.id);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <Briefcase className="h-5 w-5" />
            Cosmic Jobs
          </DialogTitle>
        </DialogHeader>
        
        {/* Active Job Section */}
        <div className="mt-4">
          {activeJobData ? (
            <div className="p-4 rounded-lg border border-primary bg-primary/10 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm text-gray-300">Currently Active</span>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-4 h-4 rounded-full ${activeJobData.color}`}></div>
                <div>
                  <h3 className="font-semibold text-white">{activeJobData.title}</h3>
                  <p className="text-sm text-gray-300">{activeJobData.description}</p>
                </div>
                <CheckCircle className="h-5 w-5 text-primary ml-auto" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Work Progress</span>
                  <span className="text-white">{progress}%</span>
                </div>
                <Progress 
                  value={progress} 
                  className="h-2 bg-gray-700"
                />
                <div className="text-xs text-gray-400">
                  Earning +{activeJobData.baseEmissionBoost}/s {activeJobData.resourceType}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-lg border border-gray-600 bg-gray-800/30 mb-4 text-center">
              <Briefcase className="h-8 w-8 text-gray-500 mx-auto mb-2" />
              <p className="text-gray-400 text-sm">No active job</p>
              <p className="text-gray-500 text-xs">Select a job below to start earning</p>
            </div>
          )}
        </div>
        
        {/* Available Jobs */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-300 px-1">Available Jobs</h4>
          {AVAILABLE_JOBS.map((job) => {
            const isActive = activeJob?.id === job.id;
            
            return (
              <div
                key={job.id}
                className={`p-4 rounded-lg border transition-all cursor-pointer hover:bg-gray-800/70 ${
                  isActive 
                    ? 'border-primary/50 bg-primary/5 opacity-75' 
                    : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                }`}
                onClick={() => handleJobSelection(job)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${job.color}`}></div>
                    <div>
                      <h3 className={`font-semibold ${isActive ? 'text-gray-400' : 'text-white'}`}>
                        {job.title}
                      </h3>
                      <p className={`text-sm ${isActive ? 'text-gray-500' : 'text-gray-300'}`}>
                        {job.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-sm ${isActive ? 'text-gray-500' : 'text-white'}`}>
                      +{job.baseEmissionBoost}/s
                    </div>
                    {isActive && (
                      <div className="text-xs text-primary">Active</div>
                    )}
                  </div>
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