import { test } from '../utils/fixtures';
import expect from "@playwright/test"
import { users } from '../utils/datafactory/login.data';

test.beforeEach(async  ({page}) => {
    await page.goto('https://www.saucedemo.com/');
  });

for (const userType in users) {
    test(`login successfully with ${userType}`, async ({ page, loginPage }) => {
        await loginPage.enterCredentials(users[userType]["username"], users[userType]["password"]);
        await loginPage.clickLoginButton();
        await loginPage.IsSignedIn();
    });
}  
