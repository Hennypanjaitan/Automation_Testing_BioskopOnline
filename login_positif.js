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

  // Click button:has-text("Masuk")
  await page.locator('button:has-text("Masuk")').click();

  // Click input[name="username"]
  await page.locator('input[name="username"]').click();

  // Press CapsLock
  await page.locator('input[name="username"]').press('CapsLock');

  // Press CapsLock
  await page.locator('input[name="username"]').press('CapsLock');

  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill('hennypanjaitan5@gmail.com');

  // Click input[type="password"]
  await page.locator('input[type="password"]').click();

  // Press CapsLock
  await page.locator('input[type="password"]').press('CapsLock');

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('P');

  // Press CapsLock
  await page.locator('input[type="password"]').press('CapsLock');

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('Panjaitan5');

  // Click div[role="dialog"] button:has-text("Masuk")
  await page.locator('div[role="dialog"] button:has-text("Masuk")').click();

  // Click text=Film Saya >> nth=0
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://bioskoponline.com/my-film' }*/),
    page.locator('text=Film Saya').first().click()
  ]);

  // Click path:nth-child(23) >> nth=0
  await page.locator('path:nth-child(23)').first().click();
  // assert.equal(page.url(), 'https://bioskoponline.com/');

  // ---------------------
  await context.close();
  await browser.close();
})();