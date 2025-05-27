"use client";


import React, { useState } from 'react';
// import MobileResourceBar from '@/components/mobile/MobileResourceBar';
import MobileBottomNav from '@/components/play/MobileBottomNav';
import PlanetView from '@/components/play/PlanetView';
import JobModal from '@/components/play/JobModal';
import QuestModal from '@/components/play/QuestModal';
import CombatModal from '@/components/play/CombatModal';
import ShopModal from '@/components/play/ShopModal';
import { useSupplies } from '@/components/supplies/SupplyContext';

const Mobile: React.FC = () => {
  const {supplies} = useSupplies();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white relative overflow-hidden">
      {/* Top Resource Bar */}
      {/* <MobileResourceBar resources={resources} /> */}
      
      {/* Main Content Area */}
      <div className="pt-16 pb-20 px-4 h-screen">
        <PlanetView />
      </div>
      
      {/* Bottom Navigation */}
      <MobileBottomNav onOpenModal={openModal} />
      
      {/* Modals */}
      <JobModal 
        isOpen={activeModal === 'jobs'} 
        onClose={closeModal} 
      />
      <QuestModal 
        isOpen={activeModal === 'quests'} 
        onClose={closeModal} 
      />
      <CombatModal 
        isOpen={activeModal === 'combat'} 
        onClose={closeModal} 
      />
      <ShopModal 
        isOpen={activeModal === 'shop'} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default Mobile;