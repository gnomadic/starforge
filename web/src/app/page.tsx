import type { Metadata } from 'next'
import MintSection from "@/components/home/MintSection";
import HowToPlaySection from "@/components/home/HowToPlaySection";

export const metadata: Metadata = {
  title: 'S T A R F O R G E',
  description: 'Weave the stars.  Forge Empires.  Uncover the truth.',
}

export default function Home() {
  return (
    <main className='items-center font-ptser'>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="text-center max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-7xl font-mono font-bold leading-tight">
            {/* Discover the <span className="text-gradient">Cosmic</span> Collection */}
            It&apos;s the end of the universe.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/70">
            {/* A journey through the stars, captured in digital art */}
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
