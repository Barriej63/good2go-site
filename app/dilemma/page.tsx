// app/dilemma/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Concussion Dilemma — Good2Go",
  description:
    "Why concussions are an escalating global challenge, and why objective monitoring matters for safe return-to-activity decisions.",
};

export default function DilemmaPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      {/* Hero / Title */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              Global Concussion Dilemma
            </h1>
            <p className="mt-3 text-slate-600">
              A widespread, under-addressed challenge — and a critical need for
              objective recovery monitoring.
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

        {/* Lead Copy */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-slate-700 leading-relaxed">
                The global concussion epidemic represents one of the most significant
                unaddressed healthcare challenges of the modern era, with approximately{" "}
                <span className="font-semibold">70 million</span> concussions occurring
                annually worldwide across sports, workplace, and home environments.
                This massive patient population faces a critical gap in objective
                assessment and monitoring tools, relying primarily on subjective symptom
                reporting and basic cognitive tests that fail to capture the complex
                neurological impacts of traumatic brain injury.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                <span className="font-semibold">When to return to activity</span> is one
                of the most important considerations in the recovery process.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Current concussion management approaches suffer from insufficient data
                for evidence-based recovery decisions. Healthcare practitioners express
                frustration with existing tools that cannot adequately track recovery
                progress or determine safe return-to-activity timelines, creating
                liability concerns and suboptimal patient outcomes.
              </p>
              <p className="mt-4 text-slate-700 leading-relaxed">
                The timing for comprehensive concussion management solutions has never
                been more favorable, driven by converging factors including increased
                concussion awareness, evolving safety regulations, advancing AI
                capabilities, and growing demand for objective healthcare assessment
                tools. Professional sports organizations, educational institutions, and
                workplace safety programs are actively seeking solutions that provide{" "}
                <span className="font-semibold">objective, defensible data</span> for
                concussion-related decisions.
              </p>
            </div>
          </div>

          {/* Dramatic Visual / Stat Card */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-5">
              <div className="text-xs font-medium text-rose-700">Key Reality</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-rose-700">
                70M
              </div>
              <p className="mt-1 text-sm text-slate-700">
                Estimated concussions worldwide each year.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5">
              <div className="text-xs font-medium text-indigo-700">
                Clinical Decision Risk
              </div>
              <p className="mt-2 text-sm text-slate-700">
                Without objective tools, return-to-activity decisions can be inconsistent
                and risky — for patients and providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image placeholders (drop your assets in /public as dilemma1.jpg / dilemma2.jpg) */}
      <section className="mt-12 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
          <div className="relative w-full h-64">
            {/* Replace with your image later: /public/dilemma1.(jpg|png|svg) */}
            <Image
              src="/dilemma1.jpg"
              alt="Concussion context visual 1"
              fill
              priority={false}
              className="object-cover"
            />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
          <div className="relative w-full h-64">
            {/* Replace with your image later: /public/dilemma2.(jpg|png|svg) */}
            <Image
              src="/dilemma2.jpg"
              alt="Concussion context visual 2"
              fill
              priority={false}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Healthcare Economic Impact
        </h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          The economic burden of concussion extends far beyond direct medical costs,
          encompassing productivity losses, long-term care needs, and societal impacts
          that create compelling value propositions for effective solutions.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-emerald-50/70 p-5">
            <div className="text-sm font-medium text-emerald-800">Workforce</div>
            <p className="mt-2 text-sm text-emerald-900">
              Lost productivity and delayed return-to-work increase indirect costs.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-amber-50/70 p-5">
            <div className="text-sm font-medium text-amber-800">Long-term Care</div>
            <p className="mt-2 text-sm text-amber-900">
              Persistent symptoms and re-injury risk can drive prolonged care needs.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-indigo-50/70 p-5">
            <div className="text-sm font-medium text-indigo-800">System Pressure</div>
            <p className="mt-2 text-sm text-indigo-900">
              Health systems and insurers seek objective tools to support safe, timely
              return-to-activity decisions.
            </p>
          </div>
        </div>
      </section>

      {/* CDC / Sports Rates Bullets */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Concussion Rates — Sports, Workplace, and Home
        </h2>
        <p className="mt-3 text-slate-700">
          Highlights from sports concussion data (CDC and related sources):
        </p>

        <ul className="mt-5 grid gap-3 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-700 mt-0.5">•</span>
            <span>
              <span className="font-medium">5–10%</span> of athletes will experience a
              concussion in any given sports season.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-700 mt-0.5">•</span>
            <span>
              About <span className="font-medium">7 out of 10</span> ED visits for
              sports- and recreation-related concussions are among children ages 17 and
              under.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-700 mt-0.5">•</span>
            <span>
              Boys have ~<span className="font-medium">2×</span> the rate of ED visits
              for sports-related TBIs vs. girls; however, in same-rules sports (like
              soccer/basketball), <span className="font-medium">girls’ risk is higher</span>.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-700 mt-0.5">•</span>
            <span>
              ~<span className="font-medium">3.8 million</span> concussions occur in the
              U.S. annually from sport and recreation, with up to{" "}
              <span className="font-medium">50% underreported</span>.
            </span>
          </li>
        </ul>

        <p className="mt-5 text-slate-700">
          Personalisation capabilities remain limited across many current solutions, with
          one-size-fits-all protocols that fail to account for sex, age, activity, and
          baseline performance. This is where objective, individualised monitoring can
          transform decision-making.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/scientific-foundation"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Explore the Science
          </Link>
          <Link
            href="https://book.good2go-rth.com"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700"
          >
            Book an Assessment
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold tracking-tight">Ready to make objective, defensible decisions?</h3>
        <p className="mt-2 text-slate-700">
          See how Good2Go supports safer return-to-activity with evidence-based monitoring.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <Link
            href="https://book.good2go-rth.com"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  );
}

