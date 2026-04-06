import { useEffect, useState } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasConsent = localStorage.getItem('cookieConsent');

    if (!hasConsent) {
      const timer = setTimeout(() => setShowConsent(true), 3500);
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

  if (!mounted || !showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(10,16,32,0.96),rgba(16,24,47,0.96))] p-4 text-light shadow-[0_30px_70px_-28px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-sm font-bold tracking-[0.01em] text-white">Cookie notice</h3>
            <p className="max-w-3xl text-xs leading-relaxed text-gray-300">
              We use cookies to improve the site experience and understand traffic. By accepting,
              you agree to our cookie usage.{' '}
              <Link href="/privacy#cookies" className="font-medium text-primaryDark hover:underline">
                Learn more
              </Link>
            </p>
          </div>

          <button
            onClick={handleReject}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-gray-400 transition-colors hover:text-light"
            aria-label="Close cookie banner"
          >
            X
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-stretch">
          <button
            onClick={handleReject}
            className="min-w-[112px] rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-light transition-colors hover:bg-white/[0.06] sm:flex-1"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="min-w-[132px] rounded-full bg-[linear-gradient(135deg,#d27bc2_0%,#74ece3_100%)] px-4 py-2 text-xs font-bold text-[#08111f] shadow-[0_18px_40px_-22px_rgba(116,236,227,0.8)] transition-transform duration-300 hover:-translate-y-0.5 sm:flex-1"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
