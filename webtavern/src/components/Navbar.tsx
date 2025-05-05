'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useState } from 'react';
import MobileNav from './MobileNav';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { NavItems } from '../domain/Nav';
import useDeployment from '../hooks/useDeployment';
import { usePathname } from 'next/navigation'


export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { deploy } = useDeployment();
  const pathname = usePathname();

  const handleMobileNavClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className='z-50 w-full mt-8 font-outfit'>
      <div className='flex px-6 lg:px-16 min-h-[18] items-center flex-shrink-0 flex-col justify-center'>
        <div className='flex items-center self-stretch justify-between'>
          <div className='flex items-start'>
            <Link href='/'>
              <div className='text-3xl text-white font-outfit'>
                Tavern
              </div>
            </Link>
          </div>
          <div className='flex items-center justify-center gap-8'>
            <div className='items-start hidden gap-8 md:flex' >
              {NavItems.map((element, i) => {
                return (
                  <div className='text-sm text-lightgrey' key={i}>
                    <Link href={element.href}>
                      <div className={"relative cursor-pointer " + (pathname.includes(element.label) ? "text-white" : "")}>
                        {element.label}
                      </div>
                    </Link>
                  </div>
                );
              })}
              <div className='text-sm text-lightgrey' >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/+Js2_GaKRbkBkZGE5"
                >
                  <div className="relative cursor-pointer">
                    Telegram
                    <ArrowUpRightIcon
                      className="h-3 mb-2 "
                      style={{ display: "inline" }}
                    />
                  </div>
                </a>
              </div>
            </div>
     
            <div className='flex items-start justify-center gap-8' >
              <ConnectButton
                chainStatus='icon'
                accountStatus='avatar'
                showBalance={false}
              />
            </div>
            <div className='self-center md:hidden'>
            <button
              onClick={() => {
                handleMobileNavClick();
              }}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect y='6' width='24' height='2' fill='white'></rect>
                <rect y='11' width='24' height='2' fill='white'></rect>
                <rect y='16' width='24' height='2' fill='white'></rect>
              </svg>
            </button>
            {isMobileNavOpen ? (
              <>
                <MobileNav onClick={handleMobileNavClick} />
              </>
            ) : (
              <></>
            )}
          </div>
          </div>
        </div>
      </div>

    </header>
  );
}
