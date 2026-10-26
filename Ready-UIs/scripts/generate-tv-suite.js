const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const item = {
  id: '01',
  category: 'Apple TV OS & Debloat Engine',
  badge: 'TV-OS #01',
  title: 'Clean TV OS — Apple TV Launcher & Debloat Suite',
  tagline: 'Transform any laggy Android TV into a blazing-fast Apple TV interface with frosted glass dock, Quranic Athkar, UAE & Hijri clocks, and ambient glow',
  domain: 'cleantv.ready-ui.internal',
  repo: 'apple-tv-os-launcher',
  accentColor: '#d4af37',
  pulseColor: 'bg-amber-400',
  dotColor: 'bg-amber-500',
  borderColor: 'rgba(212, 175, 55, 0.35)',
  shadowColor: 'rgba(212, 175, 55, 0.25)',
  categoryBadgeClass: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  glowGradient: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.32) 0%, rgba(139, 90, 0, 0.18) 45%, transparent 75%)',
  tags: ['Apple tvOS Glass', 'Quranic Athkar', 'UAE Time & Hijri', 'AdGuard Private DNS', 'Zero Bloat', 'Instant 0.5x Scale']
};

const projectDir = '/Users/bahaam/Desktop/Bahaa-Coding/Projects/Ready-UIs/tv-launchers/01-apple-tv-os-launcher';
const socialDir = '/Users/bahaam/Desktop/Bahaa-Coding/Projects/Ready-UIs/social-posts/Post-TV-01-Apple-TV-OS-Launcher';

const homeShotPath = '/Users/bahaam/Desktop/TV/shots/21-home-screen.png';
const ssShotPath = '/Users/bahaam/Desktop/TV/shots/20-screensaver-preview.png';
const beforeShotPath = '/Users/bahaam/Desktop/TV/shots/00-baseline.png';

const homeBase64 = fs.readFileSync(homeShotPath).toString('base64');
const ssBase64 = fs.readFileSync(ssShotPath).toString('base64');
const beforeBase64 = fs.readFileSync(beforeShotPath).toString('base64');

