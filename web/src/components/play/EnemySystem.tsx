"use client";

import React, { useState, useEffect, useCallback } from 'react';

interface Enemy {
  id: string;
  x: number;
  y: number;
  type: 'triangle' | 'square' | 'diamond';
  color: string;
  speed: number;
}

interface Projectile {
  id: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
}

interface EnemySystemProps {
  planetX: number;
  planetY: number;
  planetRadius: number;
}

const EnemySystem: React.FC<EnemySystemProps> = ({ planetX, planetY, planetRadius }) => {
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [projectiles, setProjectiles] = useState<Projectile[]>([]);
  const [score, setScore] = useState(0);

  // Spawn enemies
  useEffect(() => {
    const spawnInterval = setInterval(() => {
      const side = Math.random() > 0.5 ? 'left' : 'right';
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      const newEnemy: Enemy = {
        id: Math.random().toString(36).substr(2, 9),
        x: side === 'left' ? -50 : screenWidth + 50,
        y: Math.random() * screenHeight * 0.6 + screenHeight * 0.2, // Keep in middle area
        type: ['triangle', 'square', 'diamond'][Math.floor(Math.random() * 3)] as Enemy['type'],
        color: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6'][Math.floor(Math.random() * 6)],
        speed: 0.5 + Math.random() * 1
      };
      
      setEnemies(prev => [...prev, newEnemy]);
    }, 2000);

    return () => clearInterval(spawnInterval);
  }, []);

  // Move enemies toward planet
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setEnemies(prev => prev.map(enemy => {
        const dx = planetX - enemy.x;
        const dy = planetY - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // If enemy reaches planet, remove it (could add damage here)
        if (distance < planetRadius + 20) {
          return null;
        }
        
        const normalizedDx = dx / distance;
        const normalizedDy = dy / distance;
        
        return {
          ...enemy,
          x: enemy.x + normalizedDx * enemy.speed,
          y: enemy.y + normalizedDy * enemy.speed
        };
      }).filter(Boolean) as Enemy[]);
    }, 16); // ~60fps

    return () => clearInterval(moveInterval);
  }, [planetX, planetY, planetRadius]);

  // Move projectiles
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setProjectiles(prev => prev.map(projectile => {
        const dx = projectile.targetX - projectile.x;
        const dy = projectile.targetY - projectile.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 5) {
          return null; // Remove projectile when it reaches target
        }
        
        const normalizedDx = dx / distance;
        const normalizedDy = dy / distance;
        
        return {
          ...projectile,
          x: projectile.x + normalizedDx * projectile.speed,
          y: projectile.y + normalizedDy * projectile.speed
        };
      }).filter(Boolean) as Projectile[]);
    }, 16);

    return () => clearInterval(moveInterval);
  }, []);

  // Check collisions
  useEffect(() => {
    const collisionInterval = setInterval(() => {
      setEnemies(prevEnemies => {
        setProjectiles(prevProjectiles => {
          const remainingEnemies = [...prevEnemies];
          const remainingProjectiles = [...prevProjectiles];
          
          prevProjectiles.forEach((projectile, pIndex) => {
            prevEnemies.forEach((enemy, eIndex) => {
              const dx = projectile.x - enemy.x;
              const dy = projectile.y - enemy.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 25) { // Collision detected
                remainingEnemies.splice(eIndex, 1);
                remainingProjectiles.splice(pIndex, 1);
                setScore(prev => prev + 10);
              }
            });
          });
          
          return remainingProjectiles;
        });
        
        return prevEnemies.filter(enemy => {
          return !projectiles.some(projectile => {
            const dx = projectile.x - enemy.x;
            const dy = projectile.y - enemy.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            return distance < 25;
          });
        });
      });
    }, 16);

    return () => clearInterval(collisionInterval);
  }, [projectiles]);

  const shootAtEnemy = useCallback((enemy: Enemy) => {
    const range = 200;
    const dx = enemy.x - planetX;
    const dy = enemy.y - planetY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance <= range) {
      const newProjectile: Projectile = {
        id: Math.random().toString(36).substr(2, 9),
        x: planetX,
        y: planetY,
        targetX: enemy.x,
        targetY: enemy.y,
        speed: 3
      };
      
      setProjectiles(prev => [...prev, newProjectile]);
    }
  }, [planetX, planetY]);

  const renderEnemy = (enemy: Enemy) => {
    const size = 20;
    
    switch (enemy.type) {
      case 'triangle':
        return (
          <div
            key={enemy.id}
            className="absolute cursor-pointer"
            style={{
              left: enemy.x - size/2,
              top: enemy.y - size/2,
              width: 0,
              height: 0,
              borderLeft: `${size/2}px solid transparent`,
              borderRight: `${size/2}px solid transparent`,
              borderBottom: `${size}px solid ${enemy.color}`,
            }}
            onClick={() => shootAtEnemy(enemy)}
          />
        );
      case 'square':
        return (
          <div
            key={enemy.id}
            className="absolute cursor-pointer"
            style={{
              left: enemy.x - size/2,
              top: enemy.y - size/2,
              width: size,
              height: size,
              backgroundColor: enemy.color,
            }}
            onClick={() => shootAtEnemy(enemy)}
          />
        );
      case 'diamond':
        return (
          <div
            key={enemy.id}
            className="absolute cursor-pointer"
            style={{
              left: enemy.x - size/2,
              top: enemy.y - size/2,
              width: size,
              height: size,
              backgroundColor: enemy.color,
              transform: 'rotate(45deg)',
            }}
            onClick={() => shootAtEnemy(enemy)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Score display */}
      <div className="absolute top-20 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-white font-mono">
        Score: {score}
      </div>
      
      {/* Enemies */}
      {enemies.map(renderEnemy)}
      
      {/* Projectiles */}
      {projectiles.map(projectile => (
        <div
          key={projectile.id}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{
            left: projectile.x - 4,
            top: projectile.y - 4,
          }}
        />
      ))}
    </>
  );
};

export default EnemySystem;