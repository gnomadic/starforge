import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Starforge',
  description: 'Weave the stars.  Forge Empires.  Uncover the truth.',
  openGraph: {
    title: 'Starforge',
    description: 'Weave the stars.  Forge Empires.  Uncover the truth.',
  },
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
