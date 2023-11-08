//home.page.ts
import { expect, Locator, Page } from '@playwright/test';
export class JumboHeaderPage {
  readonly page: Page;
  readonly loginButton: Locator;
  basketCount: Locator

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator("[data-label='Inloggen']");
  }

  async clickOnLogin() {
    await this.loginButton.click();
  }

  async SearchProduct(product){
    await this.page.getByRole('textbox', { name: 'Zoekopdracht' }).fill(product);
    await this.page.keyboard.press('Enter');
  }

  async CheckBasketCount(){
    this.basketCount = await this.page.getByTestId('basket-item-total').first();
    await expect(this.basketCount).toHaveText('1');
  }
}