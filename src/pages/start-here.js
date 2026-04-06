import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import TrackedInternalLink from "@/components/TrackedInternalLink";
import { TransitionEffect } from "@/components/TransitionEffect";
import { clientPromiseCards } from "@/data/clientPromise";
import {
  deliveryTimeline,
  leadProtectionHighlights,
  offerPackageTiers,
  revisionScopeGuidance,
  routeComparisonColumns,
  routeComparisonRows,
} from "@/data/offerGuidance";
import { testimonials } from "@/data/testimonials";
import { getLeadChannels } from "@/lib/leadRouting";
import {
  getBreadcrumbSchema,
  getCollectionPageSchema,
  getItemListSchema,
  getWebPageSchema,
} from "@/lib/seo";

const routeOptions = [
  {
    title: "Send a Detailed Brief",
    description:
      "Best for custom projects, complex scopes, or when you want a structured proposal, revision checkpoints, and written scope terms before moving off-site.",
    href: "/contact",
    label: "Open Contact Brief",
    type: "internal",
    badge: "Best Overall",
  },
  {
    title: "Chat on WhatsApp",
    description:
      "Best for high-intent buyers who want the fastest reply about budget, timeline, and deliverables.",
    channel: "WhatsApp",
    type: "external",
  },
  {
    title: "Hire on Fiverr",
    description:
      "Best for buyers who prefer marketplace ordering, packaged offers, and platform-based transaction flow.",
    channel: "Fiverr",
    type: "external",
  },
  {
    title: "Verify on LinkedIn",
    description:
      "Best for B2B trust, partnership discussions, and validating the team in a professional context.",
    channel: "LinkedIn",
    type: "external",
  },
  {
    title: "Check Google Profile",
    description:
      "Best for trust checks, review validation, and confirming business details before inquiry.",
    channel: "Google Profile",
    type: "external",
  },
];

