export default function Page() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold">How It Works</h1>
      <div className="mt-4 text-lg text-zinc-700 max-w-prose">
        <p className="prose-muted mt-2">1) Assess — run the dual‑task walking test.</p>
        <p className="prose-muted mt-2">2) Capture — sensors record gait/balance metrics.</p>
        <p className="prose-muted mt-2">3) Score — algorithm computes objective scores.</p>
        <p className="prose-muted mt-2">4) Decide — combine trends with clinical judgment.</p>
      </div>
      <div className="page-actions">
        <a href="https://book.good2go-rth.com/book" className="inline-flex items-center rounded-xl border border-g2g-primary bg-g2g-primary px-4 py-2 text-white text-sm shadow-soft hover:opacity-95">Book a Test</a>
      </div>
    </section>
  );
}