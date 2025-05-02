import { Deployment, GameMetadata, GameSummary } from '@/domain/Domain';
import { censor, pretty } from '../../domain/utils';
import Link from 'next/link';
import { Address } from 'viem';
import { useMetadata } from '@/hooks/useMetadata';
import { Name } from '@coinbase/onchainkit/identity';

type GameCardProps = {
  deployment: Deployment;
  metadata: string;
  gm: Address;
  address: Address;
  index: number;
}

export default function GameCard(props: GameCardProps) {
  const { data } = useMetadata<GameMetadata>(props.metadata);

  return (
    <div className='border-2 border-lightgrey rounded-md'>
      <Link href={`/game/${props.deployment.chainId}/${props.address}`} >
        <div className=' text-2xl pl-4 py-2'>
          {data ? censor(data.name) : "loading"}
        </div>
   
        <div className='p-4 text-sm'>
          {data && data.description.length > 0 ? censor(data?.description) : "No description available"}
        </div>
        <div className='text-right pb-2 px-4 text-xs'>
          created by: <span><Name address={props.gm}/></span>
        </div>
      </Link>
    </div>
  );
}
