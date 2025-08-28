'use client';
import Header from '@/components/Header';
import { CalendarCheck } from 'lucide-react';

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto pt-28 px-4">
        <h1 className="text-4xl font-bold mb-8">Pricing</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 bg-white">
            <h2 className="font-semibold">Baseline Test</h2>
            <p className="text-slate-600 mt-2">$65.00</p>
            <a href="https://book.good2go-rth.com" className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
              Book <CalendarCheck className="h-4 w-4"/>
            </a>
          </div>
          <div className="border-2 border-blue-600 rounded-xl p-6 bg-white shadow">
            <h2 className="font-semibold">Post-Concussion Block</h2>
            <p className="text-slate-600 mt-2">$199</p>
            <a href="https://book.good2go-rth.com" className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
              Book <CalendarCheck className="h-4 w-4"/>
            </a>
          </div>
          <div className="border rounded-xl p-6 bg-white">
            <h2 className="font-semibold">Enterprise</h2>
            <p className="text-slate-600 mt-2">Contact us</p>
            <a href="https://book.good2go-rth.com" className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
              Contact Sales <CalendarCheck className="h-4 w-4"/>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
