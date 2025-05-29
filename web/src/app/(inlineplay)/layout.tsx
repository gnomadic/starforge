import type { Metadata } from 'next';


import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}


export const metadata: Metadata = {
  title: 'Starforge',
  description: 'Weave the stars.  Forge Empires.  Uncover the truth.',
  openGraph: {
    title: 'Starforge',
    description: 'Weave the stars.  Forge Empires.  Uncover the truth.',
  },
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 1,
  //   userScalable: false
  // },
    // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',

};


export default function InlinePlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>

      {/* <body className={`${signika.variable} ${ultra.variable}  font-sans bg-black text-white`}> */}
        {/* <Providers> */}
          {/* <SpaceAnimation /> */}
          {/* <Navbar /> */}
          {/* <div className="text-xl text-white">okokok</div> */}

          {children}
          {/* <InDev/> */}
          {/* <ToastContainer position='bottom-right' /> */}

          {/* <Footer /> */}
          {/* <Analytics /> */}
        {/* </Providers> */}
      {/* </body> */}
    </>
  );
}
