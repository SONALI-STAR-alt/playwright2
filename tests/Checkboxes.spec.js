import {test , expect} from '@playwright/test'

test('Checkboxes',async ({page}) => {
   

    await page.goto('https://testautomationpractice.blogspot.com/');

        await page.locator("//label[text()='Sunday']").check();

        
         await expect(page.locator("//label[text()='Sunday']")).toBeChecked();






})

