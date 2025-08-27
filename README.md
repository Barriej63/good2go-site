# Good2Go Tailwind Pages Patch

This patch converts your provided HTML into Next.js **/app/page.tsx** (home) and **/app/pricing/page.tsx** using:
- Tailwind classes for layout/visuals
- `lucide-react` for icons
- `react-chartjs-2` + `chart.js` for the outcomes chart

## Install
1) Copy the `app/` folder from this zip into your repo (merge with existing).
2) Ensure your Tailwind setup is active (you already have tailwind/postcss/autoprefixer deps). Your `globals.css` should include:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3) Make sure these deps exist in `/package.json` (you already added earlier):
   - `"lucide-react"`, `"react-chartjs-2"`, `"chart.js"`
4) Commit to main and redeploy (uncheck "Use existing Build Cache").
