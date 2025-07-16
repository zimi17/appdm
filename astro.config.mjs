import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react()],
  redirects: {
    '/': '/maintenance',
    '/blog': '/maintenance',
    '/index': '/maintenance',
    // Add other routes here that you want to redirect to maintenance page
  },
});
