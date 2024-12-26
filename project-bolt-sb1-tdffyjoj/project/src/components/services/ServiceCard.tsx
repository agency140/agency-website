import React from 'react';
import { LucideIcon } from 'lucide-react';
import { BaseCard } from '../ui/BaseCard';
import { CardIcon } from '../ui/CardIcon';
import { CardTitle } from '../ui/CardTitle';
import { CardFeatureList } from '../ui/CardFeatureList';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
}

export function ServiceCard({ title, description, features, icon, gradient }: ServiceCardProps) {
  return (
    <BaseCard>
      <div className="flex flex-col h-full">
        <div className="flex-none">
          <CardIcon icon={icon} gradient={gradient} />
        </div>
        
        <div className="flex-none mt-8">
          <CardTitle className="mb-4">{title}</CardTitle>
          <p className="text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex-grow mt-8">
          <CardFeatureList features={features} gradient={gradient} />
        </div>
      </div>
    </BaseCard>
  );
}