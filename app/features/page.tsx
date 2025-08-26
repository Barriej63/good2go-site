
export default function Page(){
  const items = [
    ['Balance Score','Objective stability measure under dual‑task load.'],
    ['Gait Speed Score','Changes in speed and cadence captured precisely.'],
    ['Good2Go Score','Combined measure to simplify progress tracking.'],
    ['Personalised thresholds','Sex‑aware, baseline‑aware target ranges.'],
    ['Progress dashboard','Visual trends and flags to support decisions.'],
    ['Research‑validated','Grounded in peer‑reviewed literature.'],
  ];
  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold">Features</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map(([t,d]) => (
          <div key={t} className="rounded-2xl border border-zinc-200 p-5">
            <div className="font-medium">{t}</div>
            <div className="prose-muted text-sm mt-1">{d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
