
# Good2Go Site — Missing Deps Fix (lucide-react, chart.js)

Your Vercel build is failing with:

- `Module not found: Can't resolve 'lucide-react'` (used by Header / page components)
- `Module not found: Can't resolve 'chart.js/auto'` (used by OutcomesChart)

## Quick Fix (recommended)

Run ONE of the following in the repo root, commit, and redeploy.

### npm
```bash
npm i lucide-react chart.js
```

### yarn
```bash
yarn add lucide-react chart.js
```

### pnpm
```bash
pnpm add lucide-react chart.js
```

> No code changes needed. This just installs the two libraries that your components already import.

## Why this happens
The new sections/components import `lucide-react` for icons and `chart.js/auto` for the OutcomesChart. Those packages are not listed in your current `package.json`, so the build cannot resolve them.

## Optional: verify locally
```bash
npm run dev
# or
npm run build
```

If you still see an error, ensure these files exist and keep the imports exactly as below:

```
import { CalendarCheck } from "lucide-react";
import "chart.js/auto";
```

—Enjoy! 👍
