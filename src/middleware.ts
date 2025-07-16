// src/middleware.ts

import { defineMiddleware } from 'astro:middleware';

// Read the private environment variable instead
const MAINTENANCE_MODE = import.meta.env.MAINTENANCE_MODE === 'true';

export const onRequest = defineMiddleware(async (context, next) => {
  if (MAINTENANCE_MODE) {
    if (context.url.pathname === '/maintenance') {
      return next();
    }
    // The rest of your code remains the same
    return context.redirect('/maintenance', 307);
  }
  return next();
});