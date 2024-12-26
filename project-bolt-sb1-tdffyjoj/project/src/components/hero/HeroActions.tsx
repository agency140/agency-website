import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export function HeroActions() {
  const navigate = useNavigate();

  return (
    <div className="mt-12 flex flex-col items-center animate-fade-in animate-delay-200">
      <Button 
        variant="gradient"
        size="lg"
        className="group"
        onClick={() => navigate('/contact')}
        aria-label="Contact us"
      >
        <Sparkles className="w-4 h-4" />
        Start Your Project
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
      
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Join the innovators shaping the digital future
      </p>
    </div>
  );
}