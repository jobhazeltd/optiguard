import { GlowCard } from '@/components/ui/GlowCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Reveal } from '@/components/ui/Reveal';
import { STATS, INDUSTRIES, OTHER_VERTICALS } from '@/lib/content';

export function TrustStats() {
  const verticals = [...INDUSTRIES.map((i) => i.title), ...OTHER_VERTICALS];

  return (
    <section className="border-y border-border bg-card/30">
      <div className="container-rail py-12">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Protecting high-shrink businesses nationwide
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {verticals.map((v) => (
              <li
                key={v}
                className="rounded-full border border-border bg-bg/60 px-3.5 py-1.5 text-xs text-ink/80"
              >
                {v}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <GlowCard className="h-full p-6 text-center" interactive={false}>
                <stat.icon className="mx-auto mb-3 h-5 w-5 text-primary" aria-hidden />
                <div className="font-display text-3xl font-bold text-glow md:text-4xl">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
