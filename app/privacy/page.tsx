export default function Page() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold">Privacy</h1>
      <div className="mt-4 text-lg text-zinc-700 max-w-prose">
        <p className="prose-muted mt-2">This site stores minimal browsing data. Bookings and payments occur on our booking app.</p>
        <p className="prose-muted mt-2">We do not sell personal data. Contact us to request or delete your data.</p>
      </div>
      <div className="page-actions">
        <a href="https://book.good2go-rth.com/book" className="inline-flex items-center rounded-xl border border-g2g-primary bg-g2g-primary px-4 py-2 text-white text-sm shadow-soft hover:opacity-95">Book a Test</a>
      </div>
    </section>
  );
}