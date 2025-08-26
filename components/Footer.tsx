export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm flex flex-wrap items-center justify-between gap-3 text-zinc-600">
        <div>© {new Date().getFullYear()} Good2Go — Return-to-Head</div>
        <nav className="flex gap-4">
          <a href="https://book.good2go-rth.com/book" className="hover:text-black">Book</a>
          <a href="/privacy" className="hover:text-black">Privacy</a>
          <a href="/consent" className="hover:text-black">Consent</a>
        </nav>
      </div>
    </footer>
  );
}
