/**
 * SEO utility layer
 * Centralized metadata defaults and JSON-LD generators.
 */

import { blogArticleList, blogCollectionList } from "@/data/blogArticles";
import { caseStudyList, caseStudyTrackList } from "@/data/caseStudies";
import { DEFAULT_MARKET, DEFAULT_MARKET_KEY, getMarketByKey, publishedMarkets } from "@/data/markets";
import { companyInfo, socialLinks } from "@/data/social";
import { seoLandingPageList } from "@/data/seoLandingPages";

export const SITE_URL = (process.env.NEXT_PUBLIC_APP_URL || "https://cubecakestudiios.com").replace(
  /\/$/,
  ""
);
export const SITE_NAME = "CUBE CAKE STUDIIOS";
export const DEFAULT_OG_IMAGE_PATH = "/og-image.jpg";
export const DEFAULT_OG_IMAGE = `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`;
export const DEFAULT_LOCALE = DEFAULT_MARKET.ogLocale;
export const DEFAULT_LANG = DEFAULT_MARKET.locale;

const normalizePath = (url = "/") => {
  if (!url) return "/";

  if (/^https?:\/\//i.test(url)) {
    try {
      const parsed = new URL(url);
      return parsed.pathname || "/";
    } catch {
      return "/";
    }
  }

  return url.startsWith("/") ? url : `/${url}`;
};

const withMarketPrefix = (url = "/", market = DEFAULT_MARKET) => {
  const normalizedPath = normalizePath(url);

  if (!market?.pathPrefix) return normalizedPath;
  if (normalizedPath === "/") return market.pathPrefix;

  return `${market.pathPrefix}${normalizedPath}`.replace(/\/{2,}/g, "/");
};

export const toAbsoluteUrl = (url = "") => {
  if (!url) return SITE_URL;
  if (/^https?:\/\//i.test(url)) return url;
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

export const getLanguageAlternates = ({ canonicalUrl = "/", marketKey = DEFAULT_MARKET_KEY } = {}) => {
  const normalizedPath = normalizePath(canonicalUrl);
  const currentMarket = getMarketByKey(marketKey);

  const alternates = publishedMarkets.map((market) => ({
    hrefLang: market.hrefLang,
    href: toAbsoluteUrl(withMarketPrefix(normalizedPath, market)),
  }));

  const hasEnglishAlternate = alternates.some((item) => item.hrefLang === "en");

  const result = hasEnglishAlternate
    ? alternates
    : [
        {
          hrefLang: DEFAULT_MARKET.hrefLang,
          href: toAbsoluteUrl(withMarketPrefix(normalizedPath, currentMarket)),
        },
        ...alternates,
      ];

  return [
    ...result,
    {
      hrefLang: "x-default",
      href: toAbsoluteUrl(withMarketPrefix(normalizedPath, DEFAULT_MARKET)),
    },
  ];
};

export const defaultMeta = {
  title: `${SITE_NAME} | Design & Animation Agency`,
  description:
    "Professional 2D animation studio and explainer video agency specializing in product storytelling, brand motion, UI/UX design, and launch-ready creative systems.",
  canonicalUrl: SITE_URL,
  ogImage: DEFAULT_OG_IMAGE,
  ogType: "website",
  twitterHandle: "@cubecakestudiios",
  twitterSite: "@cubecakestudiios",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  marketKey: DEFAULT_MARKET_KEY,
};

export const getSEOMeta = (meta = {}) => {
  const finalMeta = {
    ...defaultMeta,
    ...meta,
  };

  const market = getMarketByKey(finalMeta.marketKey);
  const canonical = toAbsoluteUrl(finalMeta.canonicalUrl);

  return {
    title: finalMeta.title,
    description: finalMeta.description,
    canonical,
    robots: finalMeta.robots,
    keywords: finalMeta.keywords,
    locale: market.ogLocale,
    mobileAlternate: {
      media: "only screen and (max-width: 640px)",
      href: canonical,
    },
    languageAlternates:
      finalMeta.languageAlternates ||
      getLanguageAlternates({ canonicalUrl: finalMeta.canonicalUrl, marketKey: finalMeta.marketKey }),
  };
};

export const getOpenGraphMeta = (meta = {}) => {
  const finalMeta = {
    ...defaultMeta,
    ...meta,
  };

  const market = getMarketByKey(finalMeta.marketKey);
  const ogUrl = toAbsoluteUrl(finalMeta.canonicalUrl);
  const ogImage = toAbsoluteUrl(finalMeta.ogImage || DEFAULT_OG_IMAGE);

  return {
    type: finalMeta.ogType,
    url: ogUrl,
    title: finalMeta.title,
    description: finalMeta.description,
    siteName: SITE_NAME,
    locale: market.ogLocale,
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
      availableLanguage: publishedMarkets.map((market) => market.locale),
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
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
};

export const getWebPageSchema = ({ title, description, url, type = "WebPage", inLanguage = DEFAULT_LANG } = {}) => {
  const pageUrl = toAbsoluteUrl(url || "/");

  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title || SITE_NAME,
    description: description || defaultMeta.description,
    inLanguage,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
};

export const getCollectionPageSchema = ({ title, description, url, inLanguage = DEFAULT_LANG } = {}) =>
  getWebPageSchema({
    title,
    description,
    url,
    type: "CollectionPage",
    inLanguage,
  });

export const getItemListSchema = ({ name, description, url, items = [] } = {}) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  description,
  url: toAbsoluteUrl(url || "/"),
  numberOfItems: items.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": item.type || "CreativeWork",
      name: item.name,
      url: toAbsoluteUrl(item.url),
      description: item.description,
      ...(item.image ? { image: toAbsoluteUrl(item.image) } : {}),
    },
  })),
});

