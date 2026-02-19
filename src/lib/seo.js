/**
 * SEO Utility Functions
 * Provides consistent meta tags, structured data, and SEO helpers
 */

export const defaultMeta = {
  title: 'CUBE CAKE STUDIIOS | Design & Animation Agency',
  description:
    'Professional design and animation agency specializing in 2D animation, explainer videos, UI/UX design, and branding for brands and businesses.',
  canonicalUrl: 'https://cubecakestudios.com',
  ogImage: 'https://cubecakestudios.com/og-image.jpg',
  ogType: 'website',
  twitterHandle: '@cubecakestudios',
};

/**
 * Generate meta tags for Head
 * @param {Object} meta - Custom meta object
 * @returns {Object} Complete meta tags object
 */
export const getSEOMeta = (meta = {}) => {
  const finalMeta = {
    ...defaultMeta,
    ...meta,
  };

  return {
    title: finalMeta.title,
    description: finalMeta.description,
    canonical: finalMeta.canonicalUrl,
    mobileAlternate: {
      media: 'only screen and (max-width: 640px)',
      href: finalMeta.canonicalUrl,
    },
    languageAlternates: [
      {
        hrefLang: 'en-US',
        href: finalMeta.canonicalUrl,
      },
    ],
  };
};

/**
 * Generate Open Graph meta tags
 */
export const getOpenGraphMeta = (meta = {}) => {
  const finalMeta = {
    ...defaultMeta,
    ...meta,
  };

  return {
    type: finalMeta.ogType,
    url: finalMeta.canonicalUrl,
    title: finalMeta.title,
    description: finalMeta.description,
    images: [
      {
        url: finalMeta.ogImage,
        width: 1200,
        height: 630,
        alt: finalMeta.title,
      },
    ],
    siteName: 'CUBE CAKE STUDIIOS',
  };
};

/**
 * Generate Twitter Card meta tags
 */
export const getTwitterMeta = (meta = {}) => {
  const finalMeta = {
    ...defaultMeta,
    ...meta,
  };

  return {
    handle: finalMeta.twitterHandle,
    cardType: 'summary_large_image',
    title: finalMeta.title,
    description: finalMeta.description,
    image: finalMeta.ogImage,
  };
};

/**
 * Generate JSON-LD Structured Data (Organization Schema)
 */
export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CUBE CAKE STUDIIOS',
    url: 'https://cubecakestudios.com',
    logo: 'https://cubecakestudios.com/cube-cake-logo.svg',
    description:
      'Professional design and animation agency specializing in 2D animation, explainer videos, UI/UX design, and branding.',
    foundingDate: '2020',
    sameAs: [
      'https://www.fiverr.com/s/akB06EK',
      'https://www.linkedin.com/company/cubecakestudios',
      'https://www.dribbble.com/cubecakestudios',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      email: 'hello@cubecakestudios.com',
      availableLanguage: ['en'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
    },
    telephone: '+92-300-1234567',
  };
};

/**
 * Generate Company Contact Schema
 */
export const getContactSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'CUBE CAKE STUDIIOS',
      url: 'https://cubecakestudios.com',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'contact@cubecakestudios.com',
        availableLanguage: ['en'],
      },
    },
  };
};

/**
 * Generate Breadcrumb Schema
 */
export const getBreadcrumbSchema = (breadcrumbs = []) => {
  const items = breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.title,
    item: `https://cubecakestudios.com${crumb.url}`,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
};

/**
 * Site map configuration
 */
export const sitemap = [
  {
    url: '/',
    title: 'Home',
    priority: 1.0,
  },
  {
    url: '/about',
    title: 'About Us',
    priority: 0.9,
  },
  {
    url: '/services',
    title: 'Services',
    priority: 0.9,
  },
  {
    url: '/portfolio',
    title: 'Portfolio',
    priority: 0.8,
  },
  {
    url: '/contact',
    title: 'Contact',
    priority: 0.8,
  },
  {
    url: '/privacy',
    title: 'Privacy Policy',
    priority: 0.5,
  },
  {
    url: '/terms',
    title: 'Terms of Service',
    priority: 0.5,
  },
];
