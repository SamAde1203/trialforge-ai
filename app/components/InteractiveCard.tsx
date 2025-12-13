'use client';

import { HTMLAttributes, ReactNode } from 'react';

interface InteractiveCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverEffect?: 'glow' | 'lift' | 'both';
}

export function InteractiveCard({ 
  children, 
  className = '', 
  hoverEffect = 'both',
  ...props 
}: InteractiveCardProps) {
  const hoverEffects = {
    glow: 'hover:shadow-2xl hover:shadow-blue-900/20',
    lift: 'hover:scale-[1.02] hover:-translate-y-1',
    both: 'hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/20',
  }[hoverEffect];

  return (
    <div
      className={`group transition-all duration-300 ${hoverEffects} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}