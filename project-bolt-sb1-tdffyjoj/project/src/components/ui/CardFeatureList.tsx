import React from 'react';

interface CardFeatureListProps {
  features: string[];
  gradient: string;
}

export function CardFeatureList({ features, gradient }: CardFeatureListProps) {
  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li 
          key={index} 
          className="flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors"
        >
          <div className="relative flex-shrink-0 w-1.5 h-1.5 mt-2.5">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient}`} />
            <div 
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
          </div>
          <span className="leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
  );
}