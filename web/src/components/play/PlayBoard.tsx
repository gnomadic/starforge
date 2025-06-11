"use client";

import React, { useState } from 'react';
import MobileResourceBar from '@/components/play/MobileResourceBar';
import MobileBottomNav from '@/components/play/MobileBottomNav';
import PlanetView from '@/components/play/PlanetView';
import JobModal from '@/components/play/JobModal';
import QuestModal from '@/components/play/QuestModal';
import CombatModal from '@/components/play/CombatModal';
import ShopModal from '@/components/play/ShopModal';
import { useSupplies } from '@/components/supplies/SupplyContext';
import UpgradeModal from '@/components/play/UpgradeModal';
import PlanetModal from '@/components/play/PlanetModal';
import { useReadEquipmentSystemGetAllModules } from '@/generated';
import { useAccount } from 'wagmi';
import { useDeployment } from '@/hooks/useDeployment';
import { useScenarios } from '../ScenarioContext';

const PlayBoard: React.FC = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const { address } = useAccount();
    const { deploy } = useDeployment();

    const {scenarios} = useScenarios();


    const { data: allModules, isLoading: loadingAllModules } = useReadEquipmentSystemGetAllModules({ address: deploy.EquipmentSystem, args: [scenarios ? scenarios[0] : "0x0"] });
    // const { data: image, isLoading: loadingImage } = useReadPlanetVAlphaGenerateSvg({ address: deploy.Planet, args: [BigInt(0)] });


    const openModal = (modalType: string) => {
        setActiveModal(modalType);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black text-white relative overflow-hidden">
            {/* Top Resource Bar */}
            <MobileResourceBar />

            {/* Main Content Area */}
            <div className="pt-16 pb-20 px-4 h-screen">
                <PlanetView
                allModules={allModules}
                // onOpenModal={openModal}
                />
            </div>

            {/* Bottom Navigation */}
            <MobileBottomNav onOpenModal={openModal} />

            {/* Modals */}
            <PlanetModal
                isOpen={activeModal === 'planet'}
                onClose={closeModal}
            />
            <JobModal
                isOpen={activeModal === 'jobs'}
                onClose={closeModal}
            />
            <UpgradeModal
                isOpen={activeModal === 'upgrades'}
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

export default PlayBoard;