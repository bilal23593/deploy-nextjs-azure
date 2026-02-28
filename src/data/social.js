/**
 * Social Links & Contact Information
 * Centralized configuration for all social profiles and contact methods
 */

const GOOGLE_PROFILE_URL =
  process.env.NEXT_PUBLIC_GOOGLE_PROFILE_URL ||
  'https://www.google.com/search?q=CUBE+CAKE+STUDIIOS';

const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/971543462742';

export const leadChannelOrder = ['WhatsApp', 'Fiverr', 'LinkedIn', 'Google Profile'];
export const leadConversionChannels = ['WhatsApp', 'Fiverr'];
export const leadTrustChannels = ['LinkedIn', 'Google Profile'];

export const socialLinks = [
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/sohab1122',
    icon: 'FiFiverr',
    color: 'text-primary',
    badge: 'Marketplace',
    cta: 'Hire on Fiverr',
    shortDescription: 'Best for buyers who want marketplace checkout and fixed packages.',
    bestFor: 'Fixed-scope orders and marketplace-first buyers',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/cube-cake-studiios/',
    icon: 'FiLinkedin',
    color: 'text-blue-600',
    badge: 'Professional',
    cta: 'Connect on LinkedIn',
    shortDescription: 'Best for agency partnerships, B2B validation, and professional credibility.',
    bestFor: 'Partnerships, team buyers, and B2B trust checks',
  },
  {
    name: 'Google Profile',
    url: GOOGLE_PROFILE_URL,
    icon: 'FiGoogle',
    color: 'text-amber-500',
    badge: 'Reviews',
    cta: 'View Google Profile',
    shortDescription: 'Best for review validation, business visibility, and local trust signals.',
    bestFor: 'Review checks and trust validation before inquiry',
  },
  {
    name: 'WhatsApp',
    url: WHATSAPP_URL,
    icon: 'FiMessageCircle',
    color: 'text-green-500',
    badge: 'Fastest',
    cta: 'Chat on WhatsApp',
    shortDescription: 'Best for fast scope, budget, and timeline conversations.',
    bestFor: 'High-intent buyers who want a quick response',
  },
];

/**
 * Primary contact methods
 */
export const contactMethods = [
  {
    type: 'email',
    label: 'Email',
    value: 'hello@cubecakestudiios.com',
    icon: 'FiMail',
    link: 'mailto:hello@cubecakestudiios.com',
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+971543462742',
    icon: 'FiPhone',
    link: 'tel:+971543462742',
  },
  {
    type: 'address',
    label: 'Location',
    value: 'Karachi, Pakistan',
    icon: 'FiMapPin',
    link: null,
  },
];

/**
 * Quick links for navigation
 */
export const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Start Here', href: '/start-here' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Legal/Policy links
 */
export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/privacy#cookies' },
];

/**
 * Company information
 */
export const companyInfo = {
  name: 'CUBE CAKE STUDIIOS',
  tagline: '2D animation studio for explainer videos, product stories, and launch-ready creative',
  description:
    'Professional 2D animation studio and explainer video agency helping brands, startups, and product teams turn complex ideas into clear visual stories.',
  established: 2020,
  team: 'Professional designers, animators, and developers',
  location: 'Karachi, Pakistan',
  email: 'hello@cubecakestudiios.com',
  phone: '+971543462742',
};

/**
 * Get social link by name
 */
export const getSocialLink = (name) => {
  return socialLinks.find((link) => link.name === name);
};

/**
 * Get all social URLs
 */
export const getAllSocialUrls = () => {
  return socialLinks.map((link) => link.url);
};

