import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../footer/Footer';
import { BackButton } from '../ui/BackButton';

export function LegalLayout() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-16 pb-16">
        <Outlet />
      </main>
      <Footer />
      <BackButton />
    </div>
  );
}