
'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="brand">Good2Go</Link>
        <Link href="/about">About</Link>
        <Link href="/features">Features</Link>
        <Link href="/how-it-works">How&nbsp;It&nbsp;Works</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
        <span className="spacer" />
        <a href="https://book.good2go-rth.com/book" className="cta primary">Book a Test</a>
      </div>
    </header>
  );
}
