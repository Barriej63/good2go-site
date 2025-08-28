Good2Go one-drop update (non-destructive)

What this adds/changes:
- New /how-it-works page with a CTA
- Non-sticky logo in the Header, using /High-Resolution-Color-Logo.svg
- Homepage updates:
  * Hero heading "Objective Concussion Recovery Monitoring" with slogan under it
  * Book buttons added in Our Solution, Core Features, How it Works (home), Scientific Foundation
  * Subtle color backgrounds added to selected cards so the UI pops
  * Scientific Foundation section embeds your live demo chart

How to install (GitHub web editor friendly):
1) Drop the contents of this ZIP into your repo root and accept file replaces for:
   - app/how-it-works/page.tsx  (new)
   - components/Header.tsx      (replace)
   - app/page.tsx               (replace)
2) Commit and redeploy on Vercel.

Optional: Use a static screenshot for the chart
- Save your screenshot as /public/science-chart-demo.png
- Replace the <iframe> block in app/page.tsx with an <img src="/science-chart-demo.png" .../>

Nothing else is removed. Existing pages (Pricing, Evidence, Crisis, Solution) remain untouched.
