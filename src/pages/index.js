import Layout from "@/components/Layout";
import LeadRoutingPanel from "@/components/LeadRoutingPanel";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { TransitionEffect } from "@/components/TransitionEffect";
import SEOHead from "@/components/SEOHead";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/seo";
import { trackLeadCtaClick } from "@/lib/leadRouting";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { seoLandingPageList } from "@/data/seoLandingPages";

const MotionLink = motion.create(Link);
const GenZPulseSection = dynamic(() => import("@/components/GenZPulseSection"));
const GlobalRemoteShowcase = dynamic(() => import("@/components/GlobalRemoteShowcase"));

export default function Home() {
  const homeTitle = "2D Animation & Explainer Video Studio for Startups | Cube Cake Studiios";
  const homeDescription =
    "Cube Cake Studiios is a global 2D animation and explainer video studio helping startups and brands turn complex ideas into clear, engaging visual stories that drive results.";
  const prefersReducedMotion = useReducedMotion();

  const ctaMagnetX = useMotionValue(0);
  const ctaMagnetY = useMotionValue(0);
  const ctaX = useSpring(ctaMagnetX, { stiffness: 220, damping: 18, mass: 0.45 });
  const ctaY = useSpring(ctaMagnetY, { stiffness: 220, damping: 18, mass: 0.45 });

  const heroTiltX = useMotionValue(0);
  const heroTiltY = useMotionValue(0);
  const heroX = useSpring(heroTiltX, { stiffness: 170, damping: 16, mass: 0.5 });
  const heroY = useSpring(heroTiltY, { stiffness: 170, damping: 16, mass: 0.5 });

  const handleMagnetMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    ctaMagnetX.set(offsetX * 0.22);
    ctaMagnetY.set(offsetY * 0.22);
  };

  const resetMagnet = () => {
    ctaMagnetX.set(0);
    ctaMagnetY.set(0);
  };

  const handleHeroTilt = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    heroTiltY.set((px - 0.5) * 18);
    heroTiltX.set((0.5 - py) * 18);
  };

  const resetHeroTilt = () => {
    heroTiltX.set(0);
    heroTiltY.set(0);
  };

  const handleTrackedNavigation = (label, destination, ctaType) => () => {
    trackLeadCtaClick({
      label,
      destination,
      location: "homepage",
      route: "/",
      ctaType,
    });
  };

  // Services data
  const services = [
    {
      icon: "🎬",
      title: "2D Animation",
      description: "Captivating animations that bring your stories to life with precision and creativity",
      gradient: "from-blue-500/20 to-purple-500/20",
      borderGlow: "border-blue-500/30",
    },
    {
      icon: "📹",
      title: "Explainer Videos",
      description: "Complex ideas simplified through engaging visual narratives that convert and inspire",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGlow: "border-purple-500/30",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces crafted for optimal user experiences and engagement",
      gradient: "from-pink-500/20 to-red-500/20",
      borderGlow: "border-pink-500/30",
    },
    {
      icon: "✨",
      title: "Branding",
      description: "Distinctive brand identities that resonate, stand out, and create lasting impressions",
      gradient: "from-red-500/20 to-orange-500/20",
      borderGlow: "border-red-500/30",
    },
  ];

  // Stats data
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "40+", label: "Happy Clients" },
    { number: "4+", label: "Years Experience" },
  ];

  const heroSignals = [
    { value: "48h", label: "Avg Kickoff" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "4.9", label: "Creative Rating" },
  ];
  const seoIntentLinks = seoLandingPageList.map((page) => ({
    href: `/services/${page.slug}`,
    label: page.h1,
  }));

  // Avatar SVGs (simple 2D heads in public/images/avatars)
  const avatars = [
    '/images/avatars/head1.svg',
    '/images/avatars/head2.svg',
    '/images/avatars/head3.svg',
    '/images/avatars/head4.svg',
    '/images/avatars/head5.svg',
    '/images/avatars/head6.svg',
  ];

  const homePageSchema = getWebPageSchema({
    title: homeTitle,
    description: homeDescription,
    url: "/",
    type: "WebPage",
  });

  const homeBreadcrumbSchema = getBreadcrumbSchema([{ title: "Home", url: "/" }]);

  return (
    <>
      <SEOHead
        title={homeTitle}
        description={homeDescription}
        canonicalUrl="/"
        keywords={[
          "2d animation studio for startups",
          "explainer video studio",
          "startup explainer video agency",
          "saas explainer videos",
          "global animation studio",
        ]}
        ogType="website"
        structuredData={[homePageSchema, homeBreadcrumbSchema]}
      />

      <TransitionEffect />

      <main className="w-full">
        {/* HERO SECTION */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Premium Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-purple-300 to-purple-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-black/50" />
          <motion.div
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
            animate={prefersReducedMotion ? undefined : { backgroundPosition: ["0px 0px", "70px 70px"] }}
            transition={prefersReducedMotion ? undefined : { duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Animated Floating Orbs */}
          <motion.div
            className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full filter blur-3xl"
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={prefersReducedMotion ? undefined : { duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-72 h-72 bg-orange-300/20 rounded-full filter blur-3xl"
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={prefersReducedMotion ? undefined : { duration: 10, repeat: Infinity, delay: 1 }}
          />

          <Layout className="relative z-10 pt-0 md:pt-16 sm:pt-8">
            <div className="grid grid-cols-2 gap-12 items-center w-full lg:grid-cols-1">
              {/* LEFT CONTENT */}
              <motion.div
                className="flex flex-col justify-center space-y-8"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, type: "spring" }}
              >
                {/* Navigation Breadcrumb */}
                <motion.div
                  className="inline-flex gap-4 w-fit text-sm md:text-xs"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span className="px-3 py-1 rounded-full bg-black/10 backdrop-blur-md text-black/60 font-medium border border-white/20">
                    Top Rated
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/10 backdrop-blur-md text-black/60 font-medium border border-white/20">
                    2D Animation
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-black text-dark leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  2D Animation & Explainer Video Studio for{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Startups
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-lg text-gray-700 max-w-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  We help startups and brands turn complex ideas into clear, engaging visual stories
                  through high-converting explainer videos and 2D animation.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex flex-wrap gap-3">
                    <MotionLink
                      href="/start-here"
                      onClick={handleTrackedNavigation("Start Here", "/start-here", "routing_hub")}
                      className="relative inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-semibold rounded-full hover:shadow-lg transition-all group overflow-hidden"
                      style={{ x: ctaX, y: ctaY }}
                      onMouseMove={handleMagnetMove}
                      onMouseLeave={resetMagnet}
                      whileHover={{ scale: 1.08, rotate: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{
                          background:
                            "radial-gradient(160px circle at 50% 50%, rgba(255,255,255,0.28), transparent 55%)",
                        }}
                      />
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-transparent to-violet-400/20" />
                      Start Here
                      <motion.span
                        animate={prefersReducedMotion ? undefined : { x: [0, 4, 0] }}
                        transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </MotionLink>

                    <MotionLink
                      href="/contact"
                      onClick={handleTrackedNavigation("Send Project Brief", "/contact", "lead_brief")}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-black/20 bg-white/75 text-dark font-semibold hover:bg-white hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Send Project Brief
                    </MotionLink>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <TrackedExternalLink
                      channel="WhatsApp"
                      location="homepage_hero"
                      surface="homepage_trust"
                      className="rounded-full border border-white/45 bg-white/65 px-3 py-1.5 text-xs font-semibold text-dark hover:border-green-500 hover:text-green-700 transition"
                    >
                      WhatsApp
                    </TrackedExternalLink>
                    <TrackedExternalLink
                      channel="Fiverr"
                      location="homepage_hero"
                      surface="homepage_trust"
                      className="rounded-full border border-white/45 bg-white/65 px-3 py-1.5 text-xs font-semibold text-dark hover:border-primary hover:text-primary transition"
                    >
                      Fiverr
                    </TrackedExternalLink>
                    <TrackedExternalLink
                      channel="LinkedIn"
                      location="homepage_hero"
                      surface="homepage_trust"
                      className="rounded-full border border-white/45 bg-white/65 px-3 py-1.5 text-xs font-semibold text-dark hover:border-blue-600 hover:text-blue-700 transition"
                    >
                      LinkedIn
                    </TrackedExternalLink>
                    <TrackedExternalLink
                      channel="Google Profile"
                      location="homepage_hero"
                      surface="homepage_trust"
                      className="rounded-full border border-white/45 bg-white/65 px-3 py-1.5 text-xs font-semibold text-dark hover:border-amber-500 hover:text-amber-700 transition"
                    >
                      Google Profile
                    </TrackedExternalLink>
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-3 md:grid-cols-1 gap-3 max-w-xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {heroSignals.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/35 bg-white/60 backdrop-blur-md px-4 py-3"
                    >
                      <p className="text-2xl font-black text-dark leading-none">{item.value}</p>
                      <p className="text-[11px] uppercase tracking-[0.12em] text-dark/70 font-semibold mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  className="max-w-2xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p className="text-xs uppercase tracking-[0.14em] font-semibold text-dark/70 mb-2">
                    Startup Service Pages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {seoIntentLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-full border border-white/45 bg-white/65 px-3 py-1.5 text-xs font-semibold text-dark hover:border-primary hover:text-primary transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              {/* ✅ FIX: LEFT CONTENT motion.div was missing this closing tag */}

              {/* RIGHT SIDE - ORBITAL DESIGN */}
              <motion.div
                className="relative h-full flex items-center justify-center"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, type: "spring", delay: 0.2 }}
                style={{
                  rotateX: heroX,
                  rotateY: heroY,
                  transformPerspective: 1200,
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={handleHeroTilt}
                onMouseLeave={resetHeroTilt}
              >
                <div className="relative w-full aspect-square max-w-md">
                  {/* Decorative concentric rings with subtle gradient stroke */}
                  <svg className="w-full h-full" viewBox="0 0 400 400" aria-hidden>
                    <defs>
                      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C084FC" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#FB7185" stopOpacity="0.9" />
                      </linearGradient>
                      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <circle cx="200" cy="200" r="182" fill="none" stroke="url(#ringGrad)" strokeWidth="2" opacity="0.18" />
                    <circle cx="200" cy="200" r="140" fill="none" stroke="url(#ringGrad)" strokeWidth="1.6" opacity="0.12" />
                    <circle cx="200" cy="200" r="92" fill="none" stroke="url(#ringGrad)" strokeWidth="1.2" opacity="0.08" />
                    <g filter="url(#glow)">
                      <circle cx="200" cy="200" r="92" fill="none" stroke="#E9D5FF" strokeWidth="0.6" opacity="0.08" />
                    </g>
                  </svg>

                  <motion.div
                    className="absolute inset-[12%] rounded-full border border-white/35"
                    animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                    transition={prefersReducedMotion ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-[24%] rounded-full border border-white/20"
                    animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                    transition={prefersReducedMotion ? undefined : { duration: 14, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Center Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
                    <motion.div
                      className="relative w-40 h-40 md:w-32 md:h-32 rounded-full p-2 border border-white/70 bg-white/70 backdrop-blur-md shadow-2xl"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
                      style={{ transform: "translateZ(55px)" }}
                    >
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src="/images/profile/cube-cake-studiios.png"
                          alt="CUBE CAKE STUDIIOS logo"
                          fill
                          priority
                          sizes="(max-width: 768px) 128px, 160px"
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.p
                      className="mt-3 text-xs tracking-[0.2em] font-semibold text-dark/80 uppercase"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.75 }}
                    >
                      CUBE CAKE STUDIIOS
                    </motion.p>
                  </div>

                  {/* Orbiting Avatars */}
                  {avatars.map((src, i) => {
                    const angle = (i / avatars.length) * Math.PI * 2;
                    const radii = [150, 120, 160, 140, 130, 155];
                    const radius = radii[i % radii.length];
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-16 h-16 rounded-full bg-white border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden"
                        initial={{ scale: 0.85, opacity: 0, x, y }}
                        animate={{ scale: 1, opacity: 0.95, x, y }}
                        transition={{ duration: 0.45, delay: 0.55 + i * 0.04 }}
                        whileHover={{ scale: 1.08 }}
                        style={{ left: '50%', top: '50%', marginLeft: '-32px', marginTop: '-32px' }}
                      >
                        <Image
                          src={src}
                          alt={`avatar-${i}`}
                          fill
                          sizes="64px"
                          className="object-cover rounded-full"
                        />
                      </motion.div>
                    );
                  })}

                  <motion.div
                    className="absolute top-[8%] -left-10 md:left-0 px-4 py-2 rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md shadow-xl"
                    style={{ transform: "translateZ(40px)" }}
                    animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
                    transition={prefersReducedMotion ? undefined : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <p className="text-xs font-semibold text-dark">Hot this week</p>
                    <p className="text-sm font-black text-purple-700">Explainer + Reels</p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-[10%] -right-10 md:right-0 px-4 py-2 rounded-2xl border border-white/25 bg-dark/70 backdrop-blur-md shadow-xl"
                    style={{ transform: "translateZ(50px)" }}
                    animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
                    transition={prefersReducedMotion ? undefined : { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                  >
                    <p className="text-xs font-semibold text-gray-300">Avg Delivery</p>
                    <p className="text-sm font-black text-orange-300">72 hours</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Layout>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-dark/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
            <motion.span
              className="text-lg"
              animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </motion.div>


        </section>

        <GlobalRemoteShowcase />

        {/* SERVICES SECTION */}
        <section className="w-full bg-light dark:bg-dark/50">
          <Layout>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-4xl font-bold text-dark dark:text-light mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive creative solutions tailored to elevate your brand
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`group relative p-8 bg-white dark:bg-dark border-2 ${service.borderGlow} rounded-3xl overflow-hidden transition-all hover:shadow-xl`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(182, 62, 150, 0.2)" }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur group-hover:blur-xl transition-all duration-500 -z-10`}
                  />

                  <motion.div
                    className="text-6xl mb-6 w-fit relative z-10"
                    whileHover={{ scale: 1.3, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-dark dark:text-light mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 relative z-10 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Layout>
        </section>

        {/* STATS SECTION */}
        <section className="w-full py-24 lg:py-16 bg-gradient-to-br from-gray-50 to-white dark:from-dark dark:to-dark/95 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full filter blur-3xl" />

          <Layout className="relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-4xl font-black text-dark dark:text-light mb-4">
                Our Creative Impact
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Transforming visions into reality for incredible clients worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-3 md:grid-cols-1 gap-8 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative px-8 py-12 bg-white dark:bg-dark/80 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 rounded-3xl hover:border-purple-400/50 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15, boxShadow: "0 25px 50px rgba(168, 85, 247, 0.15)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-500/5 dark:to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.h3
                    className="text-6xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-3 relative z-10"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.h3>

                  <motion.p
                    className="text-lg font-semibold text-gray-700 dark:text-gray-300 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.label}
                  </motion.p>

                  <motion.div
                    className="h-1.5 w-12 bg-gradient-to-r from-purple-400 to-pink-400 mt-6 relative z-10"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              ))}
            </div>
          </Layout>
        </section>

        <GenZPulseSection />

        <section className="w-full bg-light dark:bg-dark/50">
          <Layout className="pt-0 pb-12">
            <LeadRoutingPanel
              eyebrow="High-Intent Routing"
              title="Use the website to build trust, then choose the buying route that fits you."
              description="This site should attract search traffic, qualify buyers with proof and case studies, and then route each visitor into the best conversion path for custom briefs, fast WhatsApp conversations, marketplace orders, or trust checks."
              location="homepage_lead_panel"
              route="/"
              primaryChannel="WhatsApp"
              secondaryChannel="Fiverr"
            />
          </Layout>
        </section>


        {/* CTA SECTION */}
        <section className="w-full py-32 lg:py-20 bg-gradient-to-br from-orange-50 via-purple-50 to-black dark:from-dark/95 dark:via-purple-900/20 dark:to-black relative overflow-hidden">
          {/* Premium Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
          
          {/* Floating Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-300/20 rounded-full filter blur-3xl"
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={prefersReducedMotion ? undefined : { duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-300/20 rounded-full filter blur-3xl"
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={prefersReducedMotion ? undefined : { duration: 10, repeat: Infinity, delay: 1 }}
          />

          <Layout className="relative z-10">
            <motion.div
              className="relative bg-white/80 dark:bg-black/40 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-3xl p-24 md:p-16 text-center overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              {/* Animated Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl -z-10" />

              <motion.h2
                className="text-6xl md:text-5xl lg:text-4xl font-black bg-gradient-to-r from-dark to-purple-600 dark:from-light dark:to-purple-300 bg-clip-text text-transparent mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Ready to Unlock Your Creative Potential?
              </motion.h2>

              <motion.p
                className="text-xl md:text-lg text-gray-700 dark:text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
              >
                Join thousands of satisfied clients who've transformed their vision into stunning visual experiences. Let's create something extraordinary together.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                viewport={{ once: true }}
              >
                <MotionLink
                  href="/start-here"
                  onClick={handleTrackedNavigation("Start Here", "/start-here", "routing_hub")}
                  className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all" />
                  <div className="relative flex items-center gap-2">
                    Start Here
                    <motion.span
                      animate={prefersReducedMotion ? undefined : { x: [0, 6, 0] }}
                      transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </MotionLink>

                <MotionLink
                  href="/contact"
                  onClick={handleTrackedNavigation("Send Project Brief", "/contact", "lead_brief")}
                  className="group relative px-12 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-300 font-semibold rounded-full hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-purple-50/0 dark:bg-purple-500/0 group-hover:bg-purple-50 dark:group-hover:bg-purple-500/10 transition-all" />
                  <div className="relative flex items-center gap-2">
                    Send Project Brief
                    <motion.span
                      animate={prefersReducedMotion ? undefined : { x: [0, 6, 0] }}
                      transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity, delay: 0.2 }}
                    >
                      →
                    </motion.span>
                  </div>
                </MotionLink>

                <MotionLink
                  href="/portfolio"
                  onClick={handleTrackedNavigation("Explore Portfolio", "/portfolio", "portfolio_navigation")}
                  className="group relative px-12 py-4 border-2 border-dark/20 text-dark dark:text-light font-semibold rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative flex items-center gap-2">
                    Explore Portfolio
                    <span aria-hidden>→</span>
                  </div>
                </MotionLink>
              </motion.div>

              {/* Bottom Accent */}
              <motion.div
                className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ✨ Trusted by leading brands and startups • 24/7 Creative Support • 100% Satisfaction Guaranteed
                </p>
              </motion.div>
            </motion.div>
          </Layout>
        </section>
      </main>
    </>
  );
}


