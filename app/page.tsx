'use client';

import Image from 'next/image';
import Link from 'next/link';

// If Header exists at /components/Header.tsx
import Header from '@/components/Header';

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900">
      {/* Keep existing Header usage */}
      <Header />

     {/* HERO */}
<section className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
  <div className="grid gap-10 md:grid-cols-2 md:gap-8 md:p-4">
    {/* Left side: Text */}
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
        Objective Concussion Recovery Monitoring
      </h1>
      <p className="mt-3 text-xl text-slate-800">
        Recover Smart. Return Strong.
      </p>
      <p className="mt-2 text-slate-600">
        Welcome to Good2Go — your concussion recovery partner.
      </p>
    </div>

    {/* Right side: Image */}
    <div className="relative overflow-hidden rounded-2xl border border-slate-200">
      <img
        src="https://images.unsplash.com/photo-1516670428252-df97bba108d1?w=1200&q=80&auto=format&fit=crop"
        alt="Clinician reviewing dual-task gait assessment"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200 backdrop-blur">
          <i data-lucide="activity" className="h-4 w-4 text-blue-700"></i>
          Dual-task gait · objective recovery metrics
        </div>
      </div>
    </div>
  </div>
</section>

     {/* CRISIS (restored) */}
<section id="crisis" className="mt-16 lg:mt-24">
  <div className="grid items-start gap-8 md:grid-cols-2">
    
    {/* LEFT: image block */}
    <aside className="rounded-3xl border border-slate-200 overflow-hidden bg-gradient-to-br from-blue-50 to-violet-50">
      <img
        src="/crisis-graphic.jpeg"   // drop file in /public, e.g. /public/crisis-graphic.jpeg
        alt="Concussion crisis illustration"
        className="w-full h-full object-cover"
      />
    </aside>

    {/* RIGHT: text content */}
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        The Global Concussion Dilemma
      </h2>
      <p className="mt-4 text-slate-600 leading-relaxed">
        For those unfortunate to have suffered a concussion, the difficulty is
        knowing when it's safe to return to activities, and uncertainty around
        their recovery progress. For health practitioners, there is a lack of
        solid diagnostic criteria and a reliance on subjective symptom reporting
        rather than objective measures.
      </p>

      <ul className="mt-6 grid gap-3 text-sm text-slate-700">
        <li className="flex items-center gap-2">🌍 Concussion symptoms that affect your judgment and motor skills can increase your risk of another concussion, or lower limb injury</li>
        <li className="flex items-center gap-2">🌍 Loss of Consciousness is Uncommon: Over 90% do not involve a loss of consciousness</li>
        <li className="flex items-center gap-2">🌍 Concussions commonly affect your emotions and judgment. As a result, many people experience inappropriate and unexplained surges in emotions</li>
        <li className="flex items-center gap-2">🌍 Most patients recover within 2–4 weeks, but 15–30% experience persistent symptoms</li>
      </ul>
    </div>
    
  </div>
</section>

      {/* OUR SOLUTION */}
