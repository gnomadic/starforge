import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import systems from '@/domain/systems';
import SystemCard from '@/components/SystemCard';

const Systems = () => {
  return (
    // <div className="min-h-screen flex flex-col">
      <section className="flex-1 container mx-auto px-12 py-12">

        
        <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Game Systems</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our powerful game systems that you can mix and match to create your perfect RPG experience.
                </p>
            </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map(system => (
            <SystemCard key={system.id} system={system} />
          ))}
        </div>
      </section>
    // </div>
  );
};

export default Systems;
