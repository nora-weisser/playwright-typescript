import { test as base } from "@playwright/test"
import { LoginPage } from "../pages/login/login.page"

export const test = base.extend({
    loginPage: async ({page}, use) => {
        // Set up the fixture
        const loginPage = new LoginPage(page);

        // Use the fixture value in the test
        await use(loginPage);
    }
})
