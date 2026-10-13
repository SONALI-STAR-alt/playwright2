
import {test,expect} from '@playwright/test'


test ('test1',async({page})=> {
await page.goto('https://www.demoblaze.com/index.html');
await expect (page).toHaveTitle('STORE');
})

test ('test2',async({page})=> {
await page.goto('https://www.opencart.com/');
await expect (page).toHaveTitle('OpenCart - Open Source Shopping Cart Solution');
})

//test ('test3',async({page})=> {
//await page.goto('https://demo.nopcommerce.com/');
//await expect (page).toHaveTitle('nopCommerce demo store');
//})

// Types OF Reports
 //1.List
 //2.line
 //3.JSON
 //4.htmi
 //5.dot
 //6.Junit
 //7.perfetto
 //8.Allure report 3rd party