const faqItems = [
  {
    question: "Should I use the contact form or WhatsApp first?",
    answer:
      "Use the contact form when your project needs a structured brief or a proposal. Use WhatsApp when you want the fastest conversation about scope, budget, and timeline.",
  },
  {
    question: "When should I go to Fiverr instead of contacting directly?",
    answer:
      "Use Fiverr when you prefer a marketplace workflow, packaged services, and platform-based order management. Use direct contact for custom scopes, multi-asset projects, or when you want written revision and scope terms around a custom brief.",
  },
  {
    question: "Do you offer revisions and a money-back guarantee?",
    answer:
      "Yes. Direct projects include defined revision rounds and approval checkpoints. If the final deliverables still do not materially match the agreed written scope after reasonable revisions, we may offer a full or partial refund. Full policy details are available in our terms.",
  },
  {
    question: "Why does this site point to LinkedIn and Google Profile?",
    answer:
      "Those routes work as trust layers. Buyers often want proof, profile validation, and business visibility before they commit to a lead or an order.",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export default function StartHerePage() {
  const title = "Start Here | Work With Cube Cake Studiios";
  const description =
    "Choose the best way to start with Cube Cake Studiios: send a brief, chat on WhatsApp, hire on Fiverr, or verify the business on LinkedIn.";

  const leadChannels = getLeadChannels(["WhatsApp", "Fiverr", "LinkedIn", "Google Profile"]);
  const confidenceTestimonials = testimonials.filter((item) => [1, 7, 8].includes(item.id));

  const pageSchema = getWebPageSchema({
    title,
    description,
    url: "/start-here",
    type: "WebPage",
  });

  const collectionSchema = getCollectionPageSchema({
    title,
    description,
    url: "/start-here",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { title: "Home", url: "/" },
    { title: "Start Here", url: "/start-here" },
  ]);

  const itemListSchema = getItemListSchema({
    name: "Lead Routes",
    description,
    url: "/start-here",
    items: routeOptions.map((item) => ({
      name: item.title,
      description: item.description,
      url:
        item.type === "internal"
          ? item.href
          : leadChannels.find((channel) => channel.name === item.channel)?.url || "/contact",
      type: "Thing",
    })),
  });

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        canonicalUrl="/start-here"
        keywords={[
          "hire 2d animation studio",
          "explainer video quote",
          "animation studio contact",
          "fiverr animation studio",
          "whatsapp animation agency",
        ]}
        ogType="website"
        structuredData={[pageSchema, collectionSchema, breadcrumbSchema, itemListSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light dark:bg-dark">
        <section className="relative overflow-hidden bg-[#07101f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.24),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(168,85,247,0.28),transparent_34%),linear-gradient(155deg,#06101c_0%,#191230_48%,#09182d_100%)]" />
          <Layout className="relative py-16 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                Lead Routing Hub
              </p>
              <h1 className="mt-5 text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-black leading-tight">
                Choose the best way to start your next 2D animation project.
              </h1>
              <p className="mt-5 max-w-3xl text-base md:text-sm text-slate-200/95 leading-relaxed">
                This page exists to route different buyer types correctly. Start with a detailed brief
                on this website, use WhatsApp for fast conversations, Fiverr for marketplace ordering,
                and LinkedIn or Google Profile when you want to validate trust signals first.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <TrackedInternalLink
                  href="/contact"
                  label="Send Project Brief"
                  location="start_here_hero"
                  ctaType="lead_brief"
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold text-dark hover:scale-[1.02] transition"
                >
                  Send Project Brief
                </TrackedInternalLink>
                <TrackedExternalLink
                  channel="WhatsApp"
                  location="start_here_hero"
                  surface="start_here"
                  className="rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Chat on WhatsApp
                </TrackedExternalLink>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {leadProtectionHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </Layout>
        </section>

        <Layout className="pt-8 pb-12">
          <section className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {routeOptions.map((item, index) => {
              const channel = item.channel
                ? leadChannels.find((entry) => entry.name === item.channel)
                : null;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-[1.75rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-2xl md:text-xl font-black text-dark dark:text-light">
                      {item.title}
                    </p>
                    <span className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {item.badge || channel?.badge || "Route"}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-5">
                    {item.type === "internal" ? (
                      <TrackedInternalLink
                        href={item.href}
                        label={item.label}
                        location="start_here_grid"
                        ctaType="routing_hub"
                        className="inline-flex items-center gap-2 rounded-full bg-dark text-light dark:bg-light dark:text-dark px-5 py-2.5 text-sm font-bold hover:scale-[1.02] transition"
                      >
                        {item.label}
                        <span aria-hidden>&rarr;</span>
                      </TrackedInternalLink>
                    ) : (
                      <TrackedExternalLink
                        channel={item.channel}
                        location="start_here_grid"
                        surface="start_here"
                        className="inline-flex items-center gap-2 rounded-full bg-dark text-light dark:bg-light dark:text-dark px-5 py-2.5 text-sm font-bold hover:scale-[1.02] transition"
                      >
                        {channel?.cta}
                        <span aria-hidden>&rarr;</span>
                      </TrackedExternalLink>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </section>

          <section className="mt-10 grid grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              {
                title: "Custom Scope",
                description:
                  "Use the on-site brief when you need multiple deliverables, a proposal, or strategic recommendations.",
              },
              {
                title: "Fastest Conversation",
                description:
                  "Use WhatsApp when speed matters more than formality and you already know the core project goal.",
              },
              {
                title: "Trust Layer",
                description:
                  "Use LinkedIn and Google Profile when you want to validate the business before taking the next step.",
              },
            ].map((item) => (
              <motion.article
                key={item.title}
                {...fadeIn}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-5"
              >
                <h2 className="text-xl font-black text-dark dark:text-light">{item.title}</h2>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </section>

          <section className="mt-10 rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7">
            <div className="flex items-start justify-between gap-6 lg:flex-col">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                  Route Comparison
                </p>
                <h2 className="mt-2 text-3xl md:text-2xl font-black text-dark dark:text-light">
                  Direct brief vs WhatsApp vs Fiverr
                </h2>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  These three routes all work, but they solve different buying behaviors. The direct
                  brief is the strongest option when you want written scope terms, planned revisions,
                  and clearer protection around the final delivery.
                </p>
              </div>
              <Link
                href="/contact"
                className="rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-dark dark:text-light hover:border-primary hover:text-primary transition"
              >
                Start with the clearest route
              </Link>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="min-w-[860px] w-full border-separate border-spacing-y-3">
                <thead>
                  <tr>
                    <th className="w-[19%] rounded-2xl bg-gray-100 dark:bg-black/30 px-4 py-4 text-left text-xs uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                      Comparison Point
                    </th>
                    {routeComparisonColumns.map((column) => (
                      <th
                        key={column.id}
                        className="rounded-2xl bg-gray-100 dark:bg-black/30 px-4 py-4 text-left"
                      >
                        <p className="text-lg font-black text-dark dark:text-light">{column.title}</p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-primary">
                          {column.badge}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {routeComparisonRows.map((row) => (
                    <tr key={row.label}>
                      <th className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 px-4 py-4 text-left text-sm font-bold text-dark dark:text-light align-top">
                        {row.label}
                      </th>
                      {routeComparisonColumns.map((column) => (
                        <td
                          key={`${row.label}-${column.id}`}
                          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 px-4 py-4 text-sm text-gray-700 dark:text-gray-300 align-top leading-relaxed"
                        >
                          {row[column.id]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <th className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 px-4 py-4 text-left text-sm font-bold text-dark dark:text-light align-top">
                      Action
                    </th>
                    {routeComparisonColumns.map((column) => {
                      if (column.type === "internal") {
                        return (
                          <td
                            key={`action-${column.id}`}
                            className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 px-4 py-4 align-top"
                          >
                            <TrackedInternalLink
                              href={column.href}
                              label={column.label}
                              location="start_here_route_table"
                              ctaType="routing_hub"
                              className="inline-flex items-center gap-2 rounded-full bg-dark text-light dark:bg-light dark:text-dark px-4 py-2 text-sm font-bold hover:scale-[1.02] transition"
                            >
                              {column.label}
                              <span aria-hidden>&rarr;</span>
                            </TrackedInternalLink>
                          </td>
                        );
                      }

                      const channel = leadChannels.find((item) => item.name === column.channel);

                      return (
                        <td
                          key={`action-${column.id}`}
                          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 px-4 py-4 align-top"
                        >
                          <TrackedExternalLink
                            channel={column.channel}
                            location="start_here_route_table"
                            surface="start_here"
                            className="inline-flex items-center gap-2 rounded-full bg-dark text-light dark:bg-light dark:text-dark px-4 py-2 text-sm font-bold hover:scale-[1.02] transition"
                          >
                            {channel?.cta || column.title}
                            <span aria-hidden>&rarr;</span>
                          </TrackedExternalLink>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-dark dark:via-slate-900/40 dark:to-cyan-900/10 p-7">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                Package Options
              </p>
              <h2 className="mt-2 text-3xl md:text-2xl font-black text-dark dark:text-light">
                Fiverr package pricing, now shown in dollars.
              </h2>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                These package cards now match your Fiverr offer structure and show fixed dollar
                prices so buyers can compare options faster before they choose direct brief,
                WhatsApp, or Fiverr.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 lg:grid-cols-1 gap-4">
              {offerPackageTiers.map((tier, index) => (
                <motion.article
                  key={tier.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-[1.75rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-2xl font-black text-dark dark:text-light">{tier.name}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.14em] font-semibold text-primary">
                        {tier.badge}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-black text-primary">{tier.price}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {tier.bestFor}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                        Delivery
                      </p>
                      <p className="mt-2 text-sm font-bold text-dark dark:text-light">{tier.delivery}</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                        Revisions
                      </p>
                      <p className="mt-2 text-sm font-bold text-dark dark:text-light">{tier.revisions}</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                        Runtime
                      </p>
                      <p className="mt-2 text-sm font-bold text-dark dark:text-light">{tier.runtime}</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                        Script
                      </p>
                      <p className="mt-2 text-sm font-bold text-dark dark:text-light">{tier.words}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {tier.deliverables.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/10 px-4 py-3 text-sm text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <TrackedExternalLink
                      channel="Fiverr"
                      location="start_here_packages"
                      surface="start_here"
                      className="inline-flex items-center gap-2 rounded-full bg-dark text-light dark:bg-light dark:text-dark px-5 py-2.5 text-sm font-bold hover:scale-[1.02] transition"
                    >
                      Order on Fiverr
                      <span aria-hidden>&rarr;</span>
                    </TrackedExternalLink>
                    <TrackedInternalLink
                      href="/contact"
                      label={`${tier.name} package quote`}
                      location="start_here_packages"
                      ctaType="package_quote"
                      className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-dark dark:text-light hover:border-primary hover:text-primary transition"
                    >
                      Ask about this package
                    </TrackedInternalLink>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mt-10 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="rounded-[1.75rem] border border-emerald-200/80 dark:border-emerald-700/40 bg-emerald-50/80 dark:bg-emerald-900/10 p-6">
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-emerald-700 dark:text-emerald-300">
                Usually In Scope
              </p>
              <h2 className="mt-2 text-2xl font-black text-dark dark:text-light">
                What counts as an in-scope revision?
              </h2>
              <div className="mt-5 space-y-3">
                {revisionScopeGuidance.inScope.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-emerald-200/80 dark:border-emerald-700/40 bg-white/80 dark:bg-black/20 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-amber-200/80 dark:border-amber-700/40 bg-amber-50/80 dark:bg-amber-900/10 p-6">
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-amber-700 dark:text-amber-300">
                Usually Re-Quoted
              </p>
              <h2 className="mt-2 text-2xl font-black text-dark dark:text-light">
                What usually sits outside the original scope?
              </h2>
              <div className="mt-5 space-y-3">
                {revisionScopeGuidance.outOfScope.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-amber-200/80 dark:border-amber-700/40 bg-white/80 dark:bg-black/20 px-4 py-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-orange-50 via-white to-violet-50 dark:from-dark dark:via-purple-900/10 dark:to-cyan-900/10 p-7">
            <div className="flex items-start justify-between gap-6 lg:flex-col">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                  Best For Confidence
                </p>
                <h2 className="mt-2 text-3xl md:text-2xl font-black text-dark dark:text-light">
                  The direct brief route gives clients the clearest protection.
                </h2>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  If you want multiple change options, written approval stages, and a clear path for
                  refund support when final work misses the agreed scope, the direct contact brief is
                  the strongest starting point.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <TrackedInternalLink
                  href="/contact"
                  label="Start Protected Brief"
                  location="start_here_assurance"
                  ctaType="lead_brief"
                  className="rounded-full bg-dark text-light dark:bg-light dark:text-dark px-5 py-2.5 text-sm font-bold hover:scale-[1.02] transition"
                >
                  Start Protected Brief
                </TrackedInternalLink>
                <Link
                  href="/terms"
                  className="rounded-full border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-dark dark:text-light hover:border-primary hover:text-primary transition"
                >
                  Review Terms
                </Link>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 lg:grid-cols-1 gap-4">
              {clientPromiseCards.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-black/20 p-5"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-primary">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-black text-dark dark:text-light">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark/80 p-7">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                Delivery Timeline
              </p>
              <h2 className="mt-2 text-3xl md:text-2xl font-black text-dark dark:text-light">
                A simple process clients can understand fast
              </h2>
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                When buyers can picture the production path, they worry less about delays, feedback
                chaos, or endless back-and-forth.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-5 lg:grid-cols-2 sm:grid-cols-1 gap-4">
              {deliveryTimeline.map((item, index) => (
                <motion.article
                  key={item.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 p-5"
                >
                  <p className="text-3xl font-black text-primary">{item.step}</p>
                  <h3 className="mt-3 text-lg font-black text-dark dark:text-light">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white via-slate-50 to-purple-50 dark:from-dark dark:via-slate-900/40 dark:to-purple-900/10 p-7">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.14em] font-semibold text-primary">
                Confidence Signals
              </p>
              <h2 className="mt-2 text-3xl md:text-2xl font-black text-dark dark:text-light">
                Proof that responsiveness and delivery discipline already matter here
              </h2>
            </div>

            <div className="mt-6 grid grid-cols-3 lg:grid-cols-1 gap-4">
              {confidenceTestimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-[1.75rem] border border-gray-200 dark:border-gray-700 bg-white dark:bg-black/20 p-6"
                >
                  <div className="flex items-center gap-2 text-primary">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <span key={starIndex} className="text-base">
                        *
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-dark text-sm font-black text-white dark:bg-light dark:text-dark">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-black text-dark dark:text-light">{testimonial.author}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {testimonial.role} · {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-violet-100/70 to-cyan-100/70 dark:from-violet-900/20 dark:to-cyan-900/20 p-7">
            <h2 className="text-3xl md:text-2xl font-black text-dark dark:text-light">
              Frequently Asked Questions
            </h2>
            <div className="mt-5 space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/85 dark:bg-black/20 p-4"
                >
                  <summary className="cursor-pointer list-none font-semibold text-dark dark:text-light">
                    {item.question}
                  </summary>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}
