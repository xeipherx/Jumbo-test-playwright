import { test, expect } from '@playwright/test';
import { JumboHeaderPage } from '../pages/jumbo.header.page';
import { Rejectcookies } from '../helpers'
import { JumboDetailPage } from '../pages/jumbo.detail.page';
import { GraphQLService } from '../helpers';

test('Check headers navigation', async ({ page }) => {
  await Rejectcookies(page);
  await expect(page.getByRole('link', { name: 'Producten' })).toHaveAttribute('href', '/producten/')
  await expect(page.getByRole('link', { name: 'Aanbiedingen & acties' })).toHaveAttribute('href', 'https://www.jumbo.com/aanbiedingen/alles')
  await expect(page.getByRole('banner').getByRole('link', { name: 'Recepten' })).toHaveAttribute('href', '/recepten')
});

test('Login jumbo account test', async ({ page }) => {
  await Rejectcookies(page);
  const jumboHeaderPage = new JumboHeaderPage(page);
  await jumboHeaderPage.clickOnLogin();
  await page.waitForTimeout(10000);
});

test('Search for product pindakaas and add it to the basket and check basket count',async ({ page }) => {
  await Rejectcookies(page);
  const jumboHeaderPage = new JumboHeaderPage(page);
  await jumboHeaderPage.SearchProduct("pindakaas");
  await expect(page).toHaveURL(/searchTerms=pindakaas/);
  const jumboDetailPage = new JumboDetailPage(page);
  await jumboDetailPage.ClickFirstItemInResultList();
  await expect(page).toHaveURL(/producten/);
  await jumboDetailPage.AddItemToBasket();
  await jumboHeaderPage.CheckBasketCount();
  await page.waitForTimeout(10000);
});

test('Add to basket test GRAPHQL',async ({ page }) => {
  await Rejectcookies(page);
  var helper = new GraphQLService();
  await helper.GetBasket();
});
