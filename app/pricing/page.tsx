
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PricingPage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="card p-6 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="h2">Pricing</h1>
              <p className="mt-2 prose-muted">Simple options for baselines and post‑concussion monitoring. Team and clinic packages available.</p>
            </div>
            <a href="https://book.good2go-rth.com" className="btn btn-dark">Book now</a>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold">Baseline Test</div>
                <span className="badge"> $65.00 </span>
              </div>
              <p className="mt-2 small">Records healthy brain function to create your personal comparison point.</p>
              <a href="https://book.good2go-rth.com" className="btn btn-primary mt-5 w-full">Schedule Baseline</a>
            </div>
            <div className="card p-6 border-2 border-blue-600 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold">Post‑Concussion Test Block</div>
                <span className="badge text-blue-700">$199</span>
              </div>
              <p className="mt-2 small">Structured follow‑ups to monitor recovery trends — with or without a baseline.</p>
              <a href="https://book.good2go-rth.com" className="btn btn-dark mt-5 w-full">Start Monitoring</a>
            </div>
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold">Enterprise</div>
                <span className="badge">Contact us</span>
              </div>
              <p className="mt-2 small">Team/clinic bulk baselines with centralized monitoring and support.</p>
              <a href="https://good2go-rth.com/pricing" className="btn btn-primary mt-5 w-full">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
