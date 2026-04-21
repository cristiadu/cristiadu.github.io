
import { defineConfig, devices } from '@playwright/test'
import os from 'os'

const platform = os.platform()

export default defineConfig({
  testDir: './src/tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:4174',
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'iphone12',
      use: { ...devices['iPhone 12'] }
    }
  ],
  webServer: {
    command: 'pnpm exec webpack serve --mode development --port 4174 --no-open',
    url: 'http://127.0.0.1:4174',
    reuseExistingServer: false,
    timeout: 120000
  },
  snapshotPathTemplate: `{testDir}/__screenshots__/${platform}/{projectName}/{arg}{ext}`
})
