// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'mtw',
      fileName: 'mtw',
      formats: ['es', 'cjs', 'umd']
    }
  }
});
