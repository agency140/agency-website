import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { AboutHero } from '../components/about/AboutHero';
import { AboutMission } from '../components/about/AboutMission';
import { AboutValues } from '../components/about/AboutValues';
import { Footer } from '../components/footer/Footer';
import { BackButton } from '../components/ui/BackButton';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - WebCraft</title>
        <meta name="description" content="Learn about WebCraft's mission, values, and the innovative web development solutions we provide." />
      </Helmet>

      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main className="pt-16">
          <AboutHero />
          <AboutMission />
          <AboutValues />
        </main>
        <Footer />
        <BackButton />
      </div>
    </>
  );
}