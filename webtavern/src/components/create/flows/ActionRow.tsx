'use client'

import { useWriteGameFactoryCreateGame, useReadComponentRegistryGetComponents, useWriteGameFactoryCreateGameWithComponents, useReadGameGetSummary } from '@/generated';
import useDeployment from '@/hooks/useDeployment';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { useEffect, useState } from 'react';
import { Address, getAddress } from 'viem';
import { WriteIPFS } from '@/mutations/WriteIPFS';
import { toast } from 'react-toastify';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useMultipleRequests, {  getMetadataURLsFromGame, useMetadataBatch } from '@/hooks/useMetadata';
import { bigIntReplacer } from '@/domain/utils';
import { ComponentMetadata } from '@/domain/Domain';

type props = {
    removeActionRow: (index: number) => void,
    index: number
    action: { address: `0x${string}`; func: string; }
    batch: ComponentMetadata[]
    updateAction: (index: number, comp: number, func: number ) => void

}

export default function ActionRow(props: props) {

    const { deploy } = useDeployment();
    const { address } = useAccount()
    const { data: currentModules, error: curError } = useReadComponentRegistryGetComponents({ address: deploy.componentRegistry, args: [0] })

    const { isPending: createGameisPending } = useWriteGameFactoryCreateGame();

    const [selectedComponents, setSelectedComponents] = useState<Address[]>([]);

    const { data: hash, error: writeError, writeContract } = useWriteGameFactoryCreateGameWithComponents();
    const { isLoading, isSuccess, data } = useWaitForTransactionReceipt({ hash })

    // const { data: summary } = useReadGameGetSummary({ address: props.address as Address });
    // const { batch } = useMetadataBatch(getMetadataURLsFromGame(summary));




    async function handleCreateGame(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();


        // fetcher2("ok", "one", "two", "three", "four");
        toast.info(`Uploading metadata to IPFS`);

        // const gameName = (e.currentTarget.elements.namedItem('gameName') as HTMLInputElement).value;
        // const gm = (e.currentTarget.elements.namedItem('gm') as HTMLInputElement).value;
        // const description = (e.currentTarget.elements.namedItem('description') as HTMLInputElement).value;
        // const gameURL = (e.currentTarget.elements.namedItem('gameURL') as HTMLInputElement).value;

        // const components = selectedComponents;

        // console.log(gameName, gm, description, gameURL, components);

        // const response = await WriteIPFS(gameName, description, gameURL);
        // // console.log( JSON.stringify(await response.json()));
        // const ipfsJSON = await response.json();
        // toast.success(`Uploaded metadata!`);


        // const ipfsURL = `https://ipfs.io/ipfs/${ipfsJSON.IpfsHash}`

        // writeContract({ address: deploy.gameFactory, args: [getAddress(gm), ipfsURL, components] });



        // const { createGame, isPending: createGameisPending, hash: createGameHash, isConfirming, isConfirmed, error: createGameError } = useWriteGameFactoryCreateGame();

        // createGame(gameName, gm, description, gameURL, components);
    }

    const [selectedComponent, setSelectedComponent] = useState(props.batch[0].name)
    const [selectedFunction, setSelectedFunction] = useState(props.batch[0].gameFunctions[0].name)

    const [compIndex, setCompIndex] = useState(0)
    const [funcIndex, setFuncIndex] = useState(0)

    function handleChangeComp(event: React.ChangeEvent<HTMLSelectElement>) {
        let newIndex = Number.parseInt(event.target.value);
        
        setCompIndex(newIndex);

        props.updateAction(props.index, newIndex, funcIndex);
    }

    function handleChangeFunc(event: React.ChangeEvent<HTMLSelectElement>) {
        let newIndex = Number.parseInt(event.target.value);

        setFuncIndex(newIndex);

        props.updateAction(props.index, compIndex, newIndex);

    }




    return (
        <div className='flex pt-4'>
            <div className='px-4 basis-[45%]'>
                <label htmlFor="component" className="text-lg font-outfit">
                    Component {compIndex}
                </label>
                <select
                    id="component"
                    name="component"
                    onChange={handleChangeComp}
                    className="w-full p-2.5 bg-darkgrey active:bg-darkgrey my-4 focus:ring-selected focus:border-selected"
                >
                    {props.batch.map((entry, i) =>
                        <option key={i} value={i}>{entry.name}</option>
                    )}

                </select>
            </div>
            <div className='px-4 basis-[45%]'>
                <label htmlFor="component" className="text-lg font-outfit">
                    Function {funcIndex}
                </label>
                <select
                    id="component" name="component"
                    className="w-full p-2.5 bg-darkgrey active:bg-darkgrey my-4 focus:ring-selected focus:border-selected"
                    onChange={handleChangeFunc}

                >
                    {props.batch[compIndex].gameFunctions.map((entry, i) =>
                        <option key={i} value={i}>{entry.name}</option>
                    )}

                </select>
            </div>
            <div className='px-4 basis-[10%]'>
                <div
                    className='p-5 mt-10 border-2 border-selected text-selected rounded-md text-center relative'
                onClick={() => props.removeActionRow(props.index)}
                >
                    <div className='text-xl top-1/2 right-1/2 absolute -translate-y-1/2'>
                        -
                    </div>
                </div>
            </div>
        </div>
    );
}
