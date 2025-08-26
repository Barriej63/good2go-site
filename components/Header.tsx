'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/logo.svg" alt="Good2Go" width={28} height={28} />
          <span>Good2Go</span>
        </Link>
        <nav className="hidden md:flex gap-5 text-sm">
          <Link href="/about" className="text-zinc-700 hover:text-black">About</Link>
          <Link href="/features" className="text-zinc-700 hover:text-black">Features</Link>
          <Link href="/how-it-works" className="text-zinc-700 hover:text-black">How it works</Link>
          <Link href="/pricing" className="text-zinc-700 hover:text-black">Pricing</Link>
          <Link href="/contact" className="text-zinc-700 hover:text-black">Contact</Link>
        </nav>
        <div className="ml-auto">
          <a href="https://book.good2go-rth.com/book" className="inline-flex items-center rounded-xl border border-g2g-primary bg-g2g-primary px-4 py-2 text-white text-sm shadow-soft hover:opacity-95">
            Book a Test
          </a>
        </div>
      </div>
    </header>
  );
}
