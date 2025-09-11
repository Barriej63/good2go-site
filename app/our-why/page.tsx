// app/our-why/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Why — Good2Go",
  description:
    "Learn why Good2Go exists: years of experience in sport, construction, and elder care, and a mission to create safe, evidence-based concussion recovery tools.",
};

export default function OurWhyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      {/* Hero */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Our Why
        </h1>
        <p className="mt-4 text-slate-700 leading-relaxed">
          We have spent many years coaching and training athletes in a variety
          of sports including rugby, involved in the construction industry and
          have worked in the retirement age space. We have seen the effect of
          concussions and falls on athletes, workers and the elderly.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          The biggest dilemma and question has been{" "}
          <span className="font-medium">
            “When can I return to activity?”
          </span>
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          We have been on a mission in recent years to develop a simple method
          to help people return to health safely.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          We have undertaken research projects in partnership with AUT,
          involving multiple sports, hundreds of participants, over the last 4
          years. During this time we have developed the Good2Go concussion
          monitoring system alongside the traditional Sports Concussion
          Assessment Tool (SCAT6 / SCOAT6), and the Rapid eye movement test
          using the King-Devick test. We collected pre and post-concussion data
          to help develop our Dual-Task Gait assessment and then spent a
          considerable amount of time to create the dashboard so that results
          were easy to follow and understand.
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          The primary objective was to have a <strong>solution to help healthcare
          practitioners ensure a safe return to health</strong> for those who have
          suffered a concussion in sport, work or home.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Who are We
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium">Barrie Jennings</h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              Barrie Jennings is a highly qualified and experienced Strength &
              Conditioning Coach with over twenty five years in the industry.
              He has designed and implemented strength and conditioning
              programs across multiple sports at the elite and youth development
              levels, and continues to work with international female and male
              athletes and teams from a variety of backgrounds with great
              results.
            </p>
            <p className="mt-2 text-slate-700 leading-relaxed">
              Barrie is a lifelong learner with a huge interest in research with
              concussion/mtbi, ACL’s, speed & agility, and the relationship
              between breathing, physical structure, and movement.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Paul MacKinnon</h3>
            <p className="mt-2 text-slate-700 leading-relaxed">
              Paul MacKinnon has spent the past 25 years in professional and
              high-performance sport, both here in New Zealand and overseas.
              Past responsibilities have included development, leadership and
              implementation of high-performance strategies in rugby, hockey and
              cricket.
            </p>
            <p className="mt-2 text-slate-700 leading-relaxed">
              Since 2021 Paul has focused on the wider world of community sport,
              health and well-being, connecting the benefits of leading
              technology from high-end sport to the community.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 text-center">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://book.good2go-rth.com"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            Book a Test
          </Link>
          <Link
            href="/our-solution"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Our Solution
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-200"
          >
            Home
          </Link>
        </div>
      </section>
    </main>
  );
}
