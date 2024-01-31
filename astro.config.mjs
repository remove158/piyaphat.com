import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.piyaphat.com',
	integrations: [react(), tailwind({
		applyBaseStyles: false,
	}), sitemap()],
	markdown: {
		// Can be 'shiki' (default), 'prism' or false to disable highlighting
		// syntaxHighlight: 'prism',
	},
});