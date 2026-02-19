/**
 * Social Links & Contact Information
 * Centralized configuration for all social profiles and contact methods
 */

export const socialLinks = [
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/s/akB06EK',
    icon: 'FiFiverr',
    color: 'text-primary',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/cubecakestudios',
    icon: 'FiLinkedin',
    color: 'text-blue-600',
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/cubecakestudios',
    icon: 'FiDribbble',
    color: 'text-pink-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/bilal23593',
    icon: 'FiGithub',
    color: 'text-gray-800 dark:text-white',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/cubecakestudios',
    icon: 'FiTwitter',
    color: 'text-blue-400',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/cubecakestudios',
    icon: 'FiInstagram',
    color: 'text-pink-500',
  },
  {
    name: 'Skype',
    url: 'skype:join.skype.com/invite/qaHJVhuEI5wU',
    icon: 'FiSkype',
    color: 'text-blue-500',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/bilal23593',
    icon: 'FiTelegram',
    color: 'text-blue-400',
  },
];

/**
 * Primary contact methods
 */
export const contactMethods = [
  {
    type: 'email',
    label: 'Email',
    value: 'hello@cubecakestudios.com',
    icon: 'FiMail',
    link: 'mailto:hello@cubecakestudios.com',
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+92 (300) 1234567',
    icon: 'FiPhone',
    link: 'tel:+923001234567',
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
  email: 'hello@cubecakestudios.com',
  phone: '+92 (300) 1234567',
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
