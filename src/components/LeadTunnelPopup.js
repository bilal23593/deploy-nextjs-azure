import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SocialChannelMark from "@/components/SocialChannelMark";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import TrackedInternalLink from "@/components/TrackedInternalLink";
import {
  getLeadChannels,
  getLeadRouteContext,
  popupExcludedRoutes,
  trackLeadPopupEvent,
} from "@/lib/leadRouting";

const channelStyle = {
  Fiverr: {
    accent: "from-[#00b22d] to-[#1c8e3f]",
    character: "/images/lead-channels/fiverr-character.svg",
  },
  LinkedIn: {
    accent: "from-[#0A66C2] to-[#004182]",
    character: "/images/lead-channels/linkedin-character.svg",
  },
  "Google Profile": {
    accent: "from-[#ea4335] via-[#fbbc05] to-[#34a853]",
    character: "/images/lead-channels/google-character.svg",
  },
  WhatsApp: {
    accent: "from-[#25D366] to-[#128C7E]",
    character: "/images/lead-channels/whatsapp-character.svg",
  },
};

const POPUP_DISMISS_KEY = "ccs-lead-popup-dismissed-until";
const POPUP_SESSION_KEY = "ccs-lead-popup-opened";
const POPUP_PAGEVIEW_KEY = "ccs-lead-popup-pageviews";
const POPUP_COOLDOWN_MS = 1000 * 60 * 60 * 72;

const BrandLogo = ({ channel }) => <SocialChannelMark channel={channel} />;

const normalizeRoute = (value = "/") => String(value || "/").split("?")[0].split("#")[0] || "/";

