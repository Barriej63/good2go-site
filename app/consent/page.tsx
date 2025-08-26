
export default function Page() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold">Consent</h1>
      <div className="mt-4 text-lg text-zinc-700 max-w-prose">
        <p className=\"prose-muted mt-2\">Informed consent is required for all testing. Full details are presented during booking.</p>\n<p className=\"prose-muted mt-2\">Participants should follow medical advice from qualified professionals.</p>
      </div>
      <div className="page-actions">
        <a href="https://book.good2go-rth.com/book" className="inline-flex items-center rounded-xl border border-g2g-primary bg-g2g-primary px-4 py-2 text-white text-sm shadow-soft hover:opacity-95">Book a Test</a>
      </div>
    </section>
  );
}
