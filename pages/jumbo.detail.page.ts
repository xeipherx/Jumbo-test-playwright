import { expect, Locator, Page } from '@playwright/test';
import { resolve } from 'path';
export class JumboDetailPage {
    readonly page: Page;
    readonly productList: Locator;
    readonly addToBasket: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productList = page.locator('article');
        this.addToBasket = page.locator('button').filter({ hasText: 'Toevoegen aan mandje' });
    }

    async ClickFirstItemInResultList(){
        await this.productList.first().click();
    }

    async AddItemToBasket(){
        await this.addToBasket.click();
    }
}