import Image from 'next/image';
import Link from 'next/link';
import logo from '../images/logo-unopt.svg';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { NavItems } from '../domain/Nav';
import { Fragment } from 'react';
import WalletButton from './WalletButton';

type MobileNavProps = {
  onClick: () => void;
};

export default function MobileNav(props: MobileNavProps) {
  return (
    <div className='fixed top-0 left-0 z-40 navbar-menu font-mono'>
      <div
        className='fixed inset-0 bg-black/50 navbar-backdrop'
        onClick={props.onClick}
      ></div>
      <nav className='relative py-8 px-10 border-r bg-slate-900'>
        <Link href='/' onClick={props.onClick}>
          <div className='text-xl text-white font-mono text-center'>
            S T A R F O R G E
          </div>
        </Link>
        <ul className='pt-12 tracking-wider b-32 font-anon text-lightgrey'>
        <li onClick={props.onClick}>
                  <Link href='/'>
                    <div className='relative cursor-pointer py-4'>
                      HOME
                    </div>
                  </Link>
                </li>
          {NavItems.map((element, i) => {
            return (
              <Fragment key={i}>
                <li key={i} onClick={props.onClick}>
                  <Link href={element.href} >
                    <div className='relative cursor-pointer py-4'>
                      {element.label}
                    </div>
                  </Link>
                </li>
              </Fragment>
            );
          })}
          <li className=''>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/+Js2_GaKRbkBkZGE5"
            >
              <div className="relative py-4 cursor-pointer">
                TELEGRAM
                <ArrowUpRightIcon
                  className="w-4 h-4 mb-2"
                  style={{ display: "inline" }}
                />
              </div>
            </a>
          </li>
          <li className='py-4'>
            <WalletButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}