function buildWidescreenHtml(screenshotBase64) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@500;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-arabic { font-family: 'Noto Naskh Arabic', sans-serif; }
    body {
      width: 1280px;
      height: 640px;
      margin: 0;
      padding: 0;
      background-color: #050608;
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
    .tv-mockup {
      background: #000000;
      border: 1px solid ${item.borderColor};
      box-shadow: 0 35px 80px -20px rgba(0, 0, 0, 0.95), 0 0 35px -5px ${item.shadowColor};
      border-radius: 14px;
      overflow: hidden;
    }
  </style>
</head>
<body class="flex flex-col justify-between p-8 text-white relative">
  <div class="bg-mesh"></div>
  <div class="ambient-glow"></div>

  <!-- HEADER -->
  <header class="relative z-10 flex items-center justify-between w-full">
    <div class="flex items-center gap-3">
      <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
        <span class="w-2 h-2 rounded-full ${item.pulseColor} animate-pulse"></span>
        ${item.badge}
      </span>
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5 text-[11px] font-mono text-neutral-400">
        READY-UIS TV-OS
      </span>
    </div>

    <div class="flex items-center gap-2.5">
      <span class="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-medium text-neutral-300 backdrop-blur-md">
        @ibahaaaldincoding
      </span>
    </div>
  </header>

  <!-- CENTER CONTENT -->
  <main class="relative z-10 grid grid-cols-12 gap-8 items-center my-auto w-full px-2">
    <!-- Left Column: Typography & Tags -->
    <div class="col-span-5 flex flex-col justify-center text-left space-y-3">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full ${item.categoryBadgeClass} border font-mono text-xs font-semibold uppercase tracking-wider w-fit">
        <span class="w-1.5 h-1.5 rounded-full ${item.dotColor}"></span>
        ${item.category}
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

    <!-- Right Column: TV Mockup Frame -->
    <div class="col-span-7 flex justify-end">
      <div class="tv-mockup w-[660px]">
        <div class="px-4 py-2 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
            <span>4K HDR • Hisense Smart Display • Allwinner H_BOX</span>
          </div>
          <span class="text-amber-400/90 font-arabic">﴿ أَلَا بِذِكْرِ اللَّهِ ﴾</span>
        </div>
        <div class="w-full h-[320px] overflow-hidden bg-black flex items-center justify-center">
          <img src="data:image/png;base64,${screenshotBase64}" class="w-full h-auto object-cover" alt="TV OS Preview" />
        </div>
      </div>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="relative z-10 flex items-center justify-between w-full pt-3 border-t border-white/[0.08] text-xs text-neutral-400">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full ${item.dotColor}"></span>
      <span class="font-medium text-neutral-300">Open-Source TV OS Transformation</span>
      <span class="text-neutral-600">•</span>
      <span class="font-mono text-[11px] text-neutral-400">github.com/IBahaaaldin/${item.repo}</span>
    </div>

    <div class="flex items-center gap-2 font-mono text-[11px] text-neutral-300">
      <span>Android 10+ • Pure Java • Zero Bloat</span>
    </div>
  </footer>
</body>
</html>`;
}

function buildSquareHtml(screenshotBase64) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@500;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-arabic { font-family: 'Noto Naskh Arabic', sans-serif; }
    body {
      width: 1080px;
      height: 1080px;
      margin: 0;
      padding: 0;
      background-color: #050608;
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
    .tv-mockup {
      background: #000000;
      border: 1px solid ${item.borderColor};
      box-shadow: 0 40px 90px -20px rgba(0, 0, 0, 0.95), 0 0 40px -5px ${item.shadowColor};
      border-radius: 18px;
      overflow: hidden;
    }
  </style>
</head>
<body class="flex flex-col justify-between p-12 text-white relative">
  <div class="bg-mesh"></div>
  <div class="ambient-glow"></div>

  <!-- HEADER -->
  <header class="relative z-10 flex items-center justify-between w-full">
    <div class="flex items-center gap-3">
      <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
        <span class="w-2.5 h-2.5 rounded-full ${item.pulseColor} animate-pulse"></span>
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

  <!-- CENTER CONTENT -->
  <main class="relative z-10 flex flex-col items-center justify-center my-auto text-center w-full max-w-4xl mx-auto py-2">
    <!-- Title & Tagline -->
    <div class="flex flex-col items-center mb-6">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${item.categoryBadgeClass} border text-xs font-mono font-bold uppercase tracking-wider mb-3">
        ${item.category}
      </div>
      <h1 class="text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
        ${item.title}
      </h1>
      <p class="text-neutral-400 font-medium text-base max-w-xl">
        ${item.tagline}
      </p>
    </div>

    <!-- Scaled TV Mockup Window -->
    <div class="w-full flex items-center justify-center my-2">
      <div class="tv-mockup w-[920px]">
        <div class="px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
            <span>4K Smart Display • Apple tvOS Glass Dock • Hisense TV</span>
          </div>
          <span class="text-amber-400/90 font-arabic text-sm">﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾</span>
        </div>
        <div class="w-full h-[470px] overflow-hidden bg-black flex items-center justify-center">
          <img src="data:image/png;base64,${screenshotBase64}" class="w-full h-auto object-cover" alt="TV OS Preview" />
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

  <!-- FOOTER -->
  <footer class="relative z-10 flex items-center justify-between w-full pt-4 border-t border-white/[0.08] text-xs text-neutral-400">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full ${item.dotColor}"></span>
      <span class="font-medium text-neutral-300">Open-Source TV OS Suite</span>
      <span class="text-neutral-600">•</span>
      <span class="font-mono text-[11px] text-neutral-400">github.com/IBahaaaldin/${item.repo}</span>
    </div>

    <div class="flex items-center gap-2 font-mono text-[11px] text-neutral-300">
      <span>Android TV • Allwinner • Google TV</span>
    </div>
  </footer>
</body>
</html>`;
}

