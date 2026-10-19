const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const items = [
  {
    id: '01',
    folder: '01-floating-island-navbar',
    repo: 'navbar-floating-island',
    title: 'Liquid Glass Dock',
    subtitle: 'Ultra-refined floating island dock with live Dubai clock & magnetic tab indicator',
    badge: 'UI COMPONENT #01',
    episode: 'REEL 01',
    accentColor: '#6366f1',
    accentGradient: 'from-indigo-500 via-purple-500 to-pink-500',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.45) 0%, rgba(168, 85, 247, 0.22) 45%, transparent 75%)',
    tags: ['Tailwind CSS', 'Specular Glass', 'Magnetic Capsule', 'Dark / Light'],
    renderNavbar: `
      <nav class="liquid-glass rounded-full px-5 py-3 flex items-center gap-4 shadow-2xl relative select-none">
        <div class="flex items-center gap-2.5 pl-1 pr-2 py-0.5 rounded-full">
          <div class="relative w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-[1.5px] flex items-center justify-center shadow-lg shadow-indigo-500/25 flex-shrink-0">
            <div class="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center text-xs font-bold text-white">
              BA
            </div>
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-black"></span>
          </div>
          <div class="flex flex-col text-left leading-tight">
            <span class="text-xs font-semibold text-white tracking-tight whitespace-nowrap">Bahaa Mohammed</span>
            <span class="text-[10px] text-neutral-400 font-medium whitespace-nowrap">Software Engineer</span>
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
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-900 bg-white shadow-md">
            <span>Let's Talk</span>
            <svg class="w-3.5 h-3.5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .liquid-glass {
        background: rgba(14, 16, 22, 0.92);
        backdrop-filter: blur(28px) saturate(190%);
        -webkit-backdrop-filter: blur(28px) saturate(190%);
        border: 1px solid rgba(255, 255, 255, 0.16);
        box-shadow: 0 35px 90px -20px rgba(0, 0, 0, 0.95),
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
    subtitle: 'Linear/Raycast aesthetic with Selected Works popover & interactive ⌘K palette',
    badge: 'UI COMPONENT #02',
    episode: 'REEL 02',
    accentColor: '#06b6d4',
    accentGradient: 'from-cyan-400 via-blue-500 to-indigo-500',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.45) 0%, rgba(59, 130, 246, 0.22) 45%, transparent 75%)',
    tags: ['Tailwind CSS', '⌘K Palette', 'Projects Popover', 'Dark / Light'],
    renderNavbar: `
      <nav class="linear-dock rounded-2xl px-5 py-3 flex items-center gap-4 shadow-2xl relative select-none">
        <div class="flex items-center gap-2.5 pl-1 pr-2 py-0.5 rounded-xl">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] flex items-center justify-center shadow-md shadow-cyan-500/20 flex-shrink-0">
            <div class="w-full h-full bg-[#0d0f17] rounded-[11px] flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
              &gt;_
            </div>
          </div>
          <div class="flex flex-col text-left leading-tight">
            <span class="text-xs font-semibold text-white tracking-tight whitespace-nowrap">Bahaa Mohammed</span>
            <span class="text-[10px] text-neutral-400 font-medium whitespace-nowrap">Software Engineer</span>
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
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-neutral-900 bg-white shadow-md whitespace-nowrap">
            <span>Get in Touch</span>
            <svg class="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .linear-dock {
        background: rgba(14, 16, 25, 0.92);
        backdrop-filter: blur(28px) saturate(190%);
        -webkit-backdrop-filter: blur(28px) saturate(190%);
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow: 0 35px 90px -20px rgba(0, 0, 0, 0.95),
                    0 0 0 1px rgba(255, 255, 255, 0.05),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
      }
    `
  },
  {
    id: '03',
    folder: '03-dynamic-island-navbar',
    repo: 'navbar-dynamic-island',
    title: 'Apple Dynamic Island',
    subtitle: 'Expandable Apple island navbar with animated audio soundwave & live project morphing',
    badge: 'UI COMPONENT #03',
    episode: 'REEL 03',
    accentColor: '#10b981',
    accentGradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.45) 0%, rgba(6, 182, 212, 0.22) 45%, transparent 75%)',
    tags: ['Apple Island', 'Equalizer Bars', 'Spring Physics', 'Dark / Light'],
    renderNavbar: `
      <div class="dynamic-island rounded-[28px] px-5 py-3 flex items-center justify-between gap-4 shadow-2xl relative select-none">
        <div class="flex items-center gap-2.5 pl-1 pr-2 py-0.5 rounded-full flex-shrink-0">
          <div class="relative w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700/80 flex items-center justify-center text-xs font-semibold text-white">
            <span>BM</span>
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-black animate-pulse"></span>
          </div>
          <div class="flex flex-col text-left leading-tight">
            <span class="text-xs font-semibold text-white tracking-tight whitespace-nowrap">Bahaa Mohammed</span>
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
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-neutral-800 border border-neutral-700 shadow-md">
            <span>Hire</span>
            <svg class="w-3 h-3 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    `,
    extraStyles: `
      .dynamic-island {
        background: #08090d;
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow: 0 35px 90px -20px rgba(0, 0, 0, 0.95),
                    0 0 0 1px rgba(255, 255, 255, 0.06),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
      }
    `
  },
  {
    id: '04',
    folder: '04-spotlight-border-navbar',
    repo: 'navbar-spotlight-border',
    title: 'Spotlight Border',
    subtitle: 'Interactive radial spotlight glow tracking your cursor across the border in real time',
    badge: 'UI COMPONENT #04',
    episode: 'REEL 04',
    accentColor: '#38bdf8',
    accentGradient: 'from-sky-400 via-indigo-500 to-purple-500',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.45) 0%, rgba(139, 92, 246, 0.22) 45%, transparent 75%)',
    tags: ['Cursor Spotlight', 'Shimmer Badge', 'Iridescent Glow', 'Dark / Light'],
    renderNavbar: `
      <nav class="spotlight-card rounded-2xl px-5 py-3 flex items-center gap-4 shadow-2xl relative select-none">
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
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25 whitespace-nowrap">
            <span>Let's Talk</span>
            <svg class="w-3.5 h-3.5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .spotlight-card {
        background: rgba(10, 12, 18, 0.94);
        backdrop-filter: blur(28px) saturate(190%);
        -webkit-backdrop-filter: blur(28px) saturate(190%);
        border: 1px solid rgba(56, 189, 248, 0.4);
        box-shadow: 0 35px 90px -20px rgba(0, 0, 0, 0.95),
                    0 0 30px -5px rgba(56, 189, 248, 0.3),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.25);
      }
    `
  },
  {
    id: '05',
    folder: '05-studio-media-navbar',
    repo: 'navbar-studio-media',
    title: 'Studio Media Dock',
    subtitle: 'Integrated ambient music player with live equalizer, spinning vinyl & Dubai time',
    badge: 'UI COMPONENT #05',
    episode: 'REEL 05',
    accentColor: '#f59e0b',
    accentGradient: 'from-amber-400 via-orange-500 to-rose-500',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.45) 0%, rgba(244, 63, 94, 0.22) 45%, transparent 75%)',
    tags: ['Music Player', 'Equalizer Bars', 'Spinning Vinyl', 'Dark / Light'],
    renderNavbar: `
      <nav class="studio-dock rounded-full px-5 py-3 flex items-center gap-4 shadow-2xl relative select-none">
        <div class="flex items-center gap-2.5 pl-1 pr-2 py-0.5 rounded-full">
          <div class="relative w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 p-[1.5px] flex items-center justify-center shadow-lg shadow-amber-500/25 flex-shrink-0">
            <div class="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center text-xs font-bold text-white">
              BM
            </div>
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-black"></span>
          </div>
          <div class="flex flex-col text-left leading-tight">
            <span class="text-xs font-semibold text-white tracking-tight whitespace-nowrap">Bahaa Mohammed</span>
            <span class="text-[10px] text-neutral-400 font-medium whitespace-nowrap">Creative Software Engineer</span>
          </div>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-1">
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-white bg-white/[0.12] whitespace-nowrap">Work</span>
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Projects</span>
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Stack</span>
          <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">About</span>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 whitespace-nowrap">
          <div class="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center flex-shrink-0">
            <div class="w-2 h-2 rounded-full bg-amber-400"></div>
          </div>
          <div class="flex flex-col text-left leading-tight">
            <span class="text-[11px] font-mono font-bold text-white whitespace-nowrap">Lofi Code Beats</span>
            <span class="text-[9px] font-mono text-amber-400 whitespace-nowrap">128 BPM • DUBAI FM</span>
          </div>
          <div class="flex items-end gap-[2px] h-3.5 px-0.5">
            <span class="w-[2.5px] h-3 bg-amber-400 rounded-full"></span>
            <span class="w-[2.5px] h-2 bg-orange-400 rounded-full"></span>
            <span class="w-[2.5px] h-3.5 bg-rose-400 rounded-full"></span>
            <span class="w-[2.5px] h-2.5 bg-amber-300 rounded-full"></span>
          </div>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-2 flex-shrink-0">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-neutral-300 bg-white/[0.06] border border-white/10">
            <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          </div>
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-amber-500 to-rose-600 shadow-lg shadow-amber-500/25 whitespace-nowrap">
            <span>Let's Talk</span>
            <svg class="w-3.5 h-3.5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .studio-dock {
        background: rgba(12, 14, 20, 0.94);
        backdrop-filter: blur(28px) saturate(190%);
        -webkit-backdrop-filter: blur(28px) saturate(190%);
        border: 1px solid rgba(255, 255, 255, 0.16);
        box-shadow: 0 35px 90px -20px rgba(0, 0, 0, 0.95),
                    0 0 30px -5px rgba(245, 158, 11, 0.3),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.25);
      }
    `
  },
  {
    id: '06',
    folder: '06-dev-toolbar-navbar',
    repo: 'navbar-dev-toolbar',
    title: 'Developer Toolbar',
    subtitle: 'Vercel-inspired engineering toolbar with interactive Git branch switcher & 98ms status',
    badge: 'UI COMPONENT #06',
    episode: 'REEL 06',
    accentColor: '#06b6d4',
    accentGradient: 'from-cyan-400 via-teal-500 to-indigo-500',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.45) 0%, rgba(99, 102, 241, 0.22) 45%, transparent 75%)',
    tags: ['Vercel Toolbar', 'Git Branch Switcher', 'Live Deployment', 'Copy Email'],
    renderNavbar: `
      <nav class="dev-toolbar rounded-2xl px-5 py-3 flex items-center gap-4 shadow-2xl relative select-none font-mono">
        <div class="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-xl bg-white/[0.06] border border-white/10 text-xs">
          <div class="w-5 h-5 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm flex-shrink-0">
            BM
          </div>
          <span class="font-bold text-white whitespace-nowrap">bahaa.dev</span>
          <span class="text-neutral-500">/</span>
          <span class="text-neutral-300">ready-uis</span>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.08] border border-white/10 text-xs text-neutral-200 whitespace-nowrap">
          <svg class="w-3.5 h-3.5 text-cyan-400 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
          <span class="font-semibold text-white">main</span>
          <svg class="w-3 h-3 text-neutral-400 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
        </div>

        <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.08] border border-white/10 text-xs whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="font-bold text-white">Ready</span>
          <span class="text-neutral-500">•</span>
          <span class="text-emerald-400 font-semibold">98ms</span>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-1 font-sans">
          <span class="px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-white/[0.12] whitespace-nowrap">Work</span>
          <span class="px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Projects</span>
          <span class="px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">Stack</span>
          <span class="px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-300 hover:text-white whitespace-nowrap">About</span>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-2 flex-shrink-0 font-sans">
          <div class="w-8 h-8 rounded-xl flex items-center justify-center text-neutral-300 bg-white/[0.06] border border-white/10">
            <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
          </div>
          <div class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-neutral-900 bg-white shadow-md whitespace-nowrap">
            <span>Get in Touch</span>
            <svg class="w-3.5 h-3.5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10"></path></svg>
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .dev-toolbar {
        background: rgba(10, 12, 16, 0.94);
        backdrop-filter: blur(28px) saturate(190%);
        -webkit-backdrop-filter: blur(28px) saturate(190%);
        border: 1px solid rgba(255, 255, 255, 0.16);
        box-shadow: 0 35px 90px -20px rgba(0, 0, 0, 0.95),
                    0 0 30px -5px rgba(6, 182, 212, 0.3),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.25);
      }
    `
  }
];

