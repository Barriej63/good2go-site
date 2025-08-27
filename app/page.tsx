import OutcomesChart from '../components/OutcomesChart';
import { Beaker, Activity, ArrowRight, Trophy, Home as HomeIcon, Briefcase, ShieldCheck, TrendingUp, TrendingDown, Info, Sparkles } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8 md:p-10 lg:p-12 p-6">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-100">
              <ShieldCheck className="h-4 w-4" />
              Evidence-based platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold tracking-tight">
              Objective Concussion Recovery Monitoring
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              Empowering healthcare practitioners with evidence-based tools to guide safe return-to-activity decisions.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="https://book.good2go-rth.com/book" className="inline-flex items-center gap-2 ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700 transition-colors text-sm font-medium text-white bg-blue-600 rounded-lg py-3 px-5 shadow-sm">
                Book an Assessment
                <Sparkles className="h-4 w-4" />
              </a>
              <div className="inline-flex gap-2 text-xs text-slate-600 border border-slate-200 rounded-full ml-2 py-1.5 px-3 items-center">
                <Beaker className="h-4 w-4 text-amber-500" />
                Built on dual-task gait analysis
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200">
            <img alt="Clinician reviewing dual-task gait assessment" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1516670428252-df97bba108d1?w=1200&q=80&auto=format&fit=crop" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200 backdrop-blur">
                <Activity className="h-4 w-4 text-blue-700" />
                Dual-task gait · objective recovery metrics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Global Concussion Crisis */}
      <section id="about" className="mt-16 lg:mt-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">The Global Concussion Crisis</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Good2Go is an evidence-based concussion monitoring platform that empowers healthcare practitioners with objective assessment tools to guide safe return-to-activity decisions. Built on peer-reviewed research and dual-task gait analysis, Good2Go addresses the critical gap in concussion management through personalized, scientific protocols.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="mt-16 lg:mt-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Core Features</h2>
          <a href="#how-it-works" className="hidden sm:inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
            See how it works
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-transform hover:-translate-y-0.5">
            <div className="text-base font-semibold">Balance Score</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Measures postural stability during dynamic tasks using validated dual-task protocols.
            </p>
          </div>
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-transform hover:-translate-y-0.5">
            <div className="text-base font-semibold">Gait Speed Score</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Evaluates walking speed under dual-task conditions with height-adjusted normalization.
            </p>
          </div>
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-transform hover:-translate-y-0.5">
            <div className="text-base font-semibold">Good2Go Score</div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Combines balance and gait metrics into a comprehensive recovery score for decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Evidence with Chart */}
      <section id="evidence" className="mt-16 lg:mt-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Scientific Foundation</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Built on peer-reviewed research, Good2Go leverages dual-task gait analysis for superior sensitivity.
          </p>
          <div className="mt-6">
            <div className="relative rounded-xl border border-slate-200 p-4">
              <div className="h-56">
                <OutcomesChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="pricing" className="mt-16 lg:mt-24">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-base font-semibold">Objective Decision Support</div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>Move beyond subjective symptom reporting</li>
              <li>Clear support for return-to-activity decisions</li>
              <li>Comprehensive Good2Go Score</li>
            </ul>
            <a href="https://book.good2go-rth.com/book" className="inline-flex w-full items-center justify-center text-sm font-medium text-white bg-slate-900 rounded-lg mt-5 py-2.5 px-4 hover:bg-slate-800">Book an Assessment</a>
          </div>
          <div className="rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-sm">
            <div className="text-base font-semibold">Efficient Workflow</div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>Streamlined assessment protocols</li>
              <li>Integrates with clinical practice</li>
              <li>Continuous monitoring and tracking</li>
            </ul>
            <a href="https://book.good2go-rth.com/book" className="inline-flex w-full items-center justify-center text-sm font-medium text-white bg-blue-600 rounded-lg mt-5 py-2.5 px-4 hover:bg-blue-700">Book a Good2Go Test</a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-base font-semibold">Risk Mitigation</div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li>Reduce liability with objective data</li>
              <li>Research-validated thresholds</li>
              <li>Detailed documentation for planning</li>
            </ul>
            <a href="/#contact" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
              Talk to Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-16 lg:mt-24">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Request a Demo</h2>
          <p className="mt-3 text-slate-600">
            See how Good2Go can transform concussion management. We’ll respond within one business day.
          </p>
          <form action="/api/contact" method="POST" className="mt-6 grid gap-4">
            <input type="hidden" name="context" value="good2go" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Full name</label>
                <input name="name" required placeholder="Jane Doe" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">Email</label>
                <input name="email" type="email" required placeholder="jane@company.com" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">Company (optional)</label>
              <input name="company" placeholder="Company Inc." className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700">Message</label>
              <textarea name="message" required rows={5} placeholder="Tell us about your needs…" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm" />
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                By submitting, you agree to be contacted about your request.
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
