import type { Metadata } from 'next';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import SpaceAnimation from '@/components/SpaceAnimation';
import InDev from '@/components/global/InDev';
import SupplyBar from '@/components/supplies/SupplyBar';




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

    <>
      <SpaceAnimation />
      <Navbar />

      {children}

            <div className="fixed bottom-4 right-4 md:right-6 md:bottom-6 z-50">
              <SupplyBar />
            </div>

      <InDev />
      <Footer />
    </>

  );
}
