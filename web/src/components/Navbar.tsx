'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import { NavItems } from '@/domain/Nav';
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
import { ArrowUpRightIcon } from 'lucide-react';


export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const handleMobileNavClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <header className='z-50 w-full mt-8 font-signika'>
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        scrolled
          ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/20"
          : "py-6"
      )}
    >
      <div className='flex px-6 lg:px-16 min-h-[18] items-center flex-shrink-0 flex-col justify-center'>
        <div className='flex items-center self-stretch justify-between'>
          <div className='flex items-start'>
            <Link href='/'>
              <div className='text-xl text-white font-mono text-center tracking-wider'>
                S T A R F O R G E
              </div>
              <div className='text-sm text-white font-mono text-center tracking-wider'>
                ALPHA
              </div>

            </Link>
          </div>
          <div className='flex items-center justify-center gap-8'>
            <div className='items-start hidden gap-8 md:flex' >
              {NavItems.map((element, i) => {
                return (
                  <div className='text-sm text-lightgrey' key={i}>
                    <Link href={element.href}>
                      <div className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                        {element.label}
                      </div>
                    </Link>
                  </div>
                );
              })}
              <div className='text-sm text-white/70 hover:text-white transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300' >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  // href="https://play-starforge.gitbook.io/starforge"
                  href="https://t.me/+Js2_GaKRbkBkZGE5"
                >
                  <div className="relative cursor-pointer">
                  TELEGRAM
                    <ArrowUpRightIcon
                      className="h-3 mb-2 "
                      style={{ display: "inline" }}
                    />
                  </div>
                </a>
              </div>
            </div>

         
          </div>
          <div className='flex items-start justify-center gap-8 hidden md:block'  >
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

    </header>
  );
}
