'use client'

import { useReadComponentRegistryGetComponents } from '@/generated';
import useDeployment from '@/hooks/useDeployment';
import ChooseModule from './ChooseModule';
import { Address } from 'viem';


type Props = {
    selectedComponents: Address[];
    setSelectedComponents: (address: Address[]) => void;
}

export default function CreateGameModules(props: Props) {

    const { deploy } = useDeployment();

    const { data: currentModules, error: curError } = useReadComponentRegistryGetComponents({ address: deploy.componentRegistry, args: [0] })

    return (
        <section id='hero' className='relative'>
            <div className='p-4 text-2xl'>
                Choose Game Functionality
            </div>
            <div className='grid grid-cols-1 gap-8 py-8 mx-12 md:grid-cols-2'>
                {Array.from({ length: currentModules?.length as number }).map((object, i) => {
                    if (currentModules![i].component !== '0x0000000000000000000000000000000000000000') {

                        return (
                            <ChooseModule
                                key={i}
                                index={i}
                                address={currentModules![i].component!}
                                metadata={currentModules![i].metadata!}
                                selected={props.selectedComponents}
                                setSelected={(address) => {
                                    if (props.selectedComponents.includes(address)) {
                                        props.setSelectedComponents(props.selectedComponents.filter((a) => a !== address));
                                    } else {
                                        props.setSelectedComponents([...props.selectedComponents, address]);
                                    }
                                }}
                            />
                        );
                    }
                })}
            </div>
        </section>
    );
}
