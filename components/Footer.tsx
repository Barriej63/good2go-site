import Image from 'next/image';
export default function Footer(){
  return (
    <footer className="border-t border-zinc-200 bg-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-2 items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo-black.svg" alt="Good2Go" width={28} height={28} />
          <div className="text-sm text-zinc-600">© {new Date().getFullYear()} Good2Go — Return‑to‑Head</div>
        </div>
        <div className="text-sm text-zinc-600 md:text-right">
          <a href="/privacy" className="hover:text-black">Privacy</a>
          <span className="mx-2">•</span>
          <a href="/consent" className="hover:text-black">Consent</a>
        </div>
      </div>
    </footer>
  );
}
