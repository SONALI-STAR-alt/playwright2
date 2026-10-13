import {test,expect} from '@playwright/test'


test('Locators',async({page})=> {
    

    await page.goto("https://www.demoblaze.com/")

    //await page.locator('').click()
   await page.click('id=login2')

   //provider username
   //await page.type('id="loginusername"')
   await page.fill('id=loginusername','pavanol')

   await page.fill(id="loginpassword",'test@123')

   await page.click("//button[text()='Log in']")

   await page.close()




})

