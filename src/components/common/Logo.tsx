import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  href?: string | null;
};

/**
 * OptiGuard mark recreated as inline SVG (scales crisply, no image request):
 * a rounded security shield enclosing a camera-aperture "eye".
 */
export function Logo({ className, showWordmark = true, href = '/' }: LogoProps) {
  const mark = (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 40 44"
        width="32"
        height="35"
        role="img"
        aria-label="OptiGuard Monitoring"
        className="shrink-0 drop-shadow-[0_0_10px_rgba(6,212,255,0.45)]"
      >
        <defs>
          <linearGradient id="og-shield" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06D4FF" />
            <stop offset="100%" stopColor="#0A6E97" />
          </linearGradient>
        </defs>
        <path
          d="M20 1.5 3.5 8.2v12.4c0 9.9 6.8 17.2 16.5 21.4 9.7-4.2 16.5-11.5 16.5-21.4V8.2L20 1.5Z"
          fill="url(#og-shield)"
          stroke="#00E5FF"
          strokeWidth="1.1"
        />
        <circle cx="20" cy="19" r="8.2" fill="#030B17" />
        <circle cx="20" cy="19" r="8.2" fill="none" stroke="#CFefff" strokeWidth="1.2" opacity="0.85" />
        <circle cx="20" cy="19" r="3" fill="#06D4FF" />
        <circle cx="22.4" cy="16.6" r="1" fill="#ffffff" opacity="0.9" />
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-ink">
            OptiGuard
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-primary">
            Monitoring
          </span>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label="OptiGuard Monitoring — home" className="inline-flex">
        {mark}
      </Link>
    );
  }
  return mark;
}
