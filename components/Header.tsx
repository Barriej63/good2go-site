'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CalendarCheck, Sparkles, Menu, Home, Globe, Layers, Workflow, Microscope, CheckCircle2, BadgeDollarSign, Mail, HeartPulse } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white ring-1 ring-inset ring-white/20 shadow-sm">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Good2Go</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
            <a href="/#about" className="text-slate-600 hover:text-slate-900 transition-colors">Crisis</a>
            <a href="/#features" className="text-slate-600 hover:text-slate-900 transition-colors">Core Features</a>
            <a href="/#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">How it Works</a>
            <a href="/#evidence" className="text-slate-600 hover:text-slate-900 transition-colors">Scientific Foundation</a>
            <a href="/#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Why Choose Us</a>
            <Link href="/pricing" className="text-slate-900 font-medium">Pricing</Link>
            <a href="/#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://book.good2go-rth.com/book" className="inline-flex items-center gap-2 ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700 transition-colors text-sm font-medium text-white bg-blue-600 rounded-lg py-2.5 px-4 shadow-sm">
              Book a Test
              <CalendarCheck className="h-4 w-4" />
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-slate-900/10 hover:bg-slate-800 transition-colors">
              <Sparkles className="h-4 w-4" />
              Request Demo
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="grid gap-2 text-sm">
              <Link href="/" className="flex items-center gap-2 rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                <Home className="h-4 w-4" /> Home
              </Link>
              <a href="/#about" className="flex items-center gap-2 rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                <Globe className="h-4 w-4" /> Crisis
              </a>
              <a href="/#features" className="flex items-center gap-2 rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                <Layers className="h-4 w-4" /> Core Features
              </a>
              <a href="/#how-it-works" className="flex items-center gap-2 rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                <Workflow className="h-4 w-4" /> How it Works
              </a>
              <a href="/#evidence" className="flex items-center gap-2 rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                <Microscope className="h-4 w-4" /> Scientific Foundation
              </a>
              <a href="/#pricing" className="flex items-center gap-2 rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                <CheckCircle2 className="h-4 w-4" /> Why Choose Us
              </a>
              <Link href="/pricing" className="flex items-center gap-2 rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                <BadgeDollarSign className="h-4 w-4" /> Pricing
              </Link>
              <a href="/#contact" className="flex items-center gap-2 rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(false)}>
                <Mail className="h-4 w-4" /> Contact
              </a>
              <div className="mt-2 flex items-center gap-2">
                <a href="https://book.good2go-rth.com/book" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
                  <CalendarCheck className="h-4 w-4" /> Book now
                </a>
                <a href="/#contact" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
                  <Sparkles className="h-4 w-4" /> Request demo
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
