# Good2Go Full Site (Tailwind + Styled) + SendGrid Contact

Includes:
- Tailwind config + globals + layout (so styles apply site-wide)
- Header, full landing page, pricing page
- Outcomes chart (react-chartjs-2 + chart.js)
- Contact form + Next.js API using SendGrid
- tsconfig: alias '@/*' and lib ['dom','dom.iterable','es2020']

Dependencies to ensure in package.json:
  "lucide-react", "react-chartjs-2", "chart.js", "@sendgrid/mail",
  "tailwindcss", "postcss", "autoprefixer"

After copying, run:
  npm i
  npm run build

Vercel: Redeploy with cache disabled the first time.
Env vars:
  SENDGRID_API_KEY, SENDGRID_TO, SENDGRID_FROM
