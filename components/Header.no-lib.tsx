'use client';
import Link from 'next/link';

// Inline SVG menu icon to avoid external icon libraries
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-lg">Good2Go</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/pricing" className="text-sm hover:underline">Pricing</Link>
          <Link href="/book" className="text-sm hover:underline">Book</Link>
          <Link href="/contact" className="text-sm hover:underline">Contact</Link>
        </nav>
        <button aria-label="Open menu" className="md:hidden p-2 rounded hover:bg-gray-100">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
