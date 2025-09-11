// app/our-why/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Why — Good2Go",
  description:
    "Why we built Good2Go: safer, objective concussion recovery for athletes, workers, and the elderly—powered by dual-task gait and evidence-based monitoring.",
};

export default function OurWhyPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      {/* Hero */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Our Why</h1>
            <p className="mt-3 text-slate-700 max-w-3xl">
              We’ve seen the impact of concussion first-hand—in sport, on worksites, and among older
              adults. The biggest question is always the same: <span className="font-medium">“When can I safely
              return to activity?”</span>
            </p>
          </div>

          {/* Quick CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="https://book.good2go-rth.com"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700"
            >
              Book a Test
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-slate-900/10 hover:bg-slate-800"
            >
              Home
            </Link>
          </div>
        </div>

        {/* Mission & background */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Why we started</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              We’ve spent years coaching athletes across multiple sports, working in construction,
              and supporting older adults. Across all settings, concussion created uncertainty—
              especially around <span className="font-medium">when it’s safe to return</span>.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Our mission became clear: build a simple, objective way to support a safe return to
              health—rooted in research and easy for clinicians to use.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6">
            <h3 className="text-sm font-medium text-indigo-700">Research-led development</h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              In partnership with AUT, we ran multi-sport projects with hundreds of participants,
              collecting pre- and post-concussion data to develop a robust dual-task gait
              assessment—then built an intuitive dashboard so results are clear at a glance.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Our goal: give healthcare practitioners objective, defensible information to guide
              recovery decisions across sport, work, and home. :contentReference[oaicite:0]{index=0}
            </p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Who we are</h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Barrie */}
          <article className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="text-lg font-semibold">Barrie Jennings</h3>
            <p className="mt-2 text-sm text-slate-600">
              Strength & Conditioning coach with 25+ years across elite and youth pathways. Barrie
              designs and implements programs for international men’s and women’s teams, and is a
              lifelong learner focused on concussion/mTBI, ACLs, speed & agility, and the link
              between breathing, structure, and movement. :contentReference[oaicite:1]{index=1}
            </p>
          </article>

          {/* Paul */}
          <article className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="text-lg font-semibold">Paul MacKinnon</h3>
            <p className="mt-2 text-sm text-slate-600">
              25 years in professional and high-performance sport (NZ & overseas) leading strategy
              in rugby, hockey, and cricket. Since 2021 Paul’s focus is connecting high-end sport
              technology with community sport, health, and well-being. :contentReference[oaicite:2]{index=2}
            </p>
          </article>
        </div>

        {/* Link to solution */}
        <div className="mt-6">
          <Link
            href="/our-solution"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Explore Our Solution
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold tracking-tight">Ready to make return-to-activity safer?</h3>
        <p className="mt-2 text-slate-700">
          Book a Good2Go assessment or learn how our clinical decision support fits your workflow.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <Link
            href="https://book.good2go-rth.com"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Book a Test
          </Link>
          <Link
            href="/our-solution"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Our Solution
          </Link>
        </div>
      </section>
    </main>
  );
}
