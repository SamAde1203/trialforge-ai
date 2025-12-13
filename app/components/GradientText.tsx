'use client';

import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
}

export function GradientText({ children, className = '', speed = 'medium' }: GradientTextProps) {
  const speedClass = {
    slow: 'animate-gradient-slow',
    medium: 'animate-gradient-medium',
    fast: 'animate-gradient-fast',
  }[speed];

  return (
    <span
      className={`bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent bg-300% ${speedClass} ${className}`}
    >
      {children}
    </span>
  );
}