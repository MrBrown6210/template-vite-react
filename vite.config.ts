/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import removeConsole from 'vite-plugin-remove-console'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), removeConsole()],
  test: {
    global: true,
    setupFiles: 'src/setupTests.ts',
    environment: 'jsdom'
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(import.meta.url, '/src')
      }
    ]
  }
})
