import { useDeferredValue, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import LeadRoutingPanel from "@/components/LeadRoutingPanel";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { TransitionEffect } from "@/components/TransitionEffect";
import { blogArticleList, blogCollectionList } from "@/data/blogArticles";
import { taxonomyLabelToSlug } from "@/lib/contentTaxonomy";
import { getBreadcrumbSchema, getCollectionPageSchema, getItemListSchema } from "@/lib/seo";

const title = "Blog | Cube Cake Studiios";
const description =
  "Articles and strategy guides on 2D animation, explainer videos, tutorial videos, pricing, and how design helps businesses explain products and services.";

const matchesBlogSearch = (article, query) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return true;

  return [
    article.title,
    article.excerpt,
    article.description,
    article.category,
    article.collection,
    article.intro,
    ...(article.keywords || []),
  ]
    .filter(Boolean)
    .some((value) => value.toLowerCase().includes(normalizedQuery));
};

const collectionFilters = [
  {
    label: "All",
    count: blogArticleList.length,
    description: "Browse the full blog library across strategy, SaaS education, systems, and pricing.",
  },
  ...blogCollectionList,
];

const collectionParamLookup = collectionFilters.reduce((map, collection) => {
  map[taxonomyLabelToSlug(collection.label)] = collection.label;
  return map;
}, {});

const pageSchema = getCollectionPageSchema({
  title,
  description,
  url: "/blog",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
]);

const blogItemListSchema = getItemListSchema({
  name: "Cube Cake Studiios Blog Library",
  description,
  url: "/blog",
  items: blogArticleList.map((article) => ({
    type: "Article",
    name: article.title,
    url: `/blog/${article.slug}`,
    description: article.excerpt,
    image: article.image,
  })),
});

