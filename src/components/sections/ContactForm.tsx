'use client';

import { useState } from 'react';
import { FiSend, FiCheckCircle, FiLoader } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_URL, EMAIL } from '@/lib/site';
import { INDUSTRIES, OTHER_VERTICALS } from '@/lib/content';
import { cn } from '@/lib/utils';

const BUSINESS_TYPES = [...INDUSTRIES.map((i) => i.title), ...OTHER_VERTICALS, 'Other'];

const inputBase =
  'w-full rounded-lg border border-border bg-bg/60 px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-primary focus:outline-none';

type Fields = {
  name: string;
  business: string;
  phone: string;
  email: string;
  type: string;
  message: string;
};

type Sent = null | 'whatsapp' | 'details';

const empty: Fields = { name: '', business: '', phone: '', email: '', type: '', message: '' };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState<Sent>(null);

  const set =
    (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [key]: e.target.value }));

  // Shared validation for both actions.
  const validate = () => {
    if (!fields.name.trim()) {
      setError('Please add your name.');
      return false;
    }
    if (!fields.phone.trim() && !fields.email.trim()) {
      setError('Add a phone number or email so we can reach you.');
      return false;
    }
    setError(null);
    return true;
  };

  const buildMessage = () =>
    [
      `New free-trial request — OptiGuard Monitoring`,
      `Name: ${fields.name}`,
      fields.business && `Business: ${fields.business}`,
      fields.type && `Type: ${fields.type}`,
      fields.phone && `Phone: ${fields.phone}`,
      fields.email && `Email: ${fields.email}`,
      fields.message && `Message: ${fields.message}`,
    ]
      .filter(Boolean)
      .join('\n');

  // "Request free trial" → open WhatsApp prefilled (also fires on Enter).
  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || !validate()) return;
    const text = encodeURIComponent(buildMessage());
    window.open(`${WHATSAPP_URL}?text=${text}`, '_blank', 'noopener,noreferrer');
    setSent('whatsapp');
  };

  // "Send my details" → POST to /api/lead (Google Sheet + email notification).
  const handleSend = async () => {
    if (submitting || !validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Something went wrong. Please try WhatsApp or email.');
        return;
      }
      setSent('details');
    } catch {
      setError('Network error. Please try WhatsApp or email.');
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    const isWhatsApp = sent === 'whatsapp';
    return (
      <div className="glass flex flex-col items-center gap-4 rounded-2xl p-10 text-center shadow-glow">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <FiCheckCircle className="h-7 w-7" aria-hidden />
        </span>
        <h3 className="text-xl font-semibold">{isWhatsApp ? 'Request started' : 'Details sent'}</h3>
        <p className="max-w-sm text-sm text-muted">
          {isWhatsApp ? (
            <>
              We&apos;ve opened WhatsApp with your details prefilled — send the message and our team
              will set up your free 3-day trial. Prefer email? Reach us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">
                {EMAIL}
              </a>
              .
            </>
          ) : (
            <>
              Thanks{fields.name ? `, ${fields.name.split(' ')[0]}` : ''} — your details are on their
              way and our team will reach out shortly to set up your free 3-day trial. Need us
              sooner? Message us on{' '}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                WhatsApp
              </a>
              .
            </>
          )}
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            setSent(null);
            setFields(empty);
          }}
        >
          Start another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleWhatsApp} noValidate className="glass rounded-2xl p-6 shadow-card md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted">Full name *</span>
          <input className={inputBase} value={fields.name} onChange={set('name')} placeholder="Jordan Reyes" autoComplete="name" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted">Business name</span>
          <input className={inputBase} value={fields.business} onChange={set('business')} placeholder="Prestige Energy" autoComplete="organization" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted">Phone</span>
          <input className={inputBase} value={fields.phone} onChange={set('phone')} placeholder="(555) 123-4567" inputMode="tel" autoComplete="tel" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted">Email</span>
          <input className={inputBase} value={fields.email} onChange={set('email')} placeholder="you@business.com" inputMode="email" autoComplete="email" />
        </label>
        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="text-xs font-medium text-muted">Business type</span>
          <select className={cn(inputBase, 'appearance-none')} value={fields.type} onChange={set('type')}>
            <option value="">Select a business type</option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t} className="bg-card">{t}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="text-xs font-medium text-muted">Anything we should know?</span>
          <textarea className={cn(inputBase, 'min-h-24 resize-y')} value={fields.message} onChange={set('message')} placeholder="Number of cameras, locations, current concerns…" />
        </label>
      </div>

      {error && <p className="mt-4 text-sm text-primary" role="alert">{error}</p>}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
          <FaWhatsapp className="h-4 w-4" aria-hidden /> Request free trial
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto"
          onClick={handleSend}
          disabled={submitting}
        >
          {submitting ? (
            <>
              <FiLoader className="h-4 w-4 animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            <>
              <FiSend className="h-4 w-4" aria-hidden /> Send my details
            </>
          )}
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted">
        No obligation. We&apos;ll confirm your free 3-day trial and walk you through setup.
      </p>
    </form>
  );
}
