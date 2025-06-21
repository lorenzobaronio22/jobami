import { expect } from '@playwright/test';
import { test } from './dsl/fixtures';

test.describe('Unauthenticated Home Page', () => {

  test('should greetings users', async ({ homePage }) => {
    await expect(homePage.heading).toHaveText('Welcome to Jobami');
  });
  
  test('should let user login', async ({ homePage }) => {
    homePage.signIn();
    await expect(homePage.page).toHaveURL('/login');
  });

  test('should let user register', async ({ homePage }) => {
    homePage.signUp();
    await expect(homePage.page).toHaveURL('/register');
  });

  test('should call users to action to register', async ({ homePage }) => {
    homePage.callToAction();
    await expect(homePage.page).toHaveURL('/register');
  });

});

