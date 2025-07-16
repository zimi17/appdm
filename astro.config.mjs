import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  // You can likely remove this line to let Astro's CLI handle the mode
  // mode: "production",
  
  site: import.meta.env.SITE_URL || "https://stiedwimulya.ac.id",
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [react()],
});