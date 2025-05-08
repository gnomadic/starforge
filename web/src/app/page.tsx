import type { Metadata } from 'next'
import MintSection from "@/components/home/MintSection";
import HowToPlaySection from "@/components/home/HowToPlaySection";



const frame = {
  version: "next",
  imageUrl: "https://starforge-git-moremini-gnomadics-projects.vercel.app/api/images",
  button: {
    title: "🪐 EXPLORE",
    action: {
      type: "launch_frame",
      url: "https://playstarforge.com",
      name:"S T A R F O R G E",
      splashImageUrl: "https://starforge-git-moremini-gnomadics-projects.vercel.app/.assets/icon.png",
      splashBackgroundColor:"#060816"
    }
  }
}

export const metadata: Metadata = {
  title: 'S T A R F O R G E',
  description: 'Weave the stars.  Forge Empires.  Uncover the truth.',
  openGraph: {
    images: '/api/images',
  },
  other: {
    "fc:frame": JSON.stringify(frame),
  },
}

export default function Home() {
  return (
    <main className='items-center font-ptser'>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="text-center max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-7xl font-mono font-bold leading-tight">
            It&apos;s the end of the universe.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/70">
            Don&apos;t worry, we have a plan
          </p>
        </div>

        <div className="scroll-indicator" />
      </section>
      
      <HowToPlaySection />

      <MintSection />


    </main>
  );
}
