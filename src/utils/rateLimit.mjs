// rateLimit.mjs
import rateLimit from 'express-rate-limit';

/**
 * Rate limiting middleware
 * Limits requests to 100 per IP address per 15 minutes
 */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  headers: true,
});

export default limiter;
