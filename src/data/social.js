/**
 * Social Links & Contact Information
 * Centralized configuration for all social profiles and contact methods
 */

const GOOGLE_PROFILE_URL =
  process.env.NEXT_PUBLIC_GOOGLE_PROFILE_URL ||
  'https://www.google.com/search?q=CUBE+CAKE+STUDIIOS';

const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/971543462742';

export const socialLinks = [
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/sohab1122',
    icon: 'FiFiverr',
    color: 'text-primary',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/cube-cake-studiios/',
    icon: 'FiLinkedin',
    color: 'text-blue-600',
  },
  {
    name: 'Google Profile',
    url: GOOGLE_PROFILE_URL,
    icon: 'FiGoogle',
    color: 'text-amber-500',
  },
  {
    name: 'WhatsApp',
    url: WHATSAPP_URL,
    icon: 'FiMessageCircle',
    color: 'text-green-500',
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
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
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
  tagline: 'Crafting Ideas into Visually Striking Design & Animation',
  description:
    'Professional design and animation agency specializing in 2D animation, explainer videos, UI/UX design, branding, and web design for brands and businesses.',
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

