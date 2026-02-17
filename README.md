<div align="center">

```
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
                                                                          
          T  E  M  P  L  A  T  E  S
```

**A curated collection of developer portfolio templates — ready to deploy, built to impress.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
[![Forks](https://img.shields.io/github/forks/ares-coding/portfolio-templates?style=flat-square)](https://github.com/ares-coding/portfolio-templates/forks)
[![Stars](https://img.shields.io/github/stars/ares-coding/portfolio-templates?style=flat-square)](https://github.com/ares-coding/portfolio-templates/stargazers)

</div>

---

## ✦ What Is This?

Stop starting from scratch. **portfolio-templates** is a growing collection of beautiful, production-ready portfolio websites for developers — each built with a different stack so you can pick what fits your workflow.

Whether you're a frontend dev, a full-stack engineer, or just getting started — there's a template here with your name on it.

---

## 📁 Templates at a Glance

| Version | Languages | Framework / Stack | Level |
|---|---|---|---|
| [`portfolio-v1`](./portfolio-v1) | ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white) ![JS](https://img.shields.io/badge/JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Vanilla — no framework, no build step | ⭐ Beginner |
| [`portfolio-v3`](./portfolio-v3) | ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white) ![JS](https://img.shields.io/badge/JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Bootstrap 5 via CDN | ⭐⭐ Beginner+ |
| [`portfolio-v5`](./portfolio-v5) | ![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white) ![JS](https://img.shields.io/badge/JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Tailwind CSS (CDN or PostCSS) | ⭐⭐ Intermediate |
| [`portfolio-v6`](./portfolio-v6) | ![JSX](https://img.shields.io/badge/JSX-61DAFB?style=flat-square&logo=react&logoColor=black) ![JS](https://img.shields.io/badge/JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | React (Create React App) | ⭐⭐⭐ Intermediate |
| [`portfolio-v7`](./portfolio-v7) | ![JSX](https://img.shields.io/badge/JSX-61DAFB?style=flat-square&logo=react&logoColor=black) ![JS](https://img.shields.io/badge/JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Next.js (App Router) | ⭐⭐⭐⭐ Advanced |

> More templates added regularly — watch the repo to stay updated.

---

## 🚀 Getting Started

### Clone the whole repo
```bash
git clone https://github.com/ares-coding/portfolio-templates.git
cd portfolio-templates
```

### Or grab just one template
```bash
git clone --filter=blob:none --sparse https://github.com/ares-coding/portfolio-templates.git
cd portfolio-templates
git sparse-checkout set portfolio-v5
```

---

## ⚡ Quick Setup Per Version

<details>
<summary><strong>🟠 portfolio-v1 — HTML + CSS + Vanilla JS</strong></summary>

**Languages:** HTML · CSS · JavaScript  
**Dependencies:** None  
**Build step:** None

```bash
cd portfolio-v1
open index.html
# Or just drag index.html into your browser
```

No install, no build, no config. Open and edit. Perfect for developers who want full control without any tooling overhead.
</details>

<details>
<summary><strong>🔵 portfolio-v3 — Bootstrap 5</strong></summary>

**Languages:** HTML · CSS · JavaScript  
**Dependencies:** Bootstrap 5 (loaded via CDN — nothing to install)  
**Build step:** None

```bash
cd portfolio-v3
open index.html
```

Uses Bootstrap's grid system and utility classes. Fast to customize and responsive out of the box.
</details>

<details>
<summary><strong>🟢 portfolio-v5 — Tailwind CSS</strong></summary>

**Languages:** HTML · CSS · JavaScript  
**Dependencies:** Tailwind CSS, PostCSS, Autoprefixer  
**Build step:** `npm run dev`

```bash
cd portfolio-v5
npm install
npm run dev
```

Utility-first styling. Fully customizable by editing Tailwind classes directly in HTML. Modify `tailwind.config.js` to change the color scheme or fonts globally.
</details>

<details>
<summary><strong>⚛️ portfolio-v6 — React (JSX + JavaScript)</strong></summary>

**Languages:** JSX · JavaScript  
**Dependencies:** React, ReactDOM, CRA toolchain  
**Build step:** `npm start`

```bash
cd portfolio-v6
npm install
npm start
# Runs at http://localhost:3000
```

Component-based architecture. Each section of the portfolio is a separate `.jsx` component — edit them individually to update the page.
</details>

<details>
<summary><strong>▲ portfolio-v7 — Next.js (JSX + JavaScript)</strong></summary>

**Languages:** JSX · JavaScript  
**Dependencies:** Next.js, React, ReactDOM  
**Build step:** `npm run dev`

```bash
cd portfolio-v7
npm install
npm run dev
# Runs at http://localhost:3000
```

File-based routing with the Next.js App Router. SSR-ready, SEO-optimized, and deploys to Vercel in one click.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ares-coding/portfolio-templates/tree/main/portfolio-v7)
</details>

---

## 🎨 Customization Checklist

Each template is designed to be personalized in under 30 minutes:

- [ ] **Name & Title** — swap out placeholder text
- [ ] **About Section** — write your own bio
- [ ] **Projects** — add real work with links and screenshots
- [ ] **Skills / Tech Stack** — update the icons or tags to match yours
- [ ] **Contact Links** — GitHub, LinkedIn, email, etc.
- [ ] **Color Scheme** — CSS variables (v1/v3/v5) or component styles (v6/v7)
- [ ] **Favicon** — replace with your own
- [ ] **Meta Tags** — update OG/SEO metadata for social sharing

---

## 🗂️ Project Structure

<details>
<summary><strong>v1 / v3 / v5 — Static (HTML-based)</strong></summary>

```
portfolio-vX/
├── assets/
│   ├── images/        # Profile photo, project screenshots
│   ├── icons/         # Tech icons, social icons
│   └── css/           # Custom stylesheets
├── index.html         # Single entry point — all content lives here
└── README.md
```
</details>

<details>
<summary><strong>v6 — React (JSX)</strong></summary>

```
portfolio-v6/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/    # Hero, About, Projects, Skills, Contact
│   ├── assets/        # Images and icons
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```
</details>

<details>
<summary><strong>v7 — Next.js (JSX + App Router)</strong></summary>

```
portfolio-v7/
├── app/
│   ├── layout.jsx     # Root layout + metadata config
│   ├── page.jsx       # Home page
│   └── globals.css
├── components/        # Reusable section components
├── public/            # Static assets
├── next.config.js
├── package.json
└── README.md
```
</details>

---

## 🌐 Deployment Guide

| Template | Languages | Best Platform | Method |
|---|---|---|---|
| `v1` Vanilla | HTML / CSS / JS | GitHub Pages | Enable Pages on `main` branch |
| `v3` Bootstrap | HTML / CSS / JS | GitHub Pages / Netlify | Push to repo or drag-and-drop to Netlify |
| `v5` Tailwind | HTML / CSS / JS | Netlify / GitHub Pages | `npm run build` → deploy `/dist` |
| `v6` React | JSX / JS | Vercel / Netlify | Connect repo → CRA auto-detected |
| `v7` Next.js | JSX / JS | **Vercel** (recommended) | Connect repo → zero config deploy |

---

## 🤝 Contributing

Got a portfolio design you're proud of? Contributions are welcome.

1. Fork the repo
2. Create a new branch: `git checkout -b portfolio-v8-vue`
3. Add your template in a clearly named folder
4. Submit a PR with a short description and a preview screenshot

Please ensure your template is fully responsive, free of paid assets, and clearly labeled with its stack and languages.

---

## 📄 License

Licensed under the **Apache 2.0 License** — use it, modify it, ship it.  
See [`LICENSE`](./LICENSE) for the full text.

---

<div align="center">

Made with 🖤 by [ares-coding](https://github.com/ares-coding)

*If this saved you time or helped you land something — drop a ⭐ on the repo.*

</div>
