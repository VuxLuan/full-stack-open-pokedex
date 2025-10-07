const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  testMatch: '**/*.spec.js',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:5000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run start-prod',
    url: 'http://127.0.0.1:5000',
    reuseExistingServer: !process.env.CI,
  },
})
