# Au.dev — Personal Portfolio

A production-ready personal portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**.

## Features
- Premium dark theme with neon green glow accents
- Floating particles + grid overlay background (CSS-only)
- Glass morphism cards with hover glow effects
- Sticky navbar with backdrop blur + active link tracking
- Fully responsive (mobile-first)
- Smooth scroll navigation
- Animated hero with scan-line CRT effect
- Vertical glowing timeline for experience
- Contact form UI

---

## Installation

### 1. Prerequisites
- Node.js 18.17+ 
- npm or yarn

### 2. Setup

```bash
# Clone or extract the project folder
cd au-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

### 4. Deploy to Vercel

```bash
npx vercel
```

---

## Project Structure

```
au-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav with active link tracking
│   │   ├── Hero.tsx            # Landing section with CTA
│   │   ├── About.tsx           # Bio + highlight cards
│   │   ├── TechExpertise.tsx   # 3 feature cards (ML, FullStack, Security)
│   │   ├── TechStackGrid.tsx   # Full tech stack grid
│   │   ├── Projects.tsx        # Project cards with gradient thumbnails
│   │   ├── Experience.tsx      # Vertical glowing timeline
│   │   ├── Contact.tsx         # Contact form UI
│   │   ├── Footer.tsx          # Footer with back-to-top
│   │   └── SectionWrapper.tsx  # Reusable section layout
│   ├── globals.css             # Global styles + particles + animations
│   ├── layout.tsx              # Root layout with particles background
│   └── page.tsx                # Main page (composes all sections)
├── tailwind.config.ts          # Custom neon colors, shadows, animations
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Customization

### Colors
Edit `tailwind.config.ts` — change `neon: "#39ff14"` to any color.

### Content
All content is in the respective component files. Update:
- `Hero.tsx` — name, tagline, social links
- `About.tsx` — biography text, stats
- `Projects.tsx` — project entries
- `Experience.tsx` — timeline entries
- `Contact.tsx` — contact info

### Fonts
Loaded via Google Fonts in `globals.css`. Currently using:
- **Space Mono** — display/headings
- **JetBrains Mono** — body/code

---

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS 3
- CSS animations (particles, scan-line, float)
- No external UI libraries
