// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';      // your existing nav
import Footer from '@/components/Footer';      // if you have one

export const metadata: Metadata = {
  title: 'Good2Go',
  description: 'Objective concussion recovery monitoring',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-slate-900 bg-white">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