const BlogIndexPage = () => {
  const router = useRouter();
  const [selectedCollection, setSelectedCollection] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    if (!router.isReady) return;

    const queryCollection =
      typeof router.query.collection === "string"
        ? collectionParamLookup[router.query.collection] || "All"
        : "All";
    const querySearch = typeof router.query.q === "string" ? router.query.q : "";

    setSelectedCollection((current) => (current === queryCollection ? current : queryCollection));
    setSearchQuery((current) => (current === querySearch ? current : querySearch));
  }, [router.isReady, router.query.collection, router.query.q]);

  useEffect(() => {
    if (!router.isReady) return;

    const nextCollection =
      selectedCollection !== "All" ? taxonomyLabelToSlug(selectedCollection) : undefined;
    const nextSearch = searchQuery.trim() || undefined;
    const currentCollection =
      typeof router.query.collection === "string" ? router.query.collection : undefined;
    const currentSearch = typeof router.query.q === "string" ? router.query.q : undefined;

    if (currentCollection === nextCollection && currentSearch === nextSearch) return;

    const nextQuery = {};

    if (nextCollection) nextQuery.collection = nextCollection;
    if (nextSearch) nextQuery.q = nextSearch;

    router.replace(
      {
        pathname: router.pathname,
        query: nextQuery,
      },
      undefined,
      { shallow: true, scroll: false }
    );
  }, [router, searchQuery, selectedCollection]);

  const filteredArticles = blogArticleList.filter((article) => {
    const matchesCollection =
      selectedCollection === "All" || (article.collection || article.category) === selectedCollection;

    return matchesCollection && matchesBlogSearch(article, deferredSearchQuery);
  });

  const activeSummary = [
    selectedCollection !== "All" ? selectedCollection : null,
    deferredSearchQuery.trim() ? `search: "${deferredSearchQuery.trim()}"` : null,
  ]
    .filter(Boolean)
    .join(" • ");

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        canonicalUrl="/blog"
        keywords={[
          "2d animation studio blog",
          "explainer video articles",
          "animation pricing guides",
          "animation strategy articles",
        ]}
        ogType="website"
        structuredData={[pageSchema, breadcrumbSchema, blogItemListSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light dark:bg-dark">
        <section className="relative overflow-hidden bg-[#0a0f1f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(249,115,22,0.22),transparent_38%),radial-gradient(circle_at_85%_78%,rgba(56,189,248,0.18),transparent_34%),linear-gradient(155deg,#070b16_0%,#1a1231_45%,#09172a_100%)]" />
          <Layout className="relative py-14 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="inline-flex rounded-full border border-orange-300/35 bg-orange-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-orange-200">
                Blog
              </p>
              <h1 className="mt-5 text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-tight">
                Insight Library for 2D Animation, Explainer Video, Tutorial Video, and Design-Led Growth
              </h1>
              <p className="mt-5 max-w-3xl text-base md:text-sm text-slate-200/95 leading-relaxed">
                These articles are separated from case studies on purpose. Case studies show proof.
                The blog explains frameworks, strategy, and how design helps businesses communicate better.
              </p>
            </motion.div>
          </Layout>
        </section>

        <Layout className="pt-8 pb-12">
          <section className="mb-10 grid grid-cols-12 gap-6 lg:grid-cols-1">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-4 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-6"
            >
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Search Articles</p>
              <label htmlFor="blog-search" className="sr-only">
                Search the blog library
              </label>
              <input
                id="blog-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search topics, services, SaaS, pricing..."
                className="mt-4 w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-4 py-3 text-sm text-dark dark:text-light outline-none transition focus:border-primary"
              />
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Search across titles, summaries, categories, and keywords to find the exact article set you need.
              </p>
            </motion.article>

            <div className="col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Blog Collections</p>
              </motion.div>
              <div className="mt-5 grid grid-cols-3 md:grid-cols-1 gap-4">
                {collectionFilters.map((collection, index) => {
                  const isActive = selectedCollection === collection.label;

                  return (
                    <motion.article
                      key={collection.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className={`rounded-2xl border p-5 transition ${
                        isActive
                          ? "border-primary bg-orange-50 text-dark shadow-lg shadow-orange-100/70 dark:border-primary dark:bg-dark"
                          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80"
                      }`}
                    >
                      <div className="flex items-end gap-2">
                        <p className="text-3xl font-black text-dark dark:text-light">{collection.count}</p>
                        <p className="pb-1 text-xs uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                          Articles
                        </p>
                      </div>
                      <h2 className="mt-2 text-lg font-black text-dark dark:text-light">{collection.label}</h2>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {collection.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedCollection(isActive ? "All" : collection.label)}
                          aria-pressed={isActive}
                          aria-controls="blog-article-grid"
                          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                            isActive
                              ? "bg-dark text-light dark:bg-light dark:text-dark"
                              : "border border-gray-300 dark:border-gray-700 text-dark dark:text-light hover:border-primary hover:text-primary"
                          }`}
                        >
                          {isActive ? "Showing" : "Filter Articles"}
                        </button>
                        {collection.label !== "All" ? (
                          <Link
                            href={`/blog/category/${collection.slug}`}
                            className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-dark dark:text-light hover:border-primary hover:text-primary transition"
                          >
                            Open Topic Page
                            <span aria-hidden>&rarr;</span>
                          </Link>
                        ) : null}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>

          <section>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {filteredArticles.length === blogArticleList.length &&
                  selectedCollection === "All" &&
                  !deferredSearchQuery.trim()
                    ? `Showing all ${blogArticleList.length} articles`
                    : `Showing ${filteredArticles.length} article${
                        filteredArticles.length === 1 ? "" : "s"
                      }`}
                </p>
                {activeSummary ? (
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                    Active: {activeSummary}
                  </p>
                ) : null}
              </div>

              {selectedCollection !== "All" || searchQuery.trim() ? (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCollection("All");
                    setSearchQuery("");
                  }}
                  className="rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition"
                >
                  Clear Search
                </button>
              ) : null}
            </div>

            {filteredArticles.length ? (
              <div id="blog-article-grid" className="grid grid-cols-12 gap-6 lg:grid-cols-1">
                {filteredArticles.map((article, index) => (
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
                      <h2 className="mt-3 text-2xl font-black text-dark dark:text-light">{article.title}</h2>
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
            ) : (
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
              >
                <h2 className="text-2xl font-black text-dark dark:text-light">No matching articles</h2>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Try broader keywords, remove the collection filter, or search for a service term like
                  ` SaaS`, `explainer`, or `pricing`.
                </p>
              </motion.article>
            )}
          </section>

          <section className="mt-10">
            <LeadRoutingPanel
              eyebrow="Reader to Lead"
              title="Use articles for education, then move into the right conversion path."
              description="The blog should attract search traffic and answer buyer questions. Once a visitor is qualified, route them into a detailed brief, a fast WhatsApp conversation, or a marketplace order depending on their buying style."
              location="blog_index_panel"
              route="/blog"
              primaryChannel="WhatsApp"
              secondaryChannel="Fiverr"
            />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default BlogIndexPage;
