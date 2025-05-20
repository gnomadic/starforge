'use client';

import { socials } from '@/domain/Nav';
import Link from 'next/link';

export default function Footer() {

  return (
    <header>
      <footer className="py-8 border-t border-white/10 pb-24 mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {/* <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent"></div> */}
              <div className="font-mono text-lg tracking-wider">S T A R F O R G E</div>
            </div>


            <div className="flex items-center gap-4">
              {socials.map((social, index) => (
                <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                  <div key={index} className="text-sm text-white/70 hover:text-white transition-colors uppercase">
                    {social.label}
                  </div>
                </Link>

              ))}
            </div>

   
          </div>
          <p className="text-sm text-white/30 text-end pt-12">
              © 2023 elftech, llc. All rights reserved.
            </p>
        </div>
      </footer>
    </header>
  );
}
