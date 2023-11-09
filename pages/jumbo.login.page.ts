import { Page } from '@playwright/test';
import { testUsername } from '../helper/helpers';
import { testPassword } from '../helper/helpers';

export class JumboLoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async EnterLoginDetails(){
        await this.page.fill('.input', testUsername);
        await this.page.fill('[id=password]', testPassword);
    }

    async ClickLogin() {
        await this.page.getByRole('button', { name: 'Inloggen' }).click();
    }
}