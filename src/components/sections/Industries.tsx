import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CamFrame } from '@/components/ui/CamFrame';
import { Reveal } from '@/components/ui/Reveal';
import { INDUSTRIES, OTHER_VERTICALS } from '@/lib/content';

export function Industries() {
  return (
    <Section id="industries">
      <SectionHeading
        eyebrow="Who we protect"
        title={
          <>
            Built for the businesses{' '}
            <span className="text-glow">theft targets most</span>
          </>
        }
        description="High-traffic, high-shrink locations where a few seconds of real-time response prevents real losses."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {INDUSTRIES.map((industry, i) => (
          <Reveal key={industry.title} delay={(i % 2) * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
              <CamFrame
                src={industry.image}
                alt={`${industry.title} monitored by OptiGuard`}
                label={industry.feedLabel}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="aspect-[16/9] w-full rounded-none border-0"
              />
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="text-xl font-semibold">{industry.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{industry.blurb}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Also monitoring
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {OTHER_VERTICALS.map((v) => (
              <li
                key={v}
                className="rounded-full border border-border bg-bg/60 px-4 py-1.5 text-sm text-ink/80"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
