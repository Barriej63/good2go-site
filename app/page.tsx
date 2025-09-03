'use client';

import Header from '@/components/Header'; // keep if you have it
import Image from 'next/image';
import Link from 'next/link';

export default function Page(): JSX.Element {
  // ⬇︎ START DIAGNOSTIC RETURN (safe JSX)
  return (
    <>
      {/* render header above or inside main, either is fine */}
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900">
        <section className="py-8">
          <h1 className="text-2xl font-semibold">Boot check</h1>
          <p className="text-slate-600 mt-2">
            If you can see this, the JSX parser is happy and the prior error was a stray character.
          </p>
        </section>
      </main>
    </>
  );
}


