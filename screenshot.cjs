const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 1600 }
  });
  await page.goto('http://localhost:5173');

  // Wait for React to mount and animation to start
  await page.waitForTimeout(2000);

  // Scroll down to where the marquee should be
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });

  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
