"use client";

import Image from 'next/image';
import placeholder from "@/images/cardback.png";
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import ImageCarousel from '@/components/ImageCarousel';
import PlanetInfo from './PlanetInfo';

type ManageBoardProps = {

}

export default function ManageBoard({ }: ManageBoardProps) {
    const images = [
        { src: "/api/placeholder?height=500&width=500&text=Image+1", alt: "Image 1" },
        { src: "/api/placeholder?height=500&width=500&text=Image+2", alt: "Image 2" },
        { src: "/api/placeholder?height=500&width=500&text=Image+3", alt: "Image 3" },
        { src: "/api/placeholder?height=500&width=500&text=Image+4", alt: "Image 4" },
        { src: "/api/placeholder?height=500&width=500&text=Image+5", alt: "Image 5" },
    ]


    return (

        <section className='pt-12 grid grid-cols-1 md:grid-cols-2 gap-6 '>
            {/* <div className='cosmic-panel grid grid-cols-1 md:grid-cols-6 gap-4 px-4 py-6'>

                <div className='rounded-md bg-muted w-24 h-24' />
                <div className='rounded-md bg-muted w-24 h-24' />
                <div className='rounded-md bg-muted w-24 h-24' />
                <div className='rounded-md bg-muted w-24 h-24' />
                <div className='rounded-md bg-muted w-24 h-24' />
                <div className='rounded-md bg-muted w-24 h-24' />



            </div> */}
            <div className='cosmic-panel py-12'>
                <ImageCarousel images={images} />
            </div>
            <div className='cosmic-panel py-12'>
                <Card className='cosmic-panel'>
                    <PlanetInfo />
                </Card>
            </div>




        </section>






    );
}
