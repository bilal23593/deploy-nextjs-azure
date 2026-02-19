import { useEffect, useState } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      // Show consent banner after 1 second
      const timer = setTimeout(() => setShowConsent(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
  };

  // Only render on client side to avoid hydration mismatch
  if (!mounted || !showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-dark dark:bg-gray-900 text-light rounded-xl shadow-2xl border border-gray-700 p-6 sm:p-8 sm:flex sm:items-center sm:justify-between gap-6">
        {/* Text Content */}
        <div className="flex-1 mb-4 sm:mb-0">
          <h3 className="font-bold text-lg mb-2">We Use Cookies</h3>
          <p className="text-sm text-gray-300">
            We use cookies to enhance your experience, analyze site traffic, and serve personalized
            content. By accepting, you agree to our cookie usage.{' '}
            <Link href="/privacy#cookies" className="text-primary hover:underline font-medium">
              Learn more
            </Link>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 flex-col sm:flex-row sm:flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-6 py-2 border border-gray-600 text-light rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-gradient-to-r from-primary to-primaryDark text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all font-medium text-sm"
          >
            Accept
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={handleReject}
          className="absolute top-4 right-4 text-gray-400 hover:text-light transition-colors"
          aria-label="Close cookie banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
