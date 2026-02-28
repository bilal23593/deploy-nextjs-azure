import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { TransitionEffect } from "@/components/TransitionEffect";
import {
  blogCollectionList,
  getBlogArticlesByCollection,
  getBlogCollectionBySlug,
} from "@/data/blogArticles";
import { getRelatedCaseStudies } from "@/data/caseStudies";
import { seoLandingPages } from "@/data/seoLandingPages";
import { getBreadcrumbSchema, getCollectionPageSchema, getItemListSchema } from "@/lib/seo";

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export default function BlogCollectionPage({
  collection,
  articles,
  relatedCaseStudies,
  relatedServices,
  otherCollections,
}) {
  const canonicalPath = `/blog/category/${collection.slug}`;

  const pageSchema = getCollectionPageSchema({
    title: collection.title,
    description: collection.description,
    url: canonicalPath,
  });

  const itemListSchema = getItemListSchema({
    name: collection.title,
    description: collection.description,
    url: canonicalPath,
    items: articles.map((article) => ({
      type: "Article",
      name: article.title,
      url: `/blog/${article.slug}`,
      description: article.excerpt,
      image: article.image,
    })),
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { title: "Home", url: "/" },
    { title: "Blog", url: "/blog" },
    { title: collection.label, url: canonicalPath },
  ]);

  return (
    <>
      <SEOHead
        title={`${collection.title} | Cube Cake Studiios`}
        description={collection.description}
        canonicalUrl={canonicalPath}
        keywords={collection.keywords}
        ogType="website"
        ogImage={collection.image}
        structuredData={[pageSchema, itemListSchema, breadcrumbSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light dark:bg-dark">
        <section className="relative overflow-hidden bg-[#0a0f1f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(249,115,22,0.22),transparent_38%),radial-gradient(circle_at_82%_76%,rgba(56,189,248,0.16),transparent_34%),linear-gradient(155deg,#070b16_0%,#1a1231_45%,#09172a_100%)]" />
          <Layout className="relative py-14 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-orange-300/35 bg-orange-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-200">
                  Blog Collection
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                  {collection.count} Articles
                </span>
              </div>
              <h1 className="mt-5 text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-tight">
                {collection.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base md:text-sm text-slate-200/95 leading-relaxed">
                {collection.heroSummary}
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
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Why This Topic Matters</p>
              <div className="mt-4 space-y-4">
                {collection.introParagraphs.map((paragraph) => (
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
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Collection Snapshot</p>
                <p className="mt-3 text-3xl font-black text-dark dark:text-light">{collection.count}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">Articles in this hub</p>
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Topic hubs give search engines and visitors one focused place to explore related knowledge instead of isolated article URLs.
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
              <h2 className="text-4xl md:text-3xl font-black text-dark dark:text-light">Articles in This Collection</h2>
            </motion.div>
            <div className="mt-5 grid grid-cols-12 gap-6 lg:grid-cols-1">
              {articles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="col-span-4 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80"
                >
                  <div className="relative h-56">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.12em] font-semibold text-primary">
                        {article.category}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{article.readingTime}</p>
                    </div>
                    <h3 className="mt-3 text-2xl font-black text-dark dark:text-light">{article.title}</h3>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Read article
                      <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
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
                      {caseStudy.contentType || caseStudy.serviceLine}
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

          {otherCollections.length ? (
            <section className="mt-10 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-orange-100/70 to-cyan-100/70 dark:from-orange-900/15 dark:to-cyan-900/15 p-7">
              <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">Explore More Blog Collections</h2>
              <div className="mt-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
                {otherCollections.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/category/${item.slug}`}
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-dark/70 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                      {item.count} Articles
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
    paths: blogCollectionList.map((collection) => ({
      params: { slug: collection.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const collection = getBlogCollectionBySlug(params.slug);
  const articles = getBlogArticlesByCollection(collection.label);
  const caseStudySlugs = [...new Set(articles.flatMap((article) => article.caseStudySlugs || []))];
  const serviceSlugs = [...new Set(articles.flatMap((article) => article.serviceSlugs || []))];

  return {
    props: {
      collection,
      articles,
      relatedCaseStudies: getRelatedCaseStudies(caseStudySlugs).slice(0, 4),
      relatedServices: serviceSlugs.map((slug) => seoLandingPages[slug]).filter(Boolean),
      otherCollections: blogCollectionList.filter((item) => item.slug !== collection.slug).slice(0, 3),
    },
  };
}
