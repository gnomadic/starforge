
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PlanetTab from '@/components/codex/PlanetTab';
import ArtifactTab from '@/components/codex/ArtifactTab';
import ComingSoon from '@/components/ComingSoon';

const Gallery: React.FC = () => {

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden md:pt-24">
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Your Cosmic Collection</h1>
          <p className="text-white/70">View and interact with your collected cosmic entities and artifacts.</p>
        </div>

        <Tabs defaultValue="nfts" className="mb-8">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="nfts">Star Systems</TabsTrigger>
            <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
          </TabsList>

          <TabsContent value="nfts" className="mt-6">
            <PlanetTab />
          </TabsContent>
          <TabsContent value="artifacts" className="mt-6">


            {!process.env.NEXT_PUBLIC_ENABLE_TESTNETS ? (
              <div className="min-h-screen text-foreground overflow-x-hidden md:pt-24">
                <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
                  <ComingSoon />
                </main>
              </div>
            ) : (

              <ArtifactTab />
            )}



          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Gallery;
