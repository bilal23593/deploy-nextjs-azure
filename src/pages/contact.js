import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { TransitionEffect } from '@/components/TransitionEffect';
import ContactForm from '@/components/ContactForm';
import { contactMethods, socialLinks } from '@/data/social';
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  DribbbleIcon,
  SkypeIcon,
  TelegramIcon,
} from '@/components/Icons';
import SEOHead from '@/components/SEOHead';
import { getBreadcrumbSchema, getContactSchema, getWebPageSchema } from '@/lib/seo';

const socialIconMap = {
  GitHub: GithubIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon,
  Dribbble: DribbbleIcon,
  Skype: SkypeIcon,
  Telegram: TelegramIcon,
};

const contactHighlights = [
  { value: '24h', label: 'Average Reply Time' },
  { value: '48h', label: 'Project Kickoff' },
  { value: '95%', label: 'Client Retention' },
];

const engagementModes = [
  'Project Quotes',
  'Explainer Videos',
  '2D Animation',
  'Brand Identity',
  'UI/UX Design',
  'Website Design',
];

const processSteps = [
  {
    title: 'Share Your Vision',
    description: 'Tell us what you are building, your goals, and the style you want.',
  },
  {
    title: 'Get a Creative Blueprint',
    description: 'Receive a clear strategy, timeline, and deliverables tailored to your project.',
  },
  {
    title: 'Launch With Confidence',
    description: 'We execute, refine, and ship polished work ready for your audience.',
  },
];

