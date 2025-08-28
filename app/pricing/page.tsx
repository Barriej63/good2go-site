'use client';
import Header from '@/components/Header';

export default function Pricing() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto pt-28 px-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Pricing</h1>
              <p className="mt-2 text-slate-600">Simple options for baselines and post‑concussion monitoring.</p>
            </div>
            <a href="https://book.good2go-rth.com" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
              Book now
            </a>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold">Baseline Test</div>
                <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700 ring-1 ring-inset ring-blue-100">$65.00</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">Records healthy brain function to create your personal comparison point.</p>
              <a href="https://book.good2go-rth.com" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">Schedule Baseline</a>
            </div>
            <div className="rounded-2xl border-2 border-blue-600 p-6 bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold">Post‑Concussion Test Block</div>
                <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700 ring-1 ring-inset ring-blue-100">$199</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">Structured follow‑ups to monitor recovery trends — with or without a baseline.</p>
              <a href="https://book.good2go-rth.com" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">Start Monitoring</a>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold">Enterprise</div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">Contact us</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">Team/clinic bulk Baselines with centralized monitoring and support.</p>
              <a href="https://book.good2go-rth.com" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">Contact Sales</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
