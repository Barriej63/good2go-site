'use client';
import Header from '@/components/Header';
import OutcomesChart from '@/components/OutcomesChart';
import { Sparkles } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto pt-28 px-4">
        <section className="bg-white rounded-3xl border p-10 grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">Objective Concussion Recovery Monitoring</h1>
            <p className="mt-4 text-slate-600">Evidence-based dual-task gait analysis to support safe return-to-play decisions.</p>
            <a href="https://book.good2go-rth.com" className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg">
              Book an Assessment <Sparkles className="h-4 w-4" />
            </a>
          </div>
          <img src="https://images.unsplash.com/photo-1516670428252-df97bba108d1?w=1200&q=80&auto=format&fit=crop" alt="Clinician reviewing test" className="rounded-xl border object-cover"/>
        </section>

        <section id="about" className="mt-16">
          <h2 className="text-2xl font-semibold">The Global Concussion Crisis</h2>
          <p className="mt-2 text-slate-600">70 million concussions occur globally each year, with major economic and health impact.</p>
        </section>

        <section id="features" className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border">Balance Score</div>
          <div className="p-6 bg-white rounded-xl border">Gait Speed Score</div>
          <div className="p-6 bg-white rounded-xl border">Good2Go Score</div>
        </section>

        <section id="how-it-works" className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="p-4 border rounded-lg">1. Dual-task Assessment</div>
          <div className="p-4 border rounded-lg">2. Data Collection</div>
          <div className="p-4 border rounded-lg">3. Algorithm Analysis</div>
          <div className="p-4 border rounded-lg">4. Clinical Dashboard</div>
        </section>

        <section id="evidence" className="mt-16">
          <h2 className="text-2xl font-semibold">Scientific Foundation</h2>
          <div className="h-64 border rounded-xl p-4 bg-white"><OutcomesChart /></div>
        </section>

        <section id="contact" className="mt-16 grid md:grid-cols-2 gap-6">
          <form action="/api/contact" method="POST" className="bg-white border rounded-xl p-6 flex flex-col gap-4">
            <input type="text" name="name" placeholder="Your Name" className="border rounded p-2"/>
            <input type="email" name="email" placeholder="Your Email" className="border rounded p-2"/>
            <textarea name="message" placeholder="Message" className="border rounded p-2" rows={4}></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
          </form>
          <img src="https://images.unsplash.com/photo-1516326572930-6afd2ddd6a50?w=1200&q=80&auto=format&fit=crop" alt="Clinic" className="rounded-xl object-cover"/>
        </section>
      </main>
    </>
  );
}
