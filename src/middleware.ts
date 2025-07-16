import type { APIContext } from 'astro';
import type { Next } from 'astro:middleware';

const MAINTENANCE_MODE = import.meta.env.MAINTENANCE_MODE === 'true' || import.meta.env.VERCEL_ENV === 'production';

export const onRequest = async (context: APIContext, next: Next) => {
  // Allow access if maintenance mode is off OR if the user is already on the maintenance page
  if (!MAINTENANCE_MODE || context.url.pathname === '/maintenance') {
    return next();  // Continue the request
  }

  // Otherwise, redirect everyone else to the maintenance page
  return context.redirect('/maintenance', 307);
};
