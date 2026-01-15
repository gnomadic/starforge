"use client";

import React from 'react';
import { Briefcase, Sword, Target, ShoppingBag, Home, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WalletButton from '../WalletButton';

interface MobileBottomNavProps {
  onOpenModal: (modalType: string) => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenModal }) => {
  const navItems = [
    { id: 'planet', icon: Home, label: 'Planet' },
    { id: 'jobs', icon: Briefcase, label: 'Jobs' },
    { id: 'upgrades', icon: TrendingUp, label: 'Upgrades' },
    // { id: 'combat', icon: Sword, label: 'Combat' },
    // { id: 'shop', icon: ShoppingBag, label: 'Shop' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-t border-white/10">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            className="flex flex-col items-center gap-1 h-auto py-2 px-3 text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => item.id === 'home' ? null : onOpenModal(item.id)}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
                 <div className="py-4">
                    <WalletButton />
                  </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
