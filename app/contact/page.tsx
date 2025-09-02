'use client';

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-900">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">Contact Us</h1>
      <p className="mb-8 text-slate-600">
        Have questions about Good2Go or want to request a demo? Fill out the form
        below and our team will respond within one business day.
      </p>

      <form
        action="/api/contact"
        method="POST"
        className="grid gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
      >
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Doe"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@company.com"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Company (optional)</label>
          <input
            type="text"
            name="company"
            placeholder="Company Inc."
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us about your needs…"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-500">
            By submitting, you agree to be contacted about your request.
          </p>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </form>
    </main>
  );
}
