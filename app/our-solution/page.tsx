'use client';

export default function OurSolutionPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-900">
      <section className="section max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our Solution</h2>

        <p className="mt-4 prose-muted">
          Monitor patients with Good2Go&apos;s Dual-task Gait assessment.
        </p>

        <p className="mt-3 text-slate-600 leading-relaxed">
          Good2Go is an evidence-based concussion monitoring platform that empowers
          healthcare practitioners with objective assessment tools to guide safe
          return-to-activity decisions. Built on peer-reviewed research and dual-task
          gait analysis, Good2Go addresses the critical gap in concussion management
          through personalised, scientific protocols.
        </p>

        <p className="mt-3 text-slate-600 leading-relaxed">
          It’s important to get the professional help you need to heal after a concussion.
          Good2Go&apos;s Dual-task Gait assessment aids the healthcare practitioner to
          apply multidisciplinary interventions to help you recover sooner.
        </p>

        <ul className="mt-3 grid gap-2 text-sm text-slate-700">
          <li>
            Provides healthcare practitioners with objective, defensible data for
            safe return-to-activity decisions.
          </li>
          <li>
            Gives patients clear, understandable information showing where they are
            on their return-to-health journey.
          </li>
          <li>
            Improves patient confidence in their care team and path to recovery.
          </li>
        </ul>

        <div className="mt-5">
          <a
            href="https://book.good2go-rth.com"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Book an Assessment
          </a>
        </div>
      </section>
    </main>
  );
}

