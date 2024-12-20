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
import { extractEdgeColor, extractPlanetColors, extractSkyColors, extractStationColor, replaceNetworkEdges, replacePlanet, replaceSky, replaceSkyGradients, replaceStationFrame } from '@/services/SVGCombiner';
import Colorful from '@uiw/react-color-colorful';
import { ColorResult, hslaToHsva } from '@uiw/color-convert'
import { Card } from '../ui/card';


type MintLabProps = {
}

export default function MintLab(props: MintLabProps) {

    const { address } = useAccount();
    const { deploy } = useDeployment();

    const { data: image, isLoading: loadingImage } = useReadLabGenerateSvg({ address: deploy.lab, args: [BigInt(0)] });
    const [preview, setPreview] = useState<string>("");
    const { data: hash, error: writeError, writeContract } = useWriteLabMint();
    const { isLoading, isSuccess, data } = useWaitForTransactionReceipt({ hash })

    function edgeChange(newHue: number) {
        let newSVG = replaceNetworkEdges(preview, newHue);
        setPreview(window.btoa(String(newSVG)));
    }

    function stationChange(newHue: number) {
        let newSVG = replaceStationFrame(preview, newHue);
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
        const skyColors = extractSkyColors(image);
        setSkyColorOne(skyColors[0]);
        setSkyColorTwo(skyColors[1]);

        const planetColors = extractPlanetColors(image);
        setPlanetColorOne(planetColors[0]);
        setPlanetColorTwo(planetColors[1]);
        setPlanetColorThree(planetColors[2]);

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

    function skyColorChange(colorOne: number, colorTwo: number) {
        let newSVG = replaceSkyGradients(preview, colorOne, colorTwo);
        setPreview(window.btoa(String(newSVG)));
    }

    function planetColorChange(colorOne: number,colorTwo: number, colorThree: number ) {
        let newSVG = replacePlanet(preview, colorOne, colorTwo, colorThree);
        setPreview(window.btoa(String(newSVG)));
    }


    return (
        <section id='hero' className='relative items-center pt-12'>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <Card className='mx-auto'>
                    <MintPreview preview={preview} />
                </Card>
                <Card>
                    <div> Sky Colors</div>
                    <div className='py-4 px-12'>
                        <Hue
                            hue={skyColorOne}
                            onChange={(newHue) => {
                                // setEdgeColor(newHue.h);
                                setSkyColorOne(newHue.h);
                                skyColorChange(newHue.h, skyColorTwo);
                                // edgeChange(newHue.h);
                            }}
                        />
                    </div>

                    <div className='py-4 px-12'>
                        <Hue
                            hue={skyColorTwo}
                            onChange={(newHue) => {
                                // setEdgeColor(newHue.h);
                                setSkyColorTwo(newHue.h);
                                skyColorChange(skyColorOne, newHue.h);
                                // edgeChange(newHue.h);
                            }}
                        />
                    </div>

                    <div> Planet Colors</div>
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


                    <div className='py-4 px-12'>
                        <Hue
                            hue={planetColorThree}
                            onChange={(newHue) => {
                                setPlanetColorThree(newHue.h);
                                planetColorChange(planetColorOne, planetColorTwo, newHue.h);
                            }}
                        />
                    </div>
                </Card>
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
