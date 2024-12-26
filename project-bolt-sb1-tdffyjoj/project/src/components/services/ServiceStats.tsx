import React from 'react';
import { useInView } from '../../hooks/useInView';
import { getAnimationClass } from '../../utils/animations';

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '50+', label: 'Expert Developers' },
] as const;

export function ServiceStats() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center ${getAnimationClass('scaleIn', isInView, index * 100)}`}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}