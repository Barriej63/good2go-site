export default function Page() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold">About Good2Go</h1>
      <div className="mt-4 text-lg text-zinc-700 max-w-prose">
        <p className="prose-muted mt-2">Our mission is safer, faster return‑to‑activity decisions through objective, evidence‑informed monitoring.</p>
        <p className="prose-muted mt-2">We focus on dual‑task gait and clear scoring so clinicians can communicate risk and progress with confidence.</p>
      </div>
      <div className="page-actions">
        <a href="https://book.good2go-rth.com/book" className="inline-flex items-center rounded-xl border border-g2g-primary bg-g2g-primary px-4 py-2 text-white text-sm shadow-soft hover:opacity-95">Book a Test</a>
      </div>
    </section>
  );
}