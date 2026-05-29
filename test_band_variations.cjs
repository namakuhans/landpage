const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Mobile size matching viewport width 375, height 667
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(3000);

  // We need to scroll down to see the lanyard, as the desktop screenshot showed the top of the page.
  await page.mouse.wheel(0, 3000); // Scroll down more
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/lanyard_mobile_w375.png' });

  // Desktop size matching viewport width 1024, height 768
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(3000);
  await page.mouse.wheel(0, 3000); // Scroll down more
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/lanyard_desktop_w1024.png' });

  await browser.close();
})();
