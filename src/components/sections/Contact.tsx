import Image from 'next/image';
import { FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from './ContactForm';
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  WHATSAPP_URL,
  SITE,
} from '@/lib/site';

const METHODS = [
  { icon: FiPhone, label: 'Call us', value: PHONE_DISPLAY, href: PHONE_HREF, external: false },
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Message our team', href: WHATSAPP_URL, external: true },
  { icon: FiMail, label: 'Email', value: EMAIL, href: EMAIL_HREF, external: false },
];

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="flex flex-col gap-6">
            <Eyebrow>Get started</Eyebrow>
            <h2 className="text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
              Try OptiGuard free for <span className="text-glow">3 days</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              See live monitoring on your own cameras before you commit. Tell us about your
              business and we&apos;ll get your trial running — usually within a day.
            </p>

            <div className="flex flex-col gap-3">
              {METHODS.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass group flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-primary/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <m.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{m.label}</span>
                    <span className="text-sm font-medium text-ink group-hover:text-primary">{m.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="live">24/7 Monitoring</Badge>
              <Badge tone="neutral">
                <FiClock className="h-3 w-3" aria-hidden /> {SITE.serviceArea}
              </Badge>
            </div>

            {/* Branded operator image */}
            <div className="relative mt-2 hidden overflow-hidden rounded-2xl border border-border shadow-card sm:block">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/contact-operator.jpg"
                  alt="OptiGuard Monitoring operator on a support call — We Keep You Ahead"
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div id="contact-form">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
