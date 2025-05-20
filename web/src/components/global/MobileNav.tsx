"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { NavItems } from '../../domain/Nav';
import { Fragment } from 'react';
import WalletButton from '../WalletButton';

type MobileNavProps = {
  onClick: () => void;
};

const slideVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

export default function MobileNav({ onClick }: MobileNavProps) {

  return (

    <div
      className="fixed top-0 left-0 z-40 flex w-full h-full font-mono"
    >
      {/* Backdrop */}
      <div      
        className="fixed inset-0 bg-black/50"
        onClick={onClick}
      />

      {/* Sliding Nav */}
      <motion.div 
            initial="hidden"
      animate="visible"
      variants={slideVariants}
         transition={{ duration: 0.3 }}
      className="relative z-50 w-64 h-full py-8 px-10 border-r bg-slate-900">
        <Link href="/" onClick={onClick}>
          <div className="text-md text-white font-mono text-center">
            S T A R F O R G E
          </div>
        </Link>

        <ul className="pt-12 tracking-wider font-anon text-lightgrey">
          <li onClick={onClick}>
            <Link href="/">
              <div className="relative cursor-pointer py-4">HOME</div>
            </Link>
          </li>

          {NavItems.map((element, i) => (
            <Fragment key={i}>
              <li onClick={onClick}>
                <Link href={element.href}>
                  <div className="relative cursor-pointer py-4">
                    {element.label}
                  </div>
                </Link>
              </li>
            </Fragment>
          ))}

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/+Js2_GaKRbkBkZGE5"
            >
              <div className="relative py-4 cursor-pointer">
                TELEGRAM
                <ArrowUpRightIcon className="w-4 h-4 mb-2 inline" />
              </div>
            </a>
          </li>

          <li className="py-4">
            <WalletButton />
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
