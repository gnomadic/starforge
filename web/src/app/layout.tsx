import type { Metadata } from 'next';
import { Outfit, PT_Serif, Signika, Ultra } from 'next/font/google';
import { Nunito, PT_Sans } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpaceAnimation from '@/components/SpaceAnimation';
import InDev from '@/components/InDev';
 


const signika = Signika({
  subsets: ['latin'], weight: "400", variable: '--font-signika',
});

const outfit = Outfit({
  subsets: ['latin'], weight: "500", variable: '--font-outfit',

})

const nunito = Nunito({
  subsets: ['latin'], weight: "400", variable: '--font-nunito',
});

const ptsans = PT_Sans({
  subsets: ['latin'], weight: "400", variable: '--font-ptsans',
});

const ultra = Ultra({
  subsets: ['latin'], weight: "400", variable: '--font-ultra',
});

const ptser = PT_Serif({
  subsets: ['latin'], weight: "400", variable: '--font-ptserif',
});



export const metadata: Metadata = {
  title: 'Starforge',
  description: 'Weave the stars.  Forge Empires.  Uncover the truth.',
  openGraph: {
    title: 'Starforge',
    description: 'Weave the stars.  Forge Empires.  Uncover the truth.',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en'>
      <body className={`${signika.variable} ${outfit.variable} ${nunito.variable} ${ptsans.variable} ${ultra.variable} ${ptser.variable} font-sans bg-black text-white`}>
        <Providers>
          <SpaceAnimation />
          <Navbar />

          {children}
          <InDev/>
          <ToastContainer position='bottom-right' />

          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
