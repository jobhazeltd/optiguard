import { cn } from '@/lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: 'primary' | 'neutral' | 'live';
};

export function Badge({ children, className, tone = 'primary' }: BadgeProps) {
  const tones = {
    primary: 'border-primary/40 bg-primary/10 text-primary',
    neutral: 'border-border bg-card text-muted',
    live: 'border-primary/40 bg-primary/10 text-primary',
  } as const;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em]',
        tones[tone],
        className,
      )}
    >
      {tone === 'live' && (
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
      )}
      {children}
    </span>
  );
}
