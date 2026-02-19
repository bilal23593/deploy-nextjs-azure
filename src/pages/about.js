import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import profileImage from "../../public/images/profile/developer-pic-3.png";
import { TransitionEffect } from "@/components/TransitionEffect";
import { getSEOMeta, getOpenGraphMeta, getTwitterMeta } from "@/lib/seo";

const MotionLink = motion.create(Link);

const impactStats = [
  { value: 50, suffix: "+", label: "Satisfied Clients" },
  { value: 40, suffix: "+", label: "Projects Completed" },
  { value: 4, suffix: "+", label: "Years of Experience" },
];

const coreValues = [
  {
    title: "Story-First Thinking",
    description:
      "Every visual decision starts with the emotion and action you want from your audience.",
  },
  {
    title: "Fast Creative Velocity",
    description:
      "We move quickly from idea to storyboard to final delivery without sacrificing polish.",
  },
  {
    title: "Design + Motion Craft",
    description:
      "From UI/UX to animation, we keep every touchpoint visually consistent and memorable.",
  },
  {
    title: "Business Outcomes",
    description:
      "Our work is built to improve clarity, retention, conversion, and overall brand presence.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Sprint",
    description:
      "We align on goals, audience, and message so creative direction is precise from day one.",
  },
  {
    step: "02",
    title: "Concept + Script",
    description:
      "We craft a tight narrative and visual language that fits your brand and platform style.",
  },
  {
    step: "03",
    title: "Design + Animation",
    description:
      "From styleframes to motion, we produce high-impact assets built for modern attention spans.",
  },
  {
    step: "04",
    title: "Launch + Iterate",
    description:
      "We optimize edits and formats for performance across web, social, ads, and presentations.",
  },
];

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && latest <= value) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });

    return unsubscribe;
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
};

const About = () => {
  const seoMeta = getSEOMeta({
    title: "About Us | CUBE CAKE STUDIIOS",
    description:
      "Learn about CUBE CAKE STUDIIOS - a team of creative professionals specializing in 2D animation, explainer videos, UI/UX design, branding, and web design since 2020.",
    canonicalUrl: "https://cubecakestudios.com/about",
  });

  const openGraphMeta = getOpenGraphMeta({
    title: "About CUBE CAKE STUDIIOS",
    description:
      "Meet the team behind exceptional design & animation work. Passion. Excellence. Innovation.",
    canonicalUrl: "https://cubecakestudios.com/about",
  });

  const twitterMeta = getTwitterMeta({
    title: "About CUBE CAKE STUDIIOS",
    description: "Meet the creative team at CUBE CAKE STUDIIOS.",
  });

  return (
    <>
      <Head>
        <title>{seoMeta.title}</title>
        <meta name="description" content={seoMeta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="about, team, mission, values, animation, design" />
        <meta name="author" content="CUBE CAKE STUDIIOS" />
        <link rel="canonical" href={seoMeta.canonical} />

        <meta property="og:type" content={openGraphMeta.type} />
        <meta property="og:url" content={openGraphMeta.url} />
        <meta property="og:title" content={openGraphMeta.title} />
        <meta property="og:description" content={openGraphMeta.description} />
        <meta property="og:image" content={openGraphMeta.images[0].url} />

        <meta name="twitter:card" content={twitterMeta.cardType} />
        <meta name="twitter:creator" content={twitterMeta.handle} />
        <meta name="twitter:title" content={twitterMeta.title} />
        <meta name="twitter:description" content={twitterMeta.description} />
      </Head>

      <TransitionEffect />

      <main className="w-full bg-light">
        <section className="relative overflow-hidden bg-[#0a0d17] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.24),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(168,85,247,0.28),transparent_42%)]" />
          <div className="relative w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4 pt-20 pb-16 md:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-orange-300 font-semibold mb-5">
                About CUBE CAKE STUDIIOS
              </p>
              <h1 className="text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-black leading-tight mb-6">
                We craft ideas into visual stories people actually remember.
              </h1>
              <p className="text-lg text-gray-200 max-w-3xl leading-relaxed mb-8">
                We are a creative team focused on 2D animation, explainer videos, UI/UX design,
                and branding. Our process blends strategy, design systems, and motion craft to
                build content that feels premium and performs in the real world.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <MotionLink
                  href="/contact"
                  className="px-7 py-3 rounded-full bg-white text-dark font-bold hover:shadow-xl transition-all"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start a Project
                </MotionLink>
                <MotionLink
                  href="/portfolio"
                  className="px-7 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Portfolio
                </MotionLink>
              </div>
            </motion.div>

            <div className="grid grid-cols-12 gap-6 mt-14">
              <motion.div
                className="col-span-7 lg:col-span-12 rounded-[2rem] border border-white/15 bg-white/5 p-3"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-[480px] md:h-[420px] sm:h-[360px] rounded-[1.6rem] overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="CUBE CAKE STUDIIOS team visual"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                  <div className="absolute left-6 right-6 bottom-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-orange-300 mb-2">
                      Studio Philosophy
                    </p>
                    <p className="text-2xl md:text-xl font-extrabold">
                      Design it bold. Animate it smart. Deliver it fast.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="col-span-5 lg:col-span-12 grid grid-rows-2 gap-6">
                <motion.div
                  className="rounded-[2rem] border border-white/15 bg-white/5 p-3"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-full min-h-[230px] rounded-[1.5rem] overflow-hidden border border-white/20">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/EOlp1K1KKKU?mute=1&controls=1&rel=0"
                      title="CUBE CAKE STUDIIOS showreel"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-[2rem] border border-white/15 bg-white/5 p-6"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-violet-300 mb-4">
                    Mission Pulse
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    We simplify complexity with clear visual storytelling and performance-driven
                    creative systems tailored for modern digital brands.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16">
          <div className="w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4">
            <motion.div
              className="grid grid-cols-3 md:grid-cols-1 gap-6 mb-14"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {impactStats.map((item, index) => (
                <motion.article
                  key={item.label}
                  className="rounded-3xl border-2 border-dark bg-white p-8 text-center"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, boxShadow: "0 22px 45px rgba(0,0,0,0.12)" }}
                >
                  <p className="text-6xl md:text-5xl font-black text-dark mb-2">
                    <AnimatedNumbers value={item.value} />
                    {item.suffix}
                  </p>
                  <p className="text-dark/75 font-semibold uppercase tracking-[0.1em] text-sm">
                    {item.label}
                  </p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-4">
                Creative DNA
              </p>
              <h2 className="text-5xl md:text-4xl sm:text-3xl font-black text-dark">
                What Makes Our Team Different
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
              {coreValues.map((value, index) => (
                <motion.article
                  key={value.title}
                  className="rounded-3xl border border-dark/20 bg-white p-7"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-2xl font-bold text-dark mb-3">{value.title}</h3>
                  <p className="text-dark/75 leading-relaxed">{value.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-dark text-white">
          <div className="w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-orange-300 font-semibold mb-4">
                Workflow
              </p>
              <h2 className="text-5xl md:text-4xl sm:text-3xl font-black">
                From Brief to Breakthrough
              </h2>
            </motion.div>

            <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-5">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.step}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl font-black text-violet-300 mb-4">{step.step}</p>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