function buildReelHtml(screenshotBase64) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@500;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-arabic { font-family: 'Noto Naskh Arabic', sans-serif; }
    body {
      width: 1080px;
      height: 1920px;
      margin: 0;
      padding: 0;
      background-color: #050608;
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
      background: ${item.glowGradient};
      pointer-events: none;
      filter: blur(40px);
    }
    .tv-mockup {
      background: #000000;
      border: 1px solid ${item.borderColor};
      box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.95), 0 0 50px -5px ${item.shadowColor};
      border-radius: 20px;
      overflow: hidden;
    }
  </style>
</head>
<body class="flex flex-col justify-between p-16 text-white relative">
  <div class="bg-mesh"></div>
  <div class="ambient-glow-center"></div>

  <!-- TOP HEADER -->
  <header class="relative z-10 flex items-center justify-between w-full">
    <div class="flex items-center gap-3">
      <span class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/10 text-sm font-mono font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
        <span class="w-3 h-3 rounded-full ${item.pulseColor} animate-pulse"></span>
        ${item.badge}
      </span>
      <span class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/5 text-xs font-mono text-neutral-400">
        READY-UIS REELS
      </span>
    </div>

    <div class="flex items-center gap-2.5">
      <span class="px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/10 text-sm font-mono font-semibold text-neutral-200 backdrop-blur-md">
        @ibahaaaldincoding
      </span>
    </div>
  </header>

  <!-- CENTER CONTENT -->
  <main class="relative z-10 flex flex-col items-center justify-center my-auto text-center w-full max-w-3xl mx-auto space-y-8">
    <div class="flex flex-col items-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full ${item.categoryBadgeClass} border text-xs font-mono font-bold uppercase tracking-wider mb-4">
        ${item.category}
      </div>
      <h1 class="text-5xl font-black tracking-tight text-white mb-4 leading-tight">
        ${item.title}
      </h1>
      <p class="text-neutral-300 font-medium text-lg max-w-xl">
        ${item.tagline}
      </p>
    </div>

    <!-- Scaled TV Mockup -->
    <div class="tv-mockup w-full">
      <div class="px-5 py-3 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
          <span>Apple TV Launcher • Clean TV OS</span>
        </div>
        <span class="text-amber-400 font-arabic text-sm">﴿ أَلَا بِذِكْرِ اللَّهِ ﴾</span>
      </div>
      <div class="w-full h-[520px] overflow-hidden bg-black flex items-center justify-center">
        <img src="data:image/png;base64,${screenshotBase64}" class="w-full h-auto object-cover" alt="TV Preview" />
      </div>
    </div>

    <!-- 3 Core Highlight Cards -->
    <div class="grid grid-cols-3 gap-3 w-full">
      <div class="p-4 rounded-xl bg-white/[0.05] border border-white/10 text-left backdrop-blur-sm">
        <div class="text-amber-400 text-lg mb-1">⚡ 0.5x Scale</div>
        <div class="text-xs text-neutral-300 font-medium">Instant UI speed with zero frame drops</div>
      </div>
      <div class="p-4 rounded-xl bg-white/[0.05] border border-white/10 text-left backdrop-blur-sm">
        <div class="text-amber-400 text-lg mb-1">🛡️ AdGuard DNS</div>
        <div class="text-xs text-neutral-300 font-medium">System-wide ad & tracking blocker</div>
      </div>
      <div class="p-4 rounded-xl bg-white/[0.05] border border-white/10 text-left backdrop-blur-sm">
        <div class="text-amber-400 text-lg mb-1 font-arabic">✨ أذكار & هجري</div>
        <div class="text-xs text-neutral-300 font-medium font-arabic">أذكار دقيقة وتوقيت إماراتي وهجري</div>
      </div>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="relative z-10 flex items-center justify-between w-full pt-6 border-t border-white/[0.08] text-sm text-neutral-400">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full ${item.dotColor}"></span>
      <span class="font-medium text-neutral-300">github.com/IBahaaaldin/${item.repo}</span>
    </div>

    <div class="flex items-center gap-2 font-mono text-xs text-neutral-300">
      <span>Follow for daily dev builds 🔥</span>
    </div>
  </footer>
