const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const items = [
  {
    id: '01',
    folder: '01-floating-island-navbar',
    repo: 'navbar-floating-island',
    title: 'Liquid Glass Dock Navbar',
    tagline: 'Ultra-refined floating island dock with live Dubai clock & magnetic tab indicator',
    badge: 'READY UI #01',
    accentColor: '#6366f1',
    glowGradient: 'radial-gradient(circle at 50% 55%, rgba(99, 102, 241, 0.35) 0%, rgba(168, 85, 247, 0.15) 45%, transparent 75%)',
    tags: ['Tailwind CSS', 'Specular Glass', 'Magnetic Capsule', 'Dark / Light Mode'],
    renderNavbar: `
      <nav class="liquid-glass rounded-full px-4 py-2.5 flex items-center gap-3.5 shadow-2xl relative select-none">
        <div class="flex items-center gap-2.5 pl-1 pr-2 py-0.5 rounded-full">
          <div class="relative w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-[1.5px] flex items-center justify-center shadow-lg shadow-indigo-500/25 flex-shrink-0">
            <div class="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center text-xs font-bold text-white">
              BA
            </div>
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-black"></span>
          </div>
          <div class="flex flex-col text-left leading-tight">
            <span class="text-xs font-semibold text-white tracking-tight whitespace-nowrap">Bahaa Aldin</span>
            <span class="text-[10px] text-neutral-400 font-medium whitespace-nowrap">Creative Developer</span>
          </div>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] text-neutral-200 text-[11px] font-mono border border-white/10 whitespace-nowrap">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>DXB 10:15 AM</span>
        </div>

        <div class="flex items-center gap-1">
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-white/[0.12] whitespace-nowrap">Work</span>
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Projects</span>
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Stack</span>
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Writing</span>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-2 flex-shrink-0">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-neutral-300 bg-white/[0.06] border border-white/10">
            <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          </div>
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-neutral-300 bg-white/[0.06] border border-white/10">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          </div>
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-900 bg-white shadow-md">
            <span>Let's Talk</span>
            <svg class="w-3.5 h-3.5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .liquid-glass {
        background: rgba(14, 16, 22, 0.88);
        backdrop-filter: blur(28px) saturate(190%);
        -webkit-backdrop-filter: blur(28px) saturate(190%);
        border: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.95),
                    0 0 0 1px rgba(255, 255, 255, 0.05),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.25);
      }
    `
  },
  {
    id: '02',
    folder: '02-linear-command-navbar',
    repo: 'navbar-linear-command',
    title: 'Linear Command Navbar',
    tagline: 'Linear/Raycast aesthetic with Selected Works popover & interactive ⌘K palette',
    badge: 'READY UI #02',
    accentColor: '#06b6d4',
    glowGradient: 'radial-gradient(circle at 50% 55%, rgba(6, 182, 212, 0.35) 0%, rgba(59, 130, 246, 0.15) 45%, transparent 75%)',
    tags: ['Tailwind CSS', '⌘K Command Search', 'Selected Works Popover', 'Dark / Light Mode'],
    renderNavbar: `
      <nav class="linear-dock rounded-2xl px-4 py-2.5 flex items-center gap-3.5 shadow-2xl relative select-none">
        <div class="flex items-center gap-2.5 pl-1 pr-2 py-0.5 rounded-xl">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] flex items-center justify-center shadow-md shadow-cyan-500/20 flex-shrink-0">
            <div class="w-full h-full bg-[#0d0f17] rounded-[11px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
              &gt;_
            </div>
          </div>
          <div class="flex flex-col text-left leading-tight">
            <span class="text-xs font-semibold text-white tracking-tight whitespace-nowrap">Bahaa Aldin</span>
            <span class="text-[10px] text-neutral-400 font-medium whitespace-nowrap">Software Developer</span>
          </div>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-1">
          <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-white/[0.08] border border-white/5 whitespace-nowrap">
            <span>Projects</span>
            <svg class="w-3 h-3 text-cyan-400 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </div>
          <span class="px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Experience</span>
          <span class="px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Stack</span>
          <span class="px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">About</span>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-2 flex-shrink-0">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.06] text-neutral-300 text-xs border border-white/10 whitespace-nowrap">
            <svg class="w-3.5 h-3.5 text-cyan-400 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <span class="font-mono text-[10px] px-1 py-0.5 rounded bg-neutral-800 text-cyan-300 border border-neutral-700">⌘K</span>
          </div>
          <div class="w-8 h-8 rounded-xl flex items-center justify-center text-neutral-300 bg-white/[0.06] border border-white/10">
            <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          </div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-neutral-900 bg-white shadow-md whitespace-nowrap">
            <span>Get in Touch</span>
            <svg class="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .linear-dock {
        background: rgba(14, 16, 25, 0.9);
        backdrop-filter: blur(28px) saturate(190%);
        -webkit-backdrop-filter: blur(28px) saturate(190%);
        border: 1px solid rgba(255, 255, 255, 0.12);
        box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.95),
                    0 0 0 1px rgba(255, 255, 255, 0.05),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
      }
    `
  },
  {
    id: '03',
    folder: '03-dynamic-island-navbar',
    repo: 'navbar-dynamic-island',
    title: 'Apple Dynamic Island Navbar',
    tagline: 'Expandable Apple island navbar with animated audio soundwave & live project morphing',
    badge: 'READY UI #03',
    accentColor: '#10b981',
    glowGradient: 'radial-gradient(circle at 50% 55%, rgba(16, 185, 129, 0.35) 0%, rgba(6, 182, 212, 0.15) 45%, transparent 75%)',
    tags: ['Apple Island', 'Audio Equalizer', 'Spring Physics', 'Dark / Light Mode'],
    renderNavbar: `
      <div class="dynamic-island rounded-[28px] px-4 py-2.5 flex items-center justify-between gap-4 shadow-2xl relative select-none">
        <div class="flex items-center gap-2.5 pl-1 pr-2 py-0.5 rounded-full flex-shrink-0">
          <div class="relative w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700/80 flex items-center justify-center text-xs font-semibold text-white">
            <span>BA</span>
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-black animate-pulse"></span>
          </div>
          <div class="flex flex-col text-left leading-tight">
            <span class="text-xs font-semibold text-white tracking-tight whitespace-nowrap">Bahaa Aldin</span>
            <span class="text-[10px] text-emerald-400 font-medium whitespace-nowrap">Available for Work</span>
          </div>
        </div>

        <div class="flex items-center gap-1">
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-white/[0.1] whitespace-nowrap">Work</span>
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Projects</span>
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">About</span>
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Writing</span>
        </div>

        <div class="flex items-center gap-2 flex-shrink-0">
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-xs text-neutral-300">
            <div class="flex items-end gap-[2.5px] h-3.5 px-0.5">
              <span class="w-[2.5px] h-3 bg-emerald-400 rounded-full"></span>
              <span class="w-[2.5px] h-2 bg-emerald-400 rounded-full"></span>
              <span class="w-[2.5px] h-3.5 bg-emerald-400 rounded-full"></span>
              <span class="w-[2.5px] h-2.5 bg-emerald-400 rounded-full"></span>
            </div>
            <span class="text-[11px] font-mono text-neutral-200">Building</span>
            <svg class="w-3 h-3 text-neutral-400 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </div>
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-neutral-300 bg-neutral-900 border border-neutral-700">
            <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          </div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-neutral-800 border border-neutral-700 shadow-md">
            <span>Hire</span>
            <svg class="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    `,
    extraStyles: `
      .dynamic-island {
        background: #08090d;
        border: 1px solid rgba(255, 255, 255, 0.12);
        box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.95),
                    0 0 0 1px rgba(255, 255, 255, 0.06),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
      }
    `
  },
  {
    id: '04',
    folder: '04-spotlight-border-navbar',
    repo: 'navbar-spotlight-border',
    title: 'Spotlight Border Navbar',
    tagline: 'Interactive radial spotlight glow tracking your cursor across the border in real time',
    badge: 'READY UI #04',
    accentColor: '#38bdf8',
    glowGradient: 'radial-gradient(circle at 50% 55%, rgba(56, 189, 248, 0.35) 0%, rgba(139, 92, 246, 0.15) 45%, transparent 75%)',
    tags: ['Cursor Tracking', 'Radial Spotlight', 'Shimmer Badge', 'Dark / Light Mode'],
    renderNavbar: `
      <nav class="spotlight-card rounded-2xl px-4 py-2.5 flex items-center gap-3.5 shadow-2xl relative select-none">
        <div class="flex items-center gap-2.5 pl-1 pr-2 py-0.5 rounded-xl">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-[1.5px] flex items-center justify-center shadow-lg shadow-sky-500/25 flex-shrink-0">
            <div class="w-full h-full bg-[#0a0c12] rounded-[10px] flex items-center justify-center font-mono font-bold text-xs text-sky-400">
              BM
            </div>
          </div>
          <div class="flex flex-col text-left leading-tight">
            <span class="text-xs font-semibold text-white tracking-tight whitespace-nowrap">Bahaa Mohammed</span>
            <span class="text-[10px] text-neutral-400 font-medium whitespace-nowrap">Software Engineer</span>
          </div>
        </div>

        <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 text-[10px] font-medium whitespace-nowrap">
          <span class="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
          <span>Open for Projects</span>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-1">
          <span class="px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-white/[0.1] whitespace-nowrap">Work</span>
          <span class="px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Projects</span>
          <span class="px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Stack</span>
          <span class="px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">About</span>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-2 flex-shrink-0">
          <div class="w-8 h-8 rounded-xl flex items-center justify-center text-neutral-300 bg-white/[0.06] border border-white/10">
            <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          </div>
          <div class="w-8 h-8 rounded-xl flex items-center justify-center text-neutral-300 bg-white/[0.06] border border-white/10">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          </div>
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25 whitespace-nowrap">
            <span>Let's Talk</span>
            <svg class="w-3.5 h-3.5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .spotlight-card {
        background: rgba(10, 12, 18, 0.92);
        backdrop-filter: blur(28px) saturate(190%);
        -webkit-backdrop-filter: blur(28px) saturate(190%);
        border: 1px solid rgba(56, 189, 248, 0.35);
        box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.95),
                    0 0 25px -5px rgba(56, 189, 248, 0.25),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.25);
      }
    `
  }
];

