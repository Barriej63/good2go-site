export const metadata = { title: 'About — Good2Go' };

export default function Page() {
  return (
    <main style={{fontFamily:'system-ui, Arial, sans-serif'}}>
      <section style={{maxWidth:960, margin:'32px auto', padding:'0 16px'}}>
        <h1 style={{fontSize:28, fontWeight:700, marginBottom:12}}>About Good2Go</h1>
        <p style={{marginBottom:12}}>
          Good2Go is a concussion monitoring and return‑to‑healthy‑function service. We combine quick
          baseline testing, smartphone‑based gait metrics, and simple progress dashboards so patients,
          teams and clinics can track recovery with objective signals.
        </p>
        <ul style={{marginLeft:18, lineHeight:1.7}}>
          <li><strong>Baseline & Follow‑up:</strong> Fast assessments that create a personalised reference.</li>
          <li><strong>Gait Intelligence:</strong> Speed, cadence, double‑support %, and variability trends.</li>
          <li><strong>Dual‑Task:</strong> Cognitive + walking testing to stress real‑world function.</li>
          <li><strong>Booking & Payments:</strong> Online booking, email confirmations, easy re‑scheduling.</li>
        </ul>
      </section>
    </main>
  );
}
