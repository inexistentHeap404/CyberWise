// vite.config.js

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default {
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	build: {
		rollupOptions: {
			external: ['@tsparticles/svelte', '@tsparticles/slim']
		}
	}
};

