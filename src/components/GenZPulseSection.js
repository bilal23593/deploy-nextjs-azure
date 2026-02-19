import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

const trendChips = [
  "Short-form hooks",
  "UGC-first visuals",
  "Bold gradients",
  "Sound-on storytelling",
  "Micro loops",
  "Creator collabs",
  "Launch sprints",
];

const pulseItems = [
  { label: "Avg watch retention", value: "87%" },
  { label: "Concept-to-cut", value: "72h" },
  { label: "Campaign uplift", value: "3.4x" },
];

export default function GenZPulseSection({ fiverr }) {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y });
  };

  return (
    <section className="w-full py-16 lg:py-12 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(249,115,22,0.12),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(168,85,247,0.18),transparent_42%)]" />
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.35em] text-[11px] text-orange-300 font-semibold mb-4">
            Next-Gen Creative Stack
          </p>
          <h2 className="text-6xl md:text-5xl sm:text-4xl font-black text-white leading-tight">
            Built for Scroll-Stopping{" "}
            <span className="bg-gradient-to-r from-orange-300 to-violet-400 bg-clip-text text-transparent">
              Gen Z Attention
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-5 text-lg">
            A live creative playground combining velocity, trend relevance, and high-impact visuals.
          </p>
        </motion.div>

        <div
          className="relative rounded-[2rem] border border-white/20 bg-[#0f1119] p-5 md:p-4 overflow-hidden"
          onMouseMove={handlePointerMove}
        >
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-150"
            style={{
              background: `radial-gradient(520px circle at ${pointer.x}% ${pointer.y}%, rgba(255,255,255,0.08), transparent 55%)`,
            }}
          />

          <div className="relative z-10 grid grid-cols-12 gap-4">
            <motion.article
              className="col-span-7 lg:col-span-12 rounded-3xl border border-white/15 bg-[#141726] p-6"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-violet-300 mb-2">Realtime energy</p>
                  <h3 className="text-3xl sm:text-2xl font-extrabold text-white">Vibe Meter</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/35 text-emerald-200 text-xs font-semibold">
                  Live
                </span>
              </div>

              <div className="h-32 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-4 flex items-end gap-2">
                {Array.from({ length: 14 }).map((_, index) => (
                  <motion.span
                    key={index}
                    className="block flex-1 rounded-t-md bg-gradient-to-t from-orange-400 to-violet-400"
                    animate={{ scaleY: [0.25, 1, 0.4, 0.8] }}
                    transition={{
                      duration: 1.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.08,
                    }}
                    style={{ transformOrigin: "bottom" }}
                  />
                ))}
              </div>
            </motion.article>

            <motion.article
              className="col-span-5 lg:col-span-12 rounded-3xl border border-white/15 bg-[#141726] p-6 overflow-hidden"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-orange-300 mb-4">Trend feed</p>
              <div className="relative">
                <motion.div
                  className="flex gap-2 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                >
                  {[...trendChips, ...trendChips].map((chip, index) => (
                    <span
                      key={`${chip}-${index}`}
                      className="whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white border border-white/20"
                    >
                      {chip}
                    </span>
                  ))}
                </motion.div>
              </div>
              <p className="text-gray-300 mt-6 leading-relaxed">
                We translate fast-moving internet culture into premium creative that still looks intentional.
              </p>
            </motion.article>

            <motion.article
              className="col-span-4 md:col-span-12 rounded-3xl border border-white/15 bg-[#141726] p-6"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-violet-300 mb-4">Proof points</p>
              <div className="space-y-4">
                {pulseItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/20 bg-[#1a1d2d] px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-2">{item.label}</p>
                    <p className="text-2xl font-black text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className="col-span-8 md:col-span-12 rounded-3xl border border-white/20 bg-gradient-to-r from-violet-500/35 to-orange-500/35 p-6 flex flex-col sm:items-start sm:text-left items-center text-center justify-center"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl sm:text-2xl font-black text-white mb-3">Want this vibe for your brand?</h3>
              <p className="text-gray-200 mb-6 max-w-2xl">
                Start with one campaign sprint and get a full concept, storyboard, and launch-ready assets.
              </p>
              <div className="flex sm:flex-col items-center sm:items-start gap-4">
                <motion.a
                  href={fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-full bg-white text-dark font-bold hover:shadow-xl transition-all"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book a Creative Sprint
                </motion.a>
                <MotionLink
                  href="/portfolio"
                  className="px-7 py-3 rounded-full border border-white/35 text-white font-semibold hover:bg-white/10 transition-all"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  See Recent Work
                </MotionLink>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
