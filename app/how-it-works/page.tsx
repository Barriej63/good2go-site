export const metadata = {
  title: "How it Works — Good2Go",
  description:
    "Understand how Good2Go’s dual-task gait assessment and dashboards support safe return-to-activity decisions.",
};

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it Works</h1>
      <p className="mt-4 text-slate-600">
        This page explains our workflow at a high level. We'll add deeper content and visuals here shortly.
      </p>

      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li className="rounded-2xl border border-slate-200 bg-blue-50 p-6">
          <div className="text-base font-semibold">1. Dual‑Task Assessment</div>
          <p className="mt-2 text-sm text-slate-600">
            Patient performs walking tasks while completing cognitive challenges.
          </p>
        </li>
        <li className="rounded-2xl border border-slate-200 bg-emerald-50 p-6">
          <div className="text-base font-semibold">2. Data Collection</div>
          <p className="mt-2 text-sm text-slate-600">
            Sensors capture gait metrics and dynamic balance data.
          </p>
        </li>
        <li className="rounded-2xl border border-slate-200 bg-amber-50 p-6">
          <div className="text-base font-semibold">3. Algorithm Analysis</div>
          <p className="mt-2 text-sm text-slate-600">
            Proprietary algorithms compute Balance Score, Gait Speed Score, and the overall Good2Go Score.
          </p>
        </li>
        <li className="rounded-2xl border border-slate-200 bg-violet-50 p-6">
          <div className="text-base font-semibold">4. Clinical Dashboard</div>
          <p className="text-sm text-slate-600 mt-2">
            Providers and patients review trends for decision support.
          </p>
        </li>
      </ol>

      <div className="mt-8">
        <a
          href="https://book.good2go-rth.com"
          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-3 ring-1 ring-inset ring-blue-600/10"
        >
          Book an Assessment
        </a>
      </div>
    </main>
  );
}
