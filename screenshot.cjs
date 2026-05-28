const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();

  // Desktop
  const desktopPage = await browser.newPage({
    viewport: { width: 1280, height: 1600 }
  });
  await desktopPage.goto('http://localhost:4173');
  await desktopPage.waitForTimeout(2000);
  await desktopPage.evaluate(() => {
    window.scrollTo(0, 800);
  });
  await desktopPage.waitForTimeout(1000);
  await desktopPage.screenshot({ path: 'desktop_about.png' });
  await desktopPage.close();

  // Mobile
  const mobilePage = await browser.newPage({
    viewport: { width: 375, height: 1600 }
  });
  await mobilePage.goto('http://localhost:4173');
  await mobilePage.waitForTimeout(2000);
  await mobilePage.evaluate(() => {
    window.scrollTo(0, 800);
  });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({ path: 'mobile_about.png' });
  await mobilePage.close();

  await browser.close();
})();
