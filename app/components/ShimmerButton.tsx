'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ShimmerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function ShimmerButton({ children, className = '', ...props }: ShimmerButtonProps) {
  return (
    <button
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:from-cyan-500 hover:to-blue-500 hover:shadow-cyan-400/40 ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 translate-y-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:translate-y-0" />
      <div className="absolute -top-12 -left-12 h-32 w-32 animate-shimmer rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </button>
  );
}