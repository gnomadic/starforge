'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useState } from 'react';
import MobileNav from './MobileNav';
import { NavItems, PlayNavItems } from '@/domain/Nav';
import { usePathname } from 'next/navigation'
import { Button } from './ui/button';
import ResourcePanelThin from './play/ResourcePanelThin';


export default function PlayNav() {
  const pathname = usePathname();

  return (
    <header className='z-50 w-full mt-8 font-signika pt-24'>
      <div className='grid grid-cols-1 md:grid-cols-6 gap-4 px-4 py-6 cosmic-panel'>
        {PlayNavItems.map((item) => (
          <Link href={item.href} key={item.href} >
            {/* <a className={`text-center text-white ${pathname === item.href ? 'border-b-2 border-boldorange' : ''}`}> */}
            <Button className='cosmic-button w-full' variant={pathname === item.href ? "link" : "default"} >
              {item.label}
              </Button>
            {/* </a> */}
          </Link>
        ))
          
        }



      </div>
<div className='mt-2 cosmic-panel'>
      <ResourcePanelThin />
      </div>


    </header>
  );
}
