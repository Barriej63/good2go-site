"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RouteReturnHome from "./RouteReturnHome";

const nav = [
  { href: "/dilemma", label: "Dilemma" },
  { href: "/our-solution", label: "Our Solution" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/scientific-foundation", label: "Scientific Foundation" },
  { href: "/our-why", label: "Our Why" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "https://book.good2go-rth.com", label: "Book", external: true },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-slate-200/60 bg-white/90 backdrop-blur">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/High-Resolution-Color-Logo.svg"
            alt="Good2Go"
            width={40}
            height={40}
            priority
          />
          <span className="text-lg font-semibold tracking-tight">Good2Go</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((item) => {
            const active = !item.external && pathname === item.href;
            const base = "transition-colors";
            const classes = active
              ? "text-slate-900 font-medium"
              : "text-slate-600 hover:text-slate-900";

            return item.external ? (
              <a key={item.href} href={item.href} className={`${base} ${classes}`}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={`${base} ${classes}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
          >
            {open ? (
              // X icon
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      <div
        id="mobile-menu"
        className={`${open ? "block" : "hidden"} md:hidden border-t border-slate-200/60 bg-white`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 space-y-1">
          {nav.map((item) => {
            const active = !item.external && pathname === item.href;
            const base =
              "block rounded-md px-3 py-2 text-base font-medium transition-colors";
            const classes = active
              ? "text-slate-900 bg-slate-100"
              : "text-slate-700 hover:bg-slate-100";

            return item.external ? (
              <a
                key={item.href}
                href={item.href}
                className={`${base} ${classes}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`${base} ${classes}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom-of-page Return Home injection */}
      <RouteReturnHome />
    </header>
  );
}
