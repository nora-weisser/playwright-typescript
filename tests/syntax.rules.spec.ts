import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByText("Home").click();
})

test('Locator syntax rules', async ({ page }) => {
  // By tag name
  page.locator('img');

  // by id
  page.locator('#filters');

  // by class value
  page.locator('.img-fluid');

  // by attribute
  page.locator('[data-test="product-name');

  // by class (full class)
  page.locator('[class=toast-container position-fixed top-0 end-0 p-3');

  // combine several selector (important: do not add space)
  page.locator('img.img-fluid');

  // by XPath
  page.locator('//*[@id="filters"');

  // by partial text match
  page.locator(':text("Combination")');

  // by exact text match 
  page.locator(':text-is("Combination Pliers")');
});
