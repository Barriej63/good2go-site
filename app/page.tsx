
export default function Page() {
  return (
    <section className="hero">
      <h1>Concussion Testing That’s Good-to-Go</h1>
      <p>
        Book a baseline or post-concussion assessment in minutes. Our streamlined process helps
        athletes, parents, and coaches make better return-to-head decisions with confidence.
      </p>
      <p style={{ marginTop: 16 }}>
        <a href="https://book.good2go-rth.com/book" className="cta primary">Book Now</a>
        {' '}
        <a href="/how-it-works" className="cta">How it works</a>
      </p>
      <div className="grid">
        <div className="card">
          <h3>Evidence-informed</h3>
          <p>Built from best-practice protocols with continuous improvement.</p>
        </div>
        <div className="card">
          <h3>Fast booking</h3>
          <p>Choose a region and time slot — instant confirmation is sent to your email.</p>
        </div>
        <div className="card">
          <h3>Easy to understand</h3>
          <p>Clear results and next steps for athletes, parents, and providers.</p>
        </div>
      </div>
    </section>
  );
}
