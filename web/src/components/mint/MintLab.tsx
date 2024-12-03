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
import { Box } from '../ui/box';
import Hue from '@uiw/react-color-hue';
import { extractFloorColor, replaceFloorPlanks } from '@/services/SVGCombiner';
import Colorful from '@uiw/react-color-colorful';
import { ColorResult, hslaToHsva } from '@uiw/color-convert'


type MintLabProps = {
}

export default function MintLab(props: MintLabProps) {

    const { address } = useAccount();
    const { deploy } = useDeployment();

    const { data: image, isLoading: loadingImage } = useReadLabGenerateSvg({ address: deploy.lab, args: [BigInt(0)] });
    const [preview, setPreview] = useState<string>("");
    const { data: hash, error: writeError, writeContract } = useWriteLabMint();
    const { isLoading, isSuccess, data } = useWaitForTransactionReceipt({ hash })

    function floorChange(newHue: ColorResult) {

        let newSVG = replaceFloorPlanks(preview, newHue.hsl.h, newHue.hsl.s, newHue.hsl.l);

        setPreview(window.btoa(String(newSVG)));


    }

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
        setHsla(extractFloorColor(image));
        setPreview(window.btoa(String(image)));


    }, [image]);

    const [hsla, setHsla] = useState({ h: 0, s: 0, l: 68, a: 1 });
    // const [hsla, setHsla] = useState(extractFloorColor(image));


    return (
        <section id='hero' className='relative items-center pt-12'>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <Box className='mx-auto'>
                    <MintPreview preview={preview} />
                </Box>
                <Box>
                    <div> floor tiles</div>


                    <Colorful
                        className="mx-auto"
                        color={hslaToHsva(hsla)}
                        disableAlpha={true}
                        onChange={(color) => {
                            setHsla(color.hsla);
                            floorChange(color);

                        }}
                    />

                    {/* <Hue
                        hue={hsla.h}
                        onChange={(newHue) => {
                            floorChange(newHue.h);
                            // setHsva({ ...hsva, ...newHue });
                        }}
                    /> */}

                </Box>
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
