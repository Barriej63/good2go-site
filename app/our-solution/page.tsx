// app/our-solution/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Solution — Good2Go",
  description:
    "Good2Go’s AI-Enhanced Dual-Task Gait Technology: objective concussion monitoring, personalized recovery, and clinical decision support.",
};

export default function OurSolutionPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      {/* Intro / Hero */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Our Solution</h1>
            <p className="mt-2 text-slate-600">
              Objective monitoring, personalized recovery, and confident decisions.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://book.good2go-rth.com"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700"
            >
              Book a Test
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-slate-900/10 hover:bg-slate-800"
            >
              Talk to Us
            </Link>
          </div>
        </div>

        {/* FIRST 3 PARAGRAPHS — UNCHANGED */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-slate-700 leading-relaxed">
                Good2Go’s AI-Enhanced Dual-Task Gait Technology platform represents a transformational opportunity in the global concussion management market, uniquely positioned as the world's only comprehensive solution for objective post-concussion recovery tracking and proactive baseline assessment.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Research demonstrating gender-based differences in dual-task gait recovery patterns indicates clear opportunities for personalised assessment and monitoring approaches that could provide superior clinical value.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Good2Go is a Clinical Decision Support tool that proposition addresses critical unmet needs in concussion management while providing competitive advantages and liability reduction for healthcare practitioners.
              </p>
            </div>
          </div>

          {/* Vibrant highlight card */}
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6">
            <div className="text-xs font-medium text-indigo-700">Why it matters</div>
            <p className="mt-2 text-sm text-slate-700">
              Subjective reports aren’t enough. Good2Go delivers <span className="font-medium">objective, defensible data</span> that
              clinicians and organizations can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Image placeholders */}
      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
          <div className="relative w-full h-64">
            <Image
              src="/solution1.jpg" // add your file to /public
              alt="Good2Go solution visual 1"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
          <div className="relative w-full h-64">
            <Image
              src="/solution2.jpg" // add your file to /public
              alt="Good2Go solution visual 2"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* Healthcare Provider Value Proposition (condensed, punchy cards) */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Healthcare Provider Value Proposition
        </h2>
        <p className="mt-3 text-slate-700">
          Eliminate uncertainty, reduce liability, and make confident return-to-activity decisions.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-emerald-50/70 p-5">
            <div className="text-sm font-medium text-emerald-800">Objective Assessment</div>
            <p className="mt-2 text-sm text-emerald-900">
              Move beyond symptoms and basic cognitive tests with defensible, objective metrics.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-indigo-50/70 p-5">
            <div className="text-sm font-medium text-indigo-800">Personalised Tracking</div>
            <p className="mt-2 text-sm text-indigo-900">
              Baseline + post-injury comparisons tailored to the individual—not population norms.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-amber-50/70 p-5">
            <div className="text-sm font-medium text-amber-800">Clinical Decision Support</div>
            <p className="mt-2 text-sm text-amber-900">
              Expert-level assessment guidance that supports compliance and reduces risk.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-rose-50/70 p-5">
            <div className="text-sm font-medium text-rose-800">Improved Outcomes</div>
            <p className="mt-2 text-sm text-rose-900">
              Lower re-injury risk and better recovery trajectories with objective oversight.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="https://book.good2go-rth.com"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700"
          >
            Book an Assessment
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      {/* Sports Organization Value Proposition (condensed) */}
      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Sports Organization Value</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700">
            <li><span className="font-medium">Participant Safety:</span> Demonstrate commitment with baseline + monitoring.</li>
            <li><span className="font-medium">Liability Reduction:</span> Defensible documentation for return-to-play.</li>
            <li><span className="font-medium">Competitive Advantage:</span> Safety excellence drives recruitment & retention.</li>
            <li><span className="font-medium">Regulatory Alignment:</span> Objective tools that support evolving rules.</li>
          </ul>
          <div className="mt-5">
            <Link
              href="https://book.good2go-rth.com"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700"
            >
              Book Team Baselines
            </Link>
          </div>
        </div>

        {/* Workplace Safety Value Proposition (condensed) */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Workplace Safety Value</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700">
            <li><span className="font-medium">Worker Protection:</span> Objective assessment for injury management.</li>
            <li><span className="font-medium">Compensation Optimization:</span> Defensible evidence for claims & RTW.</li>
            <li><span className="font-medium">Regulatory Compliance:</span> Aligns with OHS expectations & reporting.</li>
            <li><span className="font-medium">Insurance Benefits:</span> Support premium reductions via safety programs.</li>
          </ul>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Talk to Occupational Health
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features (colorful, “pop” boxes) */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Core Features</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Balance Score", "Measures postural stability during dynamic tasks using validated dual task protocols. Detects subtle neurological deficits that traditional balance tests miss.", "bg-emerald-50/70"],
            ["Gait Speed Score", "Evaluates walking speed under dual task conditions with height adjusted normalisation to capture functional impairment.", "bg-indigo-50/70"],
            ["Good2Go Score", "Combines balance and gait metrics into a comprehensive recovery score for evidence based decisions.", "bg-amber-50/70"],
            ["Personalised Protocols", "Accounts for gender based differences and individual baselines to improve clinical accuracy.", "bg-purple-50/70"],
            ["Progress Tracking", "Longitudinal dashboards visualise recovery trends and milestone achievements over time.", "bg-blue-50/70"],
            ["Research Validated", "Protocols validated against peer reviewed research with minimum three sources per methodology.", "bg-rose-50/70"],
          ].map(([title, body, bg], i) => (
            <div key={i} className={`rounded-2xl border border-slate-200 ${bg} p-6`}>
              <div className="text-base font-semibold">{title}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold tracking-tight">Ready to see it in action?</h3>
        <p className="mt-2 text-slate-700">
          Explore the workflow and how Good2Go supports evidence-based recovery.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            See How it Works
          </Link>
          <Link
            href="https://book.good2go-rth.com"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Book an Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
