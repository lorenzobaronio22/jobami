import { expect } from '@playwright/test';
import { test } from './dsl/fixtures';

test.describe('Login Page', () => {
  test('should allow user to login with valid credentials', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.logInWithValidCredentials();

    await expect(loginPage.page).toHaveURL('/');
    await expect(loginPage.logoutButton).toBeVisible();
  });
});
