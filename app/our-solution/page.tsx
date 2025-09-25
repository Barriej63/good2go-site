// app/our-solution/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Solution — Good2Go",
  description:
    "Good2Go’s AI-Enhanced Dual-Task Gait Technology: objective concussion monitoring, personalized recovery, and clinical decision support.",
};

export default function OurSolutionPage(): JSX.Element {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      {/* Intro / Hero (kept as-is) */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Our Solution</h1>
            <p className="mt-2 text-slate-600">
              <strong>
                Objective monitoring, personalised recovery, and confident decisions to support a
                safe return to health.
              </strong>
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

        {/* Why it matters */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6">
          <div className="text-xs font-medium text-indigo-700">Why it matters</div>
          <p className="mt-2 text-sm text-slate-700">
            <span className="font-medium">We help solve the answer to the question's "When can I return?", "Have I recovered?", "Is it safe for me to go back?".  
            Subjective reports aren’t enough. Good2Go delivers{" "}objective, defensible data</span> that clinicians and
            organizations can trust.
          </p>
        </div>
      </section>

      {/* 1) Good2Go Concussion Recovery Dashboard (moved directly under Hero) */}
      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Good2Go Concussion Recovery Dashboard
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {/* Card 1: Current performance — horizontal scroll on mobile */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="relative w-full h-64 overflow-x-auto">
              <div className="min-w-[520px] h-64 relative">
                <Image
                  src="/demo2-currentperformance.png"
                  alt="Current performance vs targets"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-700">
              These cards show the most recent test scores relative to personalised targets. Balance
              Score measures postural stability; Gait Speed Score evaluates walking under dual-task
              conditions; Good2Go Score combines both for overall recovery.
              <br />
              <span className="font-medium text-emerald-700">Green</span> = Good2Go;{" "}
              <span className="font-medium text-amber-600">Orange</span> = monitor;{" "}
              <span className="font-medium text-rose-600">Red</span> = needs attention.
            </p>
          </div>

          {/* Card 2: New norm vs baseline */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="relative w-full h-64">
              <Image
                src="/demo2-newnorm-v-baseline.png"
                alt="New norm versus baseline"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="mt-3 text-sm text-slate-700">
              Patients can exceed their baseline and establish a{" "}
              <span className="font-medium">new norm</span>—indicating recovered individual
              capacity.
            </p>
          </div>

          {/* Card 3: Predicted / target speed score */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="relative w-full h-64">
              <Image
                src="/demopatient-speedscore.png"
                alt="Predicted speed score trajectory"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="mt-3 text-sm text-slate-700">
              Without a baseline, a predicted score + range sets a personalised target. Progress can
              still be tracked and a new norm established.
            </p>
          </div>

          {/* Card 4: Balance score progress */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="relative w-full h-64">
              <Image
                src="/demopatient-balancescore.png"
                alt="Balance score progression"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="mt-3 text-sm text-slate-700">
              Even without a baseline, the patient has reached the target range and is approaching
              normalisation; once stable, a new norm will be set.
            </p>
          </div>
        </div>
      </section>

      {/* 2) Healthcare Provider Value Proposition (now after Dashboard) */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Healthcare Provider Value Proposition
        </h2>
        <p className="mt-3 text-slate-700">
          Eliminate uncertainty, may reduce liability, and make confident return-to-activity decisions.
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
              Expert-level assessment guidance that supports every patient and reduces risk.
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

      {/* 3) NEW: Our Solution – How the Good2Go charts help */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Our Solution — How the Good2Go Charts Help
        </h2>

        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
          <div className="text-sm font-semibold text-emerald-900">What “normalised” looks like</div>
          <p className="mt-2 text-sm text-emerald-900">
            When a patient’s testing data begins to form a near-horizontal line across repeated
            assessments, it indicates they’ve <span className="font-medium">normalised</span>
            —returned to their usual state. Prior to this, the trend shows how they are recovering.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5">
            <div className="text-sm font-medium text-indigo-900">Different recovery priorities</div>
            <p className="mt-2 text-sm text-indigo-900">
              Some patients naturally prioritise{" "}
              <span className="font-medium">gait speed</span> (they like to “work hard”); others
              focus on <span className="font-medium">dynamic balance</span> and may reduce speed to
              improve it.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5">
            <div className="text-sm font-medium text-amber-900">Guided, safer progression</div>
            <p className="mt-2 text-sm text-amber-900">
              The Good2Go assessments reveal these differences so Healthcare providers can 
              progress patients safely toward normalisation.
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-700">
          In short, the charts make differences visible, help set the right emphasis at each stage,
          and show when recovery has stabilised.
        </p>
      </section>

      {/* Remaining sections (kept unchanged and in the same relative order) */}

      {/* Sports & Workplace value */}
      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Sports Organisation Value</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700">
            <li>
              <span className="font-medium">Participant Safety:</span> Demonstrate commitment with
              baseline + monitoring.
            </li>
            <li>
              <span className="font-medium">Liability Reduction:</span> Defensible evidence for
              return-to-play.
            </li>
            <li>
              <span className="font-medium">Competitive Advantage:</span> Safety excellence drives
              recruitment &amp; retention.
            </li>
            <li>
              <span className="font-medium">Regulatory Alignment:</span> Objective tools that may
              support evolving rules.
            </li>
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

        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Workplace Safety Value</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-700">
            <li>
              <span className="font-medium">Worker Protection:</span> Objective assessment for
              injury management.
            </li>
            <li>
              <span className="font-medium">Compensation Optimisation:</span> Defensible evidence
              for claims &amp; RTW.
            </li>
            <li>
              <span className="font-medium">Regulatory Compliance:</span> Aligns with OHS
              expectations &amp; reporting.
            </li>
            <li>
              <span className="font-medium">Insurance Benefits:</span> Could influence premium reductions
              via safety programs.
            </li>
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

      {/* Core Features */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Core Features</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Balance Score",
              "Measures postural stability during dynamic tasks using validated dual task protocols. Detects subtle neurological deficits that traditional balance tests miss.",
              "bg-emerald-50/70",
            ],
            [
              "Gait Speed Score",
              "Evaluates walking speed under dual task conditions with height adjusted normalisation to capture functional impairment.",
              "bg-indigo-50/70",
            ],
            [
              "Good2Go Score",
              "Combines balance and gait metrics into a comprehensive recovery score for evidence based decisions.",
              "bg-amber-50/70",
            ],
            [
              "Personalised Protocols",
              "Accounts for gender based differences and individual baselines to improve clinical accuracy.",
              "bg-purple-50/70",
            ],
            [
              "Progress Tracking",
              "Longitudinal dashboards visualise recovery trends and milestone achievements over time.",
              "bg-blue-50/70",
            ],
            [
              "Research Validated",
              "Protocols validated against peer reviewed research with minimum three sources per methodology.",
              "bg-rose-50/70",
            ],
          ].map(([title, body, bg], i) => (
            <div key={i} className={`rounded-2xl border border-slate-200 ${bg} p-6`}>
              <div className="text-base font-semibold">{title}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two solution images under Core Features */}
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

      {/* Strategy block — kept at very bottom */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <p className="text-slate-700 leading-relaxed">
          Good2Go’s AI-Enhanced Dual-Task Gait Technology platform represents a transformational
          opportunity in the global concussion management market, uniquely positioned as the world's
          only comprehensive solution for objective post-concussion recovery tracking and proactive
          baseline assessment.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Research demonstrating gender-based differences in dual-task gait recovery patterns
          indicates clear opportunities for personalised assessment and monitoring approaches that
          could provide superior clinical value.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Good2Go is a Clinical Decision Support tool that proposition addresses critical unmet
          needs in concussion management while providing competitive advantages and liability
          reduction for healthcare practitioners.
        </p>
      </section>
    </main>
  );
}
