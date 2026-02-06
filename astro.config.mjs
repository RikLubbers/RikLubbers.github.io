import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://riklubbers.com",

  compressHTML: true,

  build: {
    inlineStylesheets: "always",
    assetsInlineLimit: 10240,
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 10240,
    },
  },

  integrations: [react(), sitemap()],
});
