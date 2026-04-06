import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import TrackedInternalLink from "@/components/TrackedInternalLink";
import { TransitionEffect } from "@/components/TransitionEffect";
import { saasExplainerLanding } from "@/data/saasExplainerLanding";
import { getBreadcrumbSchema, getWebPageSchema, SITE_URL, toAbsoluteUrl } from "@/lib/seo";

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/30 bg-[linear-gradient(135deg,#ffffff_0%,#dcfbff_46%,#67e8f9_100%)] px-7 py-3.5 text-sm font-black tracking-[0.01em] text-[#051321] shadow-[0_20px_50px_-22px_rgba(103,232,249,0.88)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_64px_-20px_rgba(103,232,249,0.98)]";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.09]";

const SectionLabel = ({ children }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">{children}</p>
);

export default function SaasExplainerVideoAgencyPage() {
  const landing = saasExplainerLanding;
  const route = landing.route;

  const pageSchema = getWebPageSchema({
    title: landing.title,
    description: landing.description,
    url: route,
    type: "WebPage",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { title: "Home", url: "/" },
    { title: "SaaS Explainer Video Agency", url: route },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${toAbsoluteUrl(route)}#service`,
    name: "SaaS Explainer Video Agency",
    serviceType: "Explainer video company for startups",
    description: landing.description,
    url: toAbsoluteUrl(route),
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    audience: {
      "@type": "Audience",
      audienceType: "SaaS founders, startup founders, product marketing teams, and B2B service companies",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: toAbsoluteUrl("/contact"),
    },
  };

  return (
    <>
      <SEOHead
        title={landing.title}
        description={landing.description}
        canonicalUrl={route}
        keywords={landing.keywords}
        ogType="website"
        structuredData={[pageSchema, breadcrumbSchema, serviceSchema]}
      />

      <TransitionEffect />

      <main className="w-full overflow-hidden bg-[#050916] text-white">
        <section className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(249,115,22,0.18),transparent_28%),radial-gradient(circle_at_68%_80%,rgba(59,130,246,0.2),transparent_34%),linear-gradient(160deg,#040814_0%,#07101f_48%,#0c1630_100%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:72px_72px]" />

          <Layout className="relative pt-16 pb-14 lg:pt-12">
            <div className="grid grid-cols-12 items-center gap-8 lg:grid-cols-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="col-span-6"
              >
                <SectionLabel>{landing.hero.eyebrow}</SectionLabel>
                <h1 className="mt-5 max-w-4xl text-7xl font-black leading-[0.92] xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl">
                  <span className="block">{landing.hero.titleLead}</span>
                  <span className="mt-2 block bg-[linear-gradient(90deg,#ffffff_0%,#fef3c7_26%,#b7f4ff_56%,#67e8f9_100%)] bg-clip-text text-transparent">
                    {landing.hero.titleAccent}
                  </span>
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-base">
                  {landing.hero.summary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <TrackedInternalLink
                    href="/contact"
                    label="Send Project Brief"
                    location="saas_landing_hero"
                    route={route}
                    ctaType="lead_brief"
                    className={primaryButtonClass}
                  >
                    Send Project Brief
                  </TrackedInternalLink>

                  <TrackedExternalLink
                    channel="WhatsApp"
                    location="saas_landing_hero"
                    route={route}
                    surface="landing_page"
                    className={secondaryButtonClass}
                  >
                    Chat on WhatsApp
                  </TrackedExternalLink>
                </div>

                <p className="mt-4 text-sm text-slate-300">{landing.hero.trustLine}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.62, delay: 0.08 }}
                className="col-span-6"
              >
                <div className="relative mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-4 shadow-[0_32px_90px_-42px_rgba(34,211,238,0.45)] backdrop-blur-xl">
                  <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
                  <div className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-orange-400/20 blur-3xl" />

                  <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#0b1224_0%,#0a1020_52%,#09101d_100%)] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                        {landing.hero.visual.badge}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                        First impression matters
                      </span>
                    </div>

                    <div className="relative mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#10182f_0%,#0a1020_42%,#070d1c_100%)] px-5 py-5">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(249,115,22,0.14),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_28%)]" />
                      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.28),rgba(103,232,249,0.03)_66%,transparent_72%)] blur-sm" />
                      <div className="absolute inset-y-8 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-white/0 via-white/18 to-white/0 md:block" />

                      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:grid-cols-1">
                        <motion.div
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.55, delay: 0.15 }}
                          className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)] rotate-[-2deg] md:rotate-0"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-200">
                            {landing.hero.visual.beforeTitle}
                          </p>
                          <div className="mt-4 space-y-3">
                            {landing.hero.visual.beforePoints.map((item) => (
                              <div
                                key={item}
                                className="rounded-2xl border border-white/8 bg-white/[0.04] px-3 py-3 text-sm text-slate-300"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.55, delay: 0.22 }}
                          className="flex flex-col items-center gap-3 md:hidden"
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(34,211,238,0.18),rgba(255,255,255,0.06))] text-sm font-black tracking-[0.14em] text-cyan-100 shadow-[0_18px_40px_-20px_rgba(34,211,238,0.55)]">
                            AHA
                          </div>
                          <div className="h-20 w-px bg-gradient-to-b from-white/0 via-white/35 to-white/0" />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.55, delay: 0.28 }}
                          className="rounded-[1.5rem] border border-cyan-300/15 bg-[linear-gradient(160deg,rgba(34,211,238,0.14),rgba(255,255,255,0.04))] p-4 shadow-[0_22px_55px_-28px_rgba(34,211,238,0.45)] rotate-[2deg] md:rotate-0"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                            {landing.hero.visual.afterTitle}
                          </p>
                          <div className="mt-4 space-y-3">
                            {landing.hero.visual.afterPoints.map((item) => (
                              <div
                                key={item}
                                className="rounded-2xl border border-cyan-300/12 bg-white/[0.05] px-3 py-3 text-sm font-medium text-white"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      <div className="relative mt-5 rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4">
                        <p className="text-center text-sm font-semibold leading-relaxed text-white md:text-xs">
                          {landing.hero.visual.closing}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Layout>
        </section>

        <section className="border-y border-white/10 bg-[#07101f]">
          <Layout className="py-14">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-5">
              <div className="grid grid-cols-2 gap-5 lg:grid-cols-1">
                <article className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                  <SectionLabel>Problem</SectionLabel>
                  <h2 className="mt-3 text-3xl font-black text-white md:text-2xl">
                    {landing.problemSolution.problemTitle}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-sm">
                    {landing.problemSolution.problemText}
                  </p>
                </article>

                <article className="rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/[0.04] p-6">
                  <SectionLabel>Solution</SectionLabel>
                  <h2 className="mt-3 text-3xl font-black text-white md:text-2xl">
                    {landing.problemSolution.solutionTitle}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-sm">
                    {landing.problemSolution.solutionText}
                  </p>
                </article>
              </div>
            </div>
          </Layout>
        </section>

        <section className="bg-[#050916]">
          <Layout className="py-14">
            <div className="flex items-end justify-between gap-6 lg:flex-col lg:items-start">
              <div className="max-w-2xl">
                <SectionLabel>{landing.proof.eyebrow}</SectionLabel>
                <h2 className="mt-3 text-4xl font-black text-white md:text-3xl">{landing.proof.title}</h2>
              </div>

              <div className="flex flex-wrap gap-4">
                {landing.proof.links.map((item) => (
                  <TrackedInternalLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    location="saas_landing_proof"
                    route={route}
                    ctaType={item.ctaType}
                    className="text-sm font-semibold text-cyan-200 transition hover:text-white"
                  >
                    {item.label}
                  </TrackedInternalLink>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-1">
              {landing.proof.items.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    Credibility 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-white md:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </Layout>
        </section>

        <section className="border-y border-white/10 bg-[#07101f]">
          <Layout className="py-14">
            <div className="max-w-2xl">
              <SectionLabel>{landing.process.eyebrow}</SectionLabel>
              <h2 className="mt-3 text-4xl font-black text-white md:text-3xl">{landing.process.title}</h2>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 lg:grid-cols-1">
              {landing.process.steps.map((item, index) => (
                <article
                  key={item.number}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-3xl font-black text-white">{item.number}</p>
                  <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </Layout>
        </section>

        <section className="bg-[#050916]">
          <Layout className="py-16">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(34,211,238,0.08))] p-8 text-center shadow-[0_28px_80px_-45px_rgba(34,211,238,0.35)] md:p-6">
              <SectionLabel>Start The Project</SectionLabel>
              <h2 className="mt-3 text-5xl font-black text-white md:text-3xl">{landing.finalCta.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-sm">
                {landing.finalCta.description}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <TrackedInternalLink
                  href="/contact"
                  label="Send Project Brief"
                  location="saas_landing_final_cta"
                  route={route}
                  ctaType="lead_brief"
                  className={primaryButtonClass}
                >
                  Send Project Brief
                </TrackedInternalLink>

                <TrackedExternalLink
                  channel="WhatsApp"
                  location="saas_landing_final_cta"
                  route={route}
                  surface="landing_page"
                  className={secondaryButtonClass}
                >
                  Chat on WhatsApp
                </TrackedExternalLink>
              </div>
            </div>
          </Layout>
        </section>
      </main>
    </>
  );
}
