import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 bg-white dark:bg-gray-900 transition-colors ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}