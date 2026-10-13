import {test , expect} from '@playwright/test'


test('Auto Suggest Dropdown',async ({page}) => {
   

    await page.goto('https://www.redbus.in/');

    await page.locator ('#src').fill('pune')
    await page.fill("//input[@placeholder='Search Boarding Point']", "Sangamwadi");










    await page.waitForTimeout(5000);



})
