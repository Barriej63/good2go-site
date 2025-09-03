import Image from "next/image";

export default function BrandBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-lg ring-1 ring-white/10 bg-white/5 flex items-center justify-center">
          {/* Make sure this file exists in /public */}
          <Image
            src="/High-Resolution-Color-Logo-on-Transparent-Background.svg"
            alt="Good2Go"
            width={64}
            height={64}
            priority
          />
        </div>
        <div>
          <p className="text-white text-xl sm:text-2xl font-semibold leading-tight">
            Good2Go
          </p>
          <p className="text-indigo-200/90 text-sm">Concussion Recovery</p>
        </div>
      </div>

      {/* decorative glow */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_0%_0%,black,transparent)] bg-[radial-gradient(600px_300px_at_0%_0%,rgba(99,102,241,.18),transparent)]" />
    </div>
  );
}

