import { FiChevronRight } from 'react-icons/fi';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';
import { VERIFICATION_PIPELINE, PIPELINE_STAT } from '@/lib/content';

export function VerificationPipeline() {
  return (
    <Section id="pipeline" grid>
      <SectionHeading
        eyebrow="Verification Pipeline"
        title={
          <>
            Hybrid AI edge &amp; 24/7{' '}
            <span className="text-glow">command center verification</span>
          </>
        }
        description="Other systems flood you with false alarms. OptiGuard filters the noise on the camera itself, then puts a human on every real threat — so what reaches the police is already verified."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {VERIFICATION_PIPELINE.map((stage, i) => (
          <Reveal key={stage.step} delay={i * 0.08}>
            <div className="relative h-full">
              <GlowCard className="h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <stage.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {stage.step}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{stage.description}</p>
              </GlowCard>

              {/* Flow arrow between stages (desktop) */}
              {i < VERIFICATION_PIPELINE.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-3.5 top-1/2 z-10 hidden -translate-y-1/2 text-primary lg:block"
                >
                  <FiChevronRight className="h-6 w-6" />
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-7 text-center sm:flex-row sm:justify-center sm:gap-5 sm:text-left">
          <span className="text-5xl font-semibold text-glow">{PIPELINE_STAT.value}</span>
          <span className="max-w-md text-sm leading-relaxed text-muted">{PIPELINE_STAT.label}</span>
        </div>
      </Reveal>
    </Section>
  );
}
