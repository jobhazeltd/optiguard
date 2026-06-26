import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Render a faint grid texture behind the section content. */
  grid?: boolean;
};

/** Vertical rhythm + content rail wrapper used by every page section. */
export function Section({ id, children, className, grid = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-24 py-20 md:py-28', className)}
    >
      {grid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-[0.35] [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]"
        />
      )}
      <div className="container-rail relative">{children}</div>
    </section>
  );
}
