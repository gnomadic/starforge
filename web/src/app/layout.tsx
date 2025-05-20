import type { Metadata } from 'next';
import { Signika, Ultra } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from '@/components/global/providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
          

          {children}
          
          <ToastContainer position='bottom-right' />

          
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
