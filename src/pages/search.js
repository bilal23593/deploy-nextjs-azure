import { useDeferredValue, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { TransitionEffect } from "@/components/TransitionEffect";
import { blogArticleList, blogCollectionList } from "@/data/blogArticles";
import { caseStudyList, caseStudyTrackList } from "@/data/caseStudies";
import { portfolioProjects } from "@/data/portfolio";
import { seoLandingPageList } from "@/data/seoLandingPages";
import { getBreadcrumbSchema, getItemListSchema, getWebPageSchema } from "@/lib/seo";

const searchSuggestions = ["2d animation", "explainer video", "saas", "tutorial", "pricing"];

const matchesQuery = (values, query) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return true;

  return values
    .filter(Boolean)
    .some((value) => String(value).toLowerCase().includes(normalizedQuery));
};

const SearchPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const normalizedQuery = deferredSearchQuery.trim();

  useEffect(() => {
    if (!router.isReady) return;

    const queryValue = typeof router.query.q === "string" ? router.query.q : "";
    setSearchQuery((current) => (current === queryValue ? current : queryValue));
  }, [router.isReady, router.query.q]);

  useEffect(() => {
    if (!router.isReady) return;

    const nextSearch = searchQuery.trim() || undefined;
    const currentSearch = typeof router.query.q === "string" ? router.query.q : undefined;

    if (currentSearch === nextSearch) return;

    router.replace(
      {
        pathname: router.pathname,
        query: nextSearch ? { q: nextSearch } : {},
      },
      undefined,
      { shallow: true, scroll: false }
    );
  }, [router, searchQuery]);

  const serviceResults = seoLandingPageList.filter((page) =>
    matchesQuery([page.h1, page.title, page.description, page.primaryKeyword, ...(page.keywords || [])], normalizedQuery)
  );

  const topicHubResults = [
    ...blogCollectionList
      .filter((collection) =>
        matchesQuery(
          [collection.label, collection.title, collection.description, ...(collection.keywords || [])],
          normalizedQuery
        )
      )
      .map((collection) => ({
        id: `blog-${collection.slug}`,
        typeLabel: "Blog Collection",
        title: collection.title,
        description: collection.description,
        href: `/blog/category/${collection.slug}`,
      })),
    ...caseStudyTrackList
      .filter((track) =>
        matchesQuery(
          [track.label, track.title, track.description, ...(track.keywords || [])],
          normalizedQuery
        )
      )
      .map((track) => ({
        id: `case-${track.slug}`,
        typeLabel: "Case Study Track",
        title: track.title,
        description: track.description,
        href: `/case-studies/category/${track.slug}`,
      })),
  ];

  const blogResults = blogArticleList.filter((article) =>
    matchesQuery(
      [article.title, article.excerpt, article.description, article.category, article.collection, ...(article.keywords || [])],
      normalizedQuery
    )
  );

  const caseStudyResults = caseStudyList.filter((caseStudy) =>
    matchesQuery(
      [
        caseStudy.title,
        caseStudy.description,
        caseStudy.excerpt,
        caseStudy.client,
        caseStudy.industry,
        caseStudy.contentType,
        caseStudy.serviceLine,
        caseStudy.featuredResult,
      ],
      normalizedQuery
    )
  );

  const portfolioResults = portfolioProjects.filter((project) =>
    matchesQuery(
      [project.title, project.category, project.description, project.client, ...(project.tags || [])],
      normalizedQuery
    )
  );

  const totalResults =
    topicHubResults.length +
    serviceResults.length +
    blogResults.length +
    caseStudyResults.length +
    portfolioResults.length;

  const pageTitle = normalizedQuery
    ? `Search Results for "${normalizedQuery}" | Cube Cake Studiios`
    : "Search | Cube Cake Studiios";
  const pageDescription = normalizedQuery
    ? `Search results for "${normalizedQuery}" across services, blog articles, case studies, and portfolio content.`
    : "Search services, strategy guides, case studies, and portfolio work from Cube Cake Studiios.";

  const pageSchema = getWebPageSchema({
    title: pageTitle,
    description: pageDescription,
    url: "/search",
    type: "SearchResultsPage",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { title: "Home", url: "/" },
    { title: "Search", url: "/search" },
  ]);

  const resultItemListSchema = getItemListSchema({
    name: normalizedQuery ? `Search results for ${normalizedQuery}` : "Site search",
    description: pageDescription,
    url: "/search",
    items: [
      ...topicHubResults.map((hub) => ({
        type: "CollectionPage",
        name: hub.title,
        url: hub.href,
        description: hub.description,
      })),
      ...serviceResults.map((page) => ({
        type: "Service",
        name: page.h1,
        url: `/services/${page.slug}`,
        description: page.description,
      })),
      ...blogResults.map((article) => ({
        type: "Article",
        name: article.title,
        url: `/blog/${article.slug}`,
        description: article.excerpt,
        image: article.image,
      })),
      ...caseStudyResults.map((caseStudy) => ({
        type: "Article",
        name: caseStudy.title,
        url: `/case-studies/${caseStudy.slug}`,
        description: caseStudy.excerpt,
        image: caseStudy.image,
      })),
      ...portfolioResults.map((project) => ({
        type: "CreativeWork",
        name: project.title,
        url: project.caseStudySlug ? `/case-studies/${project.caseStudySlug}` : "/portfolio",
        description: project.description,
        image: project.image,
      })),
    ],
  });

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="/search"
        ogType="website"
        noindex
        structuredData={[pageSchema, breadcrumbSchema, resultItemListSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light dark:bg-dark">
        <section className="relative overflow-hidden bg-[#0a0f1f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(249,115,22,0.18),transparent_36%),linear-gradient(155deg,#070b16_0%,#11182b_45%,#09172a_100%)]" />
          <Layout className="relative py-14 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-cyan-200">
                Site Search
              </p>
              <h1 className="mt-5 text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-tight">
                Search Services, Case Studies, Blog Articles, and Portfolio Work
              </h1>
              <p className="mt-5 max-w-3xl text-base md:text-sm text-slate-200/95 leading-relaxed">
                Use site search to find the right service page, proof asset, or strategy guide faster.
                Search pages stay noindex so they help users without creating thin SEO duplicates.
              </p>
            </motion.div>
          </Layout>
        </section>

        <Layout className="pt-8 pb-12">
          <section className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7">
            <label htmlFor="site-search" className="sr-only">
              Search the website
            </label>
            <input
              id="site-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search 2D animation, explainer video, pricing, SaaS..."
              className="w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-5 py-4 text-base text-dark dark:text-light outline-none transition focus:border-primary"
            />

            <div className="mt-5 flex flex-wrap gap-2">
              {searchSuggestions.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setSearchQuery(term)}
                  className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition"
                >
                  {term}
                </button>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {normalizedQuery
                    ? `${totalResults} result${totalResults === 1 ? "" : "s"} for "${normalizedQuery}"`
                    : "Start with a keyword to search the site"}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                  Services, blog, case studies, and portfolio
                </p>
              </div>
              {searchQuery.trim() ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition"
                >
                  Clear Search
                </button>
              ) : null}
            </div>

            {normalizedQuery && totalResults === 0 ? (
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
              >
                <h2 className="text-2xl font-black text-dark dark:text-light">No matching results</h2>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Try broader search terms like `explainer`, `animation`, `tutorial`, or `SaaS`, or browse the
                  main content libraries below.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/services"
                    className="rounded-full bg-dark px-5 py-2.5 text-sm font-bold text-light dark:bg-light dark:text-dark"
                  >
                    Browse Services
                  </Link>
                  <Link
                    href="/blog"
                    className="rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-dark dark:text-light"
                  >
                    Browse Blog
                  </Link>
                  <Link
                    href="/case-studies"
                    className="rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-dark dark:text-light"
                  >
                    Browse Case Studies
                  </Link>
                </div>
              </motion.article>
            ) : null}

            {!normalizedQuery ? (
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7"
              >
                <h2 className="text-2xl font-black text-dark dark:text-light">Popular entry points</h2>
                <div className="mt-5 grid grid-cols-3 lg:grid-cols-1 gap-4">
                  <Link
                    href="/services/2d-animation-studio"
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.12em] font-semibold text-primary">Service</p>
                    <p className="mt-2 text-lg font-black text-dark dark:text-light">
                      2D Animation Studio
                    </p>
                  </Link>
                  <Link
                    href="/case-studies"
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.12em] font-semibold text-primary">Proof</p>
                    <p className="mt-2 text-lg font-black text-dark dark:text-light">Case Studies</p>
                  </Link>
                  <Link
                    href="/blog"
                    className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.12em] font-semibold text-primary">Guides</p>
                    <p className="mt-2 text-lg font-black text-dark dark:text-light">Blog Library</p>
                  </Link>
                </div>
              </motion.article>
            ) : null}

            {normalizedQuery && topicHubResults.length ? (
              <section className="mt-8">
                <h2 className="text-3xl font-black text-dark dark:text-light">Topic Hubs</h2>
                <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {topicHubResults.map((hub) => (
                    <motion.article
                      key={hub.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      viewport={{ once: true }}
                      className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.12em] font-semibold text-primary">
                        {hub.typeLabel}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-dark dark:text-light">{hub.title}</h3>
                      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {hub.description}
                      </p>
                      <Link
                        href={hub.href}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        Open topic page
                        <span aria-hidden>&rarr;</span>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </section>
            ) : null}

            {normalizedQuery && serviceResults.length ? (
              <section className="mt-8">
                <h2 className="text-3xl font-black text-dark dark:text-light">Services</h2>
                <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {serviceResults.map((page) => (
                    <motion.article
                      key={page.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      viewport={{ once: true }}
                      className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.12em] font-semibold text-primary">
                        {page.primaryKeyword}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-dark dark:text-light">{page.h1}</h3>
                      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {page.description}
                      </p>
                      <Link
                        href={`/services/${page.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        Open service page
                        <span aria-hidden>&rarr;</span>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </section>
            ) : null}

            {normalizedQuery && caseStudyResults.length ? (
              <section className="mt-8">
                <h2 className="text-3xl font-black text-dark dark:text-light">Case Studies</h2>
                <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {caseStudyResults.map((caseStudy) => (
                    <motion.article
                      key={caseStudy.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      viewport={{ once: true }}
                      className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.12em] font-semibold text-primary">
                        {caseStudy.contentType || caseStudy.serviceLine}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-dark dark:text-light">{caseStudy.title}</h3>
                      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {caseStudy.description}
                      </p>
                      <Link
                        href={`/case-studies/${caseStudy.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        Read case study
                        <span aria-hidden>&rarr;</span>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </section>
            ) : null}

            {normalizedQuery && blogResults.length ? (
              <section className="mt-8">
                <h2 className="text-3xl font-black text-dark dark:text-light">Blog Articles</h2>
                <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {blogResults.map((article) => (
                    <motion.article
                      key={article.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      viewport={{ once: true }}
                      className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.12em] font-semibold text-primary">
                        {article.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-dark dark:text-light">{article.title}</h3>
                      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        Read article
                        <span aria-hidden>&rarr;</span>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </section>
            ) : null}

            {normalizedQuery && portfolioResults.length ? (
              <section className="mt-8">
                <h2 className="text-3xl font-black text-dark dark:text-light">Portfolio</h2>
                <div className="mt-5 grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {portfolioResults.map((project) => (
                    <motion.article
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      viewport={{ once: true }}
                      className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-6"
                    >
                      <p className="text-xs uppercase tracking-[0.12em] font-semibold text-primary">
                        {project.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-dark dark:text-light">{project.title}</h3>
                      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                      <Link
                        href={project.caseStudySlug ? `/case-studies/${project.caseStudySlug}` : "/portfolio"}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        {project.caseStudySlug ? "Open related case study" : "Open portfolio"}
                        <span aria-hidden>&rarr;</span>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </section>
            ) : null}
          </section>
        </Layout>
      </main>
    </>
  );
};

export default SearchPage;
