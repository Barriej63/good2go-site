'use client';
import { CalendarCheck, CalendarPlus, Trophy, Home, Briefcase, ShieldCheck } from 'lucide-react';

export default function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Pricing</h1>
            <p className="mt-2 text-slate-600">Simple options for baselines and post-concussion monitoring.</p>
          </div>
          <a href="https://book.good2go-rth.com" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
            <CalendarCheck className="h-4 w-4" /> Book now
          </a>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Baseline Test</div>
              <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700 ring-1 ring-inset ring-blue-100">$65.00</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">Records healthy brain function to create your personal comparison point.</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Trophy className="h-4 w-4 text-blue-600 mt-0.5" />In Sport: safer, faster return-to-play.</li>
              <li className="flex items-start gap-2"><Home className="h-4 w-4 text-amber-600 mt-0.5" />At Home: helps detect subtle changes.</li>
              <li className="flex items-start gap-2"><Briefcase className="h-4 w-4 text-violet-600 mt-0.5" />Workplace: supports safe return-to-work.</li>
              <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600 mt-0.5" />Precise baseline for clinicians.</li>
            </ul>
            <a href="https://book.good2go-rth.com" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700">
              <CalendarPlus className="h-4 w-4" /> Schedule Baseline
            </a>
          </div>

          {/* You can add the post-concussion and enterprise cards later the same way */}
        </div>
      </section>
    </main>
  );
}
