
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';
import { Dice6 } from 'lucide-react';
import { useGameStore } from '@/lib/gameState';
import { toast } from 'react-toastify';

// Array of D6 dice faces
const diceFaces = [
  "⚀", // 1
  "⚁", // 2
  "⚂", // 3
  "⚃", // 4
  "⚄", // 5
  "⚅", // 6
];

const DiceMinter = () => {
//   const { toast } = useToast();
  const resources = useGameStore(state => state.resources);
  const collectResource = useGameStore(state => state.collectResource);
  const [isRolling, setIsRolling] = useState(false);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [mintCount, setMintCount] = useState(0);
  
  const handleMint = () => {
    // Check if player has enough influence
    const influence = resources.find(r => r.id === 'influence');

    
    // Start rolling animation
    setIsRolling(true);
    
    // Simulate dice roll with animation
    let rollCount = 0;
    const maxRolls = 10;
    const rollInterval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6));
      rollCount++;
      
      if (rollCount >= maxRolls) {
        clearInterval(rollInterval);
        // Final dice value
        const finalValue = Math.floor(Math.random() * 6);
        setDiceValue(finalValue);
        setIsRolling(false);
        
        // Increment mint count
        setMintCount(prev => prev + 1);
        
        // Show success message
        toast.success("NFT Minted!");
          
      }
    }, 100);
  };
  
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Cosmic Dice NFT</h3>
        <p className="text-muted-foreground max-w-md">
          Mint a unique Cosmic Die NFT. Each die is stored on the blockchain and brings luck to space explorers.
          Cost: 50 influence per mint.
        </p>
      </div>
      
      <div className="dice-container bg-black/20 w-32 h-32 flex items-center justify-center rounded-xl border-2 border-primary/30">
        {diceValue !== null ? (
          <span className={`text-7xl transition-all ${isRolling ? 'animate-spin' : ''}`}>
            {diceFaces[diceValue]}
          </span>
        ) : (
          <Dice6 className="w-16 h-16 text-primary/50" />
        )}
      </div>
      
      <div className="text-center">
        <Button 
          onClick={handleMint} 
          disabled={isRolling} 
          size="lg"
          className="relative overflow-hidden"
        >
          {isRolling ? 'Rolling...' : 'Mint Cosmic Die (50 influence)'}
          <span className="absolute -top-1 -right-1 bg-primary/20 text-xs rounded-full px-2 py-1">
            {mintCount}
          </span>
        </Button>
        
        <div className="mt-4 text-sm text-muted-foreground">
          Your collection: {mintCount} {mintCount === 1 ? 'die' : 'dice'}
        </div>
      </div>
      
      {mintCount > 0 && (
        <div className="mt-2 p-4 border rounded-md w-full max-w-md">
          <h4 className="font-medium mb-2">Your Cosmic Dice Collection:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {Array(mintCount).fill(0).map((_, i) => (
              <div key={i} className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                <span className="text-xl">{diceFaces[Math.floor(Math.random() * 6)]}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiceMinter;
