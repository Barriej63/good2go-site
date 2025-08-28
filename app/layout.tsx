
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Good2Go — Recover Smart. Return Strong.',
  description: 'Recover Smart. Return Strong. Evidence-based concussion monitoring with dual-task gait analysis for objective, defensible return-to-activity decisions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
