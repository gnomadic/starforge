
import React from 'react';
import { Planet as PlanetType, getRegenerationDescription } from '@/lib/planetData';
import { cn } from '@/lib/utils';

interface PlanetProps {
  planet: PlanetType;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

const Planet: React.FC<PlanetProps> = ({ planet, selected, onClick, className }) => {
  const regenerationPercentage = (planet.regenerationLevel / planet.maxRegenerationLevel) * 100;
  
  const getRegenerationColor = () => {
    if (regenerationPercentage === 0) return 'bg-gray-600';
    if (regenerationPercentage < 25) return 'bg-red-500';
    if (regenerationPercentage < 50) return 'bg-yellow-500';
    if (regenerationPercentage < 75) return 'bg-green-400';
    return 'bg-green-300';
  };

  // Cloud layer for gaseous planets
  const renderClouds = () => {
    if (planet.type !== 'gaseous') return null;
    
    return (
      <div 
        className="absolute inset-0 rounded-full mix-blend-overlay opacity-70 overflow-hidden"
        style={{ background: `radial-gradient(ellipse at center, transparent 0%, ${planet.color}80 70%)` }}
      >
        <div className="absolute inset-0 opacity-60 animate-pulse-soft duration-300" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23FFFFFF' d='M47.1,-51.2C57.4,-38.5,59.6,-19.2,59.5,-0.1C59.4,19,57,38,45.7,48.9C34.4,59.9,17.2,62.8,1.3,61.4C-14.6,60,-29.2,54.2,-42.3,43.6C-55.4,33,-66.9,16.5,-69.3,-2.4C-71.6,-21.3,-64.7,-42.5,-51.1,-55.2C-37.5,-67.8,-18.8,-71.8,0.2,-72C19.2,-72.3,36.8,-63.9,47.1,-51.2Z' transform='translate(100 100) scale(1.1)' /%3E%3C/svg%3E");`,
               backgroundSize: '200% 200%',
               backgroundPosition: 'center',
               animation: 'float 20s ease-in-out infinite',
             }}
        />
      </div>
    );
  };

  // Ocean layer for oceanic planets
  const renderOcean = () => {
    if (planet.type !== 'oceanic') return null;
    
    return (
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 opacity-80"
             style={{ 
               background: `radial-gradient(ellipse at center, ${planet.color} 0%, ${planet.color}99 60%, ${planet.color}66 100%)`,
             }}
        />
        <div className="absolute inset-0 opacity-40" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23FFFFFF' d='M33.6,-52.2C47.2,-45.9,64.4,-42.3,72.4,-31.7C80.3,-21.1,79.1,-3.5,74.5,12.5C69.9,28.4,61.9,42.5,49.9,49.4C37.9,56.3,21.9,55.9,6.8,57.1C-8.3,58.3,-23.6,61.1,-37.8,57.6C-52.1,54.1,-65.4,44.4,-70.7,31.3C-76.1,18.3,-73.6,1.8,-69.3,-13.1C-65,-28,-58.9,-41.2,-48.7,-49.3C-38.5,-57.4,-24.1,-60.5,-11.1,-61C1.9,-61.5,20,-58.4,33.6,-52.2Z' transform='translate(100 100)' /%3E%3C/svg%3E");`,
               backgroundSize: '120% 120%',
               backgroundPosition: 'center',
               animation: 'float 15s ease-in-out infinite',
             }}
        />
      </div>
    );
  };

  // Life layer for temperate planets
  const renderLife = () => {
    if (planet.type !== 'temperate') return null;
    
    return (
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 opacity-90"
             style={{ 
               background: `radial-gradient(ellipse at center, ${planet.color} 30%, ${planet.color}99 70%, ${planet.color}66 100%)`,
             }}
        />
        {planet.regenerationLevel > 1 && (
          <div className="absolute inset-0 opacity-40" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%233C8C56' d='M44.7,-76.4C58,-68.8,68.7,-55.3,73.7,-40.5C78.7,-25.7,78,-9.5,77.1,7.1C76.2,23.8,75.1,40.9,67.1,55.2C59.2,69.5,44.4,81,27.8,85.8C11.2,90.5,-7.2,88.5,-22.1,81.2C-37,73.9,-48.3,61.3,-61.4,48.6C-74.4,36,-89.2,23.2,-95.2,7C-101.2,-9.2,-98.4,-28.9,-88.2,-43.4C-78,-57.9,-60.4,-67.2,-43.7,-73.5C-27,-79.7,-11.2,-82.8,2.7,-87.7C16.6,-92.6,31.3,-83.9,44.7,-76.4Z' transform='translate(100 100) scale(0.8)' /%3E%3C/svg%3E");`,
                backgroundSize: '150% 150%',
                backgroundPosition: 'center',
                animation: 'float 20s ease-in-out infinite',
              }}
          />
        )}
        {planet.regenerationLevel > 3 && (
          <div className="absolute inset-0 opacity-40" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2348BB78' d='M38.8,-66C51.9,-60.7,65.2,-52.8,73.7,-40.9C82.2,-29.1,85.8,-13.5,84.1,1.1C82.3,15.6,75.1,29.2,65.5,40.5C55.9,51.9,44,61,30.9,67.7C17.9,74.3,3.8,78.4,-10,78.3C-23.8,78.2,-37.4,73.9,-50.2,66.5C-63,59.1,-75.1,48.6,-80.8,35.2C-86.5,21.8,-85.9,5.5,-83,-10.1C-80.1,-25.8,-74.8,-40.8,-64.5,-51.6C-54.2,-62.3,-38.8,-68.7,-24.2,-72.6C-9.6,-76.4,5.2,-77.6,17.4,-73.3C29.6,-68.9,40.2,-58.9,50.8,-49C61.4,-39,72,-29.2,77.4,-16.8C82.8,-4.4,82.8,10.6,77.7,22.7C72.6,34.9,62.3,44.1,50.4,51.5C38.4,58.9,24.8,64.4,11.4,65.8C-1.9,67.3,-15,64.6,-26.9,59.5C-38.8,54.3,-49.4,46.7,-58.1,36.9C-66.8,27,-73.6,14.9,-76.5,1.6C-79.5,-11.7,-78.6,-25.2,-72.2,-35.7C-65.9,-46.3,-54.2,-54,-41.8,-59.3C-29.4,-64.7,-16.4,-67.8,-2.3,-68.8C11.8,-69.8,25.7,-68.8,38.8,-66Z' transform='translate(100 100) scale(0.6)' /%3E%3C/svg%3E");`,
                backgroundSize: '130% 130%',
                backgroundPosition: 'center',
                animation: 'float 25s ease-in-out infinite reverse',
              }}
          />
        )}
      </div>
    );
  };

  return (
    <div 
      className={cn(
        "relative cursor-pointer transition-all duration-500 ease-out transform group",
        selected ? "scale-110 z-10" : "hover:scale-105",
        className
      )}
      onClick={onClick}
    >
      {/* Glow effect */}
      {selected && (
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse-soft" 
          style={{ backgroundColor: planet.color }}
        />
      )}
      
      {/* Planet base */}
      <div 
        className="relative flex items-center justify-center rounded-full overflow-hidden shadow-xl"
        style={{ 
          width: `${planet.size}px`,
          height: `${planet.size}px`,
          backgroundColor: planet.type === 'barren' || planet.type === 'rocky' ? planet.color : undefined,
          backgroundImage: planet.type === 'barren' || planet.type === 'rocky' 
            ? `radial-gradient(circle at 30% 30%, ${planet.color}80 0%, ${planet.color} 70%)`
            : undefined,
        }}
      >
        {/* Planet type-specific layers */}
        {renderClouds()}
        {renderOcean()}
        {renderLife()}
        
        {/* Regeneration indicator */}
        {planet.regenerationLevel > 0 && (
          <div 
            className={`absolute bottom-0 left-0 right-0 ${getRegenerationColor()} h-1 opacity-80`}
            style={{ width: `${regenerationPercentage}%` }}
          />
        )}
      </div>
      
      {/* Planet name */}
      <div className={`mt-2 text-center transition-opacity duration-300 ${selected ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
        <h3 className={`text-sm font-medium ${selected ? 'text-primary' : 'text-foreground'}`}>{planet.name}</h3>
        {selected && (
          <p className="text-xs text-muted-foreground mt-1 opacity-80">
            {getRegenerationDescription(planet.regenerationLevel, planet.maxRegenerationLevel)}
          </p>
        )}
      </div>
    </div>
  );
};

export default Planet;
