import { test, expect } from '@playwright/test';

test('handle inputbox', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator('#name').fill('sonali');

    

    //await expect(page.locator('#name')).toHaveValue('sonali');

    await expect (await page.locator("//input[@id='name']")).toBeVisible();
    await expect (await page.locator("//input[@id='name']")).toBeEmpty();
    await expect (await page.locator("//input[@id='name']")).toBeEditable();
    await expect (await page.locator("//input[@id='name']")).toBeEnabled();
    

    await page.locator("//input[@id='name']").fill("ram");
    await page.waitForTimeout(5000);



    await page.reload();

});