// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd']
    }
  }
});
