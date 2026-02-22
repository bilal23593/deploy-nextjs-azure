/**
 * SEO utility layer
 * Centralized metadata defaults and JSON-LD generators.
 */

import { companyInfo, socialLinks } from "@/data/social";

export const SITE_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://cubecakestudiios.com").replace(
  /\/$/,
  ""
);
export const SITE_NAME = "CUBE CAKE STUDIIOS";
export const DEFAULT_OG_IMAGE_PATH = "/og-image.jpg";
export const DEFAULT_OG_IMAGE = `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`;
export const DEFAULT_LOCALE = "en_US";
export const DEFAULT_LANG = "en";

export const toAbsoluteUrl = (url = "") => {
  if (!url) return SITE_URL;
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

export const defaultMeta = {
  title: `${SITE_NAME} | Design & Animation Agency`,
  description:
    "Professional design and animation agency specializing in 2D animation, explainer videos, UI/UX design, and branding for brands and businesses.",
  canonicalUrl: SITE_URL,
  ogImage: DEFAULT_OG_IMAGE,
  ogType: "website",
  twitterHandle: "@cubecakestudiios",
  twitterSite: "@cubecakestudiios",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

export const getSEOMeta = (meta = {}) => {
  const finalMeta = {
    ...defaultMeta,
    ...meta,
  };

  const canonical = toAbsoluteUrl(finalMeta.canonicalUrl);

  return {
    title: finalMeta.title,
    description: finalMeta.description,
    canonical,
    robots: finalMeta.robots,
    keywords: finalMeta.keywords,
    mobileAlternate: {
      media: "only screen and (max-width: 640px)",
      href: canonical,
    },
    languageAlternates: [
      {
        hrefLang: "en-US",
        href: canonical,
      },
      {
        hrefLang: "x-default",
        href: canonical,
      },
    ],
  };
};

export const getOpenGraphMeta = (meta = {}) => {
  const finalMeta = {
    ...defaultMeta,
    ...meta,
  };

  const ogUrl = toAbsoluteUrl(finalMeta.canonicalUrl);
  const ogImage = toAbsoluteUrl(finalMeta.ogImage || DEFAULT_OG_IMAGE);

  return {
    type: finalMeta.ogType,
    url: ogUrl,
    title: finalMeta.title,
    description: finalMeta.description,
    siteName: SITE_NAME,
    locale: DEFAULT_LOCALE,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: finalMeta.title,
        type: "image/jpeg",
      },
    ],
  };
};

export const getTwitterMeta = (meta = {}) => {
  const finalMeta = {
    ...defaultMeta,
    ...meta,
  };

  return {
    handle: finalMeta.twitterHandle,
    site: finalMeta.twitterSite,
    cardType: "summary_large_image",
    title: finalMeta.title,
    description: finalMeta.description,
    image: toAbsoluteUrl(finalMeta.ogImage || DEFAULT_OG_IMAGE),
  };
};

const getSameAsLinks = () =>
  socialLinks
    .map((item) => item.url)
    .filter((url) => typeof url === "string" && /^https?:\/\//i.test(url));

export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: SITE_URL,
    logo: toAbsoluteUrl("/images/profile/cube-cake-studiios.png"),
    image: toAbsoluteUrl("/images/profile/cube-cake-studiios.png"),
    description: companyInfo.description,
    foundingDate: String(companyInfo.established),
    sameAs: getSameAsLinks(),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: companyInfo.email,
      telephone: companyInfo.phone,
      availableLanguage: [DEFAULT_LANG],
      areaServed: "Worldwide",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    telephone: companyInfo.phone,
    email: companyInfo.email,
  };
};

export const getWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: DEFAULT_LANG,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
};

export const getWebPageSchema = ({ title, description, url, type = "WebPage" } = {}) => {
  const pageUrl = toAbsoluteUrl(url || "/");

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title || SITE_NAME,
    description: description || defaultMeta.description,
    inLanguage: DEFAULT_LANG,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
};

export const getContactSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact | ${SITE_NAME}`,
    url: toAbsoluteUrl("/contact"),
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: companyInfo.email,
        telephone: companyInfo.phone,
        availableLanguage: [DEFAULT_LANG],
      },
    },
  };
};

export const getBreadcrumbSchema = (breadcrumbs = []) => {
  const items = breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.title,
    item: toAbsoluteUrl(crumb.url),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};

export const getServiceListSchema = (services = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} Services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.fullDescription || service.shortDescription,
        provider: {
          "@id": `${SITE_URL}/#organization`,
        },
        areaServed: "Worldwide",
        url: toAbsoluteUrl("/services"),
      },
    })),
  };
};

export const getPortfolioSchema = (projects = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} Portfolio`,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: toAbsoluteUrl(project.image),
        creator: {
          "@id": `${SITE_URL}/#organization`,
        },
        url: toAbsoluteUrl("/portfolio"),
      },
    })),
  };
};

export const getLegalWebPageSchema = ({ name, url, lastReviewed } = {}) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: toAbsoluteUrl(url),
    lastReviewed,
    inLanguage: DEFAULT_LANG,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
};

export const sitemap = [
  { url: "/", title: "Home", priority: 1.0, changefreq: "weekly" },
  { url: "/about", title: "About", priority: 0.9, changefreq: "monthly" },
  { url: "/services", title: "Services", priority: 0.9, changefreq: "weekly" },
  { url: "/portfolio", title: "Portfolio", priority: 0.8, changefreq: "weekly" },
  { url: "/contact", title: "Contact", priority: 0.8, changefreq: "monthly" },
  { url: "/privacy", title: "Privacy Policy", priority: 0.4, changefreq: "yearly" },
  { url: "/terms", title: "Terms of Service", priority: 0.4, changefreq: "yearly" },
];

