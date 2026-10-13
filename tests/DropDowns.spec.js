import {test , expect} from '@playwright/test'
import { log } from 'node:console';

test('droupdowns',async ({page}) => {
   

    await page.goto('https://testautomationpractice.blogspot.com/');

       //await page.locator("#country").selectOption({label:'India'});
       //await page.locator("#country").selectOption({value:'uk'});
       //await page.locator("#country").selectOption({label:'India'});
       //await page.locator("#country").selectOption({index:1});
       
       // Asserations
       // 1. check number of options in dropdown
          //const options=await page.locator('#country option')
          //await expect (options).toHaveCount(10);
        // 2. check number ofopection in dropdown
        //const options=await page.$$('#country option')
        //console.log("Number of options:",options.length)
        await expect(options.length).toBe(10);
        
       await page.waitForTimeout(5000);
         





})

