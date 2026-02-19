/**
 * Contact Form API Route
 * Handles form submissions with validation and rate limiting
 */

import rateLimit from '@/lib/rateLimit';

const parsePositiveInteger = (value, fallback) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

// Rate limiter instance - defaults to 5 requests per hour per IP
const limiter = rateLimit({
  interval: parsePositiveInteger(process.env.RATE_LIMIT_WINDOW, 60 * 60 * 1000),
  maxRequests: parsePositiveInteger(process.env.RATE_LIMIT_MAX_REQUESTS, 5),
});

/**
 * Validate email format
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Sanitize input to prevent injection attacks
 */
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return input
    .trim()
    .slice(0, 1000) // Limit length
    .replace(/[<>]/g, ''); // Remove potential HTML tags
};

/**
 * POST /api/contact
 * Handler for contact form submissions
 */
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get client IP for rate limiting
    const ip =
      req.headers['x-forwarded-for']?.split(',')[0].trim() ||
      req.headers['x-real-ip'] ||
      req.socket.remoteAddress ||
      'unknown';

    // Check rate limit
    if (!limiter.check(ip)) {
      return res.status(429).json({
        message: 'Too many requests. Please try again later.',
      });
    }

    // Destructure and validate form data
    const { name, email, phone, service, message } = req.body ?? {};

    // Validation checks
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({
        message: 'Missing required fields: name, email, or message',
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email address',
      });
    }

    // Validate message length
    if (message.trim().length < 10) {
      return res.status(400).json({
        message: 'Message must be at least 10 characters long',
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : '',
      service: sanitizeInput(service || 'general'),
      message: sanitizeInput(message),
      submittedAt: new Date().toISOString(),
      clientIp: ip,
    };

    /**
     * TODO: Integrate with email service
     * Options:
     * 1. SendGrid (npm install @sendgrid/mail)
     * 2. Mailgun (npm install mailgun.js)
     * 3. Nodemailer (npm install nodemailer)
     * 4. Vercel's email service partner
     * 5. Custom backend service
     */

    // For now, log to console (in production, send email)
    console.log('New contact form submission:', sanitizedData);

    // TODO: Remove this in production - store in database or send email
    // Temporary storage in memory (not suitable for production)
    if (!global.contactSubmissions) {
      global.contactSubmissions = [];
    }
    global.contactSubmissions.push(sanitizedData);

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      submissionId: `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      message: 'An error occurred while processing your request. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
