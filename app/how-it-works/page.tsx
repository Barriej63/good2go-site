export const metadata = { title: 'How it Works — Good2Go' };

export default function Page() {
  return (
    <main style={{fontFamily:'system-ui, Arial, sans-serif'}}>
      <section style={{maxWidth:960, margin:'32px auto', padding:'0 16px'}}>
        <h1 style={{fontSize:28, fontWeight:700, marginBottom:12}}>How it Works</h1>
        <ol style={{marginLeft:18, lineHeight:1.7}}>
          <li><strong>Book online.</strong> Pick your region and time slot.</li>
          <li><strong>Baseline (optional but recommended).</strong> Establish your personal normal.</li>
          <li><strong>Post‑injury checks.</strong> 1‑minute dual‑task walk with turns; app measures gait metrics.</li>
          <li><strong>Progress view.</strong> Dashboard trends show normalisation vs baseline or cohort ranges.</li>
          <li><strong>Share with your clinician.</strong> Export or invite read‑only access when needed.</li>
        </ol>
      </section>
    </main>
  );
}
