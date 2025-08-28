'use client';
import Header from '@/components/Header';
import OutcomesChart from '@/components/OutcomesChart';
import ContactForm from '@/app/ContactForm';

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-7xl sm:px-6 lg:px-8 mx-auto pt-28 px-4">
        {/* Hero */}
        <section className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="grid gap-10 md:grid-cols-2 md:gap-8 md:p-10 lg:p-12 p-6">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-100">
                Evidence-based platform
              </div>
              <h1 className="sm:text-5xl lg:text-6xl leading-[1.05] text-4xl font-semibold tracking-tight">
                Objective Concussion Recovery Monitoring
              </h1>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                Empowering healthcare practitioners with evidence-based tools to guide safe return-to-activity decisions.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="https://book.good2go-rth.com" className="inline-flex items-center gap-2 ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700 transition-colors text-sm font-medium text-white bg-blue-600 rounded-lg py-3 px-5 shadow-sm">
                  Book an Assessment
                </a>
                <div className="inline-flex gap-2 text-xs text-slate-600 border-slate-200 border rounded-full ml-2 py-1.5 px-3 items-center">
                  Built on dual-task gait analysis
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <img alt="Clinician reviewing dual-task gait assessment" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1516670428252-df97bba108d1?w=1200&q=80&auto=format&fit=crop" />
            </div>
          </div>
        </section>

        {/* Crisis */}
        <section id="about" className="mt-16 lg:mt-24">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">The Global Concussion Crisis</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Good2Go is an evidence-based concussion monitoring platform that empowers healthcare practitioners with objective assessment tools to guide safe return-to-activity decisions.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-700">
                <li>70M — Annual concussions worldwide</li>
                <li>3.8M — US sports/recreation concussions annually</li>
                <li>$57B — Economic burden in the United States</li>
                <li>~50% — Estimated underreporting</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-sm font-medium">Annual Concussions</div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-blue-700">70M</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-sm font-medium">US Sports/Rec</div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-emerald-700">3.8M</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-sm font-medium">Economic Burden</div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-amber-700">$57B</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-sm font-medium">Underreporting</div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-rose-700">50%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-16 lg:mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Core Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-slate-200 bg-white p-6">Balance Score</div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6">Gait Speed Score</div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6">Good2Go Score</div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6">Personalized Protocols</div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6">Progress Tracking</div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6">Research-Validated</div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="mt-16 lg:mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it Works</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">1. Dual-Task Assessment</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">2. Data Collection</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">3. Algorithm Analysis</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">4. Clinical Dashboard</div>
          </div>
        </section>

        {/* Evidence */}
        <section id="evidence" className="mt-16 lg:mt-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="sm:p-8 bg-white border-slate-200 border rounded-3xl p-6">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Scientific Foundation</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Built on peer-reviewed research, Good2Go leverages dual-task gait analysis for superior sensitivity compared to traditional methods.
              </p>
              <div className="mt-6 rounded-xl border border-slate-200 p-4 bg-white">
                <OutcomesChart />
              </div>
              <ul className="mt-6 grid gap-2 text-sm text-slate-700">
                <li>Enhanced Sensitivity: dual-task conditions detect deficits that persist longer.</li>
                <li>Gender-Based Differences: documented differences in recovery trajectories.</li>
                <li>Clinical Validation: sensitive/specific marker of functional impairment.</li>
              </ul>
            </div>
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                <img alt="Clinical research" className="h-64 w-full object-cover sm:h-72" src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80&auto=format&fit=crop" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-medium">Peer-Reviewed Sources</div>
                  <div className="mt-4 text-2xl font-semibold tracking-tight text-blue-700">3+</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-sm font-medium">Validated Thresholds</div>
                  <div className="mt-4 text-2xl font-semibold tracking-tight text-emerald-700">Yes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 lg:mt-24 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Request a Demo</h2>
            <p className="mt-3 text-slate-600">See how Good2Go can transform concussion management. Our team will respond within one business day.</p>
            <ContactForm />
          </div>
          <div className="grid gap-4">
            <div className="bg-white border-slate-200 border rounded-2xl p-6">Booking is available via our partner portal.</div>
            <div className="bg-white border-slate-200 border rounded-2xl p-6">Replace this with your clinic information or map.</div>
          </div>
        </section>
      </main>
    </>
  );
}
