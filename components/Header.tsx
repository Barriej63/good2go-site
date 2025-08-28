'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <Link href="/">
        <Image src="/logo-color.svg" alt="Good2Go Logo" width={160} height={40} />
      </Link>
      <nav className="flex gap-6 text-sm">
        <Link href="/crisis">Crisis</Link>
        <Link href="/solution">Our Solution</Link>
        <Link href="/evidence">Scientific Foundation</Link>
        <Link href="/pricing">Pricing</Link>
        <a href="https://book.good2go-rth.com" className="font-semibold text-blue-600">Book</a>
      </nav>
    </header>
  );
}