</body>
</html>`;
}

function buildSlideMockupHtml(title, subtitle, screenshotBase64, badgeText, callouts) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@500;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-arabic { font-family: 'Noto Naskh Arabic', sans-serif; }
    body {
      width: 1080px;
      height: 1080px;
      margin: 0;
      padding: 0;
      background-color: #050608;
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
    .tv-mockup {
      background: #000000;
      border: 1px solid ${item.borderColor};
      box-shadow: 0 40px 90px -20px rgba(0, 0, 0, 0.95), 0 0 40px -5px ${item.shadowColor};
      border-radius: 18px;
      overflow: hidden;
    }
  </style>
</head>
<body class="flex flex-col justify-between p-12 text-white relative">
  <div class="bg-mesh"></div>
  <div class="ambient-glow"></div>

  <!-- HEADER -->
  <header class="relative z-10 flex items-center justify-between w-full">
    <div class="flex items-center gap-3">
      <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
        <span class="w-2.5 h-2.5 rounded-full ${item.pulseColor} animate-pulse"></span>
        ${badgeText}
      </span>
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5 text-xs font-mono text-neutral-400">
        CLEAN TV OS
      </span>
    </div>

    <div class="flex items-center gap-2.5">
      <span class="px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-medium text-neutral-300 backdrop-blur-md">
        @ibahaaaldincoding
      </span>
    </div>
  </header>

  <!-- CENTER CONTENT -->
  <main class="relative z-10 flex flex-col items-center justify-center my-auto text-center w-full max-w-4xl mx-auto py-2">
    <div class="flex flex-col items-center mb-5">
      <h1 class="text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
        ${title}
      </h1>
      <p class="text-neutral-400 font-medium text-base max-w-xl">
        ${subtitle}
      </p>
    </div>

    <!-- Scaled TV Mockup Window -->
    <div class="w-full flex items-center justify-center my-2">
      <div class="tv-mockup w-[920px]">
        <div class="px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between text-xs text-neutral-400 font-mono">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
            <span>Real TV Screenshot • Hisense Display (H_BOX Android 10)</span>
          </div>
          <span class="text-amber-400/90 font-arabic text-sm">﴿ أَلَا بِذِكْرِ اللَّهِ ﴾</span>
        </div>
        <div class="w-full h-[470px] overflow-hidden bg-black flex items-center justify-center">
          <img src="data:image/png;base64,${screenshotBase64}" class="w-full h-auto object-cover" alt="Preview" />
        </div>
      </div>
    </div>

    <!-- Feature Callout Pills -->
    <div class="grid grid-cols-3 gap-3 w-full mt-5">
      ${callouts.map(c => `
        <div class="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-left backdrop-blur-sm">
          <div class="text-amber-300 text-xs font-bold font-mono">${c.title}</div>
          <div class="text-[11px] text-neutral-300 mt-0.5">${c.desc}</div>
        </div>
      `).join('')}
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="relative z-10 flex items-center justify-between w-full pt-4 border-t border-white/[0.08] text-xs text-neutral-400">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full ${item.dotColor}"></span>
      <span class="font-medium text-neutral-300">Swipe for details ➔</span>
    </div>

    <div class="flex items-center gap-2 font-mono text-[11px] text-neutral-300">
      <span>CleanYourTV • MIT License</span>
    </div>
  </footer>
</body>
</html>`;
}

