import {test,expect} from '@playwright/test';


test('Home',async({page})=>{

   await page.goto('https://www.facebook.com/')

   const pageTitle= await page.title();
   console.log('Page title is:', pageTitle)

   await expect(page).toHaveTitle('Facebook')

   const pageURL=page.url();


   await expect(page).toHaveURL('https://www.facebook.com/')

await page.close();


})