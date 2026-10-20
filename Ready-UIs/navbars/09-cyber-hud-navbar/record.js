const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

function injectCursor(page) {
  return page.evaluate(() => {
    const cursor = document.createElement('div');
    cursor.id = 'virtual-cursor';
    cursor.style.position = 'fixed';
    cursor.style.left = '50%';
    cursor.style.top = '25%';
    cursor.style.width = '24px';
    cursor.style.height = '24px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'rgba(0, 243, 255, 0.45)';
    cursor.style.border = '2px solid rgba(255, 255, 255, 0.9)';
    cursor.style.boxShadow = '0 0 15px rgba(0, 243, 255, 0.8), 0 2px 5px rgba(0,0,0,0.4)';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '999999';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.transition = 'transform 0.14s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s ease';
    document.body.appendChild(cursor);

    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    window.addEventListener('mousedown', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.65)';
      cursor.style.backgroundColor = 'rgba(0, 255, 102, 0.7)';
    });
    window.addEventListener('mouseup', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.backgroundColor = 'rgba(0, 243, 255, 0.45)';
    });
  });
}

(async () => {
  const dir = __dirname;
  const tempDir = path.join(dir, 'temp-record');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir);

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const fileUrl = 'file://' + path.join(dir, 'index.html');

  // ==========================================
  // 1. DESKTOP RECORDING (1200x900)
  // ==========================================
  console.log('--- [09] Recording Desktop Version ---');
  const desktopVideoDir = path.join(tempDir, 'desktop');
  fs.mkdirSync(desktopVideoDir);

  const desktopContext = await browser.newContext({
    viewport: { width: 1200, height: 900 },
    deviceScaleFactor: 2,
    recordVideo: { dir: desktopVideoDir, size: { width: 1200, height: 900 } }
  });

  const dPage = await desktopContext.newPage();
  await dPage.goto(fileUrl, { waitUntil: 'load' });
  await dPage.waitForTimeout(600);

  // Desktop Screenshot (2400x1800 via 2x retina)
  await dPage.screenshot({ path: path.join(dir, 'screenshot-desktop.png') });
  console.log('Saved screenshot-desktop.png');

  await injectCursor(dPage);
  await dPage.mouse.move(600, 300);
  await dPage.waitForTimeout(300);

  // 1. Hover tabs
  const tabs = await dPage.$$('.nav-tab');
  if (tabs.length >= 3) {
    const t1Box = await tabs[1].boundingBox();
    if (t1Box) {
      await dPage.mouse.move(t1Box.x + t1Box.width / 2, t1Box.y + t1Box.height / 2, { steps: 14 });
      await dPage.mouse.down();
      await dPage.waitForTimeout(100);
      await dPage.mouse.up();
      await dPage.waitForTimeout(500);
    }

    const t2Box = await tabs[2].boundingBox();
    if (t2Box) {
      await dPage.mouse.move(t2Box.x + t2Box.width / 2, t2Box.y + t2Box.height / 2, { steps: 14 });
      await dPage.mouse.down();
      await dPage.waitForTimeout(100);
      await dPage.mouse.up();
      await dPage.waitForTimeout(500);
    }
  }

  // 2. Open CRT Terminal
  const termBtn = await dPage.$('#terminalToggleBtn');
  const termBox = await termBtn.boundingBox();
  if (termBox) {
    await dPage.mouse.move(termBox.x + termBox.width / 2, termBox.y + termBox.height / 2, { steps: 14 });
    await dPage.waitForTimeout(200);
    await dPage.mouse.down();
    await dPage.waitForTimeout(100);
    await dPage.mouse.up();
    await dPage.waitForTimeout(700);

    // Type 'status' command if terminal is open
    try {
      await dPage.waitForSelector('#terminalInput', { state: 'visible', timeout: 3000 });
      await dPage.fill('#terminalInput', 'status');
      await dPage.waitForTimeout(400);
      await dPage.keyboard.press('Enter');
      await dPage.waitForTimeout(800);
    } catch (e) {
      console.log('Terminal input skip or error:', e.message);
    }
  }

  // 3. Toggle Theme to Light Mode
  const themeBtn = await dPage.$('#themeToggleBtn');
  const themeBox = await themeBtn.boundingBox();
  if (themeBox) {
    await dPage.mouse.move(themeBox.x + themeBox.width / 2, themeBox.y + themeBox.height / 2, { steps: 14 });
    await dPage.waitForTimeout(200);
    await dPage.mouse.down();
    await dPage.waitForTimeout(100);
    await dPage.mouse.up();
    await dPage.waitForTimeout(700); // Light mode

    // Toggle back to Dark
    await dPage.mouse.down();
    await dPage.waitForTimeout(100);
    await dPage.mouse.up();
    await dPage.waitForTimeout(600);
  }

  // Close terminal
  if (termBox) {
    await dPage.mouse.move(termBox.x + termBox.width / 2, termBox.y + termBox.height / 2, { steps: 12 });
    await dPage.mouse.down();
    await dPage.waitForTimeout(100);
    await dPage.mouse.up();
    await dPage.waitForTimeout(500);
  }

  await dPage.close();
  await desktopContext.close();

  // Convert desktop video
  const dVideos = fs.readdirSync(desktopVideoDir).filter(f => f.endsWith('.webm'));
  if (dVideos.length > 0) {
    execSync(`ffmpeg -y -i "${path.join(desktopVideoDir, dVideos[0])}" -c:v libx264 -pix_fmt yuv420p -r 30 -b:v 2M "${path.join(dir, 'video-desktop.mp4')}"`);
    console.log('Saved video-desktop.mp4');
  }

  // ==========================================
  // 2. MOBILE RECORDING (390x844 iPhone View)
  // ==========================================
  console.log('--- [09] Recording Mobile Version ---');
  const mobileVideoDir = path.join(tempDir, 'mobile');
  fs.mkdirSync(mobileVideoDir);

  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    recordVideo: { dir: mobileVideoDir, size: { width: 390, height: 844 } }
  });

  const mPage = await mobileContext.newPage();
  await mPage.goto(fileUrl, { waitUntil: 'load' });
  await mPage.waitForTimeout(600);

  // Mobile Screenshot
  await mPage.screenshot({ path: path.join(dir, 'screenshot-mobile.png') });
  console.log('Saved screenshot-mobile.png');

  await injectCursor(mPage);
  await mPage.mouse.move(195, 300);
  await mPage.waitForTimeout(400);

  // Tap Hamburger Menu button
  const mMenuBtn = await mPage.$('#mobileMenuBtn');
  const mBox = await mMenuBtn.boundingBox();
  if (mBox) {
    await mPage.mouse.move(mBox.x + mBox.width / 2, mBox.y + mBox.height / 2, { steps: 16 });
    await mPage.waitForTimeout(200);
    await mPage.mouse.down();
    await mPage.waitForTimeout(100);
    await mPage.mouse.up();
    await mPage.waitForTimeout(800); // Mobile sidebar sheet opened
  }

  // Tap close button in sidebar
  const closeBtn = await mPage.$('#closeSidebarBtn');
  const closeBox = closeBtn ? await closeBtn.boundingBox() : null;
  if (closeBox) {
    await mPage.mouse.move(closeBox.x + closeBox.width / 2, closeBox.y + closeBox.height / 2, { steps: 14 });
    await mPage.waitForTimeout(200);
    await mPage.mouse.down();
    await mPage.waitForTimeout(100);
    await mPage.mouse.up();
    await mPage.waitForTimeout(700);
  }

  await mPage.close();
  await mobileContext.close();
  await browser.close();

  // Convert mobile video
  const mVideos = fs.readdirSync(mobileVideoDir).filter(f => f.endsWith('.webm'));
  if (mVideos.length > 0) {
    execSync(`ffmpeg -y -i "${path.join(mobileVideoDir, mVideos[0])}" -c:v libx264 -pix_fmt yuv420p -r 30 -b:v 2M "${path.join(dir, 'video-mobile.mp4')}"`);
    console.log('Saved video-mobile.mp4');
  }

  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log('09 Desktop & Mobile assets recorded successfully!');
})();
