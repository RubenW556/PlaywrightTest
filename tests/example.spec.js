// @ts-check
const { test, expect } = require('@playwright/test');


test.describe('New Todo', () => {

  test('has title', async ({ page }) => {
    await page.goto('http://win-1ics5jffm16.dev.local:9080/navigator/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Content/);
  });

// test('get started link', async ({ page }) => {
//   await page.goto('http://win-1ics5jffm16.dev.local:9080/navigator/');
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
})
