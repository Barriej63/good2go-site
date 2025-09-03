'use client';

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        setMessage("✅ Thanks, your message has been sent. We’ll be in touch soon.");
        form.reset();
      } else {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err: any) {
      console.error("Contact form error:", err);
      setStatus("error");
      setMessage("❌ Sorry, something went wrong. Please try again later.");
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-slate-900">
      <h1 className="text-3xl font-semibold tracking-tight mb-6">Contact Us</h1>
      {/* Branded banner */}
<div className="mb-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center shadow-md">
  <h2 className="text-xl font-semibold text-white">
    Recover Smart. Return Strong.
  </h2>
  <p className="mt-2 text-blue-100 text-sm">
    Your partner in safe, evidence-based concussion recovery.
  </p>
</div>

      <p className="mb-8 text-slate-600">
        Have questions about Good2Go or want to request a demo? Fill out the form
        below and our team will respond within one business day.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 rounded-2xl border border-slate-200 shadow-lg"
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
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {status === "loading" ? "Sending…" : "Send"}
          </button>
        </div>
      </form>

      {/* Confirmation/Error message */}
      {message && (
        <p
          className={`mt-4 text-sm ${
            status === "success" ? "text-emerald-700" : "text-rose-600"
          }`}
        >
          {message}
        </p>
      )}
    </main>
  );
}
