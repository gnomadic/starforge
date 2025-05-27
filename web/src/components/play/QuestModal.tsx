"use client";


import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Target } from 'lucide-react';

interface QuestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuestModal: React.FC<QuestModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <Target className="h-5 w-5" />
            Cosmic Quests
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 text-center py-8">
          <Target className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Quests Coming Soon</h3>
          <p className="text-gray-400">Epic cosmic adventures await!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuestModal;
