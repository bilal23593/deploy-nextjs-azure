/**
 * Rate Limiting Utility
 * Simple in-memory rate limiter for API routes
 * Note: For production, consider using Redis or a dedicated service
 */

class RateLimiter {
  constructor(options = {}) {
    this.interval = options.interval || 60 * 60 * 1000; // 1 hour default
    this.maxRequests = options.maxRequests || 5; // 5 requests default
    this.requests = new Map();
  }

  /**
   * Check if request from IP is within rate limit
   * @param {string} ip - Client IP address
   * @returns {boolean} - true if request allowed, false if rate limited
   */
  check(ip) {
    const now = Date.now();
    const key = ip;

    if (!this.requests.has(key)) {
      // First request from this IP
      this.requests.set(key, {
        count: 1,
        resetTime: now + this.interval,
      });
      return true;
    }

    const data = this.requests.get(key);

    // Check if reset time has passed
    if (now > data.resetTime) {
      // Reset counter
      this.requests.set(key, {
        count: 1,
        resetTime: now + this.interval,
      });
      return true;
    }

    // Check if under limit
    if (data.count < this.maxRequests) {
      data.count++;
      return true;
    }

    // Rate limited
    return false;
  }

  /**
   * Get remaining requests for an IP
   */
  getRemaining(ip) {
    const data = this.requests.get(ip);
    if (!data) return this.maxRequests;
    if (Date.now() > data.resetTime) return this.maxRequests;
    return Math.max(0, this.maxRequests - data.count);
  }

  /**
   * Get time until reset (in seconds)
   */
  getResetTime(ip) {
    const data = this.requests.get(ip);
    if (!data) return 0;
    const resetIn = data.resetTime - Date.now();
    return Math.max(0, Math.ceil(resetIn / 1000));
  }

  /**
   * Clear all rate limit data (useful for testing)
   */
  reset() {
    this.requests.clear();
  }

  /**
   * Clear specific IP
   */
  clearIp(ip) {
    this.requests.delete(ip);
  }
}

/**
 * Factory function to create rate limiter instance
 */
export default function rateLimit(options) {
  return new RateLimiter(options);
}

/**
 * Global rate limiter instances for API routes
 */
export const contactFormLimiter = rateLimit({
  interval: 60 * 60 * 1000, // 1 hour
  maxRequests: 5,
});

export const newsletterLimiter = rateLimit({
  interval: 60 * 60 * 1000, // 1 hour
  maxRequests: 3,
});
