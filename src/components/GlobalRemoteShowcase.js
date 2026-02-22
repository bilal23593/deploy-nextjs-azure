import { motion } from "framer-motion";
import Image from "next/image";

const regions = [
  { city: "Dubai", timezone: "UTC+4", marker: "top-[30%] left-[62%]" },
  { city: "Karachi", timezone: "UTC+5", marker: "top-[34%] left-[68%]" },
  { city: "Berlin", timezone: "UTC+1", marker: "top-[28%] left-[48%]" },
  { city: "London", timezone: "UTC+0", marker: "top-[26%] left-[44%]" },
  { city: "Toronto", timezone: "UTC-5", marker: "top-[40%] left-[24%]" },
  { city: "Sydney", timezone: "UTC+10", marker: "top-[58%] left-[82%]" },
];

const teamPrinciples = [
  "Remote-first production with daily async updates",
  "Diverse creative team spanning multiple regions",
  "Timezone-aware handoff for faster turnaround",
  "Global collaboration with one unified quality bar",
];

const teamFaces = [
  "/images/avatars/head1.svg",
  "/images/avatars/head2.svg",
  "/images/avatars/head3.svg",
  "/images/avatars/head4.svg",
  "/images/avatars/head5.svg",
  "/images/avatars/head6.svg",
];

const GlobalRemoteShowcase = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#060b1a] text-white py-24 lg:py-16 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(34,211,238,0.24),transparent_36%),radial-gradient(circle_at_86%_84%,rgba(182,62,150,0.26),transparent_34%),linear-gradient(165deg,rgba(7,15,35,0.95),rgba(24,13,42,0.92),rgba(10,25,46,0.94))]" />
      <motion.div
        className="absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-violet-500/25 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 left-[5%] h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      <div className="relative w-full max-w-[1280px] mx-auto px-10 xl:px-8 lg:px-6 md:px-4">
        <div className="grid grid-cols-12 gap-8 lg:grid-cols-1 lg:gap-7 items-center">
          <motion.div
            className="col-span-5"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
              Remote Global Crew
            </p>
            <h2 className="mt-4 text-5xl xl:text-4xl md:text-3xl font-black leading-tight">
              We Work Worldwide, Fully Remote, With a Diverse Team
            </h2>
            <p className="mt-4 text-base md:text-sm text-slate-200/95 leading-relaxed max-w-xl">
              From strategy to final delivery, we operate as a distributed studio across timezones.
              That means faster production windows, broader creative perspective, and always-on
              collaboration for your project.
            </p>

            <div className="mt-6 space-y-2.5">
              {teamPrinciples.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shrink-0" />
                  <p className="text-sm text-slate-100/95">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {teamFaces.map((face) => (
                  <div key={face} className="relative w-9 h-9 rounded-full border-2 border-[#060b1a] overflow-hidden bg-white">
                    <Image
                      src={face}
                      alt="Team avatar"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-300 font-semibold">
                Diverse team. One quality standard.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-span-7"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-[2rem] border border-white/15 bg-white/5 p-6 lg:p-5 overflow-hidden">
              <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:42px_42px]" />

              <div className="relative h-[380px] md:h-[320px]">
                <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] md:h-[220px] md:w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.26),rgba(56,189,248,0.08),rgba(15,23,42,0.6))]">
                  <motion.div
                    className="absolute inset-3 rounded-full border border-white/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 rounded-full border border-white/15"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {regions.map((region, index) => (
                  <motion.div
                    key={region.city}
                    className={`absolute ${region.marker}`}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <span className="relative flex h-3 w-3">
                      <motion.span
                        className="absolute inline-flex h-full w-full rounded-full bg-cyan-300/60"
                        animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.25 }}
                      />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-200 border border-cyan-100" />
                    </span>
                    <div className="mt-2 rounded-lg border border-white/20 bg-black/35 px-2.5 py-1.5 backdrop-blur-sm">
                      <p className="text-[11px] uppercase tracking-[0.1em] font-semibold text-white">{region.city}</p>
                      <p className="text-[10px] text-cyan-200">{region.timezone}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/20 bg-black/30 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.12em] text-cyan-200 font-semibold">
                    Worldwide Collaboration Grid
                  </p>
                  <p className="mt-1 text-sm text-slate-100">
                    Remote creators aligned across regions for continuous delivery cycles.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalRemoteShowcase;
