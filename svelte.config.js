import adapter from '@sveltejs/adapter-vercel';

const config = {
  kit: {
    adapter: adapter()
    // no need for prerender.entries or strict here
  }
};

export default config;

