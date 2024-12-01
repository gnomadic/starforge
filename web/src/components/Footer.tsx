'use client';

import Link from 'next/link';

export default function Footer() {
 
  return (
    <header className='w-full pt-48 pb-12 mt-8 font-signika'>
      <div className='flex px-6 lg:px-16 min-h-[18] items-center flex-shrink-0 flex-col justify-center'>
        <div className='flex items-center self-stretch justify-between'>
          <div className='flex items-start'>
            <Link href='/'>
    
              <div className='text-4xl text-white font-ultra text-center tracking-wider'>
                Adventure Alchemist
              </div>
              <div className='mx-5 text-xl uppercase text-subtext'>discover the magic within.</div>
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
}
