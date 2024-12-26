import React from 'react';
import { Award, Users2, DollarSign, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { getAnimationClass } from '../utils/animations';

const reasons = [
  {
    title: 'Technical Excellence',
    description: 'Industry leaders with 10+ years of experience in cutting-edge development and innovation.',
    icon: Award,
    gradient: 'from-primary-500 to-accent-500',
  },
  {
    title: 'Collaborative Approach',
    description: 'We work closely with you to transform your vision into pixel-perfect digital experiences.',
    icon: Users2,
    gradient: 'from-accent-500 to-primary-500',
  },
  {
    title: 'Transparent Value',
    description: 'Clear pricing structure with exceptional ROI for your digital investment.',
    icon: DollarSign,
    gradient: 'from-primary-500 to-accent-500',
  },
  {
    title: 'Rapid Deployment',
    description: 'Swift delivery without compromising on code quality or performance.',
    icon: Clock,
    gradient: 'from-accent-500 to-primary-500',
  },
] as const;

export function WhyUs() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      id="why-us" 
      ref={ref}
      className="relative py-24 sm:py-32 bg-gray-900/50 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjI5IiB5PSIyOSIgZmlsbD0iIzAwNmZjYiIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center ${getAnimationClass('fadeIn', isInView)}`}>
          <h2 className="text-4xl sm:text-5xl font-mono font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Experience the power of technical excellence
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={reason.title}
                className={`group ${getAnimationClass('scaleIn', isInView, index * 100)}`}
              >
                <div className="flex gap-6 group-hover:-translate-y-1 transition-transform duration-300">
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-r ${reason.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-gray-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}