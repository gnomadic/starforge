'use client';

import ModuleCard from '@/components/component/ModuleCard';
import { useReadComponentRegistryGetComponentCount, useReadComponentRegistryGetComponents } from '@/generated';
import useDeployment from '@/hooks/useDeployment';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function ExploreComponents() {

  const { deploy } = useDeployment();
  const { data: currentModules, error: curError } = useReadComponentRegistryGetComponents({ address: deploy.componentRegistry, args: [0] })
  const { data: moduleCount, error: countError } = useReadComponentRegistryGetComponentCount({ address: deploy.componentRegistry })

  useEffect(() => {
    if (curError) {
      toast.error(curError.message);
    }
    if (countError) {
      toast.error(countError.message);
    }
  }, [curError, countError]);

  return (
    <section className='px-8 py-20 md:px-16'>

      <div className=" border border-white border-dashed">

        <div className='p-4 text-2xl'>
          Explore components
        </div>

        <div className='pb-24 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 px-8'>
          {Array.from({ length: currentModules ? currentModules.length : 0 }).map((object, i) => {
            if (currentModules![i].component !== '0x0000000000000000000000000000000000000000') {
              return (
                <ModuleCard
                  key={i}
                  index={i}
                  address={currentModules![i].component}
                  metadata={currentModules![i].metadata}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
