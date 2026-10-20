const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const items = [
  {
    id: '01',
    folder: '01-ai-compute-cluster-dashboard',
    repo: 'dashboard-ai-compute-cluster',
    title: 'AI Compute & Cluster Dashboard',
    tagline: 'Ultra-low latency GPU cluster telemetry with live node topology & streaming token throughput',
    badge: 'DASHBOARD #01',
    episode: 'REEL 13',
    accentColor: '#06b6d4',
    accentGradient: 'from-cyan-400 via-indigo-500 to-purple-600',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.35) 0%, rgba(99, 102, 241, 0.18) 45%, transparent 75%)',
    tags: ['Tailwind CSS', '8x H100 GPU Matrix', 'Live Tok/s Sparkline', 'Auto-Scale Pods', 'Dark / Light']
  }
];

function buildWidescreenHtml(item, screenshotBase64) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    body {
      width: 1280px;
      height: 640px;
      margin: 0;
      padding: 0;
      background-color: #06070a;
      overflow: hidden;
      position: relative;
    }
    .bg-mesh {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
      background-size: 36px 36px;
    }
    .ambient-glow {
      position: absolute;
      inset: 0;
      background: ${item.glowGradient};
      pointer-events: none;
    }
    .mockup-window {
      background: rgba(14, 18, 27, 0.88);
      border: 1px solid rgba(6, 182, 212, 0.3);
      box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.95), 0 0 30px -5px rgba(6, 182, 212, 0.2);
      border-radius: 14px;
      overflow: hidden;
    }
  </style>
</head>
<body class="flex flex-col justify-between p-8 text-white relative">
  <div class="bg-mesh"></div>
  <div class="ambient-glow"></div>

  <!-- TOP HEADER -->
  <header class="relative z-10 flex items-center justify-between w-full">
    <div class="flex items-center gap-3">
      <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        ${item.badge}
      </span>
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5 text-[11px] font-mono text-neutral-400">
        READY-UIS DASHBOARDS
      </span>
    </div>

    <div class="flex items-center gap-2.5">
      <span class="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-medium text-neutral-300 backdrop-blur-md">
        @ibahaaaldincoding
      </span>
    </div>
  </header>

  <!-- CENTER HERO & COMPONENT SHOWCASE -->
  <main class="relative z-10 grid grid-cols-12 gap-8 items-center my-auto w-full px-2">
    <!-- Left Column: Typography & Tags -->
    <div class="col-span-5 flex flex-col justify-center text-left space-y-3.5">
      <div class="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
        Telemetry OS & Infrastructure
      </div>
      <h1 class="text-3xl font-extrabold tracking-tight text-white leading-snug">
        ${item.title}
      </h1>
      <p class="text-neutral-400 font-medium text-xs leading-relaxed max-w-sm">
        ${item.tagline}
      </p>

      <!-- Feature Badges -->
      <div class="flex flex-wrap gap-1.5 pt-2">
        ${item.tags.map(tag => `
          <span class="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono text-neutral-300 backdrop-blur-sm">
            ${tag}
          </span>
        `).join('')}
      </div>
    </div>

    <!-- Right Column: High-Res Scaled macOS Mockup Window -->
    <div class="col-span-7 flex justify-end">
      <div class="mockup-window w-[660px] shadow-2xl">
        <!-- Window Bar -->
        <div class="px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span class="font-mono text-[11px] text-neutral-400">cluster.ready-ui.internal</span>
          <span class="w-8"></span>
        </div>
        <!-- Embedded Preview -->
        <div class="w-full h-[320px] overflow-hidden bg-slate-950">
          <img src="data:image/png;base64,${screenshotBase64}" class="w-full h-auto object-cover object-top" alt="Dashboard Preview" />
        </div>
      </div>
    </div>
  </main>

  <!-- BOTTOM FOOTER -->
  <footer class="relative z-10 flex items-center justify-between w-full pt-3 border-t border-white/[0.08] text-xs text-neutral-400">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-cyan-500"></span>
      <span class="font-medium text-neutral-300">Free Open-Source Component</span>
      <span class="text-neutral-600">•</span>
      <span class="font-mono text-[11px] text-neutral-400">github.com/IBahaaaldin/${item.repo}</span>
    </div>

    <div class="flex items-center gap-2 font-mono text-[11px] text-neutral-300">
      <span>HTML5 + Tailwind CSS</span>
    </div>
  </footer>
