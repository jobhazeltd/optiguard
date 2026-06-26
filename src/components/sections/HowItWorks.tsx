import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { STEPS } from '@/lib/content';

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title={
          <>
            Live in days — <span className="text-glow">protected in real time</span>
          </>
        }
        description="No installers, no new equipment. Three steps from your current cameras to a watched, defended business."
      />

      <div className="relative mt-16">
        {/* Connecting line on desktop */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
        />

        <ol className="grid gap-8 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} as="li">
              <div className="relative flex flex-col gap-4">
                <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-border bg-card shadow-card">
                  <span className="font-mono text-2xl font-bold text-primary">{step.number}</span>
                  <span className="absolute inset-0 rounded-2xl shadow-glow opacity-60" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
