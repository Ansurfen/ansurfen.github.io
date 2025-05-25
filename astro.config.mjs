// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://ansurfen.github.io",
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "en_us",
    locales: ["en_us", "zh_cn", "zh_tw", "ja_jp"],
  },
});