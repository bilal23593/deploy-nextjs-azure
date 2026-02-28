import { motion } from "framer-motion";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { getLeadChannels } from "@/lib/leadRouting";

const channelDesign = {
  Fiverr: {
    accent: "from-[#00b22d] to-[#0e7a2a]",
    badge: "Freelance Marketplace",
    cta: "Hire on Fiverr",
  },
  LinkedIn: {
    accent: "from-[#0A66C2] to-[#004182]",
    badge: "Professional Network",
    cta: "Connect on LinkedIn",
  },
  "Google Profile": {
    accent: "from-[#ea4335] via-[#fbbc05] to-[#34a853]",
    badge: "Business Profile",
    cta: "Open Google Profile",
  },
  WhatsApp: {
    accent: "from-[#25D366] to-[#128C7E]",
    badge: "Instant Chat",
    cta: "Chat on WhatsApp",
  },
};

const channelOrder = ["Fiverr", "LinkedIn", "Google Profile", "WhatsApp"];

const LeadTunnelSection = () => {
  const channels = getLeadChannels(channelOrder).map((link) => ({
    ...link,
    ...channelDesign[link.name],
  }));

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(56,189,248,0.25),transparent_36%),radial-gradient(circle_at_90%_80%,rgba(182,62,150,0.22),transparent_34%),linear-gradient(165deg,#0b1220_0%,#1d1230_40%,#0f172a_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-25" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 lg:px-6 md:px-4 py-16 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-10"
        >
          <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
            Lead Tunnel
          </p>
          <h1 className="mt-4 text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-black leading-tight text-white">
            Choose Your Preferred Channel
          </h1>
          <p className="mt-4 text-base md:text-sm text-slate-200/95 max-w-2xl">
            Pick one platform and connect instantly. This website is now optimized to route traffic directly to the channels where we respond fastest.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[1.7rem] border border-white/20 bg-white/8 backdrop-blur-md shadow-2xl"
            >
              <TrackedExternalLink
                channel={channel.name}
                location="lead_tunnel_section"
                surface="lead_tunnel_section"
                className="block h-full p-6 md:p-5"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${channel.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-20`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xl sm:text-lg font-black text-white">{channel.name}</p>
                    <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.12em] font-semibold text-white/90">
                      {channel.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-200/90">
                    {channel.name === "WhatsApp"
                      ? "Fastest direct response for project scope, budget, and timeline."
                      : channel.name === "Google Profile"
                      ? "Open reviews, trust signals, and direct contact from Google."
                      : channel.name === "LinkedIn"
                      ? "Best for professional networking and long-term partnerships."
                      : "Best for quick project kickoff with clear service packages."}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-dark px-4 py-2 text-sm font-bold">
                    {channel.cta}
                    <span aria-hidden>&rarr;</span>
                  </div>
                </div>
              </TrackedExternalLink>
            </motion.div>
          ))}
        </div>

        <div className="mt-7 text-xs md:text-[11px] text-slate-300/90">
          Tip: add your real Google profile URL and WhatsApp number in `.env.local` as
          ` NEXT_PUBLIC_GOOGLE_PROFILE_URL ` and ` NEXT_PUBLIC_WHATSAPP_URL `.
        </div>
      </div>
    </section>
  );
};

export default LeadTunnelSection;
