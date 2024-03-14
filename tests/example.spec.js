// @ts-check
const { test, expect } = require('@playwright/test');


test.describe('New Todo', () => {

  test('has title', async ({ page }) => {
    await page.goto('http://win-1ics5jffm16.dev.local:9080/navigator/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Content/);
  });

  test('get started link', async ({ page }) => {
    await page.goto('http://win-1ics5jffm16.dev.local:9080/navigator/');
    await page.getByText("Welcome to IBM Content Navigator")
  });
})
