import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  logLevel: 'info',
  plugins: [react()],
  root: 'src',
  publicDir: '../public',
  base: './',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: `${__dirname}/src`,
      },
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    sourcemap: false,
    target: 'es6',
    outDir: '../build',
    emptyOutDir: true,
  },
})
