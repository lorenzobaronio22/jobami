import type { Locator, Page } from "@playwright/test";
import { USER_1_EMAIL, USER_1_PASSWORD } from "~~/tests/global.data";

export class LoginPage {

  public readonly emailInput: Locator;
  public readonly passwordInput: Locator;
  public readonly submitButton: Locator;
  public readonly logoutButton: Locator;
  
  constructor(public readonly page: Page) {
    this.emailInput = this.page.getByTestId('input-login-email');
    this.passwordInput = this.page.getByTestId('input-login-password');
    this.submitButton = this.page.getByTestId('btn-login-submit');
    this.logoutButton = this.page.getByTestId('btn-logout');
  }

  async goto() {
    await this.page.goto("/login");
  }

  async logInWithValidCredentials() {
    await this.emailInput.fill(USER_1_EMAIL);
    await this.passwordInput.fill(USER_1_PASSWORD);
    await this.submitButton.click();
  }

}
