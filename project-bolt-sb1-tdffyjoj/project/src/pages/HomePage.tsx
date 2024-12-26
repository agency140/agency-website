import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WhyUs } from '../components/WhyUs';
import { OpportunitySection } from '../components/OpportunitySection';
import { Footer } from '../components/footer/Footer';

export function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="pt-16">
          <Hero />
          <WhyUs />
          <OpportunitySection />
        </div>
      </main>
      <Footer />
    </>
  );
}