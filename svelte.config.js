import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ['*'] // exclude dynamic routes here
    }
  }
};

export default config;

