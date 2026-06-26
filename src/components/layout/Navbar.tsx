'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-border bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <nav className="container-rail flex h-16 items-center justify-between md:h-[4.5rem]">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-sm font-medium text-ink/90 transition-colors hover:text-primary"
          >
            <FiPhone className="h-4 w-4 text-primary" aria-hidden />
            <span className="font-mono tracking-tight">{PHONE_DISPLAY}</span>
          </a>
          <Button href="#contact" size="md">
            Free 3-Day Trial
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink md:hidden"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-bg/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden',
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="container-rail flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-card hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Button href={WHATSAPP_URL} variant="secondary" onClick={() => setOpen(false)}>
              <FaWhatsapp className="h-4 w-4" aria-hidden /> WhatsApp
            </Button>
            <Button href="#contact" onClick={() => setOpen(false)}>
              Free Trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
