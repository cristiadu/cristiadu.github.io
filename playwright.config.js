
import { defineConfig, devices } from '@playwright/test'
import os from 'os'

const platform = os.platform()
const baseURL = 'http://127.0.0.1:4173'

export default defineConfig({
  testDir: './src/tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL,
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
    command: 'pnpm run start:e2e',
    url: baseURL,
    reuseExistingServer: process.env.PLAYWRIGHT_REUSE_SERVER === '1',
    timeout: 120000
  },
  snapshotPathTemplate: `{testDir}/__screenshots__/${platform}/{projectName}/{arg}{ext}`
})
