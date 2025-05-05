
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Create = () => {
  return (
    <section className="flex-1 container mx-auto px-4 py-12">
    <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Game Creator</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create, customize, and manage your RPG games without writing any code.
        </p>
    </div>
        
        <div className="text-center px-4 py-12">
          <div className="bg-card border border-border rounded-lg p-8 max-w-md mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Our powerful onchain RPG Game creation system is coming soon!
            </p>
            <div className="mb-8">
              <div className="w-24 h-24 rounded-full bg-secondary border-2 border-primary mx-auto mb-4 glow flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <p className="text-muted-foreground">
                Create, customize, and manage the Systems for your RPG games.
              </p>
            </div>
            <Link href="/systems">
              <Button variant="default">
                Explore Systems
              </Button>
            </Link>
          </div>
        </div>
      </section>
  );
};

export default Create;