import Link from 'next/link';
import Layout from '@/components/Layout';
import { TransitionEffect } from '@/components/TransitionEffect';
import SEOHead from '@/components/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | CUBE CAKE STUDIIOS"
        description="The page you are looking for could not be found."
        canonicalUrl="/404"
        noindex
        nofollow
      />

      <TransitionEffect />
      <main className="w-full min-h-screen bg-light dark:bg-dark flex items-center justify-center">
        <Layout>
          <div className="flex flex-col items-center justify-center text-center gap-8">
            {/* 404 Number */}
            <div className="relative">
              <h1 className="text-9xl md:text-[150px] font-extrabold text-primary/30 dark:text-primaryDark/30">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-4xl md:text-5xl font-bold text-dark dark:text-light">
                  Not Found
                </p>
              </div>
            </div>

            {/* Message */}
            <div className="mt-8 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-light mb-4">
                Oops! We Lost the Animation
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                The page you're looking for seems to have disappeared. But don't worry, we can get
                you back on track.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/" className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Go to Home
              </Link>
              <Link href="/portfolio" className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                View Portfolio
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-12 border-t border-gray-300 dark:border-gray-700 w-full max-w-2xl">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Here are some helpful links instead:
              </p>
              <nav className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Portfolio', href: '/portfolio' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Privacy', href: '/privacy' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-primary hover:text-primaryDark font-medium transition-colors">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default NotFound;
