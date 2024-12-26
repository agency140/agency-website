import React from 'react';
import { Card } from './ui/Card';
import { ContactHeader } from './contact/ContactHeader';
import { EmailSection } from './contact/EmailSection';
import { useInView } from '../hooks/useInView';

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-24 sm:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50/50 dark:from-gray-900 dark:to-indigo-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9IiM2MzY2RjEiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-40 dark:opacity-20" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <ContactHeader />
        </div>

        <div className={`mt-16 max-w-lg mx-auto ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
          <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <EmailSection />
          </Card>
        </div>
      </div>
    </section>
  );
}