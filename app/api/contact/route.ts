// app/api/contact/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Force Node runtime (SendGrid needs Node, not Edge)
export const runtime = 'nodejs';

const API_KEY = process.env.SENDGRID_API_KEY;
const FROM = process.env.SENDGRID_FROM;
const TO = process.env.SENDGRID_TO;

if (!API_KEY || !FROM || !TO) {
  // surface misconfig early in logs
  console.error('Missing SENDGRID_* env vars');
}

sgMail.setApiKey(API_KEY || '');

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const company = String(form.get('company') || '');
    const message = String(form.get('message') || '');

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const msg = {
      to: TO!,
      from: FROM!, // must be a verified sender or domain in SendGrid
      replyTo: email,
      subject: `Good2Go contact: ${name}`,
      text: `From: ${name} <${email}>\nCompany: ${company}\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Company:</strong> ${company || '—'}</p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // SendGrid puts useful info on err.response.body
    console.error('Contact API error:', err?.response?.body || err);
    return NextResponse.json({ error: 'Mail send failed.' }, { status: 500 });
  }
}
