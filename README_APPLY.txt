Return Home Button (non-destructive)

What this does
- Adds a small client component that injects a “Return Home” button at the very bottom of the page,
  but only on these routes: /crisis, /our-solution, /solution, /how-it-works, /evidence, /scientific-foundation.
- No content is removed. No page files are edited.

How it works
- `components/RouteReturnHome.tsx` uses a React portal to append a simple container to the end of <body>,
  so the button appears at the bottom after your content.
- `components/Header.tsx` imports and renders RouteReturnHome; Header is already present on all pages,
  so this keeps changes minimal and consistent.

Install (GitHub web editor friendly)
1) Copy `components/RouteReturnHome.tsx` into your repo at `/components/`.
2) Replace your existing `components/Header.tsx` with the one in this ZIP (it only adds the final line to render RouteReturnHome).
3) Commit → redeploy on Vercel.

Customize routes
- If your routes differ (e.g., `/scientific-foundation` vs `/evidence`), update the `TARGET_ROUTES` Set in RouteReturnHome.tsx.
