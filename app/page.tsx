
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="section">
        <div className="card p-6 md:p-10 lg:p-12 grid gap-10 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col justify-center">
            <div className="kicker">Evidence-based platform</div>
            <h1 className="h1 mt-3">Recover Smart. Return Strong.</h1>
            <p className="mt-5 prose-muted text-base sm:text-lg">
              Empowering healthcare practitioners with objective tools to guide safe return-to-activity decisions.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="https://book.good2go-rth.com" className="btn btn-primary">Book an Assessment</a>
              <span className="badge"><span className="text-blue-600">•</span> Built on dual-task gait analysis</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200">
            <img
              alt="Clinician reviewing dual-task gait assessment"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1516670428252-df97bba108d1?w=1200&q=80&auto=format&fit=crop"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Crisis */}
      <section className="section" id="about">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="h2">The Global Concussion Crisis</h2>
            <p className="mt-4 prose-muted leading-relaxed">
              Good2Go empowers healthcare practitioners with objective assessment tools to guide safe return-to-activity
              decisions. Built on peer-reviewed research and dual-task gait analysis, Good2Go addresses the critical gap
              in concussion management through personalized, scientific protocols.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li>🌍 70M — annual concussions worldwide</li>
              <li>🏆 3.8M — US sports & recreation concussions annually</li>
              <li>💵 $57B — US economic burden of concussion</li>
              <li>🙈 50% — estimated underreporting rate</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card p-5">
              <div className="text-sm font-medium">Annual Concussions</div>
              <div className="small">Worldwide</div>
              <div className="mt-4 text-2xl font-semibold tracking-tight text-blue-700">70M</div>
            </div>
            <div className="card p-5">
              <div className="text-sm font-medium">US Sports/Rec</div>
              <div className="small">Annual concussions</div>
              <div className="mt-4 text-2xl font-semibold tracking-tight text-emerald-700">3.8M</div>
            </div>
            <div className="card p-5">
              <div className="text-sm font-medium">Economic Burden</div>
              <div className="small">United States</div>
              <div className="mt-4 text-2xl font-semibold tracking-tight text-amber-700">$57B</div>
            </div>
            <div className="card p-5">
              <div className="text-sm font-medium">Underreporting</div>
              <div className="small">Estimated rate</div>
              <div className="mt-4 text-2xl font-semibold tracking-tight text-rose-700">50%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="section">
        <div className="card p-6 sm:p-8">
          <h2 className="h2">Our Solution</h2>
          <p className="mt-3 prose-muted">
            Monitor patients with Good2Go&apos;s Dual-task Gait assessment.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700">
            <li>• Objective, defensible data supporting safe return-to-activity decisions.</li>
            <li>• Clear, understandable results that show progress on the return-to-health journey.</li>
            <li>• Improves patient confidence in their care team and pathway.</li>
          </ul>
        </div>
      </section>

      {/* Core Features */}
      <section className="section" id="features">
        <div className="flex items-end justify-between gap-6">
          <h2 className="h2">Core Features</h2>
          <a href="#how-it-works" className="hidden sm:inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
            See how it works →
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card p-6">
            <div className="text-base font-semibold">Balance Score</div>
            <p className="mt-3 prose-muted">
              Measures postural stability under dynamic tasks using validated dual-task protocols; detects subtle deficits
              traditional balance tests miss.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-base font-semibold">Gait Speed Score</div>
            <p className="mt-3 prose-muted">
              Evaluates walking speed under dual-task conditions with height-adjusted normalization to capture functional impairment.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-base font-semibold">Good2Go Score</div>
            <p className="mt-3 prose-muted">
              Combines balance and gait metrics into a comprehensive recovery score for evidence-based decisions.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-base font-semibold">Personalized Protocols</div>
            <p className="mt-3 prose-muted">
              Accounts for gender-based differences and individual baselines to improve clinical accuracy.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-base font-semibold">Progress Tracking</div>
            <p className="mt-3 prose-muted">
              Longitudinal dashboards visualize recovery trends and milestone achievements over time.
            </p>
          </div>
          <div className="card p-6">
            <div className="text-base font-semibold">Research-Validated</div>
            <p className="mt-3 prose-muted">
              Protocols validated against peer-reviewed research with minimum three sources per methodology.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section" id="how-it-works">
        <h2 className="h2">How it Works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card p-6">
            <div className="text-base font-semibold">1. Dual-Task Assessment</div>
            <p className="mt-3 prose-muted">Walking tasks + cognitive load mirror real-world demands.</p>
          </div>
          <div className="card p-6">
            <div className="text-base font-semibold">2. Data Collection</div>
            <p className="mt-3 prose-muted">Sensors capture gait metrics and dynamic balance data.</p>
          </div>
          <div className="card p-6">
            <div className="text-base font-semibold">3. Algorithm Analysis</div>
            <p className="mt-3 prose-muted">Balance, Gait Speed, and Good2Go Score computed.</p>
          </div>
          <div className="card p-6">
            <div className="text-base font-semibold">4. Clinical Dashboard</div>
            <p className="mt-3 prose-muted">Patients & clinicians track recovery and readiness.</p>
          </div>
        </div>
      </section>

      {/* Scientific Foundation with embed */}
      <section className="section" id="evidence">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="h2">Scientific Foundation</h2>
            <div className="mt-6">
              <div className="relative rounded-xl border border-slate-200 p-4">
                <div className="h-56">
                  <iframe
                    title="Good2Go Dashboard"
                    className="w-full h-full rounded"
                    src="https://good-2-go-concussion-tracker-movementmender.replit.app/?auth=NCKV7LG2"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-sm font-medium">Key Research Findings</div>
              <ul className="mt-2 grid gap-3 text-sm text-slate-700">
                <li>Enhanced Sensitivity: Dual-task conditions detect concussion-related deficits that persist longer than single-task assessments.</li>
                <li>Gender-Based Differences: Study of 94 collegiate athletes established normal values and documented sex-based recovery differences.</li>
                <li>Clinical Validation: Multiple studies show dual-task gait analysis as a sensitive and specific marker of functional impairment.</li>
                <li>Predictive Value: Dual-task gait costs are associated with subsequent sport-related injury risk.</li>
              </ul>
              <div className="mt-6 text-sm font-medium">Quality Assurance Standards</div>
              <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                <li>Minimum 3 peer-reviewed sources per methodology; thresholds validated against clinical research.</li>
                <li>Statistical significance maintained; individual assessments prioritized over population norms.</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <img className="h-64 w-full object-cover sm:h-72"
                   src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80&auto=format&fit=crop"
                   alt="Clinical research and assessment" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-5">
                <div className="text-sm font-medium">Peer-Reviewed Sources</div>
                <div className="small">Per methodology</div>
                <div className="mt-4 text-2xl font-semibold tracking-tight text-blue-700">3+</div>
              </div>
              <div className="card p-5">
                <div className="text-sm font-medium">Validated Thresholds</div>
                <div className="small">Clinical practice aligned</div>
                <div className="mt-4 text-2xl font-semibold tracking-tight text-emerald-700">Yes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="flex items-end justify-between gap-6">
          <h2 className="h2">Why Healthcare Providers Choose Good2Go</h2>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
            Objective, evidence-based decision support
          </span>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Objective Decision Support</div>
              <span className="badge">Defensible data</span>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>Move beyond subjective symptom reporting</li>
              <li>Clear support for return-to-activity decisions</li>
              <li>Comprehensive Good2Go Score</li>
            </ul>
            <a href="#contact" className="btn btn-dark mt-5 w-full">Request Demo</a>
          </div>
          <div className="card p-6 border-2 border-blue-600 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Efficient Workflow</div>
              <span className="badge text-blue-700">Seamless</span>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>Streamlined assessment protocols</li>
              <li>Integrates with clinical practice</li>
              <li>Continuous monitoring and tracking</li>
            </ul>
            <a href="https://book.good2go-rth.com" className="btn btn-primary mt-5 w-full">Schedule Your Demo Today</a>
          </div>
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">Risk Mitigation</div>
              <span className="badge">Confidence</span>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>Reduce liability with objective data</li>
              <li>Research-validated thresholds</li>
              <li>Detailed documentation for planning</li>
            </ul>
            <a href="#contact" className="btn btn-dark mt-5 w-full">Talk to Us</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h2 className="h2">Request a Demo</h2>
            <p className="mt-3 prose-muted">
              See how Good2Go can transform concussion management with objective, evidence-based assessment tools.
              Our team will respond within one business day.
            </p>
            <form action="/api/contact" method="POST" className="mt-6 grid gap-4">
              <input type="hidden" name="context" value="good2go" />
              <input type="hidden" name="topic" value="demo" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-700">Full name</label>
                  <input name="name" required placeholder="Jane Doe"
                         className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-700">Email</label>
                  <input name="email" type="email" required placeholder="jane@company.com"
                         className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Company (optional)</label>
                <input name="company" placeholder="Company Inc."
                       className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Message</label>
                <textarea name="message" required rows={5} placeholder="Tell us about your needs…"
                          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <span>🔒</span> By submitting, you agree to be contacted about your request.
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
          <div className="grid gap-4">
            <div className="card p-6">
              <div className="text-sm font-medium">Brand</div>
              <p className="prose-muted mt-3">Good2Go — Recover Smart. Return Strong.</p>
            </div>
            <div className="card p-6">
              <div className="text-sm font-medium">Booking</div>
              <a href="https://book.good2go-rth.com" className="btn btn-primary mt-3 w-full">Book a Test</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
