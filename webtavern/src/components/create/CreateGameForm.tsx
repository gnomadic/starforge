'use client'

import { useWriteGameFactoryCreateGame, useWriteGameFactoryCreateGameWithComponents } from '@/generated';
import useDeployment from '@/hooks/useDeployment';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { useEffect } from 'react';
import { Address } from 'viem';
import { WriteIPFS } from '@/mutations/WriteIPFS';
import { toast } from 'react-toastify';
import { ConnectButton } from '@rainbow-me/rainbowkit';



type Props = {
    selectedComponents: Address[];
}

export default function CreateGameForm(props: Props) {

    const { deploy } = useDeployment();
    const { address } = useAccount()

    const { isPending: createGameisPending } = useWriteGameFactoryCreateGame();

    const { data: hash, error: writeError, writeContract } = useWriteGameFactoryCreateGameWithComponents();
    const { isLoading, isSuccess, data } = useWaitForTransactionReceipt({ hash })

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
        toast.info(`Uploading metadata to IPFS`);

        const gameName = (e.currentTarget.elements.namedItem('gameName') as HTMLInputElement).value;
        const gm = address
        const description = (e.currentTarget.elements.namedItem('description') as HTMLInputElement).value;
        const gameURL = (e.currentTarget.elements.namedItem('gameURL') as HTMLInputElement).value;

        const components = props.selectedComponents;

        console.log(gameName, gm, description, gameURL, components);

        const response = await WriteIPFS(gameName, description, gameURL);
        // console.log( JSON.stringify(await response.json()));
        const ipfsJSON = await response.json();
        toast.success(`Uploaded metadata!`);


        const ipfsURL = `https://ipfs.io/ipfs/${ipfsJSON.IpfsHash}`

        writeContract({ address: deploy.gameFactory, args: [(gm!), ipfsURL, components] });
    }



    return (
        <section className='relative min-h-[500px] md:min-h-[500px]' >
            <div className='p-4 text-2xl'>
                Create a new game
            </div>
            {/* <div>{props.selectedComponents}</div> */}

            <form onSubmit={handleCreateGame} className=''>
                <div className="grid grid-cols-1 gap-0">
                    <div className='px-4'>
                        <label htmlFor="gameName" className="text-lg font-outfit">
                            Game Name
                        </label>
                        <input type="text"
                            id="gameName"
                            className="w-full p-2.5 bg-darkgrey active:bg-darkgrey my-4 focus:ring-selected focus:border-selected"
                            autoComplete='off'
                            placeholder="my cool game" />
                    </div>
                    <div className='px-4'>
                        <label htmlFor="description" className="text-lg font-outfit">
                            Description
                        </label>
                        <textarea id="description"
                            className="w-full p-2.5 bg-darkgrey my-4 focus:ring-selected focus:border-selected"
                            autoComplete='off'
                            placeholder="how would you describe your game?" />
                    </div>
                    <div className='px-4'>
                        <label htmlFor="gameURL" className="text-lg font-outfit">
                            Website
                        </label>
                        <input type='text'
                            id="gameURL"
                            className="w-full p-2.5 bg-darkgrey active:bg-darkgrey my-4 focus:ring-selected focus:border-selected"
                            autoComplete='off'
                            placeholder="Where can people learn more?" />
                    </div>
                    <div className='px-4'>
                        <label htmlFor="gameURL" className="text-lg font-outfit">
                            Network and Game Manager
                        </label>
                        <div className='pt-4'>
                            <ConnectButton
                                chainStatus={"full"}
                                accountStatus={'avatar'}
                                showBalance={false}
                            />
                        </div>
                    </div>
                </div>

                <div className='flex p-4 mt-4 inset-x-1'>
                    <button
                        className='flex-grow py-2 mx-auto text-black rounded-md basis-0 bg-tavernOrange'
                        disabled={createGameisPending}
                        type="submit">
                        {createGameisPending ? 'Confirming...' : `Launch`}
                    </button>
                </div>

            </form>
        </section>
    );
}
