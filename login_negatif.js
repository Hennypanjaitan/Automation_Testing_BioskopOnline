const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://bioskoponline.com/
  await page.goto('https://bioskoponline.com/');

  // Click input[name="username"]
  await page.locator('input[name="username"]').click();

  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill('hennypanjaitan@gmail.com');

  // Click input[type="password"]
  await page.locator('input[type="password"]').click();

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('panjaitan5');

  // Click div[role="dialog"] button:has-text("Masuk")
  await page.locator('div[role="dialog"] button:has-text("Masuk")').click();

  // ---------------------
  await context.close();
  await browser.close();
})();