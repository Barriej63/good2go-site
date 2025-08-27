import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Good2Go — Objective Concussion Recovery Monitoring',
  description:
    'Evidence-based concussion recovery monitoring using dual-task gait analysis and personalized protocols.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900 antialiased selection:bg-blue-600/10 selection:text-blue-900`}>
        <Header />
        <main className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
