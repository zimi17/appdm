import { defineMiddleware } from 'astro:middleware';

const MAINTENANCE_MODE = import.meta.env.PUBLIC_MAINTENANCE_MODE === 'true';

export const onRequest = defineMiddleware(async (context, next) => {
  if (MAINTENANCE_MODE) {
    // Allow access to the maintenance page itself
    if (context.url.pathname === '/maintenance' || context.url.pathname === '/maintenance/') {
      return next();
    }
    // Redirect all other requests to the maintenance page
    return context.redirect('/maintenance', 307);
  }

  // If not in maintenance mode, proceed as normal
  return next();
});
