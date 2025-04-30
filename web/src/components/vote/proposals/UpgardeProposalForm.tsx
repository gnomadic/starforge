


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
import { Address } from 'viem';
import { useWriteDungeonMaster, useWriteDungeonMasterSubmitProposal } from '@/generated';
import { getTokenAddress, useDeployment } from '@/hooks/useDeployment';
import { useWaitForTransactionReceipt } from 'wagmi';





const upgradeProposalFormSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    costRate: z.array(z.number().min(0, "Cost rate must be at least 0")),
    costToken: z.array(z.string().min(1, "Cost token must be a valid address")),
    benefitRate: z.array(z.number().min(0, "Benefit rate must be at least 0")),
    benefitToken: z.array(z.string().min(1, "Benefit token must be a valid address")),
});

type upgradeProposalFormValues = z.infer<typeof upgradeProposalFormSchema>;

const UpgradeProposalForm = () => {
    //   const { toast } = useToast();

    const form = useForm<upgradeProposalFormValues>({
        resolver: zodResolver(upgradeProposalFormSchema),
        defaultValues: {
            name: "",
            description: "",
            costRate: [],
            costToken: [],
            benefitRate: [],
            benefitToken: [],
        },
    });

    const {deploy} = useDeployment();

    const { data: hash, error: writeError, writeContract } = useWriteDungeonMasterSubmitProposal();
    const { isLoading, isSuccess, data } = useWaitForTransactionReceipt({ hash })

    const onSubmit = async (data: upgradeProposalFormValues) => {
        try {
            console.log("Proposal submitted:", data);

            // Validate data against schema
            const validatedData = upgradeProposalFormSchema.parse(data);

            const costTokenAddresses = validatedData.costToken.map((token) => {
                const tokenAddress = getTokenAddress(token);
                if (!tokenAddress) {
                    throw new Error(`Invalid token address for ${token}`);
                }
                return tokenAddress as Address;
            });

            const benefitTokenAddresses = validatedData.benefitToken.map((token) => {
                const tokenAddress = getTokenAddress(token);
                if (!tokenAddress) {
                    throw new Error(`Invalid token address for ${token}`);
                }
                return tokenAddress as Address;
            });

            // Encode the payload using viem
            const payload = {
                name: validatedData.name,
                description: validatedData.description,
                benefitToken: benefitTokenAddresses,
                benefitRate: validatedData.benefitRate,
                costToken: costTokenAddresses,
                costRate: validatedData.costRate,
            }; const encodedPayload = await import('viem').then(({ encodeAbiParameters }) =>
                encodeAbiParameters(
                    [
                        { type: 'string', name: 'name' },
                        { type: 'string', name: 'description' },
                        { type: 'string[]', name: 'benefitToken' },
                        { type: 'uint256[]', name: 'benefitRate' },
                        { type: 'string[]', name: 'costToken' },
                        { type: 'uint256[]', name: 'costRate' },
                    ],
                    [
                        payload.name,
                        payload.description,
                        payload.benefitToken,
                        payload.benefitRate.map(BigInt),
                        payload.costToken,
                        payload.costRate.map(BigInt),
                    ]
                )
            );
            console.log("Encoded payload:", encodedPayload);

            // Submit the transaction (uncomment and configure when ready)
            // submitProposalTx({
            //   args: [
            //     deploy?.dungeonMaster || '0x0000000000000000000000000000000000000000', // Replace with actual target
            //     encodedPayload,
            //   ],
            // });

            writeContract({ address: deploy.DungeonMaster, args: [deploy.UpgradesSystem, encodedPayload] })

            toast.success("Proposal Submitted");
            form.reset();
        } catch (error) {
            console.error("Error submitting proposal:", error);
            toast.error("Failed to submit proposal");
        }
    }; return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Submit Council Proposal</h3>
                <p className="text-sm text-muted-foreground">
                    Submit your ideas to the Cosmic Council for consideration. Approved proposals will be added to active initiatives.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* <FormField
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
                    /> */}

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

                            {form.watch("benefitToken").map((_, index) => (
                                <div key={index} className="grid grid-cols-5 gap-4">
                                    <FormField

                                        control={form.control}
                                        name={`benefitToken.${index}`}
                                        render={({ field }) => (


                                            <FormItem className='col-span-2'>
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
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`benefitRate.${index}`}
                                        render={({ field }) => (
                                            <FormItem className='col-span-2'>
                                                <FormLabel>Benefit Rate</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        placeholder="Enter the rate of benefit"
                                                        value={field.value || ""}
                                                        onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : "")}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        onClick={() => {
                                            const currentTokens = form.getValues("benefitToken");
                                            const currentRates = form.getValues("benefitRate");
                                            form.setValue(
                                                "benefitToken",
                                                currentTokens.filter((_, i) => i !== index)
                                            );
                                            form.setValue(
                                                "benefitRate",
                                                currentRates.filter((_, i) => i !== index)
                                            );
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            ))}

                            <Button
                                type="button"
                                onClick={() => {
                                    const currentTokens = form.getValues("benefitToken");
                                    const currentRates = form.getValues("benefitRate");
                                    form.setValue("benefitToken", [...currentTokens, ""]);
                                    form.setValue("benefitRate", [...currentRates, 0]);
                                }}
                                className="w-full mt-4"
                            >
                                Add Benefit
                            </Button>
                        </div>
                        <div className="space-y-4 p-4 border rounded-md">
                            <h4 className="font-medium text-sm">Resource Requirements</h4>

                            {form.watch("costToken").map((_, index) => (
                                <div key={index} className="grid grid-cols-5 gap-4">
                                    <FormField
                                        control={form.control}
                                        name={`costToken.${index}`}
                                        render={({ field }) => (
                                            <FormItem className='col-span-2'>
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
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name={`costRate.${index}`}
                                        render={({ field }) => (
                                            <FormItem className='col-span-2'>
                                                <FormLabel>Amount</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        min="0"
                                                        value={field.value || ""}
                                                        onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : "")}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="button"
                                        variant="destructive"
                                        onClick={() => {
                                            const currentTokens = form.getValues("costToken");
                                            const currentRates = form.getValues("costRate");
                                            form.setValue(
                                                "costToken",
                                                currentTokens.filter((_, i) => i !== index)
                                            );
                                            form.setValue(
                                                "costRate",
                                                currentRates.filter((_, i) => i !== index)
                                            );
                                        }}
                                    >
                                        Delete
                                    </Button>   </div>
                            ))}

                            <Button
                                type="button"
                                onClick={() => {
                                    const currentTokens = form.getValues("costToken");
                                    const currentRates = form.getValues("costRate");
                                    form.setValue("costToken", [...currentTokens, ""]);
                                    form.setValue("costRate", [...currentRates, 0]);
                                }}
                                className="w-full mt-4"
                            >
                                Add Resource Requirement
                            </Button>
                        </div>   </div>

                    <Button type="submit" className="w-full mt-6">
                        <Check className="mr-2 h-4 w-4" />
                        Submit Proposal
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default UpgradeProposalForm;
