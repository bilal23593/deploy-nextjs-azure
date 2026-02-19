import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { TransitionEffect } from '@/components/TransitionEffect';
import { getSEOMeta } from '@/lib/seo';

const Privacy = () => {
  const seoMeta = getSEOMeta({
    title: 'Privacy Policy | CUBE CAKE STUDIIOS',
    description:
      'Our privacy policy outlines how CUBE CAKE STUDIIOS collects, uses, and protects your personal information.',
    canonicalUrl: 'https://cubecakestudios.com/privacy',
  });

  const lastUpdated = 'February 6, 2026';

  return (
    <>
      <Head>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={seoMeta.canonical} />
        <meta property="og:title" content={seoMeta.title} />
        <meta property="og:description" content={seoMeta.description} />
      </Head>

      <TransitionEffect />
      <main className="w-full min-h-screen bg-light dark:bg-dark">
        <Layout className="pt-16 pb-12">
          <div className="w-full max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark dark:text-light leading-tight mb-4">
                <AnimatedText text="Privacy Policy" />
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Last updated: {lastUpdated}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  CUBE CAKE STUDIIOS ("we", "our", or "us") operates the cubecakestudios.com
                  website. This privacy policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We collect information in various ways, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Information you voluntarily provide through forms (name, email, phone)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Information from third-party services (Google Analytics)</li>
                  <li>Device and usage information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We use collected information for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Processing and responding to your inquiries</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Analyzing site usage and improving our website</li>
                  <li>Complying with legal obligations</li>
                  <li>Preventing fraudulent transactions and other illegal activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  4. Cookies & Tracking
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We use cookies to enhance your experience on our website. Cookies help us
                  remember your preferences, understand how you use our site, and deliver
                  targeted advertisements. You can control cookie preferences through your browser
                  settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  5. Google Analytics
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We use Google Analytics to track site usage and performance. Google Analytics
                  collects information such as your IP address, browser type, pages visited, and
                  time spent on the site. Your privacy is protected through anonymization
                  features. You can opt-out by configuring your browser settings or using Google's
                  Analytics Opt-out Browser Add-on.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  6. Data Security
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We implement industry-standard security measures to protect your personal
                  information from unauthorized access and data breaches. However, no method of
                  transmission over the Internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  7. Your Privacy Rights
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent at any time</li>
                  <li>Object to processing of your data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  8. GDPR Compliance
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you are located in the European Union, you have rights under the General Data
                  Protection Regulation (GDPR). We process your data lawfully and only with your
                  consent. You can contact us to exercise your rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  9. Third-Party Links
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our website contains links to third-party websites. We are not responsible for
                  their privacy practices. Please review their privacy policies before providing
                  any personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  10. Contact Us
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have questions about this privacy policy, please contact us at:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> hello@cubecakestudios.com
                  <br />
                  <strong>Website:</strong> /contact
                </p>
              </section>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-primaryDark rounded-xl p-8 text-center">
              <p className="text-white mb-4">Have privacy concerns? We're here to help.</p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary font-bold px-8 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Privacy;
