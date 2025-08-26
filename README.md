# Good2Go Public Site — Tailwind + SendGrid

## Quick start
```bash
npm install
npm run dev
```

## Production deploy (Vercel)
- Add Environment Variables:
  - `SENDGRID_API_KEY`
  - `SENDGRID_FROM` (verified sender)
  - `SENDGRID_TO` (your inbox)
- Redeploy

## Contact form
- POST `/api/contact` → sends email via SendGrid.
- Fields: name, email, org, message.
