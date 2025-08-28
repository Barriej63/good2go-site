
'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/High-Resolution-Color-Logo.svg" alt="Good2Go" width={164} height={44} priority />
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <Link href="/crisis" className="text-slate-600 hover:text-slate-900 transition-colors">Crisis</Link>
            <Link href="/solution" className="text-slate-600 hover:text-slate-900 transition-colors">Our Solution</Link>
            <Link href="/evidence" className="text-slate-600 hover:text-slate-900 transition-colors">Scientific Foundation</Link>
            <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</Link>
            <a href="https://book.good2go-rth.com" className="font-medium text-blue-600 hover:text-blue-700">Book</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
