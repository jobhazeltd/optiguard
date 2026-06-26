import Image from 'next/image';
import { cn } from '@/lib/utils';

type CamFrameProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  /** Sweep a subtle scanline across the feed (used sparingly, e.g. hero). */
  scan?: boolean;
  sizes?: string;
};

/**
 * Signature element. Wraps an image to look like a live operator feed:
 * cyan corner brackets, a monospaced CAM label, a pulsing LIVE indicator and
 * an optional scanline — mirroring the real overlays in OptiGuard's footage.
 */
export function CamFrame({
  src,
  alt,
  label,
  className,
  priority = false,
  scan = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: CamFrameProps) {
  return (
    <figure
      className={cn(
        'cam-frame group relative overflow-hidden rounded-xl border border-border bg-card',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {/* Readability gradient */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg/70" />

      {scan && <div aria-hidden className="scanline animate-scan" />}

      {/* CAM label */}
      <figcaption className="absolute left-3 top-3 flex items-center gap-2 rounded-md border border-border/80 bg-bg/70 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink/90 backdrop-blur-sm">
        {label}
      </figcaption>

      {/* LIVE indicator */}
      <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-md border border-primary/40 bg-bg/70 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-primary backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
        Live
      </span>
    </figure>
  );
}
