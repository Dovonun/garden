import { defineConfig } from 'astro/config';
import { remarkToc } from 'remark-toc';

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://dovonun.github.io',
  base: 'garden',
  integrations: [mdx(), tailwind()],
  trailingSlash: "never"
});