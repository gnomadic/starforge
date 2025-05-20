import { useState } from "react";
import { motion } from "framer-motion";

interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenuButton({isOpen, setIsOpen}: MobileMenuButtonProps) {

  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-12 h-12 flex flex-col justify-center items-center grou border-white/50 border-2 rounded-lg"
    >
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
        transition={{ duration: 0.2 }}
        className="block h-0.5 w-6 bg-white mb-1"
      />
      <motion.span
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="block h-0.5 w-6 bg-white mb-1"
      />
      <motion.span
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
        transition={{ duration: 0.2 }}
        className="block h-0.5 w-6 bg-white"
      />
    </div>
  );
}
