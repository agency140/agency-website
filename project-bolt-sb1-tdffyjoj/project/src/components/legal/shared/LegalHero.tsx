import React from 'react';

interface LegalHeroProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function LegalHero({ title, description, icon }: LegalHeroProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-transparent dark:from-gray-800 dark:via-gray-900 dark:to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjI5IiB5PSIyOSIgZmlsbD0iIzAwNmZjYiIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-50 dark:opacity-20" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 text-white mb-8 animate-fade-in">
          {icon}
        </div>
        <h1 className="text-4xl sm:text-5xl font-mono font-bold text-gray-900 dark:text-white mb-6 animate-fade-in animate-delay-100">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in animate-delay-200 font-mono">
          {description}
        </p>
      </div>
    </div>
  );
}