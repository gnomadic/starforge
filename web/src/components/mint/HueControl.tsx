"use client";

import { RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { useEffect, useState } from 'react';

type HueControlProps = {
    title: string;
    value: number;
    newHue: (h: number) => void
    reset: () => void
    step?: number | undefined
    maxValue?: number | undefined
}

export default function HueControl({ title, value, newHue, reset, step = 1, maxValue= 360 }: HueControlProps) {

    const [curValue, setCurValue] = useState(value);

    useEffect(() => {
        setCurValue(value)
    }, [value])

    return (
        <div key={title} className="">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium font-signika" >{title}</h3>
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
                        max={maxValue}
                        step={step}
                        value={[value]}
                        onValueChange={(value) => {
                            setCurValue(value[0]);
                            newHue(value[0])
                        }}
                        className='px-4'
                    />
                    <p className="text-xs text-muted-foreground text-right pt-2 ">
                        {curValue}
                    </p>
                </div>
            </div>
        </div>
    );
}
