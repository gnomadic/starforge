"use client";

import Image from 'next/image';
import placeholder from "@/images/cardback.png";
import { useReadLabGenerateSvg, useWriteLabMint } from '@/generated';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { Button } from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useDeployment from '@/hooks/useDeployment';
import MintPreview from './MintPreview';

type MintLabProps = {
}

export default function MintLab(props: MintLabProps) {

    const { address } = useAccount();
    const { deploy } = useDeployment();

    const { data: image, isLoading: loadingImage } = useReadLabGenerateSvg({ address: deploy.lab, args: [BigInt(0)] });
    const [preview, setPreview] = useState<string>("");
    const { data: hash, error: writeError, writeContract } = useWriteLabMint();
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





    useEffect(() => {
        if (image == undefined) {
            return;
        }
        // console.log("image: " + image);
        // console.log("wat: ", window.btoa(String(image)));
        setPreview(window.btoa(String(image)));


    }, [image]);

    return (
        <section id='hero' className='relative items-center'>
            <section className="grid grid-cols-2 gap-8">
                <MintPreview preview={preview} />
                <section id='connect' className='relative pt-48 items-center'>
                   Mint your lab, and start your adventure.
                </section>
            </section>





      
            <div className='flex pt-8'>


                {address ?
                    <Button className='mx-auto'
                        onClick={() => writeContract({ address: deploy.lab, args: [address] })}
                        >
                        mint
                    </Button>
                    :
                    <div className='mx-auto'><ConnectButton /></div>
                }



            </div>
        </section>
    );
}
