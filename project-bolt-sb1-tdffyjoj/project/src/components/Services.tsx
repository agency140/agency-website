import React from 'react';
import { Globe, Palette, Code, Smartphone, Gauge, Bot } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { getAnimationClass } from '../utils/animations';
import { ServiceCard } from './services/ServiceCard';

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Cutting-edge web applications built with modern technologies and best practices.',
    icon: Code,
    gradient: 'from-primary-500 to-accent-500',
    features: [
      'Next.js & React development',
      'API development & integration',
      'Progressive Web Apps (PWA)',
      'Database architecture',
      'Secure authentication'
    ]
  },
  {
    title: 'UI/UX Engineering',
    description: 'Pixel-perfect interfaces that combine aesthetics with functionality.',
    icon: Palette,
    gradient: 'from-accent-500 to-primary-500',
    features: [
      'Component-driven design',
      'Interactive prototypes',
      'Design system creation',
      'Accessibility (WCAG)',
      'Motion design'
    ]
  },
  {
    title: 'AI Integration',
    description: 'Leverage artificial intelligence to enhance your web applications.',
    icon: Bot,
    gradient: 'from-primary-500 to-accent-500',
    features: [
      'AI-powered features',
      'Machine learning integration',
      'Natural language processing',
      'Automated workflows',
      'Smart recommendations'
    ]
  },
  {
    title: 'Technical SEO',
    description: 'Engineered for maximum visibility and performance.',
    icon: Globe,
    gradient: 'from-accent-500 to-primary-500',
    features: [
      'Core Web Vitals',
      'Schema optimization',
      'Performance metrics',
      'Semantic HTML',
      'SEO automation'
    ]
  },
  {
    title: 'Performance',
    description: 'Blazing-fast applications optimized for scale.',
    icon: Gauge,
    gradient: 'from-primary-500 to-accent-500',
    features: [
      'Load time optimization',
      'Code splitting',
      'Asset optimization',
      'Caching strategies',
      'Performance monitoring'
    ]
  },
  {
    title: 'Responsive Engineering',
    description: 'Flawless experiences across all devices and platforms.',
    icon: Smartphone,
    gradient: 'from-accent-500 to-primary-500',
    features: [
      'Mobile-first architecture',
      'Cross-platform testing',
      'Performance optimization',
      'Responsive layouts',
      'Device compatibility'
    ]
  }
] as const;

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      id="services" 
      ref={ref}
      className="py-24 sm:py-32 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={getAnimationClass('fadeIn', isInView)}>
          <h2 className="text-4xl sm:text-5xl font-mono font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent-400 text-center">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-300 text-center max-w-2xl mx-auto">
            Technical excellence in every pixel
          </p>
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={getAnimationClass('scaleIn', isInView, index * 100)}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}