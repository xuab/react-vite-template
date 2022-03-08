import { PlaywrightTestConfig, devices } from '@playwright/test'

const port = 3000

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-retry',
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || `http://localhost:${port}`,
    // launchOptions: {
    //   headless: false,
    //   slowMo: 5000,
    // },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: !process.env.PLAYWRIGHT_TEST_BASE_URL && {
    command: 'npm run preview',
    port,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
}

export default config
