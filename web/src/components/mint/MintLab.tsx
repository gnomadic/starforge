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
import Hue from '@uiw/react-color-hue';
import { extractPlanetColors, replaceNoiseSeed, replacePlanet, replaceSkyGradients } from '@/services/SVGCombiner';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Box from '../box';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

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
        console.log("image: " + image);
        console.log("wat: ", window.btoa(String(image)));

        // const skyColors = extractSkyColors(image);
        // setSkyColorOne(skyColors[0]);
        // setSkyColorTwo(skyColors[1]);

        const planetColors = extractPlanetColors(image);
        setPlanetColorOne(planetColors[0]);
        setPlanetColorTwo(planetColors[1]);
        // setPlanetColorThree(planetColors[2]);

        // setEdgeColor(extractEdgeColor(image));
        // setStationColor(extractStationColor(image));
        setPreview(window.btoa(String(image)));


    }, [image]);

    // const [edgeColor, setEdgeColor] = useState(0);
    // const [stationColor, setStationColor] = useState(0);

    const [skyColorOne, setSkyColorOne] = useState(0);
    const [skyColorTwo, setSkyColorTwo] = useState(0);

    const [planetColorOne, setPlanetColorOne] = useState(0);
    const [planetColorTwo, setPlanetColorTwo] = useState(0);
    const [planetColorThree, setPlanetColorThree] = useState(0);

    const [noiseSeed, setNoiseSeed] = useState(0);

    function skyColorChange(colorOne: number, colorTwo: number) {
        let newSVG = replaceSkyGradients(preview, colorOne, colorTwo);
        setPreview(window.btoa(String(newSVG)));
    }

    function planetColorChange(colorOne: number, colorTwo: number, colorThree: number) {
        let newSVG = replacePlanet(preview, colorOne, colorTwo);
        setPreview(window.btoa(String(newSVG)));
    }

    function planetGenChange(noiseSeed: number) {
        let newSVG = replaceNoiseSeed(preview, noiseSeed);
        setPreview(window.btoa(String(newSVG)));
    }


    return (
        <section className="p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className='mx-auto'>
                    <MintPreview preview={preview} />
                </div>
                <div className='max-w-lg min-w-lg'>
                    <Tabs defaultValue="random" className="">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="random">random</TabsTrigger>
                            <TabsTrigger value="special">special</TabsTrigger>

                        </TabsList>

                        <TabsContent value="random" >
                            <Card>

                                <CardHeader>
                                    <CardTitle> Random Assignment  </CardTitle>
                                    <CardDescription className="flex justify-between">
                                        <div>
                                            {/* When you accept your assignment, you can perform one investment every 20 hours.  Your investments will result in resource allocation which you can use to serve the greater good. */}
                                            You will receive a random assignment of your next planetary operation.
                                        </div>

                                    </CardDescription>
                                </CardHeader>

                          
                                <div className='flex py-8'>
                                    {address ?
                                        <Button className='mx-auto px-12 py-4'
                                            onClick={() => writeContract({ address: deploy.lab, args: [address] })}
                                        >
                                            Accept Assignment 0.0025 ETH
                                        </Button>
                                        :
                                        <div className='mx-auto'><ConnectButton /></div>
                                    }
                                </div>
                            </Card>
                        </TabsContent>

                        <TabsContent value="special">
                            <Card>

                                <CardHeader>
                                    <CardTitle> Special Assignment  </CardTitle>
                                    <CardDescription className="flex justify-between">
                                        <div>
                                            {/* When you accept your assignment, you can perform one investment every 20 hours.  Your investments will result in resource allocation which you can use to serve the greater good. */}
                                            You will receive a special assignment of your next planetary operation, enabling you to define the requirements of an acceptable assignment.

                                        </div>

                                    </CardDescription>
                                </CardHeader>


                                <Box className='mx-12 py-4'>

                                    <div className='font-mono text-center'>

                                        Planet Colors</div>
                                    <div className='py-4 px-12'>
                                        <Hue
                                            hue={planetColorOne}
                                            onChange={(newHue) => {
                                                setPlanetColorOne(newHue.h);
                                                planetColorChange(newHue.h, planetColorTwo, planetColorThree);
                                            }}
                                        />
                                    </div>
                                    <div className='py-4 px-12'>
                                        <Hue
                                            hue={planetColorTwo}
                                            onChange={(newHue) => {
                                                setPlanetColorTwo(newHue.h);
                                                planetColorChange(planetColorOne, newHue.h, planetColorThree);
                                            }}
                                        />
                                    </div>
                                </Box>

                                <div className='py-4 px-12'>
                                        <Hue
                                            hue={noiseSeed}
                                            onChange={(newHue) => {
                                                setNoiseSeed(newHue.h);
                                                planetGenChange(newHue.h);
                                            }}
                                        />
                                    </div>

                                {/* 
<div className='py-4 px-12'>
<Hue
    hue={planetColorThree}
    onChange={(newHue) => {
        setPlanetColorThree(newHue.h);
        planetColorChange(planetColorOne, planetColorTwo, newHue.h);
    }}
/>
</div> */}
                                <div className='flex py-8'>
                                    {address ?
                                        <Button className='mx-auto px-12 py-4'
                                            onClick={() => writeContract({ address: deploy.lab, args: [address] })}
                                        >
                                            Accept Assignment 0.0025 ETH
                                        </Button>
                                        :
                                        <div className='mx-auto'><ConnectButton /></div>
                                    }
                                </div>
                            </Card>
                        </TabsContent>



                    </Tabs>


                </div>

            </div>








        </section>
    );
}
