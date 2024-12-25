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
import { extractNoiseSeed, extractPlanetColors, extractPlanetSL, replaceNoiseSeed, replacePlanet, replacePlanetSL } from '@/services/SVGCombiner';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Box from '../box';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { RotateCcw } from 'lucide-react';
import ShadeSlider from '@uiw/react-color-shade-slider';
import Slider from '@uiw/react-color-slider';
import HueControl from './HueControl';


type MintLabProps = {
}

export default function MintLab(props: MintLabProps) {

    const { address } = useAccount();
    const { deploy } = useDeployment();

    const { data: image, isLoading: loadingImage } = useReadLabGenerateSvg({ address: deploy.lab, args: [BigInt(0)] });
    const [preview, setPreview] = useState<string>("");
    const { data: hash, error: writeError, writeContract } = useWriteLabMint();
    const { isLoading, isSuccess, data } = useWaitForTransactionReceipt({ hash })

    const [satLight, setSatLight] = useState({ sat: 25, light: 80, meter: 80 });

    const satLightDefs = [
        { sat: 25, light: 80, meter: 80 },
        { sat: 47, light: 58, meter: 65 },
        { sat: 30, light: 50, meter: 50 },
        { sat: 32, light: 46, meter: 35 },
        { sat: 66, light: 35, meter: 20 },

    ]


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
        if (image == undefined || image == "") {
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

        setOriginalColorOne(planetColors[0]);
        setOriginalColorTwo(planetColors[1]);

        const noise = extractNoiseSeed(image);
        setOriginalSeed(Number(noise));
        setNoiseSeed(Number(noise));

        // const planetSatLight = extractPlanetSL(image);
        // setSatLight({sat: planetSatLight[0], light: planetSatLight[1], meter: 80});
        // setPlanetColorThree(planetColors[2]);

        // setEdgeColor(extractEdgeColor(image));
        // setStationColor(extractStationColor(image));
        setPreview(window.btoa(String(image)));


    }, [image]);

    // const [edgeColor, setEdgeColor] = useState(0);
    // const [stationColor, setStationColor] = useState(0);



    const [originalColorOne, setOriginalColorOne] = useState(0);
    const [originalColorTwo, setOriginalColorTwo] = useState(0);
    const [planetColorOne, setPlanetColorOne] = useState(0);
    const [planetColorTwo, setPlanetColorTwo] = useState(0);
    // const [planetSat, setPlanetSat] = useState(0);
    // const [planetLight, setPlanetLight] = useState(0);

    const [noiseSeed, setNoiseSeed] = useState(0);
    const [originalSeed, setOriginalSeed] = useState(0);


    function planetColorChange(colorOne: number, colorTwo: number, sat: number, light: number) {
        // let newSVG = replacePlanet(preview, colorOne, colorTwo, 47, 58);
        // let newSVG = replacePlanet(preview, colorOne, colorTwo, 32, 46);
        // let newSVG = replacePlanet(preview, colorOne, colorTwo, 66, 35);
        // let newSVG = replacePlanet(preview, colorOne, colorTwo, 25, 80);
        // let newSVG = replacePlanet(preview, colorOne, colorTwo, 30, 50);


        // let newSVG = replacePlanet(preview, colorOne, colorTwo, sat, light);

        let newSVG = replacePlanet(preview, colorOne, colorTwo, sat, light);

        // newSVG = replacePlanetSL(newSVG, sat, light);
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


                                <Box className='mx-12 py-4 font-mono'>
                                    {/* <p className="py-2 px-5">Primary Color</p>
                                    <div className="flex mx-auto px-2 ">
                                        <div
                                            className=" border-black border-[2px] mr-4"
                                            onClick={() => {
                                                //   resetFirstColor();
                                            }}
                                        >

                                            <RotateCcw className='w-10 h-10 mx-auto ' />

                                        </div>

                                        <div className="flex-auto p-3 border-black border-[2px] mx-auto">
                                            <Hue
                                                hue={planetColorOne}
                                                onChange={(newHue) => {
                                                    setPlanetColorOne(newHue.h);
                                                    planetColorChange(newHue.h, planetColorTwo, satLight.sat, satLight.light);
                                                }}
                                            />
                                        </div>
                                    </div> */}

                                    <HueControl
                                        reset={() => {
                                            setPlanetColorOne(originalColorOne);
                                            planetColorChange(originalColorOne, planetColorTwo, satLight.sat, satLight.light);
                                         }}
                                        title="Primary Color"
                                        value={planetColorOne}
                                        newHue={(h) => {
                                            setPlanetColorOne(h);
                                            planetColorChange(h, planetColorTwo, satLight.sat, satLight.light);
                                        }}
                                    />

                                    {/* <p className="py-2 px-5">Secondary Color</p>
                                    <div className="flex mx-auto px-2 ">
                                        <div
                                            className=" border-black border-[2px] mr-4"
                                            onClick={() => {
                                                //   resetFirstColor();
                                            }}
                                        >

                                            <RotateCcw className='w-10 h-10 mx-auto ' />

                                        </div>

                                        <div className="flex-auto p-3 border-black border-[2px] mx-auto">
                                            <Hue
                                                hue={planetColorTwo}
                                                onChange={(newHue) => {
                                                    setPlanetColorTwo(newHue.h);
                                                    planetColorChange(planetColorOne, newHue.h, satLight.sat, satLight.light);
                                                }}
                                            />
                                        </div>
                                    </div> */}

                                    <HueControl
                                        reset={() => { }}
                                        title="Secondary Color"
                                        value={planetColorTwo}
                                        newHue={(h) => {
                                            setPlanetColorTwo(h);
                                            planetColorChange(planetColorOne, h, satLight.sat, satLight.light);
                                        }}
                                    />

                                    <p className="py-2 px-5">Saturation</p>
                                    <div className="flex mx-auto px-2 ">
                                        <div
                                            className=" border-black border-[2px] mr-4"
                                            onClick={() => {
                                                //   resetFirstColor();
                                            }}
                                        >

                                            <RotateCcw className='w-10 h-10 mx-auto ' />

                                        </div>

                                        <div className="flex-auto p-3 border-black border-[2px] mx-auto">
                                            <Slider
                                                color={{ h: planetColorOne, s: 100, v: 100, a: 1 }}
                                                onChange={(color) => {
                                                    // setHsva({ ...hsva, ...color.hsv });
                                                    console.log("color: ", color);
                                                    const meter = color.hsl.l;
                                                    const SL = satLightDefs.find((sl) => (sl.meter) == Math.round(meter));
                                                    setSatLight(SL!);


                                                    planetColorChange(planetColorOne, planetColorTwo, SL!.sat, SL!.light);

                                                }}
                                            />
                                            {/* <Hue
                                                hue={planetSat}
                                                onChange={(newHue) => {
                                                    // setPlanetColorOne(newHue.h);
                                                    setPlanetSat(newHue.h);
                                                    planetColorChange(planetColorOne, planetColorTwo, newHue.h, planetLight);
                                                }}
                                            /> */}
                                        </div>
                                    </div>

                                    {/* <p className="py-2 px-5">Lightness Color</p> */}
                                    {/* <div className="flex mx-auto px-2 ">
                                        <div
                                            className=" border-black border-[2px] mr-4"
                                            onClick={() => {
                                                //   resetFirstColor();
                                            }}
                                        >

                                            <RotateCcw className='w-10 h-10 mx-auto ' />

                                        </div> */}

                                    {/* <div className="flex-auto p-3 border-black border-[2px] mx-auto"> */}
                                    {/* <Hue
                                                hue={planetColorOne}
                                                onChange={(newHue) => {
                                                    setPlanetColorOne(newHue.h);
                                                    planetColorChange(newHue.h, planetColorTwo, planetSat, newHue.h);
                                                }}
                                            /> */}
                                    {/* 
                                            <Hue
                                                hue={planetLight}
                                                onChange={(newHue) => {
                                                    // setPlanetColorOne(newHue.h);
                                                    setPlanetLight(newHue.h);
                                                    planetColorChange(planetColorOne, planetColorTwo, planetSat, newHue.h);
                                                }}
                                            /> */}

                                    {/* <ShadeSlider

                                                hsva={{ h: planetColorOne, s: planetSat, v: planetLight, a: 1 }}
                                                onChange={(newShade) => {
                                                    // setHsva({ ...hsva, ...newShade });
                                                    setPlanetLight(newShade.v);
                                                    planetColorChange(planetColorOne, planetColorTwo, planetSat, newShade.v);

                                                }}
                                            /> */}
                                    {/* </div> */}
                                    {/* </div> */}

                                    <p className="py-2 px-5">Terrain</p>
                                    <div className="flex mx-auto px-2 ">
                                        <div
                                            className=" border-black border-[2px] mr-4"
                                            onClick={() => {
                                                //   resetFirstColor();
                                            }}
                                        >

                                            <RotateCcw className='w-10 h-10 mx-auto ' />

                                        </div>

                                        <div className="flex-auto p-3 border-black border-[2px] mx-auto">
                                            <Hue
                                                hue={noiseSeed}
                                                onChange={(newHue) => {
                                                    setNoiseSeed(newHue.h);
                                                    planetGenChange(newHue.h);
                                                }}
                                            />
                                        </div>
                                    </div>


                                    {/* <div className='py-4 px-12'>

                                        <p >primary</p>

                                        <RotateCcw />
                                        <Hue
                                            hue={planetColorOne}
                                            onChange={(newHue) => {
                                                setPlanetColorOne(newHue.h);
                                                planetColorChange(newHue.h, planetColorTwo);
                                            }}
                                        />
                                    </div> */}
                                    {/* <div className='py-4 px-12'>
                                        <Hue
                                            hue={planetColorTwo}
                                            onChange={(newHue) => {
                                                setPlanetColorTwo(newHue.h);
                                                planetColorChange(planetColorOne, newHue.h);
                                            }}
                                        />
                                    </div> */}
                                </Box>
                                {/* 
                                <Box className='mx-12 py-4 mt-6'>
                                    <div className='font-mono text-center'>
                                        Terrain
                                    </div>
                                    <div className='py-4 px-12'>
                                        <Hue
                                            hue={noiseSeed}
                                            onChange={(newHue) => {
                                                setNoiseSeed(newHue.h);
                                                planetGenChange(newHue.h);
                                            }}
                                        />
                                    </div>
                                </Box> */}

                                <Box className='mx-12 py-4 mt-6'>
                                    <div className='font-mono text-center'>
                                        Stats
                                    </div>
                                    <div className='py-4 px-12'>
                                        <Hue
                                            hue={noiseSeed}
                                            onChange={(newHue) => {
                                                setNoiseSeed(newHue.h);
                                                planetGenChange(newHue.h);
                                            }}
                                        />
                                    </div>
                                </Box>
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
