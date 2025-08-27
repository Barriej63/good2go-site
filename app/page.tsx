'use client';
import Header from '../components/Header';
import OutcomesChart from '../components/OutcomesChart';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="mx-auto max-w-6xl p-6">
        <h1 className="text-2xl font-semibold mb-4">Good2Go Starter</h1>
        <p className="mb-6">If you can see this page and the chart below, the build succeeded.</p>
        <OutcomesChart />
      </section>
    </main>
  );
}
