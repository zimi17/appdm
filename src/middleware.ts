import { defineMiddleware } from 'astro:middleware';

const MAINTENANCE_MODE = import.meta.env.PUBLIC_MAINTENANCE_MODE === 'true';

export const onRequest = defineMiddleware(async (context, next) => {
  if (MAINTENANCE_MODE) {
    if (context.url.pathname === '/maintenance') {
      return next();
    }
    return context.redirect('/maintenance', 307);
  }
  return next();
});
