
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import systems from '@/domain/systems';
import SystemDetails from '@/components/SystemDetails';
import Link from 'next/link';

const SystemDetail = ({ params }: { params: { systemId: string } }) => {
  // const { systemId } = useParams<{ systemId: string }>();
  const system = systems.find(s => s.id === params.systemId);

  // if (!system) {
  //   return <Navigate to="/systems" replace />;
  // }

  return (

    <section className="flex-1 container mx-auto px-4 py-12">
      <Link href="/systems" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to All Systems
      </Link>

      {system && (
        <SystemDetails system={system} />
      )}



      <div className="mt-16 flex justify-center">
        <Link href="/create-game">
          <Button>Use This System in Your Game</Button>
        </Link>
      </div>
    </section>

  );
};

export default SystemDetail;