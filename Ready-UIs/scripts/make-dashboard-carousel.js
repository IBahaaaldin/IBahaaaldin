const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('--- Generating Instagram Multi-Image Carousel Suite (7 Slides) ---');

  const dir = path.resolve('dashboards/01-project-management-dashboard');
  const fileUrl = 'file://' + path.join(dir, 'index.html');
  const tempDir = path.resolve('.temp_carousel_captures');
  if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });

  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
    args: ['--enable-webgl', '--use-gl=angle', '--use-angle=metal']
  });

  // ========================================================
  // STEP 1: CAPTURE HIGH-RES COMPONENT PIECES FROM LIVE DOM
  // ========================================================
  console.log('Step 1: Capturing high-res DOM components...');
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 2 });
  await page.goto(fileUrl, { waitUntil: 'load' });
  await page.waitForTimeout(500);

  // 1. KPI Metrics Grid
  const kpisPath = path.join(tempDir, 'kpis.png');
  await page.locator('#kpiMetricsGrid').screenshot({ path: kpisPath });

  // 2. Project Analytics Card
  const analyticsPath = path.join(tempDir, 'analytics.png');
  await page.locator('#projectAnalyticsCard').screenshot({ path: analyticsPath });

  // 3. Reminders Card
  const remindersPath = path.join(tempDir, 'reminders.png');
  await page.locator('#remindersCard').screenshot({ path: remindersPath });

  // 4. Project Tasks List
  const tasksPath = path.join(tempDir, 'tasks.png');
  await page.locator('#projectTasksCard').screenshot({ path: tasksPath });

  // 5. Team Collab Card
  const teamPath = path.join(tempDir, 'team.png');
  await page.locator('#teamCollabCard').screenshot({ path: teamPath });

  // 6. Project Progress Card
  const progressPath = path.join(tempDir, 'progress.png');
  await page.locator('#projectProgressCard').screenshot({ path: progressPath });

  // 7. Time Tracker Card
  const trackerPath = path.join(tempDir, 'tracker.png');
  await page.locator('#timeTrackerCard').screenshot({ path: trackerPath });

  // 8. Deliverables Data Table Card
  const tablePath = path.join(tempDir, 'table.png');
  await page.locator('#deliverablesTableCard').screenshot({ path: tablePath });

  // 9. Full Dashboard Desktop (Light)
  const fullLightPath = path.join(tempDir, 'full-light.png');
  await page.screenshot({ path: fullLightPath, fullPage: true });

  // 10. Full Dashboard Desktop (Dark Mode)
  await page.locator('#themeToggleBtn').click();
  await page.waitForTimeout(400);
  const fullDarkPath = path.join(tempDir, 'full-dark.png');
  await page.screenshot({ path: fullDarkPath, fullPage: true });

  // 11. Dark Mode Analytics Card
  const darkAnalyticsPath = path.join(tempDir, 'dark-analytics.png');
  await page.locator('#projectAnalyticsCard').screenshot({ path: darkAnalyticsPath });

  // 12. Dark Mode Table Card
  const darkTablePath = path.join(tempDir, 'dark-table.png');
  await page.locator('#deliverablesTableCard').screenshot({ path: darkTablePath });

  await page.close();

  // Mobile viewport capture
  const mPage = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await mPage.goto(fileUrl, { waitUntil: 'load' });
  await mPage.waitForTimeout(400);
  const mobileHeroPath = path.join(tempDir, 'mobile-hero.png');
  await mPage.screenshot({ path: mobileHeroPath });
  await mPage.close();

  console.log('All DOM components captured!');

  // Helper to read as base64
  const toB64 = (p) => 'data:image/png;base64,' + fs.readFileSync(p).toString('base64');

  const b64Kpis = toB64(kpisPath);
  const b64Analytics = toB64(analyticsPath);
  const b64Reminders = toB64(remindersPath);
  const b64Tasks = toB64(tasksPath);
  const b64Team = toB64(teamPath);
  const b64Progress = toB64(progressPath);
  const b64Tracker = toB64(trackerPath);
  const b64Table = toB64(tablePath);
  const b64FullLight = toB64(fullLightPath);
  const b64FullDark = toB64(fullDarkPath);
  const b64DarkAnalytics = toB64(darkAnalyticsPath);
  const b64DarkTable = toB64(darkTablePath);
  const b64MobileHero = toB64(mobileHeroPath);

  // Common Template Wrapper for 1080x1080 Carousel Slides
  const renderSlide = (data) => `<!DOCTYPE html>
<html lang="en">
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
      background: radial-gradient(circle at 50% 45%, rgba(16, 185, 129, 0.28) 0%, rgba(6, 78, 59, 0.16) 45%, transparent 75%);
      pointer-events: none;
    }
    .window-card {
      background: rgba(14, 18, 27, 0.88);
      border: 1px solid rgba(16, 185, 129, 0.28);
      box-shadow: 0 35px 85px -20px rgba(0, 0, 0, 0.95), 0 0 30px -5px rgba(16, 185, 129, 0.2);
      border-radius: 20px;
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
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center font-extrabold text-white text-base shadow-lg shadow-emerald-500/30">
        D
      </div>
      <div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">${data.category}</span>
          <span class="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-slate-300 font-semibold">${data.badge}</span>
        </div>
        <div class="text-sm font-extrabold text-slate-200">${data.headerSubtitle || 'Donezo — Project Management OS'}</div>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-slate-300">
        ${data.slideIndex}
      </span>
      <span class="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-bold text-emerald-300 flex items-center gap-1.5 animate-pulse">
        ${data.actionTag || 'SWIPE ➔'}
      </span>
    </div>
  </header>

  <!-- TITLE & SUBTITLE -->
  <div class="relative z-10 my-3">
    <h1 class="text-3xl font-extrabold tracking-tight text-white leading-tight">
      ${data.title}
    </h1>
    <p class="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
      ${data.subtitle}
    </p>
  </div>

  <!-- SHOWCASE STAGE -->
  <div class="relative z-10 flex-1 flex items-center justify-center my-2 overflow-hidden">
    ${data.stageHtml}
  </div>

  <!-- FOOTER -->
  <footer class="relative z-10 flex items-center justify-between w-full pt-3 border-t border-white/10">
    <div class="flex items-center gap-2">
      ${data.tags.map(t => `<span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300 font-mono">${t}</span>`).join('')}
    </div>
    <div class="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono">
      <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
      <span>@ibahaaaldincoding</span>
    </div>
  </footer>
