
import Image from 'next/image';
import Link from 'next/link';

export default function Page(){
  return (
    <section className="relative overflow-hidden">
      {/* Hero */}
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 to-white" />
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl/tight sm:text-5xl font-semibold">
                Objective concussion recovery monitoring — that’s <span className="text-g2g-primary">Good‑to‑Go</span>
              </h1>
              <p className="mt-4 text-lg text-zinc-700 max-w-prose">
                Dual‑task gait analysis and evidence‑based scoring to support safe return‑to‑activity decisions.
                Built for clinicians and coaches. Simple to use, easy to explain.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://book.good2go-rth.com/book" className="inline-flex items-center rounded-xl border border-g2g-primary bg-g2g-primary px-5 py-3 text-white shadow-soft hover:opacity-95">Book Now</a>
                <Link href="/contact" className="inline-flex items-center rounded-xl border border-zinc-300 px-5 py-3 text-zinc-800 hover:bg-zinc-50">Request Demo</Link>
              </div>
              {/* Stats */}
              <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['70M+ concussions/yr','Under‑reporting ~50%','Multi‑modal > single‑test','Data‑backed RTP'].map((item,idx)=>(
                  <div key={idx} className="rounded-2xl border border-zinc-200 p-4 text-sm text-zinc-700">{item}</div>
                ))}
              </dl>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="aspect-[4/3] w-full rounded-3xl border border-zinc-200 bg-white shadow-soft grid place-items-center">
                <Image src="/hero-illustration.svg" alt="Good2Go illustration" width={480} height={360} />
              </div>
              <div className="pointer-events-none absolute inset-x-10 -top-10 -z-10 h-40 rounded-full bg-g2g-primary/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Pain points */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">The problem</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            ['Subjective reporting','Symptoms alone miss lingering deficits and vary by athlete.'],
            ['Weak baselines','Without comparable pre‑injury data, progress is hard to judge.'],
            ['Generic protocols','One‑size‑fits‑all doesn’t reflect sex, age, or sport.'],
            ['RTP uncertainty','Clinicians need defensible, objective support.']
          ].map(([title,desc])=> (
            <div key={title} className="rounded-2xl border border-zinc-200 p-5">
              <div className="font-medium">{title}</div>
              <div className="prose-muted text-sm mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Good2Go solution</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            ['Dual‑task gait','Walking while performing a cognitive task reveals deficits missed by single‑task tests.'],
            ['Personalised thresholds','Sex‑aware, baseline‑aware scoring improves relevance.'],
            ['Three objective scores','Balance, Gait Speed, and a combined Good2Go Score.'],
            ['Decision support','Clear, visual trends help guide safe return‑to‑activity.']
          ].map(([title,desc])=> (
            <div key={title} className="rounded-2xl border border-zinc-200 p-5">
              <div className="font-medium">{title}</div>
              <div className="prose-muted text-sm mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <ol className="mt-4 grid gap-4 md:grid-cols-4 text-sm">
          {[
            ['Assess','Run a short dual‑task walking test.'],
            ['Capture','Sensors record gait and balance data.'],
            ['Score','Algorithm computes objective scores.'],
            ['Decide','Use trends + clinical judgment to clear RTP.']
          ].map(([t,d],i)=> (
            <li key={t} className="rounded-2xl border border-zinc-200 p-5">
              <div className="text-zinc-500 mb-2">Step {i+1}</div>
              <div className="font-medium">{t}</div>
              <div className="prose-muted mt-1">{d}</div>
            </li>
          ))}
        </ol>
      </div>

      {/* Research + disclaimer */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="font-semibold">Research foundation</h3>
            <ul className="list-disc pl-5 mt-3 text-sm prose-muted space-y-2">
              <li>Dual‑task gait is more sensitive than single‑task for detecting residual impairment.</li>
              <li>Sex‑based differences and individual baselines matter for accurate progression.</li>
              <li>Multi‑modal assessment supports safer return‑to‑play decisions.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="font-semibold">Disclaimer</h3>
            <p className="text-sm prose-muted mt-3">
              Good2Go is an assessment and decision‑support tool. It does not replace clinical judgment. 
              All return‑to‑play/activity decisions must be made by qualified healthcare professionals.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <a href="https://book.good2go-rth.com/book" className="inline-flex items-center rounded-xl border border-g2g-primary bg-g2g-primary px-5 py-3 text-white shadow-soft hover:opacity-95">Book a Test</a>
        </div>
      </div>
    </section>
  );
}
