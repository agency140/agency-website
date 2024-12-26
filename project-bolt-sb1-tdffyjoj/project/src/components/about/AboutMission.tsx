import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { getAnimationClass } from '../../utils/animations';

const missions = [
  {
    title: 'Our Mission',
    description: 'To empower businesses with cutting-edge web solutions that drive growth and innovation in the digital age.',
    icon: Target,
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Our Vision',
    description: 'To be the leading force in shaping the future of web development, setting new standards for excellence and creativity.',
    icon: Lightbulb,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Our Promise',
    description: 'To deliver exceptional value through innovative solutions, transparent communication, and unwavering commitment to client success.',
    icon: Users,
    gradient: 'from-emerald-500 to-teal-500'
  }
];

export function AboutMission() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {missions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`text-center ${getAnimationClass('scaleIn', isInView, index * 100)}`}
              >
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-white mb-4">{item.title}</h2>
                <p className="text-gray-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}