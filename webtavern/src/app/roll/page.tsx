'use client';
import Divider from '@/components/Divider';
import MintDice from '@/components/MintDice';
import useDeployment from '@/hooks/useDeployment';

export default function Home() {
const {deploy} = useDeployment();
    // const [activeVerb, setActiveVerb] = useState(verbs[0]);

    return (
        <main className='font-anon flex flex-col items-center justify-between p-24'>
            <section id='connect' className='relative pt-48 items-center'>
                A D7 is our NFT uses for prototyping and testing.  Mint one for free today to jump in and play!
            </section>
            <section className='pt-24'>
                <Divider />
            </section>
            <MintDice deployment={deploy}/>
        </main>
    );
}
