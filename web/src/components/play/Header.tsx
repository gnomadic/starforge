
import React from 'react';
import { cn } from '@/lib/utils';
import { GlobeIcon } from 'lucide-react';

interface HeaderProps {
  className?: string;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ className, title }) => {
  return (
    <div className={cn("py-4", className)}>
      <div className="container mx-auto">
        <div className="flex items-center">
          <GlobeIcon className="h-6 w-6 text-primary mr-2" />
          <h1 className="text-2xl font-bold">{title || "Cosmic Collector"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