</body>
</html>`;
}

function buildSquareHtml(item, screenshotBase64) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    body {
      width: 1080px;
      height: 1080px;
      margin: 0;
      padding: 0;
      background-color: #06070a;
      overflow: hidden;
      position: relative;
    }
    .bg-mesh {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
      background-size: 36px 36px;
    }
    .ambient-glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.35) 0%, rgba(99, 102, 241, 0.18) 50%, transparent 75%);
      pointer-events: none;
    }
    .mockup-window {
      background: rgba(14, 18, 27, 0.92);
      border: 1px solid rgba(6, 182, 212, 0.3);
      box-shadow: 0 35px 90px -20px rgba(0, 0, 0, 0.95), 0 0 30px -5px rgba(6, 182, 212, 0.25);
      border-radius: 16px;
      overflow: hidden;
    }
  </style>
</head>
<body class="flex flex-col justify-between p-12 text-white relative">
  <div class="bg-mesh"></div>
  <div class="ambient-glow"></div>

  <!-- TOP HEADER -->
  <header class="relative z-10 flex items-center justify-between w-full">
    <div class="flex items-center gap-3">
      <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
        <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
        ${item.badge}
      </span>
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5 text-xs font-mono text-neutral-400">
        READY-UIS
      </span>
    </div>

    <div class="flex items-center gap-2.5">
      <span class="px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-medium text-neutral-300 backdrop-blur-md">
        @ibahaaaldincoding
      </span>
    </div>
  </header>

  <!-- CENTER HERO & COMPONENT SHOWCASE -->
  <main class="relative z-10 flex flex-col items-center justify-center my-auto text-center w-full max-w-4xl mx-auto py-2">
    <!-- Title & Tagline -->
    <div class="flex flex-col items-center mb-6">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
        8x H100 GPU Cluster Telemetry
      </div>
      <h1 class="text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
        ${item.title}
      </h1>
      <p class="text-neutral-400 font-medium text-base max-w-lg">
        ${item.tagline}
      </p>
    </div>

    <!-- Scaled macOS Window Mockup -->
    <div class="w-full flex items-center justify-center my-2">
      <div class="mockup-window w-[920px] shadow-2xl">
        <div class="px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span class="font-mono text-xs text-neutral-400">cluster.ready-ui.internal</span>
          <span class="w-8"></span>
        </div>
        <div class="w-full h-[470px] overflow-hidden bg-slate-950">
          <img src="data:image/png;base64,${screenshotBase64}" class="w-full h-auto object-cover object-top" alt="Dashboard Preview" />
        </div>
      </div>
    </div>

    <!-- Feature Pills -->
    <div class="flex flex-wrap items-center justify-center gap-2 mt-6">
      ${item.tags.map(tag => `
        <span class="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono text-neutral-200 backdrop-blur-sm">
          ${tag}
        </span>
      `).join('')}
    </div>
  </main>

  <!-- BOTTOM FOOTER -->
  <footer class="relative z-10 flex items-center justify-between w-full pt-4 border-t border-white/[0.08] text-xs text-neutral-400">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
      <span class="font-medium text-neutral-300">Free Open-Source Component</span>
      <span class="text-neutral-600">•</span>
      <span class="font-mono text-[11px] text-neutral-400">github.com/IBahaaaldin/${item.repo}</span>
    </div>

    <div class="flex items-center gap-2 font-mono text-[11px] text-neutral-300">
      <span>Swipe for Video Demo ➡️</span>
    </div>
  </footer>
</body>
</html>`;
}

