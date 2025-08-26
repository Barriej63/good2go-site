export default function Home(){
  return (<section className="hero">
    <h1 style={{fontSize:42, margin:0}}>Concussion Monitoring that’s easy to run and easy to trust.</h1>
    <p className="small">Science-backed assessments, clear results, and a booking flow that just works.</p>
    <p><a className="btn" href="https://book.good2go-rth.com/book">Book a Test</a></p>
    <div className="grid">
      <div className="card"><h3>Why Good2Go?</h3><p>Objective, repeatable assessments with fast turnaround.</p></div>
      <div className="card"><h3>What’s Included</h3><p>Baseline + post-injury testing, easy scheduling, and clinician-ready output.</p></div>
      <div className="card"><h3>How It Works</h3><p>Book → Assess → Automated analysis → Results to your dashboard.</p></div>
    </div></section>);
}