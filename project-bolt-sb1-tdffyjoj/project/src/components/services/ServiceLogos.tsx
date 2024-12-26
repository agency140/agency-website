import React from 'react';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Globe, 
  Gauge, 
  Bot,
  Rocket,
  Zap
} from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { getAnimationClass } from '../../utils/animations';

const logos = [
  { 
    icon: Code2, 
    label: 'Full Stack Development',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    baseColor: 'bg-emerald-500'
  },
  { 
    icon: Bot, 
    label: 'AI Integration',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    baseColor: 'bg-violet-500'
  },
  { 
    icon: Palette, 
    label: 'UI/UX Engineering',
    gradient: 'from-lime-500 via-green-500 to-emerald-500',
    baseColor: 'bg-lime-500'
  },
  { 
    icon: Gauge, 
    label: 'Performance',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    baseColor: 'bg-amber-500'
  },
  { 
    icon: Rocket, 
    label: 'Technical SEO',
    gradient: 'from-sky-500 via-primary-500 to-indigo-500',
    baseColor: 'bg-sky-500'
  },
  { 
    icon: Zap, 
    label: 'Rapid Development',
    gradient: 'from-rose-500 via-pink-500 to-accent-500',
    baseColor: 'bg-rose-500'
  }
] as const;

export function ServiceLogos() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={logo.label}
                className={`flex flex-col items-center gap-3 group ${
                  getAnimationClass('scaleIn', isInView, index * 50)
                }`}
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${logo.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                  <div className={`relative w-20 h-20 flex items-center justify-center rounded-xl ${logo.baseColor} group-hover:bg-opacity-0 transition-colors duration-300 overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${logo.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <Icon className="relative z-10 w-10 h-10 text-white" />
                  </div>
                </div>
                <span className="text-sm font-mono font-medium text-gray-400 group-hover:text-white text-center transition-colors duration-300">
                  {logo.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}