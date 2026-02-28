import {
  getSocialLink,
  leadChannelOrder,
  leadTrustChannels,
} from "@/data/social";

const normalizeRoute = (value = "/") => {
  const path = String(value || "/").split("?")[0].split("#")[0];
  return path || "/";
};

const routeContexts = [
  {
    key: "services",
    matches: (route) => route.startsWith("/services/"),
    primaryChannel: "WhatsApp",
    secondaryChannel: "Fiverr",
    title: "Need a quote for this service?",
    description:
      "Use WhatsApp for the fastest scoping conversation, or Fiverr if you prefer a marketplace checkout flow.",
    popupTitle: "Ready to turn this service into a live project?",
    popupDescription:
      "Stay on-site for the brief, use WhatsApp for fast scoping, or choose Fiverr for marketplace ordering.",
  },
  {
    key: "case-studies",
    matches: (route) => route.startsWith("/case-studies/"),
    primaryChannel: "WhatsApp",
    secondaryChannel: "Fiverr",
    title: "Want results like this for your brand?",
    description:
      "Use the case study as proof, then choose the fastest route to start your own brief or conversation.",
    popupTitle: "Want a similar outcome for your next launch?",
    popupDescription:
      "Share your product and timeline, or move into WhatsApp or Fiverr when you are ready to start.",
  },
  {
    key: "blog",
    matches: (route) => route.startsWith("/blog/"),
    primaryChannel: "WhatsApp",
    secondaryChannel: "LinkedIn",
    title: "Need help applying this strategy to your product?",
    description:
      "Use the article for context, then move into a brief or a fast conversation when you want execution help.",
    popupTitle: "Want to apply this strategy to your own product?",
    popupDescription:
      "Stay on-site for the brief, or use WhatsApp for a faster conversation about your launch, explainer, or tutorial video.",
  },
  {
    key: "portfolio",
    matches: (route) => route === "/portfolio",
    primaryChannel: "WhatsApp",
    secondaryChannel: "Fiverr",
    title: "Seen enough work to move forward?",
    description:
      "Use WhatsApp for a quick project discussion, or Fiverr if you already know the package you want.",
    popupTitle: "Ready to move from examples to execution?",
    popupDescription:
      "Pick the route that matches how you buy creative work: direct brief, fast chat, or marketplace checkout.",
  },
  {
    key: "contact",
    matches: (route) => route === "/contact",
    primaryChannel: "WhatsApp",
    secondaryChannel: "Fiverr",
    title: "Choose the best route for your project",
    description:
      "Use the form for a detailed brief, or move to WhatsApp or Fiverr if that fits your buying style better.",
    popupTitle: "Choose your best route",
    popupDescription:
      "Use the form for a detailed brief, or route the conversation through your preferred platform.",
  },
];

const defaultContext = {
  key: "default",
  primaryChannel: "WhatsApp",
  secondaryChannel: "Fiverr",
  title: "Choose the best route for your animation project",
  description:
    "Use the website to qualify the project, WhatsApp for fast conversation, and Fiverr for marketplace-first ordering.",
  popupTitle: "Ready to move this project forward?",
  popupDescription:
    "Stay on-site for the brief, use WhatsApp for the fastest response, or choose Fiverr for marketplace checkout.",
};

export const popupExcludedRoutes = ["/contact", "/start-here", "/search", "/privacy", "/terms"];

export const getLeadRouteContext = (route = "/") => {
  const normalizedRoute = normalizeRoute(route);
  return routeContexts.find((item) => item.matches(normalizedRoute)) || defaultContext;
};

export const getLeadChannels = (channelNames = leadChannelOrder) => {
  const uniqueNames = Array.from(new Set(channelNames.filter(Boolean)));

  return uniqueNames
    .map((name) => getSocialLink(name))
    .filter(Boolean);
};

export const getLeadSupportChannels = (primaryChannel, secondaryChannel) => {
  return getLeadChannels([primaryChannel, secondaryChannel, ...leadTrustChannels]);
};

const trackEvent = (eventName, parameters) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
  }
};

export const trackLeadChannelClick = ({
  channel,
  targetUrl,
  location,
  route,
  surface = "lead_channel",
} = {}) => {
  trackEvent("lead_channel_click", {
    channel,
    target_url: targetUrl,
    route: normalizeRoute(route),
    location,
    event_category: surface,
    event_label: channel,
  });
};

export const trackLeadCtaClick = ({
  label,
  destination,
  location,
  route,
  ctaType = "onsite_navigation",
} = {}) => {
  trackEvent("lead_cta_click", {
    label,
    destination,
    route: normalizeRoute(route),
    location,
    cta_type: ctaType,
    event_category: "lead_cta",
    event_label: label,
  });
};

export const trackLeadPopupEvent = ({
  action,
  route,
  trigger,
  contextKey,
} = {}) => {
  trackEvent("lead_popup_event", {
    action,
    route: normalizeRoute(route),
    trigger,
    context_key: contextKey,
    event_category: "lead_popup",
    event_label: action,
  });
};
