import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/logo-unopt.svg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { NavItems } from '../domain/Nav';
import { Fragment } from 'react';

type MobileNavProps = {
  onClick: () => void;
};

export default function MobileNav(props: MobileNavProps) {
  return (
    <div className='fixed top-0 left-0 z-40 w-screen navbar-menu font-signika'>
      <div
        className='fixed inset-0 bg-black navbar-backdrop'
        onClick={props.onClick}
      ></div>
      <nav className='relative flex flex-col w-full h-full px-10 py-8 overflow-y-auto border-r bg-slate-900'>
        <Link href='/' onClick={props.onClick}>
          <div className='text-3xl text-white font-outfit'>
            Tavern
          </div>
        </Link>
        <ul className='gap-8 pt-12 tracking-wider b-32 font-anon text-lightgrey'>
          {NavItems.map((element, i) => {
            return (
              <Fragment key={i}>
                <li key={i} onClick={props.onClick}>
                  <Link href={element.href}>
                    <div className='relative pb-8 cursor-pointer'>
                      {element.label}
                    </div>
                  </Link>
                </li>
              </Fragment>
            );
          })}

          {/* <li className='pb-8 '>
            <a
              href='https://warpcast.com/gn0madic'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div className='relative cursor-pointer'>warpcast</div>
            </a>
          </li> */}
          {/* 
          <li className='pb-8'>
            <a
              href='https://discord.gg/pP2G7sY7GY'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div className='relative cursor-pointer'>discord</div>
            </a>
          </li> */}

          <li className=''>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.playtavern.com"
            >
              <div className="relative text-lightgrey">
                docs
                <ArrowUpRightIcon
                  className="w-4 h-4 mb-1 -ml-1"
                  style={{ display: "inline" }}
                />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
