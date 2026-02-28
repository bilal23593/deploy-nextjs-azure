/**
 * Services Data
 * Used for Services page and service showcase
 */

export const services = [
  {
    id: 'animation',
    title: '2D Animation',
    href: '/services/2d-animation-studio',
    shortDescription: 'Engage your audience with captivating 2D animations.',
    fullDescription:
      'We create stunning 2D animations that bring your ideas to life. From character animation to motion graphics, our team crafts visually striking animations that capture attention and communicate your message effectively.',
    icon: 'FiVideo',
    color: 'primary',
    benefits: [
      'Custom character design',
      'Smooth frame-by-frame animation',
      'Professional audio mixing',
      'Motion graphics effects',
      'Quick turnaround delivery',
    ],
    process: [
      'Concept & Storyboarding',
      'Character Design',
      'Layout & Animation',
      'Coloring & Compositing',
      'Post-Production & Delivery',
    ],
    price: 'Custom',
    image: '/images/services/animation.jpg',
  },
  {
    id: 'explainer',
    title: 'Explainer Videos',
    href: '/services/explainer-video-production-for-startups',
    shortDescription: 'Simplify complex ideas with engaging explainer videos.',
    fullDescription:
      'Transform complex concepts into simple, engaging video content. Our explainer videos combine animation, voiceover, and sound design to deliver your message clearly and memorably.',
    icon: 'FiPlay',
    color: 'primaryDark',
    benefits: [
      'Script writing & development',
      'Professional voiceover',
      'Custom animation',
      'Optimized for social media',
      'Improved conversion rates',
    ],
    process: [
      'Requirement Analysis',
      'Script & Storyboard',
      'Visual Design',
      'Animation & Sound Design',
      'Final Review & Revisions',
    ],
    price: 'Custom',
    image: '/images/services/explainer.jpg',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    shortDescription: 'Beautiful, user-centered design that converts.',
    fullDescription:
      'We design intuitive and visually appealing user interfaces that create delightful user experiences. From wireframes to high-fidelity prototypes, we ensure every interaction counts.',
    icon: 'FiLayout',
    color: 'primary',
    benefits: [
      'User research & personas',
      'Wireframing & prototyping',
      'Responsive design',
      'Accessibility compliance',
      'Design systems & guidelines',
    ],
    process: [
      'Discovery & Research',
      'Wireframing',
      'Visual Design',
      'Prototyping & Testing',
      'Handoff & Documentation',
    ],
    price: 'Custom',
    image: '/images/services/uiux.jpg',
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    href: '/services/brand-story-animation-for-startups',
    shortDescription: 'Build a distinctive brand that stands out.',
    fullDescription:
      'Create a strong, memorable brand identity that resonates with your audience. We develop comprehensive brand guidelines including logos, color schemes, typography, and brand voice.',
    icon: 'FiHeart',
    color: 'primaryDark',
    benefits: [
      'Logo & brand mark design',
      'Color palette development',
      'Typography selection',
      'Brand guidelines creation',
      'Multi-platform consistency',
    ],
    process: [
      'Brand Strategy',
      'Concept Development',
      'Logo Design',
      'Visual Identity',
      'Brand Guidelines',
    ],
    price: 'Custom',
    image: '/images/services/branding.jpg',
  },
  {
    id: 'web',
    title: 'Web Design',
    shortDescription: 'Professional websites that drive results.',
    fullDescription:
      'We design and develop modern, responsive websites that look great on all devices. Our web solutions combine beautiful design with robust functionality to help you achieve your business goals.',
    icon: 'FiGlobe',
    color: 'primary',
    benefits: [
      'Responsive web design',
      'Fast performance optimization',
      'SEO-friendly structure',
      'CMS integration',
      'E-commerce capabilities',
    ],
    process: [
      'Planning & Discovery',
      'Wireframing',
      'Design & Prototyping',
      'Development',
      'Testing & Deployment',
    ],
    price: 'Custom',
    image: '/images/services/web.jpg',
  },
];

/**
 * Process steps that appear across services
 */
export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We understand your vision, target audience, and project requirements.',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Create detailed plans, timelines, and deliverables for success.',
  },
  {
    number: '03',
    title: 'Creation',
    description:
      'Our team brings your vision to life with attention to detail.',
  },
  {
    number: '04',
    title: 'Review',
    description:
      'We gather feedback and refine until you are completely satisfied.',
  },
  {
    number: '05',
    title: 'Delivery',
    description:
      'Final assets delivered in all required formats with full documentation.',
  },
];
