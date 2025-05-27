"use client";


import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ShoppingBag } from 'lucide-react';

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShopModal: React.FC<ShopModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto max-h-[80vh] overflow-y-auto bg-gray-900 border-gray-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <ShoppingBag className="h-5 w-5" />
            Cosmic Shop
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 text-center py-8">
          <ShoppingBag className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Shop Coming Soon</h3>
          <p className="text-gray-400">Cosmic upgrades and items await!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShopModal;