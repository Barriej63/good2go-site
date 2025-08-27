export const metadata = { title: 'Features — Good2Go' };

const items: [string, string][] = [
  ['Balance Score', 'Objective stability measure under dual‑task load.'],
  ['Gait Speed Score', 'Changes in speed and cadence captured precisely.'],
  ['Good2Go Score', 'Combined measure to simplify progress tracking.'],
  ['Personalised Thresholds', 'Gender‑aware, baseline‑aware target ranges.'],
  ['Progress Dashboard', 'Visual trends and flags to support decisions.'],
  ['Research‑Validated', 'Grounded in peer‑reviewed literature.'],
];

export default function Page() {
  return (
    <main style={{fontFamily:'system-ui, Arial, sans-serif'}}>
      <section style={{maxWidth:960, margin:'32px auto', padding:'0 16px'}}>
        <h1 style={{fontSize:28, fontWeight:700, marginBottom:12}}>Features</h1>
        <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))'}}>
          {items.map(([t, d]) => (
            <div key={t} style={{border:'1px solid #e5e7eb', borderRadius:16, padding:16}}>
              <div style={{fontWeight:600, marginBottom:6}}>{t}</div>
              <div style={{color:'#6b7280', fontSize:14}}>{d}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
