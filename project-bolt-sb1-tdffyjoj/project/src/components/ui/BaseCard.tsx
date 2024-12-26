import React from 'react';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: string;
}

export function BaseCard({ 
  children, 
  className = '', 
  hover = true,
  gradient = 'from-indigo-500/50 via-purple-500/50 to-pink-500/50'
}: BaseCardProps) {
  return (
    <div className={`group h-full ${className}`}>
      <div className="relative flex flex-col h-full overflow-hidden">
        {/* Gradient Border Effect */}
        {hover && (
          <div 
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} 
          />
        )}
        
        {/* Main Card Content */}
        <div className="relative h-full p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/10 group-hover:border-transparent transition-all duration-300">
          {/* Hover Background Effect */}
          {hover && (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </>
          )}
          
          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}