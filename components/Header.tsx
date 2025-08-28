'use client';
import Link from 'next/link';
import { HeartPulse, CalendarCheck, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white ring-1 ring-white/20 shadow-sm">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Good2Go</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="/#about" className="text-slate-600 hover:text-slate-900">Crisis</a>
            <a href="/#features" className="text-slate-600 hover:text-slate-900">Core Features</a>
            <a href="/#how-it-works" className="text-slate-600 hover:text-slate-900">How it Works</a>
            <a href="/#evidence" className="text-slate-600 hover:text-slate-900">Scientific Foundation</a>
            <Link href="/pricing" className="text-slate-600 hover:text-slate-900">Pricing</Link>
            <a href="https://book.good2go-rth.com" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700 transition-colors">
              Book a Test <CalendarCheck className="h-4 w-4" />
            </a>
          </nav>
          <a href="https://book.good2go-rth.com" className="md:hidden inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm">
            <Sparkles className="h-4 w-4" /> Book
          </a>
        </div>
      </div>
    </header>
  );
}
