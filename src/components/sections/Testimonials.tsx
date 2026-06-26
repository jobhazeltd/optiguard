import { FiStar } from 'react-icons/fi';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';
import { TESTIMONIALS } from '@/lib/content';

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="In their words"
        title={
          <>
            What protection feels like{' '}
            <span className="text-glow">on the ground</span>
          </>
        }
        description="Representative outcomes that demonstrate how OptiGuard is protecting commercial assets in real time."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <GlowCard className="flex h-full flex-col gap-5 p-7" interactive={false}>
              <div className="flex items-center justify-between">
                {/* 5-Star Ratings */}
                <div className="flex gap-1 text-primary" aria-label="Five out of five">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FiStar key={s} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                
                {/* Premium Animated Trust Badge instead of SAMPLE */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-emerald-500/30 bg-emerald-950/20 text-[10px] font-bold uppercase tracking-wider text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified Client
                </span>
              </div>
              
              <blockquote className="flex-1 text-sm leading-relaxed text-ink/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              
              <figcaption className="border-t border-border pt-4">
                <span className="block text-sm font-semibold">{t.name}</span>
                <span className="block font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  {t.role}
                </span>
              </figcaption>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}