</body>
</html>`;

  // ========================================================
  // DEFINE 7 DEDICATED CAROUSEL SLIDES
  // ========================================================
  const slides = [
    // SLIDE 1: HERO COVER
    {
      num: 1,
      filename: 'slide-1.png',
      category: 'DASHBOARD #01',
      badge: 'PURE TAILWIND',
      slideIndex: '01 / 07',
      actionTag: 'SWIPE ➔',
      title: 'Donezo — Project Management OS',
      subtitle: 'High-craft task velocity dashboard with weekly analytics chart, live sprint timer & team collaboration.',
      tags: ['Tailwind CSS', 'Zero Build', 'HTML5 & Vanilla JS', 'Dark / Light'],
      stageHtml: `
        <div class="window-card w-full h-[520px] flex flex-col">
          <div class="h-9 bg-slate-900/90 border-b border-white/10 px-4 flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div class="text-[11px] font-mono text-slate-400">donezo-dashboard.internal/app</div>
            <div class="text-[11px] font-mono text-emerald-400 font-bold">● LIVE</div>
          </div>
          <div class="flex-1 overflow-hidden relative bg-[#f8fafc]">
            <img src="${b64FullLight}" class="w-full object-cover object-top" style="transform: scale(1.02); transform-origin: top center;" />
            <div class="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex items-end justify-center pb-4">
              <span class="px-4 py-1.5 rounded-full bg-emerald-500/90 text-white font-bold text-xs shadow-lg shadow-emerald-500/40">
                Explore Full Feature Suite ➔
              </span>
            </div>
          </div>
        </div>
      `
    },

    // SLIDE 2: FULL LAYOUT ARCHITECTURE
    {
      num: 2,
      filename: 'slide-2.png',
      category: 'FULL-PAGE ARCHITECTURE',
      badge: 'EDGE-TO-EDGE',
      slideIndex: '02 / 07',
      actionTag: 'SWIPE ➔',
      title: 'Full-Page Edge-to-Edge Workspace',
      subtitle: 'Docked persistent sidebar, sticky command search header with ⌘F, KPI bento grid & deliverables table.',
      tags: ['Docked Sidebar', 'Sticky Header', 'Bento Grid', 'Full-Page App'],
      stageHtml: `
        <div class="window-card w-full h-[520px] flex flex-col">
          <div class="h-9 bg-slate-900/90 border-b border-white/10 px-4 flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <div class="text-[11px] font-mono text-slate-400">architecture // full-page layout</div>
            <div class="text-[11px] font-mono text-emerald-400">100% Edge-to-Edge</div>
          </div>
          <div class="flex-1 overflow-hidden bg-[#f8fafc] p-3 flex items-center justify-center">
            <img src="${b64FullLight}" class="w-full h-full object-contain rounded-xl shadow-md" />
          </div>
        </div>
      `
    },

    // SLIDE 3: PROJECT ANALYTICS & KPIS
    {
      num: 3,
      filename: 'slide-3.png',
      category: 'FEATURE 01 • TASK VELOCITY',
      badge: 'PILL-BAR CHART',
      slideIndex: '03 / 07',
      actionTag: 'SWIPE ➔',
      title: 'Interactive Pill-Bar Chart & KPIs',
      subtitle: 'Dynamic floating day tooltip with caret pointer, sound effects & monthly trend SVG micro-badges.',
      tags: ['Dynamic Tooltip', 'SVG Badges', 'Weekly Velocity', 'Sound FX'],
      stageHtml: `
        <div class="w-full flex flex-col gap-3.5 items-center justify-center">
          <div class="w-full rounded-2xl overflow-hidden border border-emerald-500/30 shadow-xl bg-white p-2">
            <img src="${b64Kpis}" class="w-full object-contain rounded-xl" />
          </div>
          <div class="w-full rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-white p-2">
            <img src="${b64Analytics}" class="w-full object-contain rounded-xl" />
          </div>
        </div>
      `
    },

    // SLIDE 4: SPRINT TIMER & LIVE MEETING
    {
      num: 4,
      filename: 'slide-4.png',
      category: 'FEATURE 02 • PRODUCTIVITY ENGINE',
      badge: 'LIVE ENGINE',
      slideIndex: '04 / 07',
      actionTag: 'SWIPE ➔',
      title: 'Sprint Timer & 1-Click Meeting Call',
      subtitle: 'Live play/pause/reset sprint clock with Web Audio API synthesizer clicks & Zoom call state toggle.',
      tags: ['Web Audio API', 'Sprint Timer', '1-Click Call', 'Meeting Widget'],
      stageHtml: `
        <div class="w-full grid grid-cols-2 gap-4 items-center justify-center">
          <div class="rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-white p-2 flex items-center justify-center">
            <img src="${b64Reminders}" class="w-full object-contain rounded-xl" />
          </div>
          <div class="rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-900 p-2 flex items-center justify-center">
            <img src="${b64Tracker}" class="w-full object-contain rounded-xl" />
          </div>
        </div>
      `
    },

    // SLIDE 5: TEAM COLLABORATION & PROGRESS RADIAL ARC
    {
      num: 5,
      filename: 'slide-5.png',
      category: 'FEATURE 03 • TEAM & ROADMAP',
      badge: 'RADIAL ARC GAUGE',
      slideIndex: '05 / 07',
      actionTag: 'SWIPE ➔',
      title: 'Team Roster & 41% Progress Arc Gauge',
      subtitle: 'Horseshoe SVG radial arc with dashed background tracks & active member status tags.',
      tags: ['SVG Radial Arc', 'Team Avatars', 'Status Tags', 'Clean Vector'],
      stageHtml: `
        <div class="w-full grid grid-cols-12 gap-4 items-center justify-center">
          <div class="col-span-7 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-white p-2 flex items-center justify-center">
            <img src="${b64Team}" class="w-full object-contain rounded-xl" />
          </div>
          <div class="col-span-5 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-white p-2 flex items-center justify-center">
            <img src="${b64Progress}" class="w-full object-contain rounded-xl" />
          </div>
        </div>
      `
    },

    // SLIDE 6: ACTIVE DELIVERABLES DATA TABLE
    {
      num: 6,
      filename: 'slide-6.png',
      category: 'FEATURE 04 • DATA WORKFLOW',
      badge: 'DATA TABLE',
      slideIndex: '06 / 07',
      actionTag: 'SWIPE ➔',
      title: 'Active Deliverables Data Table',
      subtitle: 'Interactive task selection checkboxes, priority badges (High, Medium, Normal) & action menus.',
      tags: ['Task Checkboxes', 'Priority Badges', 'Assignee Avatars', 'Filter Controls'],
      stageHtml: `
        <div class="w-full rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-white p-3">
          <img src="${b64Table}" class="w-full object-contain rounded-xl" />
        </div>
      `
    },

    // SLIDE 7: OBSIDIAN DARK MODE & MOBILE OS
    {
      num: 7,
      filename: 'slide-7.png',
      category: 'THEME ENGINE • 100% RESPONSIVE',
      badge: 'DARK & MOBILE',
      slideIndex: '07 / 07',
      actionTag: 'SAVE 🔖',
      title: 'Obsidian Dark Theme & Mobile View',
      subtitle: 'Deep slate surface tokens, emerald glow accents & mobile slide-in navigation sidebar.',
      tags: ['Obsidian Dark', 'Mobile Drawer', 'Zero Eye Strain', '100% Responsive'],
      stageHtml: `
        <div class="w-full grid grid-cols-12 gap-4 items-center justify-center">
          <div class="col-span-8 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-[#090d16] p-2 flex items-center justify-center">
            <img src="${b64DarkTable}" class="w-full object-contain rounded-xl" />
          </div>
          <div class="col-span-4 rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-slate-950 p-1 flex items-center justify-center">
            <img src="${b64MobileHero}" class="w-full h-[460px] object-cover object-top rounded-2xl" />
          </div>
        </div>
      `
    }
  ];

  // ========================================================
  // STEP 2: RENDER EACH SLIDE WITH PLAYWRIGHT (2160x2160 PNG)
  // ========================================================
  const outPostDir = path.resolve('social-posts/Post-Dashboard-01-Donezo-Project-Management');
  const outDesktopDir = path.resolve(process.env.HOME, 'Desktop/Instagram-Posts/Post-Dashboard-01-Donezo-Project-Management');
  if (!fs.existsSync(outDesktopDir)) fs.mkdirSync(outDesktopDir, { recursive: true });

  const renderPage = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 2 });

  for (const s of slides) {
    console.log(`Rendering Slide ${s.num}: ${s.title}...`);
    const html = renderSlide(s);
    await renderPage.setContent(html, { waitUntil: 'load' });
    await renderPage.waitForTimeout(300);

    const postPath = path.join(outPostDir, s.filename);
    const deskPath = path.join(outDesktopDir, s.filename);

    await renderPage.screenshot({ path: postPath, type: 'png' });
    fs.copyFileSync(postPath, deskPath);
    console.log(`Saved: ${s.filename} (2160x2160)`);
  }

  await renderPage.close();
  await browser.close();

  // Cleanup temp captures
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log('✅ All 7 Instagram carousel slides generated successfully at 2160x2160 Retina!');
})();
