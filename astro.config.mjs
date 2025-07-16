import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  mode: "development", // Set the mode as needed (development or production)
  site: import.meta.env.SITE_URL || "https://stiedwimulya.ac.id", // Site URL
  output: "server", // Set output to server (SSR)
  adapter: node({ mode: "standalone" }), // Node.js adapter for SSR
  integrations: [react()], // React integration for JSX support
  
});
