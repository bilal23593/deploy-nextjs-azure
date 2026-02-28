import { useDeferredValue, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import LeadRoutingPanel from "@/components/LeadRoutingPanel";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { TransitionEffect } from "@/components/TransitionEffect";
import { caseStudyList, caseStudyTrackList } from "@/data/caseStudies";
import { taxonomyLabelToSlug } from "@/lib/contentTaxonomy";
import { getBreadcrumbSchema, getCollectionPageSchema, getItemListSchema } from "@/lib/seo";

const title = "Case Studies | Cube Cake Studiios";
const description =
  "Explore advanced 2D animation, explainer video, tutorial video, and service-design case studies from Cube Cake Studiios with clear process notes and measurable outcomes.";

const matchesCaseStudySearch = (caseStudy, query) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return true;

  return [
    caseStudy.title,
    caseStudy.description,
    caseStudy.excerpt,
    caseStudy.client,
    caseStudy.industry,
    caseStudy.location,
    caseStudy.contentType,
    caseStudy.serviceLine,
    caseStudy.featuredResult,
    ...(caseStudy.outcomes || []),
  ]
    .filter(Boolean)
    .some((value) => value.toLowerCase().includes(normalizedQuery));
};

const trackFilters = [
  {
    label: "All",
    count: caseStudyList.length,
    description: "Browse the full proof library across animation design, explainers, tutorials, and service clarity work.",
  },
  ...caseStudyTrackList,
];

const trackParamLookup = trackFilters.reduce((map, track) => {
  map[taxonomyLabelToSlug(track.label)] = track.label;
  return map;
}, {});

const pageSchema = getCollectionPageSchema({
  title,
  description,
  url: "/case-studies",
});

const breadcrumbSchema = getBreadcrumbSchema([
  { title: "Home", url: "/" },
  { title: "Case Studies", url: "/case-studies" },
]);

const caseStudyItemListSchema = getItemListSchema({
  name: "Cube Cake Studiios Case Study Library",
  description,
  url: "/case-studies",
  items: caseStudyList.map((caseStudy) => ({
    type: "Article",
    name: caseStudy.title,
    url: `/case-studies/${caseStudy.slug}`,
    description: caseStudy.excerpt,
    image: caseStudy.image,
  })),
});

