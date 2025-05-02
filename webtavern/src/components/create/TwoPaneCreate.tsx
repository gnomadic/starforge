'use client'

import { useState } from 'react';
import { Address } from 'viem';
import CreateGameForm from './CreateGameForm';
import CreateGameModules from './CreateGameModules';

export default function TwoPaneCreate() {

  const [selectedComponents, setSelectedComponents] = useState<Address[]>([]);

  return (
    <section>
      <div className='flex flex-col gap-8 px-8 py-20 md:px-16 md:flex-row'>
        <div className='border border-white border-dashed basis-1/3'>
          <CreateGameForm
            selectedComponents={selectedComponents}

          />
        </div>
        <div className='border border-white border-dashed basis-2/3'>
          <CreateGameModules
            selectedComponents={selectedComponents}
            setSelectedComponents={setSelectedComponents}
          />
        </div>

      </div>


    </section>
  );
}
