
# Good2Go — Public Site Starter (Option 1 linking)
A clean Next.js (App Router) landing-site that links to your existing bookings app at **https://book.good2go-rth.com/book**.

## Split Architecture (4 repos / 4 projects)
1. Web (this repo): static content, deployed to **good2go-rth.com**.
2. Bookings + Payments (existing): Next.js + Firestore + Worldline, deployed to **book.good2go-rth.com**.
3. API backend: FastAPI/Node; accepts session uploads; returns summaries.
4. Good2Go App (Replit): patient dashboard.

## Local Dev
```bash
npm install
npm run dev
```

## Deploy (Vercel)
- Create project → import repo.
- Set domain **good2go-rth.com** to this project.
- No env vars required for static content.
- CTA buttons already point to **book.good2go-rth.com**.
