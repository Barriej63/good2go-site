import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  const data = await req.formData();
  console.log('Contact form', Object.fromEntries(data.entries()));
  return NextResponse.json({ ok: true });
}
