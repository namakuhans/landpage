const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 375, height: 667 } // iPhone SE size
  });

  await page.goto('http://localhost:5173');

  // Wait for the canvas and model to load
  await page.waitForTimeout(5000);

  // Take screenshot
  await page.screenshot({ path: '/home/jules/verification/lanyard_mobile_issue.png', fullPage: true });

  await browser.close();
})();