const CaseStudiesPage = () => {
  const router = useRouter();
  const [selectedTrack, setSelectedTrack] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    if (!router.isReady) return;

    const queryTrack =
      typeof router.query.track === "string" ? trackParamLookup[router.query.track] || "All" : "All";
    const querySearch = typeof router.query.q === "string" ? router.query.q : "";

    setSelectedTrack((current) => (current === queryTrack ? current : queryTrack));
    setSearchQuery((current) => (current === querySearch ? current : querySearch));
  }, [router.isReady, router.query.q, router.query.track]);

  useEffect(() => {
    if (!router.isReady) return;

    const nextTrack = selectedTrack !== "All" ? taxonomyLabelToSlug(selectedTrack) : undefined;
    const nextSearch = searchQuery.trim() || undefined;
    const currentTrack = typeof router.query.track === "string" ? router.query.track : undefined;
    const currentSearch = typeof router.query.q === "string" ? router.query.q : undefined;

    if (currentTrack === nextTrack && currentSearch === nextSearch) return;

    const nextQuery = {};

    if (nextTrack) nextQuery.track = nextTrack;
    if (nextSearch) nextQuery.q = nextSearch;

    router.replace(
      {
        pathname: router.pathname,
        query: nextQuery,
      },
      undefined,
      { shallow: true, scroll: false }
    );
  }, [router, searchQuery, selectedTrack]);

  const filteredCaseStudies = caseStudyList.filter((caseStudy) => {
    const matchesTrack =
      selectedTrack === "All" || (caseStudy.contentType || caseStudy.serviceLine) === selectedTrack;

    return matchesTrack && matchesCaseStudySearch(caseStudy, deferredSearchQuery);
  });

  const activeSummary = [
    selectedTrack !== "All" ? selectedTrack : null,
    deferredSearchQuery.trim() ? `search: "${deferredSearchQuery.trim()}"` : null,
  ]
    .filter(Boolean)
    .join(" • ");

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        canonicalUrl="/case-studies"
        keywords={[
          "animation case studies",
          "explainer video case studies",
          "2d animation studio work",
          "tutorial video case studies",
        ]}
        ogType="website"
        structuredData={[pageSchema, breadcrumbSchema, caseStudyItemListSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light dark:bg-dark">
        <section className="relative overflow-hidden bg-[#0a0f1f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(168,85,247,0.28),transparent_40%),radial-gradient(circle_at_85%_78%,rgba(56,189,248,0.2),transparent_34%),linear-gradient(155deg,#070b16_0%,#1a1231_45%,#09172a_100%)]" />
          <Layout className="relative py-14 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-cyan-200">
                Case Studies
              </p>
              <h1 className="mt-5 text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-tight">
                Proof Library for 2D Animation, Explainer Video, Tutorial Video, and Service Clarity
              </h1>
              <p className="mt-5 max-w-3xl text-base md:text-sm text-slate-200/95 leading-relaxed">
                These case studies are organized around business outcomes, not vanity visuals. Each
                one shows how design and motion helped explain products or services more clearly.
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
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Search Proof</p>
              <label htmlFor="case-study-search" className="sr-only">
                Search the case study library
              </label>
              <input
                id="case-study-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search industries, clients, outcomes..."
                className="mt-4 w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-4 py-3 text-sm text-dark dark:text-light outline-none transition focus:border-primary"
              />
              <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Search by client, industry, outcome, or content type to surface the most relevant proof quickly.
              </p>
            </motion.article>

            <div className="col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">Case Study Tracks</p>
              </motion.div>
              <div className="mt-5 grid grid-cols-3 md:grid-cols-1 gap-4">
                {trackFilters.map((track, index) => {
                  const isActive = selectedTrack === track.label;

                  return (
                    <motion.article
                      key={track.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4 }}
                      className={`rounded-2xl border p-5 transition ${
                        isActive
                          ? "border-primary bg-cyan-50 text-dark shadow-lg shadow-cyan-100/70 dark:border-primary dark:bg-dark"
                          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80"
                      }`}
                    >
                      <div className="flex items-end gap-2">
                        <p className="text-3xl font-black text-dark dark:text-light">{track.count}</p>
                        <p className="pb-1 text-xs uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                          Case Studies
                        </p>
                      </div>
                      <h2 className="mt-2 text-lg font-black text-dark dark:text-light">{track.label}</h2>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {track.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedTrack(isActive ? "All" : track.label)}
                          aria-pressed={isActive}
                          aria-controls="case-study-grid"
                          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                            isActive
                              ? "bg-dark text-light dark:bg-light dark:text-dark"
                              : "border border-gray-300 dark:border-gray-700 text-dark dark:text-light hover:border-primary hover:text-primary"
                          }`}
                        >
                          {isActive ? "Showing" : "Filter Case Studies"}
                        </button>
                        {track.label !== "All" ? (
                          <Link
                            href={`/case-studies/category/${track.slug}`}
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
                  {filteredCaseStudies.length === caseStudyList.length &&
                  selectedTrack === "All" &&
                  !deferredSearchQuery.trim()
                    ? `Showing all ${caseStudyList.length} case studies`
                    : `Showing ${filteredCaseStudies.length} case stud${
                        filteredCaseStudies.length === 1 ? "y" : "ies"
                      }`}
                </p>
                {activeSummary ? (
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                    Active: {activeSummary}
                  </p>
                ) : null}
              </div>

              {selectedTrack !== "All" || searchQuery.trim() ? (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTrack("All");
                    setSearchQuery("");
                  }}
                  className="rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary transition"
                >
                  Clear Search
                </button>
              ) : null}
            </div>

            {filteredCaseStudies.length ? (
              <div id="case-study-grid" className="grid grid-cols-12 gap-6 lg:grid-cols-1">
                {filteredCaseStudies.map((caseStudy, index) => (
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
                      <h2 className="mt-3 text-2xl font-black text-dark dark:text-light">{caseStudy.title}</h2>
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
                        Read Case Study
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
                <h2 className="text-2xl font-black text-dark dark:text-light">No matching case studies</h2>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Try a broader query like `SaaS`, `launch`, `service`, or `tutorial`, or clear the active
                  track to widen the results.
                </p>
              </motion.article>
            )}
          </section>

          <section className="mt-10">
            <LeadRoutingPanel
              eyebrow="Proof to Lead"
              title="Use proof to qualify buyers, then route them into the right next step."
              description="Case studies should build confidence first. Once a buyer believes the quality, give them a clear path into a detailed brief, a faster WhatsApp conversation, or a marketplace order."
              location="case_study_index_panel"
              route="/case-studies"
              primaryChannel="WhatsApp"
              secondaryChannel="Fiverr"
            />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default CaseStudiesPage;
