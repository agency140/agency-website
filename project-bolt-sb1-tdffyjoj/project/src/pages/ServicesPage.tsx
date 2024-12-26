import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceLogos } from '../components/services/ServiceLogos';
import { Services } from '../components/Services';
import { OpportunitySection } from '../components/OpportunitySection';
import { Footer } from '../components/footer/Footer';
import { BackButton } from '../components/ui/BackButton';

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Professional Web Development Services - WebCraft</title>
        <meta 
          name="description" 
          content="Transform your digital presence with WebCraft's professional web development services. Custom websites, UI/UX design, responsive development, and SEO optimization." 
        />
        <meta 
          name="keywords" 
          content="web development, web design, UI/UX design, responsive design, SEO optimization, professional websites, custom web development"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main className="pt-16">
          <ServiceHero />
          <ServiceLogos />
          <Services />
          <OpportunitySection />
        </main>
        <Footer />
        <BackButton />
      </div>
    </>
  );
}