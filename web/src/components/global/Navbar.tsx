'use client';

import { AnimatePresence, motion } from "motion/react"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import { NavItems } from '@/domain/Nav';
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
import { ArrowUpRightIcon } from 'lucide-react';
import WalletButton from '../WalletButton';
import MobileMenuButton from "./MobileMenuButton";


export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const handleMobileNavClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShow(current < lastScrollY || current < 10); // show on scroll up or top
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <motion.div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 hidden md:flex items-center justify-between min-h-[18px]",
          scrolled
            ? "py-4 md:bg-black/80 md:backdrop-blur-md md:border-b md:border-white/20 "
            : "py-6"
        )}
      >

        <Link href="/" className="font-mono text-white text-center tracking-wider">
          <div className="lg:text-xl">S T A R F O R G E</div>
          <div className="text-sm text-white/50">ALPHA</div>
        </Link>

        <nav className="hidden lg:flex gap-8 items-center">
          {NavItems.map((item, i) => (
            <Link key={i} href={item.href}>
              <div
                className={cn(
                  "text-sm text-white/70 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                  pathname === item.href
                    ? "text-white after:w-full"
                    : "hover:text-white after:w-0 hover:after:w-full"
                )}
              >
                {item.label}
              </div>
            </Link>
          ))}

          <a
            href="https://t.me/+Js2_GaKRbkBkZGE5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
          >
            <div className="relative cursor-pointer">
              TELEGRAM <ArrowUpRightIcon className="h-3 mb-2 inline" />
            </div>
          </a>
        </nav>
        <div className="hidden lg:block">
          <WalletButton />
        </div>
      </motion.div>


      <div className="md:hidden ">
        <AnimatePresence>
          {show && (
            <motion.div
              key="box"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 transition-all duration-300 py-6 backdrop-blur-md bg-black/80 border-b border-white/20"
            >
              <Link href="/" className="font-mono text-white  tracking-wider">
                <div className="text-lg">S T A R F O R G E</div>
                <div className="text-sm -mt-2 text-white/50">ALPHA</div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>


        <div className="fixed top-6 right-6 z-50">
          <MobileMenuButton
            isOpen={isMobileNavOpen}
            setIsOpen={setIsMobileNavOpen}
          />
        </div>

        {isMobileNavOpen && (
          <MobileNav onClick={handleMobileNavClick} />
        )}
      </div>
    </header>
  );
}
