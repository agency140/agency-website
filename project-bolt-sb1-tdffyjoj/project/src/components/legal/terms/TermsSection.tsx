import React from 'react';

interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

export function TermsSection({ title, children }: TermsSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-mono font-semibold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="text-gray-600 dark:text-gray-300 space-y-4 font-mono">
        {children}
      </div>
    </div>
  );
}