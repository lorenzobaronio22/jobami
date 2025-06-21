import { test as base } from '@playwright/test';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';

type CustomFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
};

export const test = base.extend<CustomFixtures>({

  homePage: async ({ page }, use) => {
    const customPage = new HomePage(page);
    await customPage.goto();
    await use(customPage);
  },

  loginPage: async ({ page }, use) => {
    const customPage = new LoginPage(page);
    await customPage.goto();
    await use(customPage);
  },

});

export { expect } from '@playwright/test';