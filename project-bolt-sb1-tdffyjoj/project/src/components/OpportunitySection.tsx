import React from 'react';
import { TrendingUp, Timer, Rocket, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { getAnimationClass } from '../utils/animations';

const opportunities = [
  {
    title: 'Market Growth',
    description: 'Digital presence is no longer optional. Every day without a professional website is a missed opportunity to reach potential customers.',
    icon: TrendingUp,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    iconBg: 'bg-emerald-500'
  },
  {
    title: 'Limited Time Offer',
    description: 'Take advantage of our current rates before they increase. Lock in premium development services at today\'s prices.',
    icon: Timer,
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    iconBg: 'bg-violet-500'
  },
  {
    title: 'Competitive Edge',
    description: 'While competitors struggle with outdated websites, seize the opportunity to stand out with a modern, high-performance digital presence.',
    icon: Rocket,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    iconBg: 'bg-amber-500'
  },
  {
    title: 'Immediate Impact',
    description: 'Start seeing results from day one. Our optimized websites are designed to convert visitors into customers from the moment they launch.',
    icon: Zap,
    gradient: 'from-sky-500 via-primary-500 to-indigo-500',
    iconBg: 'bg-sky-500'
  }
];

export function OpportunitySection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 bg-gray-900"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIvPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjI5IiB5PSIyOSIgZmlsbD0iIzAwNmZjYiIgZmlsbC1vcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center ${getAnimationClass('fadeIn', isInView)}`}>
          <h2 className="text-4xl sm:text-5xl font-mono font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400 mb-6">
            Don't Miss This Opportunity
          </h2>
          <p className="text-xl text-gray-300">
            The digital landscape waits for no one. Transform your online presence today.
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2">
          {opportunities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group ${getAnimationClass('scaleIn', isInView, index * 100)}`}
              >
                <div className="flex gap-6 group-hover:-translate-y-1 transition-transform duration-300">
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-mono font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-300">
                      {item.description}
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