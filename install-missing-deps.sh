
#!/usr/bin/env bash
set -euo pipefail
if command -v npm >/dev/null 2>&1; then
  npm i lucide-react chart.js
elif command -v yarn >/dev/null 2>&1; then
  yarn add lucide-react chart.js
elif command -v pnpm >/dev/null 2>&1; then
  pnpm add lucide-react chart.js
else
  echo "No npm/yarn/pnpm found. Please install dependencies manually." 1>&2
  exit 1
fi
echo "✅ Dependencies installed. Commit and redeploy."
