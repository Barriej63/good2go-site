
'use client';
import { useState } from 'react';

export default function Page(){
  const [status,setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);
    try{
      const res = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
      if(!res.ok) throw new Error('Request failed');
      setStatus('sent'); form.reset();
    }catch{
      setStatus('error');
    }
  }
  return (
    <section className="py-12 max-w-2xl">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="prose-muted mt-2">Email <a className="underline" href="mailto:help@good2go-rth.com">help@good2go-rth.com</a> or use the form.</p>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <input name="name" required placeholder="Your name" className="rounded-xl border border-zinc-300 px-4 py-3" />
        <input name="email" type="email" required placeholder="Email" className="rounded-xl border border-zinc-300 px-4 py-3" />
        <input name="org" placeholder="Organisation (optional)" className="rounded-xl border border-zinc-300 px-4 py-3" />
        <textarea name="message" required placeholder="How can we help?" className="rounded-xl border border-zinc-300 px-4 py-3 min-h-32" />
        <button disabled={status==='sending'} className="inline-flex items-center rounded-xl border border-g2g-primary bg-g2g-primary px-5 py-3 text-white shadow-soft hover:opacity-95">
          {status==='sending' ? 'Sending…' : 'Request Demo'}
        </button>
        {status==='sent' && <div className="text-emerald-600">Thanks — we’ll be in touch.</div>}
        {status==='error' && <div className="text-red-600">Sorry, something went wrong.</div>}
      </form>
    </section>
  );
}
