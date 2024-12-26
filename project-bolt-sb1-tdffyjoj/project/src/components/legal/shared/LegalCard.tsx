import React from 'react';
import { Card } from '../../ui/Card';

interface LegalCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  gradient?: string;
}

export function LegalCard({ title, children, icon, gradient = 'from-primary-500 to-accent-500' }: LegalCardProps) {
  return (
    <Card className="group hover:scale-[1.02] transition-transform duration-300">
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          {icon && (
            <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${gradient} text-white`}>
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-xl font-mono font-semibold text-gray-900 dark:text-white group-hover:text-primary-400 dark:group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            <div className="mt-4 text-gray-600 dark:text-gray-300 space-y-2">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}