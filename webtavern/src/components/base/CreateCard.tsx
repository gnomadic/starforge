
import Link from 'next/link';

type GameCardProps = {
    url: string
}

export default function CreateCard(props: GameCardProps) {

    return (

        <Link 
        className='relative py-24 text-center border-2 rounded-md border-tavernOrange text-tavernOrange' 
        href={props.url} >
                <div className='absolute text-4xl -translate-y-1/2 top-1/2 right-1/2'>
                    +
                </div>
        </Link>
    );
}
