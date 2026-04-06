import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { TransitionEffect } from "@/components/TransitionEffect";
import { studioShowreel } from "@/data/videos";
import {
  getBreadcrumbSchema,
  getVideoObjectSchema,
  getWebPageSchema,
} from "@/lib/seo";

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const WatchShowreelPage = () => {
  const pageTitle = `${studioShowreel.pageTitle} | Watch`;
  const pageSchema = getWebPageSchema({
    title: pageTitle,
    description: studioShowreel.description,
    url: studioShowreel.watchPagePath,
    type: "WebPage",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { title: "Home", url: "/" },
    { title: studioShowreel.pageTitle, url: studioShowreel.watchPagePath },
  ]);

  const videoSchema = getVideoObjectSchema({
    name: studioShowreel.name,
    description: studioShowreel.description,
    thumbnailUrl: studioShowreel.thumbnailUrl,
    embedUrl: studioShowreel.youtubeEmbedUrl,
    duration: studioShowreel.duration,
    url: studioShowreel.watchPagePath,
    mainEntityOfPage: studioShowreel.watchPagePath,
  });

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={studioShowreel.description}
        canonicalUrl={studioShowreel.watchPagePath}
        ogType="video.other"
        ogImage="/og-image.jpg"
        keywords={[
          "cube cake studiios showreel",
          "animation showreel",
          "explainer video showreel",
          "watch cube cake studiios video",
        ]}
        structuredData={[pageSchema, breadcrumbSchema, videoSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light dark:bg-dark">
        <section className="relative overflow-hidden bg-[#08101f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.24),transparent_35%),radial-gradient(circle_at_82%_76%,rgba(249,115,22,0.24),transparent_36%),linear-gradient(155deg,#07101f_0%,#121b32_46%,#0c1e36_100%)]" />
          <Layout className="relative py-14 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                Watch Page
              </p>
              <h1 className="mt-5 text-6xl font-black leading-tight xl:text-5xl lg:text-4xl md:text-3xl">
                {studioShowreel.pageTitle}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200/95 md:text-sm">
                {studioShowreel.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-8 overflow-hidden rounded-[2rem] border border-white/15 bg-black/25 shadow-2xl"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={studioShowreel.youtubeEmbedUrl}
                  title={studioShowreel.pageTitle}
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </Layout>
        </section>

        <Layout className="py-10">
          <section className="grid grid-cols-12 gap-6 lg:grid-cols-1">
            <motion.article
              {...fadeIn}
              className="col-span-8 rounded-3xl border border-gray-200 bg-white p-7 dark:border-gray-700 dark:bg-dark/80"
            >
              <h2 className="text-3xl font-black text-dark dark:text-light md:text-2xl">
                What You Will See
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                This reel gives a quick look at how we approach motion, storytelling, and visual
                polish across startup launches, product explainers, and brand systems.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-1">
                {studioShowreel.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                <p>
                  This page is built as a dedicated video destination for visitors who want to
                  evaluate Cube Cake Studiios through motion work first. The video is the main
                  content of the page, with the surrounding copy there to explain what the reel
                  covers and where to go next.
                </p>
                <p>
                  The reel highlights how we handle pacing, transitions, product framing, and brand
                  storytelling across explainers, launch assets, and design-led communication. If
                  the visual style fits what you need, continue into the portfolio and case studies
                  for more detailed proof and project context.
                </p>
              </div>
            </motion.article>

            <motion.aside
              {...fadeIn}
              className="col-span-4 rounded-3xl border border-gray-200 bg-white p-7 dark:border-gray-700 dark:bg-dark/80"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Next Step
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Want a similar motion style for your brand, launch, or product story? Use the links
                below to keep browsing or start a project brief.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={studioShowreel.youtubeWatchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-dark px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-light dark:text-dark"
                >
                  Open on YouTube
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-dark transition hover:bg-gray-100 dark:border-gray-600 dark:text-light dark:hover:bg-gray-800"
                >
                  View Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-dark transition hover:bg-gray-100 dark:border-gray-600 dark:text-light dark:hover:bg-gray-800"
                >
                  Start a Project
                </Link>
              </div>
            </motion.aside>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default WatchShowreelPage;
