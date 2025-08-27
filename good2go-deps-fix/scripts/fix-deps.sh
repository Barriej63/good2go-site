#!/bin/bash
set -e
if [ -f package.json ]; then
  if command -v npm &> /dev/null; then
    npm install lucide-react chart.js
  elif command -v pnpm &> /dev/null; then
    pnpm add lucide-react chart.js
  elif command -v yarn &> /dev/null; then
    yarn add lucide-react chart.js
  else
    echo "No package manager found. Please install lucide-react and chart.js manually."
  fi
else
  echo "Run this script from the repo root (where package.json is)."
fi
