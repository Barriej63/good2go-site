// app/our-why/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Why — Good2Go",
  description:
    "Why we built Good2Go: safer concussion recovery through objective monitoring, practical science, and real-world experience.",
};

export default function OurWhyPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      {/* Intro / Hero */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Our Why</h1>
            <p className="mt-3 text-slate-700 max-w-3xl">
              We’ve spent years in high-performance sport, construction, and elder care—
              witnessing the toll of concussion first-hand. The biggest question we kept
              hearing was: <span className="font-semibold">“When can I return to activity?”</span> 
              That question drives everything we do.
            </p>
          </div>

          {/* Top CTAs */}
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
      </section>

      {/* Mission */}
      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">The Mission</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We set out to build a simple, objective way to guide a safe return to health after
            concussion—one that complements SCAT6/SCOAT6 and King-Devick eye-movement testing,
            while translating complex data into clear dashboards. Our work includes multi-year
            research with AUT across multiple sports and hundreds of participants, collecting
            pre- and post-concussion data to develop a robust Dual-Task Gait assessment and an
            easy-to-follow results interface. :contentReference[oaicite:0]{index=0}
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            The goal: give healthcare practitioners objective, defensible information to guide
            decisions for people recovering from sport, workplace, or home-related concussion. :contentReference[oaicite:1]{index=1}
          </p>
        </div>

        {/* Quick links card */}
        <aside className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-6">
          <div className="text-xs font-medium text-indigo-700">Explore</div>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700">
            <li>
              <Link href="/our-solution" className="font-medium text-slate-900 hover:underline">
                Our Solution
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:underline">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="/scientific-foundation" className="hover:underline">
                Scientific Foundation
              </Link>
            </li>
          </ul>
          <div className="mt-5">
            <Link
              href="https://book.good2go-rth.com"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700"
            >
              Book a Test
            </Link>
          </div>
        </aside>
      </section>

      {/* Who we are */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Who We Are</h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Barrie Jennings</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Barrie is a highly qualified Strength & Conditioning Coach with 25+ years’ experience
              across elite and youth sport, working with international teams and athletes. His research
              interests include concussion/mTBI, ACLs, speed & agility, and how breathing, structure,
              and movement interact. :contentReference[oaicite:2]{index=2}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Paul MacKinnon</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Paul has 25 years in professional and high-performance sport in New Zealand and abroad,
              leading HP strategies in rugby, hockey, and cricket. Since 2021 he’s focused on bringing
              the best of elite technology to community sport, health, and well-being. :contentReference[oaicite:3]{index=3}
            </p>
          </div>
        </div>
      </section>

      {/* Close/CTA */}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold tracking-tight">Ready to move from uncertainty to clarity?</h3>
        <p className="mt-2 text-slate-700">
          See how objective monitoring, personalised recovery, and clinical decision support come together.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <Link
            href="/our-solution"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Explore Our Solution
          </Link>
          <Link
            href="https://book.good2go-rth.com"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Book a Test
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            Home
          </Link>
        </div>
      </section>
    </main>
  );
}
