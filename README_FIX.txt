ROOT-READY FIX PAGES
--------------------
Contents:
- app/about/page.tsx
- app/consent/page.tsx
- app/contact/page.tsx
- app/features/page.tsx
- app/how-it-works/page.tsx
- styles/globals.css.patch.txt  (snippet to paste into your globals.css)

How to apply via GitHub web UI:
1) Click "Add file" → "Upload files" in your repo root.
2) DRAG THE *app* FOLDER from this zip into the upload area (not the individual files).
3) Commit directly to main.
4) Open styles/globals.css in your repo and paste the one-liner from styles/globals.css.patch.txt:
     .page-actions { margin-top: 16px; }
5) In Vercel → Redeploy with "Clear build cache".
