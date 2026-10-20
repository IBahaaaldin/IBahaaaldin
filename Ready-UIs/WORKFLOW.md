# 📋 Ready-UIs Standardized Component Workflow & Pipeline

This document defines the strict, non-negotiable 8-step pipeline that MUST be followed for every single UI component in the Ready-UIs suite. No steps may be skipped, reordered, or abbreviated.

---

## 🔁 The 8-Step Pipeline

```
1. Code Component (index.html)
   ↓
2. Record Visuals (record.js -> screenshots & videos)
   ↓
3. Generate Cover Suite (make-covers.js & make-reel-covers.js)
   ↓
4. Standardized Documentation (README.md & CAPTION.md)
   ↓
5. Assemble Social Post Pack (slide-1, slide-2, slide-3, caption.txt)
   ↓
6. Standalone GitHub Repo (Create repo & Enable GitHub Pages)
   ↓
7. Push Standalone Repository (Sync 11 files)
   ↓
8. Monorepo Update (Update root README.md & push origin/main)
```

---

## 📦 Required Files Per Component (Strict 11 Files)

Every component folder (`navbars/XX-...`) MUST contain exactly these 11 files:

| # | File | Purpose | Resolution / Spec |
| :-: | :--- | :--- | :--- |
| 1 | `index.html` | Self-contained production component | Tailwind CDN, dead-center canvas, dark/light switch |
| 2 | `record.js` | Automated Playwright recording script | Records interactions, hovers, clicks, theme toggles |
| 3 | `screenshot-desktop.png` | High-res desktop preview | **`2400 × 1800`** (1200×900 @ 2x) |
| 4 | `screenshot-mobile.png` | High-res mobile preview | **`780 × 1688`** (390×844 @ 2x) |
| 5 | `video-desktop.mp4` | Desktop interaction video | **`1200 × 900`** @ 30fps (h264) |
| 6 | `video-mobile.mp4` | Mobile interaction video | **`390 × 844`** @ 30fps (h264) |
| 7 | `cover.png` | Widescreen banner cover | **`2560 × 1280`** (2:1 aspect ratio) |
| 8 | `cover-instagram.png` | Square Instagram post cover | **`2160 × 2160`** (1:1 square) |
| 9 | `cover-reel.png` | Vertical Instagram Reel cover | **`2160 × 3840`** (9:16 vertical) |
| 10 | `README.md` | Standardized documentation | Top banner, badges, 4-column preview table, structure |
| 11 | `CAPTION.md` | Instagram post caption | Hook, features, CTA, hashtags for @ibahaaaldincoding |

---

## 📝 Standardized README.md Structure

Every component `README.md` MUST strictly follow this exact layout:

1. `# [Emoji] [Component Title]`
2. `> [One-line punchy description]`
3. `![Cover Preview](cover.png)` *(Widescreen cover banner at the top)*
4. `[![Live Demo](...)](https://IBahaaaldin.github.io/REPO_NAME/)`
5. `[![GitHub Pages](...)](https://IBahaaaldin.github.io/REPO_NAME/)`
6. `## 🌐 Visual Previews` table:
   - Column 1: `![Desktop Preview](screenshot-desktop.png)`
   - Column 2: `<img src="screenshot-mobile.png" width="160" alt="Mobile Preview" />`
   - Column 3: `<img src="cover-instagram.png" width="160" alt="Instagram Post Cover" />`
   - Column 4: `<img src="cover-reel.png" width="160" alt="Instagram Reel Cover" />`
   - Footnote: `*(Includes full interaction videos: video-desktop.mp4 and video-mobile.mp4)*`
7. `## ✨ Features & Micro-Interactions`
8. `## 📁 Repository Structure` (tree showing the 11 files)
9. `## 🚀 Quick Start` (View Locally, Re-record Assets)
10. `## 👤 Author & Connect`
11. `## 📄 License`

---

## 📱 Standardized Social Post Pack

Every component MUST have a matching folder in:
- `Ready-UIs/social-posts/Post-XX-[Name]/`
- `~/Desktop/Instagram-Posts/Post-XX-[Name]/`

Containing:
- `slide-1.png` → `cover-instagram.png`
- `slide-2.mp4` → `video-desktop.mp4`
- `slide-3.mp4` → `video-mobile.mp4`
- `caption.txt` → `CAPTION.md`

---

## 🌐 GitHub Pages Deployment

Every standalone repository MUST have GitHub Pages enabled from `main` root `/`:
```bash
gh api --method POST "repos/IBahaaaldin/[repo-name]/pages" -f "source[branch]=main" -f "source[path]=/"
```
Live demo URL: `https://IBahaaaldin.github.io/[repo-name]/`
