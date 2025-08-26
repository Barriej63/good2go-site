Tailwind + Hero Upgrade Pack

What this adds/changes:
- TailwindCSS configured (tailwind.config.ts, postcss.config.js)
- Replaces styles/globals.css with Tailwind directives
- New responsive Header/Footer using Tailwind
- New home hero section in app/page.tsx
- Adds /public/logo.svg and /public/hero-illustration.svg

How to install:
1) Replace files in your repo with the contents of this ZIP (drop into repo root).
2) Run:
     npm install
3) Deploy (Vercel will run the build). If building locally:
     npm run dev
     # open http://localhost:3000

Notes:
- All CTAs still point to https://book.good2go-rth.com/book
- Replace /public/logo.svg and /public/hero-illustration.svg with your real assets when ready.
