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

  async signIn() {
    await this.loginButton.click();
  }

  async signUp() {
    await this.registerButton.click();
  }

  async callToAction() {
    await this.callToActionButton.click();
  }

}
