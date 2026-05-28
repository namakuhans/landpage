const { test, expect } = require('@playwright/test');

test('screenshot profile card', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 2500 });
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/home/jules/verification/profile_darker.png', fullPage: true });
});
