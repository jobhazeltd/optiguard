import { FiStar } from 'react-icons/fi';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Badge } from '@/components/ui/Badge';
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
        description="Representative scenarios that mirror the outcomes OptiGuard is built to deliver."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <GlowCard className="flex h-full flex-col gap-5 p-7" interactive={false}>
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-primary" aria-label="Five out of five">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FiStar key={s} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <Badge tone="neutral">Sample</Badge>
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

      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted">
          Note: the quotes above are illustrative samples, not statements from named
          customers. They will be replaced with verified client testimonials before launch.
        </p>
      </Reveal>
    </Section>
  );
}
