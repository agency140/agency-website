import React from 'react';
import { Helmet } from 'react-helmet-async';
import { sanitizeText } from '../utils/security/sanitize';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEOHead({
  title = 'WebCraft - Professional Web Development & Design Agency',
  description = 'WebCraft is a professional web development agency specializing in custom websites, UI/UX design, and responsive development. Transform your digital presence with our expert team.',
  keywords = 'web development, web design, UI/UX design, responsive design, SEO optimization, professional websites',
  image = '/og-image.jpg',
  url = 'https://extraordinary-otter-ff38f6.netlify.app'
}: SEOHeadProps) {
  const baseUrl = 'https://extraordinary-otter-ff38f6.netlify.app';
  
  return (
    <Helmet>
      <title>{sanitizeText(title)}</title>
      <meta name="description" content={sanitizeText(description)} />
      <meta name="keywords" content={sanitizeText(keywords)} />
      <link rel="canonical" href={sanitizeText(url)} />
      
      <meta property="og:title" content={sanitizeText(title)} />
      <meta property="og:description" content={sanitizeText(description)} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={sanitizeText(url)} />
      <meta property="og:image" content={`${baseUrl}${sanitizeText(image)}`} />
      <meta property="og:site_name" content="WebCraft" />
      
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta http-equiv="X-Frame-Options" content="DENY" />
      <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
      <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#4F46E5" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
}