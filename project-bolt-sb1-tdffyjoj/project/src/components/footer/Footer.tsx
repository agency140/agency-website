import React from 'react';
import { FooterLinks } from './FooterLinks';
import { FooterBottom } from './FooterBottom';

export function Footer() {
  return (
    <footer className="relative bg-white dark:bg-gray-900 transition-colors border-t border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800/50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}