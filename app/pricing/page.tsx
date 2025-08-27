'use client';
import { CalendarCheck, CalendarPlus, Trophy, Home, Briefcase, ShieldCheck, TrendingUp, TrendingDown, Activity, Info, Users, LayoutDashboard, Handshake, MessagesSquare, BadgeDollarSign } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 inline-flex items-center gap-2 text-xs text-slate-600">
        <Link href="/" className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-2.5 py-1 hover:bg-slate-50">
          Back
        </Link>
        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-2.5 py-1">
          <BadgeDollarSign className="h-3.5 w-3.5" /> Pricing
        </span>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Pricing</h1>
            <p className="mt-2 text-slate-600">Simple options for baselines and post‑concussion monitoring. Team and clinic packages available.</p>
          </div>
          <Link href="/book" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
            <CalendarCheck className="h-4 w-4" /> Book now
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {/* Baseline */}
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Baseline Test</div>
              <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700 ring-1 ring-inset ring-blue-100">$65.00</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">Records healthy brain function to create your personal comparison point.</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Trophy className="h-4 w-4 text-blue-600 mt-0.5" />In Sport: safer, faster return‑to‑play; reduces risk of repeat injury.</li>
              <li className="flex items-start gap-2"><Home className="h-4 w-4 text-amber-600 mt-0.5" />At Home: helps detect subtle changes; supports families tracking recovery.</li>
              <li className="flex items-start gap-2"><Briefcase className="h-4 w-4 text-violet-600 mt-0.5" />Workplace: supports safe return‑to‑work; roles needing focus, safety, coordination.</li>
              <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600 mt-0.5" />Gives clinicians a precise baseline for decision‑making.</li>
            </ul>
            <Link href="/book" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700">
              <CalendarPlus className="h-4 w-4" /> Schedule Baseline
            </Link>
          </div>

          {/* Post-Concussion Block */}
          <div className="rounded-2xl border-2 border-blue-600 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Post‑Concussion Test Block</div>
              <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700 ring-1 ring-inset ring-blue-100">$199</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">Structured follow‑ups to monitor recovery trends — with or without a baseline.</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Info className="h-4 w-4 text-slate-600 mt-0.5" />No baseline? That’s okay — we track recovery safely and accurately.</li>
              <li className="flex items-start gap-2"><TrendingUp className="h-4 w-4 text-emerald-600 mt-0.5" />Upward: gait speed and cadence increase over time.</li>
              <li className="flex items-start gap-2"><TrendingDown className="h-4 w-4 text-rose-600 mt-0.5" />Downward: double‑support time decreases as stability returns.</li>
              <li className="flex items-start gap-2"><Activity className="h-4 w-4 text-indigo-600 mt-0.5" />Readiness signals: steady improvement followed by stability.</li>
            </ul>
            <Link href="/book" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
              <CalendarCheck className="h-4 w-4" /> Start Monitoring
            </Link>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Enterprise</div>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">Contact us</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">Team/clinic bulk Baselines with centralized monitoring and support.</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Users className="h-4 w-4 text-slate-700 mt-0.5" />Bulk baseline testing for rosters and staff.</li>
              <li className="flex items-start gap-2"><LayoutDashboard className="h-4 w-4 text-blue-600 mt-0.5" />Centralized dashboards to track recovery and readiness.</li>
              <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600 mt-0.5" />Supports safer, faster return‑to‑play/work policies.</li>
              <li className="flex items-start gap-2"><Handshake className="h-4 w-4 text-violet-600 mt-0.5" />Custom onboarding, scheduling, and reporting.</li>
            </ul>
            <Link href="/contact" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700">
              <MessagesSquare className="h-4 w-4" /> Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
