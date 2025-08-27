# Good2Go Build Hotfix

This patch fixes the `Module not found` errors for **lucide-react** and **chart.js/auto** and gives you safe components that compile on Vercel.

## 1) Install the missing deps (locally and on Vercel)
Run one of the following in your project root:

```bash
# npm
npm i lucide-react react-chartjs-2 chart.js

# or pnpm
pnpm add lucide-react react-chartjs-2 chart.js

# or yarn
yarn add lucide-react react-chartjs-2 chart.js
```

Then redeploy.

### Vercel
No extra step is needed if your `package.json` lists these deps; Vercel will install them during `npm install`. If you **don’t** want to modify your code to use icons, you can remove the `lucide-react` imports from your header (see Option B below).

---

## 2) Update or replace the components

We provide two safe options. **Option A** keeps `lucide-react`; **Option B** removes that dependency by using a tiny inline SVG.

### Option A — Keep `lucide-react` (preferred)
Drop these files into your repo to replace the existing ones:

- `components/Header.tsx`
- `components/OutcomesChart.tsx`

These expect the deps to be installed as above.

### Option B — No external icon lib
If you don’t want `lucide-react`, use `components/Header.no-lib.tsx` and update your import to point to that file.

---

## 3) Notes on Chart.js usage
We use `react-chartjs-2` with `chart.js`. Importing `'chart.js/auto'` is the simplest way to auto‑register elements. If you prefer manual registration, switch to:

```ts
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement,
  Tooltip, Legend
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
```

and remove the `import 'chart.js/auto'` line.

---

## 4) Sanity check locally

```bash
npm run build && npm start
```

If this builds locally, Vercel will build too.

