import React from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { HeroContent } from './hero/HeroContent';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 px-4">
      <HeroBackground />
      <HeroContent />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}