<div align="center">

```
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
```

### **A curated collection of developer portfolio templates — ready to deploy, built to impress.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
[![Stars](https://img.shields.io/github/stars/ares-coding/portfolio-templates?style=flat-square&color=yellow)](https://github.com/ares-coding/portfolio-templates/stargazers)
[![Forks](https://img.shields.io/github/forks/ares-coding/portfolio-templates?style=flat-square&color=orange)](https://github.com/ares-coding/portfolio-templates/forks)
[![Issues](https://img.shields.io/github/issues/ares-coding/portfolio-templates?style=flat-square&color=red)](https://github.com/ares-coding/portfolio-templates/issues)
[![Last Commit](https://img.shields.io/github/last-commit/ares-coding/portfolio-templates?style=flat-square&color=green)](https://github.com/ares-coding/portfolio-templates/commits/main)

</div>

---

## ✦ What Is This?

Stop starting from scratch.

**portfolio-templates** is a growing collection of beautiful, production-ready portfolio websites for developers — each built with a different tech stack so you can pick the one that fits your workflow. Clone it, customize it, and ship it to land your next job or client.

Whether you're a frontend dev, a full-stack engineer, or just getting started — there's a template here with your name on it.

---

## 📁 Templates at a Glance

| Version | Stack | Difficulty | Best For |
|--------|-------|------------|----------|
| [`portfolio-v1`](./portfolio-v1) | HTML5 + CSS3 + Vanilla JS | 🟢 Beginner | No build tools, just open and go |
| [`portfolio-v3`](./portfolio-v3) | Bootstrap 5 | 🟢 Beginner | Quick setup, responsive grid |
| [`portfolio-v5`](./portfolio-v5) | Tailwind CSS | 🟡 Intermediate | Utility-first, fully customizable |
| [`portfolio-v6`](./portfolio-v6) | React | 🟡 Intermediate | Component-driven, interactive UI |
| [`portfolio-v7`](./portfolio-v7) | Next.js | 🔴 Advanced | SEO-optimized, full-stack ready |

> 🚧 More templates coming. Watch the repo to stay updated.

---

## 🚀 Getting Started

### Option A — Clone everything

```bash
git clone https://github.com/ares-coding/portfolio-templates.git
cd portfolio-templates
```

### Option B — Grab just the template you need

```bash
git clone --filter=blob:none --sparse https://github.com/ares-coding/portfolio-templates.git
cd portfolio-templates
git sparse-checkout set portfolio-v5  # swap for your version
```

---

## ⚡ Quick Setup Per Stack

<details>
<summary><b>🟠 HTML / CSS / Vanilla JS — v1</b></summary>

No build steps. Just open it.

```bash
cd portfolio-v1
open index.html
```
</details>

<details>
<summary><b>🔵 Bootstrap — v3</b></summary>

Bootstrap is loaded via CDN — no install required.

```bash
cd portfolio-v3
open index.html
```
</details>

<details>
<summary><b>🟢 Tailwind CSS — v5</b></summary>

```bash
cd portfolio-v5
npm install
npm run dev
```
</details>

<details>
<summary><b>⚛️ React — v6</b></summary>

```bash
cd portfolio-v6
npm install
npm start
```
</details>

<details>
<summary><b>▲ Next.js — v7</b></summary>

```bash
cd portfolio-v7
npm install
npm run dev
# Visit http://localhost:3000
```

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ares-coding/portfolio-templates/tree/main/portfolio-v7)

</details>

---

## 🎨 Customization Checklist

Each template is designed to be personalized in **under 30 minutes**. Here's what to update:

- [ ] **Name & Title** — swap out placeholder text in the hero section
- [ ] **About Me** — write your own bio and background
- [ ] **Projects** — add your real work with descriptions, links, and screenshots
- [ ] **Skills / Stack** — update icons or tags to match your actual tools
- [ ] **Contact Links** — GitHub, LinkedIn, email, and any other socials
- [ ] **Color Scheme** — tweak CSS variables or Tailwind config to match your brand
- [ ] **Favicon** — drop in your own icon
- [ ] **Meta / OG Tags** — update title, description, and social preview image

---

## 🗂️ Project Structure

Each version follows a similar layout. Here's the Tailwind (v5) example:

```
portfolio-v5/
├── assets/
│   ├── images/          # Profile picture & project screenshots
│   └── icons/           # Tech stack icons
├── index.html           # Main entry point
├── tailwind.config.js   # Theme customization
├── package.json
└── README.md
```

---

## 🌐 Deployment Options

| Platform | Compatible Templates | Notes |
|----------|---------------------|-------|
| **GitHub Pages** | v1, v3, v5 | Push to `gh-pages` branch |
| **Vercel** | v5, v6, v7 | Auto-deploy from GitHub |
| **Netlify** | All | Drag & drop or CLI |
| **Render** | v6, v7 | Connect repo → auto builds |

---

## 🤝 Contributing

Got a portfolio design you're proud of? Contributions are welcome and encouraged.

1. Fork the repo
2. Create a new branch: `git checkout -b portfolio-v8-vue`
3. Add your template in a clearly named folder (e.g., `portfolio-v8`)
4. Open a pull request with a short description and preview screenshot

**Before submitting, make sure your template is:**
- Fully responsive (mobile + desktop)
- Free of paid/licensed placeholder assets
- Cleaned up with no unused dependencies

---

## 📄 License

Licensed under the **Apache 2.0 License** — use it, modify it, ship it.  
See [`LICENSE`](./LICENSE) for the full text.

---

<div align="center">

Made with 🖤 by [ares-coding](https://github.com/ares-coding)

*If this helped you land a job or impress a client — drop a ⭐ on the repo. It means a lot.*

</div>
