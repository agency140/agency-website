import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SEOHead } from './components/SEOHead';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { LegalLayout } from './components/legal/LegalLayout';
import { CookiePolicy } from './components/legal/CookiePolicy';
import { TermsOfService } from './components/legal/TermsOfService';
import { CookieConsent } from './components/cookie/CookieConsent';

export default function App() {
  return (
    <BrowserRouter>
      <SEOHead />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal" element={<LegalLayout />}>
          <Route path="cookies" element={<CookiePolicy />} />
          <Route path="terms" element={<TermsOfService />} />
        </Route>
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}