import type { Locator, Page } from "@playwright/test";

export class HomePage {

  public readonly heading: Locator;
  public readonly loginButton: Locator;
  public readonly registerButton: Locator;
  public readonly callToActionButton: Locator;
  
  constructor(public readonly page: Page) {
    this.heading = page.getByRole("heading");
    this.loginButton = page.getByTestId("btn-login");
    this.registerButton = page.getByTestId("btn-register");
    this.callToActionButton = page.getByTestId("btn-call-to-action");
  }

  async goto() {
    await this.page.goto("/");
  }

  async evaluate<T>(fn: () => T): Promise<T> {
    return this.page.evaluate(fn);
  }

  async resgiterButtonHref(): Promise<string | null> {
    return this.evaluate(() => {
      const link = document.querySelector(`a[data-testid="btn-register"]`);
      return link ? link.getAttribute('href') : null;
    });
  }

  async callToActionButtonHref(): Promise<string | null> {
    return this.evaluate(() => {
      const link = document.querySelector(`a[data-testid="btn-call-to-action"]`);
      return link ? link.getAttribute('href') : null;
    });
  }

}
