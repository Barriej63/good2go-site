'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string,string> = {};
    formData.forEach((v,k)=> payload[k] = String(v));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const j = await res.json();
      setStatus(j.ok ? 'sent' : 'error');
      if (j.ok) form.reset();
    } catch { setStatus('error'); }
  }

  return (
    <form onSubmit={onSubmit} action="/api/contact" method="POST" className="mt-6 grid gap-4">
      <input type="hidden" name="context" value="good2go" />
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">Full name</label>
          <input name="name" required placeholder="Jane Doe" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-700">Email</label>
          <input name="email" type="email" required placeholder="jane@company.com" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm" />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-700">Company (optional)</label>
        <input name="company" placeholder="Company Inc." className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm" />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-700">Message</label>
        <textarea name="message" required rows={5} placeholder="Tell us about your needs…" className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm"></textarea>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">We’ll reply to your email.</div>
        <button disabled={status==='sending'} type="submit" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60">
          {status==='sending' ? 'Sending…' : status==='sent' ? 'Sent ✓' : 'Send'}
        </button>
      </div>
      {status==='error' ? <p className="text-sm text-rose-600">Something went wrong. Please try again.</p> : null}
      {status==='sent' ? <p className="text-sm text-emerald-600">Thanks! We’ll be in touch shortly.</p> : null}
    </form>
  );
}