const Contact = () => {
  const contactTitle = 'Contact Us | CUBE CAKE STUDIIOS';
  const contactDescription =
    'Get in touch with CUBE CAKE STUDIIOS. Contact our team for inquiries, project quotes, or partnership opportunities.';
  const contactSchema = getContactSchema();
  const contactPageSchema = getWebPageSchema({
    title: contactTitle,
    description: contactDescription,
    url: '/contact',
    type: 'ContactPage',
  });
  const contactBreadcrumbSchema = getBreadcrumbSchema([
    { title: 'Home', url: '/' },
    { title: 'Contact', url: '/contact' },
  ]);

  return (
    <>
      <SEOHead
        title={contactTitle}
        description={contactDescription}
        canonicalUrl="/contact"
        keywords={['contact animation agency', 'project inquiry', 'creative brief', 'quote request']}
        ogType="website"
        structuredData={[contactPageSchema, contactSchema, contactBreadcrumbSchema]}
      />

      <TransitionEffect />

      <main className="w-full min-h-screen bg-light dark:bg-dark overflow-hidden">
        <section className="relative w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(182,62,150,0.24),transparent_36%),radial-gradient(circle_at_86%_80%,rgba(88,230,217,0.2),transparent_30%),linear-gradient(150deg,rgba(255,255,255,0.78),rgba(229,219,255,0.45),rgba(236,251,255,0.56))] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(182,62,150,0.22),transparent_36%),radial-gradient(circle_at_86%_80%,rgba(88,230,217,0.16),transparent_32%),linear-gradient(160deg,rgba(20,20,24,0.95),rgba(36,19,42,0.88),rgba(17,26,44,0.92))]" />
          <motion.div
            className="absolute -top-20 right-[12%] h-64 w-64 rounded-full bg-primary/25 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.28, 0.45, 0.28] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-[8%] h-56 w-56 rounded-full bg-primaryDark/25 blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />

          <Layout className="relative pt-8 pb-10 lg:pt-7 lg:pb-8 md:pt-6 md:pb-6">
            <div className="grid grid-cols-12 gap-7 lg:grid-cols-1 lg:gap-6 items-stretch">
              <motion.div
                className="col-span-7 rounded-[2rem] border border-white/45 dark:border-white/10 bg-white/65 dark:bg-black/25 backdrop-blur-xl px-8 py-9 lg:px-6 lg:py-7 md:px-5 md:py-6 shadow-[0_22px_70px_-40px_rgba(90,64,180,0.52)]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    Contact Hub
                  </span>
                  <span className="rounded-full border border-gray-300/70 dark:border-gray-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-700 dark:text-gray-300">
                    CUBE CAKE STUDIIOS
                  </span>
                </div>

                <h1 className="mt-5 text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-[1.05] text-dark dark:text-light">
                  Lets craft something that people cannot ignore.
                </h1>

                <p className="mt-5 max-w-2xl text-base lg:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  From high-energy animation to polished brand experiences, we convert ideas into visuals
                  that perform. Send your brief and we will map the smartest route from concept to launch.
                </p>

                <div className="mt-6 grid grid-cols-3 md:grid-cols-1 gap-3">
                  {contactHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/40 dark:border-gray-700 bg-white/75 dark:bg-black/35 px-4 py-3"
                    >
                      <p className="text-2xl md:text-xl font-black text-dark dark:text-light leading-none">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.12em] font-semibold text-dark/70 dark:text-gray-300">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {engagementModes.map((mode) => (
                    <span
                      key={mode}
                      className="rounded-full border border-gray-300/70 dark:border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {mode}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="col-span-5 rounded-[2rem] border border-white/40 dark:border-gray-700/60 bg-dark text-light px-7 py-8 lg:px-6 lg:py-7 md:px-5 md:py-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(182,62,150,0.45),transparent_38%),radial-gradient(circle_at_15%_90%,rgba(88,230,217,0.3),transparent_42%)]" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primaryDark">Fast Lane</p>
                  <h2 className="mt-2 text-3xl md:text-2xl font-black leading-tight">
                    Need momentum now? We can start within 48 hours.
                  </h2>
                  <p className="mt-3 text-sm text-gray-200/90">
                    Priority support for founders, marketers, and creators preparing for launch.
                  </p>

                  <div className="mt-6 space-y-3">
                    {contactMethods.slice(0, 3).map((method) => (
                      <div
                        key={method.label}
                        className="rounded-xl border border-white/20 bg-white/10 px-4 py-3"
                      >
                        <p className="text-[11px] uppercase tracking-[0.14em] text-gray-300">{method.label}</p>
                        {method.link ? (
                          <a
                            href={method.link}
                            className="mt-1 inline-block text-sm font-semibold text-light hover:text-primaryDark transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-semibold text-light">{method.value}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact-form"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-light px-5 py-2.5 text-sm font-bold text-dark transition hover:scale-[1.03]"
                  >
                    Start your brief
                    <span aria-hidden>&rarr;</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </Layout>
        </section>

        <section className="w-full pb-8 lg:pb-7 md:pb-6">
          <Layout className="pt-0">
            <div className="grid grid-cols-12 gap-7 lg:grid-cols-1 lg:gap-6">
              <div className="col-span-4 space-y-5">
                <div className="rounded-[1.75rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/70 p-6">
                  <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Contact Channels</p>
                  <h3 className="mt-2 text-2xl font-black text-dark dark:text-light">Direct Lines</h3>
                  <div className="mt-5 space-y-3">
                    {contactMethods.map((method) => (
                      <div
                        key={method.label}
                        className="rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3"
                      >
                        <p className="text-[11px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                          {method.label}
                        </p>
                        {method.link ? (
                          <a
                            href={method.link}
                            className="mt-1 inline-block text-sm font-semibold text-dark dark:text-light hover:text-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-semibold text-dark dark:text-light">{method.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/70 p-6">
                  <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Stay Connected</p>
                  <h3 className="mt-2 text-2xl font-black text-dark dark:text-light">Social Presence</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {socialLinks.slice(0, 8).map((link) => {
                      const Icon = socialIconMap[link.name];
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.name}
                          className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-dark dark:text-light hover:border-primary hover:text-primary hover:scale-110 transition"
                        >
                          {Icon ? (
                            <Icon className="w-4 h-4" />
                          ) : (
                            <span className="text-xs font-bold">{link.name.charAt(0)}</span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div id="contact-form" className="col-span-8">
                <ContactForm />
              </div>
            </div>
          </Layout>
        </section>

        <section className="w-full pb-12 lg:pb-10 md:pb-8">
          <Layout className="pt-0">
            <div className="rounded-[2rem] border border-gray-200/80 dark:border-gray-700/70 bg-gradient-to-br from-white via-purple-50/60 to-cyan-50/60 dark:from-dark dark:via-purple-900/20 dark:to-cyan-900/20 p-8 lg:p-6 md:p-5">
              <div className="flex items-start justify-between gap-6 lg:flex-col">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">What Happens Next</p>
                  <h2 className="mt-2 text-4xl lg:text-3xl md:text-2xl font-black text-dark dark:text-light">
                    Your message becomes momentum.
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/services"
                    className="rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-dark dark:text-light hover:border-primary hover:text-primary transition"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/portfolio"
                    className="rounded-full bg-dark text-light dark:bg-light dark:text-dark px-5 py-2.5 text-sm font-bold hover:scale-[1.03] transition"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-3 lg:grid-cols-1 gap-4">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/85 dark:bg-black/25 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Step 0{index + 1}</p>
                    <h3 className="mt-2 text-lg font-black text-dark dark:text-light">{step.title}</h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Layout>
        </section>
      </main>
    </>
  );
};

export default Contact;
