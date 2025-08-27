export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/60 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Good2Go. All rights reserved.</p>
        <div className="space-x-4">
          <a className="hover:text-slate-900" href="/privacy">Privacy</a>
          <a className="hover:text-slate-900" href="https://book.good2go-rth.com/book">Book</a>
        </div>
      </div>
    </footer>
  );
}
