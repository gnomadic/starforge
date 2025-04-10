


import React, { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { 
  PlusCircle, 
  Sparkles, 
  Briefcase, 
  Sword, 
  Award, 
  Database,
  ChevronDown
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { ScenarioForm } from '@/domain/types';
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

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  quests: z.boolean().default(false),
  artifacts: z.boolean().default(false),
  enemies: z.boolean().default(false),
  resources: z.boolean().default(false),
  jobs: z.boolean().default(false),
  
  // Quest details
  questTitle: z.string().optional(),
  questDescription: z.string().optional(),
  questReward: z.string().optional(),
  
  // Artifact details
  artifactName: z.string().optional(),
  artifactDescription: z.string().optional(),
  artifactRarity: z.string().optional(),
  
  // Enemy details
  enemyName: z.string().optional(),
  enemyDescription: z.string().optional(),
  enemyStrength: z.string().optional(),
  
  // Resource details
  resourceName: z.string().optional(),
  resourceDescription: z.string().optional(),
  resourceType: z.string().optional(),
  
  // Job details
  jobTitle: z.string().optional(),
  jobDescription: z.string().optional(),
  jobResourceType: z.string().optional(),
  jobEmissionBoost: z.string().optional(),
});

interface ScenarioEditorProps {
  onSave: (data: ScenarioForm) => void;
  onCancel: () => void;
}

const ScenarioEditor: React.FC<ScenarioEditorProps> = ({ onSave, onCancel }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      quests: false,
      artifacts: false,
      enemies: false,
      resources: false,
      jobs: false,
    },
  });

  // Watch for changes to content type toggles to manage accordion state
  const questsEnabled = form.watch("quests");
  const artifactsEnabled = form.watch("artifacts");
  const enemiesEnabled = form.watch("enemies");
  const resourcesEnabled = form.watch("resources");
  const jobsEnabled = form.watch("jobs");

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    if (!values.quests && !values.artifacts && !values.enemies && !values.resources && !values.jobs) {
      toast.error("Please select at least one content type for your scenario.");
      return;
    }
    
    // Ensure all required fields are present in the data passed to onSave
    const scenarioData: ScenarioForm = {
      title: values.title,
      description: values.description,
      quests: values.quests,
      artifacts: values.artifacts,
      enemies: values.enemies,
      resources: values.resources,
      jobs: values.jobs,
    };
    
    onSave(scenarioData);
    toast.success("Scenario created successfully!");
  };

  return (
    <div className="bg-black/30 rounded-lg border border-white/10 p-6">
      <h2 className="text-2xl font-bold mb-6">Create New Cosmic Scenario</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Scenario Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a captivating title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your cosmic scenario" 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Paint a picture of your scenario for other players.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="border border-white/10 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Content Types</h3>
            <p className="text-sm text-white/70 mb-4">Select which content types you want to include in your scenario:</p>

            <Accordion type="multiple" className="space-y-4">
              {/* Quests Section */}
              <AccordionItem value="quests" className="border border-white/10 rounded-lg overflow-hidden">
                <div className="flex flex-row items-center justify-between p-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                      <FormLabel>Quests</FormLabel>
                    </div>
                    <FormDescription className="text-xs">
                      Adventures for players to complete
                    </FormDescription>
                  </div>
                  <FormField
                    control={form.control}
                    name="quests"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Collapsible open={questsEnabled}>
                  <CollapsibleContent className="p-4 pt-0 bg-black/20 space-y-4">
                    <FormField
                      control={form.control}
                      name="questTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quest Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Name your quest" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="questDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Describe the quest objectives" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="questReward"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reward</FormLabel>
                          <FormControl>
                            <Input placeholder="What will players receive?" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </CollapsibleContent>
                </Collapsible>
              </AccordionItem>

              {/* Artifacts Section */}
              <AccordionItem value="artifacts" className="border border-white/10 rounded-lg overflow-hidden">
                <div className="flex flex-row items-center justify-between p-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-400" />
                      <FormLabel>Artifacts</FormLabel>
                    </div>
                    <FormDescription className="text-xs">
                      Special items with unique abilities
                    </FormDescription>
                  </div>
                  <FormField
                    control={form.control}
                    name="artifacts"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Collapsible open={artifactsEnabled}>
                  <CollapsibleContent className="p-4 pt-0 bg-black/20 space-y-4">
                    <FormField
                      control={form.control}
                      name="artifactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Artifact Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Name your artifact" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="artifactDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Describe the artifact's powers" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="artifactRarity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rarity</FormLabel>
                          <FormControl>
                            <Input placeholder="How rare is this artifact?" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </CollapsibleContent>
                </Collapsible>
              </AccordionItem>

              {/* Enemies Section */}
              <AccordionItem value="enemies" className="border border-white/10 rounded-lg overflow-hidden">
                <div className="flex flex-row items-center justify-between p-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <Sword className="w-4 h-4 mr-2 text-red-400" />
                      <FormLabel>Enemies</FormLabel>
                    </div>
                    <FormDescription className="text-xs">
                      Foes for players to battle
                    </FormDescription>
                  </div>
                  <FormField
                    control={form.control}
                    name="enemies"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Collapsible open={enemiesEnabled}>
                  <CollapsibleContent className="p-4 pt-0 bg-black/20 space-y-4">
                    <FormField
                      control={form.control}
                      name="enemyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Enemy Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Name your enemy" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="enemyDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Describe this enemy" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="enemyStrength"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Strength Level</FormLabel>
                          <FormControl>
                            <Input placeholder="How powerful is this enemy?" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </CollapsibleContent>
                </Collapsible>
              </AccordionItem>

              {/* Resources Section */}
              <AccordionItem value="resources" className="border border-white/10 rounded-lg overflow-hidden">
                <div className="flex flex-row items-center justify-between p-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <Database className="w-4 h-4 mr-2 text-emerald-400" />
                      <FormLabel>Resources</FormLabel>
                    </div>
                    <FormDescription className="text-xs">
                      New types of cosmic materials
                    </FormDescription>
                  </div>
                  <FormField
                    control={form.control}
                    name="resources"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Collapsible open={resourcesEnabled}>
                  <CollapsibleContent className="p-4 pt-0 bg-black/20 space-y-4">
                    <FormField
                      control={form.control}
                      name="resourceName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resource Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Name your resource" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="resourceDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Describe this resource" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="resourceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type</FormLabel>
                          <FormControl>
                            <Input placeholder="What type of resource is this?" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </CollapsibleContent>
                </Collapsible>
              </AccordionItem>

              {/* Jobs Section */}
              <AccordionItem value="jobs" className="border border-white/10 rounded-lg overflow-hidden">
                <div className="flex flex-row items-center justify-between p-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2 text-yellow-400" />
                      <FormLabel>Jobs</FormLabel>
                    </div>
                    <FormDescription className="text-xs">
                      Work opportunities for resource generation
                    </FormDescription>
                  </div>
                  <FormField
                    control={form.control}
                    name="jobs"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Collapsible open={jobsEnabled}>
                  <CollapsibleContent className="p-4 pt-0 bg-black/20 space-y-4">
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Name this job" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jobDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Describe this job's responsibilities" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jobResourceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resource Type</FormLabel>
                          <FormControl>
                            <Input placeholder="What resource does this job produce?" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jobEmissionBoost"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Emission Boost</FormLabel>
                          <FormControl>
                            <Input placeholder="How much does this job boost resource production?" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </CollapsibleContent>
                </Collapsible>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={onCancel}>Cancel</Button>
            <Button type="submit">Create Scenario</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ScenarioEditor;