import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Good2Go — Evidence‑Informed Concussion Monitoring',
  description: 'Objective dual‑task gait assessment and decision support to guide safe return‑to‑activity.',
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className="antialiased text-zinc-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
