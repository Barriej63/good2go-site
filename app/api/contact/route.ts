// app/api/contact/route.ts
import type { NextRequest } from "next/server";
import sgMail from "@sendgrid/mail";

export const runtime = "nodejs";           // ensure Node runtime on Vercel
export const dynamic = "force-dynamic";    // don't cache the API route

function ok(body: unknown, init: number = 200) {
  return new Response(JSON.stringify(body), {
    status: init,
    headers: { "content-type": "application/json" },
  });
}

export async function OPTIONS() {
  // Allow simple form POSTs
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    // honeypot (add <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" /> if you like)
    const bot = (form.get("website") as string | null)?.trim();
    if (bot) return ok({ ok: true }); // silently drop bots

    const name = (form.get("name") as string | null)?.trim() || "";
    const email = (form.get("email") as string | null)?.trim() || "";
    const company = (form.get("company") as string | null)?.trim() || "";
    const message = (form.get("message") as string | null)?.trim() || "";

    if (!name || !email || !message) {
      return ok({ error: "Missing required fields." }, 400);
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) return ok({ error: "Invalid email address." }, 400);

    const key = process.env.SENDGRID_API_KEY;
    const from = process.env.SENDGRID_FROM;
    const to = process.env.SENDGRID_TO;

    if (!key || !from || !to) {
      console.error("Contact API misconfigured", {
        hasKey: !!key,
        hasFrom: !!from,
        hasTo: !!to,
      });
      // Return a clean message to the UI, but keep details in logs.
      return ok(
        { error: "Email service is not configured. Please try again later." },
        500
      );
    }

    sgMail.setApiKey(key);

    const html = `
      <h2>New Good2Go Contact</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <small>Sent ${new Date().toISOString()}</small>
    `;

    await sgMail.send({
      to,
      from,                 // must be a verified sender/domain in SendGrid
      subject: `Good2Go Contact: ${name}`,
      html,
      replyTo: email,       // lets you reply directly to the sender
    });

    return ok({ ok: true });
  } catch (err: any) {
    console.error("Contact API error:", err?.response?.body || err?.message || err);
    return ok({ error: "Failed to send message." }, 500);
  }
}

// Basic HTML escaping to avoid breaking markup
function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (ch) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[ch]!)
  );
}

