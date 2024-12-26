import { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookie-consent-status';

export function useCookieConsent() {
  const [showBanner, setShowBanner] = useState(true);
  const [consentStatus, setConsentStatus] = useState<'accepted' | 'declined' | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored) {
      setConsentStatus(stored as 'accepted' | 'declined');
      setShowBanner(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setConsentStatus('accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setConsentStatus('declined');
    setShowBanner(false);
  };

  return {
    showBanner,
    consentStatus,
    acceptCookies,
    declineCookies,
  };
}