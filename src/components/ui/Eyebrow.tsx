import { cn } from '@/lib/utils';

/** Monospaced kicker label — ties into the CCTV terminal vernacular. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-primary',
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow animate-pulse-dot" />
      {children}
    </span>
  );
}
