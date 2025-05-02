'use client'

import { useWriteGameFactoryCreateGame, useReadComponentRegistryGetComponents, useReadGameGetSummary, useWriteGameCreateFlow } from '@/generated';
import useDeployment from '@/hooks/useDeployment';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { useEffect, useState } from 'react';
import { Address } from 'viem';
import { toast } from 'react-toastify';
import { getMetadataURLsFromGame, useMetadataBatch } from '@/hooks/useMetadata';
import ActionRow from './ActionRow';

type props = {
    address: Address,
    chainid: string

}

export default function CreateFlow(props: props) {

    const { deploy } = useDeployment();

    const { data: hash, error: writeError, writeContract } = useWriteGameCreateFlow();
    const { isLoading, isSuccess, data } = useWaitForTransactionReceipt({ hash })

    const { data: summary } = useReadGameGetSummary({ address: props.address as Address });
    const { batch } = useMetadataBatch(getMetadataURLsFromGame(summary));

    useEffect(() => {
        if (writeError) {
            toast.error(writeError.message);
        }

        if (isLoading) {
            toast.info("Transaction is pending");

        }
        if (isSuccess) {
            toast.success("Transaction is successful");
        }

    }, [writeError, isLoading, isSuccess]);

    async function handleCreateGame(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        const flowName = (e.currentTarget.elements.namedItem('flowName') as HTMLInputElement).value;

        let keys: { name: string, value: Address }[] = [];

        actions.forEach((action) => {

            keys.push({ name: action.func, value: action.address });
        });

        writeContract({ address: props.address, args: [flowName, keys] });
    }



    function addActionRow() {
        setActions([...actions, {
            address: summary?.componentSummaries[0].component as Address,
            func: batch[0].gameFunctions[0].abi
        }])
    }

    function removeActionRow(index: number) {
        const newActions = [...actions];
        newActions.splice(index, 1);
        setActions(newActions);
    }

    function updateAction(index: number, component: number, func: number) {
        const newActions = [...actions];
        console.log('updating action', index, component, func);
        newActions[index] = {
            address: summary?.componentSummaries[component].component as Address,
            func: batch[component].gameFunctions[func].abi
        };
        setActions(newActions);
    }

    const [actions, setActions] = useState<{ address: Address, func: string }[]>([]);


    return (
        <section className='px-8 py-20 md:px-24 lg:px-40'>
            <div className="border border-white border-dashed ">
                <div className='p-4 text-2xl'>
                    Create Flow
                </div>
                <form onSubmit={handleCreateGame} className=''>
                    <div className="grid grid-cols-1 gap-0">
                        <div className='px-4'>
                            <label htmlFor="flowName" className="text-lg font-outfit">
                                Flow Name
                            </label>
                            <input type="text" id="flowName" className="w-full p-2.5 bg-darkgrey active:bg-darkgrey my-4 focus:ring-selected focus:border-selected" placeholder="my cool flow" />
                        </div>

                        <div className="px-4 text-lg font-outfit">
                            Functions
                        </div>

                        {actions.map((action, i) =>
                            <ActionRow key={i}
                                index={i}
                                removeActionRow={removeActionRow}
                                action={action}
                                batch={batch}
                                updateAction={updateAction}
                            />
                        )}

                        <div
                            className='relative py-6 mx-4 mt-4 text-center border-2 rounded-md border-selected text-selected'
                            onClick={addActionRow}>
                            <div className='absolute text-4xl -translate-y-1/2 top-1/2 right-1/2'>
                                +
                            </div>
                        </div>
                    </div>

                    <div className='flex p-4 mt-4 inset-x-1'>
                        <button
                            className='flex-grow py-2 mx-auto text-black rounded-md basis-0 bg-tavernOrange'
                            disabled={isLoading}
                            type="submit">
                            {isLoading ? 'Confirming...' : `Create`}
                        </button>
                    </div>

                    {/* <div>
                        {JSON.stringify(actions, bigIntReplacer)}
                    </div>

 */}

                </form>
            </div>
        </section>
    );
}
