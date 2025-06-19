import { test as base } from '@playwright/test';
import { HomePage } from './pages/home';

// Declare the types of your fixtures.
type CustomFixtures = {
  homePage: HomePage;
};

// Extend base test by providing the custom fixtures.
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<CustomFixtures>({
  homePage: async ({ page }, use) => {
    // Set up the fixture.
    const homePage = new HomePage(page);
    await homePage.goto();

    // Use the fixture value in the test.
    await use(homePage);

  },

});

export { expect } from '@playwright/test';