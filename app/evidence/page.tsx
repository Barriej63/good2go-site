import Header from '@/components/Header';

export default function EvidencePage() {
  return (
    <main>
      <Header />
      <section className="p-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Scientific Foundation</h1>
        <iframe src="https://good-2-go-concussion-tracker-movementmender.replit.app/?auth=NCKV7LG2"
                className="w-full h-96 border rounded" />
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Key Research Findings</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Enhanced Sensitivity: Dual-task conditions detect concussion-related deficits that persist longer than single-task assessments.</li>
            <li>Gender-Based Differences: Study of 94 collegiate athletes established normal values and documented sex-based recovery differences.</li>
            <li>Clinical Validation: Multiple studies show dual-task gait analysis as a sensitive and specific marker of functional impairment.</li>
            <li>Predictive Value: Dual-task gait costs are associated with subsequent sport-related injury risk.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
