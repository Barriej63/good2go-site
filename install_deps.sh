#!/usr/bin/env bash
set -euo pipefail
if command -v pnpm >/dev/null 2>&1; then
  pnpm add lucide-react react-chartjs-2 chart.js
elif command -v yarn >/dev/null 2>&1; then
  yarn add lucide-react react-chartjs-2 chart.js
else
  npm i lucide-react react-chartjs-2 chart.js
fi
