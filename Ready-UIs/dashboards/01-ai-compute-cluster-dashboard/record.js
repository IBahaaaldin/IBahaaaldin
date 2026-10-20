const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

(async () => {
  const dir = __dirname;
  const fileUrl = 'file://' + path.join(dir, 'index.html');
  const tempDir = path.join(dir, '.temp_record');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
    args: ['--enable-webgl', '--use-gl=angle', '--use-angle=metal']
  });

  const injectCursor = async (page) => {
    await page.addStyleTag({
      content: `
        .custom-cursor {
          position: fixed;
          top: 0; left: 0;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.45);
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 0 16px rgba(6, 182, 212, 0.8), 0 0 24px rgba(99, 102, 241, 0.5);
          pointer-events: none;
          z-index: 999999;
          transform: translate(-50%, -50%);
          transition: transform 0.08s ease;
        }
        .custom-cursor.clicking {
          transform: translate(-50%, -50%) scale(0.75);
          background: rgba(99, 102, 241, 0.9);
        }
      `
    });
    await page.evaluate(() => {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);
      window.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
      window.addEventListener('mousedown', () => cursor.classList.add('clicking'));
      window.addEventListener('mouseup', () => cursor.classList.remove('clicking'));
    });
  };

  // ==========================================
  // 1. DESKTOP RECORDING (1200x900)
  // ==========================================
  console.log('--- [Dashboard 01] Recording Desktop Version ---');
  const desktopVideoDir = path.join(tempDir, 'desktop');
  fs.mkdirSync(desktopVideoDir);

  const desktopContext = await browser.newContext({
    viewport: { width: 1200, height: 900 },
    deviceScaleFactor: 2,
    recordVideo: { dir: desktopVideoDir, size: { width: 1200, height: 900 } }
  });

  const dPage = await desktopContext.newPage();
  await dPage.goto(fileUrl, { waitUntil: 'domcontentloaded' });
  await dPage.waitForTimeout(1000);

  // Take Desktop Screenshot (2400x1800 @ 2x)
  await dPage.screenshot({ path: path.join(dir, 'screenshot-desktop.png') });
  console.log('Saved screenshot-desktop.png (2400x1800)');

  await injectCursor(dPage);
  await dPage.mouse.move(600, 450);
  await dPage.waitForTimeout(300);

  // Hover over Key Metric Cards (Card 1, 2, 3)
  await dPage.mouse.move(300, 150, { steps: 12 });
  await dPage.waitForTimeout(350);
  await dPage.mouse.move(600, 150, { steps: 12 });
  await dPage.waitForTimeout(350);
  await dPage.mouse.move(900, 150, { steps: 12 });
  await dPage.waitForTimeout(350);

  // Hover across Node Topology Matrix
  const nodeCards = await dPage.$$('.node-card');
  for (let i = 0; i < Math.min(4, nodeCards.length); i++) {
    const box = await nodeCards[i].boundingBox();
    if (box) {
      await dPage.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 10 });
      await dPage.waitForTimeout(180);
    }
  }

  // Click Sync / Refresh Cluster Button
  const refreshBtn = await dPage.$('#refreshClusterBtn');
  if (refreshBtn) {
    const rBox = await refreshBtn.boundingBox();
    if (rBox) {
      await dPage.mouse.move(rBox.x + rBox.width / 2, rBox.y + rBox.height / 2, { steps: 12 });
      await dPage.waitForTimeout(200);
      await dPage.mouse.down();
      await dPage.waitForTimeout(100);
      await dPage.mouse.up();
      await dPage.waitForTimeout(500);
    }
  }

  // Drag Cluster Auto-Scaling Slider
  const slider = await dPage.$('#scaleSlider');
  if (slider) {
    const sBox = await slider.boundingBox();
    if (sBox) {
      await dPage.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2, { steps: 12 });
      await dPage.mouse.down();
      await dPage.mouse.move(sBox.x + sBox.width * 0.85, sBox.y + sBox.height / 2, { steps: 16 });
      await dPage.mouse.up();
      await dPage.waitForTimeout(400);
    }
  }

  // Click Copy API Key
  const copyBtn = await dPage.$('#copyApiKeyBtn');
  if (copyBtn) {
    const cBox = await copyBtn.boundingBox();
    if (cBox) {
      await dPage.mouse.move(cBox.x + cBox.width / 2, cBox.y + cBox.height / 2, { steps: 12 });
      await dPage.waitForTimeout(200);
      await dPage.mouse.down();
      await dPage.waitForTimeout(100);
      await dPage.mouse.up();
      await dPage.waitForTimeout(1000); // Display "Copied! ✨"
    }
  }

  // Toggle Theme (Switch to Light Mode)
  const themeBtn = await dPage.$('#themeToggleBtn');
  if (themeBtn) {
    const tBox = await themeBtn.boundingBox();
    if (tBox) {
      await dPage.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 12 });
      await dPage.waitForTimeout(200);
      await dPage.mouse.down();
      await dPage.waitForTimeout(100);
      await dPage.mouse.up();
      await dPage.waitForTimeout(800); // Admire light mode
    }
  }

  // Switch back to Dark Mode
  if (themeBtn) {
    const tBox = await themeBtn.boundingBox();
    if (tBox) {
      await dPage.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10 });
      await dPage.mouse.down();
      await dPage.waitForTimeout(100);
      await dPage.mouse.up();
      await dPage.waitForTimeout(600);
    }
  }

  await dPage.close();
  await desktopContext.close();

  // Convert desktop video
  const dVideos = fs.readdirSync(desktopVideoDir).filter(f => f.endsWith('.webm'));
  if (dVideos.length > 0) {
    execSync(`ffmpeg -y -i "${path.join(desktopVideoDir, dVideos[0])}" -c:v libx264 -pix_fmt yuv420p -r 30 -b:v 3M "${path.join(dir, 'video-desktop.mp4')}"`);
    console.log('Saved video-desktop.mp4 (1200x900 @ 30fps)');
  }

  // ==========================================
  // 2. MOBILE RECORDING (390x844)
  // ==========================================
  console.log('--- [Dashboard 01] Recording Mobile Version ---');
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
  await mPage.goto(fileUrl, { waitUntil: 'commit' });
  await mPage.waitForSelector('#mobileMenuOpenBtn', { timeout: 10000 });
  await mPage.waitForTimeout(800);

  // Take Mobile Screenshot (780x1688 @ 2x)
  await mPage.screenshot({ path: path.join(dir, 'screenshot-mobile.png') });
  console.log('Saved screenshot-mobile.png (780x1688)');

  await injectCursor(mPage);
  await mPage.mouse.move(195, 200);
  await mPage.waitForTimeout(300);

  // Scroll slightly down on mobile to view topology & metrics
  await mPage.evaluate(() => window.scrollBy({ top: 180, behavior: 'smooth' }));
  await mPage.waitForTimeout(500);

  // Open Mobile Slide-in Sidebar Sheet
  const mMenuBtn = await mPage.$('#mobileMenuOpenBtn');
  if (mMenuBtn) {
    const box = await mMenuBtn.boundingBox();
    if (box) {
      await mPage.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 12 });
      await mPage.waitForTimeout(200);
      await mPage.mouse.down();
      await mPage.waitForTimeout(100);
      await mPage.mouse.up();
      await mPage.waitForTimeout(800); // Sidebar opened
    }
  }

  // Close Mobile Sidebar Sheet
  const mCloseBtn = await mPage.$('#mobileMenuCloseBtn');
  if (mCloseBtn) {
    const cBox = await mCloseBtn.boundingBox();
    if (cBox) {
      await mPage.mouse.move(cBox.x + cBox.width / 2, cBox.y + cBox.height / 2, { steps: 12 });
      await mPage.waitForTimeout(150);
      await mPage.mouse.down();
      await mPage.waitForTimeout(100);
      await mPage.mouse.up();
      await mPage.waitForTimeout(600);
    }
  }

  await mPage.close();
  await mobileContext.close();
  await browser.close();

  // Convert mobile video
  const mVideos = fs.readdirSync(mobileVideoDir).filter(f => f.endsWith('.webm'));
  if (mVideos.length > 0) {
    execSync(`ffmpeg -y -i "${path.join(mobileVideoDir, mVideos[0])}" -c:v libx264 -pix_fmt yuv420p -r 30 -b:v 2M "${path.join(dir, 'video-mobile.mp4')}"`);
    console.log('Saved video-mobile.mp4 (390x844 @ 30fps)');
  }

  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log('✅ Dashboard 01 Desktop & Mobile assets recorded successfully!');
})();
