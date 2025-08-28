import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

const clean = (v: unknown) =>
  typeof v === 'string' ? v.replace(/[<>]/g, '').trim().slice(0, 4000) : '';

export async function POST(req: NextRequest) {
  try {
    let payload: Record<string, any> = {};
    const type = req.headers.get('content-type') || '';
    if (type.includes('application/json')) {
      payload = await req.json();
    } else {
      const form = await req.formData();
      payload = Object.fromEntries(form as any);
    }

    if (payload.website) return NextResponse.json({ ok: true }); // honeypot

    const name = clean(payload.name);
    const email = clean(payload.email);
    const company = clean(payload.company);
    const message = clean(payload.message);
    const topic = clean(payload.topic || '');
    const context = clean(payload.context || 'good2go');

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const to = process.env.SENDGRID_TO || '';
    const from = process.env.SENDGRID_FROM || '';
    if (!to || !from || !(process.env.SENDGRID_API_KEY || '')) {
      return NextResponse.json({ ok: false, error: 'Email not configured' }, { status: 500 });
    }

    const subject = topic ? `Good2Go Contact: ${topic}` : 'Good2Go Contact Form';
    await sgMail.send({
      to,
      from,
      subject,
      replyTo: email,
      text: `Context: ${context}\nFrom: ${name} <${email}>\nCompany: ${company || '-'}\n\n${message}`,
      html: `<div style="font-family:Inter,ui-sans-serif,system-ui;line-height:1.6">
              <h2 style="margin:0 0 8px">New contact request</h2>
              <p><strong>Context:</strong> ${context}</p>
              ${topic ? `<p><strong>Topic:</strong> ${topic}</p>` : ''}
              <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
              <p style="margin:12px 0 4px"><strong>Message:</strong></p>
              <p style="white-space:pre-wrap">${message}</p>
            </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('SendGrid contact error', e);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}
