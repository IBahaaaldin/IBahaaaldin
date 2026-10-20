const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const htmlPath = 'file://' + path.join(__dirname, 'index.html');

  console.log('Capturing Desktop Screenshot...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1200, height: 900 },
    deviceScaleFactor: 2
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto(htmlPath, { waitUntil: 'domcontentloaded' });
  await desktopPage.waitForFunction(() => typeof window.tailwind === 'object');
  await desktopPage.evaluate(() => document.fonts.ready);
  await desktopPage.waitForTimeout(600);

  await desktopPage.screenshot({
    path: path.join(__dirname, 'screenshot-desktop.png'),
    fullPage: true
  });
  console.log('✅ Saved screenshot-desktop.png');
  await desktopContext.close();

  console.log('Capturing Mobile Screenshot...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(htmlPath, { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForFunction(() => typeof window.tailwind === 'object');
  await mobilePage.evaluate(() => document.fonts.ready);
  await mobilePage.waitForTimeout(600);

  await mobilePage.screenshot({
    path: path.join(__dirname, 'screenshot-mobile.png'),
    fullPage: true
  });
  console.log('✅ Saved screenshot-mobile.png');
  await mobileContext.close();

  await browser.close();
  console.log('✅ All screenshots captured successfully!');
})();
