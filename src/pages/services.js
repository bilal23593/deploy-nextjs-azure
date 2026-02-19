import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { TransitionEffect } from "@/components/TransitionEffect";
import { services, processSteps } from "@/data/services";
import { getSEOMeta, getOpenGraphMeta, getTwitterMeta } from "@/lib/seo";

const MotionLink = motion.create(Link);

const serviceStyle = {
  animation: {
    icon: "🎬",
    glow: "from-orange-400/25 to-pink-500/25",
    border: "border-orange-300/35",
    text: "text-orange-400",
  },
  explainer: {
    icon: "📢",
    glow: "from-violet-400/25 to-blue-500/25",
    border: "border-violet-300/35",
    text: "text-violet-400",
  },
  uiux: {
    icon: "🧩",
    glow: "from-cyan-400/25 to-blue-500/25",
    border: "border-cyan-300/35",
    text: "text-cyan-400",
  },
  branding: {
    icon: "✨",
    glow: "from-pink-400/25 to-orange-500/25",
    border: "border-pink-300/35",
    text: "text-pink-400",
  },
  web: {
    icon: "🌐",
    glow: "from-emerald-400/25 to-cyan-500/25",
    border: "border-emerald-300/35",
    text: "text-emerald-400",
  },
};

const highlightBadges = ["2D Animation", "Explainer Video", "UI/UX", "Branding", "Web Design"];

const serviceStats = [
  { label: "Creative sprints this year", value: "120+" },
  { label: "Average concept turnaround", value: "72h" },
  { label: "Client repeat rate", value: "82%" },
];

const Services = () => {
  const seoMeta = getSEOMeta({
    title: "Services | CUBE CAKE STUDIIOS",
    description:
      "Our comprehensive design and animation services: 2D Animation, Explainer Videos, UI/UX Design, Branding, and Web Design.",
    canonicalUrl: "https://cubecakestudios.com/services",
  });

  const openGraphMeta = getOpenGraphMeta({
    title: "Our Services | CUBE CAKE STUDIIOS",
    description:
      "Professional design and animation services for brands and businesses.",
    canonicalUrl: "https://cubecakestudios.com/services",
  });

  const twitterMeta = getTwitterMeta({
    title: "Our Services | CUBE CAKE STUDIIOS",
    description:
      "Professional design and animation services for brands and businesses.",
  });

  return (
    <>
      <Head>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="animation, explainer video, UI design, UX design, branding, web design"
        />
        <meta name="author" content="CUBE CAKE STUDIIOS" />
        <link rel="canonical" href={seoMeta.canonical} />

        <meta property="og:type" content={openGraphMeta.type} />
        <meta property="og:url" content={openGraphMeta.url} />
        <meta property="og:title" content={openGraphMeta.title} />
        <meta property="og:description" content={openGraphMeta.description} />
        <meta property="og:image" content={openGraphMeta.images[0].url} />
        <meta property="og:site_name" content="CUBE CAKE STUDIIOS" />

        <meta name="twitter:card" content={twitterMeta.cardType} />
        <meta name="twitter:creator" content={twitterMeta.handle} />
        <meta name="twitter:title" content={twitterMeta.title} />
        <meta name="twitter:description" content={twitterMeta.description} />
        <meta name="twitter:image" content={twitterMeta.image} />
      </Head>

      <TransitionEffect />

      <main className="w-full bg-light">
        <section className="relative overflow-hidden bg-[#0a0d17] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(249,115,22,0.24),transparent_44%),radial-gradient(circle_at_86%_80%,rgba(168,85,247,0.28),transparent_46%)]" />
          <div className="relative w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4 pt-20 pb-16 md:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-4xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-orange-300 font-semibold mb-5">
                Services
              </p>
              <h1 className="text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-black leading-tight mb-6">
                Creative Services Built to Win Attention and Drive Results
              </h1>
              <p className="text-lg text-gray-200 max-w-3xl leading-relaxed mb-8">
                From story to execution, we design and animate brand experiences that feel premium,
                convert better, and stay memorable across digital channels.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <MotionLink
                  href="/contact"
                  className="px-7 py-3 rounded-full bg-white text-dark font-bold hover:shadow-xl transition-all"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book a Discovery Call
                </MotionLink>
                <MotionLink
                  href="/portfolio"
                  className="px-7 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Portfolio
                </MotionLink>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 rounded-3xl border border-white/15 bg-white/5 p-5 overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex gap-3 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                {[...highlightBadges, ...highlightBadges].map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="whitespace-nowrap px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">
                What We Offer
              </p>
              <h2 className="text-5xl md:text-4xl sm:text-3xl font-black text-dark">
                End-to-End Creative Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-12 gap-6 mb-14">
              {services.map((service, index) => {
                const style = serviceStyle[service.id] || serviceStyle.animation;
                const isFeature = index === 0 || index === 1;
                return (
                  <motion.article
                    key={service.id}
                    className={`relative overflow-hidden rounded-3xl border-2 border-dark/10 bg-white p-7 ${
                      isFeature ? "col-span-6 lg:col-span-12" : "col-span-4 lg:col-span-6 md:col-span-12"
                    }`}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: index * 0.07 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -7, boxShadow: "0 22px 45px rgba(0,0,0,0.12)" }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${style.glow} opacity-0 hover:opacity-100 transition-opacity duration-400`} />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div
                          className={`w-14 h-14 rounded-2xl border ${style.border} bg-white/80 flex items-center justify-center text-3xl`}
                        >
                          {style.icon}
                        </div>
                        <span className={`text-xs uppercase tracking-[0.2em] font-semibold ${style.text}`}>
                          {service.price}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-2xl font-black text-dark mb-3">{service.title}</h3>
                      <p className="text-dark/75 leading-relaxed mb-6">{service.shortDescription}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.benefits.slice(0, 3).map((benefit) => (
                          <span
                            key={benefit}
                            className="px-3 py-1.5 rounded-full border border-dark/15 bg-dark/[0.03] text-xs font-medium text-dark/80"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>

                      <MotionLink
                        href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark text-white font-semibold"
                        whileHover={{ x: 2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Start This Service
                        <span>→</span>
                      </MotionLink>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
              {serviceStats.map((stat, index) => (
                <motion.article
                  key={stat.label}
                  className="rounded-3xl border border-dark/15 bg-white p-7"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl font-black text-dark mb-2">{stat.value}</p>
                  <p className="text-sm uppercase tracking-[0.14em] text-dark/70 font-semibold">{stat.label}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-dark text-white">
          <div className="w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-orange-300 font-semibold mb-4">
                How We Work
              </p>
              <h2 className="text-5xl md:text-4xl sm:text-3xl font-black">
                Structured Process, Premium Output
              </h2>
            </motion.div>

            <div className="grid grid-cols-5 lg:grid-cols-2 sm:grid-cols-1 gap-5 mb-12">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl font-black text-violet-300 mb-3">{step.number}</p>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="relative rounded-3xl border border-white/20 bg-gradient-to-r from-violet-500/35 to-orange-500/35 p-8 md:p-6 text-center overflow-hidden"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-24 -left-12 w-56 h-56 bg-white/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h3 className="text-4xl md:text-3xl sm:text-2xl font-black mb-4">
                  Let’s Build Something That Feels Unforgettable
                </h3>
                <p className="text-gray-100 max-w-2xl mx-auto mb-7">
                  Tell us your goal, timeline, and target audience. We will propose the right
                  creative package and execution plan.
                </p>
                <MotionLink
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-dark font-bold"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                  <span>→</span>
                </MotionLink>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
