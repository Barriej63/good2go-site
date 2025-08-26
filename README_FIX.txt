
These are corrected page.tsx files for the Good2Go site.

- Replaced invalid inline styles with a CSS class `.page-actions`.

To complete the fix:
1. Copy these folders into your repo `app/` (overwrite existing pages).
2. Add this CSS to styles/globals.css if not already present:

.page-actions { margin-top: 16px; }

3. Commit and push to GitHub.
4. In Vercel, redeploy with "Clear build cache".
