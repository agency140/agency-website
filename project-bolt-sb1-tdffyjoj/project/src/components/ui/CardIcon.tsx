import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardIconProps {
  icon: LucideIcon;
  gradient: string;
  className?: string;
}

export function CardIcon({ icon: Icon, gradient, className = '' }: CardIconProps) {
  return (
    <div 
      className={`
        relative w-14 h-14 rounded-xl 
        before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:${gradient} before:opacity-0 
        after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-r after:${gradient} after:blur-lg after:opacity-0
        group-hover:before:opacity-100 group-hover:after:opacity-50
        transition-all duration-300 ${className}
      `}
    >
      <div className="absolute inset-0.5 rounded-[10px] bg-gray-900/90 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
    </div>
  );
}