export const getArticleSchema = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  articleSection,
  keywords = [],
  authorName = SITE_NAME,
} = {}) => {
  const pageUrl = toAbsoluteUrl(url || "/");

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
    },
    headline: title,
    description,
    image: image ? [toAbsoluteUrl(image)] : [DEFAULT_OG_IMAGE],
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/images/profile/cube-cake-studiios.png"),
      },
    },
    articleSection,
    keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords,
    inLanguage: DEFAULT_LANG,
    url: pageUrl,
  };
};

export const getCaseStudySchema = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  keywords = [],
} = {}) =>
  getArticleSchema({
    title,
    description,
    url,
    image,
    datePublished,
    dateModified,
    articleSection: "Case Studies",
    keywords,
  });

export const getVideoObjectSchema = ({
  name,
  description,
  uploadDate,
  thumbnailUrl,
  embedUrl,
  contentUrl,
  duration,
} = {}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name,
  description,
  uploadDate,
  thumbnailUrl: [toAbsoluteUrl(thumbnailUrl || DEFAULT_OG_IMAGE_PATH)],
  embedUrl: embedUrl ? toAbsoluteUrl(embedUrl) : undefined,
  contentUrl: contentUrl ? toAbsoluteUrl(contentUrl) : undefined,
  duration,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
});

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
        availableLanguage: publishedMarkets.map((market) => market.locale),
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
        url: toAbsoluteUrl(service.href || "/services"),
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
        url: toAbsoluteUrl(project.caseStudySlug ? `/case-studies/${project.caseStudySlug}` : "/portfolio"),
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

const baseSitemapEntries = [
  { url: "/", title: "Home", priority: 1.0, changefreq: "weekly" },
  { url: "/start-here", title: "Start Here", priority: 0.86, changefreq: "weekly" },
  { url: "/about", title: "About", priority: 0.8, changefreq: "monthly" },
  { url: "/services", title: "Services", priority: 0.9, changefreq: "weekly" },
  { url: "/portfolio", title: "Portfolio", priority: 0.8, changefreq: "weekly" },
  { url: "/case-studies", title: "Case Studies", priority: 0.8, changefreq: "weekly" },
  { url: "/blog", title: "Blog", priority: 0.76, changefreq: "weekly" },
  { url: "/contact", title: "Contact", priority: 0.8, changefreq: "monthly" },
  { url: "/privacy", title: "Privacy Policy", priority: 0.4, changefreq: "yearly" },
  { url: "/terms", title: "Terms of Service", priority: 0.4, changefreq: "yearly" },
];

const serviceSitemapEntries = seoLandingPageList.map((page) => ({
  url: `/services/${page.slug}`,
  title: page.h1,
  priority: page.slug === "2d-animation-studio" ? 0.92 : 0.84,
  changefreq: "weekly",
  lastModified: page.updatedAt,
}));

const caseStudySitemapEntries = caseStudyList.map((caseStudy) => ({
  url: `/case-studies/${caseStudy.slug}`,
  title: caseStudy.title,
  priority: 0.78,
  changefreq: "monthly",
  lastModified: caseStudy.updatedAt || caseStudy.publishedAt,
}));

const blogSitemapEntries = blogArticleList.map((article) => ({
  url: `/blog/${article.slug}`,
  title: article.title,
  priority: 0.72,
  changefreq: "monthly",
  lastModified: article.updatedAt || article.publishedAt,
}));

const blogCollectionSitemapEntries = blogCollectionList.map((collection) => ({
  url: `/blog/category/${collection.slug}`,
  title: collection.title,
  priority: 0.74,
  changefreq: "weekly",
}));

const caseStudyTrackSitemapEntries = caseStudyTrackList.map((track) => ({
  url: `/case-studies/category/${track.slug}`,
  title: track.title,
  priority: 0.75,
  changefreq: "weekly",
}));

export const sitemap = [
  ...baseSitemapEntries,
  ...serviceSitemapEntries,
  ...blogCollectionSitemapEntries,
  ...caseStudyTrackSitemapEntries,
  ...caseStudySitemapEntries,
  ...blogSitemapEntries,
];
