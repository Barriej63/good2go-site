'use client';

import Link from 'next/link';
import { Activity, Upload, Cpu, LineChart, CheckCircle2 } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      {/* Page header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          How it Works
        </h1>
        <p className="mt-2 text-slate-600">
          This page outlines the Good2Go workflow from test day to your
          clinical dashboard.
        </p>
      </header>

      {/* Step 1 */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl bg-blue-50 ring-1 ring-blue-100 p-3">
            <Activity className="h-6 w-6 text-blue-700" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              1. Dual-Task Assessment
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              After booking your test and receiving your time/venue, check in
              with the Good2Go tester who will guide you through the process.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-blue-50/60 p-4">
                <div className="text-sm font-medium text-slate-800 mb-2">
                  What to bring / wear
                </div>
                <ul className="grid gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Runners/trainers so Plantiga IMU inserts can be fitted.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-sm font-medium text-slate-800 mb-2">
                  On the day
                </div>
                <ul className="grid gap-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                    You’ll receive instructions for a 1-minute dual-task gait test.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                    Inserts are removed at completion — that’s the test finished.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-indigo-50/60 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl bg-white ring-1 ring-indigo-100 p-3">
            <Upload className="h-6 w-6 text-indigo-700" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              2. Data Collection
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              We upload your raw gait data and extract the essential metrics to
              understand how recovery is progressing.
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                Upload raw data
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                Transfer important metrics for further analysis
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-emerald-50/60 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl bg-white ring-1 ring-emerald-100 p-3">
            <Cpu className="h-6 w-6 text-emerald-700" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              3. Algorithm Analysis
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Your key metrics are processed in the Good2Go analysis app. Our
              algorithm converts the original signals into three clear measures:
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                Gait&nbsp;Score
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                Balance&nbsp;Score
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                Good2Go&nbsp;Score
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-violet-50/60 p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-xl bg-white ring-1 ring-violet-100 p-3">
            <LineChart className="h-6 w-6 text-violet-700" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              4. Clinical Dashboard
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Scores are exported to your patient dashboard. You’ll receive a
              secure link (2-factor authentication) to review your progress.
            </p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-800">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                View your history and current score
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                Share with your health practitioner by requesting we send them a
                link (authorised at booking) or via your dashboard link
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 p-6 sm:p-8 text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Ready to try Good2Go?</h3>
            <p className="mt-1 text-white/80">
              Book a test or talk to us about bringing Good2Go to your clinic.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="https://book.good2go-rth.com"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Book a Test
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/15"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
