
export const metadata: Metadata = {
  title: 'Scientific Foundation — Good2Go',
  description: 'Peer-reviewed evidence and dual-task gait analysis supporting Good2Go’s concussion recovery monitoring.'
}

export default function EvidencePage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <h1 className="h2">Scientific Foundation</h1>
            <div className="mt-6">
              <div className="relative rounded-xl border border-slate-200 p-4">
                <div className="h-72">
                  <iframe
                    title="Good2Go Dashboard"
                    className="w-full h-full rounded"
                    src="https://good-2-go-concussion-tracker-movementmender.replit.app/?auth=NCKV7LG2"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-sm font-medium">Key Research Findings</div>
              <ul className="mt-2 grid gap-3 text-sm text-slate-700">
                <li>Enhanced Sensitivity: Dual-task conditions detect concussion-related deficits that persist longer than single-task assessments.</li>
                <li>Gender-Based Differences: Study of 94 collegiate athletes established normal values and documented gender-based recovery differences.</li>
                <li>Clinical Validation: Multiple studies show dual-task gait analysis as a sensitive and specific marker of functional impairment.</li>
                <li>Predictive Value: Dual-task gait costs are associated with subsequent sport-related injury risk.</li>
              </ul>
              <div className="mt-6 text-sm font-medium">Quality Assurance Standards</div>
              <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                <li>Minimum 3 peer-reviewed sources per methodology; thresholds validated against clinical research.</li>
                <li>Statistical significance maintained; individual assessments prioritized over population norms.</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <img className="h-64 w-full object-cover sm:h-72"
                   src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80&auto=format&fit=crop"
                   alt="Clinical research and assessment" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
