import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();

  // Desktop
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  const page = await context.newPage();

  await page.goto('http://localhost:4173/');

  // Wait for React to mount and render, scroll down exactly to the new section
  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    const textElement = Array.from(document.querySelectorAll('h2')).find(el => el.textContent.includes('Interactive 3D Asset'));
    if (textElement) {
       textElement.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  });
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'test_lanyard_desktop2.png' });

  // Mobile
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:4173/');
  await mobilePage.waitForTimeout(1000);
  await mobilePage.evaluate(() => {
    const textElement = Array.from(document.querySelectorAll('h2')).find(el => el.textContent.includes('Interactive 3D Asset'));
    if (textElement) {
       textElement.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  });
  await mobilePage.waitForTimeout(500);

  await mobilePage.screenshot({ path: 'test_lanyard_mobile2.png' });

  await browser.close();
})();
