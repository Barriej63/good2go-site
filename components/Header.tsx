"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RouteReturnHome from "./RouteReturnHome";

const nav = [
  { href: "/dilemma", label: "Dilemma" },
  { href: "/our-solution", label: "Our Solution" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/evidence", label: "Scientific Foundation" },
  { href: "/pricing", label: "Pricing" },
  { href: "https://book.good2go-rth.com", label: "Book", external: true },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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
      </div>

      {/* Injects a bottom-of-page Return Home button on certain routes, without touching page files */}
      <RouteReturnHome />
    </header>
  );
}
