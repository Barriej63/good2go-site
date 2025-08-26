import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

type Payload = { name: string; email: string; org?: string; message: string };

export async function POST(request: Request) {
  try {
    const { name, email, org, message } = (await request.json()) as Payload;
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const toEnv = process.env.SENDGRID_TO;
    const fromEnv = process.env.SENDGRID_FROM ?? toEnv;

    if (!apiKey || !toEnv || !fromEnv) {
      return NextResponse.json({ ok: false, error: 'Email not configured' }, { status: 500 });
    }

    sgMail.setApiKey(apiKey);

    // Narrow the types to plain strings for SendGrid typings
    const to: string = toEnv as string;
    const from: string = fromEnv as string;

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