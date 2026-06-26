import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type GlowCardProps = {
  children: ReactNode;
  className?: string;
  /** Lift + cyan ring on hover. */
  interactive?: boolean;
};

/** The core glassmorphism surface used across services, features and stats. */
export function GlowCard({ children, className, interactive = true }: GlowCardProps) {
  return (
    <div
      className={cn(
        'glass relative overflow-hidden rounded-2xl shadow-card transition-all duration-300',
        interactive &&
          'hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow',
        className,
      )}
    >
      {children}
    </div>
  );
}
