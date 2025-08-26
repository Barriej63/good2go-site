import Image from 'next/image';

export default function Page() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero */}
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 to-white" />
        <div className="mx-auto max-w-6xl px-4 py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl/tight sm:text-5xl font-semibold">
                Concussion testing that’s <span className="text-g2g-primary">Good‑to‑Go</span>
              </h1>
              <p className="mt-4 text-lg text-zinc-700 max-w-prose">
                Book a baseline or post‑concussion assessment in minutes. Clear results and next steps for athletes,
                parents, and coaches — without touching your booking/payments stack.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://book.good2go-rth.com/book" className="inline-flex items-center rounded-xl border border-g2g-primary bg-g2g-primary px-5 py-3 text-white shadow-soft hover:opacity-95">Book Now</a>
                <a href="/how-it-works" className="inline-flex items-center rounded-xl border border-zinc-300 px-5 py-3 text-zinc-800 hover:bg-zinc-50">How it works</a>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <div className="font-medium">Evidence‑informed</div>
                  <div className="text-sm text-zinc-600">Best‑practice protocols with continuous improvement.</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <div className="font-medium">Fast booking</div>
                  <div className="text-sm text-zinc-600">Pick a region and time — instant confirmation.</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 p-4">
                  <div className="font-medium">Easy to understand</div>
                  <div className="text-sm text-zinc-600">Clear results and next steps for everyone.</div>
                </div>
              </div>
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
    </section>
  );
}
