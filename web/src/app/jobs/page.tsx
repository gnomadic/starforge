"use client";

import React, { useEffect } from 'react';
import { Shell, Droplet, Sun, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSupplies } from '@/components/SupplyContext';
import { useReadJobEntityGetAvailableJobs, useReadScenarioGetEntity } from '@/generated';
import { useAccount } from 'wagmi';
import { useScenarios } from '@/components/ScenarioContext';
import { bigIntReplacer } from '@/domain/utils';
import { useDeployment } from '@/hooks/useDeployment';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import JobCard from '@/components/job/JobCard';



interface JobDeco {
  icon: React.ReactNode;
  color: string;
  resourceType: string;
}

const DECOS: JobDeco[] = [
  {
    icon: <Shell className="h-5 w-5 text-red-400" />,
    resourceType: 'Bioflux',
    color: 'bg-red-950/60 hover:bg-red-900/60'
  }, {
    icon: <Droplet className="h-5 w-5 text-blue-400" />,
    resourceType: 'Hydrocite',
    color: 'bg-blue-950/60 hover:bg-blue-900/60'
  }, {
    icon: <Sun className="h-5 w-5 text-yellow-400" />,
    resourceType: 'Solaris Dust',
    color: 'bg-yellow-950/60 hover:bg-yellow-900/60'
  }
]

function getDecoByResourceType(resourceType: string): JobDeco {
  const deco = DECOS.find(deco => deco.resourceType === resourceType);
  if (!deco) {
    throw new Error(`No deco found for resource type: ${resourceType}`);
  }
  return deco;
}



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


  // const { address } = useAccount();
  const { deploy } = useDeployment();
  const { scenarios } = useScenarios();
  const { supplies } = useSupplies();


  const { data: whichEntity } = useReadScenarioGetEntity({ args: [deploy.JobSystem], address: scenarios ? scenarios[0] : "0x0" })


  const { data, isLoading, error } = useReadJobEntityGetAvailableJobs({
    args: [],
    address: whichEntity
  })


  const [biofluxEnabled, setBioluxEnabled] = React.useState(false);

  const [enabled, setEnabled] = React.useState<boolean[]>([]);

  useEffect(() => {
    if (data) {
      const enabledJobs: boolean[] = new Array(data.length).fill(false);
      setEnabled(enabledJobs);
    }
  }
    , [data]);



  return (
    <div className="container mx-auto py-20 pt-32">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Cosmic Jobs</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose a job to generate resources over time. You can only have one active job at a time.
          </p>
        </div>

        <Accordion type="multiple" className="space-y-4">


          {supplies.map((supply, index) => {
            return <AccordionItem value={supply.type}
              className="border border-white/10 rounded-lg overflow-hidden glass"
              onClick={() => {
                const updatedEnabled = [...enabled];
                updatedEnabled[index] = !updatedEnabled[index];
                setEnabled(updatedEnabled);
              }}
            >
              <div className="flex flex-row items-center justify-between p-3">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    {supply.icon}
                    <p className='pl-2 text-lg font-semibold text-white'>
                      {supply.type}
                    </p>
                  </div>
                  <p className="text-sm">
                    {supply.description}
                  </p>
                </div>
                <ArrowDown
                  className="w-5 h-5 text-blue-400 mr-5"

                />
              </div>

              <Collapsible open={enabled[index]}>
                <CollapsibleContent className="p-4 pt-0 bg-black/20 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                    {data?.filter((job) => (job.tokenName === supply.type)).map((job, index) => {
                      const isActive = false;//activeJob?.id === job.id;

                      return (
                        <JobCard
                          key={job.id}
                          job={job}
                          isActive={isActive}
                          getDecoByResourceType={getDecoByResourceType}
                        />


                        // <Card
                        //   key={job.id}
                        //   className={`border transition-all ${isActive ? 'border-primary ring-2 ring-primary/20' : 'border-border/40'}`}
                        // >
                        //   <CardHeader className={`${getDecoByResourceType(job.tokenName).color} rounded-t-lg`}>
                        //     <div className="flex justify-between items-center">
                        //       <div>
                        //         <CardTitle className="text-lg font-semibold text-white">{job.title}</CardTitle>
                        //         <CardDescription className="text-white/80">{job.tokenName}</CardDescription>
                        //       </div>
                        //       <div className="p-2 rounded-full bg-black/20">
                        //         {getDecoByResourceType(job.tokenName).icon}
                        //       </div>
                        //     </div>
                        //   </CardHeader>
                        //   <CardContent className="pt-6 flex flex-col gap-4">
                        //     <p className="text-sm text-muted-foreground">{job.description}</p>

                        //     <div className="flex justify-between items-center border-t border-border/40 pt-4">
                        //       <div className="text-sm">
                        //         <div className="text-muted-foreground">Earn</div>
                        //         <div className="font-semibold">+{Number(job.amountPerHour) / 1e18} per hour</div>
                        //       </div>
                        //       <Button
                        //         variant={isActive ? "default" : "outline"}
                        //         size="sm"
                        //       //   onClick={() => handleJobSelection(job)}
                        //       >
                        //         {isActive ? "Deactivate" : "Activate"}
                        //       </Button>
                        //     </div>
                        //   </CardContent>
                        // </Card>
                      );
                    })}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </AccordionItem>

          })}


        </Accordion>



      </div>
    </div>
  );
};

export default Jobs;