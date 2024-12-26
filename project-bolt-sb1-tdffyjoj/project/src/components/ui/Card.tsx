import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 
        rounded-2xl 
        shadow-xl 
        ${hover ? 'hover:shadow-2xl hover:-translate-y-1' : ''} 
        transition-all 
        duration-300 
        ${className}
      `}
    >
      {children}
    </div>
  );
}