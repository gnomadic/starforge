import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { toast } from 'react-toastify';
import { useWriteDungeonMaster, useWriteDungeonMasterSubmitProposal } from '@/generated';
// import { useWriteDungeonMaster } from '@/src/generated'

// import { useToast } from '@/hooks/use-toast';

const proposalFormSchema = z.object({
  topic: z.string().min(1, "Please select a topic"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  benefit: z.object({
    resource: z.string().min(1, "Please select a benefit resource"),
    amount: z.coerce.number().min(0, "Amount must be at least 0"),
  }),
  cost: z.object({
    resource: z.string().min(1, "Please select a cost resource"),
    amount: z.coerce.number().min(0, "Amount must be at least 0"),
  }),
});

type ProposalFormValues = z.infer<typeof proposalFormSchema>;

const ProposalForm = () => {
//   const { toast } = useToast();
  
  const form = useForm<ProposalFormValues>({
    resolver: zodResolver(proposalFormSchema),
    defaultValues: {
      topic: "",
      name: "",
      description: "",
      benefit: {
        resource: "",
        amount: 0,
      },
      cost: {
        resource: "",
        amount: 0,
      },
    },
  });

  // const { write: submitProposalTx } = useWriteDungeonMasterSubmitProposal({
  //   functionName: 'submitProposal',
  // })

  const onSubmit = (data: ProposalFormValues) => {
    console.log("Proposal submitted:", data);
    toast.success("Proposal Submitted");

    const payload = JSON.stringify({
      topic: data.topic,
      name: data.name,
      description: data.description,
      benefit: {
        resource: data.benefit.resource,
        amount: data.benefit.amount,
      },
      cost: {
        resource: data.cost.resource,
        amount: data.cost.amount,
      },
    })
    // submitProposalTx({
    //   args: [
    //     '0x0000000000000000000000000000000000000000', // Placeholder target
    //     payload,
    //   ],
    // })

    console.log("Transaction payload:", payload);
      
    form.reset();
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Submit Council Proposal</h3>
        <p className="text-sm text-muted-foreground">
          Submit your ideas to the Cosmic Council for consideration. Approved proposals will be added to active initiatives.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proposal Topic</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="research">Scientific Research</SelectItem>
                    <SelectItem value="exploration">Space Exploration</SelectItem>
                    <SelectItem value="defense">Galactic Defense</SelectItem>
                    <SelectItem value="infrastructure">Infrastructure</SelectItem>
                    <SelectItem value="social">Social Programs</SelectItem>
                    <SelectItem value="economic">Economic Development</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose the main focus area of your proposal
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proposal Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a name for your proposal" {...field} />
                </FormControl>
                <FormDescription>
                  A short, descriptive name for your initiative
                </FormDescription>
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
                    placeholder="Describe your proposal and its benefits to the galaxy..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4 p-4 border rounded-md">
              <h4 className="font-medium text-sm">Proposal Benefits</h4>
              
              <FormField
                control={form.control}
                name="benefit.resource"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resource Type</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select resource" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="energy">Energy</SelectItem>
                        <SelectItem value="matter">Matter</SelectItem>
                        <SelectItem value="life">Life</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="influence">Influence</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="benefit.amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="space-y-4 p-4 border rounded-md">
              <h4 className="font-medium text-sm">Resource Requirements</h4>
              
              <FormField
                control={form.control}
                name="cost.resource"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Resource Type</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select resource" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="energy">Energy</SelectItem>
                        <SelectItem value="matter">Matter</SelectItem>
                        <SelectItem value="life">Life</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="influence">Influence</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cost.amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full mt-6">
            <Check className="mr-2 h-4 w-4" />
            Submit Proposal
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProposalForm;
