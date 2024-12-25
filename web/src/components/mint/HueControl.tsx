"use client";

import Image from 'next/image';
import placeholder from "@/images/cardback.png";
import { RotateCcw } from 'lucide-react';
import Hue from '@uiw/react-color-hue';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { useEffect, useState } from 'react';

type HueControlProps = {
    title: string;
    value: number;

    newHue: (h: number) => void
    reset: () => void
}

export default function HueControl({ title, value, newHue, reset }: HueControlProps) {

    const [curValue, setCurValue] = useState(value);

    useEffect(() => {
        setCurValue(value)
    }

        , [value])


    return (
        // <div>
        //     <p className="py-2 px-5">{title}</p>

        //     <div className="flex mx-auto px-2 ">
        //         <div
        //             className=" border-black border-[2px] mr-4"
        //             onClick={reset}
        //         >

        //             <RotateCcw className='w-10 h-10 mx-auto ' />

        //         </div>

        //         <div className="flex-auto p-3 border-black border-[2px] mx-auto">
        //             <Hue
        //                 hue={value}
        //                 onChange={newHue}
        //             />
        //         </div>
        //     </div>
        // </div>


        <div key={title} className="space-y-2 px-2 py-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{title}</h3>
                {/* <Button
                    variant="outline"
                    size="icon"
                    onClick={() => reset()}
                >
                    <RotateCcw />

                </Button> */}
            </div>
            <div className='flex mx-auto'>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => reset()}
                >
                    <RotateCcw />

                </Button>
                <div className='grow pt-4'>
                <Slider
                    min={0}
                    max={360}
                    step={1}
                    value={[value]}
                    onValueChange={(value) => {
                        setCurValue(value[0]);
                        newHue(value[0])
                    }}
                    className='px-4'
                />
                     <p className="text-xs text-muted-foreground text-right pt-2 ">
                Value: {curValue}
            </p>


                </div>


            </div>
       

        </div>

    );
}
