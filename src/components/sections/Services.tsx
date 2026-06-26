import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlowCard } from '@/components/ui/GlowCard';
import { Reveal } from '@/components/ui/Reveal';
import { SERVICES } from '@/lib/content';

export function Services() {
  return (
    <Section id="services" grid>
      <SectionHeading
        eyebrow="What we do"
        title={
          <>
            A complete monitoring service,{' '}
            <span className="text-glow">not just another camera</span>
          </>
        }
        description="Recordings tell you what you already lost. OptiGuard puts trained operators on your live feeds so threats are caught — and stopped — as they happen."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 0.06}>
            <GlowCard className="group h-full p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-bg">
                <service.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description}</p>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
