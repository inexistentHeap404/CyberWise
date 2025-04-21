export default defineConfig({
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
});

