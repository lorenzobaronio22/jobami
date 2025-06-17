import { test, expect } from '@playwright/test'

test('home page should greetins users', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' })
  await expect(page.getByRole('heading')).toHaveText('Welcome to Jobami')
})
