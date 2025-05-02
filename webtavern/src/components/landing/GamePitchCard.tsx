
type GameCardProps = {
    title: string,
    description: string
}

export default function GamePitchCard(props: GameCardProps) {

    return (
        <div>
            <div className='border-b-2 border-white text-xl text-end pb-2'>
                {props.title}
            </div>
            <div className="pt-4">
                {props.description}
            </div>
        </div>
    );
}