function buildComparisonHtml(beforeBase64, afterBase64) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@500;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .font-arabic { font-family: 'Noto Naskh Arabic', sans-serif; }
    body {
      width: 1080px;
      height: 1080px;
      margin: 0;
      padding: 0;
      background-color: #050608;
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
      background: radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15) 0%, rgba(16, 185, 129, 0.15) 60%, transparent 80%);
      pointer-events: none;
    }
    .card-mockup {
      background: #000000;
      border-radius: 14px;
      overflow: hidden;
    }
  </style>
</head>
<body class="flex flex-col justify-between p-12 text-white relative">
  <div class="bg-mesh"></div>
  <div class="ambient-glow"></div>

  <!-- HEADER -->
  <header class="relative z-10 flex items-center justify-between w-full">
    <div class="flex items-center gap-3">
      <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        BEFORE VS AFTER
      </span>
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5 text-xs font-mono text-neutral-400">
        TRANSFORMATION
      </span>
    </div>

    <div class="flex items-center gap-2.5">
      <span class="px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-medium text-neutral-300 backdrop-blur-md">
        @ibahaaaldincoding
      </span>
    </div>
  </header>

  <!-- CENTER CONTENT -->
  <main class="relative z-10 flex flex-col items-center justify-center my-auto w-full max-w-4xl mx-auto py-2">
    <div class="text-center mb-6">
      <h1 class="text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
        26 Bloatware Removed • +1.0 GB RAM/Disk Freed
      </h1>
      <p class="text-neutral-400 font-medium text-sm">
        From laggy ad-infested stock OS to an Apple TV-grade fluid experience
      </p>
    </div>

    <!-- Dual Comparison Cards -->
    <div class="grid grid-cols-2 gap-6 w-full">
      <!-- BEFORE -->
      <div class="card-mockup border border-rose-500/30 shadow-2xl">
        <div class="px-4 py-2 bg-rose-950/60 border-b border-rose-500/20 flex items-center justify-between">
          <span class="text-rose-400 font-mono text-xs font-bold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-rose-500"></span> BEFORE: STOCK OS
          </span>
          <span class="text-[10px] font-mono text-rose-300/70">Laggy • Ads • 98% Storage</span>
        </div>
        <div class="w-full h-[340px] overflow-hidden bg-black">
          <img src="data:image/png;base64,${beforeBase64}" class="w-full h-full object-cover" alt="Before" />
        </div>
      </div>

      <!-- AFTER -->
      <div class="card-mockup border border-emerald-500/30 shadow-2xl">
        <div class="px-4 py-2 bg-emerald-950/60 border-b border-emerald-500/20 flex items-center justify-between">
          <span class="text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span> AFTER: CLEAN TV OS
          </span>
          <span class="text-[10px] font-mono text-emerald-300/70">Apple tvOS • 0.5x Scale • Athkar</span>
        </div>
        <div class="w-full h-[340px] overflow-hidden bg-black">
          <img src="data:image/png;base64,${afterBase64}" class="w-full h-full object-cover" alt="After" />
        </div>
      </div>
    </div>

    <!-- Comparison Metrics -->
    <div class="grid grid-cols-4 gap-3 w-full mt-6">
      <div class="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-center">
        <div class="text-emerald-400 font-extrabold text-lg">26 Apps</div>
        <div class="text-[11px] text-neutral-400 font-mono">Bloatware Disabled</div>
      </div>
      <div class="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-center">
        <div class="text-emerald-400 font-extrabold text-lg">+1,000 MB</div>
        <div class="text-[11px] text-neutral-400 font-mono">Storage Recovered</div>
      </div>
      <div class="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-center">
        <div class="text-emerald-400 font-extrabold text-lg">0.5x Scale</div>
        <div class="text-[11px] text-neutral-400 font-mono">Instant Window Anim</div>
      </div>
      <div class="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 text-center">
        <div class="text-emerald-400 font-extrabold text-lg">AdGuard DNS</div>
        <div class="text-[11px] text-neutral-400 font-mono">Tracking Blocked</div>
      </div>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="relative z-10 flex items-center justify-between w-full pt-4 border-t border-white/[0.08] text-xs text-neutral-400">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
      <span class="font-medium text-neutral-300">Save this post for your TV setup! 🔖</span>
    </div>

    <div class="flex items-center gap-2 font-mono text-[11px] text-neutral-300">
      <span>@ibahaaaldincoding</span>
    </div>
  </footer>
