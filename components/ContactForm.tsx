"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("context", "website");

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Failed to send");
      }
      setStatus("ok");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label className="text-xs font-medium text-slate-700">Full name</label>
        <input name="name" required placeholder="Jane Doe"
               className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
      </div>

      <div className="grid gap-1">
        <label className="text-xs font-medium text-slate-700">Email</label>
        <input type="email" name="email" required placeholder="jane@company.com"
               className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
      </div>

      <div className="grid gap-1">
        <label className="text-xs font-medium text-slate-700">Company (optional)</label>
        <input name="company" placeholder="Company Inc."
               className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
      </div>

      <div className="grid gap-1">
        <label className="text-xs font-medium text-slate-700">Message</label>
        <textarea name="message" required rows={5} placeholder="Tell us about your needs…"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-slate-500 inline-flex items-center gap-1.5">
          <span>We’ll reply within one business day.</span>
        </div>
        <button disabled={status==="sending"}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-blue-600/10 hover:bg-blue-700 disabled:opacity-50">
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </div>

      {status === "ok" && (
        <p className="text-xs text-emerald-700">
          Thanks — your message has been sent. We’ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-rose-700">Unable to send: {error}</p>
      )}
    </form>
  );
}
