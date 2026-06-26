import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';
import { DIFFERENTIATORS } from '@/lib/content';

export function WhyOptiGuard() {
  return (
    <Section id="why-optiguard" grid>
      <SectionHeading
        eyebrow="Why OptiGuard"
        title={
          <>
            The difference between footage{' '}
            <span className="text-glow">and protection</span>
          </>
        }
        description="Anyone can record an incident. OptiGuard is built to prevent it — and to prove what happened when it counts."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DIFFERENTIATORS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.06}>
            <GlowCard className="flex h-full items-start gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
