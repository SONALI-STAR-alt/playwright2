
import { test, expect } from '@playwright/test';

test ('handle radio button',async ({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator("//label[text()='Male']").check();

    //await expect (await page.locator("//label[text()='Male']")).toBeChecked();
    //await expect (await page.locator("//label[text()='Male']").isChecked()).toBeTruthy();


    //await expect (await page.locator("//label[text()='Female']").toBeChecked());
    await page.locator("//label[text()='Female']").check();

    //await page.check("//label[text()='Male']");





    await page.waitForTimeout(5000);
    





})