import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

// Mock data for the gallery
const galleryItems = [
    {
        id: 1,
        title: "S T A R F O R G E",
        creator: "gn0madic",
        image: "https://starforge-git-main-gnomadics-projects.vercel.app/blackhole.svg",
        link: "https://starforge-git-main-gnomadics-projects.vercel.app/"
    },

];

const Gallery = () => {
    return (
        <section className="flex-1 container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Game Gallery</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Explore games created by our community using RPG Maker Studio.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map(item => (
                    <Link href={item.link} key={item.id} className="block">
                        <Card className="overflow-hidden system-card">
                            <CardContent className="p-0">
                                <div className="aspect-video w-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-muted-foreground">by {item.creator}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
