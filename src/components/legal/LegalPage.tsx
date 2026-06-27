import type { ReactNode } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { Eyebrow } from '@/components/ui/Eyebrow';

/**
 * Shared layout for legal pages (Privacy, Terms, Refund). Keeps a single
 * source of truth for heading, "last updated" line and readable prose styling
 * on the dark theme — so every legal page stays visually consistent.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="container-rail py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
        >
          <FiArrowLeft className="h-4 w-4" aria-hidden /> Back to home
        </Link>

        <div className="mt-8">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Last updated: {updated}
          </p>
        </div>

        <div
          className="
            mt-10 space-y-5 text-sm leading-relaxed text-muted
            [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary-glow
            [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink
            [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink
            [&_strong]:text-ink
            [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:marker:text-primary
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
