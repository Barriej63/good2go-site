import Header from '@/components/Header';

export default function SolutionPage() {
  return (
    <main>
      <Header />
      <section className="p-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Our Solution</h1>
        <p>Monitor patients with Good2Go's Dual-task Gait assessment.</p>
        <ul className="list-disc ml-6 mt-4 text-gray-700">
          <li>It provides healthcare practitioners with objective, defensible data for making safe return-to-activity decisions.</li>
          <li>It provides the patient with key information thats easy to understand and shows where they are at with their return to health journey.</li>
          <li>Improves a patients confidence in the team around them and that they are on the right path.</li>
        </ul>
      </section>
    </main>
  )
}
