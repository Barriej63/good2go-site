'use client';

import Link from 'next/link';
import {
  ShieldCheck, Globe, Trophy, Banknote, EyeOff,
  Scale, Gauge, BarChart3, Users, LineChart, Microscope,
  BrainCircuit, Cpu, Sparkles, LayoutDashboard, FileBadge2,
  Activity, BookOpenCheck, BookOpen, Check, ArrowRight,
} from 'lucide-react';
import OutcomesChart from '@/components/OutcomesChart';

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Hero */}
      <section className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8 md:p-10 lg:p-12 p-6">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-100">
              <ShieldCheck className="h-4 w-4" /> Evidence-based platform
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Objective Concussion Recovery Monitoring
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
              Empowering healthcare practitioners with evidence-based tools to guide safe return-to-activity decisions.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700 transition-colors text-sm font-medium text-white bg-blue-600 rounded-lg px-5 py-3 shadow-sm"
              >
                Book an Assessment <Sparkles className="h-4 w-4" />
              </Link>
              <div className="inline-flex gap-2 text-xs text-slate-600 border-slate-200 border rounded-full ml-2 px-3 py-1.5 items-center">
                <Microscope className="h-4 w-4 text-amber-500" /> Built on dual-task gait analysis
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200">
            <img
              alt="Clinician reviewing dual-task gait assessment"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1516670428252-df97bba108d1?w=1200&q=80&auto=format&fit=crop"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200 backdrop-blur">
                <Activity className="h-4 w-4 text-blue-700" /> Dual-task gait · objective recovery metrics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis */}
      <section id="about" className="mt-16 lg:mt-24">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">The Global Concussion Crisis</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Good2Go is an evidence-based concussion monitoring platform that empowers healthcare practitioners with objective assessment
              tools to guide safe return-to-activity decisions. Built on peer-reviewed research and dual-task gait analysis, Good2Go
              addresses the critical gap in concussion management through personalized, scientific protocols.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Globe className="h-4 w-4 text-blue-600" /> 70 Million — Annual concussions worldwide</li>
              <li className="flex items-center gap-2"><Trophy className="h-4 w-4 text-blue-600" /> 3.8 Million — US sports & recreation annually</li>
              <li className="flex items-center gap-2"><Banknote className="h-4 w-4 text-blue-600" /> $57B — Economic burden (United States)</li>
              <li className="flex items-center gap-2"><EyeOff className="h-4 w-4 text-blue-600" /> 50% — Estimated underreporting rate</li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-100">
                  <Globe className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-medium">Annual Concussions</div>
                  <div className="text-xs text-slate-500">Worldwide</div>
                </div>
              </div>
              <div className="mt-4 text-2xl font-semibold tracking-tight text-blue-700">70M</div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
                  <Trophy className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-medium">US Sports/Rec</div>
                  <div className="text-xs text-slate-500">Annual concussions</div>
                </div>
              </div>
              <div className="mt-4 text-2xl font-semibold tracking-tight text-emerald-700">3.8M</div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-100">
                  <Banknote className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-medium">Economic Burden</div>
                  <div className="text-xs text-slate-500">United States</div>
                </div>
              </div>
              <div className="mt-4 text-2xl font-semibold tracking-tight text-amber-700">$57B</div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-100">
                  <EyeOff className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-medium">Underreporting</div>
                  <div className="text-xs text-slate-500">Estimated rate</div>
                </div>
              </div>
              <div className="mt-4 text-2xl font-semibold tracking-tight text-rose-700">50%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="mt-16 lg:mt-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Core Features</h2>
          <a href="#how-it-works" className="hidden sm:inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
            See how it works <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { Icon: Scale, title: 'Balance Score', desc: 'Measures postural stability during dual-task protocols.' },
            { Icon: Gauge, title: 'Gait Speed Score', desc: 'Walking speed under dual-task; height-adjusted.' },
            { Icon: BarChart3, title: 'Good2Go Score', desc: 'Combined gait + balance for decisions.' },
            { Icon: Users, title: 'Personalized Protocols', desc: 'Gender-aware and baseline-aware.' },
            { Icon: LineChart, title: 'Progress Tracking', desc: 'Longitudinal recovery trends.' },
            { Icon: Microscope, title: 'Research-Validated', desc: 'Aligned with peer-reviewed literature.' },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition-transform hover:-translate-y-0.5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-100">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-base font-semibold">{title}</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="mt-16 lg:mt-24">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it Works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: BrainCircuit, t: '1. Dual-Task Assessment', d: 'Walk while completing cognitive challenges.' },
            { Icon: Cpu, t: '2. Data Collection', d: 'Sensors capture gait metrics and balance.' },
            { Icon: Sparkles, t: '3. Algorithm Analysis', d: 'Computes Balance, Gait Speed & Good2Go Scores.' },
            { Icon: LayoutDashboard, t: '4. Clinical Dashboard', d: 'Intuitive views for patients & clinicians.' },
            { Icon: FileBadge2, t: 'Baseline Test (recommended)', d: 'Creates a precise personal comparison point.' },
            { Icon: Activity, t: 'Post-Concussion Monitoring', d: 'Trends + stability indicate recovery.' },
          ].map(({ Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-100">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-base font-semibold">{t}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{d}</p>
            </div>
          ))}
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

            <div className="mt-6 relative rounded-xl border border-slate-200 p-4">
              <div className="h-56">
                <OutcomesChart />
              </div>
            </div>

            <div className="mt-6 text-sm font-medium">Key Research Findings</div>
            <ul className="mt-2 grid gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><BookOpenCheck className="mt-0.5 h-4 w-4 text-blue-700" /> Dual-task detects deficits that persist longer than single-task.</li>
              <li className="flex items-start gap-2"><BookOpenCheck className="mt-0.5 h-4 w-4 text-blue-700" /> Gender-based differences & published normal values.</li>
              <li className="flex items-start gap-2"><BookOpenCheck className="mt-0.5 h-4 w-4 text-blue-700" /> Sensitive & specific marker of functional impairment.</li>
              <li className="flex items-start gap-2"><BookOpenCheck className="mt-0.5 h-4 w-4 text-blue-700" /> Gait costs correlate with subsequent injury risk.</li>
            </ul>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <img
                alt="Clinical research and assessment"
                className="h-64 w-full object-cover sm:h-72"
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="rounded-lg bg-white/90 px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200 backdrop-blur">
                  Research-backed methodology
                </div>
                <a href="#evidence" className="inline-flex items-center gap-1 rounded-md bg-white/90 px-2.5 py-1.5 text-xs font-medium text-slate-800 ring-1 ring-inset ring-slate-200 hover:bg-white">
                  <BookOpen className="h-3.5 w-3.5" /> View references
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-100">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-medium">Peer-Reviewed Sources</div>
                    <div className="text-xs text-slate-500">Per methodology</div>
                  </div>
                </div>
                <div className="mt-4 text-2xl font-semibold tracking-tight text-blue-700">3+</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-medium">Validated Thresholds</div>
                    <div className="text-xs text-slate-500">Clinical practice aligned</div>
                  </div>
                </div>
                <div className="mt-4 text-2xl font-semibold tracking-tight text-emerald-700">Yes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="pricing" className="mt-16 lg:mt-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why Healthcare Providers Choose Good2Go</h2>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600">
            <ShieldCheck className="h-4 w-4" /> Objective, evidence-based decision support
          </span>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: 'Objective Decision Support',
              badge: 'Defensible data',
              primary: false,
              bullets: [
                'Move beyond subjective symptom reporting',
                'Clear support for return-to-activity decisions',
                'Comprehensive Good2Go Score',
              ],
            },
            {
              title: 'Efficient Workflow',
              badge: 'Seamless',
              primary: true,
              bullets: [
                'Streamlined assessment protocols',
                'Integrates with clinical practice',
                'Continuous monitoring and tracking',
              ],
            },
            {
              title: 'Risk Mitigation',
              badge: 'Confidence',
              primary: false,
              bullets: [
                'Reduce liability with objective data',
                'Research-validated thresholds',
                'Detailed documentation for planning',
              ],
            },
          ].map(({ title, badge, primary, bullets }) => (
            <div
              key={title}
              className={`rounded-2xl ${primary ? 'border-2 border-blue-600' : 'border'} border-slate-200 bg-white p-6 shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold">{title}</div>
                <span
                  className={`rounded-full px-2 py-1 text-xs ring-1 ring-inset ${
                    primary ? 'bg-blue-50 text-blue-700 ring-blue-100' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {badge}
                </span>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" /> {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className={`inline-flex w-full items-center justify-center gap-2 mt-5 px-4 py-2.5 text-sm font-medium text-white rounded-lg ${
                  primary ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-slate-800'
                }`}
              >
                {primary ? 'Book a Good2Go Test' : 'Book an Assessment'}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