const LeadTunnelPopup = ({ routeKey }) => {
  const showPopup = process.env.NEXT_PUBLIC_SHOW_LEAD_POPUP !== "false";
  const [isOpen, setIsOpen] = useState(false);
  const normalizedRoute = normalizeRoute(routeKey);
  const routeContext = useMemo(() => getLeadRouteContext(routeKey), [routeKey]);
  const shouldSkipPopup =
    !showPopup ||
    popupExcludedRoutes.includes(normalizedRoute) ||
    normalizedRoute.startsWith("/search");

  const channels = useMemo(() => {
    return getLeadChannels([
      routeContext.primaryChannel,
      routeContext.secondaryChannel,
      "LinkedIn",
      "Google Profile",
    ]).map((channel) => ({
      ...channel,
      ...channelStyle[channel.name],
    }));
  }, [routeContext.primaryChannel, routeContext.secondaryChannel]);

  const closePopup = useCallback(
    (reason = "dismiss", persistCooldown = true) => {
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(POPUP_SESSION_KEY, "true");
        if (persistCooldown) {
          window.localStorage.setItem(
            POPUP_DISMISS_KEY,
            String(Date.now() + POPUP_COOLDOWN_MS)
          );
        }
      }

      trackLeadPopupEvent({
        action: "close",
        route: normalizedRoute,
        trigger: reason,
        contextKey: routeContext.key,
      });
      setIsOpen(false);
    },
    [normalizedRoute, routeContext.key]
  );

  useEffect(() => {
    if (shouldSkipPopup) {
      setIsOpen(false);
      return undefined;
    }

    if (typeof window === "undefined") {
      return undefined;
    }

    setIsOpen(false);

    const dismissedUntil = Number(window.localStorage.getItem(POPUP_DISMISS_KEY) || "0");
    const alreadyOpened = window.sessionStorage.getItem(POPUP_SESSION_KEY) === "true";

    if (dismissedUntil > Date.now() || alreadyOpened) {
      return undefined;
    }

    const pageviews = Number(window.sessionStorage.getItem(POPUP_PAGEVIEW_KEY) || "0") + 1;
    window.sessionStorage.setItem(POPUP_PAGEVIEW_KEY, String(pageviews));

    let opened = false;
    let timerId;

    const openPopup = (trigger) => {
      if (opened) return;
      opened = true;
      window.sessionStorage.setItem(POPUP_SESSION_KEY, "true");
      setIsOpen(true);
      trackLeadPopupEvent({
        action: "open",
        route: normalizedRoute,
        trigger,
        contextKey: routeContext.key,
      });
      cleanupListeners();
    };

    const handleScroll = () => {
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      const progress =
        (window.scrollY || document.documentElement.scrollTop) / totalScrollable;

      if (progress >= 0.55) {
        openPopup("engaged_scroll");
      }
    };

    const handleExitIntent = (event) => {
      if (event.clientY <= 0) {
        openPopup("exit_intent");
      }
    };

    const cleanupListeners = () => {
      if (timerId) {
        window.clearTimeout(timerId);
      }
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseout", handleExitIntent);
    };

    if (pageviews > 1) {
      timerId = window.setTimeout(() => openPopup("second_pageview"), 9000);
    } else {
      timerId = window.setTimeout(() => openPopup("engaged_time"), 30000);
      window.addEventListener("scroll", handleScroll, { passive: true });

      if (window.innerWidth >= 1024) {
        document.addEventListener("mouseout", handleExitIntent);
      }
    }

    return cleanupListeners;
  }, [normalizedRoute, routeContext.key, shouldSkipPopup]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup("escape_key");
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [closePopup, isOpen]);

  if (shouldSkipPopup) return null;

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close lead popup overlay"
            onClick={() => closePopup("overlay_dismiss")}
            className="fixed inset-0 z-[120] bg-black/65 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.section
            role="dialog"
            aria-modal="true"
            aria-label="Choose lead route"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="fixed inset-0 z-[121] flex items-start justify-center overflow-y-auto overscroll-contain p-4 md:p-3"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="relative mt-4 mb-4 w-full max-w-[1040px] max-h-[calc(100svh-2rem)] overflow-y-auto rounded-[2rem] border border-white/25 bg-[#0b1020]/95 text-white shadow-[0_35px_120px_-40px_rgba(0,0,0,0.75)] md:mt-2 md:mb-2 md:max-h-[calc(100svh-1rem)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.27),transparent_34%),radial-gradient(circle_at_86%_84%,rgba(182,62,150,0.24),transparent_36%),linear-gradient(165deg,rgba(9,14,29,0.92),rgba(31,12,47,0.9),rgba(9,25,44,0.92))]" />

              <div className="relative z-10 px-8 py-7 lg:px-6 md:px-5">
                <div className="rounded-[1.75rem] border border-white/15 bg-black/20 px-5 py-5 shadow-[0_20px_60px_-34px_rgba(0,0,0,0.72)] backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-4 md:flex-col md:items-start">
                    <div className="max-w-2xl">
                      <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                      Smart Lead Routing
                      </p>
                      <h2 className="mt-4 text-4xl lg:text-3xl md:text-2xl font-black leading-tight text-white">
                      {routeContext.popupTitle}
                      </h2>
                      <p className="mt-3 text-sm text-slate-100/90 max-w-2xl leading-relaxed">
                      {routeContext.popupDescription}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => closePopup("close_button")}
                      className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/12 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-white/20 transition"
                    >
                      Close
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <TrackedInternalLink
                      href="/contact"
                      label="Send Project Brief"
                      location="lead_popup_header"
                      route={normalizedRoute}
                      ctaType="lead_brief"
                      onClick={() => closePopup("brief_cta_header", false)}
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-dark shadow-md hover:scale-[1.01] transition"
                    >
                      Send Project Brief
                    </TrackedInternalLink>

                    <TrackedInternalLink
                      href="/start-here"
                      label="Compare All Options"
                      location="lead_popup_header"
                      route={normalizedRoute}
                      ctaType="routing_hub"
                      onClick={() => closePopup("routing_cta_header", false)}
                      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/8 px-5 py-3 text-sm font-semibold text-white hover:bg-white/14 transition"
                    >
                      Compare All Options
                    </TrackedInternalLink>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-12 gap-4 md:grid-cols-1">
                  <motion.article
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="col-span-5 rounded-[1.75rem] border border-white/20 bg-white/9 p-5 shadow-[0_20px_50px_-34px_rgba(0,0,0,0.7)] backdrop-blur-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] font-semibold text-cyan-100">
                      Recommended First Step
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">Stay on-site for the brief</h3>
                    <p className="mt-3 text-sm text-slate-100/90 leading-relaxed">
                      Use the website for a detailed project brief, then choose WhatsApp or Fiverr
                      if you want to continue in those environments.
                    </p>

                    <div className="mt-5 flex flex-col gap-3">
                      <TrackedInternalLink
                        href="/contact"
                        label="Send Project Brief"
                        location="lead_popup"
                        route={normalizedRoute}
                        ctaType="lead_brief"
                        onClick={() => closePopup("brief_cta", false)}
                        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-dark shadow-md hover:scale-[1.01] transition"
                      >
                        Send Project Brief
                      </TrackedInternalLink>

                      <TrackedInternalLink
                        href="/start-here"
                        label="Compare All Options"
                        location="lead_popup"
                        route={normalizedRoute}
                        ctaType="routing_hub"
                        onClick={() => closePopup("routing_cta", false)}
                        className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/8 px-5 py-3 text-sm font-semibold text-white hover:bg-white/14 transition"
                      >
                        Compare All Options
                      </TrackedInternalLink>
                    </div>
                  </motion.article>

                  <div className="col-span-7 grid grid-cols-2 md:grid-cols-1 gap-4">
                    {channels.map((channel, index) => (
                      <motion.div
                        key={channel.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 + index * 0.05 }}
                      >
                        <TrackedExternalLink
                          channel={channel.name}
                          location="lead_popup"
                          route={normalizedRoute}
                          surface="lead_popup"
                          onClick={() => closePopup(`${channel.name}_cta`, false)}
                          className="group relative block h-full overflow-hidden rounded-2xl border border-white/20 bg-white/9 p-5 shadow-[0_20px_50px_-34px_rgba(0,0,0,0.68)] backdrop-blur-sm"
                        >
                          <div
                            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${channel.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-20`}
                          />
                          <div className="relative z-10">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <BrandLogo channel={channel.name} />
                                <div>
                                  <p className="text-lg font-black leading-tight text-white">{channel.name}</p>
                                  <span className="mt-1 inline-flex rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] font-semibold text-slate-100/90">
                                    {channel.badge}
                                  </span>
                                </div>
                              </div>

                              {channel.character ? (
                                <div className="relative w-24 h-20 rounded-xl overflow-hidden border border-white/20 bg-white/10 shrink-0">
                                  <Image
                                    src={channel.character}
                                    alt={`${channel.name} character`}
                                    fill
                                    sizes="96px"
                                    className="object-cover"
                                  />
                                </div>
                              ) : null}
                            </div>

                            <p className="mt-3 text-sm text-slate-100/90 leading-relaxed">
                              {channel.shortDescription}
                            </p>
                            <p className="mt-2 text-xs text-slate-300/85">{channel.bestFor}</p>
                            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-dark shadow-sm">
                              {channel.cta}
                              <span aria-hidden>&rarr;</span>
                            </div>
                          </div>
                        </TrackedExternalLink>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 text-xs text-slate-300/85 md:flex-col md:items-start">
                  <p>Use WhatsApp for the fastest reply, Fiverr for marketplace ordering, and LinkedIn or Google for validation.</p>
                  <button
                    type="button"
                    onClick={() => closePopup("continue_website", false)}
                    className="underline underline-offset-4 hover:text-white transition"
                  >
                    Continue browsing
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
