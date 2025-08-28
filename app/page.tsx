import Header from "@/components/Header";

export const metadata = {
  title: "Good2Go — Objective Concussion Recovery Monitoring",
  description:
    "Recover Smart. Return Strong. Evidence‑based concussion recovery monitoring using dual‑task gait analysis and personalized protocols.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8 pb-16">

        {/* Hero */}
        <section className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="grid gap-10 md:grid-cols-2 md:gap-8 md:p-10 lg:p-12 p-6">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-100">
                Objective, evidence-based platform
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold tracking-tight">
                Objective Concussion Recovery Monitoring
              </h1>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
                <span className="font-medium">Recover Smart. Return Strong.</span>
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://book.good2go-rth.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-3 ring-1 ring-inset ring-blue-600/10"
                >
                  Book an Assessment
                </a>
                <a
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-800 bg-white hover:bg-slate-50 rounded-lg px-5 py-3 ring-1 ring-inset ring-slate-200"
                >
                  How it Works
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <img
                alt="Clinician reviewing dual-task gait assessment"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1516670428252-df97bba108d1?w=1200&q=80&auto=format&fit=crop"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section id="solution" className="mt-16 lg:mt-24">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our Solution</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Monitor patients with Good2Go's Dual‑task Gait assessment.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700 list-disc pl-5">
              <li>Provides healthcare practitioners with objective, defensible data for safe return‑to‑activity decisions.</li>
              <li>Gives patients key information that’s easy to understand and shows progress in their recovery journey.</li>
              <li>Builds confidence that the team and plan are on the right path.</li>
            </ul>
            <div className="mt-5">
              <a
                href="https://book.good2go-rth.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2.5 ring-1 ring-inset ring-blue-600/10"
              >
                Book an Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Core Features with subtle color accents */}
        <section id="features" className="mt-16 lg:mt-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Core Features</h2>
            <a href="/how-it-works" className="hidden sm:inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
              See how it works
            </a>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-slate-200 bg-blue-50 p-6 transition-transform hover:-translate-y-0.5">
              <div className="text-base font-semibold">Balance Score</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Measures postural stability during dynamic tasks under dual‑task protocols.
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-emerald-50 p-6 transition-transform hover:-translate-y-0.5">
              <div className="text-base font-semibold">Gait Speed Score</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Evaluates walking speed under dual‑task conditions with height‑adjusted normalization.
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-amber-50 p-6 transition-transform hover:-translate-y-0.5">
              <div className="text-base font-semibold">Good2Go Score</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Combines balance and gait metrics into a comprehensive recovery score.
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-violet-50 p-6 transition-transform hover:-translate-y-0.5">
              <div className="text-base font-semibold">Personalized Protocols</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Accounts for sex‑based differences and individual baselines to improve clinical accuracy.
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-transform hover:-translate-y-0.5">
              <div className="text-base font-semibold">Progress Tracking</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Longitudinal dashboards visualize recovery trends and milestones over time.
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-transform hover:-translate-y-0.5">
              <div className="text-base font-semibold">Research‑Validated</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Protocols aligned with peer‑reviewed research and validated thresholds.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://book.good2go-rth.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2.5 ring-1 ring-inset ring-blue-600/10"
            >
              Book a Test
            </a>
          </div>
        </section>

        {/* How it Works (home section) */}
        <section id="how-it-works" className="mt-16 lg:mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it Works</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-blue-50 p-6">
              <div className="text-base font-semibold">1. Dual‑Task Assessment</div>
              <p className="mt-3 text-sm text-slate-600">Real‑world cognitive + motor demand.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-emerald-50 p-6">
              <div className="text-base font-semibold">2. Data Collection</div>
              <p className="mt-3 text-sm text-slate-600">Gait metrics and dynamic balance.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-amber-50 p-6">
              <div className="text-base font-semibold">3. Algorithm Analysis</div>
              <p className="mt-3 text-sm text-slate-600">Balance, Gait Speed, and Good2Go Score.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-violet-50 p-6">
              <div className="text-base font-semibold">4. Clinical Dashboard</div>
              <p className="mt-3 text-sm text-slate-600">Trends and decision support.</p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://book.good2go-rth.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2.5 ring-1 ring-inset ring-blue-600/10"
            >
              Book an Assessment
            </a>
            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-800 bg-white hover:bg-slate-50 rounded-lg px-5 py-2.5 ring-1 ring-inset ring-slate-200"
            >
              Learn more
            </a>
          </div>
        </section>

        {/* Scientific Foundation */}
        <section id="evidence" className="mt-16 lg:mt-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="sm:p-8 bg-white border-slate-200 border rounded-3xl p-6">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Scientific Foundation</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Built on peer‑reviewed research, Good2Go leverages dual‑task gait analysis for superior sensitivity
                compared to traditional methods.
              </p>

              {/* Chart area — embed live demo chart. */}
              <div className="mt-6 relative rounded-xl border border-slate-200 overflow-hidden">
                <iframe
                  title="Good2Go Demo Score Progress"
                  src="https://good-2-go-concussion-tracker-movementmender.replit.app/?patient=demo_patient&auth=6D640740"
                  className="w-full h-[560px] md:h-[680px] border-0"
                  loading="lazy"
                />
              </div>

              <div className="mt-6">
                <div className="text-sm font-medium">Key Research Findings</div>
                <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                  <li>Enhanced Sensitivity: dual‑task conditions detect deficits that persist longer.</li>
                  <li>Gender‑Based Differences: documented differences in recovery trajectories.</li>
                  <li>Clinical Validation: sensitive/specific marker of functional impairment.</li>
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href="https://book.good2go-rth.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2.5 ring-1 ring-inset ring-blue-600/10"
                >
                  Book a Test
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                <img
                  alt="Clinical research and assessment"
                  className="h-64 w-full object-cover sm:h-72"
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-blue-50 p-5">
                  <div className="text-sm font-medium">Peer‑Reviewed Sources</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight text-blue-700">3+</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-emerald-50 p-5">
                  <div className="text-sm font-medium">Validated Thresholds</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight text-emerald-700">Yes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
