export default function BrandBanner() {
  return (
    <div className="mb-10 flex items-center justify-center rounded-2xl bg-gradient-to-r from-slate-900 to-blue-800 p-6 shadow-md">
      <img
        src="/logo.svg"   // make sure your file is in /public
        alt="Good2Go Logo"
        className="h-12 w-auto sm:h-16"
      />
      <span className="ml-4 text-lg font-semibold text-white tracking-wide">
        Evidence-Based Concussion Recovery
      </span>
    </div>
  );
}
