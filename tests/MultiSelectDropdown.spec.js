import {test , expect} from '@playwright/test'


test('MultiSelectDropdown',async ({page}) => {
   

    await page.goto('https://testautomationpractice.blogspot.com/');

    // select multipal options for multi select dropdown

    // await page.selectOption('#colors',['Blue','Red','Yellow'])

    // asserations
    // 1) Check number of oprtions

   // const options= await page.locator('#colors option')
    //await expect(options).toHaveCount(7);

    // 2) Check number of options in dropdown using js array
      //const options=await page .$$('#colors option')
      //console.log ("Number of options:",options.length)
      //await expect(options.length).toBe(7)

      // 3) check the presence of value in the dropdown

        const content= await page.locator('#colors').textContent()
        //await expect (content.includes('Red')).toBeTruthy();
        await expect (content.includes('Black')).toBeFalsy();






    await page.waitForTimeout(5000);









})