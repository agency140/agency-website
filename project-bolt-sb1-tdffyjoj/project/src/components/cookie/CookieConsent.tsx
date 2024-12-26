import React from 'react';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export function CookieConsent() {
  const { showBanner, acceptCookies, declineCookies } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg border-t border-gray-200 dark:border-gray-700 z-50 animate-slide-in-up">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
              <Cookie className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-300 [text-wrap:pretty]">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
                <Link to="/legal/cookies" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex">
                  Learn more
                </Link>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="flex-1 sm:flex-none"
            >
              Decline
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={acceptCookies}
              className="flex-1 sm:flex-none"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}