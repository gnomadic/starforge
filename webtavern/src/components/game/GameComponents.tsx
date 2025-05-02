'use client'

import { useWriteGameFactoryCreateGame, useReadComponentRegistryGetComponents, useWriteGameFactoryCreateGameWithComponents } from '@/generated';
import useDeployment from '@/hooks/useDeployment';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import ChooseModule from '../create/ChooseModule';
import { useEffect, useState } from 'react';
import { Address, getAddress } from 'viem';
import { WriteIPFS } from '@/mutations/WriteIPFS';
import { toast } from 'react-toastify';
import { GameSummary } from '@/domain/Domain';


type StepThreeProps = {
    gameAddress: Address
    summary: GameSummary

}

export default function GameComponents(props: StepThreeProps) {
    const { deploy } = useDeployment();
    const { address } = useAccount()
    const { data: currentModules, error: curError } = useReadComponentRegistryGetComponents({ address: deploy.componentRegistry, args: [0] })

    // const { isPending: createGameisPending } = useWriteGameFactoryCreateGame();

    const [selectedComponents, setSelectedComponents] = useState<Address[]>([]);

    // const { data: hash, error: writeError, writeContract } = useWriteGameFactoryCreateGameWithComponents();
    // const { isLoading, isSuccess, data } = useWaitForTransactionReceipt({ hash })

    // useEffect(() => {
    //     if (writeError) {
    //         toast.error(writeError.message);
    //     }

    //     if (isLoading) {
    //         toast.info("Transaction is pending");

    //     }
    //     if (isSuccess) {
    //         toast.success("Transaction is successful");
    //     }

    // }, [writeError, isLoading, isSuccess]);




    // async function handleCreateGame(e: React.FormEvent<HTMLFormElement>) {

    //     e.preventDefault();
    //     toast.info(`Uploading metadata to IPFS`);

    //     const gameName = (e.currentTarget.elements.namedItem('gameName') as HTMLInputElement).value;
    //     const gm = (e.currentTarget.elements.namedItem('gm') as HTMLInputElement).value;
    //     const description = (e.currentTarget.elements.namedItem('description') as HTMLInputElement).value;
    //     const gameURL = (e.currentTarget.elements.namedItem('gameURL') as HTMLInputElement).value;

    //     const components = selectedComponents;

    //     console.log(gameName, gm, description, gameURL, components);

    //     const response = await WriteIPFS(gameName, description, gameURL);
    //     // console.log( JSON.stringify(await response.json()));
    //     const ipfsJSON = await response.json();
    //     toast.success(`Uploaded metadata!`);


    //     const ipfsURL = `https://ipfs.io/ipfs/${ipfsJSON.IpfsHash}`

    //     writeContract({ address: deploy.gameFactory, args: [getAddress(gm), ipfsURL, components] });



    //     // const { createGame, isPending: createGameisPending, hash: createGameHash, isConfirming, isConfirmed, error: createGameError } = useWriteGameFactoryCreateGame();

    //     // createGame(gameName, gm, description, gameURL, components);
    // }




    return (
        <section id='hero' className='relative'>
            <div className='p-4 text-2xl'>
                Components
            </div>
            <div className='grid grid-cols-1 gap-8 mx-12 md:grid-cols-2 py-8'>
                {Array.from({ length: currentModules?.length as number }).map((object, i) => {
                    if (currentModules![i].component !== '0x0000000000000000000000000000000000000000') {

                        return (
                            <ChooseModule
                                key={i}
                                index={i}
                                address={currentModules![i].component!}
                                metadata={currentModules![i].metadata!}
                                selected={selectedComponents}
                                setSelected={(address) => {
                                    if (selectedComponents.includes(address)) {
                                        setSelectedComponents(selectedComponents.filter((a) => a !== address));
                                    } else {
                                        setSelectedComponents([...selectedComponents, address]);
                                    }

                                }}
                                active={props.summary.components as Address[]}
                            />
                        );
                    }
                })}
            </div>

        </section>


    );
}
