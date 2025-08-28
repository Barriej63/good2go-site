
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/60 bg-white">
      <div className="container py-8 text-sm text-slate-600 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Good2Go</span>
        <span className="font-medium text-slate-800">Recover Smart. Return Strong.</span>
      </div>
    </footer>
  )
}
