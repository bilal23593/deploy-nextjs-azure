/**
 * Testimonials/Client Reviews Data
 * Used across pages for social proof
 */

export const testimonials = [
  {
    id: 1,
    text: 'CUBE CAKE STUDIIOS transformed our product vision into reality. Their 2D animations increased our product page engagement by 35%! Highly professional and responsive team.',
    author: 'John Smith',
    role: 'Marketing Manager',
    company: 'Tech Retail Co.',
    avatar: '/images/testimonials/avatar-1.jpg',
    rating: 5,
    service: 'Animation',
  },
  {
    id: 2,
    text: 'The explainer video they created for our SaaS platform was exactly what we needed. Support queries dropped by 48% and customer satisfaction increased significantly.',
    author: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'CloudSync Software',
    avatar: '/images/testimonials/avatar-2.jpg',
    rating: 5,
    service: 'Explainer Video',
  },
  {
    id: 3,
    text: 'Outstanding UI/UX design work! They completely redesigned our mobile app based on real user research. Our user retention improved by 42% and we got 5-star ratings!',
    author: 'Mike Chen',
    role: 'CEO',
    company: 'FitTrack Inc.',
    avatar: '/images/testimonials/avatar-3.jpg',
    rating: 5,
    service: 'UI/UX Design',
  },
  {
    id: 4,
    text: 'Their branding expertise helped us establish a strong market presence from day one. The complete brand identity package was comprehensive and professional.',
    author: 'Emma Williams',
    role: 'Founder',
    company: 'EcoBrand Co.',
    avatar: '/images/testimonials/avatar-4.jpg',
    rating: 5,
    service: 'Branding',
  },
  {
    id: 5,
    text: 'Professional website design that converted! They created a responsive site that generated 150+ qualified leads in the first quarter. Best investment we made!',
    author: 'David Brown',
    role: 'Business Development',
    company: 'ConsultPro Group',
    avatar: '/images/testimonials/avatar-5.jpg',
    rating: 5,
    service: 'Web Design',
  },
  {
    id: 6,
    text: 'The animated marketing campaign was a huge success! 2.5 million views across platforms in just 3 weeks. Creative, engaging, and perfectely executed.',
    author: 'Lisa Anderson',
    role: 'Social Media Manager',
    company: 'Creative Agency Partner',
    avatar: '/images/testimonials/avatar-6.jpg',
    rating: 5,
    service: 'Animation',
  },
  {
    id: 7,
    text: 'Responsive, attentive, and incredibly talented. They took our vision and made it better than we imagined. We\'ve recommended them to three other companies already!',
    author: 'Robert Martinez',
    role: 'Project Lead',
    company: 'Innovation Labs',
    avatar: '/images/testimonials/avatar-7.jpg',
    rating: 5,
    service: 'Multiple Services',
  },
  {
    id: 8,
    text: 'The level of professionalism and attention to detail is remarkable. They delivered on time, on budget, and exceeded our expectations. A+ team!',
    author: 'Jennifer Lee',
    role: 'Director of Marketing',
    company: 'Digital Connect',
    avatar: '/images/testimonials/avatar-8.jpg',
    rating: 5,
    service: 'Web Design',
  },
];

/**
 * Featured testimonials for homepage
 */
export const featuredTestimonials = testimonials.slice(0, 3);

/**
 * Get testimonials by service
 */
export const getTestimonialsByService = (service) => {
  return testimonials.filter(
    (t) => t.service === service || t.service === 'Multiple Services'
  );
};

/**
 * Average rating
 */
export const averageRating = (
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
).toFixed(1);
