import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LeadRoutingPanel from "@/components/LeadRoutingPanel";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { TransitionEffect } from "@/components/TransitionEffect";
import { seoLandingPages } from "@/data/seoLandingPages";
import { taxonomyLabelToSlug } from "@/lib/contentTaxonomy";
import { getArticleSchema, getBreadcrumbSchema, getWebPageSchema } from "@/lib/seo";

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

const BlogArticleTemplate = ({ article, relatedArticles = [], relatedCaseStudies = [] }) => {
  if (!article) return null;

  const canonicalPath = `/blog/${article.slug}`;
  const collectionPath = article.collection
    ? `/blog/category/${taxonomyLabelToSlug(article.collection)}`
    : null;
  const relatedServices = (article.serviceSlugs || [])
    .map((slug) => seoLandingPages[slug])
    .filter(Boolean);

  const pageSchema = getWebPageSchema({
    title: article.metaTitle || article.title,
    description: article.description,
    url: canonicalPath,
    type: "Article",
  });

  const articleSchema = getArticleSchema({
    title: article.title,
    description: article.description,
    url: canonicalPath,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    articleSection: article.category,
    keywords: article.keywords,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { title: "Home", url: "/" },
    { title: "Blog", url: "/blog" },
    ...(collectionPath ? [{ title: article.collection, url: collectionPath }] : []),
    { title: article.title, url: canonicalPath },
  ]);

  return (
    <>
      <SEOHead
        title={article.metaTitle || `${article.title} | Cube Cake Studiios`}
        description={article.description}
        canonicalUrl={canonicalPath}
        ogType="article"
        ogImage={article.image}
        keywords={article.keywords}
        articlePublishedTime={article.publishedAt}
        articleModifiedTime={article.updatedAt}
        structuredData={[pageSchema, articleSchema, breadcrumbSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light dark:bg-dark">
        <section className="relative overflow-hidden bg-[#0a0f1f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(249,115,22,0.2),transparent_38%),radial-gradient(circle_at_82%_76%,rgba(56,189,248,0.18),transparent_34%),linear-gradient(155deg,#070b16_0%,#1a1231_45%,#09172a_100%)]" />
          <Layout className="relative py-14 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-orange-300/35 bg-orange-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-200">
                  Blog
                </span>
                {collectionPath ? (
                  <Link
                    href={collectionPath}
                    className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 hover:bg-white/10"
                  >
                    {article.collection}
                  </Link>
                ) : null}
                {article.category !== article.collection ? (
                  <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                    {article.category}
                  </span>
                ) : null}
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                  {article.readingTime}
                </span>
              </div>
              <h1 className="mt-5 text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-tight">
                {article.title}
              </h1>
              <p className="mt-5 text-base md:text-sm text-slate-200/95 leading-relaxed max-w-3xl">
                {article.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
                <span>Published: {formatDate(article.publishedAt)}</span>
                <span>Updated: {formatDate(article.updatedAt || article.publishedAt)}</span>
              </div>
              {collectionPath ? (
                <div className="mt-5">
                  <Link
                    href={collectionPath}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-200 hover:underline"
                  >
                    Browse collection
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
              <div className="relative h-[24rem] md:h-72">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{article.intro}</p>
              </div>
            </motion.article>

            <motion.aside
              {...fadeIn}
              className="col-span-4 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
            >
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                {article.takeaways?.length ? "Key Takeaways" : "Why This Matters"}
              </p>
              <div className="mt-5 space-y-3">
                {(article.takeaways?.length ? article.takeaways : article.keywords.slice(0, 4)).map((keyword) => (
                  <div
                    key={keyword}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-4 py-3 text-sm text-gray-800 dark:text-gray-200"
                  >
                    {keyword}
                  </div>
                ))}
              </div>
            </motion.aside>
          </section>

          <section className="mt-10 space-y-6">
            {article.sections.map((section) => (
              <motion.article
                key={section.heading}
                {...fadeIn}
                className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
              >
                <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-4 py-3 text-sm text-gray-800 dark:text-gray-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.article>
            ))}
          </section>

          {relatedCaseStudies.length ? (
            <section className="mt-10">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Related Case Studies</h2>
              </motion.div>
              <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                {relatedCaseStudies.map((caseStudy) => (
                  <motion.article
                    key={caseStudy.slug}
                    {...fadeIn}
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
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Keep Reading</h2>
              </motion.div>
              <div className="mt-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
                {relatedArticles.map((item) => (
                  <motion.article
                    key={item.slug}
                    {...fadeIn}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">{item.category}</p>
                    <h3 className="mt-2 text-xl font-black text-dark dark:text-light">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.excerpt}</p>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Read article
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-10 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-violet-100/70 to-cyan-100/70 dark:from-violet-900/20 dark:to-cyan-900/20 p-7">
            <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Need a Similar Outcome?</h2>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              Share your product, audience, and timeline. We will recommend the right mix of
              scripting, 2D animation, explainer structure, and export planning.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-dark text-light dark:bg-light dark:text-dark px-6 py-3 text-sm font-bold hover:scale-[1.02] transition"
              >
                Start Your Project
              </Link>
              <Link
                href="/services/2d-animation-studio"
                className="rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-dark dark:text-light hover:border-primary hover:text-primary transition"
              >
                Explore 2D Animation Services
              </Link>
            </div>
          </section>

          <section className="mt-10">
            <LeadRoutingPanel
              eyebrow="Lead Routing"
              title="Want help turning this article into a live project?"
              description="Use the article for education, then move into a detailed brief, a fast WhatsApp conversation, or a marketplace order depending on how you buy creative services."
              location={`blog_article_panel_${article.slug}`}
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

export default BlogArticleTemplate;