function buildHtml(item, isSquare) {
  const width = isSquare ? 1080 : 1280;
  const height = isSquare ? 1080 : 640;

  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    }
    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }
    body {
      width: ${width}px;
      height: ${height}px;
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
    ${item.extraStyles}
  </style>
</head>
<body class="flex flex-col justify-between p-8 sm:p-12 text-white relative">
  <div class="bg-mesh"></div>
  <div class="ambient-glow"></div>

  <!-- TOP HEADER -->
  <header class="relative z-10 flex items-center justify-between w-full">
    <div class="flex items-center gap-3">
      <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold tracking-wide text-white shadow-lg backdrop-blur-md">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        ${item.badge}
      </span>
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5 text-[11px] font-mono text-neutral-400">
        READY-UIS
      </span>
    </div>

    <div class="flex items-center gap-2.5">
      <span class="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-medium text-neutral-300 backdrop-blur-md">
        @ibahaaaldincoding
      </span>
    </div>
  </header>

  <!-- CENTER HERO & COMPONENT SHOWCASE -->
  <main class="relative z-10 flex flex-col items-center justify-center my-auto text-center w-full max-w-4xl mx-auto ${isSquare ? 'py-8' : 'py-3'}">
    
    <!-- Title & Tagline -->
    <div class="flex flex-col items-center mb-6 ${isSquare ? 'mb-10' : 'mb-6'}">
      <h1 class="text-3xl ${isSquare ? 'text-5xl' : 'text-4xl'} font-extrabold tracking-tight text-white mb-2 leading-tight">
        ${item.title}
      </h1>
      <p class="text-neutral-400 font-medium ${isSquare ? 'text-lg max-w-xl' : 'text-sm max-w-lg'}">
        ${item.tagline}
      </p>
    </div>

    <!-- Live Centered Navbar Mockup -->
    <div class="w-full flex items-center justify-center scale-100 ${isSquare ? 'scale-110 my-4' : 'scale-95'} transform transition-transform">
      ${item.renderNavbar}
    </div>

    <!-- Feature Pills -->
    <div class="flex flex-wrap items-center justify-center gap-2 mt-8 ${isSquare ? 'mt-12' : 'mt-6'}">
      ${item.tags.map(tag => `
        <span class="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono text-neutral-300 backdrop-blur-sm">
          ${tag}
        </span>
      `).join('')}
    </div>

  </main>

  <!-- BOTTOM FOOTER -->
  <footer class="relative z-10 flex items-center justify-between w-full pt-4 border-t border-white/[0.08] text-xs text-neutral-400">
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
      <span class="font-medium text-neutral-300">Free Open-Source Component</span>
      <span class="text-neutral-600">•</span>
      <span class="font-mono text-[11px] text-neutral-400">github.com/IBahaaaldin/${item.repo}</span>
    </div>

    <div class="flex items-center gap-2 font-mono text-[11px] text-neutral-300">
      <span>${isSquare ? 'Swipe for Video Demo ➡️' : 'HTML5 + Tailwind CSS'}</span>
    </div>
  </footer>

</body>
</html>`;
}

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const baseDir = path.join(__dirname, '..', 'navbars');

  for (const item of items) {
    const itemDir = path.join(baseDir, item.folder);
    console.log(`Generating covers for ${item.title}...`);

    // 1. Desktop / GitHub Widescreen Cover (1280x640)
    const contextWidescreen = await browser.newContext({
      viewport: { width: 1280, height: 640 },
      deviceScaleFactor: 2
    });
    const pageWidescreen = await contextWidescreen.newPage();
    const htmlWidescreen = buildHtml(item, false);
    await pageWidescreen.setContent(htmlWidescreen, { waitUntil: 'networkidle' });
    await pageWidescreen.waitForTimeout(500);

    const coverPath = path.join(itemDir, 'cover.png');
    await pageWidescreen.screenshot({ path: coverPath });
    console.log(`Saved: ${coverPath}`);
    await pageWidescreen.close();
    await contextWidescreen.close();

    // 2. Instagram Square Cover (1080x1080)
    const contextSquare = await browser.newContext({
      viewport: { width: 1080, height: 1080 },
      deviceScaleFactor: 2
    });
    const pageSquare = await contextSquare.newPage();
    const htmlSquare = buildHtml(item, true);
    await pageSquare.setContent(htmlSquare, { waitUntil: 'networkidle' });
    await pageSquare.waitForTimeout(500);

    const coverInstaPath = path.join(itemDir, 'cover-instagram.png');
    await pageSquare.screenshot({ path: coverInstaPath });
    console.log(`Saved: ${coverInstaPath}`);
    await pageSquare.close();
    await contextSquare.close();
  }

  await browser.close();
  console.log('All cover images generated successfully!');
})();
