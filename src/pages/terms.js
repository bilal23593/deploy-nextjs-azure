import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { TransitionEffect } from '@/components/TransitionEffect';
import { getSEOMeta } from '@/lib/seo';

const Terms = () => {
  const seoMeta = getSEOMeta({
    title: 'Terms of Service | CUBE CAKE STUDIIOS',
    description:
      'Terms of Service and use conditions for CUBE CAKE STUDIIOS website and services.',
    canonicalUrl: 'https://cubecakestudios.com/terms',
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
                <AnimatedText text="Terms of Service" />
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Last updated: {lastUpdated}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert mb-12">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  By accessing and using this website, you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  2. Use License
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of the materials (graphics,
                  text, and information) from CUBE CAKE STUDIIOS for personal, non-commercial
                  transitory viewing only. This is the grant of a license, not a transfer of title,
                  and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software on the site</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>
                    Transfer the materials to another person or "mirror" the materials on any other
                    server
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  3. Disclaimer of Warranties
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The materials on CUBE CAKE STUDIIOS are provided on an 'as is' basis. CUBE CAKE
                  STUDIIOS makes no warranties, expressed or implied, and hereby disclaims and
                  negates all other warranties including, without limitation, implied warranties or
                  conditions of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  4. Limitations of Liability
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In no event shall CUBE CAKE STUDIIOS or its suppliers be liable for any damages
                  (including, without limitation, damages for loss of data or profit, or due to
                  business interruption) arising out of the use or inability to use the materials
                  on CUBE CAKE STUDIIOS, even if CUBE CAKE STUDIIOS or an authorized representative
                  has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  5. Accuracy of Materials
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The materials appearing on CUBE CAKE STUDIIOS could include technical,
                  typographical, or photographic errors. CUBE CAKE STUDIIOS does not warrant that
                  any of the materials on the website are accurate, complete, or current. CUBE CAKE
                  STUDIIOS may make changes to the materials contained on the website at any time
                  without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  6. Links
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  CUBE CAKE STUDIIOS has not reviewed all of the sites linked to its website and is
                  not responsible for the contents of any such linked site. The inclusion of any
                  link does not imply endorsement by CUBE CAKE STUDIIOS of the site. Use of any such
                  linked website is at the user's own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  7. Modifications
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  CUBE CAKE STUDIIOS may revise these terms of service for the website at any time
                  without notice. By using this website, you are agreeing to be bound by the then
                  current version of these terms of service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  8. Governing Law
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  These terms and conditions are governed by and construed in accordance with the
                  laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the
                  courts in that location.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  9. Service Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our design and animation services are provided on a project basis. Upon request:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>We provide project quotes based on requirements</li>
                  <li>Clients must provide content and direction for projects</li>
                  <li>Revisions are included within the agreed scope</li>
                  <li>Payment terms are discussed and agreed upon before project initiation</li>
                  <li>Deliverables are provided in agreed formats</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  10. Intellectual Property
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  All content on this website, including original animations, designs, and written
                  material, is the intellectual property of CUBE CAKE STUDIIOS unless otherwise
                  stated. You may not reproduce, distribute, or transmit any content without prior
                  written consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-dark dark:text-light mb-4">
                  11. Contact Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have any questions about these terms, please contact us at:
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
              <p className="text-white mb-4">Questions about our terms? Get in touch!</p>
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

export default Terms;
