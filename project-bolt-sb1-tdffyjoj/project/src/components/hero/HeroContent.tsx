import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export function HeroContent() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
      {/* Trending Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-mono mb-8 animate-fade-in hover:bg-white/20 transition-colors cursor-pointer">
        <Sparkles className="w-4 h-4" />
        <span>Crafting Digital Excellence</span>
      </div>
      
      {/* Main Headline */}
      <h1 className="font-mono text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-center animate-fade-in space-y-4">
        <span className="inline-block bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
          Forge Your
        </span>
        <span className="inline-block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
          Digital Future
        </span>
      </h1>
      
      {/* Modern Subheadline */}
      <p className="mt-4 text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto animate-fade-in animate-delay-100">
        Transform ideas into <span className="font-mono text-primary-400 font-semibold">extraordinary digital experiences</span> that drive growth in the AI era
      </p>

      {/* CTA Section */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in animate-delay-200">
        <Button 
          variant="gradient"
          size="lg"
          className="group w-full sm:w-auto relative overflow-hidden font-mono"
          onClick={() => navigate('/contact')}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Start Your Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border-white/20 hover:bg-white/10 font-mono"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Our Vision
        </Button>
      </div>
    </div>
  );
}