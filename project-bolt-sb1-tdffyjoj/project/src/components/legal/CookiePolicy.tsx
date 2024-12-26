import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, BarChart, Wrench, Settings } from 'lucide-react';
import { LegalHero } from './shared/LegalHero';
import { LegalCard } from './shared/LegalCard';
import { Section } from '../ui/Section';

export function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - WebCraft</title>
        <meta name="description" content="Learn about how WebCraft uses cookies to improve your experience." />
      </Helmet>

      <LegalHero
        title="Cookie Policy"
        description="Understanding how we use cookies to enhance your experience"
        icon={<Cookie className="w-8 h-8" />}
      />

      <Section className="py-16 sm:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <LegalCard
            title="Essential Cookies"
            icon={<Shield className="w-6 h-6" />}
            gradient="from-blue-500 to-indigo-500"
          >
            <p>These cookies are necessary for the website to function properly. They enable:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Secure authentication and login</li>
              <li>Website security features</li>
              <li>Basic functionality and navigation</li>
              <li>Session management</li>
            </ul>
          </LegalCard>

          <LegalCard
            title="Analytics Cookies"
            icon={<BarChart className="w-6 h-6" />}
            gradient="from-purple-500 to-pink-500"
          >
            <p>Help us understand user behavior and improve our services through:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Page view and interaction tracking</li>
              <li>Traffic source analysis</li>
              <li>User journey mapping</li>
              <li>Performance monitoring</li>
            </ul>
          </LegalCard>

          <LegalCard
            title="Functional Cookies"
            icon={<Wrench className="w-6 h-6" />}
            gradient="from-emerald-500 to-teal-500"
          >
            <p>Enhance your experience with personalized features:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Language preferences</li>
              <li>Theme settings</li>
              <li>User customizations</li>
              <li>Form auto-completion</li>
            </ul>
          </LegalCard>

          <LegalCard
            title="Cookie Management"
            icon={<Settings className="w-6 h-6" />}
            gradient="from-orange-500 to-red-500"
          >
            <p>You have full control over cookies through:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Browser settings customization</li>
              <li>Cookie consent preferences</li>
              <li>Individual cookie blocking</li>
              <li>Cookie deletion options</li>
            </ul>
          </LegalCard>
        </div>
      </Section>
    </>
  );
}