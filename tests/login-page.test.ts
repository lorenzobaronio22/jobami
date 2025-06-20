import { expect } from '@playwright/test';
import { test } from './dsl/fixtures';

// Test credentials for the user created in global.setup.ts
const TEST_EMAIL = 'user1@test.com';
const TEST_PASSWORD = 'password123';

test.describe('Login Page', () => {
  test('should allow user to login with valid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', TEST_EMAIL);
    await page.fill('input[type="password"]', TEST_PASSWORD);
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/');
    await expect(page.getByTestId('btn-logout')).toBeVisible();
  });
});
