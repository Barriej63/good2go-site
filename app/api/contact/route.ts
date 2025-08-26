import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
  try {
    const { name, email, org, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }
    const apiKey = process.env.SENDGRID_API_KEY;
    const to = process.env.SENDGRID_TO;
    const from = process.env.SENDGRID_FROM || to;
    if (!apiKey || !to) {
      return NextResponse.json({ ok: false, error: 'Email not configured' }, { status: 500 });
    }
    sgMail.setApiKey(apiKey);
    await sgMail.send({
      to,
      from,
      subject: `Good2Go Demo Request — ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nOrg: ${org || '-'}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
