
import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

});


