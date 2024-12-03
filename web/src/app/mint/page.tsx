
import MintLab from '@/components/mint/MintLab';
import React from 'react';

export default function Home() {

    return (
        <main className='font-anon flex flex-col items-center justify-between p-24'>
            <section className="grid grid-cols-2 gap-8">
                <MintLab  />
                <section id='connect' className='relative pt-48 items-center'>
                   Mint your lab, and start your adventure.
                </section>
            </section>
        </main>
    );
}