function buildReelHtml(item, screenshotBase64) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    body {
      width: 1080px;
      height: 1920px;
      margin: 0;
      padding: 0;
      background-color: #06070a;
      overflow: hidden;
      position: relative;
    }
    .bg-mesh {
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
      background-size: 40px 40px;
    }
    .ambient-glow-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 900px;
      height: 900px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(99, 102, 241, 0.2) 45%, transparent 75%);
      pointer-events: none;
      filter: blur(40px);
    }
    .ambient-glow-top {
      position: absolute;
      top: -150px;
      left: 50%;
      transform: translateX(-50%);
      width: 800px;
      height: 500px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%);
      pointer-events: none;
      filter: blur(60px);
    }
    .safe-zone-box {
      /* Exactly 1080 x 1080 in the vertical center of 1920 (from y=420 to y=1500) */
      position: absolute;
      top: 420px;
      left: 0;
      width: 1080px;
      height: 1080px;
    }
    .mockup-window {
      background: rgba(14, 18, 27, 0.95);
      border: 1px solid rgba(6, 182, 212, 0.35);
      box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.95), 0 0 35px -5px rgba(6, 182, 212, 0.3);
      border-radius: 18px;
      overflow: hidden;
    }
  </style>
</head>
<body class="text-white relative flex flex-col justify-between">
  <div class="bg-mesh"></div>
  <div class="ambient-glow-top"></div>
  <div class="ambient-glow-center"></div>

  <!-- TOP HEADER REGION (y: 0 to 420) -->
  <header class="relative z-10 w-full px-16 pt-24 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold tracking-wider text-white backdrop-blur-md flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>${item.episode}</span>
      </div>
      <div class="px-4 py-2 rounded-full bg-white/[0.04] border border-white/5 text-xs font-mono font-medium text-neutral-400">
        READY-UIS DASHBOARDS
      </div>
    </div>

    <div class="flex items-center gap-3">
      <div class="px-5 py-2 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-bold tracking-tight text-neutral-200 backdrop-blur-md shadow-lg">
        @ibahaaaldincoding
      </div>
    </div>
  </header>

  <!-- 1:1 SQUARE INSTAGRAM FEED SAFE ZONE (y: 420 to 1500) -->
  <div class="safe-zone-box z-10 flex flex-col items-center justify-between px-12 py-10 text-center">
    <!-- Top of Safe Zone: Badge & Headline -->
    <div class="flex flex-col items-center w-full mt-2">
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.08] border border-white/15 text-xs font-mono font-bold tracking-widest uppercase text-white shadow-xl backdrop-blur-md mb-4">
        <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4]"></span>
        <span>${item.badge}</span>
      </div>

      <h1 class="text-5xl font-black tracking-tight text-white mb-3 leading-[1.1] max-w-2xl">
        ${item.title}
      </h1>

      <p class="text-neutral-400 font-medium text-base max-w-xl leading-relaxed">
        ${item.tagline}
      </p>
    </div>

    <!-- Center of Safe Zone: Mockup Window -->
    <div class="w-full flex items-center justify-center my-3">
      <div class="mockup-window w-[940px] shadow-2xl">
        <div class="px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span class="font-mono text-xs text-neutral-400">cluster.ready-ui.internal</span>
          <span class="w-8"></span>
        </div>
        <div class="w-full h-[460px] overflow-hidden bg-slate-950">
          <img src="data:image/png;base64,${screenshotBase64}" class="w-full h-auto object-cover object-top" alt="Dashboard Preview" />
        </div>
      </div>
    </div>

    <!-- Bottom of Safe Zone: Feature Pills & Watch Reel CTA -->
    <div class="flex flex-col items-center w-full mb-2">
      <div class="flex flex-wrap items-center justify-center gap-2 mb-5 max-w-xl">
        ${item.tags.map(tag => `
          <span class="px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold text-neutral-200 backdrop-blur-md">
            ${tag}
          </span>
        `).join('')}
      </div>

      <div class="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r ${item.accentGradient} text-white text-xs font-mono font-bold tracking-wider uppercase shadow-2xl shadow-cyan-500/30">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        <span>Watch Full Interaction Reel</span>
      </div>
    </div>
  </div>

  <!-- BOTTOM FOOTER REGION (y: 1500 to 1920) -->
  <footer class="relative z-10 w-full px-16 pb-24 flex flex-col items-center gap-4 text-center">
    <div class="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-2"></div>
    
    <div class="flex items-center justify-between w-full max-w-2xl text-neutral-400 text-xs">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
        <span class="font-medium text-neutral-300">Free Open-Source Code</span>
      </div>
      <div class="font-mono text-neutral-300">
        github.com/IBahaaaldin/${item.repo}
      </div>
    </div>

    <div class="flex items-center gap-2 text-[11px] font-mono text-neutral-500 pt-1">
      <span>Built with Tailwind CSS & Vanilla JS</span>
    </div>
  </footer>
