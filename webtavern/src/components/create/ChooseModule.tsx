import { useMetadata } from '@/hooks/useMetadata';
import { Address } from 'viem';
import { ComponentMetadata } from '@/domain/Domain';
import { censor } from '@/domain/utils';


type ModuleCardProps = {
  address: Address;
  metadata: string;
  index: number;
  selected: Address[];
  setSelected: (selected: Address) => void;
  active?: Address[];

}

export default function ChooseModule(props: ModuleCardProps) {
  const { data } = useMetadata<ComponentMetadata>(props.metadata);

  // const cardClass = props.selected.includes(props.address) ? ' border-selected' : ' border-unselected';
  const cardClass = props.active?.includes(props.address) ? ' border-tavernOrange' :
    props.selected.includes(props.address) ? ' border-selected' : ' border-unselected';

  // const textClass = props.selected.includes(props.address) ? ' text-selected' : ' text-unselected';
  const textClass = props.active?.includes(props.address) ? ' text-white' :
    props.selected.includes(props.address) ? ' text-selected' : ' text-unselected';



  return (
    <div
      className={'border-2 rounded-md ' + cardClass + textClass}
      onClick={() => {
        if (!props.active?.includes(props.address)) {
          props.setSelected(props.address)
        }
      }
      }
    >
      <div className='py-2 pl-4 text-2xl border-white'>
        {data ? censor(data.name) : "loading"}
      </div>
      <div className='pt-2 pb-2 pl-2 m-2 text-sm'>
        {censor(data?.description)}
      </div>
    </div>
  );
}
