import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { getSocialLink } from "@/data/social";

const channelStyle = {
  Fiverr: {
    badge: "Freelance",
    accent: "from-[#00b22d] to-[#1c8e3f]",
    description: "Quick project kickoff with clear service packages.",
    character: "/images/lead-channels/fiverr-character.svg",
  },
  LinkedIn: {
    badge: "Network",
    accent: "from-[#0A66C2] to-[#004182]",
    description: "Professional collaboration and long-term partnerships.",
    character: "/images/lead-channels/linkedin-character.svg",
  },
  "Google Profile": {
    badge: "Trust",
    accent: "from-[#ea4335] via-[#fbbc05] to-[#34a853]",
    description: "Check reviews, authority signals, and direct business details.",
    character: "/images/lead-channels/google-character.svg",
  },
  WhatsApp: {
    badge: "Instant",
    accent: "from-[#25D366] to-[#128C7E]",
    description: "Fastest response for scope, budget, and timeline discussion.",
    character: "/images/lead-channels/whatsapp-character.svg",
  },
};

const leadChannelOrder = ["Fiverr", "LinkedIn", "Google Profile", "WhatsApp"];

const trackLeadChannelClick = (channelName, targetUrl) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "lead_channel_click", {
      channel: channelName,
      target_url: targetUrl,
      event_category: "lead_tunnel_popup",
      event_label: channelName,
    });
  }
};

const BrandLogo = ({ channel }) => {
  if (channel === "LinkedIn") {
    return (
      <div className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center font-black text-base">
        in
      </div>
    );
  }

  if (channel === "Fiverr") {
    return (
      <div className="w-10 h-10 rounded-xl bg-[#1dbf73] text-white flex items-center justify-center font-black text-sm tracking-wide">
        fi
      </div>
    );
  }

  if (channel === "Google Profile") {
    return (
      <div className="w-10 h-10 rounded-xl bg-white border border-white/35 flex items-center justify-center">
        <span className="text-lg font-black bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
          G
        </span>
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12.05 0C5.5 0 .17 5.3.17 11.82c0 2.08.54 4.11 1.57 5.9L0 24l6.46-1.68a11.93 11.93 0 0 0 5.59 1.42h.01c6.55 0 11.88-5.3 11.89-11.82A11.75 11.75 0 0 0 20.52 3.48Zm-8.47 18.2h-.01a9.96 9.96 0 0 1-5.08-1.39l-.36-.21-3.83.99 1.02-3.72-.24-.38a9.8 9.8 0 0 1-1.53-5.15c0-5.43 4.44-9.85 9.9-9.85a9.82 9.82 0 0 1 7.02 2.9 9.74 9.74 0 0 1 2.89 6.95c-.01 5.43-4.45 9.86-9.78 9.86Zm5.43-7.41c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.45.13-.6.13-.12.3-.32.44-.47.15-.15.2-.25.3-.42.1-.17.05-.32-.02-.47-.08-.15-.66-1.57-.91-2.16-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.09 3.18 5.06 4.45.7.3 1.25.48 1.68.62.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.42.24-.7.24-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </div>
  );
};

const LeadTunnelPopup = ({ routeKey }) => {
  const showPopup = process.env.NEXT_PUBLIC_SHOW_LEAD_POPUP !== "false";
  const [isOpen, setIsOpen] = useState(false);

  const channels = useMemo(() => {
    return leadChannelOrder
      .map((name) => {
        const link = getSocialLink(name);
        if (!link?.url) return null;
        return {
          name,
          url: link.url,
          ...channelStyle[name],
        };
      })
      .filter(Boolean);
  }, []);

  useEffect(() => {
    if (!showPopup) {
      setIsOpen(false);
      return undefined;
    }

    setIsOpen(false);
    const timer = window.setTimeout(() => setIsOpen(true), 550);
    return () => window.clearTimeout(timer);
  }, [routeKey, showPopup]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!showPopup) return null;

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close lead popup overlay"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[120] bg-black/65 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.section
            role="dialog"
            aria-modal="true"
            aria-label="Choose lead channel"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed z-[121] inset-0 flex items-center justify-center p-4 md:p-3"
          >
            <div className="relative w-full max-w-[980px] overflow-hidden rounded-[2rem] border border-white/25 bg-[#0b1020]/95 text-white shadow-[0_35px_120px_-40px_rgba(0,0,0,0.75)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.27),transparent_34%),radial-gradient(circle_at_86%_84%,rgba(182,62,150,0.24),transparent_36%),linear-gradient(165deg,rgba(9,14,29,0.92),rgba(31,12,47,0.9),rgba(9,25,44,0.92))]" />
              <motion.div
                className="absolute -top-20 -right-10 w-64 h-64 rounded-full bg-violet-400/30 blur-3xl"
                animate={{ scale: [1, 1.22, 1], opacity: [0.24, 0.45, 0.24] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-20 -left-10 w-56 h-56 rounded-full bg-cyan-400/30 blur-3xl"
                animate={{ scale: [1, 1.16, 1], opacity: [0.22, 0.4, 0.22] }}
                transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
              />

              <div className="relative px-8 py-7 lg:px-6 md:px-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                      Lead Routing Popup
                    </p>
                    <h2 className="mt-4 text-4xl lg:text-3xl md:text-2xl font-black leading-tight">
                      Pick Your Channel and Let’s Connect
                    </h2>
                    <p className="mt-2 text-sm text-slate-200/90 max-w-2xl">
                      Select your preferred platform. We are active there and can respond faster.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/20 transition"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-1 gap-4">
                  {channels.map((channel, index) => (
                    <motion.a
                      key={channel.name}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackLeadChannelClick(channel.name, channel.url)}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 + index * 0.05 }}
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/8 p-5"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${channel.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-22`}
                      />
                      <div className="relative">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <BrandLogo channel={channel.name} />
                            <div>
                              <p className="text-lg font-black leading-tight">{channel.name}</p>
                              <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-white/80">
                                {channel.badge}
                              </span>
                            </div>
                          </div>

                          <div className="relative w-24 h-20 rounded-xl overflow-hidden border border-white/20 bg-white/10 shrink-0">
                            <Image
                              src={channel.character}
                              alt={`${channel.name} 2D character`}
                              fill
                              sizes="96px"
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <p className="mt-3 text-sm text-slate-200/90">{channel.description}</p>
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-dark px-4 py-2 text-xs font-bold">
                          Continue
                          <span aria-hidden>&rarr;</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 text-xs text-slate-300/85 md:flex-col md:items-start">
                  <p>Use the channel where you usually respond fastest.</p>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="underline underline-offset-4 hover:text-white transition"
                  >
                    Continue to website
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default LeadTunnelPopup;
