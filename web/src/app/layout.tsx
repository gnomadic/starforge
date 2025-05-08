import type { Metadata } from 'next';
import { Signika, Ultra } from 'next/font/google';
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

const ultra = Ultra({
  subsets: ['latin'], weight: "400", variable: '--font-ultra',
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
      <body className={`${signika.variable} ${ultra.variable}  font-sans bg-black text-white`}>
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
