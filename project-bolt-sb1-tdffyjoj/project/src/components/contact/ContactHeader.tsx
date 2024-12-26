import React from 'react';

export function ContactHeader() {
  return (
    <div className="py-16 px-6 sm:py-20 lg:py-24 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-extrabold tracking-tight bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 text-transparent bg-clip-text mb-8">
        Let's Forge Something Amazing
      </h2>
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-8">
        Ready to transform your digital presence? Get in touch with our engineering team. 
        Together, we'll build something extraordinary.
      </p>
    </div>
  );
}