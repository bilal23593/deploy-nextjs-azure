import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import TrackedInternalLink from "@/components/TrackedInternalLink";
import { TransitionEffect } from "@/components/TransitionEffect";
import { saasExplainerLanding } from "@/data/saasExplainerLanding";
import { getBreadcrumbSchema, getWebPageSchema, SITE_URL, toAbsoluteUrl } from "@/lib/seo";

const heroContentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const floatingVisualTransition = {
  duration: 5.8,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const primaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/30 bg-[linear-gradient(135deg,#ffffff_0%,#dcfbff_46%,#67e8f9_100%)] px-7 py-3.5 text-sm font-black tracking-[0.01em] text-[#051321] shadow-[0_20px_50px_-22px_rgba(103,232,249,0.88)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_64px_-20px_rgba(103,232,249,0.98)]";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.09]";

const SectionLabel = ({ children }) => (
  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">{children}</p>
);

const visualModes = ["before", "after"];

const HeroVisualShowcaseClassic = ({ visual }) => {
  const [activeMode, setActiveMode] = useState("before");
  const activePanel = visual[activeMode];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveMode((current) => (current === "before" ? "after" : "before"));
    }, 3400);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.62, delay: 0.08 },
        y: floatingVisualTransition,
      }}
      className="col-span-6"
    >
      <div className="relative mx-auto max-w-[42rem] rounded-[2rem] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-4 shadow-[0_32px_90px_-42px_rgba(34,211,238,0.45)] backdrop-blur-xl">
        <motion.div
          aria-hidden="true"
          className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ scale: [1, 1.2, 0.92, 1], opacity: [0.5, 0.8, 0.45, 0.5] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-orange-400/20 blur-3xl"
          animate={{ scale: [1, 0.92, 1.18, 1], opacity: [0.42, 0.65, 0.55, 0.42] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        />

        <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#0b1224_0%,#0a1020_52%,#09101d_100%)] p-3.5">
          <motion.div
            className="flex items-center justify-between gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <motion.span
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200"
              animate={{
                opacity: [0.75, 1, 0.75],
                boxShadow: [
                  "0 0 0 rgba(103,232,249,0)",
                  "0 0 18px rgba(103,232,249,0.18)",
                  "0 0 0 rgba(103,232,249,0)",
                ],
              }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              {visual.badge}
            </motion.span>

            <div className="flex items-center gap-2">
              {visualModes.map((mode) => {
                const isActive = activeMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setActiveMode(mode)}
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                      isActive
                        ? "border border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
                        : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                    }`}
                  >
                    {visual[mode].title}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="relative mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#10182f_0%,#0a1020_42%,#070d1c_100%)]">
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(249,115,22,0.14),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_28%)]"
              animate={{ opacity: [0.7, 1, 0.8, 0.7], scale: [1, 1.02, 0.99, 1] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute inset-y-6 -left-1/4 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)] blur-xl"
              animate={{ x: ["0%", "340%"] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "linear", repeatDelay: 1.4 }}
            />

            <div className="relative border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <div className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-300">
                  {visual.urlLabel}
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-200">
                  {activePanel.title}
                </div>
              </div>
            </div>

            <div className="relative px-4 py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMode}
                  initial={{ opacity: 0, y: 18, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.985 }}
                  transition={{ duration: 0.38, ease: "easeOut" }}
                  className="grid grid-cols-[1.1fr_0.9fr] gap-4 md:grid-cols-1"
                >
                  <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)]">
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
                        activeMode === "after" ? "text-cyan-200" : "text-orange-200"
                      }`}
                    >
                      {activePanel.eyebrow}
                    </p>
                    <h3 className="mt-3 max-w-xs text-2xl font-black leading-tight text-white">
                      {activePanel.headline}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{activePanel.body}</p>

                    <div className="mt-4 space-y-2">
                      {activePanel.points.map((item, index) => (
                        <motion.div
                          key={`${activeMode}-${item}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.08 + index * 0.06 }}
                          className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-3 py-3 text-sm text-slate-100"
                        >
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              activeMode === "after" ? "bg-cyan-300" : "bg-orange-300"
                            }`}
                          />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      className={`mt-4 inline-flex items-center rounded-full px-4 py-2.5 text-xs font-bold ${
                        activeMode === "after"
                          ? "bg-[linear-gradient(135deg,#d9fdff_0%,#69e9f7_100%)] text-[#07111e] shadow-[0_18px_36px_-20px_rgba(103,232,249,0.8)]"
                          : "border border-white/10 bg-white/[0.05] text-slate-300"
                      }`}
                      animate={
                        activeMode === "after"
                          ? { boxShadow: [
                              "0 16px 32px -20px rgba(103,232,249,0.35)",
                              "0 20px 40px -18px rgba(103,232,249,0.8)",
                              "0 16px 32px -20px rgba(103,232,249,0.35)",
                            ] }
                          : { opacity: [0.72, 1, 0.72] }
                      }
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {activePanel.cta}
                    </motion.div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <motion.div
                      className={`rounded-[1.35rem] border p-4 ${
                        activeMode === "after"
                          ? "border-cyan-300/15 bg-cyan-300/[0.05]"
                          : "border-white/10 bg-black/20"
                      }`}
                      animate={
                        activeMode === "after"
                          ? { y: [0, -3, 0] }
                          : { y: [0, 2, 0] }
                      }
                      transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                        Time To Clarity
                      </p>
                      <p className="mt-3 text-5xl font-black text-white">{activePanel.statValue}</p>
                      <p className="mt-2 text-sm text-slate-300">{activePanel.statLabel}</p>
                    </motion.div>

                    <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                        Story Readiness
                      </p>
                      <div className="mt-4 space-y-3">
                        {activePanel.bars.map((item, index) => (
                          <div key={`${activeMode}-${item.label}`}>
                            <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                              <span>{item.label}</span>
                              <span>{item.value}%</span>
                            </div>
                            <div className="mt-2 h-2 rounded-full bg-white/[0.06]">
                              <motion.div
                                className={`h-2 rounded-full ${
                                  activeMode === "after"
                                    ? "bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_100%)]"
                                    : "bg-[linear-gradient(90deg,#fdba74_0%,#fb7185_100%)]"
                                }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${item.value}%` }}
                                transition={{ duration: 0.6, delay: 0.1 + index * 0.06, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                        {activePanel.signalLabel}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">{activePanel.signalText}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-white/10 px-4 py-3">
              <div className="relative h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#fdba74_0%,#67e8f9_100%)]"
                  animate={{ width: activeMode === "before" ? "36%" : "84%" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                <span>{visual.before.title}</span>
                <span>{visual.centerLabel}</span>
                <span>{visual.after.title}</span>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.36 }}
            className="mt-5 text-center text-sm font-semibold leading-relaxed text-white md:text-xs"
          >
            {visual.closing}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const HeroPreviewCard = ({ panel, active, tone = "before" }) => {
  const toneClasses =
    tone === "after"
      ? "border-cyan-300/18 bg-[linear-gradient(160deg,rgba(34,211,238,0.12),rgba(255,255,255,0.03))]"
      : "border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]";

  return (
    <motion.article
      animate={
        active
          ? {
              opacity: 1,
              scale: 1,
              y: [0, -4, 0],
            }
          : {
              opacity: 0.58,
              scale: 0.965,
              y: 0,
            }
      }
      transition={{
        opacity: { duration: 0.28 },
        scale: { duration: 0.28 },
        y: active ? { duration: 4.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.28 },
      }}
      className={`rounded-[1.35rem] border p-4 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)] ${toneClasses}`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
          {panel.title}
        </span>
      </div>

      <div className="mt-4 rounded-[1.1rem] border border-white/8 bg-black/20 p-4">
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
            tone === "after" ? "text-cyan-200" : "text-orange-200"
          }`}
        >
          {panel.eyebrow}
        </p>
        <h3 className="mt-3 text-xl font-black leading-tight text-white">{panel.headline}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{panel.body}</p>

        <div className="mt-4 space-y-2">
          {panel.points.map((item) => (
            <div
              key={`${panel.title}-${item}`}
              className="rounded-2xl border border-white/8 bg-white/[0.04] px-3 py-2.5 text-xs font-medium text-slate-100"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-[1fr_auto] gap-3 items-end">
          <div className="space-y-2">
            {panel.bars.slice(0, 2).map((item) => (
              <div key={`${panel.title}-${item.label}`}>
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="mt-1.5 h-1.5 rounded-full bg-white/[0.06]">
                  <motion.div
                    className={`h-1.5 rounded-full ${
                      tone === "after"
                        ? "bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_100%)]"
                        : "bg-[linear-gradient(90deg,#fdba74_0%,#fb7185_100%)]"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            className={`rounded-full px-3 py-2 text-[11px] font-bold ${
              tone === "after"
                ? "bg-[linear-gradient(135deg,#d9fdff_0%,#69e9f7_100%)] text-[#07111e]"
                : "border border-white/10 bg-white/[0.05] text-slate-300"
            }`}
          >
            {panel.cta}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const GuideCharacter = ({ activeMode }) => (
  <motion.svg
    viewBox="0 0 190 220"
    className="h-44 w-40 md:h-36 md:w-32"
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    aria-hidden="true"
  >
    <ellipse cx="95" cy="204" rx="48" ry="12" fill="rgba(15,23,42,0.55)" />

    <motion.g
      animate={{ x: activeMode === "before" ? -12 : 12 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <circle cx="96" cy="44" r="22" fill="#f7c79f" />
      <path d="M77 40c6-20 38-21 43 0 1 6-3 10-8 10H86c-7 0-10-4-9-10z" fill="#0f172a" />
      <rect x="76" y="67" width="40" height="50" rx="18" fill="#12223d" />
      <rect x="61" y="95" width="70" height="54" rx="20" fill="#1f6feb" />
      <rect x="72" y="93" width="48" height="22" rx="11" fill="#0b1224" opacity="0.35" />

      <motion.g
        style={{ originX: 74, originY: 104 }}
        animate={{ rotate: activeMode === "before" ? -28 : -8 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      >
        <rect x="54" y="102" width="14" height="54" rx="7" fill="#f7c79f" />
      </motion.g>

      <motion.g
        style={{ originX: 116, originY: 104 }}
        animate={{ rotate: activeMode === "after" ? 30 : 8 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
      >
        <rect x="122" y="102" width="14" height="54" rx="7" fill="#f7c79f" />
      </motion.g>

      <motion.g
        style={{ originX: 86, originY: 154 }}
        animate={{ rotate: [-12, 14, -12] }}
        transition={{ duration: 0.95, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="78" y="146" width="16" height="50" rx="8" fill="#0b1224" />
      </motion.g>

      <motion.g
        style={{ originX: 108, originY: 154 }}
        animate={{ rotate: [14, -12, 14] }}
        transition={{ duration: 0.95, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="100" y="146" width="16" height="50" rx="8" fill="#0b1224" />
      </motion.g>

      <rect x="72" y="190" width="24" height="10" rx="5" fill="#09101d" />
      <rect x="98" y="190" width="24" height="10" rx="5" fill="#09101d" />
    </motion.g>
  </motion.svg>
);

const CharacterGuideHeroVisual = ({ visual }) => {
  const [activeMode, setActiveMode] = useState("before");
  const activePanel = visual[activeMode];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveMode((current) => (current === "before" ? "after" : "before"));
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.62, delay: 0.08 },
        y: floatingVisualTransition,
      }}
      className="col-span-6"
    >
      <div className="relative mx-auto max-w-[54rem] rounded-[2rem] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-4 shadow-[0_32px_90px_-42px_rgba(34,211,238,0.45)] backdrop-blur-xl">
        <motion.div
          aria-hidden="true"
          className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ scale: [1, 1.2, 0.92, 1], opacity: [0.5, 0.8, 0.45, 0.5] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-orange-400/20 blur-3xl"
          animate={{ scale: [1, 0.92, 1.18, 1], opacity: [0.42, 0.65, 0.55, 0.42] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        />

        <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#0b1224_0%,#0a1020_52%,#09101d_100%)] p-4">
          <motion.div
            className="flex items-center justify-between gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <motion.span
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200"
              animate={{
                opacity: [0.75, 1, 0.75],
                boxShadow: [
                  "0 0 0 rgba(103,232,249,0)",
                  "0 0 18px rgba(103,232,249,0.18)",
                  "0 0 0 rgba(103,232,249,0)",
                ],
              }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              {visual.badge}
            </motion.span>

            <div className="flex items-center gap-2">
              {visualModes.map((mode) => {
                const isActive = activeMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setActiveMode(mode)}
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                      isActive
                        ? "border border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
                        : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                    }`}
                  >
                    {visual[mode].title}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="relative mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#10182f_0%,#0a1020_42%,#070d1c_100%)] px-3.5 py-3.5">
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(249,115,22,0.14),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_28%)]"
              animate={{ opacity: [0.7, 1, 0.8, 0.7], scale: [1, 1.02, 0.99, 1] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute inset-y-6 -left-1/4 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)] blur-xl"
              animate={{ x: ["0%", "340%"] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "linear", repeatDelay: 1.4 }}
            />

            <div className="relative grid grid-cols-[0.92fr_240px_0.92fr] gap-4 xl:grid-cols-[0.95fr_200px_0.95fr] md:grid-cols-1">
              <HeroPreviewCard panel={visual.before} active={activeMode === "before"} tone="before" />

              <div className="relative flex min-h-[24rem] flex-col items-center justify-center px-2 py-4 md:min-h-[15rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMode}
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="mb-5 max-w-[15rem] rounded-[1.25rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-center text-xs font-medium leading-relaxed text-white shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)]"
                  >
                    {activePanel.guideNote}
                  </motion.div>
                </AnimatePresence>

                <div className="relative flex h-[13rem] w-full items-end justify-center">
                  <div className="absolute inset-x-0 bottom-6 h-1 rounded-full bg-white/[0.06]" />
                  <div className="absolute bottom-[1.15rem] left-0 h-4 w-4 rounded-full border border-orange-300/30 bg-orange-300/20 shadow-[0_0_18px_rgba(251,146,60,0.35)]" />
                  <div className="absolute bottom-[1.15rem] right-0 h-4 w-4 rounded-full border border-cyan-300/30 bg-cyan-300/20 shadow-[0_0_18px_rgba(103,232,249,0.35)]" />

                  <motion.div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2"
                    animate={{ x: activeMode === "before" ? "-62%" : "62%" }}
                    transition={{ duration: 0.72, ease: "easeInOut" }}
                  >
                    <GuideCharacter activeMode={activeMode} />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-[5.65rem] left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(34,211,238,0.18),rgba(255,255,255,0.06))] text-[11px] font-black uppercase tracking-[0.12em] text-cyan-100 shadow-[0_18px_40px_-20px_rgba(34,211,238,0.55)]"
                    animate={{
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        "0 18px 40px -20px rgba(34,211,238,0.35)",
                        "0 20px 52px -16px rgba(34,211,238,0.72)",
                        "0 18px 40px -20px rgba(34,211,238,0.35)",
                      ],
                    }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Go
                  </motion.div>
                </div>

                <div className="mt-3 flex w-full items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  <span>{visual.before.title}</span>
                  <span>{visual.centerLabel}</span>
                  <span>{visual.after.title}</span>
                </div>
              </div>

              <HeroPreviewCard panel={visual.after} active={activeMode === "after"} tone="after" />
            </div>

            <div className="relative mt-4 border-t border-white/10 pt-4">
              <div className="relative h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#fdba74_0%,#67e8f9_100%)]"
                  animate={{ width: activeMode === "before" ? "34%" : "86%" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.36 }}
            className="mt-5 text-center text-sm font-semibold leading-relaxed text-white md:text-xs"
          >
            {visual.closing}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const HeroBusinessBoostVisual = ({ visual }) => {
  const [activeMode, setActiveMode] = useState("before");
  const activePanel = visual[activeMode];
  const isAfter = activeMode === "after";

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveMode((current) => (current === "before" ? "after" : "before"));
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.62, delay: 0.08 },
        y: floatingVisualTransition,
      }}
      className="col-span-6"
    >
      <div className="relative mx-auto max-w-[42rem] rounded-[2rem] border border-white/10 bg-[linear-gradient(155deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-3.5 shadow-[0_32px_90px_-42px_rgba(34,211,238,0.45)] backdrop-blur-xl">
        <motion.div
          aria-hidden="true"
          className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl"
          animate={{ scale: [1, 1.2, 0.92, 1], opacity: [0.5, 0.8, 0.45, 0.5] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -right-8 bottom-8 h-24 w-24 rounded-full bg-orange-400/20 blur-3xl"
          animate={{ scale: [1, 0.92, 1.18, 1], opacity: [0.42, 0.65, 0.55, 0.42] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        />

        <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#0b1224_0%,#0a1020_52%,#09101d_100%)] p-3.5">
          <motion.div
            className="flex items-center justify-between gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <motion.span
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200"
              animate={{
                opacity: [0.75, 1, 0.75],
                boxShadow: [
                  "0 0 0 rgba(103,232,249,0)",
                  "0 0 18px rgba(103,232,249,0.18)",
                  "0 0 0 rgba(103,232,249,0)",
                ],
              }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              {visual.badge}
            </motion.span>

            <div className="flex items-center gap-2">
              {visualModes.map((mode) => {
                const isActive = activeMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setActiveMode(mode)}
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                      isActive
                        ? "border border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
                        : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                    }`}
                  >
                    {visual[mode].title}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="relative mt-3.5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#10182f_0%,#0a1020_42%,#070d1c_100%)] px-3 py-3">
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(249,115,22,0.14),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_28%)]"
              animate={{ opacity: [0.7, 1, 0.8, 0.7], scale: [1, 1.02, 0.99, 1] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute inset-y-6 -left-1/4 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)] blur-xl"
              animate={{ x: ["0%", "340%"] }}
              transition={{ duration: 5.6, repeat: Infinity, ease: "linear", repeatDelay: 1.4 }}
            />

            <div className="relative grid grid-cols-[1.1fr_0.9fr] items-start gap-2.5 lg:grid-cols-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMode}
                  initial={{ opacity: 0, y: 18, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.985 }}
                  transition={{ duration: 0.38, ease: "easeOut" }}
                  className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-3 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.85)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    </div>
                    <div className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-300">
                      {visual.urlLabel}
                    </div>
                  </div>

                  <p
                    className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                      isAfter ? "text-cyan-200" : "text-orange-200"
                    }`}
                  >
                    {activePanel.eyebrow}
                  </p>
                  <h3 className="mt-2.5 max-w-sm text-[1.7rem] font-black leading-[1.08] text-white">
                    {activePanel.headline}
                  </h3>
                  <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-slate-300">{activePanel.body}</p>

                  <div
                    className={`mt-3 overflow-hidden rounded-[1.2rem] border ${
                      isAfter
                        ? "border-cyan-300/18 bg-[linear-gradient(160deg,rgba(34,211,238,0.12),rgba(255,255,255,0.03))]"
                        : "border-white/10 bg-black/20"
                    }`}
                  >
                    <div className="px-3 py-2.5">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                            {isAfter ? "Explainer Video In Hero" : "Text-Heavy Hero"}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            {isAfter ? "Clear story before the sales call" : "Too much copy, too little clarity"}
                          </p>
                        </div>

                        <div
                          className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] ${
                            isAfter
                              ? "bg-[linear-gradient(135deg,#d9fdff_0%,#69e9f7_100%)] text-[#07111e]"
                              : "border border-white/10 bg-white/[0.05] text-slate-300"
                          }`}
                        >
                          {activePanel.title}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/10 px-3 py-3">
                      {isAfter ? (
                        <>
                          <div className="rounded-[1rem] border border-cyan-300/15 bg-[#08131f] p-3">
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                                  Explainer video
                                </p>
                                <p className="mt-1 text-sm font-semibold text-white">
                                  Product story in under 60 seconds
                                </p>
                              </div>
                              <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                                00:58
                              </div>
                            </div>

                            <div className="relative mt-2.5 flex h-24 items-center justify-center overflow-hidden rounded-[1rem] border border-white/10 bg-[linear-gradient(160deg,#111d36_0%,#0a1020_100%)]">
                              <motion.div
                                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(103,232,249,0.18),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.28))]"
                                animate={{ opacity: [0.65, 1, 0.72, 0.65] }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                              />
                              <motion.div
                                className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(34,211,238,0.22),rgba(255,255,255,0.08))] shadow-[0_20px_50px_-22px_rgba(103,232,249,0.78)]"
                                animate={{ scale: [1, 1.08, 1] }}
                                transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
                              >
                                <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white" />
                              </motion.div>
                              <div className="absolute inset-x-3 bottom-3">
                                <div className="h-1.5 rounded-full bg-white/10">
                                  <motion.div
                                    className="h-1.5 rounded-full bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_100%)]"
                                    animate={{ width: ["18%", "74%", "18%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {activePanel.points.map((item) => (
                              <div
                                key={`${activeMode}-${item}`}
                                className="rounded-full border border-cyan-300/12 bg-white/[0.05] px-2.5 py-1.5 text-[10px] font-semibold text-white"
                              >
                                {item}
                              </div>
                            ))}
                          </div>

                          <motion.div
                            className="mt-2.5 inline-flex items-center rounded-full bg-[linear-gradient(135deg,#d9fdff_0%,#69e9f7_100%)] px-3 py-1.5 text-[10px] font-bold text-[#07111e] shadow-[0_18px_36px_-20px_rgba(103,232,249,0.8)]"
                            animate={{
                              boxShadow: [
                                "0 16px 32px -20px rgba(103,232,249,0.35)",
                                "0 20px 40px -18px rgba(103,232,249,0.8)",
                                "0 16px 32px -20px rgba(103,232,249,0.35)",
                              ],
                            }}
                            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {activePanel.cta}
                          </motion.div>
                        </>
                      ) : (
                        <>
                          <div className="space-y-2">
                            <div className="space-y-2">
                              <div className="h-3 w-[78%] rounded-full bg-white/[0.08]" />
                              <div className="h-3 w-[92%] rounded-full bg-white/[0.06]" />
                              <div className="h-3 w-[68%] rounded-full bg-white/[0.06]" />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="h-10 rounded-2xl border border-white/8 bg-white/[0.04]" />
                              <div className="h-10 rounded-2xl border border-white/8 bg-white/[0.04]" />
                              <div className="h-10 rounded-2xl border border-white/8 bg-white/[0.04]" />
                            </div>
                            <div className="space-y-2">
                              <div className="h-2.5 w-full rounded-full bg-white/[0.05]" />
                              <div className="h-2.5 w-[88%] rounded-full bg-white/[0.05]" />
                              <div className="h-2.5 w-[71%] rounded-full bg-white/[0.05]" />
                            </div>
                          </div>

                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {activePanel.points.map((item) => (
                              <div
                                key={`${activeMode}-${item}`}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-semibold text-slate-300"
                              >
                                {item}
                              </div>
                            ))}
                          </div>

                          <div className="mt-2.5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] font-bold text-slate-300">
                            {activePanel.cta}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <motion.div
                className={`rounded-[1.35rem] border p-3 ${
                  isAfter
                    ? "border-cyan-300/15 bg-cyan-300/[0.05]"
                    : "border-white/10 bg-black/20"
                }`}
                animate={isAfter ? { y: [0, -3, 0] } : { y: [0, 2, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                      Business lift
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">{activePanel.signalText}</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                    {activePanel.title}
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-[auto_1fr] gap-2.5 md:grid-cols-1">
                  <div
                    className={`min-w-[8rem] rounded-[1rem] border px-3 py-2.5 ${
                      isAfter
                        ? "border-cyan-300/18 bg-[#08131f]"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {activePanel.signalLabel}
                    </p>
                    <p className="mt-1.5 text-[1.75rem] font-black text-white">{activePanel.statValue}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-300">{activePanel.statLabel}</p>
                  </div>

                  <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-3 py-2.5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Video impact
                      </p>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {isAfter ? "Stronger intent" : "Friction stays high"}
                      </p>
                    </div>

                    <div className="mt-2.5 h-20 rounded-[0.95rem] bg-white/[0.02] p-2.5">
                      <svg viewBox="0 0 240 120" className="h-full w-full">
                        <defs>
                          <linearGradient id="boostLine" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={isAfter ? "#7dd3fc" : "#fdba74"} />
                            <stop offset="100%" stopColor={isAfter ? "#67e8f9" : "#fb7185"} />
                          </linearGradient>
                        </defs>
                        <path d="M8 108H232" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                        <path d="M8 12V108" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                        <motion.path
                          d={isAfter ? "M16 90 C52 86, 72 78, 104 64 S162 40, 224 18" : "M16 84 C54 82, 78 79, 108 82 S164 90, 224 94"}
                          fill="none"
                          stroke="url(#boostLine)"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                        />
                        <motion.circle
                          cx="224"
                          cy={isAfter ? "18" : "94"}
                          r="6"
                          fill={isAfter ? "#67e8f9" : "#fb7185"}
                          animate={{ scale: [1, 1.25, 1] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                      Conversion readiness
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {isAfter ? "Sharper first impression" : "Message still working hard"}
                    </p>
                  </div>

                  <div className="mt-2.5 grid grid-cols-3 gap-2 md:grid-cols-1">
                    {activePanel.bars.map((item, index) => (
                      <div
                        key={`${activeMode}-${item.label}`}
                        className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-2.5 py-2"
                      >
                        <div className="flex items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                          <span>{item.label}</span>
                          <span>{item.value}%</span>
                        </div>
                        <div className="mt-2 h-1.5 rounded-full bg-white/[0.06]">
                          <motion.div
                            className={`h-1.5 rounded-full ${
                              isAfter
                                ? "bg-[linear-gradient(90deg,#7dd3fc_0%,#67e8f9_100%)]"
                                : "bg-[linear-gradient(90deg,#fdba74_0%,#fb7185_100%)]"
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 0.6, delay: 0.1 + index * 0.06, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative mt-3 border-t border-white/10 pt-3">
              <div className="relative h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,#fdba74_0%,#67e8f9_100%)]"
                  animate={{ width: isAfter ? "86%" : "34%" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                <span>{visual.before.title}</span>
                <span>{visual.centerLabel}</span>
                <span>{visual.after.title}</span>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.36 }}
            className="mt-4 text-center text-sm font-semibold leading-relaxed text-white md:text-xs"
          >
            {visual.closing}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default function SaasExplainerVideoAgencyPage() {
  const landing = saasExplainerLanding;
  const route = landing.route;
  const HeroVisualComponent =
    landing.hero.visualVariant === "browser-comparison"
      ? HeroVisualShowcaseClassic
      : landing.hero.visualVariant === "character-guide"
        ? CharacterGuideHeroVisual
        : HeroBusinessBoostVisual;

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
          <motion.div
            aria-hidden="true"
            className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/18 blur-[120px]"
            animate={{ x: [0, 28, -10, 0], y: [0, 18, -12, 0], scale: [1, 1.08, 0.96, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-orange-400/14 blur-[110px]"
            animate={{ x: [0, -20, 12, 0], y: [0, 24, -8, 0], scale: [1, 0.94, 1.06, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_82%_22%,rgba(249,115,22,0.18),transparent_28%),radial-gradient(circle_at_68%_80%,rgba(59,130,246,0.2),transparent_34%),linear-gradient(160deg,#040814_0%,#07101f_48%,#0c1630_100%)]" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:72px_72px]"
            animate={{ backgroundPosition: ["0px 0px", "0px 72px", "72px 72px"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-0 -left-1/4 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05),transparent)] blur-2xl"
            animate={{ x: ["-10%", "190%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          />

          <Layout className="relative pt-16 pb-14 lg:pt-12">
            <div className="grid grid-cols-12 items-center gap-8 lg:grid-cols-1">
              <motion.div
                variants={heroContentVariants}
                initial="hidden"
                animate="show"
                className="col-span-6"
              >
                <motion.div variants={heroItemVariants}>
                  <SectionLabel>{landing.hero.eyebrow}</SectionLabel>
                </motion.div>
                <h1 className="mt-5 max-w-4xl text-7xl font-black leading-[0.92] xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl">
                  <motion.span variants={heroItemVariants} className="block">
                    {landing.hero.titleLead}
                  </motion.span>
                  <motion.span
                    variants={heroItemVariants}
                    className="mt-2 block bg-[linear-gradient(90deg,#ffffff_0%,#fef3c7_26%,#b7f4ff_56%,#67e8f9_100%)] bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    {landing.hero.titleAccent}
                  </motion.span>
                </h1>
                <motion.p
                  variants={heroItemVariants}
                  className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-base"
                >
                  {landing.hero.summary}
                </motion.p>

                <motion.div variants={heroItemVariants} className="mt-8 flex flex-wrap gap-3">
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
                </motion.div>

                <motion.p variants={heroItemVariants} className="mt-4 text-sm text-slate-300">
                  {landing.hero.trustLine}
                </motion.p>
              </motion.div>

              <HeroVisualComponent visual={landing.hero.visual} />
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
