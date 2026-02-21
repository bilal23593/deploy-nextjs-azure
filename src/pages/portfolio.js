import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TransitionEffect } from "@/components/TransitionEffect";
import ProjectCard from "@/components/ProjectCard";
import { portfolioProjects, projectCategories } from "@/data/portfolio";
import SEOHead from "@/components/SEOHead";
import { getBreadcrumbSchema, getPortfolioSchema, getWebPageSchema } from "@/lib/seo";

const showcaseTags = [
  "Real campaign frames",
  "Character-driven visuals",
  "Story-first motion",
  "Conversion-focused edits",
  "Brand-safe systems",
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return portfolioProjects;
    }

    return portfolioProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const portfolioTitle = "Portfolio | CUBE CAKE STUDIIOS";
  const portfolioDescription =
    "View our latest animation, design, and branding projects. Showcase of successful client work and case studies.";
  const portfolioPageSchema = getWebPageSchema({
    title: portfolioTitle,
    description: portfolioDescription,
    url: "/portfolio",
    type: "CollectionPage",
  });
  const portfolioListSchema = getPortfolioSchema(portfolioProjects);
  const portfolioBreadcrumbSchema = getBreadcrumbSchema([
    { title: "Home", url: "/" },
    { title: "Portfolio", url: "/portfolio" },
  ]);

  return (
    <>
      <SEOHead
        title={portfolioTitle}
        description={portfolioDescription}
        canonicalUrl="/portfolio"
        keywords={[
          "animation portfolio",
          "design case studies",
          "branding projects",
          "ui ux portfolio",
          "web design showcase",
        ]}
        ogType="website"
        structuredData={[portfolioPageSchema, portfolioListSchema, portfolioBreadcrumbSchema]}
      />

      <TransitionEffect />

      <main className="w-full bg-light">
        <section className="relative overflow-hidden bg-[#0a0d17] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(249,115,22,0.24),transparent_44%),radial-gradient(circle_at_86%_82%,rgba(168,85,247,0.3),transparent_46%)]" />
          <div className="relative w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4 pt-20 pb-16 md:pt-16">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-orange-300 font-semibold mb-5">
                Portfolio
              </p>
              <h1 className="text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-black leading-tight mb-6">
                Real Projects. Real Characters. Real Campaign Outcomes.
              </h1>
              <p className="text-lg text-gray-200 max-w-3xl leading-relaxed mb-8">
                This showcase blends real frames, character assets, and production-ready campaign
                visuals from our animation, branding, UI/UX, and web projects.
              </p>
            </motion.div>

            <motion.div
              className="rounded-3xl border border-white/20 bg-white/5 p-4 overflow-hidden"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex gap-3 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                {[...showcaseTags, ...showcaseTags].map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="px-4 py-2 rounded-full border border-white/25 bg-white/10 text-sm font-medium whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4">
            <div className="mb-9 flex flex-wrap gap-3">
              {projectCategories.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.value
                      ? "bg-dark text-white shadow-lg"
                      : "bg-white text-dark border border-dark/15 hover:border-dark/35"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-6">
              {filteredProjects.map((project, index) => {
                const featured = activeCategory === "all" && index < 2;
                const cellClass = featured
                  ? "col-span-6 lg:col-span-12"
                  : "col-span-4 lg:col-span-6 md:col-span-12";

                return (
                  <div key={project.id} className={cellClass}>
                    <ProjectCard project={project} index={index} featured={featured} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-dark text-white">
          <div className="w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4">
            <div className="grid grid-cols-3 md:grid-cols-1 gap-6 mb-12">
              <motion.article
                className="rounded-3xl border border-white/15 bg-white/5 p-7"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-black text-orange-300 mb-2">150+</p>
                <p className="text-sm uppercase tracking-[0.14em] text-gray-300">Delivered Assets</p>
              </motion.article>
              <motion.article
                className="rounded-3xl border border-white/15 bg-white/5 p-7"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-black text-violet-300 mb-2">2.5M+</p>
                <p className="text-sm uppercase tracking-[0.14em] text-gray-300">Campaign Views</p>
              </motion.article>
              <motion.article
                className="rounded-3xl border border-white/15 bg-white/5 p-7"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                viewport={{ once: true }}
              >
                <p className="text-5xl font-black text-cyan-300 mb-2">82%</p>
                <p className="text-sm uppercase tracking-[0.14em] text-gray-300">Repeat Client Rate</p>
              </motion.article>
            </div>

            <motion.div
              className="rounded-3xl border border-white/20 bg-gradient-to-r from-violet-500/30 to-orange-500/30 p-8 text-center"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-3xl sm:text-2xl font-black mb-4">
                Want the Same Quality for Your Brand?
              </h2>
              <p className="text-gray-100 max-w-2xl mx-auto mb-7">
                Share your goal and timeline. We will map the right visual style, character approach,
                and output format for your launch.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-dark font-bold hover:shadow-xl transition-all"
              >
                Start Your Project
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
