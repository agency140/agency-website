import React from 'react';
import { Logo } from '../ui/Logo';

export function FooterBottom() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Logo />
        <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} WebCraft. All rights reserved.
        </p>
      </div>
    </div>
  );
}