</body>
</html>`;
}

(async () => {
  console.log('🚀 Starting Clean TV OS Suite Generation...');
  const browser = await chromium.launch({
    executablePath: '/Users/bahaam/Library/Caches/ms-playwright/chromium-1243/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
    headless: true
  });

  // 1. Widescreen Cover (1280x640 @ 2x -> 2560x1280)
  console.log('📸 Generating cover.png (2560x1280)...');
  const ctxWidescreen = await browser.newContext({
    viewport: { width: 1280, height: 640 },
    deviceScaleFactor: 2
  });
  const pageW = await ctxWidescreen.newPage();
  const htmlW = buildWidescreenHtml(homeBase64);
  const tempW = path.join('/tmp', 'tv-cover-wide.html');
  fs.writeFileSync(tempW, htmlW, 'utf8');
  await pageW.goto('file://' + tempW, { waitUntil: 'domcontentloaded' });
  await pageW.waitForFunction(() => typeof window.tailwind === 'object');
  await pageW.evaluate(() => document.fonts.ready);
  await pageW.waitForTimeout(600);
  await pageW.screenshot({ path: path.join(projectDir, 'cover.png') });
  fs.unlinkSync(tempW);
  await pageW.close();
  await ctxWidescreen.close();

  // 2. Instagram Square Cover (1080x1080 @ 2x -> 2160x2160)
  console.log('📸 Generating cover-instagram.png (2160x2160)...');
  const ctxSquare = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 2
  });
  const pageS = await ctxSquare.newPage();
  const htmlS = buildSquareHtml(homeBase64);
  const tempS = path.join('/tmp', 'tv-cover-square.html');
  fs.writeFileSync(tempS, htmlS, 'utf8');
  await pageS.goto('file://' + tempS, { waitUntil: 'domcontentloaded' });
  await pageS.waitForFunction(() => typeof window.tailwind === 'object');
  await pageS.evaluate(() => document.fonts.ready);
  await pageS.waitForTimeout(600);
  await pageS.screenshot({ path: path.join(projectDir, 'cover-instagram.png') });
  // Also save as slide-1.png in social post pack!
  await pageS.screenshot({ path: path.join(socialDir, 'slide-1.png') });
  fs.unlinkSync(tempS);
  await pageS.close();
  await ctxSquare.close();

  // 3. Instagram Reel Cover (1080x1920 @ 2x -> 2160x3840)
  console.log('📸 Generating cover-reel.png (2160x3840)...');
  const ctxReel = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 2
  });
  const pageR = await ctxReel.newPage();
  const htmlR = buildReelHtml(homeBase64);
  const tempR = path.join('/tmp', 'tv-cover-reel.html');
  fs.writeFileSync(tempR, htmlR, 'utf8');
  await pageR.goto('file://' + tempR, { waitUntil: 'domcontentloaded' });
  await pageR.waitForFunction(() => typeof window.tailwind === 'object');
  await pageR.evaluate(() => document.fonts.ready);
  await pageR.waitForTimeout(600);
  await pageR.screenshot({ path: path.join(projectDir, 'cover-reel.png') });
  await pageR.screenshot({ path: path.join(socialDir, 'reel-cover.png') });
  fs.unlinkSync(tempR);
  await pageR.close();
  await ctxReel.close();

  // 4. Slide 2: TV Home Screen Showcase
  console.log('📸 Generating social slide-2.png...');
  const ctxSlide2 = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 2
  });
  const pageS2 = await ctxSlide2.newPage();
  const htmlS2 = buildSlideMockupHtml(
    'Apple TV Frosted Glass Dock & Horizon Glow',
    'Custom dock with Vulture Now, YouTube, Netflix & Shahid VIP, featuring dynamic color matching ambient glow',
    homeBase64,
    'SLIDE 02 • HOME UI',
    [
      { title: 'FROSTED GLASS DOCK', desc: 'tvOS styled blur capsule with responsive app zoom' },
      { title: 'HORIZON AMBIENT GLOW', desc: 'Atmospheric light cast matching focused app art' },
      { title: 'ATHKAR & UAE CLOCK', desc: 'Decorated Quranic Athkar + English 12h & Hijri date' }
    ]
  );
  const tempS2 = path.join('/tmp', 'tv-slide-2.html');
  fs.writeFileSync(tempS2, htmlS2, 'utf8');
  await pageS2.goto('file://' + tempS2, { waitUntil: 'domcontentloaded' });
  await pageS2.waitForFunction(() => typeof window.tailwind === 'object');
  await pageS2.evaluate(() => document.fonts.ready);
  await pageS2.waitForTimeout(600);
  await pageS2.screenshot({ path: path.join(socialDir, 'slide-2.png') });
  // Also save as screenshot-desktop.png in component dir!
  await pageS2.screenshot({ path: path.join(projectDir, 'screenshot-desktop.png') });
  fs.unlinkSync(tempS2);
  await pageS2.close();
  await ctxSlide2.close();

  // 5. Slide 3: Ambient Screensaver Showcase
  console.log('📸 Generating social slide-3.png...');
  const ctxSlide3 = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 2
  });
  const pageS3 = await ctxSlide3.newPage();
  const htmlS3 = buildSlideMockupHtml(
    'Atmospheric OLED Drifting Screensaver',
    'Large modern typography clock with English digits, rotating Quranic Athkar, and slowly shifting radial aura',
    ssBase64,
    'SLIDE 03 • SCREENSAVER',
    [
      { title: 'OLED BURN-IN DEFENSE', desc: 'Drifts to a new random position every 60s' },
      { title: 'ROTATING ATHKAR', desc: 'Subtle Quranic verses rotating with time' },
      { title: 'COLOR-CYCLING AURORA', desc: '5 deep gradient palettes shifting in 16 steps' }
    ]
  );
  const tempS3 = path.join('/tmp', 'tv-slide-3.html');
  fs.writeFileSync(tempS3, htmlS3, 'utf8');
  await pageS3.goto('file://' + tempS3, { waitUntil: 'domcontentloaded' });
  await pageS3.waitForFunction(() => typeof window.tailwind === 'object');
  await pageS3.evaluate(() => document.fonts.ready);
  await pageS3.waitForTimeout(600);
  await pageS3.screenshot({ path: path.join(socialDir, 'slide-3.png') });
  await pageS3.screenshot({ path: path.join(projectDir, 'screenshot-screensaver.png') });
  fs.unlinkSync(tempS3);
  await pageS3.close();
  await ctxSlide3.close();

  // 6. Slide 4: Before vs After Debloat
  console.log('📸 Generating social slide-4.png...');
  const ctxSlide4 = await browser.newContext({
    viewport: { width: 1080, height: 1080 },
    deviceScaleFactor: 2
  });
  const pageS4 = await ctxSlide4.newPage();
  const htmlS4 = buildComparisonHtml(beforeBase64, homeBase64);
  const tempS4 = path.join('/tmp', 'tv-slide-4.html');
  fs.writeFileSync(tempS4, htmlS4, 'utf8');
  await pageS4.goto('file://' + tempS4, { waitUntil: 'domcontentloaded' });
  await pageS4.waitForFunction(() => typeof window.tailwind === 'object');
  await pageS4.evaluate(() => document.fonts.ready);
  await pageS4.waitForTimeout(600);
  await pageS4.screenshot({ path: path.join(socialDir, 'slide-4.png') });
  fs.unlinkSync(tempS4);
  await pageS4.close();
  await ctxSlide4.close();

  await browser.close();
  console.log('🎉 All Clean TV OS Visuals & Social Posts Generated Successfully!');
})();
