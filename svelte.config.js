import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import markdown from './src/lib/markdown/index.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md', '.md'],
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [markdown(), vitePreprocess()],

	kit: {
		adapter: adapter({
			routes: {
				exclude: [
					'<build>',
					'<files>',
					'/',
					'/posts.json',
					'/atom.xml',
					'/manifest.webmanifest',
					'/sitemap.xml',
					'/tags.json',
					'/blog/*'
				]
			}
		})
	}
};

export default config;
