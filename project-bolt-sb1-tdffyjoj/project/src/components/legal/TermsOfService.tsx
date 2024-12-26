import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, Shield, Users2, Clock, AlertTriangle, Gem } from 'lucide-react';
import { LegalHero } from './shared/LegalHero';
import { LegalCard } from './shared/LegalCard';
import { Section } from '../ui/Section';
import { TermsSection } from './terms/TermsSection';

export function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - PixelForge</title>
        <meta name="description" content="Read PixelForge's terms of service to understand your rights and responsibilities." />
      </Helmet>

      <LegalHero
        title="Terms of Service"
        description="Clear and transparent terms for a trusted partnership"
        icon={<Scale className="w-8 h-8" />}
      />

      <Section className="py-16 sm:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <LegalCard
            title="Your Rights"
            icon={<Shield className="w-6 h-6" />}
            gradient="from-primary-500 to-accent-500"
          >
            <ul className="space-y-2 font-mono">
              <li>✓ Full ownership of your website and content</li>
              <li>✓ Access to source code and assets</li>
              <li>✓ Regular updates and maintenance</li>
              <li>✓ Data portability and export options</li>
              <li>✓ Intellectual property protection</li>
            </ul>
          </LegalCard>

          <LegalCard
            title="Our Commitment"
            icon={<Gem className="w-6 h-6" />}
            gradient="from-accent-500 to-primary-500"
          >
            <ul className="space-y-2 font-mono">
              <li>✓ Professional service delivery</li>
              <li>✓ Transparent communication</li>
              <li>✓ Industry best practices</li>
              <li>✓ Data security and privacy</li>
              <li>✓ Continuous support and guidance</li>
            </ul>
          </LegalCard>

          <LegalCard
            title="Project Timeline"
            icon={<Clock className="w-6 h-6" />}
            gradient="from-primary-500 to-accent-500"
          >
            <ul className="space-y-2 font-mono">
              <li>✓ Detailed project milestones</li>
              <li>✓ Regular progress updates</li>
              <li>✓ Scheduled review periods</li>
              <li>✓ On-time delivery guarantee</li>
              <li>✓ Flexible revision cycles</li>
            </ul>
          </LegalCard>

          <LegalCard
            title="Important Notes"
            icon={<AlertTriangle className="w-6 h-6" />}
            gradient="from-accent-500 to-primary-500"
          >
            <ul className="space-y-2 font-mono">
              <li>✓ Fair usage guidelines</li>
              <li>✓ Content requirements</li>
              <li>✓ Payment terms and schedules</li>
              <li>✓ Cancellation and refund policy</li>
              <li>✓ Service limitations</li>
            </ul>
          </LegalCard>
        </div>

        <div className="mt-16 space-y-12">
          <TermsSection title="1. Service Agreement">
            <p>
              By engaging our services, you agree to these terms and conditions. We provide professional web development, design, and related services as outlined in your project proposal.
            </p>
          </TermsSection>

          <TermsSection title="2. Intellectual Property">
            <p>
              Upon full payment, you receive complete ownership of the final deliverables. This includes custom code, design assets, and documentation created specifically for your project.
            </p>
          </TermsSection>

          <TermsSection title="3. Project Timeline">
            <p>
              Project timelines are established in the initial proposal. We commit to meeting agreed-upon deadlines while maintaining high quality standards throughout the development process.
            </p>
          </TermsSection>

          <TermsSection title="4. Payment Terms">
            <p>
              Payment schedules and terms are specified in your project proposal. We typically require a deposit to begin work, with remaining payments tied to project milestones.
            </p>
          </TermsSection>

          <TermsSection title="5. Support & Maintenance">
            <p>
              Post-launch support and maintenance terms are outlined in your service agreement. We provide ongoing technical support to ensure your website continues to perform optimally.
            </p>
          </TermsSection>
        </div>
      </Section>
    </>
  );
}