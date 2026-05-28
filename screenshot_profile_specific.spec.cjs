const { test, expect } = require('@playwright/test');

test('screenshot profile card specific', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);

  // scroll down
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(1000);

  await page.screenshot({ path: '/home/jules/verification/profile_darker_specific2.png' });
});