function buildReelHtml(item) {
  // Dimensions: 1080 x 1920 (Instagram Reel 9:16)
  // Profile Feed Grid Safe Zone: Y = 420px to Y = 1500px (1080x1080 square in the dead-center)
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    }
    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }
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
        linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
      background-size: 40px 40px;
    }
    .ambient-glow-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1000px;
      height: 1000px;
      background: ${item.glowGradient};
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
      background: radial-gradient(circle, ${item.accentColor}25 0%, transparent 70%);
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
    ${item.extraStyles}
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
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>${item.episode}</span>
      </div>
      <div class="px-4 py-2 rounded-full bg-white/[0.04] border border-white/5 text-xs font-mono font-medium text-neutral-400">
        READY-UIS SERIES
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
    <div class="flex flex-col items-center w-full mt-4">
      <!-- Pill Badge -->
      <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.08] border border-white/15 text-xs font-mono font-bold tracking-widest uppercase text-white shadow-xl backdrop-blur-md mb-6">
        <span class="w-2 h-2 rounded-full" style="background-color: ${item.accentColor}; box-shadow: 0 0 12px ${item.accentColor};"></span>
        <span>${item.badge}</span>
      </div>

      <!-- Main Title -->
      <h1 class="text-5xl font-black tracking-tight text-white mb-4 leading-[1.1] max-w-2xl">
        ${item.title}
      </h1>

      <!-- Subtitle -->
      <p class="text-neutral-400 font-medium text-lg max-w-xl leading-relaxed">
        ${item.subtitle}
      </p>
    </div>

    <!-- Center of Safe Zone: Large Component Mockup -->
    <div class="w-full flex items-center justify-center my-6 scale-[1.18] transform transition-transform">
      ${item.renderNavbar}
    </div>

    <!-- Bottom of Safe Zone: Feature Pills & Reel Prompt -->
    <div class="flex flex-col items-center w-full mb-4">
      <!-- Feature Pills -->
      <div class="flex flex-wrap items-center justify-center gap-2.5 mb-6 max-w-xl">
        ${item.tags.map(tag => `
          <span class="px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono font-semibold text-neutral-200 backdrop-blur-md">
            ${tag}
          </span>
        `).join('')}
      </div>

      <!-- Watch Reel CTA Pill -->
      <div class="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r ${item.accentGradient} text-white text-xs font-mono font-bold tracking-wider uppercase shadow-2xl shadow-indigo-500/30">
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
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span class="font-medium text-neutral-300">Free Open-Source Code</span>
      </div>
      <div class="font-mono text-neutral-300">
        github.com/IBahaaaldin/${item.repo}
      </div>
    </div>

    <div class="flex items-center gap-2 text-[11px] font-mono text-neutral-500 pt-1">
      <span>Bahaa Mohammed</span>
      <span>•</span>
      <span>Creative Software Engineer</span>
      <span>•</span>
      <span>Dubai, UAE</span>
    </div>
  </footer>

