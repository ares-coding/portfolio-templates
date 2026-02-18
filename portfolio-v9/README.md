<div align="center">

```
 █████╗ ██╗   ██╗   ██████╗ ███████╗██╗   ██╗
██╔══██╗██║   ██║   ██╔══██╗██╔════╝██║   ██║
███████║██║   ██║   ██║  ██║█████╗  ██║   ██║
██╔══██║██║   ██║   ██║  ██║██╔══╝  ╚██╗ ██╔╝
██║  ██║╚██████╔╝██╗██████╔╝███████╗ ╚████╔╝ 
╚═╝  ╚═╝ ╚═════╝ ╚═╝╚═════╝ ╚══════╝  ╚═══╝  
```

# au.dev — Personal Portfolio

**AI/ML Engineer · Software Developer · Security Systems**

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-39ff14?style=for-the-badge&labelColor=0d130d&color=39ff14)](https://au.dev)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue?style=for-the-badge)](./LICENSE)

</div>

---

## ✦ Overview

Production-ready personal portfolio for **Au Amores** — Computer Science graduate and aspiring AI/ML Engineer specializing in machine learning systems, computer vision, and security-focused applications.

Built with the **Next.js 14 App Router**, **Tailwind CSS**, and **TypeScript**. Designed with a premium dark terminal aesthetic: neon green accents, CSS-only floating particles, glass morphism cards, and a glowing vertical timeline — no external UI libraries.

---

## ✦ Preview

<div align="center">

| Section | Description |
|--------|-------------|
| 🏠 **Hero** | Animated landing with radial neon glow and CTA buttons |
| 👤 **About** | Full biography + core strength cards + stats |
| ⚡ **Tech Expertise** | 3 glowing feature cards: ML · Full Stack · Security/NLP |
| 🧰 **Tech Stack** | Complete grid of 50+ tools with hover neon effects |
| 🗂️ **Projects** | 20+ project cards with gradient thumbnails and tech tags |
| 🕐 **Experience** | Glowing vertical timeline with alternating card layout |
| 📬 **Contact** | Frontend form with neon focus states |

</div>

---

## ✦ Tech Stack

```
Framework    →  Next.js 14 (App Router)
Language     →  TypeScript
Styling      →  Tailwind CSS (utility-only, no component libraries)
Fonts        →  Space Mono + JetBrains Mono (Google Fonts)
Animations   →  CSS-only (particles, scan-line, float, pulse)
Deployment   →  Vercel
```

---

## ✦ Features

- 🌑 **Dark terminal theme** — neon `#39ff14` glow accents throughout
- 🌀 **Floating particles background** — 20-particle CSS animation system
- 📡 **Scan-line CRT effect** — animated overlay for retro-futuristic feel
- 🔲 **Grid overlay** — subtle dot grid for depth and atmosphere
- 🪟 **Glass morphism cards** — backdrop blur with neon border glow on hover
- 📌 **Sticky navbar** — scroll-aware active link tracking with backdrop blur
- 🗓️ **Glowing timeline** — vertical neon line with alternating desktop layout
- 📱 **Fully responsive** — mobile-first with hamburger nav
- ⚡ **No external UI libraries** — pure Tailwind + custom CSS

---

## ✦ Getting Started

### Prerequisites

- Node.js `18.17+`
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/au-amores/au-portfolio.git
cd au-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build & Deploy

```bash
# Production build
npm run build
npm start

# Deploy to Vercel (one command)
npx vercel
```

---

## ✦ Project Structure

```
au-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky nav · scroll-aware active links · mobile menu
│   │   ├── Hero.tsx             # Landing · radial glow · CTA buttons · social icons
│   │   ├── About.tsx            # Biography · highlight cards · stats grid
│   │   ├── TechExpertise.tsx    # 3 feature cards: ML · Full Stack · Security
│   │   ├── TechStackGrid.tsx    # 50+ tech tags across 3 categories
│   │   ├── Projects.tsx         # 6 project cards · gradient thumbnails · tags
│   │   ├── Experience.tsx       # Glowing vertical timeline · alternating layout
│   │   ├── Contact.tsx          # Form UI · neon focus states
│   │   ├── Footer.tsx           # Back-to-top glow link
│   │   └── SectionWrapper.tsx   # Reusable section layout with neon label
│   ├── globals.css              # CSS animations · particles · glass styles · scrollbar
│   ├── layout.tsx               # Root layout · particles injected globally
│   └── page.tsx                 # Page composition
│
├── tailwind.config.ts           # Custom colors · neon shadows · keyframes
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## ✦ Customization

### Change the accent color

In `tailwind.config.ts`, update the `neon` value:

```ts
colors: {
  neon: "#39ff14",   // ← swap for any color
}
```

And in `globals.css`:

```css
:root {
  --neon: #39ff14;   // ← match here
}
```

### Update content

All content lives in the component files — no CMS or config file needed:

| File | Content to update |
|------|-------------------|
| `Hero.tsx` | Name, tagline, social links |
| `About.tsx` | Biography, stats |
| `TechExpertise.tsx` | Expertise cards and tags |
| `TechStackGrid.tsx` | Full tech stack list |
| `Projects.tsx` | Project cards, descriptions, live/repo URLs |
| `Experience.tsx` | Timeline entries |
| `Contact.tsx` | Contact info |

### Add real project links

In `Projects.tsx`, find the button group and replace `href="#"` with real URLs:

```tsx
<a href="https://your-live-url.com" target="_blank" rel="noopener noreferrer">LIVE</a>
<a href="https://github.com/you/repo" target="_blank" rel="noopener noreferrer">REPO</a>
```

---

## ✦ Sections

### Hero
Animated landing section with a radial neon glow, availability badge, name, role tagline, and CTA buttons (View Projects / Contact Me). Includes social icon placeholders and an animated scroll indicator.

### About
Full biography with 3 core strength cards (Debugging · System Analysis · Problem Solving) and a stats grid (Projects · Years Dev · Transactions).

### Tech Expertise
Three glowing feature cards covering Machine Learning, Full Stack Development, and Security & NLP — each with a description and technology tags that glow on hover.

### Tech Stack Grid
Complete stack across three categories: **Machine Learning & AI** (21 tools), **Languages & Frameworks** (16 tools), and **Developer Tools** (12 tools). Each tag scales and glows on hover.

### Projects
Six project cards with gradient thumbnail placeholders, descriptions, tech tags, and Live/Repo action buttons. Projects include the Alcohol Intoxication Detection thesis (CNN+SVM), PhishGuard AI, JWT Auth System, Malicious URL Detection, SQL Injection Detection, and Portfolio Websites.

### Experience
Vertical glowing timeline with 4 entries spanning 2021–present: AI/ML Engineering, Freelance Full Stack Dev, Recruitment Officer, and Online Administrative Assistant. Alternating card layout on desktop, left-aligned on mobile.

### Contact
Full contact form UI with name, email, subject, and message fields. Neon glow on focus. Contact info panel with email, GitHub, and LinkedIn placeholders plus an availability badge.

---

## ✦ Performance Notes

- CSS-only animations — zero JavaScript animation overhead
- Google Fonts loaded via `@import` in `globals.css`
- No external component libraries (Radix, shadcn, MUI, etc.)
- Images use `next/image` for automatic optimization
- Smooth scroll via native CSS `scroll-behavior: smooth`

---

## ✦ License

Licensed under the **Apache License 2.0** — free to use, modify, and distribute for personal or commercial projects. You must include the original license and copyright notice, and state any significant changes made to the code. See [`LICENSE`](./LICENSE) for full terms.

---

<div align="center">

Built by **Au Amores** · AI/ML Engineer & Software Developer

```
[ AI/ML ] · [ Computer Vision ] · [ NLP ] · [ Security ] · [ Full Stack ]
```

</div>
