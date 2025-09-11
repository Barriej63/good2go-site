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
              <strong>
                Objective monitoring, personalised recovery, and confident decisions to support a safe return to health
              </strong>.
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

        {/* “Why it matters” highlight (stay near top) */}
        <div className="mt-6 grid gap-6">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6">
            <div className="text-xs font-medium text-indigo-700">Why it matters</div>
            <p className="mt-2 text-sm text-slate-700">
              Subjective reports aren’t enough. Good2Go delivers <span className="font-medium">objective, defensible data</span> that
              clinicians and organizations can trust.
            </p>
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
            href="/how-it-works"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            See How it Works
          </Link>
        </div>
      </section>

    {/* Good2Go Concussion Recovery Dashboard (4 visuals + explanations, 2x2 layout) */}
<section className="mt-12">
  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
    Good2Go Concussion Recovery Dashboard
  </h2>
  <p className="mt-2 text-slate-600 text-center max-w-3xl mx-auto">
    Visuals that help clinicians and patients track recovery progress with clear, objective metrics.
  </p>

  <div className="mt-8 grid gap-8 sm:grid-cols-2">
    {/* Card 1 */}
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="relative w-full h-64">
        <Image
          src="/demo2-currentperformance.png"
          alt="Current performance scores"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="mt-3 text-sm text-slate-700">
        Cards show most recent test scores relative to targets. 
        <span className="font-medium text-emerald-600"> Green</span> = Good2Go, 
        <span className="font-medium text-amber-500"> Orange</span> = monitor closely, 
        <span className="font-medium text-rose-600"> Red</span> = requires attention.
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="relative w-full h-64">
        <Image
          src="/demo2-newnorm-v-baseline.png"
          alt="New norm vs baseline"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="mt-3 text-sm text-slate-700">
        Shows how patients can exceed baseline and establish a 
        <span className="font-medium"> new norm</span>, 
        representing recovery of individual capacity.
      </p>
    </div>

    {/* Card 3 */}
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="relative w-full h-64">
        <Image
          src="/demopatient-speedscore.png"
          alt="Patient speed score"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="mt-3 text-sm text-slate-700">
        Predicted targets are generated if no baseline exists. 
        This patient is still <span className="font-medium">tracking positively</span> 
        toward recovery.
      </p>
    </div>

    {/* Card 4 */}
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="relative w-full h-64">
        <Image
          src="/demopatient-balancescore.png"
          alt="Patient balance score"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="mt-3 text-sm text-slate-700">
        Balance score approaching the <span className="font-medium">target range</span>. 
        When normalised, a new norm is established for continued monitoring.
      </p>
    </div>
  </div>
</section>

      {/* Sports Organization Value Proposition (unchanged) */}
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

        {/* Workplace Safety Value Proposition (unchanged) */}
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

      {/* Image placeholders (solution1 & solution2) */}
      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
          <div className="relative w-full h-64">
            <Image
              src="/solution1.webp"
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
              src="/solution2.jpg"
              alt="Good2Go solution visual 2"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </section>
      
      {/* Final platform section (moved to bottom as requested) */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <p className="text-slate-700 leading-relaxed">
          Good2Go’s AI-Enhanced Dual-Task Gait Technology platform represents a transformational opportunity in the global
          concussion management market, uniquely positioned as the world's only comprehensive solution for objective
          post-concussion recovery tracking and proactive baseline assessment.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Research demonstrating gender-based differences in dual-task gait recovery patterns indicates clear opportunities for
          personalised assessment and monitoring approaches that could provide superior clinical value.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Good2Go is a Clinical Decision Support tool that proposition addresses critical unmet needs in concussion management
          while providing competitive advantages and liability reduction for healthcare practitioners.
        </p>

        {/* Bottom CTAs */}
        <div className="mt-6 flex items-center gap-3">
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
