import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Good2Go',
  description: 'Recover Smart. Return Strong.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
