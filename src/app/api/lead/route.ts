import { NextResponse } from 'next/server';

/**
 * Lead capture endpoint.
 *
 * The browser POSTs the contact form here (same-origin, no CORS). We validate
 * server-side and forward to a Google Apps Script Web App, which appends the
 * lead to a Google Sheet and emails a notification. The webhook URL is kept in
 * an env var so it never ships in the client bundle.
 *
 * Set LEAD_WEBHOOK_URL in .env.local — see README and google-apps-script/Code.gs.
 */

export const runtime = 'nodejs';

type LeadPayload = {
  name?: string;
  business?: string;
  phone?: string;
  email?: string;
  type?: string;
  message?: string;
};

export async function POST(request: Request) {
  let data: LeadPayload;
  try {
    data = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const name = (data.name ?? '').trim();
  const phone = (data.phone ?? '').trim();
  const email = (data.email ?? '').trim();

  if (!name) {
    return NextResponse.json({ ok: false, error: 'Please add your name.' }, { status: 422 });
  }
  if (!phone && !email) {
    return NextResponse.json(
      { ok: false, error: 'Add a phone number or email so we can reach you.' },
      { status: 422 },
    );
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    console.error('LEAD_WEBHOOK_URL is not set — cannot forward lead.');
    return NextResponse.json(
      { ok: false, error: 'Lead capture isn’t configured yet. Please use WhatsApp or email.' },
      { status: 500 },
    );
  }

  const payload = {
    name,
    business: (data.business ?? '').trim(),
    phone,
    email,
    type: (data.type ?? '').trim(),
    message: (data.message ?? '').trim(),
    source: 'website-contact-form',
    submittedAt: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error('Lead webhook failed:', err);
    return NextResponse.json(
      { ok: false, error: 'We couldn’t submit your details. Please try WhatsApp or email.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
