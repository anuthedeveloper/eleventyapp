import { defineConfig } from 'vite';
import eleventy from 'vite-plugin-eleventy';

export default defineConfig({
  plugins: [
    eleventy(),
  ],
  build: {
    outDir: '_site',
    rollupOptions: {
      input: 'src/main.js'
    }
  }
});
