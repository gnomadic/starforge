"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulse: number;
  speed: number; // Added speed property for parallax effect
}

const SpaceAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const starsRef = useRef<Star[]>([]);
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = svgRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    
    // Create stars with speed property
    starsRef.current = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      pulse: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 3, // Random speed for parallax effect
      // speed: Math.random() * 0.5 + 0.1, // Random speed for parallax effect
    }));

    // add another 100 stars that won't move
    starsRef.current = starsRef.current.concat(Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      pulse: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1
    })));
    
    // Add stars to the SVG
    starsRef.current.forEach((star) => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', star.x.toString());
      circle.setAttribute('cy', star.y.toString());
      circle.setAttribute('r', star.size.toString());
      circle.setAttribute('fill', 'white');
      circle.setAttribute('opacity', star.opacity.toString());
      circle.dataset.speed = star.speed.toString(); // Store speed as data attribute
      
      // Create the animation
      const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
      animate.setAttribute('attributeName', 'opacity');
      animate.setAttribute('values', `${star.opacity};${star.opacity * 0.5};${star.opacity}`);
      animate.setAttribute('dur', `${star.pulse}s`);
      animate.setAttribute('repeatCount', 'indefinite');
      
      circle.appendChild(animate);
      svg.appendChild(circle);
    });
    
    // Create nebula gradients
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    svg.appendChild(defs);
    
    // Create first radial gradient
    const gradient1 = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    gradient1.setAttribute('id', 'nebula1');
    gradient1.setAttribute('cx', '50%');
    gradient1.setAttribute('cy', '50%');
    gradient1.setAttribute('r', '50%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', 'rgba(111, 66, 193, 0.3)');
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', 'rgba(111, 66, 193, 0)');
    
    gradient1.appendChild(stop1);
    gradient1.appendChild(stop2);
    defs.appendChild(gradient1);
    
    // Create second radial gradient
    const gradient2 = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
    gradient2.setAttribute('id', 'nebula2');
    gradient2.setAttribute('cx', '50%');
    gradient2.setAttribute('cy', '50%');
    gradient2.setAttribute('r', '50%');
    
    const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop3.setAttribute('offset', '0%');
    stop3.setAttribute('stop-color', 'rgba(59, 130, 246, 0.2)');
    
    const stop4 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop4.setAttribute('offset', '100%');
    stop4.setAttribute('stop-color', 'rgba(59, 130, 246, 0)');
    
    gradient2.appendChild(stop3);
    gradient2.appendChild(stop4);
    defs.appendChild(gradient2);
    
    // Create nebulas
    const nebula1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    nebula1.setAttribute('cx', (width * 0.3).toString());
    nebula1.setAttribute('cy', (height * 0.4).toString());
    nebula1.setAttribute('r', (width * 0.15).toString());
    nebula1.setAttribute('fill', 'url(#nebula1)');
    nebula1.classList.add('animate-pulse-slow');
    nebula1.dataset.speed = '0.05'; // Slower speed for nebulas
    svg.appendChild(nebula1);
    
    const nebula2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    nebula2.setAttribute('cx', (width * 0.7).toString());
    nebula2.setAttribute('cy', (height * 0.6).toString());
    nebula2.setAttribute('r', (width * 0.2).toString());
    nebula2.setAttribute('fill', 'url(#nebula2)');
    nebula2.classList.add('animate-pulse-slow');
    nebula2.dataset.speed = '0.03'; // Even slower speed for this nebula
    svg.appendChild(nebula2);
    
    // Return cleanup function
    return () => {
      while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
      }
    };
  }, []);
  
  // Update star positions based on scroll
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = svgRef.current;
    const stars = svg.querySelectorAll('circle');
    
    stars.forEach((star) => {
      const speed = parseFloat(star.dataset.speed || '0');
      const initialY = parseFloat(star.getAttribute('data-initial-y') || star.getAttribute('cy') || '0');
      
      // Store initial position if not already stored
      if (!star.hasAttribute('data-initial-y')) {
        star.setAttribute('data-initial-y', star.getAttribute('cy') || '0');
      }
      
      // Calculate new position based on scroll
      const yOffset = scrollY * speed;
      star.setAttribute('cy', (initialY - yOffset).toString());
      // star.setAttribute('cy', (initialY - yOffset).toString());
    });
  }, [scrollY]);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg 
        ref={svgRef} 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="100%" height="100%" fill="url(#space-bg)" />
        <defs>
          <linearGradient id="space-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0c0c14" />
            <stop offset="50%" stopColor="#151830" />
            <stop offset="100%" stopColor="#1b1642" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SpaceAnimation;