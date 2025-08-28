Non-destructive hero image restore (assets only)

This ZIP only adds an image file. It does NOT change any of your text or pages.
- Adds: /public/hero-default.jpg  (safe to keep or replace later)

How to re-show the hero image (no text changes):
1) Make sure your hero section in app/page.tsx has a right-side image block like this:

   <div className="relative overflow-hidden rounded-2xl border border-slate-200">
     <img
       alt="Clinician reviewing dual-task gait assessment"
       className="h-full w-full object-cover"
       src="/hero-default.jpg"  // <-- uses the file in /public
       loading="eager"
     />
     <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
   </div>

2) Commit and redeploy. Your existing headings and text are untouched.

Replacing later:
- Drop your real image into /public as /hero.jpg (or any name you like).
- Update the src in the block above to /hero.jpg and redeploy.
