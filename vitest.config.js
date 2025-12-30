import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.js'],
    include: ['src/tests/unit/**/*.test.{js,jsx}'],
    coverage: {
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/tests/**'],
      reporter: ['text', 'json', 'json-summary']
    },
    globals: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public')
    }
  }
})

