'use client';
// import Divider from '@/components/Divider';
import React from 'react';
import MintDice from '@/components/MintDice';
import useDeployment from '@/hooks/useDeployment';

export default function Home() {
    const { deploy } = useDeployment();
    // const [activeVerb, setActiveVerb] = useState(verbs[0]);

    return (
        <main className='font-anon flex flex-col items-center justify-between p-24'>
            <section className="grid grid-cols-2 gap-8">
                <MintDice deployment={deploy} />
                <section id='connect' className='relative pt-48 items-center'>
                   Mint your lab, and start your adventure.
                </section>
            </section>
        </main>
    );
}
