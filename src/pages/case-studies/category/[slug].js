import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { TransitionEffect } from "@/components/TransitionEffect";
import {
  caseStudyTrackList,
  getCaseStudiesByTrack,
  getCaseStudyTrackBySlug,
} from "@/data/caseStudies";
import { getRelatedBlogArticles } from "@/data/blogArticles";
import { seoLandingPages } from "@/data/seoLandingPages";
import { getBreadcrumbSchema, getCollectionPageSchema, getItemListSchema } from "@/lib/seo";

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export default function CaseStudyTrackPage({
  track,
  caseStudies,
  relatedArticles,
  relatedServices,
  otherTracks,
}) {
  const canonicalPath = `/case-studies/category/${track.slug}`;

  const pageSchema = getCollectionPageSchema({
    title: track.title,
    description: track.description,
    url: canonicalPath,
  });

  const itemListSchema = getItemListSchema({
    name: track.title,
    description: track.description,
    url: canonicalPath,
    items: caseStudies.map((caseStudy) => ({
      type: "Article",
      name: caseStudy.title,
      url: `/case-studies/${caseStudy.slug}`,
      description: caseStudy.excerpt,
      image: caseStudy.image,
    })),
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { title: "Home", url: "/" },
    { title: "Case Studies", url: "/case-studies" },
    { title: track.label, url: canonicalPath },
  ]);

  return (
    <>
      <SEOHead
        title={`${track.title} | Cube Cake Studiios`}
        description={track.description}
        canonicalUrl={canonicalPath}
        keywords={track.keywords}
        ogType="website"
        ogImage={track.image}
        structuredData={[pageSchema, itemListSchema, breadcrumbSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light dark:bg-dark">
        <section className="relative overflow-hidden bg-[#0a0f1f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(168,85,247,0.24),transparent_38%),radial-gradient(circle_at_82%_76%,rgba(56,189,248,0.2),transparent_34%),linear-gradient(155deg,#070b16_0%,#1a1231_45%,#09172a_100%)]" />
          <Layout className="relative py-14 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  Case Study Track
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                  {track.count} Case Studies
                </span>
              </div>
              <h1 className="mt-5 text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-tight">
                {track.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base md:text-sm text-slate-200/95 leading-relaxed">
                {track.heroSummary}
              </p>
            </motion.div>
          </Layout>
        </section>

        <Layout className="pt-8 pb-12">
          <section className="grid grid-cols-12 gap-6 lg:grid-cols-1">
            <motion.article
              {...fadeIn}
              className="col-span-8 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
            >
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">What This Track Covers</p>
              <div className="mt-4 space-y-4">
                {track.introParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.article>

            <motion.aside
              {...fadeIn}
              className="col-span-4 overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80"
            >
              <div className="relative h-56">
                <Image
                  src={track.image}
                  alt={track.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Track Snapshot</p>
                <p className="mt-3 text-3xl font-black text-dark dark:text-light">{track.count}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">Projects in this hub</p>
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Focused proof hubs help search engines understand topical depth and help buyers find the right examples faster.
                </p>
              </div>
            </motion.aside>
          </section>

          {relatedServices.length ? (
            <section className="mt-10">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Related Services</h2>
              </motion.div>
              <div className="mt-5 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark/80 px-4 py-2 text-sm font-semibold text-dark dark:text-light hover:border-primary hover:text-primary transition"
                  >
                    {service.h1}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-10">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Case Studies in This Track</h2>
            </motion.div>
            <div className="mt-5 grid grid-cols-12 gap-6 lg:grid-cols-1">
              {caseStudies.map((caseStudy, index) => (
                <motion.article
                  key={caseStudy.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="col-span-6 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80"
                >
                  <div className="relative h-72">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] font-semibold text-primary">
                      <span>{caseStudy.contentType || caseStudy.serviceLine}</span>
                      <span>{caseStudy.industry}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-black text-dark dark:text-light">{caseStudy.title}</h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {caseStudy.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-dark dark:text-light">
                      {caseStudy.featuredResult}
                    </p>
                    <Link
                      href={`/case-studies/${caseStudy.slug}`}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-dark text-light dark:bg-light dark:text-dark px-5 py-2.5 text-sm font-bold"
                    >
                      Read case study
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {relatedArticles.length ? (
            <section className="mt-10">
              <motion.div {...fadeIn}>
                <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Related Articles</h2>
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
                      Read article
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </section>
          ) : null}

          {otherTracks.length ? (
            <section className="mt-10 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-cyan-100/70 to-violet-100/70 dark:from-cyan-900/15 dark:to-violet-900/15 p-7">
              <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Explore More Case Study Tracks</h2>
              <div className="mt-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
                {otherTracks.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/case-studies/category/${item.slug}`}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-dark/70 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                      {item.count} Case Studies
                    </p>
                    <p className="mt-2 text-xl font-black text-dark dark:text-light">{item.label}</p>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </Layout>
      </main>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: caseStudyTrackList.map((track) => ({
      params: { slug: track.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const track = getCaseStudyTrackBySlug(params.slug);
  const caseStudies = getCaseStudiesByTrack(track.label);
  const articleSlugs = [...new Set(caseStudies.flatMap((caseStudy) => caseStudy.articleSlugs || []))];
  const serviceSlugs = [...new Set(caseStudies.flatMap((caseStudy) => caseStudy.serviceSlugs || []))];

  return {
    props: {
      track,
      caseStudies,
      relatedArticles: getRelatedBlogArticles(articleSlugs).slice(0, 6),
      relatedServices: serviceSlugs.map((slug) => seoLandingPages[slug]).filter(Boolean),
      otherTracks: caseStudyTrackList.filter((item) => item.slug !== track.slug).slice(0, 3),
    },
  };
}