</body>
</html>`;
}

(async () => {
  console.log('Launching Chrome for Instagram Reel Covers (1080x1920)...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const baseDir = path.join(__dirname, '..', 'navbars');

  for (const item of items) {
    const itemDir = path.join(baseDir, item.folder);
    console.log(`Generating Instagram Reel Cover for ${item.title}...`);

    const context = await browser.newContext({
      viewport: { width: 1080, height: 1920 },
      deviceScaleFactor: 2 // 2160 x 3840 ultra-sharp 4K Retina quality
    });

    const page = await context.newPage();
    const html = buildReelHtml(item);
    const tempHtmlPath = path.join('/tmp', `cover-reel-${item.id}.html`);
    fs.writeFileSync(tempHtmlPath, html, 'utf8');

    await page.goto('file://' + tempHtmlPath, { waitUntil: 'load' });
    await page.waitForFunction(() => typeof window.tailwind === 'object');
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(800);

    const reelCoverPath = path.join(itemDir, 'cover-reel.png');
    await page.screenshot({ path: reelCoverPath });
    console.log(`✅ Saved: ${reelCoverPath}`);

    if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);

    await page.close();
    await context.close();
  }

  await browser.close();
  console.log('🎉 All 4 Instagram Reel Covers generated successfully!');
})();
