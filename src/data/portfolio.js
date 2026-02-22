/**
 * Portfolio/Projects Data
 * Used for Portfolio page showcase
 */

export const portfolioProjects = [
  {
    id: 1,
    title: 'E-Commerce Product Animation',
    category: 'Animation',
    description:
      'Engaging 2D product animation showcasing features and benefits for an online retailer.',
    image: '/images/portfolio/project-1.jpg',
    video: 'https://www.youtube.com/embed/EOlp1K1KKKU',
    cast: ['/images/avatars/head1.svg', '/images/avatars/head2.svg', '/images/avatars/head3.svg'],
    client: 'Tech Retail Co.',
    challenge:
      'Client needed to showcase product features in an engaging way to increase conversion rates.',
    solution:
      'We created a smooth 2D animation that highlighted key product benefits with engaging transitions.',
    results: '35% increase in product page engagement',
    testimonial: {
      text: 'The animation was exactly what we needed. It increased our product page engagement significantly!',
      author: 'John Smith',
      role: 'Marketing Manager',
      avatar: '/images/portfolio/testimonial-1.jpg',
    },
    link: 'https://www.fiverr.com/sohab1122',
    tags: ['Animation', 'Product Showcase', '2D Animation'],
  },
  {
    id: 2,
    title: 'SaaS Explainer Video',
    category: 'Explainer Video',
    description:
      'Comprehensive explainer video for a complex SaaS platform, simplifying feature explanation.',
    image: '/images/portfolio/project-2.jpg',
    video: 'https://www.youtube.com/embed/EOlp1K1KKKU',
    cast: ['/images/avatars/head2.svg', '/images/avatars/head4.svg', '/images/avatars/head6.svg'],
    client: 'CloudSync Software',
    challenge:
      'Complex software features needed to be explained to non-technical users in under 2 minutes.',
    solution:
      'We created an entertaining explainer video with clear messaging, custom animation, and professional voiceover.',
    results: '48% reduction in support queries related to feature explanation',
    testimonial: {
      text: 'Our support team thanked us for this video. Customer inquiries dropped significantly!',
      author: 'Sarah Johnson',
      role: 'Product Manager',
      avatar: '/images/portfolio/testimonial-2.jpg',
    },
    link: 'https://www.fiverr.com/sohab1122',
    tags: ['Explainer Video', 'SaaS', 'Animation'],
  },
  {
    id: 3,
    title: 'Mobile App UI/UX Design',
    category: 'UI/UX Design',
    description: 'Complete UI/UX design overhaul for a fitness tracking mobile application.',
    image: '/images/portfolio/project-3.jpg',
    video: null,
    cast: ['/images/avatars/head1.svg', '/images/avatars/head5.svg', '/images/avatars/head6.svg'],
    client: 'FitTrack Inc.',
    challenge: 'Existing app had low engagement and poor user retention metrics.',
    solution:
      'Complete redesign focusing on user research, intuitive navigation, and engaging visual design.',
    results: '42% improvement in user retention and 5-star app rating',
    testimonial: {
      text: 'The new design made our app so much more intuitive. Users love it!',
      author: 'Mike Chen',
      role: 'CEO',
      avatar: '/images/portfolio/testimonial-3.jpg',
    },
    link: 'https://www.fiverr.com/sohab1122',
    tags: ['UI Design', 'UX Design', 'Mobile App'],
  },
  {
    id: 4,
    title: 'Brand Identity Design',
    category: 'Branding',
    description: 'Complete brand identity including logo, color palette, and brand guidelines.',
    image: '/images/portfolio/project-4.jpg',
    video: null,
    cast: ['/images/avatars/head3.svg', '/images/avatars/head4.svg', '/images/avatars/head5.svg'],
    client: 'EcoBrand Co.',
    challenge:
      'Startup needed a professional brand identity to establish market presence and credibility.',
    solution:
      'Developed comprehensive brand identity including logo design, color system, typography, and full brand guidelines.',
    results: 'Successful market launch with strong brand recognition',
    testimonial: {
      text: 'The branding really helped us stand out in the marketplace. Highly professional!',
      author: 'Emma Williams',
      role: 'Founder',
      avatar: '/images/portfolio/testimonial-4.jpg',
    },
    link: 'https://www.fiverr.com/sohab1122',
    tags: ['Branding', 'Logo Design', 'Brand Guidelines'],
  },
  {
    id: 5,
    title: 'Corporate Website Design',
    category: 'Web Design',
    description:
      'Modern, responsive corporate website with CMS integration for a consulting firm.',
    image: '/images/portfolio/project-5.jpg',
    video: null,
    cast: ['/images/avatars/head2.svg', '/images/avatars/head5.svg', '/images/avatars/head1.svg'],
    client: 'ConsultPro Group',
    challenge: 'Needed a professional website to showcase services and generate leads.',
    solution:
      'Created a responsive, SEO-optimized website with service showcases, blog integration, and lead capture forms.',
    results: '150+ qualified leads generated in first quarter',
    testimonial: {
      text: 'This website has been a game-changer for our business. High-quality leads consistently!',
      author: 'David Brown',
      role: 'Business Development',
      avatar: '/images/portfolio/testimonial-5.jpg',
    },
    link: 'https://www.fiverr.com/sohab1122',
    tags: ['Web Design', 'Responsive', 'Lead Generation'],
  },
  {
    id: 6,
    title: 'Animated Marketing Campaign',
    category: 'Animation',
    description:
      'Series of animated videos for social media marketing campaign promoting product launch.',
    image: '/images/portfolio/project-6.jpg',
    video: 'https://www.youtube.com/embed/EOlp1K1KKKU',
    cast: ['/images/avatars/head4.svg', '/images/avatars/head6.svg', '/images/avatars/head3.svg'],
    client: 'Creative Agency Partner',
    challenge: 'Create engaging animated content for a viral marketing campaign.',
    solution:
      'Produced 6 custom animated videos optimized for different platforms (Instagram, TikTok, YouTube).',
    results: '2.5M views across all platforms within 3 weeks',
    testimonial: {
      text: 'The animations were fantastic and perfectly suited for social media. Great ROI!',
      author: 'Lisa Anderson',
      role: 'Social Media Manager',
      avatar: '/images/portfolio/testimonial-6.jpg',
    },
    link: 'https://www.fiverr.com/sohab1122',
    tags: ['Animation', 'Social Media', 'Marketing'],
  },
];

/**
 * Project categories for filtering
 */
export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'Animation', label: '2D Animation' },
  { value: 'Explainer Video', label: 'Explainer Videos' },
  { value: 'UI/UX Design', label: 'UI/UX Design' },
  { value: 'Branding', label: 'Branding' },
  { value: 'Web Design', label: 'Web Design' },
];

