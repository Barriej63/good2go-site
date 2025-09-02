import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// make sure SENDGRID_API_KEY is in your Vercel project settings
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.formData();

    const name = body.get("name")?.toString() || "Unknown";
    const email = body.get("email")?.toString() || "No email";
    const company = body.get("company")?.toString() || "N/A";
    const message = body.get("message")?.toString() || "";

    // configure email
    const msg = {
      to: "help@good2go-rth.com", // 👈 your support inbox
      from: "help@good2go-rth.com", // 👈 must be a verified SendGrid sender
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err: any) {
    console.error("SendGrid error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
