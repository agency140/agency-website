import React from 'react';
import { Sparkles } from 'lucide-react';

export function HeroHeadline() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium animate-fade-in">
        <Sparkles className="w-4 h-4" />
        Crafting Digital Excellence
      </div>
      
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-center [text-wrap:balance] leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-600 to-gray-900 dark:from-white dark:via-indigo-400 dark:to-white animate-fade-in">
        Transform Your Vision Into Reality
      </h1>
      
      <p className="mt-6 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl text-center animate-fade-in animate-delay-100">
        We create <span className="text-indigo-600 dark:text-indigo-400 font-semibold">stunning digital experiences</span> that captivate your audience and drive growth
      </p>
    </div>
  );
}