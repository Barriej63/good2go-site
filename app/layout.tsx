import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Good2Go — Objective Concussion Recovery Monitoring',
  description: 'Evidence-based concussion recovery monitoring using dual-task gait analysis.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
