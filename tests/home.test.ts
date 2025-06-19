import { expect } from '@playwright/test';
import { test } from './core/fixtures';

test.describe('Home Page Tests', () => {

  test('home page should greetings users', async ({ homePage }) => {

    await expect(homePage.heading).toHaveText('Welcome to Jobami');

  });
  
  test('home page should show login button', async ({ homePage }) => {

    expect(homePage.loginButton).toBeDefined();
    await Promise.all([
      expect(homePage.loginButton).toBeVisible(),
      expect(homePage.loginButton).toBeEnabled(),
      expect(homePage.loginButton).toHaveText('Sign In'),
    ]);

  });

  test('home page should show resgister buttons', async ({ homePage }) => {

    expect(homePage.callToActionButton).toBeDefined();
    expect(homePage.registerButton).toBeDefined();

    await Promise.all([
      expect(homePage.registerButton).toBeVisible(),
      expect(homePage.registerButton).toBeEnabled(),
      expect(homePage.registerButton).toHaveText('Sign Up'),
      expect(homePage.callToActionButton).toBeVisible(),
      expect(homePage.callToActionButton).toBeEnabled(),
      expect(homePage.callToActionButton).toHaveText('Get Started'),
      expect.poll(
        async () => homePage.resgiterButtonHref(),
        { timeout: 5000 }
      ).toBe('/register'),
      expect.poll(
        async () => homePage.callToActionButtonHref(),
        { timeout: 5000 }
      ).toBe('/register'),
    ]);

  });

});

