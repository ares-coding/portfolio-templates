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
![Forks](https://img.shields.io/github/forks/ares-coding/portfolio-templates?style=flat-square)
![Stars](https://img.shields.io/github/stars/ares-coding/portfolio-templates?style=flat-square)

</div>

---

## ✦ What Is This?

Stop starting from scratch. **portfolio-templates** is a growing collection of beautiful, production-ready portfolio websites for developers — each built with a different stack so you can pick what fits your workflow.

Whether you're a frontend dev, a full-stack engineer, or just getting started — there's a template here with your name on it.

---

## 📁 Templates at a Glance

| Version | Stack | Description |
|---|---|---|
| `portfolio-v1` | HTML5 + CSS3 + Vanilla JS | Clean, lightweight — no dependencies, just vibes |
| `portfolio-v3` | Bootstrap 5 | Grid-based layout, responsive out of the box |
| `portfolio-v5` | Tailwind CSS | Utility-first, fully customizable in minutes |
| `portfolio-v6` | React | Component-driven with smooth interactivity |
| `portfolio-v7` | Next.js | Full-stack ready, SEO-optimized, deploy to Vercel |

> More templates being added regularly. Watch the repo to stay updated.

---

## 🚀 Getting Started

### Option 1 — Clone the whole repo
```bash
git clone https://github.com/ares-coding/portfolio-templates.git
cd portfolio-templates
```

### Option 2 — Just grab the template you want
```bash
# Example: grab only the Tailwind version
git clone --filter=blob:none --sparse https://github.com/ares-coding/portfolio-templates.git
cd portfolio-templates
git sparse-checkout set portfolio-v5
```

---

## ⚡ Quick Setup Per Stack

<details>
<summary><strong>🟠 HTML / CSS / Vanilla JS (v1)</strong></summary>

No setup needed. Just open `index.html` in your browser.

```bash
cd portfolio-v1
open index.html
```
</details>

<details>
<summary><strong>🔵 Bootstrap (v3)</strong></summary>

```bash
cd portfolio-v3
open index.html
# Bootstrap is loaded via CDN — no install needed
```
</details>

<details>
<summary><strong>🟢 Tailwind CSS (v5)</strong></summary>

```bash
cd portfolio-v5
npm install
npm run dev
```
</details>

<details>
<summary><strong>⚛️ React (v6)</strong></summary>

```bash
cd portfolio-v6
npm install
npm start
```
</details>

<details>
<summary><strong>▲ Next.js (v7)</strong></summary>

```bash
cd portfolio-v7
npm install
npm run dev
# Visit http://localhost:3000
```

Deploy instantly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com)

</details>

---

## 🎨 Customization Checklist

Each template is designed to be personalized in under 30 minutes. Here's what to update:

- [ ] **Name & Title** — swap out placeholder text
- [ ] **About Section** — write your own bio
- [ ] **Projects** — add your real work with links and screenshots
- [ ] **Skills / Tech Stack** — update the icons/tags to match yours
- [ ] **Contact Links** — GitHub, LinkedIn, email, etc.
- [ ] **Color Scheme** — tweak CSS variables or Tailwind config
- [ ] **Favicon** — replace with your own
- [ ] **Meta Tags** — update OG/SEO metadata for sharing

---

## 🗂️ Project Structure (example — v5 Tailwind)

```
portfolio-v5/
├── assets/
│   ├── images/          # Your profile pic and project screenshots
│   └── icons/           # Tech stack icons
├── index.html           # Main entry point
├── tailwind.config.js   # Theme customization
├── package.json
└── README.md
```

---

## 🌐 Deployment Options

| Platform | Template Compatibility | Command |
|---|---|---|
| **GitHub Pages** | HTML, Bootstrap, Tailwind | Push to `gh-pages` branch |
| **Vercel** | React, Next.js, Tailwind | `vercel --prod` |
| **Netlify** | All | Drag & drop or CLI |
| **Render** | Next.js, React | Connect repo → auto-deploy |

---

## 🤝 Contributing

Got a portfolio design you're proud of? Contributions are welcome.

1. Fork the repo
2. Create a new branch: `git checkout -b portfolio-v8-vue`
3. Add your template in a clearly named folder
4. Submit a pull request with a short description and preview screenshot

Please ensure your template:
- Is fully responsive (mobile + desktop)
- Has no placeholder content from paid assets
- Is free of unused dependencies

---

## 📄 License

Licensed under the **Apache 2.0 License** — use it, modify it, ship it.  
See [`LICENSE`](./LICENSE) for the full text.

---

<div align="center">

Made with 🖤 by [ares-coding](https://github.com/ares-coding)

*If this helped you land a job or impressed a client — drop a ⭐ on the repo.*

</div>
