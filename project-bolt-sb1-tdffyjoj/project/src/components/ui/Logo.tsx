import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link 
      to="/" 
      className={`flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}
      aria-label="WebCraft - Return to homepage"
    >
      <Code2 className="h-8 w-8 text-primary-600 dark:text-primary-400" />
      <span className="text-xl font-mono font-bold text-gray-900 dark:text-white">
        WebCraft
      </span>
    </Link>
  );
}