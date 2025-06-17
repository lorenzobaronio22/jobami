import { defineConfig, devices } from '@playwright/test'
import { isCI } from 'std-env'

console.log('Running Playwright tests in CI: ', isCI)

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    baseURL: 'http://localhost:3000',
  },
  projects: [
    { name: 'chromium', use: devices['Desktop Chrome'] }
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !isCI,
  }
})