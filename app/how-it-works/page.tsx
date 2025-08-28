export const metadata = {
  title: "How it Works | Good2Go",
  description: "Overview of Good2Go dual-task gait assessment workflow."
};

export default function HowItWorksPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it Works</h1>
      <p className="mt-3 text-slate-600 leading-relaxed">
        This page outlines the Good2Go workflow. You can expand this section with video, screenshots,
        and detailed protocol steps at any time.
      </p>
      <ol className="mt-6 space-y-4 list-decimal pl-6">
        <li>Dual‑Task Assessment</li>
        <li>Data Collection</li>
        <li>Algorithm Analysis</li>
        <li>Clinical Dashboard</li>
      </ol>
    </main>
  );
}
