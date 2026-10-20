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
  },
  {
    id: '05',
    folder: '05-studio-media-navbar',
    repo: 'navbar-studio-media',
    title: 'Studio Media Dock',
    tagline: 'Ambient audio player dock with spinning vinyl, live dancing equalizer & Dubai clock',
    badge: 'READY UI #05',
    accentColor: '#f59e0b',
    glowGradient: 'radial-gradient(circle at 50% 55%, rgba(245, 158, 11, 0.35) 0%, rgba(244, 63, 94, 0.15) 45%, transparent 75%)',
    tags: ['Music Player', 'Equalizer Bars', 'Spinning Vinyl', 'Dark / Light Mode'],
    renderNavbar: `
      <nav class="studio-dock rounded-full px-4 py-2.5 flex items-center gap-3.5 shadow-2xl relative select-none">
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

        <div class="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 whitespace-nowrap">
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

        <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-neutral-200 text-[11px] font-mono whitespace-nowrap">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>DXB 04:45 PM</span>
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
        background: rgba(12, 14, 20, 0.92);
        backdrop-filter: blur(28px) saturate(190%);
        -webkit-backdrop-filter: blur(28px) saturate(190%);
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.95),
                    0 0 25px -5px rgba(245, 158, 11, 0.25),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.25);
      }
    `
  },
  {
    id: '06',
    folder: '06-dev-toolbar-navbar',
    repo: 'navbar-dev-toolbar',
    title: 'Developer Toolbar Navbar',
    tagline: 'Vercel-inspired toolbar with interactive Git branch switcher, deployment status & copy email',
    badge: 'READY UI #06',
    accentColor: '#06b6d4',
    glowGradient: 'radial-gradient(circle at 50% 55%, rgba(6, 182, 212, 0.35) 0%, rgba(99, 102, 241, 0.15) 45%, transparent 75%)',
    tags: ['Vercel Toolbar', 'Git Branch Switcher', 'Live Deployment', 'Copy Email'],
    renderNavbar: `
      <nav class="dev-toolbar rounded-2xl px-3.5 py-2 flex items-center gap-2.5 shadow-2xl relative select-none font-mono">
        <div class="flex items-center gap-2 pl-1 pr-2 py-0.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs">
          <div class="w-5 h-5 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm flex-shrink-0">
            BM
          </div>
          <span class="font-bold text-white whitespace-nowrap">bahaa.dev</span>
          <span class="text-neutral-500">/</span>
          <span class="text-neutral-300">ready-uis</span>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs text-neutral-200 whitespace-nowrap">
          <svg class="w-3.5 h-3.5 text-cyan-400 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
          <span class="font-semibold text-white">main</span>
          <svg class="w-3 h-3 text-neutral-400 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
        </div>

        <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs whitespace-nowrap">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="font-bold text-white">Ready</span>
          <span class="text-neutral-500">•</span>
          <span class="text-emerald-400 font-semibold">98ms</span>
        </div>

        <div class="h-6 w-[1px] bg-neutral-800 flex-shrink-0"></div>

        <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs text-neutral-200 whitespace-nowrap">
          <svg class="w-3.5 h-3.5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span class="whitespace-nowrap">bahaam.coding</span>
        </div>

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
        background: rgba(10, 12, 16, 0.92);
        backdrop-filter: blur(28px) saturate(190%);
        -webkit-backdrop-filter: blur(28px) saturate(190%);
        border: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.95),
                    0 0 25px -5px rgba(6, 182, 212, 0.25),
                    inset 0 1px 0 0 rgba(255, 255, 255, 0.25);
      }
    `
  },
  {
    id: '07',
    folder: '07-fluid-mega-menu-navbar',
    repo: 'navbar-fluid-mega-menu',
    title: 'Fluid Morphing Mega-Menu',
    tagline: 'Spring-animated morphing dropdown container with sliding indicator arrow',
    badge: 'READY UI #07',
    accentColor: '#6366f1',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.45) 0%, rgba(168, 85, 247, 0.2) 45%, transparent 75%)',
    tags: ['Tailwind CSS', 'Fluid Morph', 'Spring Physics', 'Mega-Menu', 'Dark / Light'],
    renderNavbar: `
      <div class="relative flex flex-col items-center">
        <nav class="flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/10 bg-neutral-950/80 backdrop-blur-2xl shadow-2xl">
          <div class="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full whitespace-nowrap">
            <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[1.5px]">
              <div class="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center text-[10px] font-bold text-white">BM</div>
            </div>
            <div class="flex flex-col text-left">
              <span class="text-xs font-semibold text-white whitespace-nowrap">Bahaa Mohammed</span>
              <span class="text-[9px] text-neutral-400 whitespace-nowrap">Senior Frontend</span>
            </div>
          </div>
          <div class="h-4 w-px bg-white/10 mx-1"></div>
          <div class="flex items-center gap-1">
            <span class="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-white/10">Products</span>
            <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-400">Solutions</span>
            <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-400">Resources</span>
            <span class="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-400">Pricing</span>
          </div>
          <div class="h-4 w-px bg-white/10 mx-1"></div>
          <div class="flex items-center gap-2 pl-1 pr-1">
            <span class="px-3 py-1 text-xs font-medium text-neutral-300">Sign In</span>
            <span class="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-xs font-semibold text-white shadow-md">Get Started</span>
          </div>
        </nav>
      </div>
    `,
    extraStyles: ``
  },
  {
    id: '08',
    folder: '08-visionos-glass-navbar',
    repo: 'navbar-visionos-glass',
    title: 'VisionOS Spatial Glass Dock',
    tagline: 'Spatial frosted glassmorphism with 3D tilt physics & specular light refraction',
    badge: 'READY UI #08',
    accentColor: '#06b6d4',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.45) 0%, rgba(59, 130, 246, 0.22) 45%, transparent 75%)',
    tags: ['Tailwind CSS', 'VisionOS Glass', '3D Tilt Physics', 'Specular Refraction', 'Control Center'],
    renderNavbar: `
      <nav class="vision-dock flex items-center gap-2 px-4 py-2.5 rounded-full select-none">
        <div class="flex items-center gap-2 pl-1 pr-2 py-0.5 rounded-full whitespace-nowrap">
          <div class="relative w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-400 p-[1.5px]">
            <div class="w-full h-full rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-[10px] font-bold text-white">BM</div>
            <span class="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)] border-2 border-black"></span>
          </div>
          <div class="flex flex-col text-left">
            <span class="text-xs font-semibold text-white whitespace-nowrap">Bahaa Mohammed</span>
            <span class="text-[9px] text-neutral-400 whitespace-nowrap">Spatial UI & Frontend</span>
          </div>
        </div>

        <div class="h-4 w-px bg-white/15 mx-1"></div>

        <div class="flex items-center gap-1 p-0.5 rounded-full bg-white/[0.05]">
          <span class="px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-white/20 shadow-sm border border-white/20 whitespace-nowrap">Spatial 3D</span>
          <span class="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-400 whitespace-nowrap">Canvas</span>
          <span class="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-400 whitespace-nowrap">Studio</span>
          <span class="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-400 whitespace-nowrap">Experiments</span>
        </div>

        <div class="h-4 w-px bg-white/15 mx-1"></div>

        <div class="flex items-center gap-2">
          <div class="px-3 py-1.5 rounded-full bg-white/10 text-xs font-medium text-cyan-300 border border-white/10 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Controls</span>
          </div>
          <div class="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white shadow-md">
            Connect
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .vision-dock {
        background: rgba(255, 255, 255, 0.06);
        backdrop-filter: blur(40px) saturate(190%);
        -webkit-backdrop-filter: blur(40px) saturate(190%);
        border: 1px solid rgba(255, 255, 255, 0.16);
        box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.7),
                    0 0 25px -5px rgba(6, 182, 212, 0.3),
                    inset 0 1px 1px 0 rgba(255, 255, 255, 0.3);
      }
    `
  },
  {
    id: '09',
    folder: '09-cyber-hud-navbar',
    repo: 'navbar-cyber-hud',
    title: 'Cyber Tactical HUD Terminal',
    tagline: 'Futuristic HUD navigation with CRT command terminal & live telemetry stream',
    badge: 'READY UI #09',
    accentColor: '#00f3ff',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(0, 243, 255, 0.4) 0%, rgba(0, 255, 102, 0.2) 45%, transparent 75%)',
    tags: ['Tailwind CSS', 'Cyber HUD', 'CRT Terminal', 'Web Audio API', 'Telemetry'],
    renderNavbar: `
      <nav class="cyber-nav px-4 py-2.5 flex items-center gap-3 text-xs font-mono select-none">
        <div class="flex items-center gap-2.5 pl-1">
          <div class="w-8 h-8 rounded-sm bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 font-bold text-xs shadow-[0_0_10px_rgba(0,243,255,0.4)]">
            BM
          </div>
          <div class="flex flex-col text-left leading-tight">
            <span class="text-xs font-bold text-cyan-300 tracking-wider whitespace-nowrap">BAHAA MOHAMMED</span>
            <span class="text-[9px] text-slate-400 whitespace-nowrap">SYS-ARCH // LVL-04</span>
          </div>
        </div>

        <div class="h-4 w-px bg-cyan-500/30 mx-1"></div>

        <div class="flex items-center gap-1">
          <span class="px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-semibold shadow-[0_0_8px_rgba(0,243,255,0.3)] whitespace-nowrap">01 // DEPLOY</span>
          <span class="px-2.5 py-1 rounded text-slate-400 whitespace-nowrap">02 // CLUSTER</span>
          <span class="px-2.5 py-1 rounded text-slate-400 whitespace-nowrap">03 // SECURITY</span>
        </div>

        <div class="h-4 w-px bg-cyan-500/30 mx-1"></div>

        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-semibold">
            <span class="animate-pulse">_></span>
            <span>TERMINAL</span>
          </div>
          <div class="px-3 py-1 rounded bg-cyan-400 text-black font-bold shadow-[0_0_12px_rgba(0,243,255,0.5)]">
            UPLINK
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .cyber-nav {
        background: #070c18;
        border: 1px solid rgba(0, 243, 255, 0.4);
        clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);
        box-shadow: 0 0 25px -5px rgba(0, 243, 255, 0.35), inset 0 0 15px -3px rgba(0, 243, 255, 0.15);
      }
    `
  },
  {
    id: '10',
    folder: '10-neumorphic-soft-navbar',
    repo: 'navbar-neumorphic-soft',
    title: 'Tactile Neumorphic Soft-UI',
    tagline: 'Modern dual-shadow soft extrusions with mechanical inset depression physics',
    badge: 'READY UI #10',
    accentColor: '#6366f1',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.35) 0%, rgba(168, 85, 247, 0.18) 45%, transparent 75%)',
    tags: ['Tailwind CSS', 'Neumorphism 2.0', 'Spring Pill', 'Haptic Controls', 'Dark / Light'],
    renderNavbar: `
      <nav class="neu-card p-2.5 rounded-2xl flex items-center gap-3.5 select-none">
        <div class="flex items-center gap-2.5 px-3 py-1.5 rounded-xl neu-raised text-white font-bold text-sm tracking-tight">
          <div class="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-extrabold text-xs">
            N
          </div>
          <span>SoftUI</span>
        </div>

        <div class="h-5 w-px bg-slate-700/40"></div>

        <div class="flex items-center p-1 rounded-xl neu-pressed gap-1">
          <span class="px-3 py-1 rounded-lg neu-raised text-xs font-semibold text-indigo-400 whitespace-nowrap">Overview</span>
          <span class="px-3 py-1 text-xs font-semibold text-slate-400 whitespace-nowrap">Tactile</span>
          <span class="px-3 py-1 text-xs font-semibold text-slate-400 whitespace-nowrap">Components</span>
          <span class="px-3 py-1 text-xs font-semibold text-slate-400 whitespace-nowrap">Showcase</span>
        </div>

        <div class="h-5 w-px bg-slate-700/40"></div>

        <div class="flex items-center gap-2">
          <div class="px-3 py-1.5 rounded-xl neu-raised text-xs font-semibold text-slate-300">
            Haptics
          </div>
          <div class="px-3.5 py-1.5 rounded-xl neu-raised text-xs font-bold text-white text-indigo-400">
            Connect
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .neu-card {
        background: #181d27;
        box-shadow: 9px 9px 20px #0e1117, -9px -9px 20px #222937;
      }
      .neu-raised {
        background: #181d27;
        box-shadow: 4px 4px 10px #0e1117, -4px -4px 10px #222937;
      }
      .neu-pressed {
        background: #151a23;
        box-shadow: inset 3px 3px 6px #0a0d13, inset -3px -3px 6px #222937;
      }
    `
  },
  {
    id: '11',
    folder: '11-swiss-editorial-navbar',
    repo: 'navbar-swiss-editorial',
    title: 'Swiss International Editorial',
    tagline: 'Modernist Bauhaus editorial bar with live world clocks & kinetic marquee',
    badge: 'READY UI #11',
    accentColor: '#ff3b30',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(255, 59, 48, 0.35) 0%, rgba(0, 47, 167, 0.2) 45%, transparent 75%)',
    tags: ['Tailwind CSS', 'Swiss Modernism', 'World Clocks', 'Kinetic Ticker', 'Index Drawer'],
    renderNavbar: `
      <nav class="flex flex-col bg-[#16181A] border border-white/10 select-none shadow-xl max-w-xl w-full">
        <div class="w-full bg-black text-white text-[9px] font-mono tracking-wider py-1 px-3 border-b border-white/10 whitespace-nowrap overflow-hidden">
          <span>INTERNATIONAL TYPOGRAPHIC STYLE // ISSUE NO. 11 // CURATED BY BAHAA MOHAMMED</span>
        </div>
        <div class="flex items-center justify-between p-3 gap-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 bg-white text-black font-mono font-bold text-xs tracking-tighter">SWISS</span>
            <span class="font-bold text-sm tracking-tight text-white">ARCHIV</span>
          </div>
          <div class="flex items-center gap-1 font-mono text-xs">
            <span class="px-2.5 py-1 border border-[#FF3B30] bg-[#FF3B30]/10 text-[#FF3B30] font-bold">01 / MANIFESTO</span>
            <span class="px-2.5 py-1 text-slate-400">02 / CATALOG</span>
            <span class="px-2.5 py-1 text-slate-400">03 / EDITIONS</span>
          </div>
          <div class="flex items-center gap-2 font-mono text-xs">
            <div class="px-2.5 py-1 border border-white/10 bg-white/5 text-white">INDEX ↓</div>
            <div class="px-3 py-1 bg-[#FF3B30] text-white font-bold">INQUIRE →</div>
          </div>
        </div>
      </nav>
    `,
    extraStyles: ``
  },
  {
    id: '12',
    folder: '12-chromatic-prism-navbar',
    repo: 'navbar-chromatic-prism',
    title: 'Refractive Chromatic Prism Glass',
    tagline: 'Refractive crystal glass with cursor-tracking rainbow chromatic dispersion',
    badge: 'READY UI #12',
    accentColor: '#d946ef',
    glowGradient: 'radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.4) 0%, rgba(6, 182, 212, 0.25) 45%, transparent 75%)',
    tags: ['Tailwind CSS', 'Chromatic Prism', '3D Crystal Tilt', 'Spectrum Tuner', 'Refraction'],
    renderNavbar: `
      <nav class="prism-cover-dock flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl select-none relative">
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-amber-200">PRISM</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-white/10 font-mono text-slate-300">v1.2</span>
        </div>

        <div class="flex items-center p-1 rounded-xl bg-black/30 border border-white/5 gap-1">
          <span class="px-3.5 py-1 rounded-lg bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/20 to-purple-500/20 border border-white/20 text-xs font-semibold text-cyan-300 shadow-[0_0_15px_rgba(0,200,255,0.3)] whitespace-nowrap">Refraction</span>
          <span class="px-3 py-1 text-xs font-semibold text-slate-400 whitespace-nowrap">Dispersion</span>
          <span class="px-3 py-1 text-xs font-semibold text-slate-400 whitespace-nowrap">Spectrum</span>
        </div>

        <div class="flex items-center gap-2">
          <div class="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <span class="text-cyan-400">⚡</span>
            <span>Tuner</span>
          </div>
          <div class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 text-xs font-bold text-white shadow-[0_0_15px_rgba(255,0,128,0.4)]">
            Connect
          </div>
        </div>
      </nav>
    `,
    extraStyles: `
      .prism-cover-dock {
        background: rgba(15, 17, 26, 0.75);
        backdrop-filter: blur(24px) saturate(180%);
        border: 1.5px solid transparent;
        border-image: linear-gradient(135deg, #ff0055, #ffdd00, #00ff88, #00ccff, #7700ff) 1;
        border-radius: 1rem;
        box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 25px -5px rgba(217, 70, 239, 0.3);
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
    const tempWidescreen = path.join('/tmp', `cover-wide-${item.id}.html`);
    fs.writeFileSync(tempWidescreen, htmlWidescreen, 'utf8');

    await pageWidescreen.goto('file://' + tempWidescreen, { waitUntil: 'load' });
    await pageWidescreen.waitForFunction(() => typeof window.tailwind === 'object');
    await pageWidescreen.evaluate(() => document.fonts.ready);
    await pageWidescreen.waitForTimeout(600);

    const coverPath = path.join(itemDir, 'cover.png');
    await pageWidescreen.screenshot({ path: coverPath });
    console.log(`Saved: ${coverPath}`);
    if (fs.existsSync(tempWidescreen)) fs.unlinkSync(tempWidescreen);
    await pageWidescreen.close();
    await contextWidescreen.close();

    // 2. Instagram Square Cover (1080x1080)
    const contextSquare = await browser.newContext({
      viewport: { width: 1080, height: 1080 },
      deviceScaleFactor: 2
    });
    const pageSquare = await contextSquare.newPage();
    const htmlSquare = buildHtml(item, true);
    const tempSquare = path.join('/tmp', `cover-square-${item.id}.html`);
    fs.writeFileSync(tempSquare, htmlSquare, 'utf8');

    await pageSquare.goto('file://' + tempSquare, { waitUntil: 'load' });
    await pageSquare.waitForFunction(() => typeof window.tailwind === 'object');
    await pageSquare.evaluate(() => document.fonts.ready);
    await pageSquare.waitForTimeout(600);

    const coverInstaPath = path.join(itemDir, 'cover-instagram.png');
    await pageSquare.screenshot({ path: coverInstaPath });
    console.log(`Saved: ${coverInstaPath}`);
    if (fs.existsSync(tempSquare)) fs.unlinkSync(tempSquare);
    await pageSquare.close();
    await contextSquare.close();
  }

  await browser.close();
  console.log('All cover images generated successfully!');
})();
