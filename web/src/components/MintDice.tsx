import { Deployment } from '@/domain/Domain';
import Image from 'next/image';
// import useNFTImage from '@/hooks/useNFTImage';
import placeholder from "../images/cardback.png";


type MintDiceProps = {
    deployment: Deployment;

}

export default function MintDice(props: MintDiceProps) {
    // const { imageURl, isMetaError } = useNFTImage({ contractAddress: props.deployment.d7, tokenId: 0 });


    return (
        <section id='hero' className='relative items-center'>
            <Image
                alt="minting"
                src={
                    // imageURl == "" ?
                         placeholder
                        // : imageURl
                }
                className="mx-auto rounded-lg shadow-2xl"
                width={512}
                height={512}
            />
            <div className='flex pt-8'>
                <button className='mx-auto border-slate-400 border-[2px] px-24 py-8'>MINT</button>
            </div>
        </section>
    );
}
