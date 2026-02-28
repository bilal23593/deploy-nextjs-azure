import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import LeadRoutingPanel from "@/components/LeadRoutingPanel";
import SEOHead from "@/components/SEOHead";
import TrackedInternalLink from "@/components/TrackedInternalLink";
import { TransitionEffect } from "@/components/TransitionEffect";
import { getBlogArticlesByServiceSlug } from "@/data/blogArticles";
import { getCaseStudiesByServiceSlug } from "@/data/caseStudies";
import {
  getBreadcrumbSchema,
  getVideoObjectSchema,
  getWebPageSchema,
  SITE_URL,
  toAbsoluteUrl,
} from "@/lib/seo";

const getServiceSchema = (config, canonicalPath) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: config.h1,
  serviceType: config.h1,
  description: config.description,
  areaServed: "Worldwide",
  url: toAbsoluteUrl(canonicalPath),
  provider: {
    "@id": `${SITE_URL}/#organization`,
  },
  audience: {
    "@type": "Audience",
    audienceType: "Startups and growth brands",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    url: toAbsoluteUrl("/contact"),
  },
});

const getFaqSchema = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const routeTitle = (serviceName) => `Ready to scope your ${serviceName.toLowerCase()} project?`;

const SEOLandingPageTemplate = ({ config }) => {
  if (!config) return null;

  const canonicalPath = `/services/${config.slug}`;
  const relatedCaseStudies = getCaseStudiesByServiceSlug(config.slug).slice(0, 2);
  const relatedArticles = getBlogArticlesByServiceSlug(config.slug).slice(0, 3);

  const pageSchema = getWebPageSchema({
    title: config.title,
    description: config.description,
    url: canonicalPath,
    type: "WebPage",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { title: "Home", url: "/" },
    { title: "Services", url: "/services" },
    { title: config.h1, url: canonicalPath },
  ]);

  const serviceSchema = getServiceSchema(config, canonicalPath);
  const faqSchema = getFaqSchema(config.faqs || []);
  const videoSchema = config.videoEmbedUrl
    ? getVideoObjectSchema({
        name: config.videoTitle || config.h1,
        description: config.description,
        uploadDate: config.updatedAt,
        thumbnailUrl: relatedCaseStudies[0]?.image || "/og-image.jpg",
        embedUrl: config.videoEmbedUrl,
        contentUrl: canonicalPath,
        duration: config.videoDuration,
      })
    : null;

  return (
    <>
      <SEOHead
        title={config.title}
        description={config.description}
        canonicalUrl={canonicalPath}
        keywords={config.keywords}
        ogType="website"
        structuredData={[pageSchema, breadcrumbSchema, serviceSchema, faqSchema, videoSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light dark:bg-dark">
        <section className="relative overflow-hidden bg-[#0a0f1f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(168,85,247,0.35),transparent_40%),radial-gradient(circle_at_85%_78%,rgba(56,189,248,0.28),transparent_34%),linear-gradient(155deg,#070b16_0%,#1a1231_45%,#09172a_100%)]" />
          <Layout className="relative py-16 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-cyan-200">
                {config.eyebrow}
              </p>
              <h1 className="mt-5 text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-tight">
                {config.h1}
              </h1>
              <p className="mt-5 text-base md:text-sm text-slate-200/95 max-w-3xl leading-relaxed">
                {config.heroSummary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <TrackedInternalLink
                  href="/contact"
                  label="Send Project Brief"
                  location={`service_hero_${config.slug}`}
                  route={canonicalPath}
                  ctaType="lead_brief"
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-dark transition hover:scale-[1.02]"
                >
                  Send Project Brief
                </TrackedInternalLink>
                <TrackedInternalLink
                  href="/start-here"
                  label="Choose Best Route"
                  location={`service_hero_${config.slug}`}
                  route={canonicalPath}
                  ctaType="routing_hub"
                  className="rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Choose Best Route
                </TrackedInternalLink>
                <Link
                  href="/portfolio"
                  className="rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>
          </Layout>
        </section>

        <Layout className="pt-10 pb-12">
          <section className="grid grid-cols-12 gap-6 lg:grid-cols-1">
            <motion.article
              {...fadeIn}
              className="col-span-7 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
            >
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Primary Keyword</p>
              <p className="mt-2 text-2xl md:text-xl font-black text-dark dark:text-light">{config.primaryKeyword}</p>
              <div className="mt-6 grid grid-cols-1 gap-3">
                {config.coreBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-4 py-3 text-sm text-gray-800 dark:text-gray-200"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              {...fadeIn}
              className="col-span-5 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
            >
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Best For</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Startup founders",
                  "Product marketing teams",
                  "Growth managers",
                  "B2B SaaS teams",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Need a custom scope? We can adapt deliverables to your launch stage, campaign timeline,
                and preferred channels.
              </p>
            </motion.article>
          </section>

          {config.introParagraphs?.length ? (
            <section className="mt-10">
              <motion.article
                {...fadeIn}
                className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
              >
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">
                  Why This Service Page Exists
                </h2>
                <div className="mt-5 space-y-4">
                  {config.introParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {config.serviceAreas?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {config.serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                ) : null}
              </motion.article>
            </section>
          ) : null}

          <section className="mt-10">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Use Cases</h2>
            </motion.div>
            <div className="mt-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
              {config.useCases.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-5"
                >
                  <h3 className="text-xl font-black text-dark dark:text-light">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </section>

          {config.proofPoints?.length ? (
            <section className="mt-10">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Proof Points</h2>
              </motion.div>
              <div className="mt-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
                {config.proofPoints.map((item) => (
                  <motion.article
                    key={item.label}
                    {...fadeIn}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-5"
                  >
                    <p className="text-3xl font-black text-dark dark:text-light">{item.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{item.detail}</p>
                  </motion.article>
                ))}
              </div>
            </section>
          ) : null}

          {config.videoEmbedUrl ? (
            <section className="mt-10">
              <motion.div
                {...fadeIn}
                className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
              >
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">
                  Featured Animation
                </h2>
                <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={config.videoEmbedUrl}
                    title={config.videoTitle || config.h1}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </section>
          ) : null}

          <section className="mt-10 grid grid-cols-2 lg:grid-cols-1 gap-6">
            <motion.article
              {...fadeIn}
              className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-6"
            >
              <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Process</h2>
              <ol className="mt-4 space-y-3">
                {config.processSteps.map((step, index) => (
                  <li
                    key={step}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-4 py-3 text-sm text-gray-800 dark:text-gray-200"
                  >
                    <span className="mr-2 font-black text-primary">0{index + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </motion.article>

            <motion.article
              {...fadeIn}
              className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-6"
            >
              <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Deliverables</h2>
              <ul className="mt-4 space-y-3">
                {config.deliverables.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-4 py-3 text-sm text-gray-800 dark:text-gray-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          </section>

          <section className="mt-10">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Frequently Asked Questions</h2>
            </motion.div>
            <div className="mt-5 space-y-3">
              {config.faqs.map((faq, index) => (
                <motion.details
                  key={faq.question}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-4"
                >
                  <summary className="cursor-pointer list-none font-semibold text-dark dark:text-light">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.details>
              ))}
            </div>
          </section>

          {relatedCaseStudies.length ? (
            <section className="mt-10">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Related Case Studies</h2>
              </motion.div>
              <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                {relatedCaseStudies.map((caseStudy, index) => (
                  <motion.article
                    key={caseStudy.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                      {caseStudy.serviceLine}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-dark dark:text-light">{caseStudy.title}</h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {caseStudy.description}
                    </p>
                    <Link
                      href={`/case-studies/${caseStudy.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Read case study
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </section>
          ) : null}

          {relatedArticles.length ? (
            <section className="mt-10">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Related Guides</h2>
              </motion.div>
              <div className="mt-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
                {relatedArticles.map((article, index) => (
                  <motion.article
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                      {article.category}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-dark dark:text-light">{article.title}</h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Read guide
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-10">
            <LeadRoutingPanel
              eyebrow="Project Routing"
              title={config.leadPanelTitle || routeTitle(config.h1)}
              description={
                config.leadPanelDescription ||
                "Use the service page to understand fit, then send a detailed brief, move to WhatsApp for a faster discussion, or use Fiverr if you prefer marketplace ordering."
              }
              location={`service_panel_${config.slug}`}
              route={canonicalPath}
              primaryChannel="WhatsApp"
              secondaryChannel="Fiverr"
            />
          </section>

          <section className="mt-10 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-violet-100/70 to-cyan-100/70 dark:from-violet-900/20 dark:to-cyan-900/20 p-7">
            <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Related Pages</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {config.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark px-4 py-2 text-sm font-semibold text-dark dark:text-light hover:border-primary hover:text-primary transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-dark text-light dark:bg-light dark:text-dark px-6 py-3 text-sm font-bold hover:scale-[1.02] transition"
              >
                Start Your Project
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default SEOLandingPageTemplate;
