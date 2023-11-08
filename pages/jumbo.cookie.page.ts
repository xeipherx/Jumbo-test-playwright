//home.page.ts
import { expect, Locator, Page } from '@playwright/test';
export class JumboCookiePage {
  readonly page: Page;
  readonly rejectCookiesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rejectCookiesButton =  page.locator('id=onetrust-reject-all-handler');
  }

  async rejectAllCookies() {
    await this.rejectCookiesButton.click();
  }
}