</body>
</html>`;
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const baseDir = path.join(__dirname, '..', 'dashboards');

  for (const item of items) {
    const itemDir = path.join(baseDir, item.folder);
    console.log(`Generating covers for ${item.title}...`);

    const screenshotPath = path.join(itemDir, 'screenshot-desktop.png');
    const screenshotBase64 = fs.readFileSync(screenshotPath).toString('base64');

    // 1. Desktop / GitHub Widescreen Cover (1280x640 @ 2x -> 2560x1280)
    const contextWidescreen = await browser.newContext({
      viewport: { width: 1280, height: 640 },
      deviceScaleFactor: 2
    });
    const pageWidescreen = await contextWidescreen.newPage();
    const htmlWidescreen = buildWidescreenHtml(item, screenshotBase64);
    const tempWidescreen = path.join('/tmp', `cover-wide-${item.id}.html`);
    fs.writeFileSync(tempWidescreen, htmlWidescreen, 'utf8');

    await pageWidescreen.goto('file://' + tempWidescreen, { waitUntil: 'domcontentloaded' });
    await pageWidescreen.waitForFunction(() => typeof window.tailwind === 'object');
    await pageWidescreen.evaluate(() => document.fonts.ready);
    await pageWidescreen.waitForTimeout(600);

    const coverPath = path.join(itemDir, 'cover.png');
    await pageWidescreen.screenshot({ path: coverPath });
    console.log(`Saved: ${coverPath}`);
    if (fs.existsSync(tempWidescreen)) fs.unlinkSync(tempWidescreen);
    await pageWidescreen.close();
    await contextWidescreen.close();

    // 2. Instagram Square Cover (1080x1080 @ 2x -> 2160x2160)
    const contextSquare = await browser.newContext({
      viewport: { width: 1080, height: 1080 },
      deviceScaleFactor: 2
    });
    const pageSquare = await contextSquare.newPage();
    const htmlSquare = buildSquareHtml(item, screenshotBase64);
    const tempSquare = path.join('/tmp', `cover-square-${item.id}.html`);
    fs.writeFileSync(tempSquare, htmlSquare, 'utf8');

    await pageSquare.goto('file://' + tempSquare, { waitUntil: 'domcontentloaded' });
    await pageSquare.waitForFunction(() => typeof window.tailwind === 'object');
    await pageSquare.evaluate(() => document.fonts.ready);
    await pageSquare.waitForTimeout(600);

    const coverInstaPath = path.join(itemDir, 'cover-instagram.png');
    await pageSquare.screenshot({ path: coverInstaPath });
    console.log(`Saved: ${coverInstaPath}`);
    if (fs.existsSync(tempSquare)) fs.unlinkSync(tempSquare);
    await pageSquare.close();
    await contextSquare.close();

    // 3. Instagram Reel Vertical Cover (1080x1920 @ 2x -> 2160x3840)
    const contextReel = await browser.newContext({
      viewport: { width: 1080, height: 1920 },
      deviceScaleFactor: 2
    });
    const pageReel = await contextReel.newPage();
    const htmlReel = buildReelHtml(item, screenshotBase64);
    const tempReel = path.join('/tmp', `cover-reel-${item.id}.html`);
    fs.writeFileSync(tempReel, htmlReel, 'utf8');

    await pageReel.goto('file://' + tempReel, { waitUntil: 'domcontentloaded' });
    await pageReel.waitForFunction(() => typeof window.tailwind === 'object');
    await pageReel.evaluate(() => document.fonts.ready);
    await pageReel.waitForTimeout(600);

    const coverReelPath = path.join(itemDir, 'cover-reel.png');
    await pageReel.screenshot({ path: coverReelPath });
    console.log(`Saved: ${coverReelPath}`);
    if (fs.existsSync(tempReel)) fs.unlinkSync(tempReel);
    await pageReel.close();
    await contextReel.close();
  }

  await browser.close();
  console.log('✅ All 3 Dashboard covers generated successfully!');
})();