<section id="our-solution" className="mt-16 lg:mt-24">
  <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our Solution</h2>
    <p className="mt-3 text-slate-600 leading-relaxed">
      Monitor patients with Good2Go&apos;s Dual-task Gait assessment.
    </p>
    <p className="mt-3 text-slate-600 leading-relaxed">
      Good2Go is an evidence-based concussion monitoring platform that empowers
      healthcare practitioners with objective assessment tools to guide safe
      return-to-activity decisions. Built on peer-reviewed research and
      dual-task gait analysis, Good2Go addresses the critical gap in concussion
      management through personalized, scientific protocols.
    </p>
    <ul className="mt-3 grid gap-2 text-sm text-slate-700">
      <li>Provides healthcare practitioners with objective, defensible data for
        safe return-to-activity decisions.</li>
      <li>Gives patients clear, understandable information showing where they are
        on their return-to-health journey.</li>
      <li>Improves patient confidence in their care team and path to recovery.</li>
    </ul>
    <div className="mt-5">
      <a
        href="https://book.good2go-rth.com"
        className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
      >
              Book an Assessment
            </a>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section id="features" className="mt-16 lg:mt-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Core Features</h2>
          <a href="/how-it-works" className="hidden sm:inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
            See how it works →
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-base font-semibold">Balance Score</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Measures postural stability during dynamic tasks using validated dual‑task protocols. Detects subtle
              neurological deficits that traditional balance tests miss.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-indigo-50/60 p-6">
            <div className="text-base font-semibold">Gait Speed Score</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Evaluates walking speed under dual‑task conditions with height‑adjusted normalization to capture
              functional impairment.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-emerald-50/60 p-6">
            <div className="text-base font-semibold">Good2Go Score</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Combines balance and gait metrics into a comprehensive recovery score for evidence‑based decisions.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-base font-semibold">Personalized Protocols</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Accounts for gender‑based differences and individual baselines to improve clinical accuracy.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-purple-50/60 p-6">
            <div className="text-base font-semibold">Progress Tracking</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Longitudinal dashboards visualize recovery trends and milestone achievements over time.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-rose-50/60 p-6">
            <div className="text-base font-semibold">Research‑Validated</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Protocols validated against peer‑reviewed research with minimum three sources per methodology.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <a
            href="https://book.good2go-rth.com"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700"
          >
            Book a Test
          </a>
        </div>
      </section>

      {/* HOW IT WORKS (homepage overview) */}
      <section id="how-it-works" className="mt-16 lg:mt-24">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it Works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Dual‑Task Assessment","Patient performs walking tasks while completing cognitive challenges, mirroring real‑world demands.","bg-blue-50/60"],
            ["Data Collection","Sensors capture gait metrics and dynamic balance data during the assessment protocol.","bg-indigo-50/60"],
            ["Algorithm Analysis","Proprietary algorithms compute Balance Score, Gait Speed Score, and the overall Good2Go Score.","bg-emerald-50/60"],
            ["Clinical Dashboard","Patients and clinicians access recovery data and decision support via intuitive dashboards.","bg-violet-50/60"]
          ].map(([title, body, bg], idx) => (
            <div key={idx} className={`rounded-2xl border border-slate-200 ${bg} p-6`}>
              <div className="text-base font-semibold">{idx+1}. {title}</div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <a href="/how-it-works" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
            Learn more
          </a>
          <a href="https://book.good2go-rth.com" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700">
            Book an Assessment
          </a>
        </div>
      </section>

      {/* SCIENTIFIC FOUNDATION with chart image ONLY */}
      <section id="evidence" className="mt-16 lg:mt-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Scientific Foundation</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Built on peer‑reviewed research, Good2Go leverages dual‑task gait analysis for superior sensitivity compared
              to traditional methods.
            </p>

            <div className="mt-6">
              <img
                src="/science-chart-demo.png"
                alt="Good2Go Score Progress demo"
                className="w-full rounded-xl border border-slate-200"
              />
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 p-4 bg-slate-50">
              <div className="text-sm font-medium">Key Research Findings</div>
              <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                <li>• Enhanced Sensitivity: Dual‑task conditions detect concussion‑related deficits that persist longer than single‑task assessments.</li>
                <li>• Gender‑Based Differences: Study of collegiate athletes established normal values and documented sex‑based recovery differences.</li>
                <li>• Clinical Validation: Multiple studies show dual‑task gait analysis as a sensitive and specific marker of functional impairment.</li>
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="https://book.good2go-rth.com"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700"
              >
                Book a Test
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-medium">Quality Assurance Standards</div>
              <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                <li>• Minimum 3 peer‑reviewed sources per methodology; thresholds validated against clinical research.</li>
                <li>• Statistical significance requirements maintained; individual assessments prioritized over population norms.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER tag line */}
      <footer className="mt-16 mb-10 text-center text-sm text-slate-500">
        Recover Smart. Return Strong.
      </footer>
    </main>
  );
}
