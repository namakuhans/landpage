import { test, expect } from '@playwright/test';

test('capture new curved marquee', async ({ page }) => {
  await page.goto('http://localhost:5173');
  // Wait for React to mount and size the marquee
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'new_marquee.png', fullPage: true });
});
