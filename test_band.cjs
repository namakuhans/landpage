const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 375, height: 667 }
  });

  await page.goto('http://localhost:5173');
  await page.waitForTimeout(5000);

  await page.screenshot({ path: '/home/jules/verification/lanyard_mobile_original.png', fullPage: true });

  await browser.close();
})();
