import React from 'react';
import { useInView } from '../../hooks/useInView';
import { getAnimationClass } from '../../utils/animations';

export function AboutHero() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 via-accent-500/20 to-primary-500/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_65%)] from-primary-400/15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className={`font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${getAnimationClass('fadeIn', isInView)}`}>
            <span className="block bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
              Crafting Digital Excellence
            </span>
            <span className="block mt-4 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Since 2015
            </span>
          </h1>
          <p className={`mt-6 text-xl text-gray-300 max-w-2xl mx-auto ${getAnimationClass('fadeIn', isInView, 100)}`}>
            We're a team of passionate developers, designers, and digital craftsmen dedicated to creating exceptional web experiences that inspire and innovate.
          </p>
        </div>
      </div>
    </section>
  );
}