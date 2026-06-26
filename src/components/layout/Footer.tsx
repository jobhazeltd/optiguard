import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Logo } from '@/components/common/Logo';
import {
  SITE,
  FOOTER_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  WHATSAPP_URL,
} from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="container-rail py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              24/7 live remote CCTV monitoring and active loss prevention for businesses
              across the {SITE.serviceArea}. {SITE.tagline}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={PHONE_HREF} className="flex items-center gap-2.5 text-ink/90 hover:text-primary">
                <FiPhone className="h-4 w-4 text-primary" aria-hidden />
                <span className="font-mono">{PHONE_DISPLAY}</span>
              </a>
              <a href={EMAIL_HREF} className="flex items-center gap-2.5 text-ink/90 hover:text-primary">
                <FiMail className="h-4 w-4 text-primary" aria-hidden />
                <span className="break-all">{EMAIL}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-ink/90 hover:text-primary"
              >
                <FaWhatsapp className="h-4 w-4 text-primary" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-ink/80 transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Remote CCTV Monitoring · {SITE.serviceArea}
          </p>
        </div>
      </div>
    </footer>
  );
}
