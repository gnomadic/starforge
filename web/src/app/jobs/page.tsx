
import React from 'react';

import JobBoard from '@/components/job/JobBoard';

const Jobs: React.FC = () => {

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden md:pt-24">
      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">Cosmic Jobs</h1>
          <p className="text-white/70">
          Choose a job to generate resources over time. You can only have one active job at a time.
          Rewards are based on your planet&apos;s stats, and jobs will also increase your skills.
          As your skills increase you can unlock new, more powerful jobs.
          </p>
          
        </div>

        <JobBoard />
      </main>
    </div>
  );
};

export default Jobs;