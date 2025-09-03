'use client';

import Header from '@/components/Header'; // keep if you have it
import Image from 'next/image';
import Link from 'next/link';

export default function Page(): JSX.Element {
  // ⬇︎ START DIAGNOSTIC RETURN (safe JSX)
  return (
    <>
      {/* render header above or inside main, either is fine */}
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900">
        <section className="py-8">
          <h1 className="text-2xl font-semibold">Boot check</h1>
          <p className="text-slate-600 mt-2">
            If you can see this, the JSX parser is happy and the prior error was a stray character.
          </p>
        </section>
      </main>
    </>
  );
}

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

    {/* CRISIS (image on the right, text left) */}
<section id="crisis" className="mt-16 lg:mt-24">
  <div className="grid md:grid-cols-2 gap-8 items-start">
    {/* LEFT: Text content */}
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
        <li className="flex items-center gap-2">🌍 70 Million — Annual concussions worldwide across sports, workplace, and home environments</li>
        <li className="flex items-center gap-2">🏅 3.8 Million — Concussions occur annually in the United States from sports and recreation</li>
        <li className="flex items-center gap-2">💵 $57 Billion — Estimated economic burden created by concussions in the United States</li>
        <li className="flex items-center gap-2">🙈 50% — Estimated underreporting rate of concussions</li>
      </ul>
    <div className="mt-6 flex gap-4">
  <a
    href="/dilemma"
    className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
  >
    Learn More
  </a>
  <a
    href="https://book.good2go-rth.com"
    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
  >
    Book a Test
  </a>
</div>

    {/* RIGHT: Image */}
    <div className="rounded-3xl border border-slate-200 overflow-hidden">
      <img
        src="/crisis-graphic.png"   // make sure this file is in /public
        alt="Concussions by the Numbers"
        className="w-full h-full object-cover"
      />
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
      management through personalised, scientific protocols.
    </p>
    <p className="mt-3 text-slate-600 leading-relaxed">
      It’s important to get the professional help you need to heal after a concussion.  Good2Go&apos;s 
      Dual-task Gait assessment aids the healthcare practitioner to apply multidisciplinary 
      interventions to help you recover sooner.
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
              Evaluates walking speed under dual‑task conditions with height‑adjusted normalisation to capture
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
            <div className="text-base font-semibold">Personalised Protocols</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Accounts for gender‑based differences and individual baselines to improve clinical accuracy.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-purple-50/60 p-6">
            <div className="text-base font-semibold">Progress Tracking</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Longitudinal dashboards visualise recovery trends and milestone achievements over time.
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

      {/* SCIENTIFIC FOUNDATION */}
<section id="evidence" className="mt-16 lg:mt-24">
  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
    Scientific Foundation
  </h2>
  <p className="mt-2 text-slate-600">
    Built on peer-reviewed research, Good2Go leverages dual-task gait analysis for
    superior sensitivity compared to traditional methods.
  </p>

  {/* Two columns: LEFT = chart (+ CTA), RIGHT = cards (Key Findings, QA) */}
  <div className="mt-6 grid gap-6 lg:grid-cols-2 items-start">
    {/* LEFT: Chart + CTA */}
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-3 sm:p-4">
        <img
          src="/science-chart-demo.png"            // <-- your chart image in /public
          alt="Good2Go Score Progress"
          className="w-full rounded-lg"
        />
      </div>

      <a
        href="https://book.good2go-rth.com"
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700"
      >
        Book a Test
      </a>
    </div>

    {/* RIGHT: Key Findings + QA Standards stacked */}
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="text-sm font-medium">Key Research Findings</div>
        <ul className="mt-2 grid gap-2 text-sm text-slate-700">
          <li>
            <span className="font-medium">Enhanced Sensitivity:</span> Dual-task
            conditions detect concussion-related deficits that persist longer than
            single-task assessments.
          </li>
          <li>
            <span className="font-medium">Gender-Based Differences:</span> Study
            of collegiate athletes established normal values and documented sex-based
            recovery differences.
          </li>
          <li>
            <span className="font-medium">Clinical Validation:</span> Multiple
            studies show dual-task gait analysis as a sensitive and specific marker
            of functional impairment.
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="text-sm font-medium">Quality Assurance Standards</div>
        <ul className="mt-2 grid gap-2 text-sm text-slate-700">
          <li>
            Minimum 3 peer-reviewed sources per methodology; thresholds validated
            against clinical research.
          </li>
          <li>
            Statistical significance requirements maintained; individual assessments
            prioritised over population norms.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* WHY CHOOSE US */}
<section id="why-choose-us" className="mt-16 lg:mt-24">
  <div className="flex items-end justify-between gap-6">
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
      Why Healthcare Providers Choose Good2Go
    </h2>
    <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
      Objective, evidence-based decision support
    </span>
  </div>

  {/* 3-card grid */}
  <div className="mt-6 grid gap-4 lg:grid-cols-3">
    {/* Objective Decision Support */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold">Objective Decision Support</div>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">Defensible data</span>
      </div>
      <ul className="mt-4 grid gap-2 text-sm text-slate-700">
        <li className="flex items-center gap-2">
          <span className="text-emerald-600">✔</span> Move beyond subjective symptom reporting
        </li>
        <li className="flex items-center gap-2">
          <span className="text-emerald-600">✔</span> Clear support for return-to-activity decisions
        </li>
        <li className="flex items-center gap-2">
          <span className="text-emerald-600">✔</span> Comprehensive Good2Go Score
        </li>
      </ul>
      <a
        href="https://book.good2go-rth.com"
        className="inline-flex w-full items-center justify-center gap-2 hover:bg-slate-800 text-sm font-medium text-white bg-slate-900 rounded-lg mt-5 py-2.5"
      >
        Book an Assessment
      </a>
    </div>

    {/* Efficient Workflow (highlighted) */}
    <div className="rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold">Efficient Workflow</div>
        <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-700 ring-1 ring-inset ring-blue-100">Seamless</span>
      </div>
      <ul className="mt-4 grid gap-2 text-sm text-slate-700">
        <li className="flex items-center gap-2">
          <span className="text-emerald-600">✔</span> Streamlined assessment protocols
        </li>
        <li className="flex items-center gap-2">
          <span className="text-emerald-600">✔</span> Integrates with clinical practice
        </li>
        <li className="flex items-center gap-2">
          <span className="text-emerald-600">✔</span> Continuous monitoring and tracking
        </li>
      </ul>
      <a
        href="https://book.good2go-rth.com"
        className="inline-flex w-full items-center justify-center gap-2 hover:bg-blue-700 text-sm font-medium text-white bg-blue-600 rounded-lg mt-5 py-2.5"
      >
        Book a Good2Go Test
      </a>
    </div>

    {/* Risk Mitigation */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold">Risk Mitigation</div>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">Confidence</span>
      </div>
      <ul className="mt-4 grid gap-2 text-sm text-slate-700">
        <li className="flex items-center gap-2">
          <span className="text-emerald-600">✔</span> Reduce liability with objective data
        </li>
        <li className="flex items-center gap-2">
          <span className="text-emerald-600">✔</span> Research-validated thresholds
        </li>
        <li className="flex items-center gap-2">
          <span className="text-emerald-600">✔</span> Detailed documentation for planning
        </li>
      </ul>
      <a
        href="https://good2go-rth.com/contact"
        className="inline-flex w-full items-center justify-center gap-2 hover:bg-slate-800 text-sm font-medium text-white bg-slate-900 rounded-lg mt-5 py-2.5"
      >
        Talk to Us
      </a>
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
