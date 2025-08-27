export const metadata = { title: 'Supporting Evidence — Good2Go' };

export default function Page() {
  return (
    <main style={{fontFamily:'system-ui, Arial, sans-serif'}}>
      <section style={{maxWidth:960, margin:'32px auto', padding:'0 16px'}}>
        <h1 style={{fontSize:28, fontWeight:700, marginBottom:12}}>Supporting Evidence</h1>
        <p style={{marginBottom:12}}>
          Good2Go focuses on gait‑based recovery markers that are well‑described in the literature.
          In concussion recovery, <em>gait speed</em> and <em>cadence</em> tend to improve over time,
          while <em>double‑support %</em> and certain variability measures tend to reduce toward normal ranges.
        </p>
        <ul style={{marginLeft:18, lineHeight:1.7}}>
          <li>Dual‑task walking can reveal subtle deficits not seen in single‑task walking.</li>
          <li>Trends, not single values, are typically the best signals of normalisation.</li>
          <li>Baseline testing increases confidence in individual decision‑making.</li>
        </ul>
        <p style={{marginTop:12, color:'#6b7280', fontSize:14}}>
          Note: This page summarises themes from peer‑reviewed research for patient‑friendly reading.
          Your clinician should interpret results alongside clinical context.
        </p>
      </section>
    </main>
  );
}
