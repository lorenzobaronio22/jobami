import { expect } from '@playwright/test';
import { test } from './dsl/fixtures';
import { USER_1_EMAIL, USER_1_PASSWORD } from './global.data';

test.describe('Login Page', () => {
  test('should allow user to login with valid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', USER_1_EMAIL);
    await page.fill('input[type="password"]', USER_1_PASSWORD);
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/');
    await expect(page.getByTestId('btn-logout')).toBeVisible();
  });
});
