import React from 'react';
import { Heart, Shield, Zap, Award } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { getAnimationClass } from '../../utils/animations';

const values = [
  {
    title: 'Passion',
    description: 'We pour our heart into every project, treating each one as if it were our own.',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Excellence',
    description: 'We strive for perfection in every line of code and pixel we craft.',
    icon: Award,
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Innovation',
    description: "We embrace new technologies and push the boundaries of what's possible.",
    icon: Zap,
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Trust',
    description: 'We build lasting relationships through transparency and reliability.',
    icon: Shield,
    gradient: 'from-emerald-500 to-teal-500'
  }
] as const;

export function AboutValues() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${getAnimationClass('fadeIn', isInView)}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Our Values
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`text-center ${getAnimationClass('scaleIn', isInView, index * 100)}`}
              >
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${value.gradient} mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}