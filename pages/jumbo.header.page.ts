//home.page.ts
import { expect, Locator, Page } from '@playwright/test';
import { testName } from '../helper/helpers';

export class JumboHeaderPage {
  page: Page;
  loginButton: Locator;
  basketCount: Locator
  signedInUsernameLocator: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnLogin() {
    this.loginButton = this.page.locator("[data-label='Inloggen']");
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

  async CheckNameAccount(){
    await expect(this.page.locator('.user-menu')).toHaveText(testName);
  }
}