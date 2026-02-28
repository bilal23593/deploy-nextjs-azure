import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import TrackedInternalLink from "@/components/TrackedInternalLink";
import { TransitionEffect } from "@/components/TransitionEffect";
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
      "Best for custom projects, complex scopes, or when you want a structured proposal before moving off-site.",
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
      "Use Fiverr when you prefer a marketplace workflow, packaged services, and platform-based order management. Use direct contact for custom scopes or multi-asset projects.",
  },
  {
    question: "Why does this site point to LinkedIn and Google Profile?",
    answer:
      "Those routes work as trust layers. Buyers often want proof, profile validation, and business visibility before they commit to a lead or an order.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

export default function StartHerePage() {
  const title = "Start Here | Choose the Best Route to Work With Cube Cake Studiios";
  const description =
    "Compare the best way to work with Cube Cake Studiios. Send a direct brief, chat on WhatsApp, hire on Fiverr, or verify via LinkedIn and Google Profile.";

  const leadChannels = getLeadChannels(["WhatsApp", "Fiverr", "LinkedIn", "Google Profile"]);

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
        structuredData={[pageSchema, collectionSchema, breadcrumbSchema, itemListSchema, faqSchema]}
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
