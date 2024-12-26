import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { Contact } from '../components/Contact';
import { Footer } from '../components/footer/Footer';
import { BackButton } from '../components/ui/BackButton';

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - WebCraft</title>
        <meta name="description" content="Get in touch with WebCraft for professional web development and design services. Transform your digital presence today." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gray-900">
        <Navbar />
        <main className="flex-1">
          <Contact />
        </main>
        <Footer />
        <BackButton />
      </div>
    </>
  );
}