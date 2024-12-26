import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './ui/Logo';
import { Dropdown } from './ui/Dropdown';

const legalItems = [
  { label: 'Terms of Service', href: '/legal/terms' },
  { label: 'Cookie Policy', href: '/legal/cookies' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full z-50 top-4 left-0 right-0 px-4">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`relative backdrop-blur-md rounded-2xl transition-all duration-300 ${
            isHovered 
              ? 'bg-gray-900/95'
              : 'bg-gray-900/80'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
            isHovered
              ? 'opacity-100'
              : 'opacity-70'
          }`}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/30 via-accent-500/30 to-primary-500/30 blur-xl" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Logo className={isHovered ? '[&>span]:text-white [&>svg]:text-white' : ''} />
              
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  to="/about"
                  className={`font-mono transition-colors duration-300 ${
                    isHovered ? 'text-white hover:text-accent-200' : 'text-gray-300 hover:text-primary-400'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/services"
                  className={`font-mono transition-colors duration-300 ${
                    isHovered ? 'text-white hover:text-accent-200' : 'text-gray-300 hover:text-primary-400'
                  }`}
                >
                  Services
                </Link>
                <button 
                  onClick={() => navigate('/contact')}
                  className={`font-mono transition-colors duration-300 ${
                    isHovered ? 'text-white hover:text-accent-200' : 'text-gray-300 hover:text-primary-400'
                  }`}
                >
                  Contact
                </button>
                <Dropdown 
                  label="Legal" 
                  items={legalItems}
                  className={`font-mono transition-colors duration-300 ${
                    isHovered ? 'text-white hover:text-accent-200' : 'text-gray-300 hover:text-primary-400'
                  }`}
                />
              </div>

              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  className={`transition-colors duration-300 ${
                    isHovered ? 'text-white hover:text-accent-200' : 'text-gray-300 hover:text-primary-400'
                  }`}
                >
                  {isMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="relative md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-b-2xl border-t border-white/10">
                <Link 
                  to="/about"
                  className={`block px-3 py-2 font-mono transition-colors duration-300 ${
                    isHovered ? 'text-white hover:text-accent-200' : 'text-gray-300 hover:text-primary-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/services"
                  className={`block px-3 py-2 font-mono transition-colors duration-300 ${
                    isHovered ? 'text-white hover:text-accent-200' : 'text-gray-300 hover:text-primary-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <button 
                  onClick={() => {
                    navigate('/contact');
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 font-mono transition-colors duration-300 ${
                    isHovered ? 'text-white hover:text-accent-200' : 'text-gray-300 hover:text-primary-400'
                  }`}
                >
                  Contact
                </button>
                {legalItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-3 py-2 font-mono transition-colors duration-300 ${
                      isHovered ? 'text-white hover:text-accent-200' : 'text-gray-300 hover:text-primary-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}