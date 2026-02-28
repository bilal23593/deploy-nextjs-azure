import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LeadRoutingPanel from "@/components/LeadRoutingPanel";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { TransitionEffect } from "@/components/TransitionEffect";
import { seoLandingPages } from "@/data/seoLandingPages";
import { taxonomyLabelToSlug } from "@/lib/contentTaxonomy";
import {
  getBreadcrumbSchema,
  getCaseStudySchema,
  getVideoObjectSchema,
  getWebPageSchema,
} from "@/lib/seo";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const CaseStudyTemplate = ({ caseStudy, relatedCaseStudies = [], relatedArticles = [] }) => {
  if (!caseStudy) return null;

  const canonicalPath = `/case-studies/${caseStudy.slug}`;
  const trackPath = caseStudy.contentType
    ? `/case-studies/category/${taxonomyLabelToSlug(caseStudy.contentType)}`
    : null;
  const relatedServices = (caseStudy.serviceSlugs || [])
    .map((slug) => seoLandingPages[slug])
    .filter(Boolean);

  const pageSchema = getWebPageSchema({
    title: caseStudy.metaTitle || caseStudy.title,
    description: caseStudy.description,
    url: canonicalPath,
    type: "Article",
  });

  const articleSchema = getCaseStudySchema({
    title: caseStudy.title,
    description: caseStudy.description,
    url: canonicalPath,
    image: caseStudy.image,
    datePublished: caseStudy.publishedAt,
    dateModified: caseStudy.updatedAt,
    keywords: [caseStudy.serviceLine, caseStudy.industry, caseStudy.featuredResult],
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { title: "Home", url: "/" },
    { title: "Case Studies", url: "/case-studies" },
    ...(trackPath ? [{ title: caseStudy.contentType, url: trackPath }] : []),
    { title: caseStudy.title, url: canonicalPath },
  ]);

  const videoSchema = caseStudy.videoEmbedUrl
    ? getVideoObjectSchema({
        name: caseStudy.title,
        description: caseStudy.description,
        uploadDate: caseStudy.publishedAt,
        thumbnailUrl: caseStudy.image,
        embedUrl: caseStudy.videoEmbedUrl,
        contentUrl: canonicalPath,
        duration: caseStudy.videoDuration,
      })
    : null;

  return (
    <>
      <SEOHead
        title={caseStudy.metaTitle || `${caseStudy.title} | Cube Cake Studiios`}
        description={caseStudy.description}
        canonicalUrl={canonicalPath}
        ogType="article"
        ogImage={caseStudy.image}
        articlePublishedTime={caseStudy.publishedAt}
        articleModifiedTime={caseStudy.updatedAt}
        structuredData={[pageSchema, articleSchema, breadcrumbSchema, videoSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light dark:bg-dark">
        <section className="relative overflow-hidden bg-[#08101f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.24),transparent_35%),radial-gradient(circle_at_82%_76%,rgba(168,85,247,0.28),transparent_38%),linear-gradient(155deg,#07101f_0%,#15122b_46%,#0c1e36_100%)]" />
          <Layout className="relative py-14 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  Case Study
                </span>
                {trackPath ? (
                  <Link
                    href={trackPath}
                    className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 hover:bg-white/10"
                  >
                    {caseStudy.contentType}
                  </Link>
                ) : null}
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                  {caseStudy.industry}
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                  {caseStudy.location}
                </span>
              </div>

              <h1 className="mt-5 text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-tight">
                {caseStudy.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base md:text-sm text-slate-200/95 leading-relaxed">
                {caseStudy.heroSummary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
                <span>Client: {caseStudy.client}</span>
                <span>Updated: {formatDate(caseStudy.updatedAt || caseStudy.publishedAt)}</span>
                <span>Result: {caseStudy.featuredResult}</span>
              </div>
              {trackPath ? (
                <div className="mt-5">
                  <Link
                    href={trackPath}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:underline"
                  >
                    Browse track
                    <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              ) : null}

              {relatedServices.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15"
                    >
                      {service.h1}
                    </Link>
                  ))}
                </div>
              ) : null}
            </motion.div>
          </Layout>
        </section>

        <Layout className="pt-8 pb-12">
          <section className="grid grid-cols-12 gap-6 lg:grid-cols-1">
            <motion.article
              {...fadeIn}
              className="col-span-8 overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80"
            >
              <div className="relative h-[26rem] md:h-72">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-dark/10 to-transparent" />
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Featured Result</p>
                <p className="mt-2 text-3xl md:text-2xl font-black text-dark dark:text-light">
                  {caseStudy.featuredResult}
                </p>
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.excerpt}
                </p>
              </div>
            </motion.article>

            <motion.aside
              {...fadeIn}
              className="col-span-4 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
            >
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">At a Glance</p>
              <div className="mt-5 space-y-3">
                {caseStudy.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-4 py-3"
                  >
                    <p className="text-2xl font-black text-dark dark:text-light">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </section>

          <section className="mt-10 grid grid-cols-2 lg:grid-cols-1 gap-6">
            <motion.article
              {...fadeIn}
              className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
            >
              <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Challenge</h2>
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.article>

            <motion.article
              {...fadeIn}
              className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
            >
              <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Solution</h2>
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.article>
          </section>

          {caseStudy.designImpact?.length ? (
            <section className="mt-10">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">
                  How Design Helped the Business
                </h2>
              </motion.div>
              <div className="mt-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
                {caseStudy.designImpact.map((item) => (
                  <motion.article
                    key={item}
                    {...fadeIn}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-5"
                  >
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                  </motion.article>
                ))}
              </div>
            </section>
          ) : null}

          {caseStudy.videoEmbedUrl ? (
            <section className="mt-10">
              <motion.div
                {...fadeIn}
                className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
              >
                <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Project Video</h2>
                <div className="mt-5 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={caseStudy.videoEmbedUrl}
                    title={`${caseStudy.title} video`}
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
              className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
            >
              <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Process</h2>
              <ol className="mt-4 space-y-3">
                {caseStudy.process.map((step, index) => (
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
              className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
            >
              <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Deliverables</h2>
              <ul className="mt-4 space-y-3">
                {caseStudy.deliverables.map((item) => (
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

          <section className="mt-10 grid grid-cols-12 gap-6 lg:grid-cols-1">
            <motion.article
              {...fadeIn}
              className="col-span-8 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
            >
              <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Outcome</h2>
              <div className="mt-4 space-y-3">
                {caseStudy.outcomes.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-4 py-3 text-sm text-gray-800 dark:text-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              {...fadeIn}
              className="col-span-4 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-violet-100/70 to-cyan-100/70 dark:from-violet-900/20 dark:to-cyan-900/20 p-7"
            >
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Client Voice</p>
              <blockquote className="mt-4 text-lg font-semibold text-dark dark:text-light leading-relaxed">
                “{caseStudy.testimonial.text}”
              </blockquote>
              <p className="mt-5 text-sm font-black text-dark dark:text-light">{caseStudy.testimonial.author}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{caseStudy.testimonial.role}</p>
            </motion.article>
          </section>

          {relatedCaseStudies.length ? (
            <section className="mt-10">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">More Case Studies</h2>
              </motion.div>
              <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                {relatedCaseStudies.map((item) => (
                  <motion.article
                    key={item.slug}
                    {...fadeIn}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                      {item.contentType || item.industry}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-dark dark:text-light">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    <Link
                      href={`/case-studies/${item.slug}`}
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
                {relatedArticles.map((article) => (
                  <motion.article
                    key={article.slug}
                    {...fadeIn}
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
              eyebrow="Lead Routing"
              title="Want similar results for your own launch or product?"
              description="This case study is proof. When you are ready, use the site brief for a custom scope, WhatsApp for a faster conversation, or Fiverr for marketplace ordering."
              location={`case_study_panel_${caseStudy.slug}`}
              route={canonicalPath}
              primaryChannel="WhatsApp"
              secondaryChannel="Fiverr"
            />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default CaseStudyTemplate;
